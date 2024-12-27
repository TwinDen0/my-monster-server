import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Telegram } from 'telegraf';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(userDto: UserDto) {
    const createdUser = await this.prisma.user.create({
      data: userDto,
    });
    return createdUser;
  }

  async delete(telegramId: string) {
    const createdUser = await this.prisma.user.delete({
      where: {
        telegramId,
      },
    });
    return createdUser;
  }

  async getUser(telegramId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        telegramId,
      },
      include: {
        collection: {
          include: {
            monster: true,
          },
        },
      },
    });

    const now = new Date();

    if (user && user.collection) {
      for (const collection of user.collection) {
        if (collection.isEvo && collection.monster) {
          const { updateAt } = collection;
          const { hunger } = collection.monster;

          // Вычисляем время, прошедшее с последнего обновления
          const timeDiff = now.getTime() - new Date(updateAt).getTime(); // миллисекунды
          const hoursPassed = Math.floor(timeDiff / (1000 * 60 * 60)); // преобразуем в часы

          // Обновляем hungerLevel
          collection.hungerLevel += hoursPassed;

          // Проверяем, если голод превышает максимум
          if (collection.hungerLevel >= hunger) {
            collection.isSleep = true;
          }
        }
      }

      // Сохранение обновленных значений в базу данных
      await Promise.all(
        user.collection.map((collection) =>
          this.prisma.collection.update({
            where: { id: collection.id },
            data: {
              hungerLevel: collection.hungerLevel,
              isSleep: collection.isSleep,
            },
          }),
        ),
      );
    }

    console.log('Пришел: ', telegramId, ' Вернулся: ', user);
    return user;
  }

  async getUserAvatarUrl(userId: number, bot: Telegram) {
    const userProfile = await bot.getUserProfilePhotos(userId);

    if (!userProfile.photos.length) {
      return '';
    }

    const fileId = userProfile.photos[0][0].file_id;
    const file = await bot.getFile(fileId);
    const filePatch = file.file_path;

    return `https://api.telegram.org/file/bot${process.env.BOT_API_TOKEN}/${filePatch}`;
  }

  async getAllUser() {
    const users = await this.prisma.user.findMany();
    console.log(users);
    return users;
  }
}

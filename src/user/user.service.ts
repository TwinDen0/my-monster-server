import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Telegram } from 'telegraf';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async updatePhoto(telegramId: string, userAvatar: string) {
    const updateUser = await this.prisma.user.update({
      where: {
        telegramId,
      },
      data: {
        userAvatar,
      },
    });
    return updateUser;
  }

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
            monstersFood: {
              include: {
                food: true,
              },
            },
          },
        },
      },
    });

    const now = new Date();

    // поменять день
    // проверить не кончилась ли еда
    // // зайти в коллекцию еду
    // // отнять у первого time в зависимости от timeDiff
    // // удалить если время == 0

    if (user && user.collection) {
      for (const collection of user.collection) {
        if (collection.isEvo && collection.monster) {
          // && !collection.isStop
          const { updateAt, createdAt, days } = collection;

          const timeDiffCreate = now.getTime() - new Date(createdAt).getTime();
          const daysPassed = Math.floor(timeDiffCreate / (1000 * 60 * 60 * 24));
          console.log('дней прошло', daysPassed);

          let newDay = false;
          if (days < daysPassed) {
            newDay = true;
          }

          let isHunger = false;
          let newMonstersFood = collection.monstersFood;

          // Вычисляем время, прошедшее с последнего обновления
          const timeDiff = now.getTime() - new Date(updateAt).getTime(); // миллисекунды
          const minutesPassed = timeDiff / (1000 * 60);

          console.log('минут прошло', minutesPassed);
          console.log('еды ', newMonstersFood.length);
          console.log('до голода: ', collection.foodMinutes);

          if (newMonstersFood.length > 0) {
            let remainder = minutesPassed; // Начинаем с общего количества минут
            while (remainder > 0 && newMonstersFood.length > 0) {
              console.log('цикл');
              if (collection.foodMinutes - remainder < 0) {
                console.log('не хватает!');
                // Если текущий элемент не может выдержать остаток, вычитаем его время
                remainder -= collection.foodMinutes; // Уменьшаем остаток
                //удалить из бд его
                console.log('остаток', remainder);
                await this.prisma.monstersFood.delete({
                  where: {
                    id: newMonstersFood[0].id,
                  },
                });

                console.log('удалил еду: ', newMonstersFood[0].id);

                console.log('было еды ', newMonstersFood.length);
                newMonstersFood.shift(); // Удаляем текущий элемент
                console.log('стало еды ', newMonstersFood.length);
                if (newMonstersFood.length > 0) {
                  collection.foodMinutes = newMonstersFood[0].food.time * 60;
                  console.log('новый минут ', collection.foodMinutes);
                } else {
                  console.log('еды нет');
                  collection.foodMinutes = 0;
                  isHunger = true;
                }
              } else {
                // Если текущий элемент может выдержать остаток, просто уменьшаем его время
                console.log('выдержал!');
                collection.foodMinutes -= remainder;
                remainder = 0; // Остаток теперь равен нулю, выходим из цикла
              }
            }

            if (remainder > 0) {
              isHunger = true;
            }
          } else {
            isHunger = true;
          }
          //ошибка
          collection.monstersFood = newMonstersFood;
          collection.isStop = isHunger;
          collection.days = daysPassed;
          collection.isNewDay = newDay;
          console.log('стало еды: ', collection.foodMinutes);
        }
      }
      // Сохранение обновленных значений в базу данных
      await Promise.all(
        user.collection.map(async (collection) => {
          return this.prisma.collection.update({
            where: { id: collection.id },
            data: {
              isStop: collection.isStop,
              days: collection.days,
              isNewDay: collection.isNewDay,
              foodMinutes: collection.foodMinutes,
            },
          });
        }),
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

    const fileId = userProfile.photos[userProfile.photos.length - 1][1].file_id;

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

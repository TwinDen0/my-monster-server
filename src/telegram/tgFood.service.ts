import { Injectable } from '@nestjs/common';
import { clearSession } from 'src/app.utils';
import { FoodDto } from 'src/food/dto/food.dto';
import { FoodService } from 'src/food/food.service';
import { yesOrNoButtons } from '../app.buttons';
import { Context } from '../context.interface';

@Injectable()
export class TgFoodService {
  constructor(private readonly foodService: FoodService) {}

  async createFood1(ctx: Context) {
    await ctx.reply(`Создание еды ⚙️`);
    await ctx.reply(
      `Введи:\nИмя\nИзображение(не забудь заранее его добавить)\nСытность (кол-во часов)\nЦена\nЦена в монетах?(true|false)\n\n!Напиши ингридиенты (кол-во):\n\nСлизь:\nЩупальца:\nРыба:\nГлаза:\nКрылья:\nМухи:\nКости:\n\n\n!В КОНЦЕ ОСТАВЛЯЙ ПУСТУЮ СТРОКУ С ЛЮБЫМ СЛОВОМ!\n`,
    );

    ctx.session.type = 'create_food';
    await ctx.reply(ctx.session.type);
  }

  async createFood2(message: string, ctx: Context) {
    const parts = message.split('\n').map((part) => part.trim());
    if (parts.length < 6) {
      await ctx.reply('Некорректные данные.');
      return;
    }

    let food: FoodDto = {
      name: parts[0],
      img: parts[1],
      time: Number(parts[2]),
      price: Number(parts[3]),
      isCoins: parts[4] == 'true',

      mucus: 0,
      tentacle: 0,
      fish: 0,
      eye: 0,
      wing: 0,
      fly: 0,
      bone: 0,
    };

    const ingredients = [
      'Слизь',
      'Щупальца',
      'Рыба',
      'Глаза',
      'Крылья',
      'Мухи',
      'Кости',
    ];

    ingredients.forEach((ingredient) => {
      const regex = new RegExp(`${ingredient}: (.*?)\n`);

      const match = message.match(regex);

      if (match) {
        const quantity = Number(match[1]);
        switch (ingredient) {
          case 'Слизь':
            food.mucus = quantity;
            break;
          case 'Щупальца':
            food.tentacle = quantity;
            break;
          case 'Рыба':
            food.fish = quantity;
            break;
          case 'Глаза':
            food.eye = quantity;
            break;
          case 'Крылья':
            food.wing = quantity;
            break;
          case 'Мухи':
            food.fly = quantity;
            break;
          case 'Кости':
            food.bone = quantity;
            break;
        }
      }
    });

    ctx.session.text = `${food.name}|${food.img}|${food.time}|${food.price}|${food.isCoins}|${food.mucus}|${food.tentacle}|${food.fish}|${food.eye}|${food.wing}|${food.fly}|${food.bone}`;

    await ctx.reply(
      `name: ${food.name},
img: ${food.img},
time: ${food.time},
price: ${food.price},
isCoins: ${food.isCoins},\n
mucus: ${food.mucus},
tentacle: ${food.tentacle},
fish: ${food.fish},
eye: ${food.eye},
wing: ${food.wing},
fly: ${food.fly},
bone: ${food.bone}`,
      yesOrNoButtons(),
    );
  }

  async createFood3(ctx: Context) {
    await ctx.reply(`Создаю продукт...`);
    const parts = ctx.session.text.split('|');

    let food: FoodDto = {
      name: parts[0],
      img: parts[1],
      time: Number(parts[2]),
      price: Number(parts[3]),
      isCoins: parts[4] == 'true',

      mucus: Number(parts[5]),
      tentacle: Number(parts[6]),
      fish: Number(parts[7]),
      eye: Number(parts[8]),
      wing: Number(parts[9]),
      fly: Number(parts[10]),
      bone: Number(parts[11]),
    };

    const createdFood = await this.foodService.createFood(food);
    console.log(createdFood);
    await ctx.reply(`Создал еду ${createdFood.id} ${createdFood.name}`);
    await clearSession(ctx);
  }
}

import { Injectable } from '@nestjs/common';
import { CollectionService } from 'src/collection/collection.service';
import { MonsterService } from 'src/monster/monster.service';
import { PrismaService } from 'src/prisma.service';
import { PackDto } from './dto/pack.dto';

@Injectable()
export class MarketService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly monsterService: MonsterService,
    private readonly collectionService: CollectionService,
  ) {}

  async createPack(packDto: PackDto) {
    const createdPack = await this.prisma.pack.create({
      data: packDto,
    });
    return createdPack;
  }

  async getAllPack() {
    return this.prisma.pack.findMany();
  }

  async getDailyCards() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999);

    const dailyCards = await this.prisma.dailyMonsters.findMany({
      where: {
        date: {
          gte: today,
          lte: endOfDay,
        },
      },
      include: {
        monster: true,
      },
    });

    const monsters = dailyCards.map((item) => {
      return item.monster;
    });

    const price = dailyCards.map((item) => {
      return {
        count: item.price,
        isCoins: item.isCoinsPrice,
      };
    });

    return {
      monsters,
      price,
    };
  }

  async getDropPack(packId: string, isCoinsPrice: string, tgId: string) {
    let isCoins = isCoinsPrice === '1';

    const pack = await this.prisma.pack.findUnique({
      where: {
        id: packId,
      },
    });

    const user = await this.prisma.user.findUnique({
      where: {
        telegramId: tgId,
      },
    });

    if (!pack || !user) {
      return { success: false, message: 'Pack or User not found' };
    }

    const amountToDeduct = isCoins ? pack.priceCoin : pack.priceCrystal;

    if (isCoins && user.coins < amountToDeduct) {
      return { success: false, message: 'Not enough coins' };
    } else if (!isCoins && user.crystals < amountToDeduct) {
      return { success: false, message: 'Not enough crystals' };
    }

    const dropCoins = this.getWeightedRandom(pack.coinMin, pack.coinMax);
    const dropCrystals = this.getWeightedRandom(
      pack.crystalMin,
      pack.crystalMax,
    );

    const randomValue = Math.random() * 100;
    const isDropMonster = randomValue <= pack.percentDropMonster;

    let dropMonster = null;
    if (isDropMonster) {
      dropMonster = await this.getRandomMonster(pack.monsters);
    }

    await this.prisma.user.update({
      where: { telegramId: tgId },
      data: {
        coins: (isCoins ? user.coins - amountToDeduct : user.coins) + dropCoins,
        crystals:
          (!isCoins ? user.crystals - amountToDeduct : user.crystals) +
          dropCrystals,
      },
    });

    if (dropMonster != null) {
      try {
        console.log(`Добавляю ${tgId} ${dropMonster.id}`);
        await this.collectionService.createUserMonster({
          leaderId: tgId,
          monsterId: dropMonster.id,
          name: 'Боб',
        });
      } catch (error) {
        return {
          success: false,
          message: 'Error add Monster in collection',
        };
      }
    } else {
      return {
        success: true,
        drop: { coins: dropCoins, crystals: dropCrystals, monster: null },
      };
    }

    return {
      success: true,
      drop: { coins: dropCoins, crystals: dropCrystals, monster: dropMonster },
    };
  }

  private getWeightedRandom(min, max) {
    const mid = Math.floor((min + max) / 2);
    const range = max - min + 1;

    const weightedArray = [];

    for (let i = min; i <= max; i++) {
      const weight = Math.max(0, 1 - Math.abs(mid - i) / (range / 2));
      for (let j = 0; j < weight * 10; j++) {
        weightedArray.push(i);
      }
    }

    const randomIndex = Math.floor(Math.random() * weightedArray.length);
    return weightedArray[randomIndex];
  }

  private async getRandomMonster(monsters) {
    if (!Array.isArray(monsters)) {
      const monster = monsters[0];
      return monster;
    }
    if (monsters.length > 0) {
      const totalProbability = monsters.reduce(
        (sum, monster) => sum + monster.percent,
        0,
      );
      let randomValue = Math.random() * totalProbability;
      for (const drop of monsters) {
        randomValue -= drop.percent;
        if (randomValue <= 0) {
          // взятие карты
          const dropMonster = await this.monsterService.getMonsterById(drop.id);
          return dropMonster;
        }
      }
    } else {
      return null; // Нет доступных карт
    }
  }
}

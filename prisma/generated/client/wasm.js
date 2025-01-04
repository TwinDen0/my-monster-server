
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.0.1
 * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
 */
Prisma.prismaVersion = {
  client: "6.0.1",
  engine: "5dbef10bdbfb579e07d35cc85fb1518d357cb99e"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updateAt: 'updateAt',
  coins: 'coins',
  crystals: 'crystals',
  telegramId: 'telegramId',
  username: 'username',
  fullName: 'fullName',
  reputation: 'reputation',
  userAvatar: 'userAvatar',
  evoPlaces: 'evoPlaces'
};

exports.Prisma.TypeMonsterScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updateAt: 'updateAt',
  name: 'name',
  img: 'img',
  element: 'element',
  description: 'description'
};

exports.Prisma.MonsterScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updateAt: 'updateAt',
  typeId: 'typeId',
  subtypeName: 'subtypeName',
  img: 'img',
  stageEvo: 'stageEvo',
  branchEvo: 'branchEvo',
  starts: 'starts',
  daysNextLvl: 'daysNextLvl'
};

exports.Prisma.CollectionScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updateAt: 'updateAt',
  leaderId: 'leaderId',
  monsterId: 'monsterId',
  name: 'name',
  days: 'days',
  foodMinutes: 'foodMinutes',
  foodPlaces: 'foodPlaces',
  isEvo: 'isEvo',
  isStop: 'isStop',
  isNewDay: 'isNewDay'
};

exports.Prisma.MonstersFoodScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updateAt: 'updateAt',
  foodId: 'foodId',
  collectionId: 'collectionId',
  time: 'time'
};

exports.Prisma.DailyMonstersScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updateAt: 'updateAt',
  date: 'date',
  price: 'price',
  isCoinsPrice: 'isCoinsPrice',
  monsterId: 'monsterId'
};

exports.Prisma.PackScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updateAt: 'updateAt',
  name: 'name',
  description: 'description',
  img: 'img',
  type: 'type',
  endAt: 'endAt',
  priceCoin: 'priceCoin',
  priceCrystal: 'priceCrystal',
  coinMin: 'coinMin',
  coinMax: 'coinMax',
  crystalMin: 'crystalMin',
  crystalMax: 'crystalMax',
  percentDropMonster: 'percentDropMonster',
  monsters: 'monsters'
};

exports.Prisma.FoodScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updateAt: 'updateAt',
  name: 'name',
  img: 'img',
  time: 'time',
  price: 'price',
  isCoins: 'isCoins',
  mucus: 'mucus',
  tentacle: 'tentacle',
  fish: 'fish',
  eye: 'eye',
  wing: 'wing',
  fly: 'fly',
  bone: 'bone'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.EnumTypeElement = exports.$Enums.EnumTypeElement = {
  FIRE: 'FIRE',
  WATER: 'WATER',
  GROUND: 'GROUND',
  ICE: 'ICE',
  ELECTRIC: 'ELECTRIC',
  AIR: 'AIR',
  DARK: 'DARK',
  GRASS: 'GRASS',
  LIGHT: 'LIGHT',
  NEUTRAL: 'NEUTRAL'
};

exports.Prisma.ModelName = {
  User: 'User',
  TypeMonster: 'TypeMonster',
  Monster: 'Monster',
  Collection: 'Collection',
  MonstersFood: 'MonstersFood',
  DailyMonsters: 'DailyMonsters',
  Pack: 'Pack',
  Food: 'Food'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

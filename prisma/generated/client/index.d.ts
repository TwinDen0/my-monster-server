
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TypeMonster
 * 
 */
export type TypeMonster = $Result.DefaultSelection<Prisma.$TypeMonsterPayload>
/**
 * Model Monster
 * 
 */
export type Monster = $Result.DefaultSelection<Prisma.$MonsterPayload>
/**
 * Model Collection
 * 
 */
export type Collection = $Result.DefaultSelection<Prisma.$CollectionPayload>
/**
 * Model MonstersFood
 * 
 */
export type MonstersFood = $Result.DefaultSelection<Prisma.$MonstersFoodPayload>
/**
 * Model DailyMonsters
 * 
 */
export type DailyMonsters = $Result.DefaultSelection<Prisma.$DailyMonstersPayload>
/**
 * Model Pack
 * 
 */
export type Pack = $Result.DefaultSelection<Prisma.$PackPayload>
/**
 * Model Food
 * 
 */
export type Food = $Result.DefaultSelection<Prisma.$FoodPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EnumTypeElement: {
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

export type EnumTypeElement = (typeof EnumTypeElement)[keyof typeof EnumTypeElement]

}

export type EnumTypeElement = $Enums.EnumTypeElement

export const EnumTypeElement: typeof $Enums.EnumTypeElement

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.typeMonster`: Exposes CRUD operations for the **TypeMonster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TypeMonsters
    * const typeMonsters = await prisma.typeMonster.findMany()
    * ```
    */
  get typeMonster(): Prisma.TypeMonsterDelegate<ExtArgs>;

  /**
   * `prisma.monster`: Exposes CRUD operations for the **Monster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Monsters
    * const monsters = await prisma.monster.findMany()
    * ```
    */
  get monster(): Prisma.MonsterDelegate<ExtArgs>;

  /**
   * `prisma.collection`: Exposes CRUD operations for the **Collection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collections
    * const collections = await prisma.collection.findMany()
    * ```
    */
  get collection(): Prisma.CollectionDelegate<ExtArgs>;

  /**
   * `prisma.monstersFood`: Exposes CRUD operations for the **MonstersFood** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonstersFoods
    * const monstersFoods = await prisma.monstersFood.findMany()
    * ```
    */
  get monstersFood(): Prisma.MonstersFoodDelegate<ExtArgs>;

  /**
   * `prisma.dailyMonsters`: Exposes CRUD operations for the **DailyMonsters** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyMonsters
    * const dailyMonsters = await prisma.dailyMonsters.findMany()
    * ```
    */
  get dailyMonsters(): Prisma.DailyMonstersDelegate<ExtArgs>;

  /**
   * `prisma.pack`: Exposes CRUD operations for the **Pack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Packs
    * const packs = await prisma.pack.findMany()
    * ```
    */
  get pack(): Prisma.PackDelegate<ExtArgs>;

  /**
   * `prisma.food`: Exposes CRUD operations for the **Food** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foods
    * const foods = await prisma.food.findMany()
    * ```
    */
  get food(): Prisma.FoodDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    TypeMonster: 'TypeMonster',
    Monster: 'Monster',
    Collection: 'Collection',
    MonstersFood: 'MonstersFood',
    DailyMonsters: 'DailyMonsters',
    Pack: 'Pack',
    Food: 'Food'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "typeMonster" | "monster" | "collection" | "monstersFood" | "dailyMonsters" | "pack" | "food"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TypeMonster: {
        payload: Prisma.$TypeMonsterPayload<ExtArgs>
        fields: Prisma.TypeMonsterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypeMonsterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeMonsterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypeMonsterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeMonsterPayload>
          }
          findFirst: {
            args: Prisma.TypeMonsterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeMonsterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypeMonsterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeMonsterPayload>
          }
          findMany: {
            args: Prisma.TypeMonsterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeMonsterPayload>[]
          }
          create: {
            args: Prisma.TypeMonsterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeMonsterPayload>
          }
          createMany: {
            args: Prisma.TypeMonsterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TypeMonsterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeMonsterPayload>[]
          }
          delete: {
            args: Prisma.TypeMonsterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeMonsterPayload>
          }
          update: {
            args: Prisma.TypeMonsterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeMonsterPayload>
          }
          deleteMany: {
            args: Prisma.TypeMonsterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TypeMonsterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TypeMonsterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeMonsterPayload>
          }
          aggregate: {
            args: Prisma.TypeMonsterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTypeMonster>
          }
          groupBy: {
            args: Prisma.TypeMonsterGroupByArgs<ExtArgs>
            result: $Utils.Optional<TypeMonsterGroupByOutputType>[]
          }
          count: {
            args: Prisma.TypeMonsterCountArgs<ExtArgs>
            result: $Utils.Optional<TypeMonsterCountAggregateOutputType> | number
          }
        }
      }
      Monster: {
        payload: Prisma.$MonsterPayload<ExtArgs>
        fields: Prisma.MonsterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonsterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonsterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          findFirst: {
            args: Prisma.MonsterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonsterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          findMany: {
            args: Prisma.MonsterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>[]
          }
          create: {
            args: Prisma.MonsterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          createMany: {
            args: Prisma.MonsterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonsterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>[]
          }
          delete: {
            args: Prisma.MonsterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          update: {
            args: Prisma.MonsterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          deleteMany: {
            args: Prisma.MonsterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonsterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MonsterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          aggregate: {
            args: Prisma.MonsterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonster>
          }
          groupBy: {
            args: Prisma.MonsterGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonsterGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonsterCountArgs<ExtArgs>
            result: $Utils.Optional<MonsterCountAggregateOutputType> | number
          }
        }
      }
      Collection: {
        payload: Prisma.$CollectionPayload<ExtArgs>
        fields: Prisma.CollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findFirst: {
            args: Prisma.CollectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findMany: {
            args: Prisma.CollectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          create: {
            args: Prisma.CollectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          createMany: {
            args: Prisma.CollectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          delete: {
            args: Prisma.CollectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          update: {
            args: Prisma.CollectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          deleteMany: {
            args: Prisma.CollectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CollectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          aggregate: {
            args: Prisma.CollectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollection>
          }
          groupBy: {
            args: Prisma.CollectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollectionCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionCountAggregateOutputType> | number
          }
        }
      }
      MonstersFood: {
        payload: Prisma.$MonstersFoodPayload<ExtArgs>
        fields: Prisma.MonstersFoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonstersFoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonstersFoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonstersFoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonstersFoodPayload>
          }
          findFirst: {
            args: Prisma.MonstersFoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonstersFoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonstersFoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonstersFoodPayload>
          }
          findMany: {
            args: Prisma.MonstersFoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonstersFoodPayload>[]
          }
          create: {
            args: Prisma.MonstersFoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonstersFoodPayload>
          }
          createMany: {
            args: Prisma.MonstersFoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonstersFoodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonstersFoodPayload>[]
          }
          delete: {
            args: Prisma.MonstersFoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonstersFoodPayload>
          }
          update: {
            args: Prisma.MonstersFoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonstersFoodPayload>
          }
          deleteMany: {
            args: Prisma.MonstersFoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonstersFoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MonstersFoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonstersFoodPayload>
          }
          aggregate: {
            args: Prisma.MonstersFoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonstersFood>
          }
          groupBy: {
            args: Prisma.MonstersFoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonstersFoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonstersFoodCountArgs<ExtArgs>
            result: $Utils.Optional<MonstersFoodCountAggregateOutputType> | number
          }
        }
      }
      DailyMonsters: {
        payload: Prisma.$DailyMonstersPayload<ExtArgs>
        fields: Prisma.DailyMonstersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyMonstersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMonstersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyMonstersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMonstersPayload>
          }
          findFirst: {
            args: Prisma.DailyMonstersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMonstersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyMonstersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMonstersPayload>
          }
          findMany: {
            args: Prisma.DailyMonstersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMonstersPayload>[]
          }
          create: {
            args: Prisma.DailyMonstersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMonstersPayload>
          }
          createMany: {
            args: Prisma.DailyMonstersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyMonstersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMonstersPayload>[]
          }
          delete: {
            args: Prisma.DailyMonstersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMonstersPayload>
          }
          update: {
            args: Prisma.DailyMonstersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMonstersPayload>
          }
          deleteMany: {
            args: Prisma.DailyMonstersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyMonstersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailyMonstersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyMonstersPayload>
          }
          aggregate: {
            args: Prisma.DailyMonstersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyMonsters>
          }
          groupBy: {
            args: Prisma.DailyMonstersGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyMonstersGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyMonstersCountArgs<ExtArgs>
            result: $Utils.Optional<DailyMonstersCountAggregateOutputType> | number
          }
        }
      }
      Pack: {
        payload: Prisma.$PackPayload<ExtArgs>
        fields: Prisma.PackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>
          }
          findFirst: {
            args: Prisma.PackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>
          }
          findMany: {
            args: Prisma.PackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>[]
          }
          create: {
            args: Prisma.PackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>
          }
          createMany: {
            args: Prisma.PackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>[]
          }
          delete: {
            args: Prisma.PackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>
          }
          update: {
            args: Prisma.PackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>
          }
          deleteMany: {
            args: Prisma.PackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackPayload>
          }
          aggregate: {
            args: Prisma.PackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePack>
          }
          groupBy: {
            args: Prisma.PackGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackCountArgs<ExtArgs>
            result: $Utils.Optional<PackCountAggregateOutputType> | number
          }
        }
      }
      Food: {
        payload: Prisma.$FoodPayload<ExtArgs>
        fields: Prisma.FoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findFirst: {
            args: Prisma.FoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findMany: {
            args: Prisma.FoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          create: {
            args: Prisma.FoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          createMany: {
            args: Prisma.FoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          delete: {
            args: Prisma.FoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          update: {
            args: Prisma.FoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          deleteMany: {
            args: Prisma.FoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          aggregate: {
            args: Prisma.FoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFood>
          }
          groupBy: {
            args: Prisma.FoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodCountArgs<ExtArgs>
            result: $Utils.Optional<FoodCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    collection: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | UserCountOutputTypeCountCollectionArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
  }


  /**
   * Count Type TypeMonsterCountOutputType
   */

  export type TypeMonsterCountOutputType = {
    monsters: number
  }

  export type TypeMonsterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monsters?: boolean | TypeMonsterCountOutputTypeCountMonstersArgs
  }

  // Custom InputTypes
  /**
   * TypeMonsterCountOutputType without action
   */
  export type TypeMonsterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeMonsterCountOutputType
     */
    select?: TypeMonsterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TypeMonsterCountOutputType without action
   */
  export type TypeMonsterCountOutputTypeCountMonstersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonsterWhereInput
  }


  /**
   * Count Type MonsterCountOutputType
   */

  export type MonsterCountOutputType = {
    collection: number
    dailyMonsters: number
  }

  export type MonsterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | MonsterCountOutputTypeCountCollectionArgs
    dailyMonsters?: boolean | MonsterCountOutputTypeCountDailyMonstersArgs
  }

  // Custom InputTypes
  /**
   * MonsterCountOutputType without action
   */
  export type MonsterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterCountOutputType
     */
    select?: MonsterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MonsterCountOutputType without action
   */
  export type MonsterCountOutputTypeCountCollectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
  }

  /**
   * MonsterCountOutputType without action
   */
  export type MonsterCountOutputTypeCountDailyMonstersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyMonstersWhereInput
  }


  /**
   * Count Type CollectionCountOutputType
   */

  export type CollectionCountOutputType = {
    monstersFood: number
  }

  export type CollectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monstersFood?: boolean | CollectionCountOutputTypeCountMonstersFoodArgs
  }

  // Custom InputTypes
  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollectionCountOutputType
     */
    select?: CollectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeCountMonstersFoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonstersFoodWhereInput
  }


  /**
   * Count Type FoodCountOutputType
   */

  export type FoodCountOutputType = {
    monstersFood: number
  }

  export type FoodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monstersFood?: boolean | FoodCountOutputTypeCountMonstersFoodArgs
  }

  // Custom InputTypes
  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCountOutputType
     */
    select?: FoodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountMonstersFoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonstersFoodWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    coins: number | null
    crystals: number | null
    reputation: number | null
    evoPlaces: number | null
  }

  export type UserSumAggregateOutputType = {
    coins: number | null
    crystals: number | null
    reputation: number | null
    evoPlaces: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updateAt: Date | null
    coins: number | null
    crystals: number | null
    telegramId: string | null
    username: string | null
    fullName: string | null
    reputation: number | null
    userAvatar: string | null
    evoPlaces: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updateAt: Date | null
    coins: number | null
    crystals: number | null
    telegramId: string | null
    username: string | null
    fullName: string | null
    reputation: number | null
    userAvatar: string | null
    evoPlaces: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updateAt: number
    coins: number
    crystals: number
    telegramId: number
    username: number
    fullName: number
    reputation: number
    userAvatar: number
    evoPlaces: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    coins?: true
    crystals?: true
    reputation?: true
    evoPlaces?: true
  }

  export type UserSumAggregateInputType = {
    coins?: true
    crystals?: true
    reputation?: true
    evoPlaces?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    coins?: true
    crystals?: true
    telegramId?: true
    username?: true
    fullName?: true
    reputation?: true
    userAvatar?: true
    evoPlaces?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    coins?: true
    crystals?: true
    telegramId?: true
    username?: true
    fullName?: true
    reputation?: true
    userAvatar?: true
    evoPlaces?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    coins?: true
    crystals?: true
    telegramId?: true
    username?: true
    fullName?: true
    reputation?: true
    userAvatar?: true
    evoPlaces?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updateAt: Date
    coins: number
    crystals: number
    telegramId: string
    username: string
    fullName: string
    reputation: number
    userAvatar: string
    evoPlaces: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    coins?: boolean
    crystals?: boolean
    telegramId?: boolean
    username?: boolean
    fullName?: boolean
    reputation?: boolean
    userAvatar?: boolean
    evoPlaces?: boolean
    collection?: boolean | User$collectionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    coins?: boolean
    crystals?: boolean
    telegramId?: boolean
    username?: boolean
    fullName?: boolean
    reputation?: boolean
    userAvatar?: boolean
    evoPlaces?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    coins?: boolean
    crystals?: boolean
    telegramId?: boolean
    username?: boolean
    fullName?: boolean
    reputation?: boolean
    userAvatar?: boolean
    evoPlaces?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | User$collectionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      collection: Prisma.$CollectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updateAt: Date
      coins: number
      crystals: number
      telegramId: string
      username: string
      fullName: string
      reputation: number
      userAvatar: string
      evoPlaces: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    collection<T extends User$collectionArgs<ExtArgs> = {}>(args?: Subset<T, User$collectionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
    readonly coins: FieldRef<"User", 'Int'>
    readonly crystals: FieldRef<"User", 'Int'>
    readonly telegramId: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly reputation: FieldRef<"User", 'Int'>
    readonly userAvatar: FieldRef<"User", 'String'>
    readonly evoPlaces: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.collection
   */
  export type User$collectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    cursor?: CollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TypeMonster
   */

  export type AggregateTypeMonster = {
    _count: TypeMonsterCountAggregateOutputType | null
    _min: TypeMonsterMinAggregateOutputType | null
    _max: TypeMonsterMaxAggregateOutputType | null
  }

  export type TypeMonsterMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updateAt: Date | null
    name: string | null
    img: string | null
    element: $Enums.EnumTypeElement | null
    description: string | null
  }

  export type TypeMonsterMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updateAt: Date | null
    name: string | null
    img: string | null
    element: $Enums.EnumTypeElement | null
    description: string | null
  }

  export type TypeMonsterCountAggregateOutputType = {
    id: number
    createdAt: number
    updateAt: number
    name: number
    img: number
    element: number
    description: number
    _all: number
  }


  export type TypeMonsterMinAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    name?: true
    img?: true
    element?: true
    description?: true
  }

  export type TypeMonsterMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    name?: true
    img?: true
    element?: true
    description?: true
  }

  export type TypeMonsterCountAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    name?: true
    img?: true
    element?: true
    description?: true
    _all?: true
  }

  export type TypeMonsterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TypeMonster to aggregate.
     */
    where?: TypeMonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeMonsters to fetch.
     */
    orderBy?: TypeMonsterOrderByWithRelationInput | TypeMonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypeMonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeMonsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeMonsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TypeMonsters
    **/
    _count?: true | TypeMonsterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeMonsterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeMonsterMaxAggregateInputType
  }

  export type GetTypeMonsterAggregateType<T extends TypeMonsterAggregateArgs> = {
        [P in keyof T & keyof AggregateTypeMonster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTypeMonster[P]>
      : GetScalarType<T[P], AggregateTypeMonster[P]>
  }




  export type TypeMonsterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeMonsterWhereInput
    orderBy?: TypeMonsterOrderByWithAggregationInput | TypeMonsterOrderByWithAggregationInput[]
    by: TypeMonsterScalarFieldEnum[] | TypeMonsterScalarFieldEnum
    having?: TypeMonsterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeMonsterCountAggregateInputType | true
    _min?: TypeMonsterMinAggregateInputType
    _max?: TypeMonsterMaxAggregateInputType
  }

  export type TypeMonsterGroupByOutputType = {
    id: string
    createdAt: Date
    updateAt: Date
    name: string
    img: string | null
    element: $Enums.EnumTypeElement
    description: string
    _count: TypeMonsterCountAggregateOutputType | null
    _min: TypeMonsterMinAggregateOutputType | null
    _max: TypeMonsterMaxAggregateOutputType | null
  }

  type GetTypeMonsterGroupByPayload<T extends TypeMonsterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypeMonsterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeMonsterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeMonsterGroupByOutputType[P]>
            : GetScalarType<T[P], TypeMonsterGroupByOutputType[P]>
        }
      >
    >


  export type TypeMonsterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    name?: boolean
    img?: boolean
    element?: boolean
    description?: boolean
    monsters?: boolean | TypeMonster$monstersArgs<ExtArgs>
    _count?: boolean | TypeMonsterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["typeMonster"]>

  export type TypeMonsterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    name?: boolean
    img?: boolean
    element?: boolean
    description?: boolean
  }, ExtArgs["result"]["typeMonster"]>

  export type TypeMonsterSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    name?: boolean
    img?: boolean
    element?: boolean
    description?: boolean
  }

  export type TypeMonsterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monsters?: boolean | TypeMonster$monstersArgs<ExtArgs>
    _count?: boolean | TypeMonsterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TypeMonsterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TypeMonsterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TypeMonster"
    objects: {
      monsters: Prisma.$MonsterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updateAt: Date
      name: string
      img: string | null
      element: $Enums.EnumTypeElement
      description: string
    }, ExtArgs["result"]["typeMonster"]>
    composites: {}
  }

  type TypeMonsterGetPayload<S extends boolean | null | undefined | TypeMonsterDefaultArgs> = $Result.GetResult<Prisma.$TypeMonsterPayload, S>

  type TypeMonsterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TypeMonsterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TypeMonsterCountAggregateInputType | true
    }

  export interface TypeMonsterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TypeMonster'], meta: { name: 'TypeMonster' } }
    /**
     * Find zero or one TypeMonster that matches the filter.
     * @param {TypeMonsterFindUniqueArgs} args - Arguments to find a TypeMonster
     * @example
     * // Get one TypeMonster
     * const typeMonster = await prisma.typeMonster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TypeMonsterFindUniqueArgs>(args: SelectSubset<T, TypeMonsterFindUniqueArgs<ExtArgs>>): Prisma__TypeMonsterClient<$Result.GetResult<Prisma.$TypeMonsterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TypeMonster that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TypeMonsterFindUniqueOrThrowArgs} args - Arguments to find a TypeMonster
     * @example
     * // Get one TypeMonster
     * const typeMonster = await prisma.typeMonster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TypeMonsterFindUniqueOrThrowArgs>(args: SelectSubset<T, TypeMonsterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TypeMonsterClient<$Result.GetResult<Prisma.$TypeMonsterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TypeMonster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeMonsterFindFirstArgs} args - Arguments to find a TypeMonster
     * @example
     * // Get one TypeMonster
     * const typeMonster = await prisma.typeMonster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TypeMonsterFindFirstArgs>(args?: SelectSubset<T, TypeMonsterFindFirstArgs<ExtArgs>>): Prisma__TypeMonsterClient<$Result.GetResult<Prisma.$TypeMonsterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TypeMonster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeMonsterFindFirstOrThrowArgs} args - Arguments to find a TypeMonster
     * @example
     * // Get one TypeMonster
     * const typeMonster = await prisma.typeMonster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TypeMonsterFindFirstOrThrowArgs>(args?: SelectSubset<T, TypeMonsterFindFirstOrThrowArgs<ExtArgs>>): Prisma__TypeMonsterClient<$Result.GetResult<Prisma.$TypeMonsterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TypeMonsters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeMonsterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TypeMonsters
     * const typeMonsters = await prisma.typeMonster.findMany()
     * 
     * // Get first 10 TypeMonsters
     * const typeMonsters = await prisma.typeMonster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typeMonsterWithIdOnly = await prisma.typeMonster.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TypeMonsterFindManyArgs>(args?: SelectSubset<T, TypeMonsterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeMonsterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TypeMonster.
     * @param {TypeMonsterCreateArgs} args - Arguments to create a TypeMonster.
     * @example
     * // Create one TypeMonster
     * const TypeMonster = await prisma.typeMonster.create({
     *   data: {
     *     // ... data to create a TypeMonster
     *   }
     * })
     * 
     */
    create<T extends TypeMonsterCreateArgs>(args: SelectSubset<T, TypeMonsterCreateArgs<ExtArgs>>): Prisma__TypeMonsterClient<$Result.GetResult<Prisma.$TypeMonsterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TypeMonsters.
     * @param {TypeMonsterCreateManyArgs} args - Arguments to create many TypeMonsters.
     * @example
     * // Create many TypeMonsters
     * const typeMonster = await prisma.typeMonster.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TypeMonsterCreateManyArgs>(args?: SelectSubset<T, TypeMonsterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TypeMonsters and returns the data saved in the database.
     * @param {TypeMonsterCreateManyAndReturnArgs} args - Arguments to create many TypeMonsters.
     * @example
     * // Create many TypeMonsters
     * const typeMonster = await prisma.typeMonster.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TypeMonsters and only return the `id`
     * const typeMonsterWithIdOnly = await prisma.typeMonster.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TypeMonsterCreateManyAndReturnArgs>(args?: SelectSubset<T, TypeMonsterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeMonsterPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TypeMonster.
     * @param {TypeMonsterDeleteArgs} args - Arguments to delete one TypeMonster.
     * @example
     * // Delete one TypeMonster
     * const TypeMonster = await prisma.typeMonster.delete({
     *   where: {
     *     // ... filter to delete one TypeMonster
     *   }
     * })
     * 
     */
    delete<T extends TypeMonsterDeleteArgs>(args: SelectSubset<T, TypeMonsterDeleteArgs<ExtArgs>>): Prisma__TypeMonsterClient<$Result.GetResult<Prisma.$TypeMonsterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TypeMonster.
     * @param {TypeMonsterUpdateArgs} args - Arguments to update one TypeMonster.
     * @example
     * // Update one TypeMonster
     * const typeMonster = await prisma.typeMonster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TypeMonsterUpdateArgs>(args: SelectSubset<T, TypeMonsterUpdateArgs<ExtArgs>>): Prisma__TypeMonsterClient<$Result.GetResult<Prisma.$TypeMonsterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TypeMonsters.
     * @param {TypeMonsterDeleteManyArgs} args - Arguments to filter TypeMonsters to delete.
     * @example
     * // Delete a few TypeMonsters
     * const { count } = await prisma.typeMonster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TypeMonsterDeleteManyArgs>(args?: SelectSubset<T, TypeMonsterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TypeMonsters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeMonsterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TypeMonsters
     * const typeMonster = await prisma.typeMonster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TypeMonsterUpdateManyArgs>(args: SelectSubset<T, TypeMonsterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TypeMonster.
     * @param {TypeMonsterUpsertArgs} args - Arguments to update or create a TypeMonster.
     * @example
     * // Update or create a TypeMonster
     * const typeMonster = await prisma.typeMonster.upsert({
     *   create: {
     *     // ... data to create a TypeMonster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TypeMonster we want to update
     *   }
     * })
     */
    upsert<T extends TypeMonsterUpsertArgs>(args: SelectSubset<T, TypeMonsterUpsertArgs<ExtArgs>>): Prisma__TypeMonsterClient<$Result.GetResult<Prisma.$TypeMonsterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TypeMonsters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeMonsterCountArgs} args - Arguments to filter TypeMonsters to count.
     * @example
     * // Count the number of TypeMonsters
     * const count = await prisma.typeMonster.count({
     *   where: {
     *     // ... the filter for the TypeMonsters we want to count
     *   }
     * })
    **/
    count<T extends TypeMonsterCountArgs>(
      args?: Subset<T, TypeMonsterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeMonsterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TypeMonster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeMonsterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TypeMonsterAggregateArgs>(args: Subset<T, TypeMonsterAggregateArgs>): Prisma.PrismaPromise<GetTypeMonsterAggregateType<T>>

    /**
     * Group by TypeMonster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeMonsterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TypeMonsterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeMonsterGroupByArgs['orderBy'] }
        : { orderBy?: TypeMonsterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TypeMonsterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeMonsterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TypeMonster model
   */
  readonly fields: TypeMonsterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TypeMonster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypeMonsterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    monsters<T extends TypeMonster$monstersArgs<ExtArgs> = {}>(args?: Subset<T, TypeMonster$monstersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TypeMonster model
   */ 
  interface TypeMonsterFieldRefs {
    readonly id: FieldRef<"TypeMonster", 'String'>
    readonly createdAt: FieldRef<"TypeMonster", 'DateTime'>
    readonly updateAt: FieldRef<"TypeMonster", 'DateTime'>
    readonly name: FieldRef<"TypeMonster", 'String'>
    readonly img: FieldRef<"TypeMonster", 'String'>
    readonly element: FieldRef<"TypeMonster", 'EnumTypeElement'>
    readonly description: FieldRef<"TypeMonster", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TypeMonster findUnique
   */
  export type TypeMonsterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeMonster
     */
    select?: TypeMonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeMonsterInclude<ExtArgs> | null
    /**
     * Filter, which TypeMonster to fetch.
     */
    where: TypeMonsterWhereUniqueInput
  }

  /**
   * TypeMonster findUniqueOrThrow
   */
  export type TypeMonsterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeMonster
     */
    select?: TypeMonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeMonsterInclude<ExtArgs> | null
    /**
     * Filter, which TypeMonster to fetch.
     */
    where: TypeMonsterWhereUniqueInput
  }

  /**
   * TypeMonster findFirst
   */
  export type TypeMonsterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeMonster
     */
    select?: TypeMonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeMonsterInclude<ExtArgs> | null
    /**
     * Filter, which TypeMonster to fetch.
     */
    where?: TypeMonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeMonsters to fetch.
     */
    orderBy?: TypeMonsterOrderByWithRelationInput | TypeMonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TypeMonsters.
     */
    cursor?: TypeMonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeMonsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeMonsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TypeMonsters.
     */
    distinct?: TypeMonsterScalarFieldEnum | TypeMonsterScalarFieldEnum[]
  }

  /**
   * TypeMonster findFirstOrThrow
   */
  export type TypeMonsterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeMonster
     */
    select?: TypeMonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeMonsterInclude<ExtArgs> | null
    /**
     * Filter, which TypeMonster to fetch.
     */
    where?: TypeMonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeMonsters to fetch.
     */
    orderBy?: TypeMonsterOrderByWithRelationInput | TypeMonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TypeMonsters.
     */
    cursor?: TypeMonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeMonsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeMonsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TypeMonsters.
     */
    distinct?: TypeMonsterScalarFieldEnum | TypeMonsterScalarFieldEnum[]
  }

  /**
   * TypeMonster findMany
   */
  export type TypeMonsterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeMonster
     */
    select?: TypeMonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeMonsterInclude<ExtArgs> | null
    /**
     * Filter, which TypeMonsters to fetch.
     */
    where?: TypeMonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeMonsters to fetch.
     */
    orderBy?: TypeMonsterOrderByWithRelationInput | TypeMonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TypeMonsters.
     */
    cursor?: TypeMonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeMonsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeMonsters.
     */
    skip?: number
    distinct?: TypeMonsterScalarFieldEnum | TypeMonsterScalarFieldEnum[]
  }

  /**
   * TypeMonster create
   */
  export type TypeMonsterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeMonster
     */
    select?: TypeMonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeMonsterInclude<ExtArgs> | null
    /**
     * The data needed to create a TypeMonster.
     */
    data: XOR<TypeMonsterCreateInput, TypeMonsterUncheckedCreateInput>
  }

  /**
   * TypeMonster createMany
   */
  export type TypeMonsterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TypeMonsters.
     */
    data: TypeMonsterCreateManyInput | TypeMonsterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TypeMonster createManyAndReturn
   */
  export type TypeMonsterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeMonster
     */
    select?: TypeMonsterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TypeMonsters.
     */
    data: TypeMonsterCreateManyInput | TypeMonsterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TypeMonster update
   */
  export type TypeMonsterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeMonster
     */
    select?: TypeMonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeMonsterInclude<ExtArgs> | null
    /**
     * The data needed to update a TypeMonster.
     */
    data: XOR<TypeMonsterUpdateInput, TypeMonsterUncheckedUpdateInput>
    /**
     * Choose, which TypeMonster to update.
     */
    where: TypeMonsterWhereUniqueInput
  }

  /**
   * TypeMonster updateMany
   */
  export type TypeMonsterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TypeMonsters.
     */
    data: XOR<TypeMonsterUpdateManyMutationInput, TypeMonsterUncheckedUpdateManyInput>
    /**
     * Filter which TypeMonsters to update
     */
    where?: TypeMonsterWhereInput
  }

  /**
   * TypeMonster upsert
   */
  export type TypeMonsterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeMonster
     */
    select?: TypeMonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeMonsterInclude<ExtArgs> | null
    /**
     * The filter to search for the TypeMonster to update in case it exists.
     */
    where: TypeMonsterWhereUniqueInput
    /**
     * In case the TypeMonster found by the `where` argument doesn't exist, create a new TypeMonster with this data.
     */
    create: XOR<TypeMonsterCreateInput, TypeMonsterUncheckedCreateInput>
    /**
     * In case the TypeMonster was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypeMonsterUpdateInput, TypeMonsterUncheckedUpdateInput>
  }

  /**
   * TypeMonster delete
   */
  export type TypeMonsterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeMonster
     */
    select?: TypeMonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeMonsterInclude<ExtArgs> | null
    /**
     * Filter which TypeMonster to delete.
     */
    where: TypeMonsterWhereUniqueInput
  }

  /**
   * TypeMonster deleteMany
   */
  export type TypeMonsterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TypeMonsters to delete
     */
    where?: TypeMonsterWhereInput
  }

  /**
   * TypeMonster.monsters
   */
  export type TypeMonster$monstersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    where?: MonsterWhereInput
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    cursor?: MonsterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }

  /**
   * TypeMonster without action
   */
  export type TypeMonsterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeMonster
     */
    select?: TypeMonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeMonsterInclude<ExtArgs> | null
  }


  /**
   * Model Monster
   */

  export type AggregateMonster = {
    _count: MonsterCountAggregateOutputType | null
    _avg: MonsterAvgAggregateOutputType | null
    _sum: MonsterSumAggregateOutputType | null
    _min: MonsterMinAggregateOutputType | null
    _max: MonsterMaxAggregateOutputType | null
  }

  export type MonsterAvgAggregateOutputType = {
    stageEvo: number | null
    branchEvo: number | null
    starts: number | null
    daysNextLvl: number | null
  }

  export type MonsterSumAggregateOutputType = {
    stageEvo: number | null
    branchEvo: number | null
    starts: number | null
    daysNextLvl: number | null
  }

  export type MonsterMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updateAt: Date | null
    typeId: string | null
    subtypeName: string | null
    img: string | null
    stageEvo: number | null
    branchEvo: number | null
    starts: number | null
    daysNextLvl: number | null
  }

  export type MonsterMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updateAt: Date | null
    typeId: string | null
    subtypeName: string | null
    img: string | null
    stageEvo: number | null
    branchEvo: number | null
    starts: number | null
    daysNextLvl: number | null
  }

  export type MonsterCountAggregateOutputType = {
    id: number
    createdAt: number
    updateAt: number
    typeId: number
    subtypeName: number
    img: number
    stageEvo: number
    branchEvo: number
    starts: number
    daysNextLvl: number
    _all: number
  }


  export type MonsterAvgAggregateInputType = {
    stageEvo?: true
    branchEvo?: true
    starts?: true
    daysNextLvl?: true
  }

  export type MonsterSumAggregateInputType = {
    stageEvo?: true
    branchEvo?: true
    starts?: true
    daysNextLvl?: true
  }

  export type MonsterMinAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    typeId?: true
    subtypeName?: true
    img?: true
    stageEvo?: true
    branchEvo?: true
    starts?: true
    daysNextLvl?: true
  }

  export type MonsterMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    typeId?: true
    subtypeName?: true
    img?: true
    stageEvo?: true
    branchEvo?: true
    starts?: true
    daysNextLvl?: true
  }

  export type MonsterCountAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    typeId?: true
    subtypeName?: true
    img?: true
    stageEvo?: true
    branchEvo?: true
    starts?: true
    daysNextLvl?: true
    _all?: true
  }

  export type MonsterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Monster to aggregate.
     */
    where?: MonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monsters to fetch.
     */
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Monsters
    **/
    _count?: true | MonsterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonsterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonsterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonsterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonsterMaxAggregateInputType
  }

  export type GetMonsterAggregateType<T extends MonsterAggregateArgs> = {
        [P in keyof T & keyof AggregateMonster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonster[P]>
      : GetScalarType<T[P], AggregateMonster[P]>
  }




  export type MonsterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonsterWhereInput
    orderBy?: MonsterOrderByWithAggregationInput | MonsterOrderByWithAggregationInput[]
    by: MonsterScalarFieldEnum[] | MonsterScalarFieldEnum
    having?: MonsterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonsterCountAggregateInputType | true
    _avg?: MonsterAvgAggregateInputType
    _sum?: MonsterSumAggregateInputType
    _min?: MonsterMinAggregateInputType
    _max?: MonsterMaxAggregateInputType
  }

  export type MonsterGroupByOutputType = {
    id: string
    createdAt: Date
    updateAt: Date
    typeId: string | null
    subtypeName: string
    img: string
    stageEvo: number
    branchEvo: number
    starts: number
    daysNextLvl: number
    _count: MonsterCountAggregateOutputType | null
    _avg: MonsterAvgAggregateOutputType | null
    _sum: MonsterSumAggregateOutputType | null
    _min: MonsterMinAggregateOutputType | null
    _max: MonsterMaxAggregateOutputType | null
  }

  type GetMonsterGroupByPayload<T extends MonsterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonsterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonsterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonsterGroupByOutputType[P]>
            : GetScalarType<T[P], MonsterGroupByOutputType[P]>
        }
      >
    >


  export type MonsterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    typeId?: boolean
    subtypeName?: boolean
    img?: boolean
    stageEvo?: boolean
    branchEvo?: boolean
    starts?: boolean
    daysNextLvl?: boolean
    type?: boolean | Monster$typeArgs<ExtArgs>
    collection?: boolean | Monster$collectionArgs<ExtArgs>
    dailyMonsters?: boolean | Monster$dailyMonstersArgs<ExtArgs>
    _count?: boolean | MonsterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monster"]>

  export type MonsterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    typeId?: boolean
    subtypeName?: boolean
    img?: boolean
    stageEvo?: boolean
    branchEvo?: boolean
    starts?: boolean
    daysNextLvl?: boolean
    type?: boolean | Monster$typeArgs<ExtArgs>
  }, ExtArgs["result"]["monster"]>

  export type MonsterSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    typeId?: boolean
    subtypeName?: boolean
    img?: boolean
    stageEvo?: boolean
    branchEvo?: boolean
    starts?: boolean
    daysNextLvl?: boolean
  }

  export type MonsterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | Monster$typeArgs<ExtArgs>
    collection?: boolean | Monster$collectionArgs<ExtArgs>
    dailyMonsters?: boolean | Monster$dailyMonstersArgs<ExtArgs>
    _count?: boolean | MonsterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MonsterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | Monster$typeArgs<ExtArgs>
  }

  export type $MonsterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Monster"
    objects: {
      type: Prisma.$TypeMonsterPayload<ExtArgs> | null
      collection: Prisma.$CollectionPayload<ExtArgs>[]
      dailyMonsters: Prisma.$DailyMonstersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updateAt: Date
      typeId: string | null
      subtypeName: string
      img: string
      stageEvo: number
      branchEvo: number
      starts: number
      daysNextLvl: number
    }, ExtArgs["result"]["monster"]>
    composites: {}
  }

  type MonsterGetPayload<S extends boolean | null | undefined | MonsterDefaultArgs> = $Result.GetResult<Prisma.$MonsterPayload, S>

  type MonsterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MonsterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MonsterCountAggregateInputType | true
    }

  export interface MonsterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Monster'], meta: { name: 'Monster' } }
    /**
     * Find zero or one Monster that matches the filter.
     * @param {MonsterFindUniqueArgs} args - Arguments to find a Monster
     * @example
     * // Get one Monster
     * const monster = await prisma.monster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonsterFindUniqueArgs>(args: SelectSubset<T, MonsterFindUniqueArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Monster that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MonsterFindUniqueOrThrowArgs} args - Arguments to find a Monster
     * @example
     * // Get one Monster
     * const monster = await prisma.monster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonsterFindUniqueOrThrowArgs>(args: SelectSubset<T, MonsterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Monster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterFindFirstArgs} args - Arguments to find a Monster
     * @example
     * // Get one Monster
     * const monster = await prisma.monster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonsterFindFirstArgs>(args?: SelectSubset<T, MonsterFindFirstArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Monster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterFindFirstOrThrowArgs} args - Arguments to find a Monster
     * @example
     * // Get one Monster
     * const monster = await prisma.monster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonsterFindFirstOrThrowArgs>(args?: SelectSubset<T, MonsterFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Monsters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Monsters
     * const monsters = await prisma.monster.findMany()
     * 
     * // Get first 10 Monsters
     * const monsters = await prisma.monster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monsterWithIdOnly = await prisma.monster.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonsterFindManyArgs>(args?: SelectSubset<T, MonsterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Monster.
     * @param {MonsterCreateArgs} args - Arguments to create a Monster.
     * @example
     * // Create one Monster
     * const Monster = await prisma.monster.create({
     *   data: {
     *     // ... data to create a Monster
     *   }
     * })
     * 
     */
    create<T extends MonsterCreateArgs>(args: SelectSubset<T, MonsterCreateArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Monsters.
     * @param {MonsterCreateManyArgs} args - Arguments to create many Monsters.
     * @example
     * // Create many Monsters
     * const monster = await prisma.monster.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonsterCreateManyArgs>(args?: SelectSubset<T, MonsterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Monsters and returns the data saved in the database.
     * @param {MonsterCreateManyAndReturnArgs} args - Arguments to create many Monsters.
     * @example
     * // Create many Monsters
     * const monster = await prisma.monster.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Monsters and only return the `id`
     * const monsterWithIdOnly = await prisma.monster.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonsterCreateManyAndReturnArgs>(args?: SelectSubset<T, MonsterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Monster.
     * @param {MonsterDeleteArgs} args - Arguments to delete one Monster.
     * @example
     * // Delete one Monster
     * const Monster = await prisma.monster.delete({
     *   where: {
     *     // ... filter to delete one Monster
     *   }
     * })
     * 
     */
    delete<T extends MonsterDeleteArgs>(args: SelectSubset<T, MonsterDeleteArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Monster.
     * @param {MonsterUpdateArgs} args - Arguments to update one Monster.
     * @example
     * // Update one Monster
     * const monster = await prisma.monster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonsterUpdateArgs>(args: SelectSubset<T, MonsterUpdateArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Monsters.
     * @param {MonsterDeleteManyArgs} args - Arguments to filter Monsters to delete.
     * @example
     * // Delete a few Monsters
     * const { count } = await prisma.monster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonsterDeleteManyArgs>(args?: SelectSubset<T, MonsterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monsters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Monsters
     * const monster = await prisma.monster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonsterUpdateManyArgs>(args: SelectSubset<T, MonsterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Monster.
     * @param {MonsterUpsertArgs} args - Arguments to update or create a Monster.
     * @example
     * // Update or create a Monster
     * const monster = await prisma.monster.upsert({
     *   create: {
     *     // ... data to create a Monster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Monster we want to update
     *   }
     * })
     */
    upsert<T extends MonsterUpsertArgs>(args: SelectSubset<T, MonsterUpsertArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Monsters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterCountArgs} args - Arguments to filter Monsters to count.
     * @example
     * // Count the number of Monsters
     * const count = await prisma.monster.count({
     *   where: {
     *     // ... the filter for the Monsters we want to count
     *   }
     * })
    **/
    count<T extends MonsterCountArgs>(
      args?: Subset<T, MonsterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonsterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Monster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonsterAggregateArgs>(args: Subset<T, MonsterAggregateArgs>): Prisma.PrismaPromise<GetMonsterAggregateType<T>>

    /**
     * Group by Monster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonsterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonsterGroupByArgs['orderBy'] }
        : { orderBy?: MonsterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonsterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonsterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Monster model
   */
  readonly fields: MonsterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Monster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonsterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends Monster$typeArgs<ExtArgs> = {}>(args?: Subset<T, Monster$typeArgs<ExtArgs>>): Prisma__TypeMonsterClient<$Result.GetResult<Prisma.$TypeMonsterPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    collection<T extends Monster$collectionArgs<ExtArgs> = {}>(args?: Subset<T, Monster$collectionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany"> | Null>
    dailyMonsters<T extends Monster$dailyMonstersArgs<ExtArgs> = {}>(args?: Subset<T, Monster$dailyMonstersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyMonstersPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Monster model
   */ 
  interface MonsterFieldRefs {
    readonly id: FieldRef<"Monster", 'String'>
    readonly createdAt: FieldRef<"Monster", 'DateTime'>
    readonly updateAt: FieldRef<"Monster", 'DateTime'>
    readonly typeId: FieldRef<"Monster", 'String'>
    readonly subtypeName: FieldRef<"Monster", 'String'>
    readonly img: FieldRef<"Monster", 'String'>
    readonly stageEvo: FieldRef<"Monster", 'Int'>
    readonly branchEvo: FieldRef<"Monster", 'Int'>
    readonly starts: FieldRef<"Monster", 'Int'>
    readonly daysNextLvl: FieldRef<"Monster", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Monster findUnique
   */
  export type MonsterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * Filter, which Monster to fetch.
     */
    where: MonsterWhereUniqueInput
  }

  /**
   * Monster findUniqueOrThrow
   */
  export type MonsterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * Filter, which Monster to fetch.
     */
    where: MonsterWhereUniqueInput
  }

  /**
   * Monster findFirst
   */
  export type MonsterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * Filter, which Monster to fetch.
     */
    where?: MonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monsters to fetch.
     */
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Monsters.
     */
    cursor?: MonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monsters.
     */
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }

  /**
   * Monster findFirstOrThrow
   */
  export type MonsterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * Filter, which Monster to fetch.
     */
    where?: MonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monsters to fetch.
     */
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Monsters.
     */
    cursor?: MonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monsters.
     */
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }

  /**
   * Monster findMany
   */
  export type MonsterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * Filter, which Monsters to fetch.
     */
    where?: MonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monsters to fetch.
     */
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Monsters.
     */
    cursor?: MonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monsters.
     */
    skip?: number
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }

  /**
   * Monster create
   */
  export type MonsterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * The data needed to create a Monster.
     */
    data: XOR<MonsterCreateInput, MonsterUncheckedCreateInput>
  }

  /**
   * Monster createMany
   */
  export type MonsterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Monsters.
     */
    data: MonsterCreateManyInput | MonsterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Monster createManyAndReturn
   */
  export type MonsterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Monsters.
     */
    data: MonsterCreateManyInput | MonsterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Monster update
   */
  export type MonsterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * The data needed to update a Monster.
     */
    data: XOR<MonsterUpdateInput, MonsterUncheckedUpdateInput>
    /**
     * Choose, which Monster to update.
     */
    where: MonsterWhereUniqueInput
  }

  /**
   * Monster updateMany
   */
  export type MonsterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Monsters.
     */
    data: XOR<MonsterUpdateManyMutationInput, MonsterUncheckedUpdateManyInput>
    /**
     * Filter which Monsters to update
     */
    where?: MonsterWhereInput
  }

  /**
   * Monster upsert
   */
  export type MonsterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * The filter to search for the Monster to update in case it exists.
     */
    where: MonsterWhereUniqueInput
    /**
     * In case the Monster found by the `where` argument doesn't exist, create a new Monster with this data.
     */
    create: XOR<MonsterCreateInput, MonsterUncheckedCreateInput>
    /**
     * In case the Monster was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonsterUpdateInput, MonsterUncheckedUpdateInput>
  }

  /**
   * Monster delete
   */
  export type MonsterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * Filter which Monster to delete.
     */
    where: MonsterWhereUniqueInput
  }

  /**
   * Monster deleteMany
   */
  export type MonsterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Monsters to delete
     */
    where?: MonsterWhereInput
  }

  /**
   * Monster.type
   */
  export type Monster$typeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeMonster
     */
    select?: TypeMonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeMonsterInclude<ExtArgs> | null
    where?: TypeMonsterWhereInput
  }

  /**
   * Monster.collection
   */
  export type Monster$collectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    cursor?: CollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Monster.dailyMonsters
   */
  export type Monster$dailyMonstersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonsters
     */
    select?: DailyMonstersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonstersInclude<ExtArgs> | null
    where?: DailyMonstersWhereInput
    orderBy?: DailyMonstersOrderByWithRelationInput | DailyMonstersOrderByWithRelationInput[]
    cursor?: DailyMonstersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyMonstersScalarFieldEnum | DailyMonstersScalarFieldEnum[]
  }

  /**
   * Monster without action
   */
  export type MonsterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
  }


  /**
   * Model Collection
   */

  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null
    _avg: CollectionAvgAggregateOutputType | null
    _sum: CollectionSumAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  export type CollectionAvgAggregateOutputType = {
    days: number | null
    foodMinutes: number | null
    foodPlaces: number | null
  }

  export type CollectionSumAggregateOutputType = {
    days: number | null
    foodMinutes: number | null
    foodPlaces: number | null
  }

  export type CollectionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updateAt: Date | null
    leaderId: string | null
    monsterId: string | null
    name: string | null
    days: number | null
    foodMinutes: number | null
    foodPlaces: number | null
    isEvo: boolean | null
    isStop: boolean | null
    isNewDay: boolean | null
  }

  export type CollectionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updateAt: Date | null
    leaderId: string | null
    monsterId: string | null
    name: string | null
    days: number | null
    foodMinutes: number | null
    foodPlaces: number | null
    isEvo: boolean | null
    isStop: boolean | null
    isNewDay: boolean | null
  }

  export type CollectionCountAggregateOutputType = {
    id: number
    createdAt: number
    updateAt: number
    leaderId: number
    monsterId: number
    name: number
    days: number
    foodMinutes: number
    foodPlaces: number
    isEvo: number
    isStop: number
    isNewDay: number
    _all: number
  }


  export type CollectionAvgAggregateInputType = {
    days?: true
    foodMinutes?: true
    foodPlaces?: true
  }

  export type CollectionSumAggregateInputType = {
    days?: true
    foodMinutes?: true
    foodPlaces?: true
  }

  export type CollectionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    leaderId?: true
    monsterId?: true
    name?: true
    days?: true
    foodMinutes?: true
    foodPlaces?: true
    isEvo?: true
    isStop?: true
    isNewDay?: true
  }

  export type CollectionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    leaderId?: true
    monsterId?: true
    name?: true
    days?: true
    foodMinutes?: true
    foodPlaces?: true
    isEvo?: true
    isStop?: true
    isNewDay?: true
  }

  export type CollectionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    leaderId?: true
    monsterId?: true
    name?: true
    days?: true
    foodMinutes?: true
    foodPlaces?: true
    isEvo?: true
    isStop?: true
    isNewDay?: true
    _all?: true
  }

  export type CollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collection to aggregate.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collections
    **/
    _count?: true | CollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionMaxAggregateInputType
  }

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>
  }




  export type CollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithAggregationInput | CollectionOrderByWithAggregationInput[]
    by: CollectionScalarFieldEnum[] | CollectionScalarFieldEnum
    having?: CollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionCountAggregateInputType | true
    _avg?: CollectionAvgAggregateInputType
    _sum?: CollectionSumAggregateInputType
    _min?: CollectionMinAggregateInputType
    _max?: CollectionMaxAggregateInputType
  }

  export type CollectionGroupByOutputType = {
    id: string
    createdAt: Date
    updateAt: Date
    leaderId: string | null
    monsterId: string | null
    name: string | null
    days: number
    foodMinutes: number
    foodPlaces: number
    isEvo: boolean
    isStop: boolean
    isNewDay: boolean
    _count: CollectionCountAggregateOutputType | null
    _avg: CollectionAvgAggregateOutputType | null
    _sum: CollectionSumAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  type GetCollectionGroupByPayload<T extends CollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>
        }
      >
    >


  export type CollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    leaderId?: boolean
    monsterId?: boolean
    name?: boolean
    days?: boolean
    foodMinutes?: boolean
    foodPlaces?: boolean
    isEvo?: boolean
    isStop?: boolean
    isNewDay?: boolean
    leader?: boolean | Collection$leaderArgs<ExtArgs>
    monster?: boolean | Collection$monsterArgs<ExtArgs>
    monstersFood?: boolean | Collection$monstersFoodArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    leaderId?: boolean
    monsterId?: boolean
    name?: boolean
    days?: boolean
    foodMinutes?: boolean
    foodPlaces?: boolean
    isEvo?: boolean
    isStop?: boolean
    isNewDay?: boolean
    leader?: boolean | Collection$leaderArgs<ExtArgs>
    monster?: boolean | Collection$monsterArgs<ExtArgs>
  }, ExtArgs["result"]["collection"]>

  export type CollectionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    leaderId?: boolean
    monsterId?: boolean
    name?: boolean
    days?: boolean
    foodMinutes?: boolean
    foodPlaces?: boolean
    isEvo?: boolean
    isStop?: boolean
    isNewDay?: boolean
  }

  export type CollectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leader?: boolean | Collection$leaderArgs<ExtArgs>
    monster?: boolean | Collection$monsterArgs<ExtArgs>
    monstersFood?: boolean | Collection$monstersFoodArgs<ExtArgs>
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CollectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leader?: boolean | Collection$leaderArgs<ExtArgs>
    monster?: boolean | Collection$monsterArgs<ExtArgs>
  }

  export type $CollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collection"
    objects: {
      leader: Prisma.$UserPayload<ExtArgs> | null
      monster: Prisma.$MonsterPayload<ExtArgs> | null
      monstersFood: Prisma.$MonstersFoodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updateAt: Date
      leaderId: string | null
      monsterId: string | null
      name: string | null
      days: number
      foodMinutes: number
      foodPlaces: number
      isEvo: boolean
      isStop: boolean
      isNewDay: boolean
    }, ExtArgs["result"]["collection"]>
    composites: {}
  }

  type CollectionGetPayload<S extends boolean | null | undefined | CollectionDefaultArgs> = $Result.GetResult<Prisma.$CollectionPayload, S>

  type CollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CollectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CollectionCountAggregateInputType | true
    }

  export interface CollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collection'], meta: { name: 'Collection' } }
    /**
     * Find zero or one Collection that matches the filter.
     * @param {CollectionFindUniqueArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionFindUniqueArgs>(args: SelectSubset<T, CollectionFindUniqueArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Collection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CollectionFindUniqueOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionFindFirstArgs>(args?: SelectSubset<T, CollectionFindFirstArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Collection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     * 
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collectionWithIdOnly = await prisma.collection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollectionFindManyArgs>(args?: SelectSubset<T, CollectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Collection.
     * @param {CollectionCreateArgs} args - Arguments to create a Collection.
     * @example
     * // Create one Collection
     * const Collection = await prisma.collection.create({
     *   data: {
     *     // ... data to create a Collection
     *   }
     * })
     * 
     */
    create<T extends CollectionCreateArgs>(args: SelectSubset<T, CollectionCreateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Collections.
     * @param {CollectionCreateManyArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionCreateManyArgs>(args?: SelectSubset<T, CollectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Collections and returns the data saved in the database.
     * @param {CollectionCreateManyAndReturnArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Collections and only return the `id`
     * const collectionWithIdOnly = await prisma.collection.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollectionCreateManyAndReturnArgs>(args?: SelectSubset<T, CollectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Collection.
     * @param {CollectionDeleteArgs} args - Arguments to delete one Collection.
     * @example
     * // Delete one Collection
     * const Collection = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one Collection
     *   }
     * })
     * 
     */
    delete<T extends CollectionDeleteArgs>(args: SelectSubset<T, CollectionDeleteArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Collection.
     * @param {CollectionUpdateArgs} args - Arguments to update one Collection.
     * @example
     * // Update one Collection
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionUpdateArgs>(args: SelectSubset<T, CollectionUpdateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Collections.
     * @param {CollectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionDeleteManyArgs>(args?: SelectSubset<T, CollectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionUpdateManyArgs>(args: SelectSubset<T, CollectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Collection.
     * @param {CollectionUpsertArgs} args - Arguments to update or create a Collection.
     * @example
     * // Update or create a Collection
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection we want to update
     *   }
     * })
     */
    upsert<T extends CollectionUpsertArgs>(args: SelectSubset<T, CollectionUpsertArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
    **/
    count<T extends CollectionCountArgs>(
      args?: Subset<T, CollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollectionAggregateArgs>(args: Subset<T, CollectionAggregateArgs>): Prisma.PrismaPromise<GetCollectionAggregateType<T>>

    /**
     * Group by Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionGroupByArgs['orderBy'] }
        : { orderBy?: CollectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collection model
   */
  readonly fields: CollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leader<T extends Collection$leaderArgs<ExtArgs> = {}>(args?: Subset<T, Collection$leaderArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    monster<T extends Collection$monsterArgs<ExtArgs> = {}>(args?: Subset<T, Collection$monsterArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    monstersFood<T extends Collection$monstersFoodArgs<ExtArgs> = {}>(args?: Subset<T, Collection$monstersFoodArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonstersFoodPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Collection model
   */ 
  interface CollectionFieldRefs {
    readonly id: FieldRef<"Collection", 'String'>
    readonly createdAt: FieldRef<"Collection", 'DateTime'>
    readonly updateAt: FieldRef<"Collection", 'DateTime'>
    readonly leaderId: FieldRef<"Collection", 'String'>
    readonly monsterId: FieldRef<"Collection", 'String'>
    readonly name: FieldRef<"Collection", 'String'>
    readonly days: FieldRef<"Collection", 'Int'>
    readonly foodMinutes: FieldRef<"Collection", 'Int'>
    readonly foodPlaces: FieldRef<"Collection", 'Int'>
    readonly isEvo: FieldRef<"Collection", 'Boolean'>
    readonly isStop: FieldRef<"Collection", 'Boolean'>
    readonly isNewDay: FieldRef<"Collection", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Collection findUnique
   */
  export type CollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findUniqueOrThrow
   */
  export type CollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findFirst
   */
  export type CollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findFirstOrThrow
   */
  export type CollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findMany
   */
  export type CollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter, which Collections to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection create
   */
  export type CollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Collection.
     */
    data: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
  }

  /**
   * Collection createMany
   */
  export type CollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Collection createManyAndReturn
   */
  export type CollectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collection update
   */
  export type CollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Collection.
     */
    data: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
    /**
     * Choose, which Collection to update.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection updateMany
   */
  export type CollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collections.
     */
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput
  }

  /**
   * Collection upsert
   */
  export type CollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Collection to update in case it exists.
     */
    where: CollectionWhereUniqueInput
    /**
     * In case the Collection found by the `where` argument doesn't exist, create a new Collection with this data.
     */
    create: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
    /**
     * In case the Collection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
  }

  /**
   * Collection delete
   */
  export type CollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
    /**
     * Filter which Collection to delete.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection deleteMany
   */
  export type CollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collections to delete
     */
    where?: CollectionWhereInput
  }

  /**
   * Collection.leader
   */
  export type Collection$leaderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Collection.monster
   */
  export type Collection$monsterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    where?: MonsterWhereInput
  }

  /**
   * Collection.monstersFood
   */
  export type Collection$monstersFoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonstersFood
     */
    select?: MonstersFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonstersFoodInclude<ExtArgs> | null
    where?: MonstersFoodWhereInput
    orderBy?: MonstersFoodOrderByWithRelationInput | MonstersFoodOrderByWithRelationInput[]
    cursor?: MonstersFoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonstersFoodScalarFieldEnum | MonstersFoodScalarFieldEnum[]
  }

  /**
   * Collection without action
   */
  export type CollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null
  }


  /**
   * Model MonstersFood
   */

  export type AggregateMonstersFood = {
    _count: MonstersFoodCountAggregateOutputType | null
    _min: MonstersFoodMinAggregateOutputType | null
    _max: MonstersFoodMaxAggregateOutputType | null
  }

  export type MonstersFoodMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updateAt: Date | null
    foodId: string | null
    collectionId: string | null
  }

  export type MonstersFoodMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updateAt: Date | null
    foodId: string | null
    collectionId: string | null
  }

  export type MonstersFoodCountAggregateOutputType = {
    id: number
    createdAt: number
    updateAt: number
    foodId: number
    collectionId: number
    _all: number
  }


  export type MonstersFoodMinAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    foodId?: true
    collectionId?: true
  }

  export type MonstersFoodMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    foodId?: true
    collectionId?: true
  }

  export type MonstersFoodCountAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    foodId?: true
    collectionId?: true
    _all?: true
  }

  export type MonstersFoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonstersFood to aggregate.
     */
    where?: MonstersFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonstersFoods to fetch.
     */
    orderBy?: MonstersFoodOrderByWithRelationInput | MonstersFoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonstersFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonstersFoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonstersFoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonstersFoods
    **/
    _count?: true | MonstersFoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonstersFoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonstersFoodMaxAggregateInputType
  }

  export type GetMonstersFoodAggregateType<T extends MonstersFoodAggregateArgs> = {
        [P in keyof T & keyof AggregateMonstersFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonstersFood[P]>
      : GetScalarType<T[P], AggregateMonstersFood[P]>
  }




  export type MonstersFoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonstersFoodWhereInput
    orderBy?: MonstersFoodOrderByWithAggregationInput | MonstersFoodOrderByWithAggregationInput[]
    by: MonstersFoodScalarFieldEnum[] | MonstersFoodScalarFieldEnum
    having?: MonstersFoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonstersFoodCountAggregateInputType | true
    _min?: MonstersFoodMinAggregateInputType
    _max?: MonstersFoodMaxAggregateInputType
  }

  export type MonstersFoodGroupByOutputType = {
    id: string
    createdAt: Date
    updateAt: Date
    foodId: string
    collectionId: string
    _count: MonstersFoodCountAggregateOutputType | null
    _min: MonstersFoodMinAggregateOutputType | null
    _max: MonstersFoodMaxAggregateOutputType | null
  }

  type GetMonstersFoodGroupByPayload<T extends MonstersFoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonstersFoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonstersFoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonstersFoodGroupByOutputType[P]>
            : GetScalarType<T[P], MonstersFoodGroupByOutputType[P]>
        }
      >
    >


  export type MonstersFoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    foodId?: boolean
    collectionId?: boolean
    food?: boolean | FoodDefaultArgs<ExtArgs>
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monstersFood"]>

  export type MonstersFoodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    foodId?: boolean
    collectionId?: boolean
    food?: boolean | FoodDefaultArgs<ExtArgs>
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monstersFood"]>

  export type MonstersFoodSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    foodId?: boolean
    collectionId?: boolean
  }

  export type MonstersFoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | FoodDefaultArgs<ExtArgs>
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }
  export type MonstersFoodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | FoodDefaultArgs<ExtArgs>
    collection?: boolean | CollectionDefaultArgs<ExtArgs>
  }

  export type $MonstersFoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonstersFood"
    objects: {
      food: Prisma.$FoodPayload<ExtArgs>
      collection: Prisma.$CollectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updateAt: Date
      foodId: string
      collectionId: string
    }, ExtArgs["result"]["monstersFood"]>
    composites: {}
  }

  type MonstersFoodGetPayload<S extends boolean | null | undefined | MonstersFoodDefaultArgs> = $Result.GetResult<Prisma.$MonstersFoodPayload, S>

  type MonstersFoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MonstersFoodFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MonstersFoodCountAggregateInputType | true
    }

  export interface MonstersFoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonstersFood'], meta: { name: 'MonstersFood' } }
    /**
     * Find zero or one MonstersFood that matches the filter.
     * @param {MonstersFoodFindUniqueArgs} args - Arguments to find a MonstersFood
     * @example
     * // Get one MonstersFood
     * const monstersFood = await prisma.monstersFood.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonstersFoodFindUniqueArgs>(args: SelectSubset<T, MonstersFoodFindUniqueArgs<ExtArgs>>): Prisma__MonstersFoodClient<$Result.GetResult<Prisma.$MonstersFoodPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MonstersFood that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MonstersFoodFindUniqueOrThrowArgs} args - Arguments to find a MonstersFood
     * @example
     * // Get one MonstersFood
     * const monstersFood = await prisma.monstersFood.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonstersFoodFindUniqueOrThrowArgs>(args: SelectSubset<T, MonstersFoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonstersFoodClient<$Result.GetResult<Prisma.$MonstersFoodPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MonstersFood that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonstersFoodFindFirstArgs} args - Arguments to find a MonstersFood
     * @example
     * // Get one MonstersFood
     * const monstersFood = await prisma.monstersFood.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonstersFoodFindFirstArgs>(args?: SelectSubset<T, MonstersFoodFindFirstArgs<ExtArgs>>): Prisma__MonstersFoodClient<$Result.GetResult<Prisma.$MonstersFoodPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MonstersFood that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonstersFoodFindFirstOrThrowArgs} args - Arguments to find a MonstersFood
     * @example
     * // Get one MonstersFood
     * const monstersFood = await prisma.monstersFood.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonstersFoodFindFirstOrThrowArgs>(args?: SelectSubset<T, MonstersFoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonstersFoodClient<$Result.GetResult<Prisma.$MonstersFoodPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MonstersFoods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonstersFoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonstersFoods
     * const monstersFoods = await prisma.monstersFood.findMany()
     * 
     * // Get first 10 MonstersFoods
     * const monstersFoods = await prisma.monstersFood.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monstersFoodWithIdOnly = await prisma.monstersFood.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonstersFoodFindManyArgs>(args?: SelectSubset<T, MonstersFoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonstersFoodPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MonstersFood.
     * @param {MonstersFoodCreateArgs} args - Arguments to create a MonstersFood.
     * @example
     * // Create one MonstersFood
     * const MonstersFood = await prisma.monstersFood.create({
     *   data: {
     *     // ... data to create a MonstersFood
     *   }
     * })
     * 
     */
    create<T extends MonstersFoodCreateArgs>(args: SelectSubset<T, MonstersFoodCreateArgs<ExtArgs>>): Prisma__MonstersFoodClient<$Result.GetResult<Prisma.$MonstersFoodPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MonstersFoods.
     * @param {MonstersFoodCreateManyArgs} args - Arguments to create many MonstersFoods.
     * @example
     * // Create many MonstersFoods
     * const monstersFood = await prisma.monstersFood.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonstersFoodCreateManyArgs>(args?: SelectSubset<T, MonstersFoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MonstersFoods and returns the data saved in the database.
     * @param {MonstersFoodCreateManyAndReturnArgs} args - Arguments to create many MonstersFoods.
     * @example
     * // Create many MonstersFoods
     * const monstersFood = await prisma.monstersFood.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MonstersFoods and only return the `id`
     * const monstersFoodWithIdOnly = await prisma.monstersFood.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonstersFoodCreateManyAndReturnArgs>(args?: SelectSubset<T, MonstersFoodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonstersFoodPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MonstersFood.
     * @param {MonstersFoodDeleteArgs} args - Arguments to delete one MonstersFood.
     * @example
     * // Delete one MonstersFood
     * const MonstersFood = await prisma.monstersFood.delete({
     *   where: {
     *     // ... filter to delete one MonstersFood
     *   }
     * })
     * 
     */
    delete<T extends MonstersFoodDeleteArgs>(args: SelectSubset<T, MonstersFoodDeleteArgs<ExtArgs>>): Prisma__MonstersFoodClient<$Result.GetResult<Prisma.$MonstersFoodPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MonstersFood.
     * @param {MonstersFoodUpdateArgs} args - Arguments to update one MonstersFood.
     * @example
     * // Update one MonstersFood
     * const monstersFood = await prisma.monstersFood.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonstersFoodUpdateArgs>(args: SelectSubset<T, MonstersFoodUpdateArgs<ExtArgs>>): Prisma__MonstersFoodClient<$Result.GetResult<Prisma.$MonstersFoodPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MonstersFoods.
     * @param {MonstersFoodDeleteManyArgs} args - Arguments to filter MonstersFoods to delete.
     * @example
     * // Delete a few MonstersFoods
     * const { count } = await prisma.monstersFood.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonstersFoodDeleteManyArgs>(args?: SelectSubset<T, MonstersFoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonstersFoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonstersFoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonstersFoods
     * const monstersFood = await prisma.monstersFood.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonstersFoodUpdateManyArgs>(args: SelectSubset<T, MonstersFoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MonstersFood.
     * @param {MonstersFoodUpsertArgs} args - Arguments to update or create a MonstersFood.
     * @example
     * // Update or create a MonstersFood
     * const monstersFood = await prisma.monstersFood.upsert({
     *   create: {
     *     // ... data to create a MonstersFood
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonstersFood we want to update
     *   }
     * })
     */
    upsert<T extends MonstersFoodUpsertArgs>(args: SelectSubset<T, MonstersFoodUpsertArgs<ExtArgs>>): Prisma__MonstersFoodClient<$Result.GetResult<Prisma.$MonstersFoodPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MonstersFoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonstersFoodCountArgs} args - Arguments to filter MonstersFoods to count.
     * @example
     * // Count the number of MonstersFoods
     * const count = await prisma.monstersFood.count({
     *   where: {
     *     // ... the filter for the MonstersFoods we want to count
     *   }
     * })
    **/
    count<T extends MonstersFoodCountArgs>(
      args?: Subset<T, MonstersFoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonstersFoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonstersFood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonstersFoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonstersFoodAggregateArgs>(args: Subset<T, MonstersFoodAggregateArgs>): Prisma.PrismaPromise<GetMonstersFoodAggregateType<T>>

    /**
     * Group by MonstersFood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonstersFoodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonstersFoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonstersFoodGroupByArgs['orderBy'] }
        : { orderBy?: MonstersFoodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonstersFoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonstersFoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonstersFood model
   */
  readonly fields: MonstersFoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonstersFood.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonstersFoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    food<T extends FoodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodDefaultArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    collection<T extends CollectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollectionDefaultArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MonstersFood model
   */ 
  interface MonstersFoodFieldRefs {
    readonly id: FieldRef<"MonstersFood", 'String'>
    readonly createdAt: FieldRef<"MonstersFood", 'DateTime'>
    readonly updateAt: FieldRef<"MonstersFood", 'DateTime'>
    readonly foodId: FieldRef<"MonstersFood", 'String'>
    readonly collectionId: FieldRef<"MonstersFood", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MonstersFood findUnique
   */
  export type MonstersFoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonstersFood
     */
    select?: MonstersFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonstersFoodInclude<ExtArgs> | null
    /**
     * Filter, which MonstersFood to fetch.
     */
    where: MonstersFoodWhereUniqueInput
  }

  /**
   * MonstersFood findUniqueOrThrow
   */
  export type MonstersFoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonstersFood
     */
    select?: MonstersFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonstersFoodInclude<ExtArgs> | null
    /**
     * Filter, which MonstersFood to fetch.
     */
    where: MonstersFoodWhereUniqueInput
  }

  /**
   * MonstersFood findFirst
   */
  export type MonstersFoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonstersFood
     */
    select?: MonstersFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonstersFoodInclude<ExtArgs> | null
    /**
     * Filter, which MonstersFood to fetch.
     */
    where?: MonstersFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonstersFoods to fetch.
     */
    orderBy?: MonstersFoodOrderByWithRelationInput | MonstersFoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonstersFoods.
     */
    cursor?: MonstersFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonstersFoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonstersFoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonstersFoods.
     */
    distinct?: MonstersFoodScalarFieldEnum | MonstersFoodScalarFieldEnum[]
  }

  /**
   * MonstersFood findFirstOrThrow
   */
  export type MonstersFoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonstersFood
     */
    select?: MonstersFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonstersFoodInclude<ExtArgs> | null
    /**
     * Filter, which MonstersFood to fetch.
     */
    where?: MonstersFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonstersFoods to fetch.
     */
    orderBy?: MonstersFoodOrderByWithRelationInput | MonstersFoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonstersFoods.
     */
    cursor?: MonstersFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonstersFoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonstersFoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonstersFoods.
     */
    distinct?: MonstersFoodScalarFieldEnum | MonstersFoodScalarFieldEnum[]
  }

  /**
   * MonstersFood findMany
   */
  export type MonstersFoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonstersFood
     */
    select?: MonstersFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonstersFoodInclude<ExtArgs> | null
    /**
     * Filter, which MonstersFoods to fetch.
     */
    where?: MonstersFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonstersFoods to fetch.
     */
    orderBy?: MonstersFoodOrderByWithRelationInput | MonstersFoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonstersFoods.
     */
    cursor?: MonstersFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonstersFoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonstersFoods.
     */
    skip?: number
    distinct?: MonstersFoodScalarFieldEnum | MonstersFoodScalarFieldEnum[]
  }

  /**
   * MonstersFood create
   */
  export type MonstersFoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonstersFood
     */
    select?: MonstersFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonstersFoodInclude<ExtArgs> | null
    /**
     * The data needed to create a MonstersFood.
     */
    data: XOR<MonstersFoodCreateInput, MonstersFoodUncheckedCreateInput>
  }

  /**
   * MonstersFood createMany
   */
  export type MonstersFoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonstersFoods.
     */
    data: MonstersFoodCreateManyInput | MonstersFoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonstersFood createManyAndReturn
   */
  export type MonstersFoodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonstersFood
     */
    select?: MonstersFoodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MonstersFoods.
     */
    data: MonstersFoodCreateManyInput | MonstersFoodCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonstersFoodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MonstersFood update
   */
  export type MonstersFoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonstersFood
     */
    select?: MonstersFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonstersFoodInclude<ExtArgs> | null
    /**
     * The data needed to update a MonstersFood.
     */
    data: XOR<MonstersFoodUpdateInput, MonstersFoodUncheckedUpdateInput>
    /**
     * Choose, which MonstersFood to update.
     */
    where: MonstersFoodWhereUniqueInput
  }

  /**
   * MonstersFood updateMany
   */
  export type MonstersFoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonstersFoods.
     */
    data: XOR<MonstersFoodUpdateManyMutationInput, MonstersFoodUncheckedUpdateManyInput>
    /**
     * Filter which MonstersFoods to update
     */
    where?: MonstersFoodWhereInput
  }

  /**
   * MonstersFood upsert
   */
  export type MonstersFoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonstersFood
     */
    select?: MonstersFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonstersFoodInclude<ExtArgs> | null
    /**
     * The filter to search for the MonstersFood to update in case it exists.
     */
    where: MonstersFoodWhereUniqueInput
    /**
     * In case the MonstersFood found by the `where` argument doesn't exist, create a new MonstersFood with this data.
     */
    create: XOR<MonstersFoodCreateInput, MonstersFoodUncheckedCreateInput>
    /**
     * In case the MonstersFood was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonstersFoodUpdateInput, MonstersFoodUncheckedUpdateInput>
  }

  /**
   * MonstersFood delete
   */
  export type MonstersFoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonstersFood
     */
    select?: MonstersFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonstersFoodInclude<ExtArgs> | null
    /**
     * Filter which MonstersFood to delete.
     */
    where: MonstersFoodWhereUniqueInput
  }

  /**
   * MonstersFood deleteMany
   */
  export type MonstersFoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonstersFoods to delete
     */
    where?: MonstersFoodWhereInput
  }

  /**
   * MonstersFood without action
   */
  export type MonstersFoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonstersFood
     */
    select?: MonstersFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonstersFoodInclude<ExtArgs> | null
  }


  /**
   * Model DailyMonsters
   */

  export type AggregateDailyMonsters = {
    _count: DailyMonstersCountAggregateOutputType | null
    _min: DailyMonstersMinAggregateOutputType | null
    _max: DailyMonstersMaxAggregateOutputType | null
  }

  export type DailyMonstersMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updateAt: Date | null
    date: Date | null
    price: string | null
    isCoinsPrice: boolean | null
    monsterId: string | null
  }

  export type DailyMonstersMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updateAt: Date | null
    date: Date | null
    price: string | null
    isCoinsPrice: boolean | null
    monsterId: string | null
  }

  export type DailyMonstersCountAggregateOutputType = {
    id: number
    createdAt: number
    updateAt: number
    date: number
    price: number
    isCoinsPrice: number
    monsterId: number
    _all: number
  }


  export type DailyMonstersMinAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    date?: true
    price?: true
    isCoinsPrice?: true
    monsterId?: true
  }

  export type DailyMonstersMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    date?: true
    price?: true
    isCoinsPrice?: true
    monsterId?: true
  }

  export type DailyMonstersCountAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    date?: true
    price?: true
    isCoinsPrice?: true
    monsterId?: true
    _all?: true
  }

  export type DailyMonstersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyMonsters to aggregate.
     */
    where?: DailyMonstersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyMonsters to fetch.
     */
    orderBy?: DailyMonstersOrderByWithRelationInput | DailyMonstersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyMonstersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyMonsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyMonsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyMonsters
    **/
    _count?: true | DailyMonstersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyMonstersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyMonstersMaxAggregateInputType
  }

  export type GetDailyMonstersAggregateType<T extends DailyMonstersAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyMonsters]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyMonsters[P]>
      : GetScalarType<T[P], AggregateDailyMonsters[P]>
  }




  export type DailyMonstersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyMonstersWhereInput
    orderBy?: DailyMonstersOrderByWithAggregationInput | DailyMonstersOrderByWithAggregationInput[]
    by: DailyMonstersScalarFieldEnum[] | DailyMonstersScalarFieldEnum
    having?: DailyMonstersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyMonstersCountAggregateInputType | true
    _min?: DailyMonstersMinAggregateInputType
    _max?: DailyMonstersMaxAggregateInputType
  }

  export type DailyMonstersGroupByOutputType = {
    id: string
    createdAt: Date
    updateAt: Date
    date: Date
    price: string
    isCoinsPrice: boolean
    monsterId: string | null
    _count: DailyMonstersCountAggregateOutputType | null
    _min: DailyMonstersMinAggregateOutputType | null
    _max: DailyMonstersMaxAggregateOutputType | null
  }

  type GetDailyMonstersGroupByPayload<T extends DailyMonstersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyMonstersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyMonstersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyMonstersGroupByOutputType[P]>
            : GetScalarType<T[P], DailyMonstersGroupByOutputType[P]>
        }
      >
    >


  export type DailyMonstersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    date?: boolean
    price?: boolean
    isCoinsPrice?: boolean
    monsterId?: boolean
    monster?: boolean | DailyMonsters$monsterArgs<ExtArgs>
  }, ExtArgs["result"]["dailyMonsters"]>

  export type DailyMonstersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    date?: boolean
    price?: boolean
    isCoinsPrice?: boolean
    monsterId?: boolean
    monster?: boolean | DailyMonsters$monsterArgs<ExtArgs>
  }, ExtArgs["result"]["dailyMonsters"]>

  export type DailyMonstersSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    date?: boolean
    price?: boolean
    isCoinsPrice?: boolean
    monsterId?: boolean
  }

  export type DailyMonstersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monster?: boolean | DailyMonsters$monsterArgs<ExtArgs>
  }
  export type DailyMonstersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monster?: boolean | DailyMonsters$monsterArgs<ExtArgs>
  }

  export type $DailyMonstersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyMonsters"
    objects: {
      monster: Prisma.$MonsterPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updateAt: Date
      date: Date
      price: string
      isCoinsPrice: boolean
      monsterId: string | null
    }, ExtArgs["result"]["dailyMonsters"]>
    composites: {}
  }

  type DailyMonstersGetPayload<S extends boolean | null | undefined | DailyMonstersDefaultArgs> = $Result.GetResult<Prisma.$DailyMonstersPayload, S>

  type DailyMonstersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DailyMonstersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DailyMonstersCountAggregateInputType | true
    }

  export interface DailyMonstersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyMonsters'], meta: { name: 'DailyMonsters' } }
    /**
     * Find zero or one DailyMonsters that matches the filter.
     * @param {DailyMonstersFindUniqueArgs} args - Arguments to find a DailyMonsters
     * @example
     * // Get one DailyMonsters
     * const dailyMonsters = await prisma.dailyMonsters.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyMonstersFindUniqueArgs>(args: SelectSubset<T, DailyMonstersFindUniqueArgs<ExtArgs>>): Prisma__DailyMonstersClient<$Result.GetResult<Prisma.$DailyMonstersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DailyMonsters that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DailyMonstersFindUniqueOrThrowArgs} args - Arguments to find a DailyMonsters
     * @example
     * // Get one DailyMonsters
     * const dailyMonsters = await prisma.dailyMonsters.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyMonstersFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyMonstersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyMonstersClient<$Result.GetResult<Prisma.$DailyMonstersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DailyMonsters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMonstersFindFirstArgs} args - Arguments to find a DailyMonsters
     * @example
     * // Get one DailyMonsters
     * const dailyMonsters = await prisma.dailyMonsters.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyMonstersFindFirstArgs>(args?: SelectSubset<T, DailyMonstersFindFirstArgs<ExtArgs>>): Prisma__DailyMonstersClient<$Result.GetResult<Prisma.$DailyMonstersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DailyMonsters that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMonstersFindFirstOrThrowArgs} args - Arguments to find a DailyMonsters
     * @example
     * // Get one DailyMonsters
     * const dailyMonsters = await prisma.dailyMonsters.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyMonstersFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyMonstersFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyMonstersClient<$Result.GetResult<Prisma.$DailyMonstersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DailyMonsters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMonstersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyMonsters
     * const dailyMonsters = await prisma.dailyMonsters.findMany()
     * 
     * // Get first 10 DailyMonsters
     * const dailyMonsters = await prisma.dailyMonsters.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyMonstersWithIdOnly = await prisma.dailyMonsters.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyMonstersFindManyArgs>(args?: SelectSubset<T, DailyMonstersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyMonstersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DailyMonsters.
     * @param {DailyMonstersCreateArgs} args - Arguments to create a DailyMonsters.
     * @example
     * // Create one DailyMonsters
     * const DailyMonsters = await prisma.dailyMonsters.create({
     *   data: {
     *     // ... data to create a DailyMonsters
     *   }
     * })
     * 
     */
    create<T extends DailyMonstersCreateArgs>(args: SelectSubset<T, DailyMonstersCreateArgs<ExtArgs>>): Prisma__DailyMonstersClient<$Result.GetResult<Prisma.$DailyMonstersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DailyMonsters.
     * @param {DailyMonstersCreateManyArgs} args - Arguments to create many DailyMonsters.
     * @example
     * // Create many DailyMonsters
     * const dailyMonsters = await prisma.dailyMonsters.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyMonstersCreateManyArgs>(args?: SelectSubset<T, DailyMonstersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyMonsters and returns the data saved in the database.
     * @param {DailyMonstersCreateManyAndReturnArgs} args - Arguments to create many DailyMonsters.
     * @example
     * // Create many DailyMonsters
     * const dailyMonsters = await prisma.dailyMonsters.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyMonsters and only return the `id`
     * const dailyMonstersWithIdOnly = await prisma.dailyMonsters.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyMonstersCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyMonstersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyMonstersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DailyMonsters.
     * @param {DailyMonstersDeleteArgs} args - Arguments to delete one DailyMonsters.
     * @example
     * // Delete one DailyMonsters
     * const DailyMonsters = await prisma.dailyMonsters.delete({
     *   where: {
     *     // ... filter to delete one DailyMonsters
     *   }
     * })
     * 
     */
    delete<T extends DailyMonstersDeleteArgs>(args: SelectSubset<T, DailyMonstersDeleteArgs<ExtArgs>>): Prisma__DailyMonstersClient<$Result.GetResult<Prisma.$DailyMonstersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DailyMonsters.
     * @param {DailyMonstersUpdateArgs} args - Arguments to update one DailyMonsters.
     * @example
     * // Update one DailyMonsters
     * const dailyMonsters = await prisma.dailyMonsters.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyMonstersUpdateArgs>(args: SelectSubset<T, DailyMonstersUpdateArgs<ExtArgs>>): Prisma__DailyMonstersClient<$Result.GetResult<Prisma.$DailyMonstersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DailyMonsters.
     * @param {DailyMonstersDeleteManyArgs} args - Arguments to filter DailyMonsters to delete.
     * @example
     * // Delete a few DailyMonsters
     * const { count } = await prisma.dailyMonsters.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyMonstersDeleteManyArgs>(args?: SelectSubset<T, DailyMonstersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyMonsters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMonstersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyMonsters
     * const dailyMonsters = await prisma.dailyMonsters.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyMonstersUpdateManyArgs>(args: SelectSubset<T, DailyMonstersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyMonsters.
     * @param {DailyMonstersUpsertArgs} args - Arguments to update or create a DailyMonsters.
     * @example
     * // Update or create a DailyMonsters
     * const dailyMonsters = await prisma.dailyMonsters.upsert({
     *   create: {
     *     // ... data to create a DailyMonsters
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyMonsters we want to update
     *   }
     * })
     */
    upsert<T extends DailyMonstersUpsertArgs>(args: SelectSubset<T, DailyMonstersUpsertArgs<ExtArgs>>): Prisma__DailyMonstersClient<$Result.GetResult<Prisma.$DailyMonstersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DailyMonsters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMonstersCountArgs} args - Arguments to filter DailyMonsters to count.
     * @example
     * // Count the number of DailyMonsters
     * const count = await prisma.dailyMonsters.count({
     *   where: {
     *     // ... the filter for the DailyMonsters we want to count
     *   }
     * })
    **/
    count<T extends DailyMonstersCountArgs>(
      args?: Subset<T, DailyMonstersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyMonstersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyMonsters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMonstersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyMonstersAggregateArgs>(args: Subset<T, DailyMonstersAggregateArgs>): Prisma.PrismaPromise<GetDailyMonstersAggregateType<T>>

    /**
     * Group by DailyMonsters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyMonstersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyMonstersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyMonstersGroupByArgs['orderBy'] }
        : { orderBy?: DailyMonstersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyMonstersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyMonstersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyMonsters model
   */
  readonly fields: DailyMonstersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyMonsters.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyMonstersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    monster<T extends DailyMonsters$monsterArgs<ExtArgs> = {}>(args?: Subset<T, DailyMonsters$monsterArgs<ExtArgs>>): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyMonsters model
   */ 
  interface DailyMonstersFieldRefs {
    readonly id: FieldRef<"DailyMonsters", 'String'>
    readonly createdAt: FieldRef<"DailyMonsters", 'DateTime'>
    readonly updateAt: FieldRef<"DailyMonsters", 'DateTime'>
    readonly date: FieldRef<"DailyMonsters", 'DateTime'>
    readonly price: FieldRef<"DailyMonsters", 'String'>
    readonly isCoinsPrice: FieldRef<"DailyMonsters", 'Boolean'>
    readonly monsterId: FieldRef<"DailyMonsters", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DailyMonsters findUnique
   */
  export type DailyMonstersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonsters
     */
    select?: DailyMonstersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonstersInclude<ExtArgs> | null
    /**
     * Filter, which DailyMonsters to fetch.
     */
    where: DailyMonstersWhereUniqueInput
  }

  /**
   * DailyMonsters findUniqueOrThrow
   */
  export type DailyMonstersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonsters
     */
    select?: DailyMonstersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonstersInclude<ExtArgs> | null
    /**
     * Filter, which DailyMonsters to fetch.
     */
    where: DailyMonstersWhereUniqueInput
  }

  /**
   * DailyMonsters findFirst
   */
  export type DailyMonstersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonsters
     */
    select?: DailyMonstersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonstersInclude<ExtArgs> | null
    /**
     * Filter, which DailyMonsters to fetch.
     */
    where?: DailyMonstersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyMonsters to fetch.
     */
    orderBy?: DailyMonstersOrderByWithRelationInput | DailyMonstersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyMonsters.
     */
    cursor?: DailyMonstersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyMonsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyMonsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyMonsters.
     */
    distinct?: DailyMonstersScalarFieldEnum | DailyMonstersScalarFieldEnum[]
  }

  /**
   * DailyMonsters findFirstOrThrow
   */
  export type DailyMonstersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonsters
     */
    select?: DailyMonstersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonstersInclude<ExtArgs> | null
    /**
     * Filter, which DailyMonsters to fetch.
     */
    where?: DailyMonstersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyMonsters to fetch.
     */
    orderBy?: DailyMonstersOrderByWithRelationInput | DailyMonstersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyMonsters.
     */
    cursor?: DailyMonstersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyMonsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyMonsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyMonsters.
     */
    distinct?: DailyMonstersScalarFieldEnum | DailyMonstersScalarFieldEnum[]
  }

  /**
   * DailyMonsters findMany
   */
  export type DailyMonstersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonsters
     */
    select?: DailyMonstersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonstersInclude<ExtArgs> | null
    /**
     * Filter, which DailyMonsters to fetch.
     */
    where?: DailyMonstersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyMonsters to fetch.
     */
    orderBy?: DailyMonstersOrderByWithRelationInput | DailyMonstersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyMonsters.
     */
    cursor?: DailyMonstersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyMonsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyMonsters.
     */
    skip?: number
    distinct?: DailyMonstersScalarFieldEnum | DailyMonstersScalarFieldEnum[]
  }

  /**
   * DailyMonsters create
   */
  export type DailyMonstersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonsters
     */
    select?: DailyMonstersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonstersInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyMonsters.
     */
    data: XOR<DailyMonstersCreateInput, DailyMonstersUncheckedCreateInput>
  }

  /**
   * DailyMonsters createMany
   */
  export type DailyMonstersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyMonsters.
     */
    data: DailyMonstersCreateManyInput | DailyMonstersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyMonsters createManyAndReturn
   */
  export type DailyMonstersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonsters
     */
    select?: DailyMonstersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DailyMonsters.
     */
    data: DailyMonstersCreateManyInput | DailyMonstersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonstersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyMonsters update
   */
  export type DailyMonstersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonsters
     */
    select?: DailyMonstersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonstersInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyMonsters.
     */
    data: XOR<DailyMonstersUpdateInput, DailyMonstersUncheckedUpdateInput>
    /**
     * Choose, which DailyMonsters to update.
     */
    where: DailyMonstersWhereUniqueInput
  }

  /**
   * DailyMonsters updateMany
   */
  export type DailyMonstersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyMonsters.
     */
    data: XOR<DailyMonstersUpdateManyMutationInput, DailyMonstersUncheckedUpdateManyInput>
    /**
     * Filter which DailyMonsters to update
     */
    where?: DailyMonstersWhereInput
  }

  /**
   * DailyMonsters upsert
   */
  export type DailyMonstersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonsters
     */
    select?: DailyMonstersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonstersInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyMonsters to update in case it exists.
     */
    where: DailyMonstersWhereUniqueInput
    /**
     * In case the DailyMonsters found by the `where` argument doesn't exist, create a new DailyMonsters with this data.
     */
    create: XOR<DailyMonstersCreateInput, DailyMonstersUncheckedCreateInput>
    /**
     * In case the DailyMonsters was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyMonstersUpdateInput, DailyMonstersUncheckedUpdateInput>
  }

  /**
   * DailyMonsters delete
   */
  export type DailyMonstersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonsters
     */
    select?: DailyMonstersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonstersInclude<ExtArgs> | null
    /**
     * Filter which DailyMonsters to delete.
     */
    where: DailyMonstersWhereUniqueInput
  }

  /**
   * DailyMonsters deleteMany
   */
  export type DailyMonstersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyMonsters to delete
     */
    where?: DailyMonstersWhereInput
  }

  /**
   * DailyMonsters.monster
   */
  export type DailyMonsters$monsterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonsterInclude<ExtArgs> | null
    where?: MonsterWhereInput
  }

  /**
   * DailyMonsters without action
   */
  export type DailyMonstersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyMonsters
     */
    select?: DailyMonstersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyMonstersInclude<ExtArgs> | null
  }


  /**
   * Model Pack
   */

  export type AggregatePack = {
    _count: PackCountAggregateOutputType | null
    _avg: PackAvgAggregateOutputType | null
    _sum: PackSumAggregateOutputType | null
    _min: PackMinAggregateOutputType | null
    _max: PackMaxAggregateOutputType | null
  }

  export type PackAvgAggregateOutputType = {
    priceCoin: number | null
    priceCrystal: number | null
    coinMin: number | null
    coinMax: number | null
    crystalMin: number | null
    crystalMax: number | null
    percentDropMonster: number | null
  }

  export type PackSumAggregateOutputType = {
    priceCoin: number | null
    priceCrystal: number | null
    coinMin: number | null
    coinMax: number | null
    crystalMin: number | null
    crystalMax: number | null
    percentDropMonster: number | null
  }

  export type PackMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updateAt: Date | null
    name: string | null
    description: string | null
    img: string | null
    type: string | null
    endAt: Date | null
    priceCoin: number | null
    priceCrystal: number | null
    coinMin: number | null
    coinMax: number | null
    crystalMin: number | null
    crystalMax: number | null
    percentDropMonster: number | null
  }

  export type PackMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updateAt: Date | null
    name: string | null
    description: string | null
    img: string | null
    type: string | null
    endAt: Date | null
    priceCoin: number | null
    priceCrystal: number | null
    coinMin: number | null
    coinMax: number | null
    crystalMin: number | null
    crystalMax: number | null
    percentDropMonster: number | null
  }

  export type PackCountAggregateOutputType = {
    id: number
    createdAt: number
    updateAt: number
    name: number
    description: number
    img: number
    type: number
    endAt: number
    priceCoin: number
    priceCrystal: number
    coinMin: number
    coinMax: number
    crystalMin: number
    crystalMax: number
    percentDropMonster: number
    monsters: number
    _all: number
  }


  export type PackAvgAggregateInputType = {
    priceCoin?: true
    priceCrystal?: true
    coinMin?: true
    coinMax?: true
    crystalMin?: true
    crystalMax?: true
    percentDropMonster?: true
  }

  export type PackSumAggregateInputType = {
    priceCoin?: true
    priceCrystal?: true
    coinMin?: true
    coinMax?: true
    crystalMin?: true
    crystalMax?: true
    percentDropMonster?: true
  }

  export type PackMinAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    name?: true
    description?: true
    img?: true
    type?: true
    endAt?: true
    priceCoin?: true
    priceCrystal?: true
    coinMin?: true
    coinMax?: true
    crystalMin?: true
    crystalMax?: true
    percentDropMonster?: true
  }

  export type PackMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    name?: true
    description?: true
    img?: true
    type?: true
    endAt?: true
    priceCoin?: true
    priceCrystal?: true
    coinMin?: true
    coinMax?: true
    crystalMin?: true
    crystalMax?: true
    percentDropMonster?: true
  }

  export type PackCountAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    name?: true
    description?: true
    img?: true
    type?: true
    endAt?: true
    priceCoin?: true
    priceCrystal?: true
    coinMin?: true
    coinMax?: true
    crystalMin?: true
    crystalMax?: true
    percentDropMonster?: true
    monsters?: true
    _all?: true
  }

  export type PackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pack to aggregate.
     */
    where?: PackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packs to fetch.
     */
    orderBy?: PackOrderByWithRelationInput | PackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Packs
    **/
    _count?: true | PackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackMaxAggregateInputType
  }

  export type GetPackAggregateType<T extends PackAggregateArgs> = {
        [P in keyof T & keyof AggregatePack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePack[P]>
      : GetScalarType<T[P], AggregatePack[P]>
  }




  export type PackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackWhereInput
    orderBy?: PackOrderByWithAggregationInput | PackOrderByWithAggregationInput[]
    by: PackScalarFieldEnum[] | PackScalarFieldEnum
    having?: PackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackCountAggregateInputType | true
    _avg?: PackAvgAggregateInputType
    _sum?: PackSumAggregateInputType
    _min?: PackMinAggregateInputType
    _max?: PackMaxAggregateInputType
  }

  export type PackGroupByOutputType = {
    id: string
    createdAt: Date
    updateAt: Date
    name: string
    description: string
    img: string
    type: string
    endAt: Date | null
    priceCoin: number | null
    priceCrystal: number | null
    coinMin: number
    coinMax: number
    crystalMin: number
    crystalMax: number
    percentDropMonster: number
    monsters: JsonValue | null
    _count: PackCountAggregateOutputType | null
    _avg: PackAvgAggregateOutputType | null
    _sum: PackSumAggregateOutputType | null
    _min: PackMinAggregateOutputType | null
    _max: PackMaxAggregateOutputType | null
  }

  type GetPackGroupByPayload<T extends PackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackGroupByOutputType[P]>
            : GetScalarType<T[P], PackGroupByOutputType[P]>
        }
      >
    >


  export type PackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    name?: boolean
    description?: boolean
    img?: boolean
    type?: boolean
    endAt?: boolean
    priceCoin?: boolean
    priceCrystal?: boolean
    coinMin?: boolean
    coinMax?: boolean
    crystalMin?: boolean
    crystalMax?: boolean
    percentDropMonster?: boolean
    monsters?: boolean
  }, ExtArgs["result"]["pack"]>

  export type PackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    name?: boolean
    description?: boolean
    img?: boolean
    type?: boolean
    endAt?: boolean
    priceCoin?: boolean
    priceCrystal?: boolean
    coinMin?: boolean
    coinMax?: boolean
    crystalMin?: boolean
    crystalMax?: boolean
    percentDropMonster?: boolean
    monsters?: boolean
  }, ExtArgs["result"]["pack"]>

  export type PackSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    name?: boolean
    description?: boolean
    img?: boolean
    type?: boolean
    endAt?: boolean
    priceCoin?: boolean
    priceCrystal?: boolean
    coinMin?: boolean
    coinMax?: boolean
    crystalMin?: boolean
    crystalMax?: boolean
    percentDropMonster?: boolean
    monsters?: boolean
  }


  export type $PackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pack"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updateAt: Date
      name: string
      description: string
      img: string
      type: string
      endAt: Date | null
      priceCoin: number | null
      priceCrystal: number | null
      coinMin: number
      coinMax: number
      crystalMin: number
      crystalMax: number
      percentDropMonster: number
      monsters: Prisma.JsonValue | null
    }, ExtArgs["result"]["pack"]>
    composites: {}
  }

  type PackGetPayload<S extends boolean | null | undefined | PackDefaultArgs> = $Result.GetResult<Prisma.$PackPayload, S>

  type PackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PackFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PackCountAggregateInputType | true
    }

  export interface PackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pack'], meta: { name: 'Pack' } }
    /**
     * Find zero or one Pack that matches the filter.
     * @param {PackFindUniqueArgs} args - Arguments to find a Pack
     * @example
     * // Get one Pack
     * const pack = await prisma.pack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackFindUniqueArgs>(args: SelectSubset<T, PackFindUniqueArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pack that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PackFindUniqueOrThrowArgs} args - Arguments to find a Pack
     * @example
     * // Get one Pack
     * const pack = await prisma.pack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackFindUniqueOrThrowArgs>(args: SelectSubset<T, PackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackFindFirstArgs} args - Arguments to find a Pack
     * @example
     * // Get one Pack
     * const pack = await prisma.pack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackFindFirstArgs>(args?: SelectSubset<T, PackFindFirstArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackFindFirstOrThrowArgs} args - Arguments to find a Pack
     * @example
     * // Get one Pack
     * const pack = await prisma.pack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackFindFirstOrThrowArgs>(args?: SelectSubset<T, PackFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Packs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Packs
     * const packs = await prisma.pack.findMany()
     * 
     * // Get first 10 Packs
     * const packs = await prisma.pack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packWithIdOnly = await prisma.pack.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackFindManyArgs>(args?: SelectSubset<T, PackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pack.
     * @param {PackCreateArgs} args - Arguments to create a Pack.
     * @example
     * // Create one Pack
     * const Pack = await prisma.pack.create({
     *   data: {
     *     // ... data to create a Pack
     *   }
     * })
     * 
     */
    create<T extends PackCreateArgs>(args: SelectSubset<T, PackCreateArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Packs.
     * @param {PackCreateManyArgs} args - Arguments to create many Packs.
     * @example
     * // Create many Packs
     * const pack = await prisma.pack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackCreateManyArgs>(args?: SelectSubset<T, PackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Packs and returns the data saved in the database.
     * @param {PackCreateManyAndReturnArgs} args - Arguments to create many Packs.
     * @example
     * // Create many Packs
     * const pack = await prisma.pack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Packs and only return the `id`
     * const packWithIdOnly = await prisma.pack.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PackCreateManyAndReturnArgs>(args?: SelectSubset<T, PackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Pack.
     * @param {PackDeleteArgs} args - Arguments to delete one Pack.
     * @example
     * // Delete one Pack
     * const Pack = await prisma.pack.delete({
     *   where: {
     *     // ... filter to delete one Pack
     *   }
     * })
     * 
     */
    delete<T extends PackDeleteArgs>(args: SelectSubset<T, PackDeleteArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pack.
     * @param {PackUpdateArgs} args - Arguments to update one Pack.
     * @example
     * // Update one Pack
     * const pack = await prisma.pack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackUpdateArgs>(args: SelectSubset<T, PackUpdateArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Packs.
     * @param {PackDeleteManyArgs} args - Arguments to filter Packs to delete.
     * @example
     * // Delete a few Packs
     * const { count } = await prisma.pack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackDeleteManyArgs>(args?: SelectSubset<T, PackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Packs
     * const pack = await prisma.pack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackUpdateManyArgs>(args: SelectSubset<T, PackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pack.
     * @param {PackUpsertArgs} args - Arguments to update or create a Pack.
     * @example
     * // Update or create a Pack
     * const pack = await prisma.pack.upsert({
     *   create: {
     *     // ... data to create a Pack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pack we want to update
     *   }
     * })
     */
    upsert<T extends PackUpsertArgs>(args: SelectSubset<T, PackUpsertArgs<ExtArgs>>): Prisma__PackClient<$Result.GetResult<Prisma.$PackPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Packs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackCountArgs} args - Arguments to filter Packs to count.
     * @example
     * // Count the number of Packs
     * const count = await prisma.pack.count({
     *   where: {
     *     // ... the filter for the Packs we want to count
     *   }
     * })
    **/
    count<T extends PackCountArgs>(
      args?: Subset<T, PackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PackAggregateArgs>(args: Subset<T, PackAggregateArgs>): Prisma.PrismaPromise<GetPackAggregateType<T>>

    /**
     * Group by Pack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackGroupByArgs['orderBy'] }
        : { orderBy?: PackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pack model
   */
  readonly fields: PackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pack model
   */ 
  interface PackFieldRefs {
    readonly id: FieldRef<"Pack", 'String'>
    readonly createdAt: FieldRef<"Pack", 'DateTime'>
    readonly updateAt: FieldRef<"Pack", 'DateTime'>
    readonly name: FieldRef<"Pack", 'String'>
    readonly description: FieldRef<"Pack", 'String'>
    readonly img: FieldRef<"Pack", 'String'>
    readonly type: FieldRef<"Pack", 'String'>
    readonly endAt: FieldRef<"Pack", 'DateTime'>
    readonly priceCoin: FieldRef<"Pack", 'Int'>
    readonly priceCrystal: FieldRef<"Pack", 'Int'>
    readonly coinMin: FieldRef<"Pack", 'Int'>
    readonly coinMax: FieldRef<"Pack", 'Int'>
    readonly crystalMin: FieldRef<"Pack", 'Int'>
    readonly crystalMax: FieldRef<"Pack", 'Int'>
    readonly percentDropMonster: FieldRef<"Pack", 'Int'>
    readonly monsters: FieldRef<"Pack", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Pack findUnique
   */
  export type PackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Filter, which Pack to fetch.
     */
    where: PackWhereUniqueInput
  }

  /**
   * Pack findUniqueOrThrow
   */
  export type PackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Filter, which Pack to fetch.
     */
    where: PackWhereUniqueInput
  }

  /**
   * Pack findFirst
   */
  export type PackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Filter, which Pack to fetch.
     */
    where?: PackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packs to fetch.
     */
    orderBy?: PackOrderByWithRelationInput | PackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packs.
     */
    cursor?: PackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packs.
     */
    distinct?: PackScalarFieldEnum | PackScalarFieldEnum[]
  }

  /**
   * Pack findFirstOrThrow
   */
  export type PackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Filter, which Pack to fetch.
     */
    where?: PackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packs to fetch.
     */
    orderBy?: PackOrderByWithRelationInput | PackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packs.
     */
    cursor?: PackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packs.
     */
    distinct?: PackScalarFieldEnum | PackScalarFieldEnum[]
  }

  /**
   * Pack findMany
   */
  export type PackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Filter, which Packs to fetch.
     */
    where?: PackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packs to fetch.
     */
    orderBy?: PackOrderByWithRelationInput | PackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Packs.
     */
    cursor?: PackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packs.
     */
    skip?: number
    distinct?: PackScalarFieldEnum | PackScalarFieldEnum[]
  }

  /**
   * Pack create
   */
  export type PackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * The data needed to create a Pack.
     */
    data: XOR<PackCreateInput, PackUncheckedCreateInput>
  }

  /**
   * Pack createMany
   */
  export type PackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Packs.
     */
    data: PackCreateManyInput | PackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pack createManyAndReturn
   */
  export type PackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Packs.
     */
    data: PackCreateManyInput | PackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pack update
   */
  export type PackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * The data needed to update a Pack.
     */
    data: XOR<PackUpdateInput, PackUncheckedUpdateInput>
    /**
     * Choose, which Pack to update.
     */
    where: PackWhereUniqueInput
  }

  /**
   * Pack updateMany
   */
  export type PackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Packs.
     */
    data: XOR<PackUpdateManyMutationInput, PackUncheckedUpdateManyInput>
    /**
     * Filter which Packs to update
     */
    where?: PackWhereInput
  }

  /**
   * Pack upsert
   */
  export type PackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * The filter to search for the Pack to update in case it exists.
     */
    where: PackWhereUniqueInput
    /**
     * In case the Pack found by the `where` argument doesn't exist, create a new Pack with this data.
     */
    create: XOR<PackCreateInput, PackUncheckedCreateInput>
    /**
     * In case the Pack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackUpdateInput, PackUncheckedUpdateInput>
  }

  /**
   * Pack delete
   */
  export type PackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
    /**
     * Filter which Pack to delete.
     */
    where: PackWhereUniqueInput
  }

  /**
   * Pack deleteMany
   */
  export type PackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packs to delete
     */
    where?: PackWhereInput
  }

  /**
   * Pack without action
   */
  export type PackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pack
     */
    select?: PackSelect<ExtArgs> | null
  }


  /**
   * Model Food
   */

  export type AggregateFood = {
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  export type FoodAvgAggregateOutputType = {
    time: number | null
    price: number | null
    mucus: number | null
    tentacle: number | null
    fish: number | null
    eye: number | null
    wing: number | null
    fly: number | null
    bone: number | null
  }

  export type FoodSumAggregateOutputType = {
    time: number | null
    price: number | null
    mucus: number | null
    tentacle: number | null
    fish: number | null
    eye: number | null
    wing: number | null
    fly: number | null
    bone: number | null
  }

  export type FoodMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updateAt: Date | null
    name: string | null
    img: string | null
    time: number | null
    price: number | null
    isCoins: boolean | null
    mucus: number | null
    tentacle: number | null
    fish: number | null
    eye: number | null
    wing: number | null
    fly: number | null
    bone: number | null
  }

  export type FoodMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updateAt: Date | null
    name: string | null
    img: string | null
    time: number | null
    price: number | null
    isCoins: boolean | null
    mucus: number | null
    tentacle: number | null
    fish: number | null
    eye: number | null
    wing: number | null
    fly: number | null
    bone: number | null
  }

  export type FoodCountAggregateOutputType = {
    id: number
    createdAt: number
    updateAt: number
    name: number
    img: number
    time: number
    price: number
    isCoins: number
    mucus: number
    tentacle: number
    fish: number
    eye: number
    wing: number
    fly: number
    bone: number
    _all: number
  }


  export type FoodAvgAggregateInputType = {
    time?: true
    price?: true
    mucus?: true
    tentacle?: true
    fish?: true
    eye?: true
    wing?: true
    fly?: true
    bone?: true
  }

  export type FoodSumAggregateInputType = {
    time?: true
    price?: true
    mucus?: true
    tentacle?: true
    fish?: true
    eye?: true
    wing?: true
    fly?: true
    bone?: true
  }

  export type FoodMinAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    name?: true
    img?: true
    time?: true
    price?: true
    isCoins?: true
    mucus?: true
    tentacle?: true
    fish?: true
    eye?: true
    wing?: true
    fly?: true
    bone?: true
  }

  export type FoodMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    name?: true
    img?: true
    time?: true
    price?: true
    isCoins?: true
    mucus?: true
    tentacle?: true
    fish?: true
    eye?: true
    wing?: true
    fly?: true
    bone?: true
  }

  export type FoodCountAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    name?: true
    img?: true
    time?: true
    price?: true
    isCoins?: true
    mucus?: true
    tentacle?: true
    fish?: true
    eye?: true
    wing?: true
    fly?: true
    bone?: true
    _all?: true
  }

  export type FoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Food to aggregate.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Foods
    **/
    _count?: true | FoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodMaxAggregateInputType
  }

  export type GetFoodAggregateType<T extends FoodAggregateArgs> = {
        [P in keyof T & keyof AggregateFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood[P]>
      : GetScalarType<T[P], AggregateFood[P]>
  }




  export type FoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithAggregationInput | FoodOrderByWithAggregationInput[]
    by: FoodScalarFieldEnum[] | FoodScalarFieldEnum
    having?: FoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodCountAggregateInputType | true
    _avg?: FoodAvgAggregateInputType
    _sum?: FoodSumAggregateInputType
    _min?: FoodMinAggregateInputType
    _max?: FoodMaxAggregateInputType
  }

  export type FoodGroupByOutputType = {
    id: string
    createdAt: Date
    updateAt: Date
    name: string
    img: string
    time: number
    price: number
    isCoins: boolean
    mucus: number
    tentacle: number
    fish: number
    eye: number
    wing: number
    fly: number
    bone: number
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  type GetFoodGroupByPayload<T extends FoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodGroupByOutputType[P]>
            : GetScalarType<T[P], FoodGroupByOutputType[P]>
        }
      >
    >


  export type FoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    name?: boolean
    img?: boolean
    time?: boolean
    price?: boolean
    isCoins?: boolean
    mucus?: boolean
    tentacle?: boolean
    fish?: boolean
    eye?: boolean
    wing?: boolean
    fly?: boolean
    bone?: boolean
    monstersFood?: boolean | Food$monstersFoodArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    name?: boolean
    img?: boolean
    time?: boolean
    price?: boolean
    isCoins?: boolean
    mucus?: boolean
    tentacle?: boolean
    fish?: boolean
    eye?: boolean
    wing?: boolean
    fly?: boolean
    bone?: boolean
  }, ExtArgs["result"]["food"]>

  export type FoodSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    name?: boolean
    img?: boolean
    time?: boolean
    price?: boolean
    isCoins?: boolean
    mucus?: boolean
    tentacle?: boolean
    fish?: boolean
    eye?: boolean
    wing?: boolean
    fly?: boolean
    bone?: boolean
  }

  export type FoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monstersFood?: boolean | Food$monstersFoodArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FoodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Food"
    objects: {
      monstersFood: Prisma.$MonstersFoodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updateAt: Date
      name: string
      img: string
      time: number
      price: number
      isCoins: boolean
      mucus: number
      tentacle: number
      fish: number
      eye: number
      wing: number
      fly: number
      bone: number
    }, ExtArgs["result"]["food"]>
    composites: {}
  }

  type FoodGetPayload<S extends boolean | null | undefined | FoodDefaultArgs> = $Result.GetResult<Prisma.$FoodPayload, S>

  type FoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FoodFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FoodCountAggregateInputType | true
    }

  export interface FoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Food'], meta: { name: 'Food' } }
    /**
     * Find zero or one Food that matches the filter.
     * @param {FoodFindUniqueArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodFindUniqueArgs>(args: SelectSubset<T, FoodFindUniqueArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Food that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FoodFindUniqueOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Food that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodFindFirstArgs>(args?: SelectSubset<T, FoodFindFirstArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Food that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foods
     * const foods = await prisma.food.findMany()
     * 
     * // Get first 10 Foods
     * const foods = await prisma.food.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodWithIdOnly = await prisma.food.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodFindManyArgs>(args?: SelectSubset<T, FoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Food.
     * @param {FoodCreateArgs} args - Arguments to create a Food.
     * @example
     * // Create one Food
     * const Food = await prisma.food.create({
     *   data: {
     *     // ... data to create a Food
     *   }
     * })
     * 
     */
    create<T extends FoodCreateArgs>(args: SelectSubset<T, FoodCreateArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Foods.
     * @param {FoodCreateManyArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodCreateManyArgs>(args?: SelectSubset<T, FoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Foods and returns the data saved in the database.
     * @param {FoodCreateManyAndReturnArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Foods and only return the `id`
     * const foodWithIdOnly = await prisma.food.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Food.
     * @param {FoodDeleteArgs} args - Arguments to delete one Food.
     * @example
     * // Delete one Food
     * const Food = await prisma.food.delete({
     *   where: {
     *     // ... filter to delete one Food
     *   }
     * })
     * 
     */
    delete<T extends FoodDeleteArgs>(args: SelectSubset<T, FoodDeleteArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Food.
     * @param {FoodUpdateArgs} args - Arguments to update one Food.
     * @example
     * // Update one Food
     * const food = await prisma.food.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodUpdateArgs>(args: SelectSubset<T, FoodUpdateArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Foods.
     * @param {FoodDeleteManyArgs} args - Arguments to filter Foods to delete.
     * @example
     * // Delete a few Foods
     * const { count } = await prisma.food.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodDeleteManyArgs>(args?: SelectSubset<T, FoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodUpdateManyArgs>(args: SelectSubset<T, FoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Food.
     * @param {FoodUpsertArgs} args - Arguments to update or create a Food.
     * @example
     * // Update or create a Food
     * const food = await prisma.food.upsert({
     *   create: {
     *     // ... data to create a Food
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food we want to update
     *   }
     * })
     */
    upsert<T extends FoodUpsertArgs>(args: SelectSubset<T, FoodUpsertArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCountArgs} args - Arguments to filter Foods to count.
     * @example
     * // Count the number of Foods
     * const count = await prisma.food.count({
     *   where: {
     *     // ... the filter for the Foods we want to count
     *   }
     * })
    **/
    count<T extends FoodCountArgs>(
      args?: Subset<T, FoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodAggregateArgs>(args: Subset<T, FoodAggregateArgs>): Prisma.PrismaPromise<GetFoodAggregateType<T>>

    /**
     * Group by Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodGroupByArgs['orderBy'] }
        : { orderBy?: FoodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Food model
   */
  readonly fields: FoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Food.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    monstersFood<T extends Food$monstersFoodArgs<ExtArgs> = {}>(args?: Subset<T, Food$monstersFoodArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonstersFoodPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Food model
   */ 
  interface FoodFieldRefs {
    readonly id: FieldRef<"Food", 'String'>
    readonly createdAt: FieldRef<"Food", 'DateTime'>
    readonly updateAt: FieldRef<"Food", 'DateTime'>
    readonly name: FieldRef<"Food", 'String'>
    readonly img: FieldRef<"Food", 'String'>
    readonly time: FieldRef<"Food", 'Int'>
    readonly price: FieldRef<"Food", 'Int'>
    readonly isCoins: FieldRef<"Food", 'Boolean'>
    readonly mucus: FieldRef<"Food", 'Int'>
    readonly tentacle: FieldRef<"Food", 'Int'>
    readonly fish: FieldRef<"Food", 'Int'>
    readonly eye: FieldRef<"Food", 'Int'>
    readonly wing: FieldRef<"Food", 'Int'>
    readonly fly: FieldRef<"Food", 'Int'>
    readonly bone: FieldRef<"Food", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Food findUnique
   */
  export type FoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findUniqueOrThrow
   */
  export type FoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findFirst
   */
  export type FoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food findFirstOrThrow
   */
  export type FoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food findMany
   */
  export type FoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food create
   */
  export type FoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to create a Food.
     */
    data: XOR<FoodCreateInput, FoodUncheckedCreateInput>
  }

  /**
   * Food createMany
   */
  export type FoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Foods.
     */
    data: FoodCreateManyInput | FoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Food createManyAndReturn
   */
  export type FoodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Foods.
     */
    data: FoodCreateManyInput | FoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Food update
   */
  export type FoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to update a Food.
     */
    data: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
    /**
     * Choose, which Food to update.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food updateMany
   */
  export type FoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodWhereInput
  }

  /**
   * Food upsert
   */
  export type FoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The filter to search for the Food to update in case it exists.
     */
    where: FoodWhereUniqueInput
    /**
     * In case the Food found by the `where` argument doesn't exist, create a new Food with this data.
     */
    create: XOR<FoodCreateInput, FoodUncheckedCreateInput>
    /**
     * In case the Food was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
  }

  /**
   * Food delete
   */
  export type FoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter which Food to delete.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food deleteMany
   */
  export type FoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foods to delete
     */
    where?: FoodWhereInput
  }

  /**
   * Food.monstersFood
   */
  export type Food$monstersFoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonstersFood
     */
    select?: MonstersFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonstersFoodInclude<ExtArgs> | null
    where?: MonstersFoodWhereInput
    orderBy?: MonstersFoodOrderByWithRelationInput | MonstersFoodOrderByWithRelationInput[]
    cursor?: MonstersFoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonstersFoodScalarFieldEnum | MonstersFoodScalarFieldEnum[]
  }

  /**
   * Food without action
   */
  export type FoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TypeMonsterScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updateAt: 'updateAt',
    name: 'name',
    img: 'img',
    element: 'element',
    description: 'description'
  };

  export type TypeMonsterScalarFieldEnum = (typeof TypeMonsterScalarFieldEnum)[keyof typeof TypeMonsterScalarFieldEnum]


  export const MonsterScalarFieldEnum: {
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

  export type MonsterScalarFieldEnum = (typeof MonsterScalarFieldEnum)[keyof typeof MonsterScalarFieldEnum]


  export const CollectionScalarFieldEnum: {
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

  export type CollectionScalarFieldEnum = (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum]


  export const MonstersFoodScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updateAt: 'updateAt',
    foodId: 'foodId',
    collectionId: 'collectionId'
  };

  export type MonstersFoodScalarFieldEnum = (typeof MonstersFoodScalarFieldEnum)[keyof typeof MonstersFoodScalarFieldEnum]


  export const DailyMonstersScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updateAt: 'updateAt',
    date: 'date',
    price: 'price',
    isCoinsPrice: 'isCoinsPrice',
    monsterId: 'monsterId'
  };

  export type DailyMonstersScalarFieldEnum = (typeof DailyMonstersScalarFieldEnum)[keyof typeof DailyMonstersScalarFieldEnum]


  export const PackScalarFieldEnum: {
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

  export type PackScalarFieldEnum = (typeof PackScalarFieldEnum)[keyof typeof PackScalarFieldEnum]


  export const FoodScalarFieldEnum: {
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

  export type FoodScalarFieldEnum = (typeof FoodScalarFieldEnum)[keyof typeof FoodScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'EnumTypeElement'
   */
  export type EnumEnumTypeElementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnumTypeElement'>
    


  /**
   * Reference to a field of type 'EnumTypeElement[]'
   */
  export type ListEnumEnumTypeElementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnumTypeElement[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    coins?: IntFilter<"User"> | number
    crystals?: IntFilter<"User"> | number
    telegramId?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    reputation?: IntFilter<"User"> | number
    userAvatar?: StringFilter<"User"> | string
    evoPlaces?: IntFilter<"User"> | number
    collection?: CollectionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    coins?: SortOrder
    crystals?: SortOrder
    telegramId?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    reputation?: SortOrder
    userAvatar?: SortOrder
    evoPlaces?: SortOrder
    collection?: CollectionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    telegramId?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    coins?: IntFilter<"User"> | number
    crystals?: IntFilter<"User"> | number
    fullName?: StringFilter<"User"> | string
    reputation?: IntFilter<"User"> | number
    userAvatar?: StringFilter<"User"> | string
    evoPlaces?: IntFilter<"User"> | number
    collection?: CollectionListRelationFilter
  }, "id" | "telegramId" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    coins?: SortOrder
    crystals?: SortOrder
    telegramId?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    reputation?: SortOrder
    userAvatar?: SortOrder
    evoPlaces?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    coins?: IntWithAggregatesFilter<"User"> | number
    crystals?: IntWithAggregatesFilter<"User"> | number
    telegramId?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    reputation?: IntWithAggregatesFilter<"User"> | number
    userAvatar?: StringWithAggregatesFilter<"User"> | string
    evoPlaces?: IntWithAggregatesFilter<"User"> | number
  }

  export type TypeMonsterWhereInput = {
    AND?: TypeMonsterWhereInput | TypeMonsterWhereInput[]
    OR?: TypeMonsterWhereInput[]
    NOT?: TypeMonsterWhereInput | TypeMonsterWhereInput[]
    id?: StringFilter<"TypeMonster"> | string
    createdAt?: DateTimeFilter<"TypeMonster"> | Date | string
    updateAt?: DateTimeFilter<"TypeMonster"> | Date | string
    name?: StringFilter<"TypeMonster"> | string
    img?: StringNullableFilter<"TypeMonster"> | string | null
    element?: EnumEnumTypeElementFilter<"TypeMonster"> | $Enums.EnumTypeElement
    description?: StringFilter<"TypeMonster"> | string
    monsters?: MonsterListRelationFilter
  }

  export type TypeMonsterOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    img?: SortOrderInput | SortOrder
    element?: SortOrder
    description?: SortOrder
    monsters?: MonsterOrderByRelationAggregateInput
  }

  export type TypeMonsterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TypeMonsterWhereInput | TypeMonsterWhereInput[]
    OR?: TypeMonsterWhereInput[]
    NOT?: TypeMonsterWhereInput | TypeMonsterWhereInput[]
    createdAt?: DateTimeFilter<"TypeMonster"> | Date | string
    updateAt?: DateTimeFilter<"TypeMonster"> | Date | string
    name?: StringFilter<"TypeMonster"> | string
    img?: StringNullableFilter<"TypeMonster"> | string | null
    element?: EnumEnumTypeElementFilter<"TypeMonster"> | $Enums.EnumTypeElement
    description?: StringFilter<"TypeMonster"> | string
    monsters?: MonsterListRelationFilter
  }, "id">

  export type TypeMonsterOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    img?: SortOrderInput | SortOrder
    element?: SortOrder
    description?: SortOrder
    _count?: TypeMonsterCountOrderByAggregateInput
    _max?: TypeMonsterMaxOrderByAggregateInput
    _min?: TypeMonsterMinOrderByAggregateInput
  }

  export type TypeMonsterScalarWhereWithAggregatesInput = {
    AND?: TypeMonsterScalarWhereWithAggregatesInput | TypeMonsterScalarWhereWithAggregatesInput[]
    OR?: TypeMonsterScalarWhereWithAggregatesInput[]
    NOT?: TypeMonsterScalarWhereWithAggregatesInput | TypeMonsterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TypeMonster"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TypeMonster"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"TypeMonster"> | Date | string
    name?: StringWithAggregatesFilter<"TypeMonster"> | string
    img?: StringNullableWithAggregatesFilter<"TypeMonster"> | string | null
    element?: EnumEnumTypeElementWithAggregatesFilter<"TypeMonster"> | $Enums.EnumTypeElement
    description?: StringWithAggregatesFilter<"TypeMonster"> | string
  }

  export type MonsterWhereInput = {
    AND?: MonsterWhereInput | MonsterWhereInput[]
    OR?: MonsterWhereInput[]
    NOT?: MonsterWhereInput | MonsterWhereInput[]
    id?: StringFilter<"Monster"> | string
    createdAt?: DateTimeFilter<"Monster"> | Date | string
    updateAt?: DateTimeFilter<"Monster"> | Date | string
    typeId?: StringNullableFilter<"Monster"> | string | null
    subtypeName?: StringFilter<"Monster"> | string
    img?: StringFilter<"Monster"> | string
    stageEvo?: IntFilter<"Monster"> | number
    branchEvo?: IntFilter<"Monster"> | number
    starts?: IntFilter<"Monster"> | number
    daysNextLvl?: IntFilter<"Monster"> | number
    type?: XOR<TypeMonsterNullableScalarRelationFilter, TypeMonsterWhereInput> | null
    collection?: CollectionListRelationFilter
    dailyMonsters?: DailyMonstersListRelationFilter
  }

  export type MonsterOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    typeId?: SortOrderInput | SortOrder
    subtypeName?: SortOrder
    img?: SortOrder
    stageEvo?: SortOrder
    branchEvo?: SortOrder
    starts?: SortOrder
    daysNextLvl?: SortOrder
    type?: TypeMonsterOrderByWithRelationInput
    collection?: CollectionOrderByRelationAggregateInput
    dailyMonsters?: DailyMonstersOrderByRelationAggregateInput
  }

  export type MonsterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MonsterWhereInput | MonsterWhereInput[]
    OR?: MonsterWhereInput[]
    NOT?: MonsterWhereInput | MonsterWhereInput[]
    createdAt?: DateTimeFilter<"Monster"> | Date | string
    updateAt?: DateTimeFilter<"Monster"> | Date | string
    typeId?: StringNullableFilter<"Monster"> | string | null
    subtypeName?: StringFilter<"Monster"> | string
    img?: StringFilter<"Monster"> | string
    stageEvo?: IntFilter<"Monster"> | number
    branchEvo?: IntFilter<"Monster"> | number
    starts?: IntFilter<"Monster"> | number
    daysNextLvl?: IntFilter<"Monster"> | number
    type?: XOR<TypeMonsterNullableScalarRelationFilter, TypeMonsterWhereInput> | null
    collection?: CollectionListRelationFilter
    dailyMonsters?: DailyMonstersListRelationFilter
  }, "id">

  export type MonsterOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    typeId?: SortOrderInput | SortOrder
    subtypeName?: SortOrder
    img?: SortOrder
    stageEvo?: SortOrder
    branchEvo?: SortOrder
    starts?: SortOrder
    daysNextLvl?: SortOrder
    _count?: MonsterCountOrderByAggregateInput
    _avg?: MonsterAvgOrderByAggregateInput
    _max?: MonsterMaxOrderByAggregateInput
    _min?: MonsterMinOrderByAggregateInput
    _sum?: MonsterSumOrderByAggregateInput
  }

  export type MonsterScalarWhereWithAggregatesInput = {
    AND?: MonsterScalarWhereWithAggregatesInput | MonsterScalarWhereWithAggregatesInput[]
    OR?: MonsterScalarWhereWithAggregatesInput[]
    NOT?: MonsterScalarWhereWithAggregatesInput | MonsterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Monster"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Monster"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Monster"> | Date | string
    typeId?: StringNullableWithAggregatesFilter<"Monster"> | string | null
    subtypeName?: StringWithAggregatesFilter<"Monster"> | string
    img?: StringWithAggregatesFilter<"Monster"> | string
    stageEvo?: IntWithAggregatesFilter<"Monster"> | number
    branchEvo?: IntWithAggregatesFilter<"Monster"> | number
    starts?: IntWithAggregatesFilter<"Monster"> | number
    daysNextLvl?: IntWithAggregatesFilter<"Monster"> | number
  }

  export type CollectionWhereInput = {
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    id?: StringFilter<"Collection"> | string
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    updateAt?: DateTimeFilter<"Collection"> | Date | string
    leaderId?: StringNullableFilter<"Collection"> | string | null
    monsterId?: StringNullableFilter<"Collection"> | string | null
    name?: StringNullableFilter<"Collection"> | string | null
    days?: IntFilter<"Collection"> | number
    foodMinutes?: IntFilter<"Collection"> | number
    foodPlaces?: IntFilter<"Collection"> | number
    isEvo?: BoolFilter<"Collection"> | boolean
    isStop?: BoolFilter<"Collection"> | boolean
    isNewDay?: BoolFilter<"Collection"> | boolean
    leader?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    monster?: XOR<MonsterNullableScalarRelationFilter, MonsterWhereInput> | null
    monstersFood?: MonstersFoodListRelationFilter
  }

  export type CollectionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    leaderId?: SortOrderInput | SortOrder
    monsterId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    days?: SortOrder
    foodMinutes?: SortOrder
    foodPlaces?: SortOrder
    isEvo?: SortOrder
    isStop?: SortOrder
    isNewDay?: SortOrder
    leader?: UserOrderByWithRelationInput
    monster?: MonsterOrderByWithRelationInput
    monstersFood?: MonstersFoodOrderByRelationAggregateInput
  }

  export type CollectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    updateAt?: DateTimeFilter<"Collection"> | Date | string
    leaderId?: StringNullableFilter<"Collection"> | string | null
    monsterId?: StringNullableFilter<"Collection"> | string | null
    name?: StringNullableFilter<"Collection"> | string | null
    days?: IntFilter<"Collection"> | number
    foodMinutes?: IntFilter<"Collection"> | number
    foodPlaces?: IntFilter<"Collection"> | number
    isEvo?: BoolFilter<"Collection"> | boolean
    isStop?: BoolFilter<"Collection"> | boolean
    isNewDay?: BoolFilter<"Collection"> | boolean
    leader?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    monster?: XOR<MonsterNullableScalarRelationFilter, MonsterWhereInput> | null
    monstersFood?: MonstersFoodListRelationFilter
  }, "id">

  export type CollectionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    leaderId?: SortOrderInput | SortOrder
    monsterId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    days?: SortOrder
    foodMinutes?: SortOrder
    foodPlaces?: SortOrder
    isEvo?: SortOrder
    isStop?: SortOrder
    isNewDay?: SortOrder
    _count?: CollectionCountOrderByAggregateInput
    _avg?: CollectionAvgOrderByAggregateInput
    _max?: CollectionMaxOrderByAggregateInput
    _min?: CollectionMinOrderByAggregateInput
    _sum?: CollectionSumOrderByAggregateInput
  }

  export type CollectionScalarWhereWithAggregatesInput = {
    AND?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    OR?: CollectionScalarWhereWithAggregatesInput[]
    NOT?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Collection"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Collection"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Collection"> | Date | string
    leaderId?: StringNullableWithAggregatesFilter<"Collection"> | string | null
    monsterId?: StringNullableWithAggregatesFilter<"Collection"> | string | null
    name?: StringNullableWithAggregatesFilter<"Collection"> | string | null
    days?: IntWithAggregatesFilter<"Collection"> | number
    foodMinutes?: IntWithAggregatesFilter<"Collection"> | number
    foodPlaces?: IntWithAggregatesFilter<"Collection"> | number
    isEvo?: BoolWithAggregatesFilter<"Collection"> | boolean
    isStop?: BoolWithAggregatesFilter<"Collection"> | boolean
    isNewDay?: BoolWithAggregatesFilter<"Collection"> | boolean
  }

  export type MonstersFoodWhereInput = {
    AND?: MonstersFoodWhereInput | MonstersFoodWhereInput[]
    OR?: MonstersFoodWhereInput[]
    NOT?: MonstersFoodWhereInput | MonstersFoodWhereInput[]
    id?: StringFilter<"MonstersFood"> | string
    createdAt?: DateTimeFilter<"MonstersFood"> | Date | string
    updateAt?: DateTimeFilter<"MonstersFood"> | Date | string
    foodId?: StringFilter<"MonstersFood"> | string
    collectionId?: StringFilter<"MonstersFood"> | string
    food?: XOR<FoodScalarRelationFilter, FoodWhereInput>
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
  }

  export type MonstersFoodOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    foodId?: SortOrder
    collectionId?: SortOrder
    food?: FoodOrderByWithRelationInput
    collection?: CollectionOrderByWithRelationInput
  }

  export type MonstersFoodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MonstersFoodWhereInput | MonstersFoodWhereInput[]
    OR?: MonstersFoodWhereInput[]
    NOT?: MonstersFoodWhereInput | MonstersFoodWhereInput[]
    createdAt?: DateTimeFilter<"MonstersFood"> | Date | string
    updateAt?: DateTimeFilter<"MonstersFood"> | Date | string
    foodId?: StringFilter<"MonstersFood"> | string
    collectionId?: StringFilter<"MonstersFood"> | string
    food?: XOR<FoodScalarRelationFilter, FoodWhereInput>
    collection?: XOR<CollectionScalarRelationFilter, CollectionWhereInput>
  }, "id">

  export type MonstersFoodOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    foodId?: SortOrder
    collectionId?: SortOrder
    _count?: MonstersFoodCountOrderByAggregateInput
    _max?: MonstersFoodMaxOrderByAggregateInput
    _min?: MonstersFoodMinOrderByAggregateInput
  }

  export type MonstersFoodScalarWhereWithAggregatesInput = {
    AND?: MonstersFoodScalarWhereWithAggregatesInput | MonstersFoodScalarWhereWithAggregatesInput[]
    OR?: MonstersFoodScalarWhereWithAggregatesInput[]
    NOT?: MonstersFoodScalarWhereWithAggregatesInput | MonstersFoodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MonstersFood"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MonstersFood"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"MonstersFood"> | Date | string
    foodId?: StringWithAggregatesFilter<"MonstersFood"> | string
    collectionId?: StringWithAggregatesFilter<"MonstersFood"> | string
  }

  export type DailyMonstersWhereInput = {
    AND?: DailyMonstersWhereInput | DailyMonstersWhereInput[]
    OR?: DailyMonstersWhereInput[]
    NOT?: DailyMonstersWhereInput | DailyMonstersWhereInput[]
    id?: StringFilter<"DailyMonsters"> | string
    createdAt?: DateTimeFilter<"DailyMonsters"> | Date | string
    updateAt?: DateTimeFilter<"DailyMonsters"> | Date | string
    date?: DateTimeFilter<"DailyMonsters"> | Date | string
    price?: StringFilter<"DailyMonsters"> | string
    isCoinsPrice?: BoolFilter<"DailyMonsters"> | boolean
    monsterId?: StringNullableFilter<"DailyMonsters"> | string | null
    monster?: XOR<MonsterNullableScalarRelationFilter, MonsterWhereInput> | null
  }

  export type DailyMonstersOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    date?: SortOrder
    price?: SortOrder
    isCoinsPrice?: SortOrder
    monsterId?: SortOrderInput | SortOrder
    monster?: MonsterOrderByWithRelationInput
  }

  export type DailyMonstersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DailyMonstersWhereInput | DailyMonstersWhereInput[]
    OR?: DailyMonstersWhereInput[]
    NOT?: DailyMonstersWhereInput | DailyMonstersWhereInput[]
    createdAt?: DateTimeFilter<"DailyMonsters"> | Date | string
    updateAt?: DateTimeFilter<"DailyMonsters"> | Date | string
    date?: DateTimeFilter<"DailyMonsters"> | Date | string
    price?: StringFilter<"DailyMonsters"> | string
    isCoinsPrice?: BoolFilter<"DailyMonsters"> | boolean
    monsterId?: StringNullableFilter<"DailyMonsters"> | string | null
    monster?: XOR<MonsterNullableScalarRelationFilter, MonsterWhereInput> | null
  }, "id">

  export type DailyMonstersOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    date?: SortOrder
    price?: SortOrder
    isCoinsPrice?: SortOrder
    monsterId?: SortOrderInput | SortOrder
    _count?: DailyMonstersCountOrderByAggregateInput
    _max?: DailyMonstersMaxOrderByAggregateInput
    _min?: DailyMonstersMinOrderByAggregateInput
  }

  export type DailyMonstersScalarWhereWithAggregatesInput = {
    AND?: DailyMonstersScalarWhereWithAggregatesInput | DailyMonstersScalarWhereWithAggregatesInput[]
    OR?: DailyMonstersScalarWhereWithAggregatesInput[]
    NOT?: DailyMonstersScalarWhereWithAggregatesInput | DailyMonstersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyMonsters"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DailyMonsters"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"DailyMonsters"> | Date | string
    date?: DateTimeWithAggregatesFilter<"DailyMonsters"> | Date | string
    price?: StringWithAggregatesFilter<"DailyMonsters"> | string
    isCoinsPrice?: BoolWithAggregatesFilter<"DailyMonsters"> | boolean
    monsterId?: StringNullableWithAggregatesFilter<"DailyMonsters"> | string | null
  }

  export type PackWhereInput = {
    AND?: PackWhereInput | PackWhereInput[]
    OR?: PackWhereInput[]
    NOT?: PackWhereInput | PackWhereInput[]
    id?: StringFilter<"Pack"> | string
    createdAt?: DateTimeFilter<"Pack"> | Date | string
    updateAt?: DateTimeFilter<"Pack"> | Date | string
    name?: StringFilter<"Pack"> | string
    description?: StringFilter<"Pack"> | string
    img?: StringFilter<"Pack"> | string
    type?: StringFilter<"Pack"> | string
    endAt?: DateTimeNullableFilter<"Pack"> | Date | string | null
    priceCoin?: IntNullableFilter<"Pack"> | number | null
    priceCrystal?: IntNullableFilter<"Pack"> | number | null
    coinMin?: IntFilter<"Pack"> | number
    coinMax?: IntFilter<"Pack"> | number
    crystalMin?: IntFilter<"Pack"> | number
    crystalMax?: IntFilter<"Pack"> | number
    percentDropMonster?: IntFilter<"Pack"> | number
    monsters?: JsonNullableFilter<"Pack">
  }

  export type PackOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    img?: SortOrder
    type?: SortOrder
    endAt?: SortOrderInput | SortOrder
    priceCoin?: SortOrderInput | SortOrder
    priceCrystal?: SortOrderInput | SortOrder
    coinMin?: SortOrder
    coinMax?: SortOrder
    crystalMin?: SortOrder
    crystalMax?: SortOrder
    percentDropMonster?: SortOrder
    monsters?: SortOrderInput | SortOrder
  }

  export type PackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PackWhereInput | PackWhereInput[]
    OR?: PackWhereInput[]
    NOT?: PackWhereInput | PackWhereInput[]
    createdAt?: DateTimeFilter<"Pack"> | Date | string
    updateAt?: DateTimeFilter<"Pack"> | Date | string
    name?: StringFilter<"Pack"> | string
    description?: StringFilter<"Pack"> | string
    img?: StringFilter<"Pack"> | string
    type?: StringFilter<"Pack"> | string
    endAt?: DateTimeNullableFilter<"Pack"> | Date | string | null
    priceCoin?: IntNullableFilter<"Pack"> | number | null
    priceCrystal?: IntNullableFilter<"Pack"> | number | null
    coinMin?: IntFilter<"Pack"> | number
    coinMax?: IntFilter<"Pack"> | number
    crystalMin?: IntFilter<"Pack"> | number
    crystalMax?: IntFilter<"Pack"> | number
    percentDropMonster?: IntFilter<"Pack"> | number
    monsters?: JsonNullableFilter<"Pack">
  }, "id">

  export type PackOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    img?: SortOrder
    type?: SortOrder
    endAt?: SortOrderInput | SortOrder
    priceCoin?: SortOrderInput | SortOrder
    priceCrystal?: SortOrderInput | SortOrder
    coinMin?: SortOrder
    coinMax?: SortOrder
    crystalMin?: SortOrder
    crystalMax?: SortOrder
    percentDropMonster?: SortOrder
    monsters?: SortOrderInput | SortOrder
    _count?: PackCountOrderByAggregateInput
    _avg?: PackAvgOrderByAggregateInput
    _max?: PackMaxOrderByAggregateInput
    _min?: PackMinOrderByAggregateInput
    _sum?: PackSumOrderByAggregateInput
  }

  export type PackScalarWhereWithAggregatesInput = {
    AND?: PackScalarWhereWithAggregatesInput | PackScalarWhereWithAggregatesInput[]
    OR?: PackScalarWhereWithAggregatesInput[]
    NOT?: PackScalarWhereWithAggregatesInput | PackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pack"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Pack"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Pack"> | Date | string
    name?: StringWithAggregatesFilter<"Pack"> | string
    description?: StringWithAggregatesFilter<"Pack"> | string
    img?: StringWithAggregatesFilter<"Pack"> | string
    type?: StringWithAggregatesFilter<"Pack"> | string
    endAt?: DateTimeNullableWithAggregatesFilter<"Pack"> | Date | string | null
    priceCoin?: IntNullableWithAggregatesFilter<"Pack"> | number | null
    priceCrystal?: IntNullableWithAggregatesFilter<"Pack"> | number | null
    coinMin?: IntWithAggregatesFilter<"Pack"> | number
    coinMax?: IntWithAggregatesFilter<"Pack"> | number
    crystalMin?: IntWithAggregatesFilter<"Pack"> | number
    crystalMax?: IntWithAggregatesFilter<"Pack"> | number
    percentDropMonster?: IntWithAggregatesFilter<"Pack"> | number
    monsters?: JsonNullableWithAggregatesFilter<"Pack">
  }

  export type FoodWhereInput = {
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    id?: StringFilter<"Food"> | string
    createdAt?: DateTimeFilter<"Food"> | Date | string
    updateAt?: DateTimeFilter<"Food"> | Date | string
    name?: StringFilter<"Food"> | string
    img?: StringFilter<"Food"> | string
    time?: IntFilter<"Food"> | number
    price?: IntFilter<"Food"> | number
    isCoins?: BoolFilter<"Food"> | boolean
    mucus?: IntFilter<"Food"> | number
    tentacle?: IntFilter<"Food"> | number
    fish?: IntFilter<"Food"> | number
    eye?: IntFilter<"Food"> | number
    wing?: IntFilter<"Food"> | number
    fly?: IntFilter<"Food"> | number
    bone?: IntFilter<"Food"> | number
    monstersFood?: MonstersFoodListRelationFilter
  }

  export type FoodOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    img?: SortOrder
    time?: SortOrder
    price?: SortOrder
    isCoins?: SortOrder
    mucus?: SortOrder
    tentacle?: SortOrder
    fish?: SortOrder
    eye?: SortOrder
    wing?: SortOrder
    fly?: SortOrder
    bone?: SortOrder
    monstersFood?: MonstersFoodOrderByRelationAggregateInput
  }

  export type FoodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    createdAt?: DateTimeFilter<"Food"> | Date | string
    updateAt?: DateTimeFilter<"Food"> | Date | string
    name?: StringFilter<"Food"> | string
    img?: StringFilter<"Food"> | string
    time?: IntFilter<"Food"> | number
    price?: IntFilter<"Food"> | number
    isCoins?: BoolFilter<"Food"> | boolean
    mucus?: IntFilter<"Food"> | number
    tentacle?: IntFilter<"Food"> | number
    fish?: IntFilter<"Food"> | number
    eye?: IntFilter<"Food"> | number
    wing?: IntFilter<"Food"> | number
    fly?: IntFilter<"Food"> | number
    bone?: IntFilter<"Food"> | number
    monstersFood?: MonstersFoodListRelationFilter
  }, "id">

  export type FoodOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    img?: SortOrder
    time?: SortOrder
    price?: SortOrder
    isCoins?: SortOrder
    mucus?: SortOrder
    tentacle?: SortOrder
    fish?: SortOrder
    eye?: SortOrder
    wing?: SortOrder
    fly?: SortOrder
    bone?: SortOrder
    _count?: FoodCountOrderByAggregateInput
    _avg?: FoodAvgOrderByAggregateInput
    _max?: FoodMaxOrderByAggregateInput
    _min?: FoodMinOrderByAggregateInput
    _sum?: FoodSumOrderByAggregateInput
  }

  export type FoodScalarWhereWithAggregatesInput = {
    AND?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    OR?: FoodScalarWhereWithAggregatesInput[]
    NOT?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Food"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Food"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Food"> | Date | string
    name?: StringWithAggregatesFilter<"Food"> | string
    img?: StringWithAggregatesFilter<"Food"> | string
    time?: IntWithAggregatesFilter<"Food"> | number
    price?: IntWithAggregatesFilter<"Food"> | number
    isCoins?: BoolWithAggregatesFilter<"Food"> | boolean
    mucus?: IntWithAggregatesFilter<"Food"> | number
    tentacle?: IntWithAggregatesFilter<"Food"> | number
    fish?: IntWithAggregatesFilter<"Food"> | number
    eye?: IntWithAggregatesFilter<"Food"> | number
    wing?: IntWithAggregatesFilter<"Food"> | number
    fly?: IntWithAggregatesFilter<"Food"> | number
    bone?: IntWithAggregatesFilter<"Food"> | number
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    coins?: number
    crystals?: number
    telegramId: string
    username: string
    fullName: string
    reputation?: number
    userAvatar: string
    evoPlaces?: number
    collection?: CollectionCreateNestedManyWithoutLeaderInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    coins?: number
    crystals?: number
    telegramId: string
    username: string
    fullName: string
    reputation?: number
    userAvatar: string
    evoPlaces?: number
    collection?: CollectionUncheckedCreateNestedManyWithoutLeaderInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coins?: IntFieldUpdateOperationsInput | number
    crystals?: IntFieldUpdateOperationsInput | number
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    reputation?: IntFieldUpdateOperationsInput | number
    userAvatar?: StringFieldUpdateOperationsInput | string
    evoPlaces?: IntFieldUpdateOperationsInput | number
    collection?: CollectionUpdateManyWithoutLeaderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coins?: IntFieldUpdateOperationsInput | number
    crystals?: IntFieldUpdateOperationsInput | number
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    reputation?: IntFieldUpdateOperationsInput | number
    userAvatar?: StringFieldUpdateOperationsInput | string
    evoPlaces?: IntFieldUpdateOperationsInput | number
    collection?: CollectionUncheckedUpdateManyWithoutLeaderNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    coins?: number
    crystals?: number
    telegramId: string
    username: string
    fullName: string
    reputation?: number
    userAvatar: string
    evoPlaces?: number
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coins?: IntFieldUpdateOperationsInput | number
    crystals?: IntFieldUpdateOperationsInput | number
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    reputation?: IntFieldUpdateOperationsInput | number
    userAvatar?: StringFieldUpdateOperationsInput | string
    evoPlaces?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coins?: IntFieldUpdateOperationsInput | number
    crystals?: IntFieldUpdateOperationsInput | number
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    reputation?: IntFieldUpdateOperationsInput | number
    userAvatar?: StringFieldUpdateOperationsInput | string
    evoPlaces?: IntFieldUpdateOperationsInput | number
  }

  export type TypeMonsterCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    name: string
    img?: string | null
    element: $Enums.EnumTypeElement
    description: string
    monsters?: MonsterCreateNestedManyWithoutTypeInput
  }

  export type TypeMonsterUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    name: string
    img?: string | null
    element: $Enums.EnumTypeElement
    description: string
    monsters?: MonsterUncheckedCreateNestedManyWithoutTypeInput
  }

  export type TypeMonsterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    element?: EnumEnumTypeElementFieldUpdateOperationsInput | $Enums.EnumTypeElement
    description?: StringFieldUpdateOperationsInput | string
    monsters?: MonsterUpdateManyWithoutTypeNestedInput
  }

  export type TypeMonsterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    element?: EnumEnumTypeElementFieldUpdateOperationsInput | $Enums.EnumTypeElement
    description?: StringFieldUpdateOperationsInput | string
    monsters?: MonsterUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type TypeMonsterCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    name: string
    img?: string | null
    element: $Enums.EnumTypeElement
    description: string
  }

  export type TypeMonsterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    element?: EnumEnumTypeElementFieldUpdateOperationsInput | $Enums.EnumTypeElement
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TypeMonsterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    element?: EnumEnumTypeElementFieldUpdateOperationsInput | $Enums.EnumTypeElement
    description?: StringFieldUpdateOperationsInput | string
  }

  export type MonsterCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    subtypeName: string
    img: string
    stageEvo?: number
    branchEvo?: number
    starts?: number
    daysNextLvl?: number
    type?: TypeMonsterCreateNestedOneWithoutMonstersInput
    collection?: CollectionCreateNestedManyWithoutMonsterInput
    dailyMonsters?: DailyMonstersCreateNestedManyWithoutMonsterInput
  }

  export type MonsterUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    typeId?: string | null
    subtypeName: string
    img: string
    stageEvo?: number
    branchEvo?: number
    starts?: number
    daysNextLvl?: number
    collection?: CollectionUncheckedCreateNestedManyWithoutMonsterInput
    dailyMonsters?: DailyMonstersUncheckedCreateNestedManyWithoutMonsterInput
  }

  export type MonsterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtypeName?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    stageEvo?: IntFieldUpdateOperationsInput | number
    branchEvo?: IntFieldUpdateOperationsInput | number
    starts?: IntFieldUpdateOperationsInput | number
    daysNextLvl?: IntFieldUpdateOperationsInput | number
    type?: TypeMonsterUpdateOneWithoutMonstersNestedInput
    collection?: CollectionUpdateManyWithoutMonsterNestedInput
    dailyMonsters?: DailyMonstersUpdateManyWithoutMonsterNestedInput
  }

  export type MonsterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    typeId?: NullableStringFieldUpdateOperationsInput | string | null
    subtypeName?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    stageEvo?: IntFieldUpdateOperationsInput | number
    branchEvo?: IntFieldUpdateOperationsInput | number
    starts?: IntFieldUpdateOperationsInput | number
    daysNextLvl?: IntFieldUpdateOperationsInput | number
    collection?: CollectionUncheckedUpdateManyWithoutMonsterNestedInput
    dailyMonsters?: DailyMonstersUncheckedUpdateManyWithoutMonsterNestedInput
  }

  export type MonsterCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    typeId?: string | null
    subtypeName: string
    img: string
    stageEvo?: number
    branchEvo?: number
    starts?: number
    daysNextLvl?: number
  }

  export type MonsterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtypeName?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    stageEvo?: IntFieldUpdateOperationsInput | number
    branchEvo?: IntFieldUpdateOperationsInput | number
    starts?: IntFieldUpdateOperationsInput | number
    daysNextLvl?: IntFieldUpdateOperationsInput | number
  }

  export type MonsterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    typeId?: NullableStringFieldUpdateOperationsInput | string | null
    subtypeName?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    stageEvo?: IntFieldUpdateOperationsInput | number
    branchEvo?: IntFieldUpdateOperationsInput | number
    starts?: IntFieldUpdateOperationsInput | number
    daysNextLvl?: IntFieldUpdateOperationsInput | number
  }

  export type CollectionCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    name?: string | null
    days?: number
    foodMinutes?: number
    foodPlaces?: number
    isEvo?: boolean
    isStop?: boolean
    isNewDay?: boolean
    leader?: UserCreateNestedOneWithoutCollectionInput
    monster?: MonsterCreateNestedOneWithoutCollectionInput
    monstersFood?: MonstersFoodCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    leaderId?: string | null
    monsterId?: string | null
    name?: string | null
    days?: number
    foodMinutes?: number
    foodPlaces?: number
    isEvo?: boolean
    isStop?: boolean
    isNewDay?: boolean
    monstersFood?: MonstersFoodUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    days?: IntFieldUpdateOperationsInput | number
    foodMinutes?: IntFieldUpdateOperationsInput | number
    foodPlaces?: IntFieldUpdateOperationsInput | number
    isEvo?: BoolFieldUpdateOperationsInput | boolean
    isStop?: BoolFieldUpdateOperationsInput | boolean
    isNewDay?: BoolFieldUpdateOperationsInput | boolean
    leader?: UserUpdateOneWithoutCollectionNestedInput
    monster?: MonsterUpdateOneWithoutCollectionNestedInput
    monstersFood?: MonstersFoodUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    monsterId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    days?: IntFieldUpdateOperationsInput | number
    foodMinutes?: IntFieldUpdateOperationsInput | number
    foodPlaces?: IntFieldUpdateOperationsInput | number
    isEvo?: BoolFieldUpdateOperationsInput | boolean
    isStop?: BoolFieldUpdateOperationsInput | boolean
    isNewDay?: BoolFieldUpdateOperationsInput | boolean
    monstersFood?: MonstersFoodUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    leaderId?: string | null
    monsterId?: string | null
    name?: string | null
    days?: number
    foodMinutes?: number
    foodPlaces?: number
    isEvo?: boolean
    isStop?: boolean
    isNewDay?: boolean
  }

  export type CollectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    days?: IntFieldUpdateOperationsInput | number
    foodMinutes?: IntFieldUpdateOperationsInput | number
    foodPlaces?: IntFieldUpdateOperationsInput | number
    isEvo?: BoolFieldUpdateOperationsInput | boolean
    isStop?: BoolFieldUpdateOperationsInput | boolean
    isNewDay?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CollectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    monsterId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    days?: IntFieldUpdateOperationsInput | number
    foodMinutes?: IntFieldUpdateOperationsInput | number
    foodPlaces?: IntFieldUpdateOperationsInput | number
    isEvo?: BoolFieldUpdateOperationsInput | boolean
    isStop?: BoolFieldUpdateOperationsInput | boolean
    isNewDay?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MonstersFoodCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    food: FoodCreateNestedOneWithoutMonstersFoodInput
    collection: CollectionCreateNestedOneWithoutMonstersFoodInput
  }

  export type MonstersFoodUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    foodId: string
    collectionId: string
  }

  export type MonstersFoodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateOneRequiredWithoutMonstersFoodNestedInput
    collection?: CollectionUpdateOneRequiredWithoutMonstersFoodNestedInput
  }

  export type MonstersFoodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodId?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
  }

  export type MonstersFoodCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    foodId: string
    collectionId: string
  }

  export type MonstersFoodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonstersFoodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodId?: StringFieldUpdateOperationsInput | string
    collectionId?: StringFieldUpdateOperationsInput | string
  }

  export type DailyMonstersCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    date?: Date | string
    price: string
    isCoinsPrice: boolean
    monster?: MonsterCreateNestedOneWithoutDailyMonstersInput
  }

  export type DailyMonstersUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    date?: Date | string
    price: string
    isCoinsPrice: boolean
    monsterId?: string | null
  }

  export type DailyMonstersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: StringFieldUpdateOperationsInput | string
    isCoinsPrice?: BoolFieldUpdateOperationsInput | boolean
    monster?: MonsterUpdateOneWithoutDailyMonstersNestedInput
  }

  export type DailyMonstersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: StringFieldUpdateOperationsInput | string
    isCoinsPrice?: BoolFieldUpdateOperationsInput | boolean
    monsterId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DailyMonstersCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    date?: Date | string
    price: string
    isCoinsPrice: boolean
    monsterId?: string | null
  }

  export type DailyMonstersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: StringFieldUpdateOperationsInput | string
    isCoinsPrice?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DailyMonstersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: StringFieldUpdateOperationsInput | string
    isCoinsPrice?: BoolFieldUpdateOperationsInput | boolean
    monsterId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PackCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    name: string
    description: string
    img: string
    type: string
    endAt?: Date | string | null
    priceCoin?: number | null
    priceCrystal?: number | null
    coinMin: number
    coinMax: number
    crystalMin: number
    crystalMax: number
    percentDropMonster: number
    monsters?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PackUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    name: string
    description: string
    img: string
    type: string
    endAt?: Date | string | null
    priceCoin?: number | null
    priceCrystal?: number | null
    coinMin: number
    coinMax: number
    crystalMin: number
    crystalMax: number
    percentDropMonster: number
    monsters?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCoin?: NullableIntFieldUpdateOperationsInput | number | null
    priceCrystal?: NullableIntFieldUpdateOperationsInput | number | null
    coinMin?: IntFieldUpdateOperationsInput | number
    coinMax?: IntFieldUpdateOperationsInput | number
    crystalMin?: IntFieldUpdateOperationsInput | number
    crystalMax?: IntFieldUpdateOperationsInput | number
    percentDropMonster?: IntFieldUpdateOperationsInput | number
    monsters?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCoin?: NullableIntFieldUpdateOperationsInput | number | null
    priceCrystal?: NullableIntFieldUpdateOperationsInput | number | null
    coinMin?: IntFieldUpdateOperationsInput | number
    coinMax?: IntFieldUpdateOperationsInput | number
    crystalMin?: IntFieldUpdateOperationsInput | number
    crystalMax?: IntFieldUpdateOperationsInput | number
    percentDropMonster?: IntFieldUpdateOperationsInput | number
    monsters?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PackCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    name: string
    description: string
    img: string
    type: string
    endAt?: Date | string | null
    priceCoin?: number | null
    priceCrystal?: number | null
    coinMin: number
    coinMax: number
    crystalMin: number
    crystalMax: number
    percentDropMonster: number
    monsters?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCoin?: NullableIntFieldUpdateOperationsInput | number | null
    priceCrystal?: NullableIntFieldUpdateOperationsInput | number | null
    coinMin?: IntFieldUpdateOperationsInput | number
    coinMax?: IntFieldUpdateOperationsInput | number
    crystalMin?: IntFieldUpdateOperationsInput | number
    crystalMax?: IntFieldUpdateOperationsInput | number
    percentDropMonster?: IntFieldUpdateOperationsInput | number
    monsters?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priceCoin?: NullableIntFieldUpdateOperationsInput | number | null
    priceCrystal?: NullableIntFieldUpdateOperationsInput | number | null
    coinMin?: IntFieldUpdateOperationsInput | number
    coinMax?: IntFieldUpdateOperationsInput | number
    crystalMin?: IntFieldUpdateOperationsInput | number
    crystalMax?: IntFieldUpdateOperationsInput | number
    percentDropMonster?: IntFieldUpdateOperationsInput | number
    monsters?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FoodCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    name: string
    img: string
    time: number
    price: number
    isCoins?: boolean
    mucus?: number
    tentacle?: number
    fish?: number
    eye?: number
    wing?: number
    fly?: number
    bone?: number
    monstersFood?: MonstersFoodCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    name: string
    img: string
    time: number
    price: number
    isCoins?: boolean
    mucus?: number
    tentacle?: number
    fish?: number
    eye?: number
    wing?: number
    fly?: number
    bone?: number
    monstersFood?: MonstersFoodUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    isCoins?: BoolFieldUpdateOperationsInput | boolean
    mucus?: IntFieldUpdateOperationsInput | number
    tentacle?: IntFieldUpdateOperationsInput | number
    fish?: IntFieldUpdateOperationsInput | number
    eye?: IntFieldUpdateOperationsInput | number
    wing?: IntFieldUpdateOperationsInput | number
    fly?: IntFieldUpdateOperationsInput | number
    bone?: IntFieldUpdateOperationsInput | number
    monstersFood?: MonstersFoodUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    isCoins?: BoolFieldUpdateOperationsInput | boolean
    mucus?: IntFieldUpdateOperationsInput | number
    tentacle?: IntFieldUpdateOperationsInput | number
    fish?: IntFieldUpdateOperationsInput | number
    eye?: IntFieldUpdateOperationsInput | number
    wing?: IntFieldUpdateOperationsInput | number
    fly?: IntFieldUpdateOperationsInput | number
    bone?: IntFieldUpdateOperationsInput | number
    monstersFood?: MonstersFoodUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    name: string
    img: string
    time: number
    price: number
    isCoins?: boolean
    mucus?: number
    tentacle?: number
    fish?: number
    eye?: number
    wing?: number
    fly?: number
    bone?: number
  }

  export type FoodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    isCoins?: BoolFieldUpdateOperationsInput | boolean
    mucus?: IntFieldUpdateOperationsInput | number
    tentacle?: IntFieldUpdateOperationsInput | number
    fish?: IntFieldUpdateOperationsInput | number
    eye?: IntFieldUpdateOperationsInput | number
    wing?: IntFieldUpdateOperationsInput | number
    fly?: IntFieldUpdateOperationsInput | number
    bone?: IntFieldUpdateOperationsInput | number
  }

  export type FoodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    isCoins?: BoolFieldUpdateOperationsInput | boolean
    mucus?: IntFieldUpdateOperationsInput | number
    tentacle?: IntFieldUpdateOperationsInput | number
    fish?: IntFieldUpdateOperationsInput | number
    eye?: IntFieldUpdateOperationsInput | number
    wing?: IntFieldUpdateOperationsInput | number
    fly?: IntFieldUpdateOperationsInput | number
    bone?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CollectionListRelationFilter = {
    every?: CollectionWhereInput
    some?: CollectionWhereInput
    none?: CollectionWhereInput
  }

  export type CollectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    coins?: SortOrder
    crystals?: SortOrder
    telegramId?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    reputation?: SortOrder
    userAvatar?: SortOrder
    evoPlaces?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    coins?: SortOrder
    crystals?: SortOrder
    reputation?: SortOrder
    evoPlaces?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    coins?: SortOrder
    crystals?: SortOrder
    telegramId?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    reputation?: SortOrder
    userAvatar?: SortOrder
    evoPlaces?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    coins?: SortOrder
    crystals?: SortOrder
    telegramId?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    reputation?: SortOrder
    userAvatar?: SortOrder
    evoPlaces?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    coins?: SortOrder
    crystals?: SortOrder
    reputation?: SortOrder
    evoPlaces?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumEnumTypeElementFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumTypeElement | EnumEnumTypeElementFieldRefInput<$PrismaModel>
    in?: $Enums.EnumTypeElement[] | ListEnumEnumTypeElementFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnumTypeElement[] | ListEnumEnumTypeElementFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumTypeElementFilter<$PrismaModel> | $Enums.EnumTypeElement
  }

  export type MonsterListRelationFilter = {
    every?: MonsterWhereInput
    some?: MonsterWhereInput
    none?: MonsterWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MonsterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TypeMonsterCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    img?: SortOrder
    element?: SortOrder
    description?: SortOrder
  }

  export type TypeMonsterMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    img?: SortOrder
    element?: SortOrder
    description?: SortOrder
  }

  export type TypeMonsterMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    img?: SortOrder
    element?: SortOrder
    description?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumEnumTypeElementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumTypeElement | EnumEnumTypeElementFieldRefInput<$PrismaModel>
    in?: $Enums.EnumTypeElement[] | ListEnumEnumTypeElementFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnumTypeElement[] | ListEnumEnumTypeElementFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumTypeElementWithAggregatesFilter<$PrismaModel> | $Enums.EnumTypeElement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnumTypeElementFilter<$PrismaModel>
    _max?: NestedEnumEnumTypeElementFilter<$PrismaModel>
  }

  export type TypeMonsterNullableScalarRelationFilter = {
    is?: TypeMonsterWhereInput | null
    isNot?: TypeMonsterWhereInput | null
  }

  export type DailyMonstersListRelationFilter = {
    every?: DailyMonstersWhereInput
    some?: DailyMonstersWhereInput
    none?: DailyMonstersWhereInput
  }

  export type DailyMonstersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MonsterCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    typeId?: SortOrder
    subtypeName?: SortOrder
    img?: SortOrder
    stageEvo?: SortOrder
    branchEvo?: SortOrder
    starts?: SortOrder
    daysNextLvl?: SortOrder
  }

  export type MonsterAvgOrderByAggregateInput = {
    stageEvo?: SortOrder
    branchEvo?: SortOrder
    starts?: SortOrder
    daysNextLvl?: SortOrder
  }

  export type MonsterMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    typeId?: SortOrder
    subtypeName?: SortOrder
    img?: SortOrder
    stageEvo?: SortOrder
    branchEvo?: SortOrder
    starts?: SortOrder
    daysNextLvl?: SortOrder
  }

  export type MonsterMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    typeId?: SortOrder
    subtypeName?: SortOrder
    img?: SortOrder
    stageEvo?: SortOrder
    branchEvo?: SortOrder
    starts?: SortOrder
    daysNextLvl?: SortOrder
  }

  export type MonsterSumOrderByAggregateInput = {
    stageEvo?: SortOrder
    branchEvo?: SortOrder
    starts?: SortOrder
    daysNextLvl?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MonsterNullableScalarRelationFilter = {
    is?: MonsterWhereInput | null
    isNot?: MonsterWhereInput | null
  }

  export type MonstersFoodListRelationFilter = {
    every?: MonstersFoodWhereInput
    some?: MonstersFoodWhereInput
    none?: MonstersFoodWhereInput
  }

  export type MonstersFoodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollectionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    leaderId?: SortOrder
    monsterId?: SortOrder
    name?: SortOrder
    days?: SortOrder
    foodMinutes?: SortOrder
    foodPlaces?: SortOrder
    isEvo?: SortOrder
    isStop?: SortOrder
    isNewDay?: SortOrder
  }

  export type CollectionAvgOrderByAggregateInput = {
    days?: SortOrder
    foodMinutes?: SortOrder
    foodPlaces?: SortOrder
  }

  export type CollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    leaderId?: SortOrder
    monsterId?: SortOrder
    name?: SortOrder
    days?: SortOrder
    foodMinutes?: SortOrder
    foodPlaces?: SortOrder
    isEvo?: SortOrder
    isStop?: SortOrder
    isNewDay?: SortOrder
  }

  export type CollectionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    leaderId?: SortOrder
    monsterId?: SortOrder
    name?: SortOrder
    days?: SortOrder
    foodMinutes?: SortOrder
    foodPlaces?: SortOrder
    isEvo?: SortOrder
    isStop?: SortOrder
    isNewDay?: SortOrder
  }

  export type CollectionSumOrderByAggregateInput = {
    days?: SortOrder
    foodMinutes?: SortOrder
    foodPlaces?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FoodScalarRelationFilter = {
    is?: FoodWhereInput
    isNot?: FoodWhereInput
  }

  export type CollectionScalarRelationFilter = {
    is?: CollectionWhereInput
    isNot?: CollectionWhereInput
  }

  export type MonstersFoodCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    foodId?: SortOrder
    collectionId?: SortOrder
  }

  export type MonstersFoodMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    foodId?: SortOrder
    collectionId?: SortOrder
  }

  export type MonstersFoodMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    foodId?: SortOrder
    collectionId?: SortOrder
  }

  export type DailyMonstersCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    date?: SortOrder
    price?: SortOrder
    isCoinsPrice?: SortOrder
    monsterId?: SortOrder
  }

  export type DailyMonstersMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    date?: SortOrder
    price?: SortOrder
    isCoinsPrice?: SortOrder
    monsterId?: SortOrder
  }

  export type DailyMonstersMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    date?: SortOrder
    price?: SortOrder
    isCoinsPrice?: SortOrder
    monsterId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PackCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    img?: SortOrder
    type?: SortOrder
    endAt?: SortOrder
    priceCoin?: SortOrder
    priceCrystal?: SortOrder
    coinMin?: SortOrder
    coinMax?: SortOrder
    crystalMin?: SortOrder
    crystalMax?: SortOrder
    percentDropMonster?: SortOrder
    monsters?: SortOrder
  }

  export type PackAvgOrderByAggregateInput = {
    priceCoin?: SortOrder
    priceCrystal?: SortOrder
    coinMin?: SortOrder
    coinMax?: SortOrder
    crystalMin?: SortOrder
    crystalMax?: SortOrder
    percentDropMonster?: SortOrder
  }

  export type PackMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    img?: SortOrder
    type?: SortOrder
    endAt?: SortOrder
    priceCoin?: SortOrder
    priceCrystal?: SortOrder
    coinMin?: SortOrder
    coinMax?: SortOrder
    crystalMin?: SortOrder
    crystalMax?: SortOrder
    percentDropMonster?: SortOrder
  }

  export type PackMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    img?: SortOrder
    type?: SortOrder
    endAt?: SortOrder
    priceCoin?: SortOrder
    priceCrystal?: SortOrder
    coinMin?: SortOrder
    coinMax?: SortOrder
    crystalMin?: SortOrder
    crystalMax?: SortOrder
    percentDropMonster?: SortOrder
  }

  export type PackSumOrderByAggregateInput = {
    priceCoin?: SortOrder
    priceCrystal?: SortOrder
    coinMin?: SortOrder
    coinMax?: SortOrder
    crystalMin?: SortOrder
    crystalMax?: SortOrder
    percentDropMonster?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FoodCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    img?: SortOrder
    time?: SortOrder
    price?: SortOrder
    isCoins?: SortOrder
    mucus?: SortOrder
    tentacle?: SortOrder
    fish?: SortOrder
    eye?: SortOrder
    wing?: SortOrder
    fly?: SortOrder
    bone?: SortOrder
  }

  export type FoodAvgOrderByAggregateInput = {
    time?: SortOrder
    price?: SortOrder
    mucus?: SortOrder
    tentacle?: SortOrder
    fish?: SortOrder
    eye?: SortOrder
    wing?: SortOrder
    fly?: SortOrder
    bone?: SortOrder
  }

  export type FoodMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    img?: SortOrder
    time?: SortOrder
    price?: SortOrder
    isCoins?: SortOrder
    mucus?: SortOrder
    tentacle?: SortOrder
    fish?: SortOrder
    eye?: SortOrder
    wing?: SortOrder
    fly?: SortOrder
    bone?: SortOrder
  }

  export type FoodMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    img?: SortOrder
    time?: SortOrder
    price?: SortOrder
    isCoins?: SortOrder
    mucus?: SortOrder
    tentacle?: SortOrder
    fish?: SortOrder
    eye?: SortOrder
    wing?: SortOrder
    fly?: SortOrder
    bone?: SortOrder
  }

  export type FoodSumOrderByAggregateInput = {
    time?: SortOrder
    price?: SortOrder
    mucus?: SortOrder
    tentacle?: SortOrder
    fish?: SortOrder
    eye?: SortOrder
    wing?: SortOrder
    fly?: SortOrder
    bone?: SortOrder
  }

  export type CollectionCreateNestedManyWithoutLeaderInput = {
    create?: XOR<CollectionCreateWithoutLeaderInput, CollectionUncheckedCreateWithoutLeaderInput> | CollectionCreateWithoutLeaderInput[] | CollectionUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutLeaderInput | CollectionCreateOrConnectWithoutLeaderInput[]
    createMany?: CollectionCreateManyLeaderInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type CollectionUncheckedCreateNestedManyWithoutLeaderInput = {
    create?: XOR<CollectionCreateWithoutLeaderInput, CollectionUncheckedCreateWithoutLeaderInput> | CollectionCreateWithoutLeaderInput[] | CollectionUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutLeaderInput | CollectionCreateOrConnectWithoutLeaderInput[]
    createMany?: CollectionCreateManyLeaderInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CollectionUpdateManyWithoutLeaderNestedInput = {
    create?: XOR<CollectionCreateWithoutLeaderInput, CollectionUncheckedCreateWithoutLeaderInput> | CollectionCreateWithoutLeaderInput[] | CollectionUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutLeaderInput | CollectionCreateOrConnectWithoutLeaderInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutLeaderInput | CollectionUpsertWithWhereUniqueWithoutLeaderInput[]
    createMany?: CollectionCreateManyLeaderInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutLeaderInput | CollectionUpdateWithWhereUniqueWithoutLeaderInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutLeaderInput | CollectionUpdateManyWithWhereWithoutLeaderInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type CollectionUncheckedUpdateManyWithoutLeaderNestedInput = {
    create?: XOR<CollectionCreateWithoutLeaderInput, CollectionUncheckedCreateWithoutLeaderInput> | CollectionCreateWithoutLeaderInput[] | CollectionUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutLeaderInput | CollectionCreateOrConnectWithoutLeaderInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutLeaderInput | CollectionUpsertWithWhereUniqueWithoutLeaderInput[]
    createMany?: CollectionCreateManyLeaderInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutLeaderInput | CollectionUpdateWithWhereUniqueWithoutLeaderInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutLeaderInput | CollectionUpdateManyWithWhereWithoutLeaderInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type MonsterCreateNestedManyWithoutTypeInput = {
    create?: XOR<MonsterCreateWithoutTypeInput, MonsterUncheckedCreateWithoutTypeInput> | MonsterCreateWithoutTypeInput[] | MonsterUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutTypeInput | MonsterCreateOrConnectWithoutTypeInput[]
    createMany?: MonsterCreateManyTypeInputEnvelope
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
  }

  export type MonsterUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<MonsterCreateWithoutTypeInput, MonsterUncheckedCreateWithoutTypeInput> | MonsterCreateWithoutTypeInput[] | MonsterUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutTypeInput | MonsterCreateOrConnectWithoutTypeInput[]
    createMany?: MonsterCreateManyTypeInputEnvelope
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumEnumTypeElementFieldUpdateOperationsInput = {
    set?: $Enums.EnumTypeElement
  }

  export type MonsterUpdateManyWithoutTypeNestedInput = {
    create?: XOR<MonsterCreateWithoutTypeInput, MonsterUncheckedCreateWithoutTypeInput> | MonsterCreateWithoutTypeInput[] | MonsterUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutTypeInput | MonsterCreateOrConnectWithoutTypeInput[]
    upsert?: MonsterUpsertWithWhereUniqueWithoutTypeInput | MonsterUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: MonsterCreateManyTypeInputEnvelope
    set?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    disconnect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    delete?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    update?: MonsterUpdateWithWhereUniqueWithoutTypeInput | MonsterUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: MonsterUpdateManyWithWhereWithoutTypeInput | MonsterUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
  }

  export type MonsterUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<MonsterCreateWithoutTypeInput, MonsterUncheckedCreateWithoutTypeInput> | MonsterCreateWithoutTypeInput[] | MonsterUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutTypeInput | MonsterCreateOrConnectWithoutTypeInput[]
    upsert?: MonsterUpsertWithWhereUniqueWithoutTypeInput | MonsterUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: MonsterCreateManyTypeInputEnvelope
    set?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    disconnect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    delete?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    update?: MonsterUpdateWithWhereUniqueWithoutTypeInput | MonsterUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: MonsterUpdateManyWithWhereWithoutTypeInput | MonsterUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
  }

  export type TypeMonsterCreateNestedOneWithoutMonstersInput = {
    create?: XOR<TypeMonsterCreateWithoutMonstersInput, TypeMonsterUncheckedCreateWithoutMonstersInput>
    connectOrCreate?: TypeMonsterCreateOrConnectWithoutMonstersInput
    connect?: TypeMonsterWhereUniqueInput
  }

  export type CollectionCreateNestedManyWithoutMonsterInput = {
    create?: XOR<CollectionCreateWithoutMonsterInput, CollectionUncheckedCreateWithoutMonsterInput> | CollectionCreateWithoutMonsterInput[] | CollectionUncheckedCreateWithoutMonsterInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutMonsterInput | CollectionCreateOrConnectWithoutMonsterInput[]
    createMany?: CollectionCreateManyMonsterInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type DailyMonstersCreateNestedManyWithoutMonsterInput = {
    create?: XOR<DailyMonstersCreateWithoutMonsterInput, DailyMonstersUncheckedCreateWithoutMonsterInput> | DailyMonstersCreateWithoutMonsterInput[] | DailyMonstersUncheckedCreateWithoutMonsterInput[]
    connectOrCreate?: DailyMonstersCreateOrConnectWithoutMonsterInput | DailyMonstersCreateOrConnectWithoutMonsterInput[]
    createMany?: DailyMonstersCreateManyMonsterInputEnvelope
    connect?: DailyMonstersWhereUniqueInput | DailyMonstersWhereUniqueInput[]
  }

  export type CollectionUncheckedCreateNestedManyWithoutMonsterInput = {
    create?: XOR<CollectionCreateWithoutMonsterInput, CollectionUncheckedCreateWithoutMonsterInput> | CollectionCreateWithoutMonsterInput[] | CollectionUncheckedCreateWithoutMonsterInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutMonsterInput | CollectionCreateOrConnectWithoutMonsterInput[]
    createMany?: CollectionCreateManyMonsterInputEnvelope
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
  }

  export type DailyMonstersUncheckedCreateNestedManyWithoutMonsterInput = {
    create?: XOR<DailyMonstersCreateWithoutMonsterInput, DailyMonstersUncheckedCreateWithoutMonsterInput> | DailyMonstersCreateWithoutMonsterInput[] | DailyMonstersUncheckedCreateWithoutMonsterInput[]
    connectOrCreate?: DailyMonstersCreateOrConnectWithoutMonsterInput | DailyMonstersCreateOrConnectWithoutMonsterInput[]
    createMany?: DailyMonstersCreateManyMonsterInputEnvelope
    connect?: DailyMonstersWhereUniqueInput | DailyMonstersWhereUniqueInput[]
  }

  export type TypeMonsterUpdateOneWithoutMonstersNestedInput = {
    create?: XOR<TypeMonsterCreateWithoutMonstersInput, TypeMonsterUncheckedCreateWithoutMonstersInput>
    connectOrCreate?: TypeMonsterCreateOrConnectWithoutMonstersInput
    upsert?: TypeMonsterUpsertWithoutMonstersInput
    disconnect?: TypeMonsterWhereInput | boolean
    delete?: TypeMonsterWhereInput | boolean
    connect?: TypeMonsterWhereUniqueInput
    update?: XOR<XOR<TypeMonsterUpdateToOneWithWhereWithoutMonstersInput, TypeMonsterUpdateWithoutMonstersInput>, TypeMonsterUncheckedUpdateWithoutMonstersInput>
  }

  export type CollectionUpdateManyWithoutMonsterNestedInput = {
    create?: XOR<CollectionCreateWithoutMonsterInput, CollectionUncheckedCreateWithoutMonsterInput> | CollectionCreateWithoutMonsterInput[] | CollectionUncheckedCreateWithoutMonsterInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutMonsterInput | CollectionCreateOrConnectWithoutMonsterInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutMonsterInput | CollectionUpsertWithWhereUniqueWithoutMonsterInput[]
    createMany?: CollectionCreateManyMonsterInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutMonsterInput | CollectionUpdateWithWhereUniqueWithoutMonsterInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutMonsterInput | CollectionUpdateManyWithWhereWithoutMonsterInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type DailyMonstersUpdateManyWithoutMonsterNestedInput = {
    create?: XOR<DailyMonstersCreateWithoutMonsterInput, DailyMonstersUncheckedCreateWithoutMonsterInput> | DailyMonstersCreateWithoutMonsterInput[] | DailyMonstersUncheckedCreateWithoutMonsterInput[]
    connectOrCreate?: DailyMonstersCreateOrConnectWithoutMonsterInput | DailyMonstersCreateOrConnectWithoutMonsterInput[]
    upsert?: DailyMonstersUpsertWithWhereUniqueWithoutMonsterInput | DailyMonstersUpsertWithWhereUniqueWithoutMonsterInput[]
    createMany?: DailyMonstersCreateManyMonsterInputEnvelope
    set?: DailyMonstersWhereUniqueInput | DailyMonstersWhereUniqueInput[]
    disconnect?: DailyMonstersWhereUniqueInput | DailyMonstersWhereUniqueInput[]
    delete?: DailyMonstersWhereUniqueInput | DailyMonstersWhereUniqueInput[]
    connect?: DailyMonstersWhereUniqueInput | DailyMonstersWhereUniqueInput[]
    update?: DailyMonstersUpdateWithWhereUniqueWithoutMonsterInput | DailyMonstersUpdateWithWhereUniqueWithoutMonsterInput[]
    updateMany?: DailyMonstersUpdateManyWithWhereWithoutMonsterInput | DailyMonstersUpdateManyWithWhereWithoutMonsterInput[]
    deleteMany?: DailyMonstersScalarWhereInput | DailyMonstersScalarWhereInput[]
  }

  export type CollectionUncheckedUpdateManyWithoutMonsterNestedInput = {
    create?: XOR<CollectionCreateWithoutMonsterInput, CollectionUncheckedCreateWithoutMonsterInput> | CollectionCreateWithoutMonsterInput[] | CollectionUncheckedCreateWithoutMonsterInput[]
    connectOrCreate?: CollectionCreateOrConnectWithoutMonsterInput | CollectionCreateOrConnectWithoutMonsterInput[]
    upsert?: CollectionUpsertWithWhereUniqueWithoutMonsterInput | CollectionUpsertWithWhereUniqueWithoutMonsterInput[]
    createMany?: CollectionCreateManyMonsterInputEnvelope
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[]
    update?: CollectionUpdateWithWhereUniqueWithoutMonsterInput | CollectionUpdateWithWhereUniqueWithoutMonsterInput[]
    updateMany?: CollectionUpdateManyWithWhereWithoutMonsterInput | CollectionUpdateManyWithWhereWithoutMonsterInput[]
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
  }

  export type DailyMonstersUncheckedUpdateManyWithoutMonsterNestedInput = {
    create?: XOR<DailyMonstersCreateWithoutMonsterInput, DailyMonstersUncheckedCreateWithoutMonsterInput> | DailyMonstersCreateWithoutMonsterInput[] | DailyMonstersUncheckedCreateWithoutMonsterInput[]
    connectOrCreate?: DailyMonstersCreateOrConnectWithoutMonsterInput | DailyMonstersCreateOrConnectWithoutMonsterInput[]
    upsert?: DailyMonstersUpsertWithWhereUniqueWithoutMonsterInput | DailyMonstersUpsertWithWhereUniqueWithoutMonsterInput[]
    createMany?: DailyMonstersCreateManyMonsterInputEnvelope
    set?: DailyMonstersWhereUniqueInput | DailyMonstersWhereUniqueInput[]
    disconnect?: DailyMonstersWhereUniqueInput | DailyMonstersWhereUniqueInput[]
    delete?: DailyMonstersWhereUniqueInput | DailyMonstersWhereUniqueInput[]
    connect?: DailyMonstersWhereUniqueInput | DailyMonstersWhereUniqueInput[]
    update?: DailyMonstersUpdateWithWhereUniqueWithoutMonsterInput | DailyMonstersUpdateWithWhereUniqueWithoutMonsterInput[]
    updateMany?: DailyMonstersUpdateManyWithWhereWithoutMonsterInput | DailyMonstersUpdateManyWithWhereWithoutMonsterInput[]
    deleteMany?: DailyMonstersScalarWhereInput | DailyMonstersScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCollectionInput = {
    create?: XOR<UserCreateWithoutCollectionInput, UserUncheckedCreateWithoutCollectionInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionInput
    connect?: UserWhereUniqueInput
  }

  export type MonsterCreateNestedOneWithoutCollectionInput = {
    create?: XOR<MonsterCreateWithoutCollectionInput, MonsterUncheckedCreateWithoutCollectionInput>
    connectOrCreate?: MonsterCreateOrConnectWithoutCollectionInput
    connect?: MonsterWhereUniqueInput
  }

  export type MonstersFoodCreateNestedManyWithoutCollectionInput = {
    create?: XOR<MonstersFoodCreateWithoutCollectionInput, MonstersFoodUncheckedCreateWithoutCollectionInput> | MonstersFoodCreateWithoutCollectionInput[] | MonstersFoodUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: MonstersFoodCreateOrConnectWithoutCollectionInput | MonstersFoodCreateOrConnectWithoutCollectionInput[]
    createMany?: MonstersFoodCreateManyCollectionInputEnvelope
    connect?: MonstersFoodWhereUniqueInput | MonstersFoodWhereUniqueInput[]
  }

  export type MonstersFoodUncheckedCreateNestedManyWithoutCollectionInput = {
    create?: XOR<MonstersFoodCreateWithoutCollectionInput, MonstersFoodUncheckedCreateWithoutCollectionInput> | MonstersFoodCreateWithoutCollectionInput[] | MonstersFoodUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: MonstersFoodCreateOrConnectWithoutCollectionInput | MonstersFoodCreateOrConnectWithoutCollectionInput[]
    createMany?: MonstersFoodCreateManyCollectionInputEnvelope
    connect?: MonstersFoodWhereUniqueInput | MonstersFoodWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutCollectionNestedInput = {
    create?: XOR<UserCreateWithoutCollectionInput, UserUncheckedCreateWithoutCollectionInput>
    connectOrCreate?: UserCreateOrConnectWithoutCollectionInput
    upsert?: UserUpsertWithoutCollectionInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCollectionInput, UserUpdateWithoutCollectionInput>, UserUncheckedUpdateWithoutCollectionInput>
  }

  export type MonsterUpdateOneWithoutCollectionNestedInput = {
    create?: XOR<MonsterCreateWithoutCollectionInput, MonsterUncheckedCreateWithoutCollectionInput>
    connectOrCreate?: MonsterCreateOrConnectWithoutCollectionInput
    upsert?: MonsterUpsertWithoutCollectionInput
    disconnect?: MonsterWhereInput | boolean
    delete?: MonsterWhereInput | boolean
    connect?: MonsterWhereUniqueInput
    update?: XOR<XOR<MonsterUpdateToOneWithWhereWithoutCollectionInput, MonsterUpdateWithoutCollectionInput>, MonsterUncheckedUpdateWithoutCollectionInput>
  }

  export type MonstersFoodUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<MonstersFoodCreateWithoutCollectionInput, MonstersFoodUncheckedCreateWithoutCollectionInput> | MonstersFoodCreateWithoutCollectionInput[] | MonstersFoodUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: MonstersFoodCreateOrConnectWithoutCollectionInput | MonstersFoodCreateOrConnectWithoutCollectionInput[]
    upsert?: MonstersFoodUpsertWithWhereUniqueWithoutCollectionInput | MonstersFoodUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: MonstersFoodCreateManyCollectionInputEnvelope
    set?: MonstersFoodWhereUniqueInput | MonstersFoodWhereUniqueInput[]
    disconnect?: MonstersFoodWhereUniqueInput | MonstersFoodWhereUniqueInput[]
    delete?: MonstersFoodWhereUniqueInput | MonstersFoodWhereUniqueInput[]
    connect?: MonstersFoodWhereUniqueInput | MonstersFoodWhereUniqueInput[]
    update?: MonstersFoodUpdateWithWhereUniqueWithoutCollectionInput | MonstersFoodUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: MonstersFoodUpdateManyWithWhereWithoutCollectionInput | MonstersFoodUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: MonstersFoodScalarWhereInput | MonstersFoodScalarWhereInput[]
  }

  export type MonstersFoodUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?: XOR<MonstersFoodCreateWithoutCollectionInput, MonstersFoodUncheckedCreateWithoutCollectionInput> | MonstersFoodCreateWithoutCollectionInput[] | MonstersFoodUncheckedCreateWithoutCollectionInput[]
    connectOrCreate?: MonstersFoodCreateOrConnectWithoutCollectionInput | MonstersFoodCreateOrConnectWithoutCollectionInput[]
    upsert?: MonstersFoodUpsertWithWhereUniqueWithoutCollectionInput | MonstersFoodUpsertWithWhereUniqueWithoutCollectionInput[]
    createMany?: MonstersFoodCreateManyCollectionInputEnvelope
    set?: MonstersFoodWhereUniqueInput | MonstersFoodWhereUniqueInput[]
    disconnect?: MonstersFoodWhereUniqueInput | MonstersFoodWhereUniqueInput[]
    delete?: MonstersFoodWhereUniqueInput | MonstersFoodWhereUniqueInput[]
    connect?: MonstersFoodWhereUniqueInput | MonstersFoodWhereUniqueInput[]
    update?: MonstersFoodUpdateWithWhereUniqueWithoutCollectionInput | MonstersFoodUpdateWithWhereUniqueWithoutCollectionInput[]
    updateMany?: MonstersFoodUpdateManyWithWhereWithoutCollectionInput | MonstersFoodUpdateManyWithWhereWithoutCollectionInput[]
    deleteMany?: MonstersFoodScalarWhereInput | MonstersFoodScalarWhereInput[]
  }

  export type FoodCreateNestedOneWithoutMonstersFoodInput = {
    create?: XOR<FoodCreateWithoutMonstersFoodInput, FoodUncheckedCreateWithoutMonstersFoodInput>
    connectOrCreate?: FoodCreateOrConnectWithoutMonstersFoodInput
    connect?: FoodWhereUniqueInput
  }

  export type CollectionCreateNestedOneWithoutMonstersFoodInput = {
    create?: XOR<CollectionCreateWithoutMonstersFoodInput, CollectionUncheckedCreateWithoutMonstersFoodInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutMonstersFoodInput
    connect?: CollectionWhereUniqueInput
  }

  export type FoodUpdateOneRequiredWithoutMonstersFoodNestedInput = {
    create?: XOR<FoodCreateWithoutMonstersFoodInput, FoodUncheckedCreateWithoutMonstersFoodInput>
    connectOrCreate?: FoodCreateOrConnectWithoutMonstersFoodInput
    upsert?: FoodUpsertWithoutMonstersFoodInput
    connect?: FoodWhereUniqueInput
    update?: XOR<XOR<FoodUpdateToOneWithWhereWithoutMonstersFoodInput, FoodUpdateWithoutMonstersFoodInput>, FoodUncheckedUpdateWithoutMonstersFoodInput>
  }

  export type CollectionUpdateOneRequiredWithoutMonstersFoodNestedInput = {
    create?: XOR<CollectionCreateWithoutMonstersFoodInput, CollectionUncheckedCreateWithoutMonstersFoodInput>
    connectOrCreate?: CollectionCreateOrConnectWithoutMonstersFoodInput
    upsert?: CollectionUpsertWithoutMonstersFoodInput
    connect?: CollectionWhereUniqueInput
    update?: XOR<XOR<CollectionUpdateToOneWithWhereWithoutMonstersFoodInput, CollectionUpdateWithoutMonstersFoodInput>, CollectionUncheckedUpdateWithoutMonstersFoodInput>
  }

  export type MonsterCreateNestedOneWithoutDailyMonstersInput = {
    create?: XOR<MonsterCreateWithoutDailyMonstersInput, MonsterUncheckedCreateWithoutDailyMonstersInput>
    connectOrCreate?: MonsterCreateOrConnectWithoutDailyMonstersInput
    connect?: MonsterWhereUniqueInput
  }

  export type MonsterUpdateOneWithoutDailyMonstersNestedInput = {
    create?: XOR<MonsterCreateWithoutDailyMonstersInput, MonsterUncheckedCreateWithoutDailyMonstersInput>
    connectOrCreate?: MonsterCreateOrConnectWithoutDailyMonstersInput
    upsert?: MonsterUpsertWithoutDailyMonstersInput
    disconnect?: MonsterWhereInput | boolean
    delete?: MonsterWhereInput | boolean
    connect?: MonsterWhereUniqueInput
    update?: XOR<XOR<MonsterUpdateToOneWithWhereWithoutDailyMonstersInput, MonsterUpdateWithoutDailyMonstersInput>, MonsterUncheckedUpdateWithoutDailyMonstersInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MonstersFoodCreateNestedManyWithoutFoodInput = {
    create?: XOR<MonstersFoodCreateWithoutFoodInput, MonstersFoodUncheckedCreateWithoutFoodInput> | MonstersFoodCreateWithoutFoodInput[] | MonstersFoodUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MonstersFoodCreateOrConnectWithoutFoodInput | MonstersFoodCreateOrConnectWithoutFoodInput[]
    createMany?: MonstersFoodCreateManyFoodInputEnvelope
    connect?: MonstersFoodWhereUniqueInput | MonstersFoodWhereUniqueInput[]
  }

  export type MonstersFoodUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<MonstersFoodCreateWithoutFoodInput, MonstersFoodUncheckedCreateWithoutFoodInput> | MonstersFoodCreateWithoutFoodInput[] | MonstersFoodUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MonstersFoodCreateOrConnectWithoutFoodInput | MonstersFoodCreateOrConnectWithoutFoodInput[]
    createMany?: MonstersFoodCreateManyFoodInputEnvelope
    connect?: MonstersFoodWhereUniqueInput | MonstersFoodWhereUniqueInput[]
  }

  export type MonstersFoodUpdateManyWithoutFoodNestedInput = {
    create?: XOR<MonstersFoodCreateWithoutFoodInput, MonstersFoodUncheckedCreateWithoutFoodInput> | MonstersFoodCreateWithoutFoodInput[] | MonstersFoodUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MonstersFoodCreateOrConnectWithoutFoodInput | MonstersFoodCreateOrConnectWithoutFoodInput[]
    upsert?: MonstersFoodUpsertWithWhereUniqueWithoutFoodInput | MonstersFoodUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: MonstersFoodCreateManyFoodInputEnvelope
    set?: MonstersFoodWhereUniqueInput | MonstersFoodWhereUniqueInput[]
    disconnect?: MonstersFoodWhereUniqueInput | MonstersFoodWhereUniqueInput[]
    delete?: MonstersFoodWhereUniqueInput | MonstersFoodWhereUniqueInput[]
    connect?: MonstersFoodWhereUniqueInput | MonstersFoodWhereUniqueInput[]
    update?: MonstersFoodUpdateWithWhereUniqueWithoutFoodInput | MonstersFoodUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: MonstersFoodUpdateManyWithWhereWithoutFoodInput | MonstersFoodUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: MonstersFoodScalarWhereInput | MonstersFoodScalarWhereInput[]
  }

  export type MonstersFoodUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<MonstersFoodCreateWithoutFoodInput, MonstersFoodUncheckedCreateWithoutFoodInput> | MonstersFoodCreateWithoutFoodInput[] | MonstersFoodUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MonstersFoodCreateOrConnectWithoutFoodInput | MonstersFoodCreateOrConnectWithoutFoodInput[]
    upsert?: MonstersFoodUpsertWithWhereUniqueWithoutFoodInput | MonstersFoodUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: MonstersFoodCreateManyFoodInputEnvelope
    set?: MonstersFoodWhereUniqueInput | MonstersFoodWhereUniqueInput[]
    disconnect?: MonstersFoodWhereUniqueInput | MonstersFoodWhereUniqueInput[]
    delete?: MonstersFoodWhereUniqueInput | MonstersFoodWhereUniqueInput[]
    connect?: MonstersFoodWhereUniqueInput | MonstersFoodWhereUniqueInput[]
    update?: MonstersFoodUpdateWithWhereUniqueWithoutFoodInput | MonstersFoodUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: MonstersFoodUpdateManyWithWhereWithoutFoodInput | MonstersFoodUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: MonstersFoodScalarWhereInput | MonstersFoodScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumEnumTypeElementFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumTypeElement | EnumEnumTypeElementFieldRefInput<$PrismaModel>
    in?: $Enums.EnumTypeElement[] | ListEnumEnumTypeElementFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnumTypeElement[] | ListEnumEnumTypeElementFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumTypeElementFilter<$PrismaModel> | $Enums.EnumTypeElement
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumEnumTypeElementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumTypeElement | EnumEnumTypeElementFieldRefInput<$PrismaModel>
    in?: $Enums.EnumTypeElement[] | ListEnumEnumTypeElementFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnumTypeElement[] | ListEnumEnumTypeElementFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumTypeElementWithAggregatesFilter<$PrismaModel> | $Enums.EnumTypeElement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnumTypeElementFilter<$PrismaModel>
    _max?: NestedEnumEnumTypeElementFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CollectionCreateWithoutLeaderInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    name?: string | null
    days?: number
    foodMinutes?: number
    foodPlaces?: number
    isEvo?: boolean
    isStop?: boolean
    isNewDay?: boolean
    monster?: MonsterCreateNestedOneWithoutCollectionInput
    monstersFood?: MonstersFoodCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutLeaderInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    monsterId?: string | null
    name?: string | null
    days?: number
    foodMinutes?: number
    foodPlaces?: number
    isEvo?: boolean
    isStop?: boolean
    isNewDay?: boolean
    monstersFood?: MonstersFoodUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutLeaderInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutLeaderInput, CollectionUncheckedCreateWithoutLeaderInput>
  }

  export type CollectionCreateManyLeaderInputEnvelope = {
    data: CollectionCreateManyLeaderInput | CollectionCreateManyLeaderInput[]
    skipDuplicates?: boolean
  }

  export type CollectionUpsertWithWhereUniqueWithoutLeaderInput = {
    where: CollectionWhereUniqueInput
    update: XOR<CollectionUpdateWithoutLeaderInput, CollectionUncheckedUpdateWithoutLeaderInput>
    create: XOR<CollectionCreateWithoutLeaderInput, CollectionUncheckedCreateWithoutLeaderInput>
  }

  export type CollectionUpdateWithWhereUniqueWithoutLeaderInput = {
    where: CollectionWhereUniqueInput
    data: XOR<CollectionUpdateWithoutLeaderInput, CollectionUncheckedUpdateWithoutLeaderInput>
  }

  export type CollectionUpdateManyWithWhereWithoutLeaderInput = {
    where: CollectionScalarWhereInput
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyWithoutLeaderInput>
  }

  export type CollectionScalarWhereInput = {
    AND?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
    OR?: CollectionScalarWhereInput[]
    NOT?: CollectionScalarWhereInput | CollectionScalarWhereInput[]
    id?: StringFilter<"Collection"> | string
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    updateAt?: DateTimeFilter<"Collection"> | Date | string
    leaderId?: StringNullableFilter<"Collection"> | string | null
    monsterId?: StringNullableFilter<"Collection"> | string | null
    name?: StringNullableFilter<"Collection"> | string | null
    days?: IntFilter<"Collection"> | number
    foodMinutes?: IntFilter<"Collection"> | number
    foodPlaces?: IntFilter<"Collection"> | number
    isEvo?: BoolFilter<"Collection"> | boolean
    isStop?: BoolFilter<"Collection"> | boolean
    isNewDay?: BoolFilter<"Collection"> | boolean
  }

  export type MonsterCreateWithoutTypeInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    subtypeName: string
    img: string
    stageEvo?: number
    branchEvo?: number
    starts?: number
    daysNextLvl?: number
    collection?: CollectionCreateNestedManyWithoutMonsterInput
    dailyMonsters?: DailyMonstersCreateNestedManyWithoutMonsterInput
  }

  export type MonsterUncheckedCreateWithoutTypeInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    subtypeName: string
    img: string
    stageEvo?: number
    branchEvo?: number
    starts?: number
    daysNextLvl?: number
    collection?: CollectionUncheckedCreateNestedManyWithoutMonsterInput
    dailyMonsters?: DailyMonstersUncheckedCreateNestedManyWithoutMonsterInput
  }

  export type MonsterCreateOrConnectWithoutTypeInput = {
    where: MonsterWhereUniqueInput
    create: XOR<MonsterCreateWithoutTypeInput, MonsterUncheckedCreateWithoutTypeInput>
  }

  export type MonsterCreateManyTypeInputEnvelope = {
    data: MonsterCreateManyTypeInput | MonsterCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type MonsterUpsertWithWhereUniqueWithoutTypeInput = {
    where: MonsterWhereUniqueInput
    update: XOR<MonsterUpdateWithoutTypeInput, MonsterUncheckedUpdateWithoutTypeInput>
    create: XOR<MonsterCreateWithoutTypeInput, MonsterUncheckedCreateWithoutTypeInput>
  }

  export type MonsterUpdateWithWhereUniqueWithoutTypeInput = {
    where: MonsterWhereUniqueInput
    data: XOR<MonsterUpdateWithoutTypeInput, MonsterUncheckedUpdateWithoutTypeInput>
  }

  export type MonsterUpdateManyWithWhereWithoutTypeInput = {
    where: MonsterScalarWhereInput
    data: XOR<MonsterUpdateManyMutationInput, MonsterUncheckedUpdateManyWithoutTypeInput>
  }

  export type MonsterScalarWhereInput = {
    AND?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
    OR?: MonsterScalarWhereInput[]
    NOT?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
    id?: StringFilter<"Monster"> | string
    createdAt?: DateTimeFilter<"Monster"> | Date | string
    updateAt?: DateTimeFilter<"Monster"> | Date | string
    typeId?: StringNullableFilter<"Monster"> | string | null
    subtypeName?: StringFilter<"Monster"> | string
    img?: StringFilter<"Monster"> | string
    stageEvo?: IntFilter<"Monster"> | number
    branchEvo?: IntFilter<"Monster"> | number
    starts?: IntFilter<"Monster"> | number
    daysNextLvl?: IntFilter<"Monster"> | number
  }

  export type TypeMonsterCreateWithoutMonstersInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    name: string
    img?: string | null
    element: $Enums.EnumTypeElement
    description: string
  }

  export type TypeMonsterUncheckedCreateWithoutMonstersInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    name: string
    img?: string | null
    element: $Enums.EnumTypeElement
    description: string
  }

  export type TypeMonsterCreateOrConnectWithoutMonstersInput = {
    where: TypeMonsterWhereUniqueInput
    create: XOR<TypeMonsterCreateWithoutMonstersInput, TypeMonsterUncheckedCreateWithoutMonstersInput>
  }

  export type CollectionCreateWithoutMonsterInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    name?: string | null
    days?: number
    foodMinutes?: number
    foodPlaces?: number
    isEvo?: boolean
    isStop?: boolean
    isNewDay?: boolean
    leader?: UserCreateNestedOneWithoutCollectionInput
    monstersFood?: MonstersFoodCreateNestedManyWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutMonsterInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    leaderId?: string | null
    name?: string | null
    days?: number
    foodMinutes?: number
    foodPlaces?: number
    isEvo?: boolean
    isStop?: boolean
    isNewDay?: boolean
    monstersFood?: MonstersFoodUncheckedCreateNestedManyWithoutCollectionInput
  }

  export type CollectionCreateOrConnectWithoutMonsterInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutMonsterInput, CollectionUncheckedCreateWithoutMonsterInput>
  }

  export type CollectionCreateManyMonsterInputEnvelope = {
    data: CollectionCreateManyMonsterInput | CollectionCreateManyMonsterInput[]
    skipDuplicates?: boolean
  }

  export type DailyMonstersCreateWithoutMonsterInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    date?: Date | string
    price: string
    isCoinsPrice: boolean
  }

  export type DailyMonstersUncheckedCreateWithoutMonsterInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    date?: Date | string
    price: string
    isCoinsPrice: boolean
  }

  export type DailyMonstersCreateOrConnectWithoutMonsterInput = {
    where: DailyMonstersWhereUniqueInput
    create: XOR<DailyMonstersCreateWithoutMonsterInput, DailyMonstersUncheckedCreateWithoutMonsterInput>
  }

  export type DailyMonstersCreateManyMonsterInputEnvelope = {
    data: DailyMonstersCreateManyMonsterInput | DailyMonstersCreateManyMonsterInput[]
    skipDuplicates?: boolean
  }

  export type TypeMonsterUpsertWithoutMonstersInput = {
    update: XOR<TypeMonsterUpdateWithoutMonstersInput, TypeMonsterUncheckedUpdateWithoutMonstersInput>
    create: XOR<TypeMonsterCreateWithoutMonstersInput, TypeMonsterUncheckedCreateWithoutMonstersInput>
    where?: TypeMonsterWhereInput
  }

  export type TypeMonsterUpdateToOneWithWhereWithoutMonstersInput = {
    where?: TypeMonsterWhereInput
    data: XOR<TypeMonsterUpdateWithoutMonstersInput, TypeMonsterUncheckedUpdateWithoutMonstersInput>
  }

  export type TypeMonsterUpdateWithoutMonstersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    element?: EnumEnumTypeElementFieldUpdateOperationsInput | $Enums.EnumTypeElement
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TypeMonsterUncheckedUpdateWithoutMonstersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    element?: EnumEnumTypeElementFieldUpdateOperationsInput | $Enums.EnumTypeElement
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CollectionUpsertWithWhereUniqueWithoutMonsterInput = {
    where: CollectionWhereUniqueInput
    update: XOR<CollectionUpdateWithoutMonsterInput, CollectionUncheckedUpdateWithoutMonsterInput>
    create: XOR<CollectionCreateWithoutMonsterInput, CollectionUncheckedCreateWithoutMonsterInput>
  }

  export type CollectionUpdateWithWhereUniqueWithoutMonsterInput = {
    where: CollectionWhereUniqueInput
    data: XOR<CollectionUpdateWithoutMonsterInput, CollectionUncheckedUpdateWithoutMonsterInput>
  }

  export type CollectionUpdateManyWithWhereWithoutMonsterInput = {
    where: CollectionScalarWhereInput
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyWithoutMonsterInput>
  }

  export type DailyMonstersUpsertWithWhereUniqueWithoutMonsterInput = {
    where: DailyMonstersWhereUniqueInput
    update: XOR<DailyMonstersUpdateWithoutMonsterInput, DailyMonstersUncheckedUpdateWithoutMonsterInput>
    create: XOR<DailyMonstersCreateWithoutMonsterInput, DailyMonstersUncheckedCreateWithoutMonsterInput>
  }

  export type DailyMonstersUpdateWithWhereUniqueWithoutMonsterInput = {
    where: DailyMonstersWhereUniqueInput
    data: XOR<DailyMonstersUpdateWithoutMonsterInput, DailyMonstersUncheckedUpdateWithoutMonsterInput>
  }

  export type DailyMonstersUpdateManyWithWhereWithoutMonsterInput = {
    where: DailyMonstersScalarWhereInput
    data: XOR<DailyMonstersUpdateManyMutationInput, DailyMonstersUncheckedUpdateManyWithoutMonsterInput>
  }

  export type DailyMonstersScalarWhereInput = {
    AND?: DailyMonstersScalarWhereInput | DailyMonstersScalarWhereInput[]
    OR?: DailyMonstersScalarWhereInput[]
    NOT?: DailyMonstersScalarWhereInput | DailyMonstersScalarWhereInput[]
    id?: StringFilter<"DailyMonsters"> | string
    createdAt?: DateTimeFilter<"DailyMonsters"> | Date | string
    updateAt?: DateTimeFilter<"DailyMonsters"> | Date | string
    date?: DateTimeFilter<"DailyMonsters"> | Date | string
    price?: StringFilter<"DailyMonsters"> | string
    isCoinsPrice?: BoolFilter<"DailyMonsters"> | boolean
    monsterId?: StringNullableFilter<"DailyMonsters"> | string | null
  }

  export type UserCreateWithoutCollectionInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    coins?: number
    crystals?: number
    telegramId: string
    username: string
    fullName: string
    reputation?: number
    userAvatar: string
    evoPlaces?: number
  }

  export type UserUncheckedCreateWithoutCollectionInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    coins?: number
    crystals?: number
    telegramId: string
    username: string
    fullName: string
    reputation?: number
    userAvatar: string
    evoPlaces?: number
  }

  export type UserCreateOrConnectWithoutCollectionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCollectionInput, UserUncheckedCreateWithoutCollectionInput>
  }

  export type MonsterCreateWithoutCollectionInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    subtypeName: string
    img: string
    stageEvo?: number
    branchEvo?: number
    starts?: number
    daysNextLvl?: number
    type?: TypeMonsterCreateNestedOneWithoutMonstersInput
    dailyMonsters?: DailyMonstersCreateNestedManyWithoutMonsterInput
  }

  export type MonsterUncheckedCreateWithoutCollectionInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    typeId?: string | null
    subtypeName: string
    img: string
    stageEvo?: number
    branchEvo?: number
    starts?: number
    daysNextLvl?: number
    dailyMonsters?: DailyMonstersUncheckedCreateNestedManyWithoutMonsterInput
  }

  export type MonsterCreateOrConnectWithoutCollectionInput = {
    where: MonsterWhereUniqueInput
    create: XOR<MonsterCreateWithoutCollectionInput, MonsterUncheckedCreateWithoutCollectionInput>
  }

  export type MonstersFoodCreateWithoutCollectionInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    food: FoodCreateNestedOneWithoutMonstersFoodInput
  }

  export type MonstersFoodUncheckedCreateWithoutCollectionInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    foodId: string
  }

  export type MonstersFoodCreateOrConnectWithoutCollectionInput = {
    where: MonstersFoodWhereUniqueInput
    create: XOR<MonstersFoodCreateWithoutCollectionInput, MonstersFoodUncheckedCreateWithoutCollectionInput>
  }

  export type MonstersFoodCreateManyCollectionInputEnvelope = {
    data: MonstersFoodCreateManyCollectionInput | MonstersFoodCreateManyCollectionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCollectionInput = {
    update: XOR<UserUpdateWithoutCollectionInput, UserUncheckedUpdateWithoutCollectionInput>
    create: XOR<UserCreateWithoutCollectionInput, UserUncheckedCreateWithoutCollectionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCollectionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCollectionInput, UserUncheckedUpdateWithoutCollectionInput>
  }

  export type UserUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coins?: IntFieldUpdateOperationsInput | number
    crystals?: IntFieldUpdateOperationsInput | number
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    reputation?: IntFieldUpdateOperationsInput | number
    userAvatar?: StringFieldUpdateOperationsInput | string
    evoPlaces?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coins?: IntFieldUpdateOperationsInput | number
    crystals?: IntFieldUpdateOperationsInput | number
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    reputation?: IntFieldUpdateOperationsInput | number
    userAvatar?: StringFieldUpdateOperationsInput | string
    evoPlaces?: IntFieldUpdateOperationsInput | number
  }

  export type MonsterUpsertWithoutCollectionInput = {
    update: XOR<MonsterUpdateWithoutCollectionInput, MonsterUncheckedUpdateWithoutCollectionInput>
    create: XOR<MonsterCreateWithoutCollectionInput, MonsterUncheckedCreateWithoutCollectionInput>
    where?: MonsterWhereInput
  }

  export type MonsterUpdateToOneWithWhereWithoutCollectionInput = {
    where?: MonsterWhereInput
    data: XOR<MonsterUpdateWithoutCollectionInput, MonsterUncheckedUpdateWithoutCollectionInput>
  }

  export type MonsterUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtypeName?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    stageEvo?: IntFieldUpdateOperationsInput | number
    branchEvo?: IntFieldUpdateOperationsInput | number
    starts?: IntFieldUpdateOperationsInput | number
    daysNextLvl?: IntFieldUpdateOperationsInput | number
    type?: TypeMonsterUpdateOneWithoutMonstersNestedInput
    dailyMonsters?: DailyMonstersUpdateManyWithoutMonsterNestedInput
  }

  export type MonsterUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    typeId?: NullableStringFieldUpdateOperationsInput | string | null
    subtypeName?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    stageEvo?: IntFieldUpdateOperationsInput | number
    branchEvo?: IntFieldUpdateOperationsInput | number
    starts?: IntFieldUpdateOperationsInput | number
    daysNextLvl?: IntFieldUpdateOperationsInput | number
    dailyMonsters?: DailyMonstersUncheckedUpdateManyWithoutMonsterNestedInput
  }

  export type MonstersFoodUpsertWithWhereUniqueWithoutCollectionInput = {
    where: MonstersFoodWhereUniqueInput
    update: XOR<MonstersFoodUpdateWithoutCollectionInput, MonstersFoodUncheckedUpdateWithoutCollectionInput>
    create: XOR<MonstersFoodCreateWithoutCollectionInput, MonstersFoodUncheckedCreateWithoutCollectionInput>
  }

  export type MonstersFoodUpdateWithWhereUniqueWithoutCollectionInput = {
    where: MonstersFoodWhereUniqueInput
    data: XOR<MonstersFoodUpdateWithoutCollectionInput, MonstersFoodUncheckedUpdateWithoutCollectionInput>
  }

  export type MonstersFoodUpdateManyWithWhereWithoutCollectionInput = {
    where: MonstersFoodScalarWhereInput
    data: XOR<MonstersFoodUpdateManyMutationInput, MonstersFoodUncheckedUpdateManyWithoutCollectionInput>
  }

  export type MonstersFoodScalarWhereInput = {
    AND?: MonstersFoodScalarWhereInput | MonstersFoodScalarWhereInput[]
    OR?: MonstersFoodScalarWhereInput[]
    NOT?: MonstersFoodScalarWhereInput | MonstersFoodScalarWhereInput[]
    id?: StringFilter<"MonstersFood"> | string
    createdAt?: DateTimeFilter<"MonstersFood"> | Date | string
    updateAt?: DateTimeFilter<"MonstersFood"> | Date | string
    foodId?: StringFilter<"MonstersFood"> | string
    collectionId?: StringFilter<"MonstersFood"> | string
  }

  export type FoodCreateWithoutMonstersFoodInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    name: string
    img: string
    time: number
    price: number
    isCoins?: boolean
    mucus?: number
    tentacle?: number
    fish?: number
    eye?: number
    wing?: number
    fly?: number
    bone?: number
  }

  export type FoodUncheckedCreateWithoutMonstersFoodInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    name: string
    img: string
    time: number
    price: number
    isCoins?: boolean
    mucus?: number
    tentacle?: number
    fish?: number
    eye?: number
    wing?: number
    fly?: number
    bone?: number
  }

  export type FoodCreateOrConnectWithoutMonstersFoodInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutMonstersFoodInput, FoodUncheckedCreateWithoutMonstersFoodInput>
  }

  export type CollectionCreateWithoutMonstersFoodInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    name?: string | null
    days?: number
    foodMinutes?: number
    foodPlaces?: number
    isEvo?: boolean
    isStop?: boolean
    isNewDay?: boolean
    leader?: UserCreateNestedOneWithoutCollectionInput
    monster?: MonsterCreateNestedOneWithoutCollectionInput
  }

  export type CollectionUncheckedCreateWithoutMonstersFoodInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    leaderId?: string | null
    monsterId?: string | null
    name?: string | null
    days?: number
    foodMinutes?: number
    foodPlaces?: number
    isEvo?: boolean
    isStop?: boolean
    isNewDay?: boolean
  }

  export type CollectionCreateOrConnectWithoutMonstersFoodInput = {
    where: CollectionWhereUniqueInput
    create: XOR<CollectionCreateWithoutMonstersFoodInput, CollectionUncheckedCreateWithoutMonstersFoodInput>
  }

  export type FoodUpsertWithoutMonstersFoodInput = {
    update: XOR<FoodUpdateWithoutMonstersFoodInput, FoodUncheckedUpdateWithoutMonstersFoodInput>
    create: XOR<FoodCreateWithoutMonstersFoodInput, FoodUncheckedCreateWithoutMonstersFoodInput>
    where?: FoodWhereInput
  }

  export type FoodUpdateToOneWithWhereWithoutMonstersFoodInput = {
    where?: FoodWhereInput
    data: XOR<FoodUpdateWithoutMonstersFoodInput, FoodUncheckedUpdateWithoutMonstersFoodInput>
  }

  export type FoodUpdateWithoutMonstersFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    isCoins?: BoolFieldUpdateOperationsInput | boolean
    mucus?: IntFieldUpdateOperationsInput | number
    tentacle?: IntFieldUpdateOperationsInput | number
    fish?: IntFieldUpdateOperationsInput | number
    eye?: IntFieldUpdateOperationsInput | number
    wing?: IntFieldUpdateOperationsInput | number
    fly?: IntFieldUpdateOperationsInput | number
    bone?: IntFieldUpdateOperationsInput | number
  }

  export type FoodUncheckedUpdateWithoutMonstersFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    time?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    isCoins?: BoolFieldUpdateOperationsInput | boolean
    mucus?: IntFieldUpdateOperationsInput | number
    tentacle?: IntFieldUpdateOperationsInput | number
    fish?: IntFieldUpdateOperationsInput | number
    eye?: IntFieldUpdateOperationsInput | number
    wing?: IntFieldUpdateOperationsInput | number
    fly?: IntFieldUpdateOperationsInput | number
    bone?: IntFieldUpdateOperationsInput | number
  }

  export type CollectionUpsertWithoutMonstersFoodInput = {
    update: XOR<CollectionUpdateWithoutMonstersFoodInput, CollectionUncheckedUpdateWithoutMonstersFoodInput>
    create: XOR<CollectionCreateWithoutMonstersFoodInput, CollectionUncheckedCreateWithoutMonstersFoodInput>
    where?: CollectionWhereInput
  }

  export type CollectionUpdateToOneWithWhereWithoutMonstersFoodInput = {
    where?: CollectionWhereInput
    data: XOR<CollectionUpdateWithoutMonstersFoodInput, CollectionUncheckedUpdateWithoutMonstersFoodInput>
  }

  export type CollectionUpdateWithoutMonstersFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    days?: IntFieldUpdateOperationsInput | number
    foodMinutes?: IntFieldUpdateOperationsInput | number
    foodPlaces?: IntFieldUpdateOperationsInput | number
    isEvo?: BoolFieldUpdateOperationsInput | boolean
    isStop?: BoolFieldUpdateOperationsInput | boolean
    isNewDay?: BoolFieldUpdateOperationsInput | boolean
    leader?: UserUpdateOneWithoutCollectionNestedInput
    monster?: MonsterUpdateOneWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutMonstersFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    monsterId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    days?: IntFieldUpdateOperationsInput | number
    foodMinutes?: IntFieldUpdateOperationsInput | number
    foodPlaces?: IntFieldUpdateOperationsInput | number
    isEvo?: BoolFieldUpdateOperationsInput | boolean
    isStop?: BoolFieldUpdateOperationsInput | boolean
    isNewDay?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MonsterCreateWithoutDailyMonstersInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    subtypeName: string
    img: string
    stageEvo?: number
    branchEvo?: number
    starts?: number
    daysNextLvl?: number
    type?: TypeMonsterCreateNestedOneWithoutMonstersInput
    collection?: CollectionCreateNestedManyWithoutMonsterInput
  }

  export type MonsterUncheckedCreateWithoutDailyMonstersInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    typeId?: string | null
    subtypeName: string
    img: string
    stageEvo?: number
    branchEvo?: number
    starts?: number
    daysNextLvl?: number
    collection?: CollectionUncheckedCreateNestedManyWithoutMonsterInput
  }

  export type MonsterCreateOrConnectWithoutDailyMonstersInput = {
    where: MonsterWhereUniqueInput
    create: XOR<MonsterCreateWithoutDailyMonstersInput, MonsterUncheckedCreateWithoutDailyMonstersInput>
  }

  export type MonsterUpsertWithoutDailyMonstersInput = {
    update: XOR<MonsterUpdateWithoutDailyMonstersInput, MonsterUncheckedUpdateWithoutDailyMonstersInput>
    create: XOR<MonsterCreateWithoutDailyMonstersInput, MonsterUncheckedCreateWithoutDailyMonstersInput>
    where?: MonsterWhereInput
  }

  export type MonsterUpdateToOneWithWhereWithoutDailyMonstersInput = {
    where?: MonsterWhereInput
    data: XOR<MonsterUpdateWithoutDailyMonstersInput, MonsterUncheckedUpdateWithoutDailyMonstersInput>
  }

  export type MonsterUpdateWithoutDailyMonstersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtypeName?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    stageEvo?: IntFieldUpdateOperationsInput | number
    branchEvo?: IntFieldUpdateOperationsInput | number
    starts?: IntFieldUpdateOperationsInput | number
    daysNextLvl?: IntFieldUpdateOperationsInput | number
    type?: TypeMonsterUpdateOneWithoutMonstersNestedInput
    collection?: CollectionUpdateManyWithoutMonsterNestedInput
  }

  export type MonsterUncheckedUpdateWithoutDailyMonstersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    typeId?: NullableStringFieldUpdateOperationsInput | string | null
    subtypeName?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    stageEvo?: IntFieldUpdateOperationsInput | number
    branchEvo?: IntFieldUpdateOperationsInput | number
    starts?: IntFieldUpdateOperationsInput | number
    daysNextLvl?: IntFieldUpdateOperationsInput | number
    collection?: CollectionUncheckedUpdateManyWithoutMonsterNestedInput
  }

  export type MonstersFoodCreateWithoutFoodInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    collection: CollectionCreateNestedOneWithoutMonstersFoodInput
  }

  export type MonstersFoodUncheckedCreateWithoutFoodInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    collectionId: string
  }

  export type MonstersFoodCreateOrConnectWithoutFoodInput = {
    where: MonstersFoodWhereUniqueInput
    create: XOR<MonstersFoodCreateWithoutFoodInput, MonstersFoodUncheckedCreateWithoutFoodInput>
  }

  export type MonstersFoodCreateManyFoodInputEnvelope = {
    data: MonstersFoodCreateManyFoodInput | MonstersFoodCreateManyFoodInput[]
    skipDuplicates?: boolean
  }

  export type MonstersFoodUpsertWithWhereUniqueWithoutFoodInput = {
    where: MonstersFoodWhereUniqueInput
    update: XOR<MonstersFoodUpdateWithoutFoodInput, MonstersFoodUncheckedUpdateWithoutFoodInput>
    create: XOR<MonstersFoodCreateWithoutFoodInput, MonstersFoodUncheckedCreateWithoutFoodInput>
  }

  export type MonstersFoodUpdateWithWhereUniqueWithoutFoodInput = {
    where: MonstersFoodWhereUniqueInput
    data: XOR<MonstersFoodUpdateWithoutFoodInput, MonstersFoodUncheckedUpdateWithoutFoodInput>
  }

  export type MonstersFoodUpdateManyWithWhereWithoutFoodInput = {
    where: MonstersFoodScalarWhereInput
    data: XOR<MonstersFoodUpdateManyMutationInput, MonstersFoodUncheckedUpdateManyWithoutFoodInput>
  }

  export type CollectionCreateManyLeaderInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    monsterId?: string | null
    name?: string | null
    days?: number
    foodMinutes?: number
    foodPlaces?: number
    isEvo?: boolean
    isStop?: boolean
    isNewDay?: boolean
  }

  export type CollectionUpdateWithoutLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    days?: IntFieldUpdateOperationsInput | number
    foodMinutes?: IntFieldUpdateOperationsInput | number
    foodPlaces?: IntFieldUpdateOperationsInput | number
    isEvo?: BoolFieldUpdateOperationsInput | boolean
    isStop?: BoolFieldUpdateOperationsInput | boolean
    isNewDay?: BoolFieldUpdateOperationsInput | boolean
    monster?: MonsterUpdateOneWithoutCollectionNestedInput
    monstersFood?: MonstersFoodUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monsterId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    days?: IntFieldUpdateOperationsInput | number
    foodMinutes?: IntFieldUpdateOperationsInput | number
    foodPlaces?: IntFieldUpdateOperationsInput | number
    isEvo?: BoolFieldUpdateOperationsInput | boolean
    isStop?: BoolFieldUpdateOperationsInput | boolean
    isNewDay?: BoolFieldUpdateOperationsInput | boolean
    monstersFood?: MonstersFoodUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateManyWithoutLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monsterId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    days?: IntFieldUpdateOperationsInput | number
    foodMinutes?: IntFieldUpdateOperationsInput | number
    foodPlaces?: IntFieldUpdateOperationsInput | number
    isEvo?: BoolFieldUpdateOperationsInput | boolean
    isStop?: BoolFieldUpdateOperationsInput | boolean
    isNewDay?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MonsterCreateManyTypeInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    subtypeName: string
    img: string
    stageEvo?: number
    branchEvo?: number
    starts?: number
    daysNextLvl?: number
  }

  export type MonsterUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtypeName?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    stageEvo?: IntFieldUpdateOperationsInput | number
    branchEvo?: IntFieldUpdateOperationsInput | number
    starts?: IntFieldUpdateOperationsInput | number
    daysNextLvl?: IntFieldUpdateOperationsInput | number
    collection?: CollectionUpdateManyWithoutMonsterNestedInput
    dailyMonsters?: DailyMonstersUpdateManyWithoutMonsterNestedInput
  }

  export type MonsterUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtypeName?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    stageEvo?: IntFieldUpdateOperationsInput | number
    branchEvo?: IntFieldUpdateOperationsInput | number
    starts?: IntFieldUpdateOperationsInput | number
    daysNextLvl?: IntFieldUpdateOperationsInput | number
    collection?: CollectionUncheckedUpdateManyWithoutMonsterNestedInput
    dailyMonsters?: DailyMonstersUncheckedUpdateManyWithoutMonsterNestedInput
  }

  export type MonsterUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subtypeName?: StringFieldUpdateOperationsInput | string
    img?: StringFieldUpdateOperationsInput | string
    stageEvo?: IntFieldUpdateOperationsInput | number
    branchEvo?: IntFieldUpdateOperationsInput | number
    starts?: IntFieldUpdateOperationsInput | number
    daysNextLvl?: IntFieldUpdateOperationsInput | number
  }

  export type CollectionCreateManyMonsterInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    leaderId?: string | null
    name?: string | null
    days?: number
    foodMinutes?: number
    foodPlaces?: number
    isEvo?: boolean
    isStop?: boolean
    isNewDay?: boolean
  }

  export type DailyMonstersCreateManyMonsterInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    date?: Date | string
    price: string
    isCoinsPrice: boolean
  }

  export type CollectionUpdateWithoutMonsterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    days?: IntFieldUpdateOperationsInput | number
    foodMinutes?: IntFieldUpdateOperationsInput | number
    foodPlaces?: IntFieldUpdateOperationsInput | number
    isEvo?: BoolFieldUpdateOperationsInput | boolean
    isStop?: BoolFieldUpdateOperationsInput | boolean
    isNewDay?: BoolFieldUpdateOperationsInput | boolean
    leader?: UserUpdateOneWithoutCollectionNestedInput
    monstersFood?: MonstersFoodUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateWithoutMonsterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    days?: IntFieldUpdateOperationsInput | number
    foodMinutes?: IntFieldUpdateOperationsInput | number
    foodPlaces?: IntFieldUpdateOperationsInput | number
    isEvo?: BoolFieldUpdateOperationsInput | boolean
    isStop?: BoolFieldUpdateOperationsInput | boolean
    isNewDay?: BoolFieldUpdateOperationsInput | boolean
    monstersFood?: MonstersFoodUncheckedUpdateManyWithoutCollectionNestedInput
  }

  export type CollectionUncheckedUpdateManyWithoutMonsterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    days?: IntFieldUpdateOperationsInput | number
    foodMinutes?: IntFieldUpdateOperationsInput | number
    foodPlaces?: IntFieldUpdateOperationsInput | number
    isEvo?: BoolFieldUpdateOperationsInput | boolean
    isStop?: BoolFieldUpdateOperationsInput | boolean
    isNewDay?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DailyMonstersUpdateWithoutMonsterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: StringFieldUpdateOperationsInput | string
    isCoinsPrice?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DailyMonstersUncheckedUpdateWithoutMonsterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: StringFieldUpdateOperationsInput | string
    isCoinsPrice?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DailyMonstersUncheckedUpdateManyWithoutMonsterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: StringFieldUpdateOperationsInput | string
    isCoinsPrice?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MonstersFoodCreateManyCollectionInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    foodId: string
  }

  export type MonstersFoodUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateOneRequiredWithoutMonstersFoodNestedInput
  }

  export type MonstersFoodUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodId?: StringFieldUpdateOperationsInput | string
  }

  export type MonstersFoodUncheckedUpdateManyWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodId?: StringFieldUpdateOperationsInput | string
  }

  export type MonstersFoodCreateManyFoodInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    collectionId: string
  }

  export type MonstersFoodUpdateWithoutFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collection?: CollectionUpdateOneRequiredWithoutMonstersFoodNestedInput
  }

  export type MonstersFoodUncheckedUpdateWithoutFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: StringFieldUpdateOperationsInput | string
  }

  export type MonstersFoodUncheckedUpdateManyWithoutFoodInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collectionId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
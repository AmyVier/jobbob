
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
 * Model companies
 * 
 */
export type companies = $Result.DefaultSelection<Prisma.$companiesPayload>
/**
 * Model jobs
 * 
 */
export type jobs = $Result.DefaultSelection<Prisma.$jobsPayload>
/**
 * Model schools
 * 
 */
export type schools = $Result.DefaultSelection<Prisma.$schoolsPayload>
/**
 * Model skills
 * 
 */
export type skills = $Result.DefaultSelection<Prisma.$skillsPayload>
/**
 * Model types
 * 
 */
export type types = $Result.DefaultSelection<Prisma.$typesPayload>
/**
 * Model userjobs
 * 
 */
export type userjobs = $Result.DefaultSelection<Prisma.$userjobsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.companies.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Companies
   * const companies = await prisma.companies.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.companies`: Exposes CRUD operations for the **companies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.companies.findMany()
    * ```
    */
  get companies(): Prisma.companiesDelegate<ExtArgs>;

  /**
   * `prisma.jobs`: Exposes CRUD operations for the **jobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.jobs.findMany()
    * ```
    */
  get jobs(): Prisma.jobsDelegate<ExtArgs>;

  /**
   * `prisma.schools`: Exposes CRUD operations for the **schools** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.schools.findMany()
    * ```
    */
  get schools(): Prisma.schoolsDelegate<ExtArgs>;

  /**
   * `prisma.skills`: Exposes CRUD operations for the **skills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skills.findMany()
    * ```
    */
  get skills(): Prisma.skillsDelegate<ExtArgs>;

  /**
   * `prisma.types`: Exposes CRUD operations for the **types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Types
    * const types = await prisma.types.findMany()
    * ```
    */
  get types(): Prisma.typesDelegate<ExtArgs>;

  /**
   * `prisma.userjobs`: Exposes CRUD operations for the **userjobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Userjobs
    * const userjobs = await prisma.userjobs.findMany()
    * ```
    */
  get userjobs(): Prisma.userjobsDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.13.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    companies: 'companies',
    jobs: 'jobs',
    schools: 'schools',
    skills: 'skills',
    types: 'types',
    userjobs: 'userjobs',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'companies' | 'jobs' | 'schools' | 'skills' | 'types' | 'userjobs' | 'users'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      companies: {
        payload: Prisma.$companiesPayload<ExtArgs>
        fields: Prisma.companiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companiesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$companiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companiesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          findFirst: {
            args: Prisma.companiesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$companiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companiesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          findMany: {
            args: Prisma.companiesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>[]
          }
          create: {
            args: Prisma.companiesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          createMany: {
            args: Prisma.companiesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.companiesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          update: {
            args: Prisma.companiesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          deleteMany: {
            args: Prisma.companiesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.companiesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.companiesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$companiesPayload>
          }
          aggregate: {
            args: Prisma.CompaniesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCompanies>
          }
          groupBy: {
            args: Prisma.companiesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CompaniesGroupByOutputType>[]
          }
          count: {
            args: Prisma.companiesCountArgs<ExtArgs>,
            result: $Utils.Optional<CompaniesCountAggregateOutputType> | number
          }
        }
      }
      jobs: {
        payload: Prisma.$jobsPayload<ExtArgs>
        fields: Prisma.jobsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jobsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jobsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          findFirst: {
            args: Prisma.jobsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jobsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          findMany: {
            args: Prisma.jobsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>[]
          }
          create: {
            args: Prisma.jobsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          createMany: {
            args: Prisma.jobsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.jobsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          update: {
            args: Prisma.jobsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          deleteMany: {
            args: Prisma.jobsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.jobsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.jobsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          aggregate: {
            args: Prisma.JobsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJobs>
          }
          groupBy: {
            args: Prisma.jobsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JobsGroupByOutputType>[]
          }
          count: {
            args: Prisma.jobsCountArgs<ExtArgs>,
            result: $Utils.Optional<JobsCountAggregateOutputType> | number
          }
        }
      }
      schools: {
        payload: Prisma.$schoolsPayload<ExtArgs>
        fields: Prisma.schoolsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.schoolsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.schoolsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>
          }
          findFirst: {
            args: Prisma.schoolsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.schoolsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>
          }
          findMany: {
            args: Prisma.schoolsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>[]
          }
          create: {
            args: Prisma.schoolsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>
          }
          createMany: {
            args: Prisma.schoolsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.schoolsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>
          }
          update: {
            args: Prisma.schoolsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>
          }
          deleteMany: {
            args: Prisma.schoolsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.schoolsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.schoolsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$schoolsPayload>
          }
          aggregate: {
            args: Prisma.SchoolsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSchools>
          }
          groupBy: {
            args: Prisma.schoolsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SchoolsGroupByOutputType>[]
          }
          count: {
            args: Prisma.schoolsCountArgs<ExtArgs>,
            result: $Utils.Optional<SchoolsCountAggregateOutputType> | number
          }
        }
      }
      skills: {
        payload: Prisma.$skillsPayload<ExtArgs>
        fields: Prisma.skillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skillsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$skillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skillsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          findFirst: {
            args: Prisma.skillsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$skillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skillsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          findMany: {
            args: Prisma.skillsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>[]
          }
          create: {
            args: Prisma.skillsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          createMany: {
            args: Prisma.skillsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.skillsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          update: {
            args: Prisma.skillsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          deleteMany: {
            args: Prisma.skillsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.skillsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.skillsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$skillsPayload>
          }
          aggregate: {
            args: Prisma.SkillsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSkills>
          }
          groupBy: {
            args: Prisma.skillsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SkillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.skillsCountArgs<ExtArgs>,
            result: $Utils.Optional<SkillsCountAggregateOutputType> | number
          }
        }
      }
      types: {
        payload: Prisma.$typesPayload<ExtArgs>
        fields: Prisma.typesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.typesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$typesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.typesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$typesPayload>
          }
          findFirst: {
            args: Prisma.typesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$typesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.typesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$typesPayload>
          }
          findMany: {
            args: Prisma.typesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$typesPayload>[]
          }
          create: {
            args: Prisma.typesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$typesPayload>
          }
          createMany: {
            args: Prisma.typesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.typesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$typesPayload>
          }
          update: {
            args: Prisma.typesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$typesPayload>
          }
          deleteMany: {
            args: Prisma.typesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.typesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.typesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$typesPayload>
          }
          aggregate: {
            args: Prisma.TypesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTypes>
          }
          groupBy: {
            args: Prisma.typesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TypesGroupByOutputType>[]
          }
          count: {
            args: Prisma.typesCountArgs<ExtArgs>,
            result: $Utils.Optional<TypesCountAggregateOutputType> | number
          }
        }
      }
      userjobs: {
        payload: Prisma.$userjobsPayload<ExtArgs>
        fields: Prisma.userjobsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userjobsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userjobsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userjobsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userjobsPayload>
          }
          findFirst: {
            args: Prisma.userjobsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userjobsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userjobsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userjobsPayload>
          }
          findMany: {
            args: Prisma.userjobsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userjobsPayload>[]
          }
          create: {
            args: Prisma.userjobsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userjobsPayload>
          }
          createMany: {
            args: Prisma.userjobsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.userjobsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userjobsPayload>
          }
          update: {
            args: Prisma.userjobsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userjobsPayload>
          }
          deleteMany: {
            args: Prisma.userjobsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.userjobsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.userjobsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userjobsPayload>
          }
          aggregate: {
            args: Prisma.UserjobsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserjobs>
          }
          groupBy: {
            args: Prisma.userjobsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserjobsGroupByOutputType>[]
          }
          count: {
            args: Prisma.userjobsCountArgs<ExtArgs>,
            result: $Utils.Optional<UserjobsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Models
   */

  /**
   * Model companies
   */

  export type AggregateCompanies = {
    _count: CompaniesCountAggregateOutputType | null
    _avg: CompaniesAvgAggregateOutputType | null
    _sum: CompaniesSumAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  export type CompaniesAvgAggregateOutputType = {
    id: number | null
    typesid: number | null
  }

  export type CompaniesSumAggregateOutputType = {
    id: number | null
    typesid: number | null
  }

  export type CompaniesMinAggregateOutputType = {
    id: number | null
    title: string | null
    typesid: number | null
    description: string | null
  }

  export type CompaniesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    typesid: number | null
    description: string | null
  }

  export type CompaniesCountAggregateOutputType = {
    id: number
    title: number
    typesid: number
    description: number
    _all: number
  }


  export type CompaniesAvgAggregateInputType = {
    id?: true
    typesid?: true
  }

  export type CompaniesSumAggregateInputType = {
    id?: true
    typesid?: true
  }

  export type CompaniesMinAggregateInputType = {
    id?: true
    title?: true
    typesid?: true
    description?: true
  }

  export type CompaniesMaxAggregateInputType = {
    id?: true
    title?: true
    typesid?: true
    description?: true
  }

  export type CompaniesCountAggregateInputType = {
    id?: true
    title?: true
    typesid?: true
    description?: true
    _all?: true
  }

  export type CompaniesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to aggregate.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companies
    **/
    _count?: true | CompaniesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompaniesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompaniesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompaniesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompaniesMaxAggregateInputType
  }

  export type GetCompaniesAggregateType<T extends CompaniesAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanies[P]>
      : GetScalarType<T[P], AggregateCompanies[P]>
  }




  export type companiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companiesWhereInput
    orderBy?: companiesOrderByWithAggregationInput | companiesOrderByWithAggregationInput[]
    by: CompaniesScalarFieldEnum[] | CompaniesScalarFieldEnum
    having?: companiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompaniesCountAggregateInputType | true
    _avg?: CompaniesAvgAggregateInputType
    _sum?: CompaniesSumAggregateInputType
    _min?: CompaniesMinAggregateInputType
    _max?: CompaniesMaxAggregateInputType
  }

  export type CompaniesGroupByOutputType = {
    id: number
    title: string | null
    typesid: number | null
    description: string | null
    _count: CompaniesCountAggregateOutputType | null
    _avg: CompaniesAvgAggregateOutputType | null
    _sum: CompaniesSumAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  type GetCompaniesGroupByPayload<T extends companiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompaniesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompaniesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
            : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
        }
      >
    >


  export type companiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    typesid?: boolean
    description?: boolean
  }, ExtArgs["result"]["companies"]>

  export type companiesSelectScalar = {
    id?: boolean
    title?: boolean
    typesid?: boolean
    description?: boolean
  }



  export type $companiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "companies"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      typesid: number | null
      description: string | null
    }, ExtArgs["result"]["companies"]>
    composites: {}
  }


  type companiesGetPayload<S extends boolean | null | undefined | companiesDefaultArgs> = $Result.GetResult<Prisma.$companiesPayload, S>

  type companiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<companiesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompaniesCountAggregateInputType | true
    }

  export interface companiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['companies'], meta: { name: 'companies' } }
    /**
     * Find zero or one Companies that matches the filter.
     * @param {companiesFindUniqueArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends companiesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companiesFindUniqueArgs<ExtArgs>>
    ): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Companies that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {companiesFindUniqueOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends companiesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companiesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindFirstArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends companiesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companiesFindFirstArgs<ExtArgs>>
    ): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Companies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindFirstOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends companiesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companiesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.companies.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.companies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companiesWithIdOnly = await prisma.companies.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends companiesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companiesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Companies.
     * @param {companiesCreateArgs} args - Arguments to create a Companies.
     * @example
     * // Create one Companies
     * const Companies = await prisma.companies.create({
     *   data: {
     *     // ... data to create a Companies
     *   }
     * })
     * 
    **/
    create<T extends companiesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companiesCreateArgs<ExtArgs>>
    ): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Companies.
     *     @param {companiesCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const companies = await prisma.companies.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends companiesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companiesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Companies.
     * @param {companiesDeleteArgs} args - Arguments to delete one Companies.
     * @example
     * // Delete one Companies
     * const Companies = await prisma.companies.delete({
     *   where: {
     *     // ... filter to delete one Companies
     *   }
     * })
     * 
    **/
    delete<T extends companiesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companiesDeleteArgs<ExtArgs>>
    ): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Companies.
     * @param {companiesUpdateArgs} args - Arguments to update one Companies.
     * @example
     * // Update one Companies
     * const companies = await prisma.companies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends companiesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companiesUpdateArgs<ExtArgs>>
    ): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Companies.
     * @param {companiesDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.companies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends companiesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companiesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const companies = await prisma.companies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends companiesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companiesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Companies.
     * @param {companiesUpsertArgs} args - Arguments to update or create a Companies.
     * @example
     * // Update or create a Companies
     * const companies = await prisma.companies.upsert({
     *   create: {
     *     // ... data to create a Companies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Companies we want to update
     *   }
     * })
    **/
    upsert<T extends companiesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companiesUpsertArgs<ExtArgs>>
    ): Prisma__companiesClient<$Result.GetResult<Prisma.$companiesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.companies.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends companiesCountArgs>(
      args?: Subset<T, companiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompaniesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompaniesAggregateArgs>(args: Subset<T, CompaniesAggregateArgs>): Prisma.PrismaPromise<GetCompaniesAggregateType<T>>

    /**
     * Group by Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesGroupByArgs} args - Group by arguments.
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
      T extends companiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companiesGroupByArgs['orderBy'] }
        : { orderBy?: companiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, companiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompaniesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the companies model
   */
  readonly fields: companiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for companies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the companies model
   */ 
  interface companiesFieldRefs {
    readonly id: FieldRef<"companies", 'Int'>
    readonly title: FieldRef<"companies", 'String'>
    readonly typesid: FieldRef<"companies", 'Int'>
    readonly description: FieldRef<"companies", 'String'>
  }
    

  // Custom InputTypes
  /**
   * companies findUnique
   */
  export type companiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies findUniqueOrThrow
   */
  export type companiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies findFirst
   */
  export type companiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * companies findFirstOrThrow
   */
  export type companiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * companies findMany
   */
  export type companiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companiesOrderByWithRelationInput | companiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * companies create
   */
  export type companiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * The data needed to create a companies.
     */
    data?: XOR<companiesCreateInput, companiesUncheckedCreateInput>
  }

  /**
   * companies createMany
   */
  export type companiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companiesCreateManyInput | companiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * companies update
   */
  export type companiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * The data needed to update a companies.
     */
    data: XOR<companiesUpdateInput, companiesUncheckedUpdateInput>
    /**
     * Choose, which companies to update.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies updateMany
   */
  export type companiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companiesUpdateManyMutationInput, companiesUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companiesWhereInput
  }

  /**
   * companies upsert
   */
  export type companiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * The filter to search for the companies to update in case it exists.
     */
    where: companiesWhereUniqueInput
    /**
     * In case the companies found by the `where` argument doesn't exist, create a new companies with this data.
     */
    create: XOR<companiesCreateInput, companiesUncheckedCreateInput>
    /**
     * In case the companies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companiesUpdateInput, companiesUncheckedUpdateInput>
  }

  /**
   * companies delete
   */
  export type companiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
    /**
     * Filter which companies to delete.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies deleteMany
   */
  export type companiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companiesWhereInput
  }

  /**
   * companies without action
   */
  export type companiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect<ExtArgs> | null
  }


  /**
   * Model jobs
   */

  export type AggregateJobs = {
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  export type JobsAvgAggregateOutputType = {
    id: number | null
    typesid: number | null
    companiesid: number | null
  }

  export type JobsSumAggregateOutputType = {
    id: number | null
    typesid: number | null
    companiesid: number | null
  }

  export type JobsMinAggregateOutputType = {
    id: number | null
    description: string | null
    title: string | null
    location: string | null
    typesid: number | null
    companiesid: number | null
  }

  export type JobsMaxAggregateOutputType = {
    id: number | null
    description: string | null
    title: string | null
    location: string | null
    typesid: number | null
    companiesid: number | null
  }

  export type JobsCountAggregateOutputType = {
    id: number
    description: number
    title: number
    location: number
    typesid: number
    companiesid: number
    _all: number
  }


  export type JobsAvgAggregateInputType = {
    id?: true
    typesid?: true
    companiesid?: true
  }

  export type JobsSumAggregateInputType = {
    id?: true
    typesid?: true
    companiesid?: true
  }

  export type JobsMinAggregateInputType = {
    id?: true
    description?: true
    title?: true
    location?: true
    typesid?: true
    companiesid?: true
  }

  export type JobsMaxAggregateInputType = {
    id?: true
    description?: true
    title?: true
    location?: true
    typesid?: true
    companiesid?: true
  }

  export type JobsCountAggregateInputType = {
    id?: true
    description?: true
    title?: true
    location?: true
    typesid?: true
    companiesid?: true
    _all?: true
  }

  export type JobsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to aggregate.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jobs
    **/
    _count?: true | JobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobsMaxAggregateInputType
  }

  export type GetJobsAggregateType<T extends JobsAggregateArgs> = {
        [P in keyof T & keyof AggregateJobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobs[P]>
      : GetScalarType<T[P], AggregateJobs[P]>
  }




  export type jobsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobsWhereInput
    orderBy?: jobsOrderByWithAggregationInput | jobsOrderByWithAggregationInput[]
    by: JobsScalarFieldEnum[] | JobsScalarFieldEnum
    having?: jobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobsCountAggregateInputType | true
    _avg?: JobsAvgAggregateInputType
    _sum?: JobsSumAggregateInputType
    _min?: JobsMinAggregateInputType
    _max?: JobsMaxAggregateInputType
  }

  export type JobsGroupByOutputType = {
    id: number
    description: string | null
    title: string | null
    location: string | null
    typesid: number | null
    companiesid: number | null
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  type GetJobsGroupByPayload<T extends jobsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobsGroupByOutputType[P]>
            : GetScalarType<T[P], JobsGroupByOutputType[P]>
        }
      >
    >


  export type jobsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    title?: boolean
    location?: boolean
    typesid?: boolean
    companiesid?: boolean
  }, ExtArgs["result"]["jobs"]>

  export type jobsSelectScalar = {
    id?: boolean
    description?: boolean
    title?: boolean
    location?: boolean
    typesid?: boolean
    companiesid?: boolean
  }



  export type $jobsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jobs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string | null
      title: string | null
      location: string | null
      typesid: number | null
      companiesid: number | null
    }, ExtArgs["result"]["jobs"]>
    composites: {}
  }


  type jobsGetPayload<S extends boolean | null | undefined | jobsDefaultArgs> = $Result.GetResult<Prisma.$jobsPayload, S>

  type jobsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<jobsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JobsCountAggregateInputType | true
    }

  export interface jobsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jobs'], meta: { name: 'jobs' } }
    /**
     * Find zero or one Jobs that matches the filter.
     * @param {jobsFindUniqueArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends jobsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, jobsFindUniqueArgs<ExtArgs>>
    ): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Jobs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {jobsFindUniqueOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends jobsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, jobsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindFirstArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends jobsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, jobsFindFirstArgs<ExtArgs>>
    ): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Jobs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindFirstOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends jobsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, jobsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.jobs.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.jobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobsWithIdOnly = await prisma.jobs.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends jobsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jobsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Jobs.
     * @param {jobsCreateArgs} args - Arguments to create a Jobs.
     * @example
     * // Create one Jobs
     * const Jobs = await prisma.jobs.create({
     *   data: {
     *     // ... data to create a Jobs
     *   }
     * })
     * 
    **/
    create<T extends jobsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, jobsCreateArgs<ExtArgs>>
    ): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Jobs.
     *     @param {jobsCreateManyArgs} args - Arguments to create many Jobs.
     *     @example
     *     // Create many Jobs
     *     const jobs = await prisma.jobs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends jobsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jobsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jobs.
     * @param {jobsDeleteArgs} args - Arguments to delete one Jobs.
     * @example
     * // Delete one Jobs
     * const Jobs = await prisma.jobs.delete({
     *   where: {
     *     // ... filter to delete one Jobs
     *   }
     * })
     * 
    **/
    delete<T extends jobsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, jobsDeleteArgs<ExtArgs>>
    ): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Jobs.
     * @param {jobsUpdateArgs} args - Arguments to update one Jobs.
     * @example
     * // Update one Jobs
     * const jobs = await prisma.jobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends jobsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, jobsUpdateArgs<ExtArgs>>
    ): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Jobs.
     * @param {jobsDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.jobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends jobsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, jobsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const jobs = await prisma.jobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends jobsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, jobsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jobs.
     * @param {jobsUpsertArgs} args - Arguments to update or create a Jobs.
     * @example
     * // Update or create a Jobs
     * const jobs = await prisma.jobs.upsert({
     *   create: {
     *     // ... data to create a Jobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jobs we want to update
     *   }
     * })
    **/
    upsert<T extends jobsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, jobsUpsertArgs<ExtArgs>>
    ): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.jobs.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends jobsCountArgs>(
      args?: Subset<T, jobsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobsAggregateArgs>(args: Subset<T, JobsAggregateArgs>): Prisma.PrismaPromise<GetJobsAggregateType<T>>

    /**
     * Group by Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsGroupByArgs} args - Group by arguments.
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
      T extends jobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jobsGroupByArgs['orderBy'] }
        : { orderBy?: jobsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, jobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jobs model
   */
  readonly fields: jobsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jobsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the jobs model
   */ 
  interface jobsFieldRefs {
    readonly id: FieldRef<"jobs", 'Int'>
    readonly description: FieldRef<"jobs", 'String'>
    readonly title: FieldRef<"jobs", 'String'>
    readonly location: FieldRef<"jobs", 'String'>
    readonly typesid: FieldRef<"jobs", 'Int'>
    readonly companiesid: FieldRef<"jobs", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * jobs findUnique
   */
  export type jobsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs findUniqueOrThrow
   */
  export type jobsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs findFirst
   */
  export type jobsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs findFirstOrThrow
   */
  export type jobsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs findMany
   */
  export type jobsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs create
   */
  export type jobsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * The data needed to create a jobs.
     */
    data?: XOR<jobsCreateInput, jobsUncheckedCreateInput>
  }

  /**
   * jobs createMany
   */
  export type jobsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jobs.
     */
    data: jobsCreateManyInput | jobsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jobs update
   */
  export type jobsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * The data needed to update a jobs.
     */
    data: XOR<jobsUpdateInput, jobsUncheckedUpdateInput>
    /**
     * Choose, which jobs to update.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs updateMany
   */
  export type jobsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jobs.
     */
    data: XOR<jobsUpdateManyMutationInput, jobsUncheckedUpdateManyInput>
    /**
     * Filter which jobs to update
     */
    where?: jobsWhereInput
  }

  /**
   * jobs upsert
   */
  export type jobsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * The filter to search for the jobs to update in case it exists.
     */
    where: jobsWhereUniqueInput
    /**
     * In case the jobs found by the `where` argument doesn't exist, create a new jobs with this data.
     */
    create: XOR<jobsCreateInput, jobsUncheckedCreateInput>
    /**
     * In case the jobs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jobsUpdateInput, jobsUncheckedUpdateInput>
  }

  /**
   * jobs delete
   */
  export type jobsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Filter which jobs to delete.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs deleteMany
   */
  export type jobsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to delete
     */
    where?: jobsWhereInput
  }

  /**
   * jobs without action
   */
  export type jobsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
  }


  /**
   * Model schools
   */

  export type AggregateSchools = {
    _count: SchoolsCountAggregateOutputType | null
    _avg: SchoolsAvgAggregateOutputType | null
    _sum: SchoolsSumAggregateOutputType | null
    _min: SchoolsMinAggregateOutputType | null
    _max: SchoolsMaxAggregateOutputType | null
  }

  export type SchoolsAvgAggregateOutputType = {
    id: number | null
  }

  export type SchoolsSumAggregateOutputType = {
    id: number | null
  }

  export type SchoolsMinAggregateOutputType = {
    id: number | null
    location: string | null
    name: string | null
  }

  export type SchoolsMaxAggregateOutputType = {
    id: number | null
    location: string | null
    name: string | null
  }

  export type SchoolsCountAggregateOutputType = {
    id: number
    location: number
    name: number
    _all: number
  }


  export type SchoolsAvgAggregateInputType = {
    id?: true
  }

  export type SchoolsSumAggregateInputType = {
    id?: true
  }

  export type SchoolsMinAggregateInputType = {
    id?: true
    location?: true
    name?: true
  }

  export type SchoolsMaxAggregateInputType = {
    id?: true
    location?: true
    name?: true
  }

  export type SchoolsCountAggregateInputType = {
    id?: true
    location?: true
    name?: true
    _all?: true
  }

  export type SchoolsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schools to aggregate.
     */
    where?: schoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolsOrderByWithRelationInput | schoolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: schoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned schools
    **/
    _count?: true | SchoolsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchoolsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchoolsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolsMaxAggregateInputType
  }

  export type GetSchoolsAggregateType<T extends SchoolsAggregateArgs> = {
        [P in keyof T & keyof AggregateSchools]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchools[P]>
      : GetScalarType<T[P], AggregateSchools[P]>
  }




  export type schoolsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: schoolsWhereInput
    orderBy?: schoolsOrderByWithAggregationInput | schoolsOrderByWithAggregationInput[]
    by: SchoolsScalarFieldEnum[] | SchoolsScalarFieldEnum
    having?: schoolsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolsCountAggregateInputType | true
    _avg?: SchoolsAvgAggregateInputType
    _sum?: SchoolsSumAggregateInputType
    _min?: SchoolsMinAggregateInputType
    _max?: SchoolsMaxAggregateInputType
  }

  export type SchoolsGroupByOutputType = {
    id: number
    location: string | null
    name: string | null
    _count: SchoolsCountAggregateOutputType | null
    _avg: SchoolsAvgAggregateOutputType | null
    _sum: SchoolsSumAggregateOutputType | null
    _min: SchoolsMinAggregateOutputType | null
    _max: SchoolsMaxAggregateOutputType | null
  }

  type GetSchoolsGroupByPayload<T extends schoolsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolsGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolsGroupByOutputType[P]>
        }
      >
    >


  export type schoolsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    name?: boolean
  }, ExtArgs["result"]["schools"]>

  export type schoolsSelectScalar = {
    id?: boolean
    location?: boolean
    name?: boolean
  }



  export type $schoolsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "schools"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      location: string | null
      name: string | null
    }, ExtArgs["result"]["schools"]>
    composites: {}
  }


  type schoolsGetPayload<S extends boolean | null | undefined | schoolsDefaultArgs> = $Result.GetResult<Prisma.$schoolsPayload, S>

  type schoolsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<schoolsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SchoolsCountAggregateInputType | true
    }

  export interface schoolsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['schools'], meta: { name: 'schools' } }
    /**
     * Find zero or one Schools that matches the filter.
     * @param {schoolsFindUniqueArgs} args - Arguments to find a Schools
     * @example
     * // Get one Schools
     * const schools = await prisma.schools.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends schoolsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, schoolsFindUniqueArgs<ExtArgs>>
    ): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Schools that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {schoolsFindUniqueOrThrowArgs} args - Arguments to find a Schools
     * @example
     * // Get one Schools
     * const schools = await prisma.schools.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends schoolsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolsFindFirstArgs} args - Arguments to find a Schools
     * @example
     * // Get one Schools
     * const schools = await prisma.schools.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends schoolsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolsFindFirstArgs<ExtArgs>>
    ): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Schools that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolsFindFirstOrThrowArgs} args - Arguments to find a Schools
     * @example
     * // Get one Schools
     * const schools = await prisma.schools.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends schoolsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.schools.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.schools.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolsWithIdOnly = await prisma.schools.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends schoolsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Schools.
     * @param {schoolsCreateArgs} args - Arguments to create a Schools.
     * @example
     * // Create one Schools
     * const Schools = await prisma.schools.create({
     *   data: {
     *     // ... data to create a Schools
     *   }
     * })
     * 
    **/
    create<T extends schoolsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, schoolsCreateArgs<ExtArgs>>
    ): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Schools.
     *     @param {schoolsCreateManyArgs} args - Arguments to create many Schools.
     *     @example
     *     // Create many Schools
     *     const schools = await prisma.schools.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends schoolsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Schools.
     * @param {schoolsDeleteArgs} args - Arguments to delete one Schools.
     * @example
     * // Delete one Schools
     * const Schools = await prisma.schools.delete({
     *   where: {
     *     // ... filter to delete one Schools
     *   }
     * })
     * 
    **/
    delete<T extends schoolsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, schoolsDeleteArgs<ExtArgs>>
    ): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Schools.
     * @param {schoolsUpdateArgs} args - Arguments to update one Schools.
     * @example
     * // Update one Schools
     * const schools = await prisma.schools.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends schoolsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, schoolsUpdateArgs<ExtArgs>>
    ): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Schools.
     * @param {schoolsDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.schools.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends schoolsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const schools = await prisma.schools.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends schoolsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, schoolsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Schools.
     * @param {schoolsUpsertArgs} args - Arguments to update or create a Schools.
     * @example
     * // Update or create a Schools
     * const schools = await prisma.schools.upsert({
     *   create: {
     *     // ... data to create a Schools
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schools we want to update
     *   }
     * })
    **/
    upsert<T extends schoolsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, schoolsUpsertArgs<ExtArgs>>
    ): Prisma__schoolsClient<$Result.GetResult<Prisma.$schoolsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolsCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.schools.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends schoolsCountArgs>(
      args?: Subset<T, schoolsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolsAggregateArgs>(args: Subset<T, SchoolsAggregateArgs>): Prisma.PrismaPromise<GetSchoolsAggregateType<T>>

    /**
     * Group by Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolsGroupByArgs} args - Group by arguments.
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
      T extends schoolsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: schoolsGroupByArgs['orderBy'] }
        : { orderBy?: schoolsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, schoolsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the schools model
   */
  readonly fields: schoolsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for schools.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__schoolsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the schools model
   */ 
  interface schoolsFieldRefs {
    readonly id: FieldRef<"schools", 'Int'>
    readonly location: FieldRef<"schools", 'String'>
    readonly name: FieldRef<"schools", 'String'>
  }
    

  // Custom InputTypes
  /**
   * schools findUnique
   */
  export type schoolsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Filter, which schools to fetch.
     */
    where: schoolsWhereUniqueInput
  }

  /**
   * schools findUniqueOrThrow
   */
  export type schoolsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Filter, which schools to fetch.
     */
    where: schoolsWhereUniqueInput
  }

  /**
   * schools findFirst
   */
  export type schoolsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Filter, which schools to fetch.
     */
    where?: schoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolsOrderByWithRelationInput | schoolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schools.
     */
    cursor?: schoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schools.
     */
    distinct?: SchoolsScalarFieldEnum | SchoolsScalarFieldEnum[]
  }

  /**
   * schools findFirstOrThrow
   */
  export type schoolsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Filter, which schools to fetch.
     */
    where?: schoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolsOrderByWithRelationInput | schoolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for schools.
     */
    cursor?: schoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of schools.
     */
    distinct?: SchoolsScalarFieldEnum | SchoolsScalarFieldEnum[]
  }

  /**
   * schools findMany
   */
  export type schoolsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Filter, which schools to fetch.
     */
    where?: schoolsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolsOrderByWithRelationInput | schoolsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing schools.
     */
    cursor?: schoolsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` schools.
     */
    skip?: number
    distinct?: SchoolsScalarFieldEnum | SchoolsScalarFieldEnum[]
  }

  /**
   * schools create
   */
  export type schoolsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * The data needed to create a schools.
     */
    data?: XOR<schoolsCreateInput, schoolsUncheckedCreateInput>
  }

  /**
   * schools createMany
   */
  export type schoolsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many schools.
     */
    data: schoolsCreateManyInput | schoolsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * schools update
   */
  export type schoolsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * The data needed to update a schools.
     */
    data: XOR<schoolsUpdateInput, schoolsUncheckedUpdateInput>
    /**
     * Choose, which schools to update.
     */
    where: schoolsWhereUniqueInput
  }

  /**
   * schools updateMany
   */
  export type schoolsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update schools.
     */
    data: XOR<schoolsUpdateManyMutationInput, schoolsUncheckedUpdateManyInput>
    /**
     * Filter which schools to update
     */
    where?: schoolsWhereInput
  }

  /**
   * schools upsert
   */
  export type schoolsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * The filter to search for the schools to update in case it exists.
     */
    where: schoolsWhereUniqueInput
    /**
     * In case the schools found by the `where` argument doesn't exist, create a new schools with this data.
     */
    create: XOR<schoolsCreateInput, schoolsUncheckedCreateInput>
    /**
     * In case the schools was found with the provided `where` argument, update it with this data.
     */
    update: XOR<schoolsUpdateInput, schoolsUncheckedUpdateInput>
  }

  /**
   * schools delete
   */
  export type schoolsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
    /**
     * Filter which schools to delete.
     */
    where: schoolsWhereUniqueInput
  }

  /**
   * schools deleteMany
   */
  export type schoolsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schools to delete
     */
    where?: schoolsWhereInput
  }

  /**
   * schools without action
   */
  export type schoolsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schools
     */
    select?: schoolsSelect<ExtArgs> | null
  }


  /**
   * Model skills
   */

  export type AggregateSkills = {
    _count: SkillsCountAggregateOutputType | null
    _avg: SkillsAvgAggregateOutputType | null
    _sum: SkillsSumAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  export type SkillsAvgAggregateOutputType = {
    id: number | null
    skillsid: number | null
  }

  export type SkillsSumAggregateOutputType = {
    id: number | null
    skillsid: number | null
  }

  export type SkillsMinAggregateOutputType = {
    id: number | null
    skillsid: number | null
    skill: string | null
  }

  export type SkillsMaxAggregateOutputType = {
    id: number | null
    skillsid: number | null
    skill: string | null
  }

  export type SkillsCountAggregateOutputType = {
    id: number
    skillsid: number
    skill: number
    _all: number
  }


  export type SkillsAvgAggregateInputType = {
    id?: true
    skillsid?: true
  }

  export type SkillsSumAggregateInputType = {
    id?: true
    skillsid?: true
  }

  export type SkillsMinAggregateInputType = {
    id?: true
    skillsid?: true
    skill?: true
  }

  export type SkillsMaxAggregateInputType = {
    id?: true
    skillsid?: true
    skill?: true
  }

  export type SkillsCountAggregateInputType = {
    id?: true
    skillsid?: true
    skill?: true
    _all?: true
  }

  export type SkillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skills to aggregate.
     */
    where?: skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skills
    **/
    _count?: true | SkillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillsMaxAggregateInputType
  }

  export type GetSkillsAggregateType<T extends SkillsAggregateArgs> = {
        [P in keyof T & keyof AggregateSkills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkills[P]>
      : GetScalarType<T[P], AggregateSkills[P]>
  }




  export type skillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skillsWhereInput
    orderBy?: skillsOrderByWithAggregationInput | skillsOrderByWithAggregationInput[]
    by: SkillsScalarFieldEnum[] | SkillsScalarFieldEnum
    having?: skillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillsCountAggregateInputType | true
    _avg?: SkillsAvgAggregateInputType
    _sum?: SkillsSumAggregateInputType
    _min?: SkillsMinAggregateInputType
    _max?: SkillsMaxAggregateInputType
  }

  export type SkillsGroupByOutputType = {
    id: number
    skillsid: number | null
    skill: string | null
    _count: SkillsCountAggregateOutputType | null
    _avg: SkillsAvgAggregateOutputType | null
    _sum: SkillsSumAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  type GetSkillsGroupByPayload<T extends skillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillsGroupByOutputType[P]>
            : GetScalarType<T[P], SkillsGroupByOutputType[P]>
        }
      >
    >


  export type skillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillsid?: boolean
    skill?: boolean
  }, ExtArgs["result"]["skills"]>

  export type skillsSelectScalar = {
    id?: boolean
    skillsid?: boolean
    skill?: boolean
  }



  export type $skillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skills"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      skillsid: number | null
      skill: string | null
    }, ExtArgs["result"]["skills"]>
    composites: {}
  }


  type skillsGetPayload<S extends boolean | null | undefined | skillsDefaultArgs> = $Result.GetResult<Prisma.$skillsPayload, S>

  type skillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<skillsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SkillsCountAggregateInputType | true
    }

  export interface skillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skills'], meta: { name: 'skills' } }
    /**
     * Find zero or one Skills that matches the filter.
     * @param {skillsFindUniqueArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends skillsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, skillsFindUniqueArgs<ExtArgs>>
    ): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Skills that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {skillsFindUniqueOrThrowArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends skillsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, skillsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsFindFirstArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends skillsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, skillsFindFirstArgs<ExtArgs>>
    ): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Skills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsFindFirstOrThrowArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends skillsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, skillsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skills.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillsWithIdOnly = await prisma.skills.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends skillsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, skillsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Skills.
     * @param {skillsCreateArgs} args - Arguments to create a Skills.
     * @example
     * // Create one Skills
     * const Skills = await prisma.skills.create({
     *   data: {
     *     // ... data to create a Skills
     *   }
     * })
     * 
    **/
    create<T extends skillsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, skillsCreateArgs<ExtArgs>>
    ): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Skills.
     *     @param {skillsCreateManyArgs} args - Arguments to create many Skills.
     *     @example
     *     // Create many Skills
     *     const skills = await prisma.skills.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends skillsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, skillsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Skills.
     * @param {skillsDeleteArgs} args - Arguments to delete one Skills.
     * @example
     * // Delete one Skills
     * const Skills = await prisma.skills.delete({
     *   where: {
     *     // ... filter to delete one Skills
     *   }
     * })
     * 
    **/
    delete<T extends skillsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, skillsDeleteArgs<ExtArgs>>
    ): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Skills.
     * @param {skillsUpdateArgs} args - Arguments to update one Skills.
     * @example
     * // Update one Skills
     * const skills = await prisma.skills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends skillsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, skillsUpdateArgs<ExtArgs>>
    ): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Skills.
     * @param {skillsDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends skillsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, skillsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skills = await prisma.skills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends skillsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, skillsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skills.
     * @param {skillsUpsertArgs} args - Arguments to update or create a Skills.
     * @example
     * // Update or create a Skills
     * const skills = await prisma.skills.upsert({
     *   create: {
     *     // ... data to create a Skills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skills we want to update
     *   }
     * })
    **/
    upsert<T extends skillsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, skillsUpsertArgs<ExtArgs>>
    ): Prisma__skillsClient<$Result.GetResult<Prisma.$skillsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skills.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends skillsCountArgs>(
      args?: Subset<T, skillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillsAggregateArgs>(args: Subset<T, SkillsAggregateArgs>): Prisma.PrismaPromise<GetSkillsAggregateType<T>>

    /**
     * Group by Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillsGroupByArgs} args - Group by arguments.
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
      T extends skillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skillsGroupByArgs['orderBy'] }
        : { orderBy?: skillsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, skillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the skills model
   */
  readonly fields: skillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the skills model
   */ 
  interface skillsFieldRefs {
    readonly id: FieldRef<"skills", 'Int'>
    readonly skillsid: FieldRef<"skills", 'Int'>
    readonly skill: FieldRef<"skills", 'String'>
  }
    

  // Custom InputTypes
  /**
   * skills findUnique
   */
  export type skillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where: skillsWhereUniqueInput
  }

  /**
   * skills findUniqueOrThrow
   */
  export type skillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where: skillsWhereUniqueInput
  }

  /**
   * skills findFirst
   */
  export type skillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where?: skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * skills findFirstOrThrow
   */
  export type skillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where?: skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * skills findMany
   */
  export type skillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where?: skillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillsOrderByWithRelationInput | skillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skills.
     */
    cursor?: skillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }

  /**
   * skills create
   */
  export type skillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * The data needed to create a skills.
     */
    data?: XOR<skillsCreateInput, skillsUncheckedCreateInput>
  }

  /**
   * skills createMany
   */
  export type skillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skills.
     */
    data: skillsCreateManyInput | skillsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skills update
   */
  export type skillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * The data needed to update a skills.
     */
    data: XOR<skillsUpdateInput, skillsUncheckedUpdateInput>
    /**
     * Choose, which skills to update.
     */
    where: skillsWhereUniqueInput
  }

  /**
   * skills updateMany
   */
  export type skillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skills.
     */
    data: XOR<skillsUpdateManyMutationInput, skillsUncheckedUpdateManyInput>
    /**
     * Filter which skills to update
     */
    where?: skillsWhereInput
  }

  /**
   * skills upsert
   */
  export type skillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * The filter to search for the skills to update in case it exists.
     */
    where: skillsWhereUniqueInput
    /**
     * In case the skills found by the `where` argument doesn't exist, create a new skills with this data.
     */
    create: XOR<skillsCreateInput, skillsUncheckedCreateInput>
    /**
     * In case the skills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skillsUpdateInput, skillsUncheckedUpdateInput>
  }

  /**
   * skills delete
   */
  export type skillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
    /**
     * Filter which skills to delete.
     */
    where: skillsWhereUniqueInput
  }

  /**
   * skills deleteMany
   */
  export type skillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skills to delete
     */
    where?: skillsWhereInput
  }

  /**
   * skills without action
   */
  export type skillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skills
     */
    select?: skillsSelect<ExtArgs> | null
  }


  /**
   * Model types
   */

  export type AggregateTypes = {
    _count: TypesCountAggregateOutputType | null
    _avg: TypesAvgAggregateOutputType | null
    _sum: TypesSumAggregateOutputType | null
    _min: TypesMinAggregateOutputType | null
    _max: TypesMaxAggregateOutputType | null
  }

  export type TypesAvgAggregateOutputType = {
    id: number | null
    typeid: number | null
  }

  export type TypesSumAggregateOutputType = {
    id: number | null
    typeid: number | null
  }

  export type TypesMinAggregateOutputType = {
    id: number | null
    typeid: number | null
    type: string | null
  }

  export type TypesMaxAggregateOutputType = {
    id: number | null
    typeid: number | null
    type: string | null
  }

  export type TypesCountAggregateOutputType = {
    id: number
    typeid: number
    type: number
    _all: number
  }


  export type TypesAvgAggregateInputType = {
    id?: true
    typeid?: true
  }

  export type TypesSumAggregateInputType = {
    id?: true
    typeid?: true
  }

  export type TypesMinAggregateInputType = {
    id?: true
    typeid?: true
    type?: true
  }

  export type TypesMaxAggregateInputType = {
    id?: true
    typeid?: true
    type?: true
  }

  export type TypesCountAggregateInputType = {
    id?: true
    typeid?: true
    type?: true
    _all?: true
  }

  export type TypesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which types to aggregate.
     */
    where?: typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of types to fetch.
     */
    orderBy?: typesOrderByWithRelationInput | typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned types
    **/
    _count?: true | TypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TypesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TypesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypesMaxAggregateInputType
  }

  export type GetTypesAggregateType<T extends TypesAggregateArgs> = {
        [P in keyof T & keyof AggregateTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTypes[P]>
      : GetScalarType<T[P], AggregateTypes[P]>
  }




  export type typesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: typesWhereInput
    orderBy?: typesOrderByWithAggregationInput | typesOrderByWithAggregationInput[]
    by: TypesScalarFieldEnum[] | TypesScalarFieldEnum
    having?: typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypesCountAggregateInputType | true
    _avg?: TypesAvgAggregateInputType
    _sum?: TypesSumAggregateInputType
    _min?: TypesMinAggregateInputType
    _max?: TypesMaxAggregateInputType
  }

  export type TypesGroupByOutputType = {
    id: number
    typeid: number | null
    type: string | null
    _count: TypesCountAggregateOutputType | null
    _avg: TypesAvgAggregateOutputType | null
    _sum: TypesSumAggregateOutputType | null
    _min: TypesMinAggregateOutputType | null
    _max: TypesMaxAggregateOutputType | null
  }

  type GetTypesGroupByPayload<T extends typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypesGroupByOutputType[P]>
            : GetScalarType<T[P], TypesGroupByOutputType[P]>
        }
      >
    >


  export type typesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    typeid?: boolean
    type?: boolean
  }, ExtArgs["result"]["types"]>

  export type typesSelectScalar = {
    id?: boolean
    typeid?: boolean
    type?: boolean
  }



  export type $typesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "types"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      typeid: number | null
      type: string | null
    }, ExtArgs["result"]["types"]>
    composites: {}
  }


  type typesGetPayload<S extends boolean | null | undefined | typesDefaultArgs> = $Result.GetResult<Prisma.$typesPayload, S>

  type typesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<typesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TypesCountAggregateInputType | true
    }

  export interface typesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['types'], meta: { name: 'types' } }
    /**
     * Find zero or one Types that matches the filter.
     * @param {typesFindUniqueArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends typesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, typesFindUniqueArgs<ExtArgs>>
    ): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Types that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {typesFindUniqueOrThrowArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends typesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, typesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typesFindFirstArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends typesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, typesFindFirstArgs<ExtArgs>>
    ): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typesFindFirstOrThrowArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends typesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, typesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Types
     * const types = await prisma.types.findMany()
     * 
     * // Get first 10 Types
     * const types = await prisma.types.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typesWithIdOnly = await prisma.types.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends typesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, typesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Types.
     * @param {typesCreateArgs} args - Arguments to create a Types.
     * @example
     * // Create one Types
     * const Types = await prisma.types.create({
     *   data: {
     *     // ... data to create a Types
     *   }
     * })
     * 
    **/
    create<T extends typesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, typesCreateArgs<ExtArgs>>
    ): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Types.
     *     @param {typesCreateManyArgs} args - Arguments to create many Types.
     *     @example
     *     // Create many Types
     *     const types = await prisma.types.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends typesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, typesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Types.
     * @param {typesDeleteArgs} args - Arguments to delete one Types.
     * @example
     * // Delete one Types
     * const Types = await prisma.types.delete({
     *   where: {
     *     // ... filter to delete one Types
     *   }
     * })
     * 
    **/
    delete<T extends typesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, typesDeleteArgs<ExtArgs>>
    ): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Types.
     * @param {typesUpdateArgs} args - Arguments to update one Types.
     * @example
     * // Update one Types
     * const types = await prisma.types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends typesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, typesUpdateArgs<ExtArgs>>
    ): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Types.
     * @param {typesDeleteManyArgs} args - Arguments to filter Types to delete.
     * @example
     * // Delete a few Types
     * const { count } = await prisma.types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends typesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, typesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Types
     * const types = await prisma.types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends typesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, typesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Types.
     * @param {typesUpsertArgs} args - Arguments to update or create a Types.
     * @example
     * // Update or create a Types
     * const types = await prisma.types.upsert({
     *   create: {
     *     // ... data to create a Types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Types we want to update
     *   }
     * })
    **/
    upsert<T extends typesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, typesUpsertArgs<ExtArgs>>
    ): Prisma__typesClient<$Result.GetResult<Prisma.$typesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typesCountArgs} args - Arguments to filter Types to count.
     * @example
     * // Count the number of Types
     * const count = await prisma.types.count({
     *   where: {
     *     // ... the filter for the Types we want to count
     *   }
     * })
    **/
    count<T extends typesCountArgs>(
      args?: Subset<T, typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TypesAggregateArgs>(args: Subset<T, TypesAggregateArgs>): Prisma.PrismaPromise<GetTypesAggregateType<T>>

    /**
     * Group by Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typesGroupByArgs} args - Group by arguments.
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
      T extends typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: typesGroupByArgs['orderBy'] }
        : { orderBy?: typesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the types model
   */
  readonly fields: typesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__typesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the types model
   */ 
  interface typesFieldRefs {
    readonly id: FieldRef<"types", 'Int'>
    readonly typeid: FieldRef<"types", 'Int'>
    readonly type: FieldRef<"types", 'String'>
  }
    

  // Custom InputTypes
  /**
   * types findUnique
   */
  export type typesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Filter, which types to fetch.
     */
    where: typesWhereUniqueInput
  }

  /**
   * types findUniqueOrThrow
   */
  export type typesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Filter, which types to fetch.
     */
    where: typesWhereUniqueInput
  }

  /**
   * types findFirst
   */
  export type typesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Filter, which types to fetch.
     */
    where?: typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of types to fetch.
     */
    orderBy?: typesOrderByWithRelationInput | typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for types.
     */
    cursor?: typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of types.
     */
    distinct?: TypesScalarFieldEnum | TypesScalarFieldEnum[]
  }

  /**
   * types findFirstOrThrow
   */
  export type typesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Filter, which types to fetch.
     */
    where?: typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of types to fetch.
     */
    orderBy?: typesOrderByWithRelationInput | typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for types.
     */
    cursor?: typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of types.
     */
    distinct?: TypesScalarFieldEnum | TypesScalarFieldEnum[]
  }

  /**
   * types findMany
   */
  export type typesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Filter, which types to fetch.
     */
    where?: typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of types to fetch.
     */
    orderBy?: typesOrderByWithRelationInput | typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing types.
     */
    cursor?: typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` types.
     */
    skip?: number
    distinct?: TypesScalarFieldEnum | TypesScalarFieldEnum[]
  }

  /**
   * types create
   */
  export type typesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * The data needed to create a types.
     */
    data?: XOR<typesCreateInput, typesUncheckedCreateInput>
  }

  /**
   * types createMany
   */
  export type typesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many types.
     */
    data: typesCreateManyInput | typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * types update
   */
  export type typesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * The data needed to update a types.
     */
    data: XOR<typesUpdateInput, typesUncheckedUpdateInput>
    /**
     * Choose, which types to update.
     */
    where: typesWhereUniqueInput
  }

  /**
   * types updateMany
   */
  export type typesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update types.
     */
    data: XOR<typesUpdateManyMutationInput, typesUncheckedUpdateManyInput>
    /**
     * Filter which types to update
     */
    where?: typesWhereInput
  }

  /**
   * types upsert
   */
  export type typesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * The filter to search for the types to update in case it exists.
     */
    where: typesWhereUniqueInput
    /**
     * In case the types found by the `where` argument doesn't exist, create a new types with this data.
     */
    create: XOR<typesCreateInput, typesUncheckedCreateInput>
    /**
     * In case the types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<typesUpdateInput, typesUncheckedUpdateInput>
  }

  /**
   * types delete
   */
  export type typesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
    /**
     * Filter which types to delete.
     */
    where: typesWhereUniqueInput
  }

  /**
   * types deleteMany
   */
  export type typesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which types to delete
     */
    where?: typesWhereInput
  }

  /**
   * types without action
   */
  export type typesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the types
     */
    select?: typesSelect<ExtArgs> | null
  }


  /**
   * Model userjobs
   */

  export type AggregateUserjobs = {
    _count: UserjobsCountAggregateOutputType | null
    _avg: UserjobsAvgAggregateOutputType | null
    _sum: UserjobsSumAggregateOutputType | null
    _min: UserjobsMinAggregateOutputType | null
    _max: UserjobsMaxAggregateOutputType | null
  }

  export type UserjobsAvgAggregateOutputType = {
    id: number | null
    jobsid: number | null
  }

  export type UserjobsSumAggregateOutputType = {
    id: number | null
    jobsid: number | null
  }

  export type UserjobsMinAggregateOutputType = {
    id: number | null
    startdate: Date | null
    enddate: Date | null
    jobsid: number | null
  }

  export type UserjobsMaxAggregateOutputType = {
    id: number | null
    startdate: Date | null
    enddate: Date | null
    jobsid: number | null
  }

  export type UserjobsCountAggregateOutputType = {
    id: number
    startdate: number
    enddate: number
    jobsid: number
    _all: number
  }


  export type UserjobsAvgAggregateInputType = {
    id?: true
    jobsid?: true
  }

  export type UserjobsSumAggregateInputType = {
    id?: true
    jobsid?: true
  }

  export type UserjobsMinAggregateInputType = {
    id?: true
    startdate?: true
    enddate?: true
    jobsid?: true
  }

  export type UserjobsMaxAggregateInputType = {
    id?: true
    startdate?: true
    enddate?: true
    jobsid?: true
  }

  export type UserjobsCountAggregateInputType = {
    id?: true
    startdate?: true
    enddate?: true
    jobsid?: true
    _all?: true
  }

  export type UserjobsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userjobs to aggregate.
     */
    where?: userjobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userjobs to fetch.
     */
    orderBy?: userjobsOrderByWithRelationInput | userjobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userjobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userjobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userjobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userjobs
    **/
    _count?: true | UserjobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserjobsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserjobsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserjobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserjobsMaxAggregateInputType
  }

  export type GetUserjobsAggregateType<T extends UserjobsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserjobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserjobs[P]>
      : GetScalarType<T[P], AggregateUserjobs[P]>
  }




  export type userjobsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userjobsWhereInput
    orderBy?: userjobsOrderByWithAggregationInput | userjobsOrderByWithAggregationInput[]
    by: UserjobsScalarFieldEnum[] | UserjobsScalarFieldEnum
    having?: userjobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserjobsCountAggregateInputType | true
    _avg?: UserjobsAvgAggregateInputType
    _sum?: UserjobsSumAggregateInputType
    _min?: UserjobsMinAggregateInputType
    _max?: UserjobsMaxAggregateInputType
  }

  export type UserjobsGroupByOutputType = {
    id: number
    startdate: Date | null
    enddate: Date | null
    jobsid: number | null
    _count: UserjobsCountAggregateOutputType | null
    _avg: UserjobsAvgAggregateOutputType | null
    _sum: UserjobsSumAggregateOutputType | null
    _min: UserjobsMinAggregateOutputType | null
    _max: UserjobsMaxAggregateOutputType | null
  }

  type GetUserjobsGroupByPayload<T extends userjobsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserjobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserjobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserjobsGroupByOutputType[P]>
            : GetScalarType<T[P], UserjobsGroupByOutputType[P]>
        }
      >
    >


  export type userjobsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startdate?: boolean
    enddate?: boolean
    jobsid?: boolean
  }, ExtArgs["result"]["userjobs"]>

  export type userjobsSelectScalar = {
    id?: boolean
    startdate?: boolean
    enddate?: boolean
    jobsid?: boolean
  }



  export type $userjobsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userjobs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      startdate: Date | null
      enddate: Date | null
      jobsid: number | null
    }, ExtArgs["result"]["userjobs"]>
    composites: {}
  }


  type userjobsGetPayload<S extends boolean | null | undefined | userjobsDefaultArgs> = $Result.GetResult<Prisma.$userjobsPayload, S>

  type userjobsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userjobsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserjobsCountAggregateInputType | true
    }

  export interface userjobsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userjobs'], meta: { name: 'userjobs' } }
    /**
     * Find zero or one Userjobs that matches the filter.
     * @param {userjobsFindUniqueArgs} args - Arguments to find a Userjobs
     * @example
     * // Get one Userjobs
     * const userjobs = await prisma.userjobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userjobsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userjobsFindUniqueArgs<ExtArgs>>
    ): Prisma__userjobsClient<$Result.GetResult<Prisma.$userjobsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Userjobs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userjobsFindUniqueOrThrowArgs} args - Arguments to find a Userjobs
     * @example
     * // Get one Userjobs
     * const userjobs = await prisma.userjobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userjobsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userjobsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__userjobsClient<$Result.GetResult<Prisma.$userjobsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Userjobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userjobsFindFirstArgs} args - Arguments to find a Userjobs
     * @example
     * // Get one Userjobs
     * const userjobs = await prisma.userjobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userjobsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userjobsFindFirstArgs<ExtArgs>>
    ): Prisma__userjobsClient<$Result.GetResult<Prisma.$userjobsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Userjobs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userjobsFindFirstOrThrowArgs} args - Arguments to find a Userjobs
     * @example
     * // Get one Userjobs
     * const userjobs = await prisma.userjobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userjobsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userjobsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__userjobsClient<$Result.GetResult<Prisma.$userjobsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Userjobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userjobsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Userjobs
     * const userjobs = await prisma.userjobs.findMany()
     * 
     * // Get first 10 Userjobs
     * const userjobs = await prisma.userjobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userjobsWithIdOnly = await prisma.userjobs.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends userjobsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userjobsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userjobsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Userjobs.
     * @param {userjobsCreateArgs} args - Arguments to create a Userjobs.
     * @example
     * // Create one Userjobs
     * const Userjobs = await prisma.userjobs.create({
     *   data: {
     *     // ... data to create a Userjobs
     *   }
     * })
     * 
    **/
    create<T extends userjobsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userjobsCreateArgs<ExtArgs>>
    ): Prisma__userjobsClient<$Result.GetResult<Prisma.$userjobsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Userjobs.
     *     @param {userjobsCreateManyArgs} args - Arguments to create many Userjobs.
     *     @example
     *     // Create many Userjobs
     *     const userjobs = await prisma.userjobs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userjobsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userjobsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Userjobs.
     * @param {userjobsDeleteArgs} args - Arguments to delete one Userjobs.
     * @example
     * // Delete one Userjobs
     * const Userjobs = await prisma.userjobs.delete({
     *   where: {
     *     // ... filter to delete one Userjobs
     *   }
     * })
     * 
    **/
    delete<T extends userjobsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userjobsDeleteArgs<ExtArgs>>
    ): Prisma__userjobsClient<$Result.GetResult<Prisma.$userjobsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Userjobs.
     * @param {userjobsUpdateArgs} args - Arguments to update one Userjobs.
     * @example
     * // Update one Userjobs
     * const userjobs = await prisma.userjobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userjobsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userjobsUpdateArgs<ExtArgs>>
    ): Prisma__userjobsClient<$Result.GetResult<Prisma.$userjobsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Userjobs.
     * @param {userjobsDeleteManyArgs} args - Arguments to filter Userjobs to delete.
     * @example
     * // Delete a few Userjobs
     * const { count } = await prisma.userjobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userjobsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userjobsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Userjobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userjobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Userjobs
     * const userjobs = await prisma.userjobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userjobsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userjobsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Userjobs.
     * @param {userjobsUpsertArgs} args - Arguments to update or create a Userjobs.
     * @example
     * // Update or create a Userjobs
     * const userjobs = await prisma.userjobs.upsert({
     *   create: {
     *     // ... data to create a Userjobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Userjobs we want to update
     *   }
     * })
    **/
    upsert<T extends userjobsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userjobsUpsertArgs<ExtArgs>>
    ): Prisma__userjobsClient<$Result.GetResult<Prisma.$userjobsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Userjobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userjobsCountArgs} args - Arguments to filter Userjobs to count.
     * @example
     * // Count the number of Userjobs
     * const count = await prisma.userjobs.count({
     *   where: {
     *     // ... the filter for the Userjobs we want to count
     *   }
     * })
    **/
    count<T extends userjobsCountArgs>(
      args?: Subset<T, userjobsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserjobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Userjobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserjobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserjobsAggregateArgs>(args: Subset<T, UserjobsAggregateArgs>): Prisma.PrismaPromise<GetUserjobsAggregateType<T>>

    /**
     * Group by Userjobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userjobsGroupByArgs} args - Group by arguments.
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
      T extends userjobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userjobsGroupByArgs['orderBy'] }
        : { orderBy?: userjobsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userjobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserjobsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userjobs model
   */
  readonly fields: userjobsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userjobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userjobsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the userjobs model
   */ 
  interface userjobsFieldRefs {
    readonly id: FieldRef<"userjobs", 'Int'>
    readonly startdate: FieldRef<"userjobs", 'DateTime'>
    readonly enddate: FieldRef<"userjobs", 'DateTime'>
    readonly jobsid: FieldRef<"userjobs", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * userjobs findUnique
   */
  export type userjobsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userjobs
     */
    select?: userjobsSelect<ExtArgs> | null
    /**
     * Filter, which userjobs to fetch.
     */
    where: userjobsWhereUniqueInput
  }

  /**
   * userjobs findUniqueOrThrow
   */
  export type userjobsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userjobs
     */
    select?: userjobsSelect<ExtArgs> | null
    /**
     * Filter, which userjobs to fetch.
     */
    where: userjobsWhereUniqueInput
  }

  /**
   * userjobs findFirst
   */
  export type userjobsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userjobs
     */
    select?: userjobsSelect<ExtArgs> | null
    /**
     * Filter, which userjobs to fetch.
     */
    where?: userjobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userjobs to fetch.
     */
    orderBy?: userjobsOrderByWithRelationInput | userjobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userjobs.
     */
    cursor?: userjobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userjobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userjobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userjobs.
     */
    distinct?: UserjobsScalarFieldEnum | UserjobsScalarFieldEnum[]
  }

  /**
   * userjobs findFirstOrThrow
   */
  export type userjobsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userjobs
     */
    select?: userjobsSelect<ExtArgs> | null
    /**
     * Filter, which userjobs to fetch.
     */
    where?: userjobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userjobs to fetch.
     */
    orderBy?: userjobsOrderByWithRelationInput | userjobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userjobs.
     */
    cursor?: userjobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userjobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userjobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userjobs.
     */
    distinct?: UserjobsScalarFieldEnum | UserjobsScalarFieldEnum[]
  }

  /**
   * userjobs findMany
   */
  export type userjobsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userjobs
     */
    select?: userjobsSelect<ExtArgs> | null
    /**
     * Filter, which userjobs to fetch.
     */
    where?: userjobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userjobs to fetch.
     */
    orderBy?: userjobsOrderByWithRelationInput | userjobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userjobs.
     */
    cursor?: userjobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userjobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userjobs.
     */
    skip?: number
    distinct?: UserjobsScalarFieldEnum | UserjobsScalarFieldEnum[]
  }

  /**
   * userjobs create
   */
  export type userjobsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userjobs
     */
    select?: userjobsSelect<ExtArgs> | null
    /**
     * The data needed to create a userjobs.
     */
    data?: XOR<userjobsCreateInput, userjobsUncheckedCreateInput>
  }

  /**
   * userjobs createMany
   */
  export type userjobsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userjobs.
     */
    data: userjobsCreateManyInput | userjobsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userjobs update
   */
  export type userjobsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userjobs
     */
    select?: userjobsSelect<ExtArgs> | null
    /**
     * The data needed to update a userjobs.
     */
    data: XOR<userjobsUpdateInput, userjobsUncheckedUpdateInput>
    /**
     * Choose, which userjobs to update.
     */
    where: userjobsWhereUniqueInput
  }

  /**
   * userjobs updateMany
   */
  export type userjobsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userjobs.
     */
    data: XOR<userjobsUpdateManyMutationInput, userjobsUncheckedUpdateManyInput>
    /**
     * Filter which userjobs to update
     */
    where?: userjobsWhereInput
  }

  /**
   * userjobs upsert
   */
  export type userjobsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userjobs
     */
    select?: userjobsSelect<ExtArgs> | null
    /**
     * The filter to search for the userjobs to update in case it exists.
     */
    where: userjobsWhereUniqueInput
    /**
     * In case the userjobs found by the `where` argument doesn't exist, create a new userjobs with this data.
     */
    create: XOR<userjobsCreateInput, userjobsUncheckedCreateInput>
    /**
     * In case the userjobs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userjobsUpdateInput, userjobsUncheckedUpdateInput>
  }

  /**
   * userjobs delete
   */
  export type userjobsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userjobs
     */
    select?: userjobsSelect<ExtArgs> | null
    /**
     * Filter which userjobs to delete.
     */
    where: userjobsWhereUniqueInput
  }

  /**
   * userjobs deleteMany
   */
  export type userjobsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userjobs to delete
     */
    where?: userjobsWhereInput
  }

  /**
   * userjobs without action
   */
  export type userjobsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userjobs
     */
    select?: userjobsSelect<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    skillsid: number | null
    schoolid: number | null
    userjobsid: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    skillsid: number | null
    schoolid: number | null
    userjobsid: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    pronouns: string | null
    bio: string | null
    major: string | null
    location: string | null
    skillsid: number | null
    schoolid: number | null
    userjobsid: number | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    pronouns: string | null
    bio: string | null
    major: string | null
    location: string | null
    skillsid: number | null
    schoolid: number | null
    userjobsid: number | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    pronouns: number
    bio: number
    major: number
    location: number
    skillsid: number
    schoolid: number
    userjobsid: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    skillsid?: true
    schoolid?: true
    userjobsid?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    skillsid?: true
    schoolid?: true
    userjobsid?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    pronouns?: true
    bio?: true
    major?: true
    location?: true
    skillsid?: true
    schoolid?: true
    userjobsid?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    pronouns?: true
    bio?: true
    major?: true
    location?: true
    skillsid?: true
    schoolid?: true
    userjobsid?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    pronouns?: true
    bio?: true
    major?: true
    location?: true
    skillsid?: true
    schoolid?: true
    userjobsid?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    password: string
    pronouns: string | null
    bio: string | null
    major: string | null
    location: string | null
    skillsid: number | null
    schoolid: number | null
    userjobsid: number | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    pronouns?: boolean
    bio?: boolean
    major?: boolean
    location?: boolean
    skillsid?: boolean
    schoolid?: boolean
    userjobsid?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    pronouns?: boolean
    bio?: boolean
    major?: boolean
    location?: boolean
    skillsid?: boolean
    schoolid?: boolean
    userjobsid?: boolean
  }



  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      pronouns: string | null
      bio: string | null
      major: string | null
      location: string | null
      skillsid: number | null
      schoolid: number | null
      userjobsid: number | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly pronouns: FieldRef<"users", 'String'>
    readonly bio: FieldRef<"users", 'String'>
    readonly major: FieldRef<"users", 'String'>
    readonly location: FieldRef<"users", 'String'>
    readonly skillsid: FieldRef<"users", 'Int'>
    readonly schoolid: FieldRef<"users", 'Int'>
    readonly userjobsid: FieldRef<"users", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
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


  export const CompaniesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    typesid: 'typesid',
    description: 'description'
  };

  export type CompaniesScalarFieldEnum = (typeof CompaniesScalarFieldEnum)[keyof typeof CompaniesScalarFieldEnum]


  export const JobsScalarFieldEnum: {
    id: 'id',
    description: 'description',
    title: 'title',
    location: 'location',
    typesid: 'typesid',
    companiesid: 'companiesid'
  };

  export type JobsScalarFieldEnum = (typeof JobsScalarFieldEnum)[keyof typeof JobsScalarFieldEnum]


  export const SchoolsScalarFieldEnum: {
    id: 'id',
    location: 'location',
    name: 'name'
  };

  export type SchoolsScalarFieldEnum = (typeof SchoolsScalarFieldEnum)[keyof typeof SchoolsScalarFieldEnum]


  export const SkillsScalarFieldEnum: {
    id: 'id',
    skillsid: 'skillsid',
    skill: 'skill'
  };

  export type SkillsScalarFieldEnum = (typeof SkillsScalarFieldEnum)[keyof typeof SkillsScalarFieldEnum]


  export const TypesScalarFieldEnum: {
    id: 'id',
    typeid: 'typeid',
    type: 'type'
  };

  export type TypesScalarFieldEnum = (typeof TypesScalarFieldEnum)[keyof typeof TypesScalarFieldEnum]


  export const UserjobsScalarFieldEnum: {
    id: 'id',
    startdate: 'startdate',
    enddate: 'enddate',
    jobsid: 'jobsid'
  };

  export type UserjobsScalarFieldEnum = (typeof UserjobsScalarFieldEnum)[keyof typeof UserjobsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    pronouns: 'pronouns',
    bio: 'bio',
    major: 'major',
    location: 'location',
    skillsid: 'skillsid',
    schoolid: 'schoolid',
    userjobsid: 'userjobsid'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type companiesWhereInput = {
    AND?: companiesWhereInput | companiesWhereInput[]
    OR?: companiesWhereInput[]
    NOT?: companiesWhereInput | companiesWhereInput[]
    id?: IntFilter<"companies"> | number
    title?: StringNullableFilter<"companies"> | string | null
    typesid?: IntNullableFilter<"companies"> | number | null
    description?: StringNullableFilter<"companies"> | string | null
  }

  export type companiesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    typesid?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
  }

  export type companiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: companiesWhereInput | companiesWhereInput[]
    OR?: companiesWhereInput[]
    NOT?: companiesWhereInput | companiesWhereInput[]
    title?: StringNullableFilter<"companies"> | string | null
    typesid?: IntNullableFilter<"companies"> | number | null
    description?: StringNullableFilter<"companies"> | string | null
  }, "id">

  export type companiesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    typesid?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: companiesCountOrderByAggregateInput
    _avg?: companiesAvgOrderByAggregateInput
    _max?: companiesMaxOrderByAggregateInput
    _min?: companiesMinOrderByAggregateInput
    _sum?: companiesSumOrderByAggregateInput
  }

  export type companiesScalarWhereWithAggregatesInput = {
    AND?: companiesScalarWhereWithAggregatesInput | companiesScalarWhereWithAggregatesInput[]
    OR?: companiesScalarWhereWithAggregatesInput[]
    NOT?: companiesScalarWhereWithAggregatesInput | companiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"companies"> | number
    title?: StringNullableWithAggregatesFilter<"companies"> | string | null
    typesid?: IntNullableWithAggregatesFilter<"companies"> | number | null
    description?: StringNullableWithAggregatesFilter<"companies"> | string | null
  }

  export type jobsWhereInput = {
    AND?: jobsWhereInput | jobsWhereInput[]
    OR?: jobsWhereInput[]
    NOT?: jobsWhereInput | jobsWhereInput[]
    id?: IntFilter<"jobs"> | number
    description?: StringNullableFilter<"jobs"> | string | null
    title?: StringNullableFilter<"jobs"> | string | null
    location?: StringNullableFilter<"jobs"> | string | null
    typesid?: IntNullableFilter<"jobs"> | number | null
    companiesid?: IntNullableFilter<"jobs"> | number | null
  }

  export type jobsOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    typesid?: SortOrderInput | SortOrder
    companiesid?: SortOrderInput | SortOrder
  }

  export type jobsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: jobsWhereInput | jobsWhereInput[]
    OR?: jobsWhereInput[]
    NOT?: jobsWhereInput | jobsWhereInput[]
    description?: StringNullableFilter<"jobs"> | string | null
    title?: StringNullableFilter<"jobs"> | string | null
    location?: StringNullableFilter<"jobs"> | string | null
    typesid?: IntNullableFilter<"jobs"> | number | null
    companiesid?: IntNullableFilter<"jobs"> | number | null
  }, "id">

  export type jobsOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    typesid?: SortOrderInput | SortOrder
    companiesid?: SortOrderInput | SortOrder
    _count?: jobsCountOrderByAggregateInput
    _avg?: jobsAvgOrderByAggregateInput
    _max?: jobsMaxOrderByAggregateInput
    _min?: jobsMinOrderByAggregateInput
    _sum?: jobsSumOrderByAggregateInput
  }

  export type jobsScalarWhereWithAggregatesInput = {
    AND?: jobsScalarWhereWithAggregatesInput | jobsScalarWhereWithAggregatesInput[]
    OR?: jobsScalarWhereWithAggregatesInput[]
    NOT?: jobsScalarWhereWithAggregatesInput | jobsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"jobs"> | number
    description?: StringNullableWithAggregatesFilter<"jobs"> | string | null
    title?: StringNullableWithAggregatesFilter<"jobs"> | string | null
    location?: StringNullableWithAggregatesFilter<"jobs"> | string | null
    typesid?: IntNullableWithAggregatesFilter<"jobs"> | number | null
    companiesid?: IntNullableWithAggregatesFilter<"jobs"> | number | null
  }

  export type schoolsWhereInput = {
    AND?: schoolsWhereInput | schoolsWhereInput[]
    OR?: schoolsWhereInput[]
    NOT?: schoolsWhereInput | schoolsWhereInput[]
    id?: IntFilter<"schools"> | number
    location?: StringNullableFilter<"schools"> | string | null
    name?: StringNullableFilter<"schools"> | string | null
  }

  export type schoolsOrderByWithRelationInput = {
    id?: SortOrder
    location?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
  }

  export type schoolsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: schoolsWhereInput | schoolsWhereInput[]
    OR?: schoolsWhereInput[]
    NOT?: schoolsWhereInput | schoolsWhereInput[]
    location?: StringNullableFilter<"schools"> | string | null
    name?: StringNullableFilter<"schools"> | string | null
  }, "id">

  export type schoolsOrderByWithAggregationInput = {
    id?: SortOrder
    location?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    _count?: schoolsCountOrderByAggregateInput
    _avg?: schoolsAvgOrderByAggregateInput
    _max?: schoolsMaxOrderByAggregateInput
    _min?: schoolsMinOrderByAggregateInput
    _sum?: schoolsSumOrderByAggregateInput
  }

  export type schoolsScalarWhereWithAggregatesInput = {
    AND?: schoolsScalarWhereWithAggregatesInput | schoolsScalarWhereWithAggregatesInput[]
    OR?: schoolsScalarWhereWithAggregatesInput[]
    NOT?: schoolsScalarWhereWithAggregatesInput | schoolsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"schools"> | number
    location?: StringNullableWithAggregatesFilter<"schools"> | string | null
    name?: StringNullableWithAggregatesFilter<"schools"> | string | null
  }

  export type skillsWhereInput = {
    AND?: skillsWhereInput | skillsWhereInput[]
    OR?: skillsWhereInput[]
    NOT?: skillsWhereInput | skillsWhereInput[]
    id?: IntFilter<"skills"> | number
    skillsid?: IntNullableFilter<"skills"> | number | null
    skill?: StringNullableFilter<"skills"> | string | null
  }

  export type skillsOrderByWithRelationInput = {
    id?: SortOrder
    skillsid?: SortOrderInput | SortOrder
    skill?: SortOrderInput | SortOrder
  }

  export type skillsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: skillsWhereInput | skillsWhereInput[]
    OR?: skillsWhereInput[]
    NOT?: skillsWhereInput | skillsWhereInput[]
    skillsid?: IntNullableFilter<"skills"> | number | null
    skill?: StringNullableFilter<"skills"> | string | null
  }, "id">

  export type skillsOrderByWithAggregationInput = {
    id?: SortOrder
    skillsid?: SortOrderInput | SortOrder
    skill?: SortOrderInput | SortOrder
    _count?: skillsCountOrderByAggregateInput
    _avg?: skillsAvgOrderByAggregateInput
    _max?: skillsMaxOrderByAggregateInput
    _min?: skillsMinOrderByAggregateInput
    _sum?: skillsSumOrderByAggregateInput
  }

  export type skillsScalarWhereWithAggregatesInput = {
    AND?: skillsScalarWhereWithAggregatesInput | skillsScalarWhereWithAggregatesInput[]
    OR?: skillsScalarWhereWithAggregatesInput[]
    NOT?: skillsScalarWhereWithAggregatesInput | skillsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"skills"> | number
    skillsid?: IntNullableWithAggregatesFilter<"skills"> | number | null
    skill?: StringNullableWithAggregatesFilter<"skills"> | string | null
  }

  export type typesWhereInput = {
    AND?: typesWhereInput | typesWhereInput[]
    OR?: typesWhereInput[]
    NOT?: typesWhereInput | typesWhereInput[]
    id?: IntFilter<"types"> | number
    typeid?: IntNullableFilter<"types"> | number | null
    type?: StringNullableFilter<"types"> | string | null
  }

  export type typesOrderByWithRelationInput = {
    id?: SortOrder
    typeid?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
  }

  export type typesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: typesWhereInput | typesWhereInput[]
    OR?: typesWhereInput[]
    NOT?: typesWhereInput | typesWhereInput[]
    typeid?: IntNullableFilter<"types"> | number | null
    type?: StringNullableFilter<"types"> | string | null
  }, "id">

  export type typesOrderByWithAggregationInput = {
    id?: SortOrder
    typeid?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    _count?: typesCountOrderByAggregateInput
    _avg?: typesAvgOrderByAggregateInput
    _max?: typesMaxOrderByAggregateInput
    _min?: typesMinOrderByAggregateInput
    _sum?: typesSumOrderByAggregateInput
  }

  export type typesScalarWhereWithAggregatesInput = {
    AND?: typesScalarWhereWithAggregatesInput | typesScalarWhereWithAggregatesInput[]
    OR?: typesScalarWhereWithAggregatesInput[]
    NOT?: typesScalarWhereWithAggregatesInput | typesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"types"> | number
    typeid?: IntNullableWithAggregatesFilter<"types"> | number | null
    type?: StringNullableWithAggregatesFilter<"types"> | string | null
  }

  export type userjobsWhereInput = {
    AND?: userjobsWhereInput | userjobsWhereInput[]
    OR?: userjobsWhereInput[]
    NOT?: userjobsWhereInput | userjobsWhereInput[]
    id?: IntFilter<"userjobs"> | number
    startdate?: DateTimeNullableFilter<"userjobs"> | Date | string | null
    enddate?: DateTimeNullableFilter<"userjobs"> | Date | string | null
    jobsid?: IntNullableFilter<"userjobs"> | number | null
  }

  export type userjobsOrderByWithRelationInput = {
    id?: SortOrder
    startdate?: SortOrderInput | SortOrder
    enddate?: SortOrderInput | SortOrder
    jobsid?: SortOrderInput | SortOrder
  }

  export type userjobsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: userjobsWhereInput | userjobsWhereInput[]
    OR?: userjobsWhereInput[]
    NOT?: userjobsWhereInput | userjobsWhereInput[]
    startdate?: DateTimeNullableFilter<"userjobs"> | Date | string | null
    enddate?: DateTimeNullableFilter<"userjobs"> | Date | string | null
    jobsid?: IntNullableFilter<"userjobs"> | number | null
  }, "id">

  export type userjobsOrderByWithAggregationInput = {
    id?: SortOrder
    startdate?: SortOrderInput | SortOrder
    enddate?: SortOrderInput | SortOrder
    jobsid?: SortOrderInput | SortOrder
    _count?: userjobsCountOrderByAggregateInput
    _avg?: userjobsAvgOrderByAggregateInput
    _max?: userjobsMaxOrderByAggregateInput
    _min?: userjobsMinOrderByAggregateInput
    _sum?: userjobsSumOrderByAggregateInput
  }

  export type userjobsScalarWhereWithAggregatesInput = {
    AND?: userjobsScalarWhereWithAggregatesInput | userjobsScalarWhereWithAggregatesInput[]
    OR?: userjobsScalarWhereWithAggregatesInput[]
    NOT?: userjobsScalarWhereWithAggregatesInput | userjobsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"userjobs"> | number
    startdate?: DateTimeNullableWithAggregatesFilter<"userjobs"> | Date | string | null
    enddate?: DateTimeNullableWithAggregatesFilter<"userjobs"> | Date | string | null
    jobsid?: IntNullableWithAggregatesFilter<"userjobs"> | number | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    pronouns?: StringNullableFilter<"users"> | string | null
    bio?: StringNullableFilter<"users"> | string | null
    major?: StringNullableFilter<"users"> | string | null
    location?: StringNullableFilter<"users"> | string | null
    skillsid?: IntNullableFilter<"users"> | number | null
    schoolid?: IntNullableFilter<"users"> | number | null
    userjobsid?: IntNullableFilter<"users"> | number | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    pronouns?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    major?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    skillsid?: SortOrderInput | SortOrder
    schoolid?: SortOrderInput | SortOrder
    userjobsid?: SortOrderInput | SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    pronouns?: StringNullableFilter<"users"> | string | null
    bio?: StringNullableFilter<"users"> | string | null
    major?: StringNullableFilter<"users"> | string | null
    location?: StringNullableFilter<"users"> | string | null
    skillsid?: IntNullableFilter<"users"> | number | null
    schoolid?: IntNullableFilter<"users"> | number | null
    userjobsid?: IntNullableFilter<"users"> | number | null
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    pronouns?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    major?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    skillsid?: SortOrderInput | SortOrder
    schoolid?: SortOrderInput | SortOrder
    userjobsid?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    pronouns?: StringNullableWithAggregatesFilter<"users"> | string | null
    bio?: StringNullableWithAggregatesFilter<"users"> | string | null
    major?: StringNullableWithAggregatesFilter<"users"> | string | null
    location?: StringNullableWithAggregatesFilter<"users"> | string | null
    skillsid?: IntNullableWithAggregatesFilter<"users"> | number | null
    schoolid?: IntNullableWithAggregatesFilter<"users"> | number | null
    userjobsid?: IntNullableWithAggregatesFilter<"users"> | number | null
  }

  export type companiesCreateInput = {
    title?: string | null
    typesid?: number | null
    description?: string | null
  }

  export type companiesUncheckedCreateInput = {
    id?: number
    title?: string | null
    typesid?: number | null
    description?: string | null
  }

  export type companiesUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    typesid?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type companiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    typesid?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type companiesCreateManyInput = {
    id?: number
    title?: string | null
    typesid?: number | null
    description?: string | null
  }

  export type companiesUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    typesid?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type companiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    typesid?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type jobsCreateInput = {
    description?: string | null
    title?: string | null
    location?: string | null
    typesid?: number | null
    companiesid?: number | null
  }

  export type jobsUncheckedCreateInput = {
    id?: number
    description?: string | null
    title?: string | null
    location?: string | null
    typesid?: number | null
    companiesid?: number | null
  }

  export type jobsUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    typesid?: NullableIntFieldUpdateOperationsInput | number | null
    companiesid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type jobsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    typesid?: NullableIntFieldUpdateOperationsInput | number | null
    companiesid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type jobsCreateManyInput = {
    id?: number
    description?: string | null
    title?: string | null
    location?: string | null
    typesid?: number | null
    companiesid?: number | null
  }

  export type jobsUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    typesid?: NullableIntFieldUpdateOperationsInput | number | null
    companiesid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type jobsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    typesid?: NullableIntFieldUpdateOperationsInput | number | null
    companiesid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type schoolsCreateInput = {
    location?: string | null
    name?: string | null
  }

  export type schoolsUncheckedCreateInput = {
    id?: number
    location?: string | null
    name?: string | null
  }

  export type schoolsUpdateInput = {
    location?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type schoolsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type schoolsCreateManyInput = {
    id?: number
    location?: string | null
    name?: string | null
  }

  export type schoolsUpdateManyMutationInput = {
    location?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type schoolsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type skillsCreateInput = {
    skillsid?: number | null
    skill?: string | null
  }

  export type skillsUncheckedCreateInput = {
    id?: number
    skillsid?: number | null
    skill?: string | null
  }

  export type skillsUpdateInput = {
    skillsid?: NullableIntFieldUpdateOperationsInput | number | null
    skill?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type skillsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillsid?: NullableIntFieldUpdateOperationsInput | number | null
    skill?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type skillsCreateManyInput = {
    id?: number
    skillsid?: number | null
    skill?: string | null
  }

  export type skillsUpdateManyMutationInput = {
    skillsid?: NullableIntFieldUpdateOperationsInput | number | null
    skill?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type skillsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillsid?: NullableIntFieldUpdateOperationsInput | number | null
    skill?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type typesCreateInput = {
    typeid?: number | null
    type?: string | null
  }

  export type typesUncheckedCreateInput = {
    id?: number
    typeid?: number | null
    type?: string | null
  }

  export type typesUpdateInput = {
    typeid?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type typesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeid?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type typesCreateManyInput = {
    id?: number
    typeid?: number | null
    type?: string | null
  }

  export type typesUpdateManyMutationInput = {
    typeid?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type typesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeid?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userjobsCreateInput = {
    startdate?: Date | string | null
    enddate?: Date | string | null
    jobsid?: number | null
  }

  export type userjobsUncheckedCreateInput = {
    id?: number
    startdate?: Date | string | null
    enddate?: Date | string | null
    jobsid?: number | null
  }

  export type userjobsUpdateInput = {
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobsid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type userjobsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobsid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type userjobsCreateManyInput = {
    id?: number
    startdate?: Date | string | null
    enddate?: Date | string | null
    jobsid?: number | null
  }

  export type userjobsUpdateManyMutationInput = {
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobsid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type userjobsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enddate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jobsid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateInput = {
    username: string
    password: string
    pronouns?: string | null
    bio?: string | null
    major?: string | null
    location?: string | null
    skillsid?: number | null
    schoolid?: number | null
    userjobsid?: number | null
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    pronouns?: string | null
    bio?: string | null
    major?: string | null
    location?: string | null
    skillsid?: number | null
    schoolid?: number | null
    userjobsid?: number | null
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    skillsid?: NullableIntFieldUpdateOperationsInput | number | null
    schoolid?: NullableIntFieldUpdateOperationsInput | number | null
    userjobsid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    skillsid?: NullableIntFieldUpdateOperationsInput | number | null
    schoolid?: NullableIntFieldUpdateOperationsInput | number | null
    userjobsid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    password: string
    pronouns?: string | null
    bio?: string | null
    major?: string | null
    location?: string | null
    skillsid?: number | null
    schoolid?: number | null
    userjobsid?: number | null
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    skillsid?: NullableIntFieldUpdateOperationsInput | number | null
    schoolid?: NullableIntFieldUpdateOperationsInput | number | null
    userjobsid?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    skillsid?: NullableIntFieldUpdateOperationsInput | number | null
    schoolid?: NullableIntFieldUpdateOperationsInput | number | null
    userjobsid?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type companiesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    typesid?: SortOrder
    description?: SortOrder
  }

  export type companiesAvgOrderByAggregateInput = {
    id?: SortOrder
    typesid?: SortOrder
  }

  export type companiesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    typesid?: SortOrder
    description?: SortOrder
  }

  export type companiesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    typesid?: SortOrder
    description?: SortOrder
  }

  export type companiesSumOrderByAggregateInput = {
    id?: SortOrder
    typesid?: SortOrder
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

  export type jobsCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    title?: SortOrder
    location?: SortOrder
    typesid?: SortOrder
    companiesid?: SortOrder
  }

  export type jobsAvgOrderByAggregateInput = {
    id?: SortOrder
    typesid?: SortOrder
    companiesid?: SortOrder
  }

  export type jobsMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    title?: SortOrder
    location?: SortOrder
    typesid?: SortOrder
    companiesid?: SortOrder
  }

  export type jobsMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    title?: SortOrder
    location?: SortOrder
    typesid?: SortOrder
    companiesid?: SortOrder
  }

  export type jobsSumOrderByAggregateInput = {
    id?: SortOrder
    typesid?: SortOrder
    companiesid?: SortOrder
  }

  export type schoolsCountOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    name?: SortOrder
  }

  export type schoolsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type schoolsMaxOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    name?: SortOrder
  }

  export type schoolsMinOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    name?: SortOrder
  }

  export type schoolsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type skillsCountOrderByAggregateInput = {
    id?: SortOrder
    skillsid?: SortOrder
    skill?: SortOrder
  }

  export type skillsAvgOrderByAggregateInput = {
    id?: SortOrder
    skillsid?: SortOrder
  }

  export type skillsMaxOrderByAggregateInput = {
    id?: SortOrder
    skillsid?: SortOrder
    skill?: SortOrder
  }

  export type skillsMinOrderByAggregateInput = {
    id?: SortOrder
    skillsid?: SortOrder
    skill?: SortOrder
  }

  export type skillsSumOrderByAggregateInput = {
    id?: SortOrder
    skillsid?: SortOrder
  }

  export type typesCountOrderByAggregateInput = {
    id?: SortOrder
    typeid?: SortOrder
    type?: SortOrder
  }

  export type typesAvgOrderByAggregateInput = {
    id?: SortOrder
    typeid?: SortOrder
  }

  export type typesMaxOrderByAggregateInput = {
    id?: SortOrder
    typeid?: SortOrder
    type?: SortOrder
  }

  export type typesMinOrderByAggregateInput = {
    id?: SortOrder
    typeid?: SortOrder
    type?: SortOrder
  }

  export type typesSumOrderByAggregateInput = {
    id?: SortOrder
    typeid?: SortOrder
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

  export type userjobsCountOrderByAggregateInput = {
    id?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    jobsid?: SortOrder
  }

  export type userjobsAvgOrderByAggregateInput = {
    id?: SortOrder
    jobsid?: SortOrder
  }

  export type userjobsMaxOrderByAggregateInput = {
    id?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    jobsid?: SortOrder
  }

  export type userjobsMinOrderByAggregateInput = {
    id?: SortOrder
    startdate?: SortOrder
    enddate?: SortOrder
    jobsid?: SortOrder
  }

  export type userjobsSumOrderByAggregateInput = {
    id?: SortOrder
    jobsid?: SortOrder
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

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    pronouns?: SortOrder
    bio?: SortOrder
    major?: SortOrder
    location?: SortOrder
    skillsid?: SortOrder
    schoolid?: SortOrder
    userjobsid?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    skillsid?: SortOrder
    schoolid?: SortOrder
    userjobsid?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    pronouns?: SortOrder
    bio?: SortOrder
    major?: SortOrder
    location?: SortOrder
    skillsid?: SortOrder
    schoolid?: SortOrder
    userjobsid?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    pronouns?: SortOrder
    bio?: SortOrder
    major?: SortOrder
    location?: SortOrder
    skillsid?: SortOrder
    schoolid?: SortOrder
    userjobsid?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    skillsid?: SortOrder
    schoolid?: SortOrder
    userjobsid?: SortOrder
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use companiesDefaultArgs instead
     */
    export type companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = companiesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use jobsDefaultArgs instead
     */
    export type jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = jobsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use schoolsDefaultArgs instead
     */
    export type schoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = schoolsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use skillsDefaultArgs instead
     */
    export type skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = skillsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use typesDefaultArgs instead
     */
    export type typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = typesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userjobsDefaultArgs instead
     */
    export type userjobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userjobsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>

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
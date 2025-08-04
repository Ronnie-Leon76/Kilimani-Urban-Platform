
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model ReportUpdate
 * 
 */
export type ReportUpdate = $Result.DefaultSelection<Prisma.$ReportUpdatePayload>
/**
 * Model SatelliteAnalysis
 * 
 */
export type SatelliteAnalysis = $Result.DefaultSelection<Prisma.$SatelliteAnalysisPayload>
/**
 * Model FloodRiskArea
 * 
 */
export type FloodRiskArea = $Result.DefaultSelection<Prisma.$FloodRiskAreaPayload>
/**
 * Model DevelopmentPlan
 * 
 */
export type DevelopmentPlan = $Result.DefaultSelection<Prisma.$DevelopmentPlanPayload>
/**
 * Model PublicConsultation
 * 
 */
export type PublicConsultation = $Result.DefaultSelection<Prisma.$PublicConsultationPayload>
/**
 * Model ConsultationVote
 * 
 */
export type ConsultationVote = $Result.DefaultSelection<Prisma.$ConsultationVotePayload>
/**
 * Model ConsultationComment
 * 
 */
export type ConsultationComment = $Result.DefaultSelection<Prisma.$ConsultationCommentPayload>
/**
 * Model WaterDemandAnalysis
 * 
 */
export type WaterDemandAnalysis = $Result.DefaultSelection<Prisma.$WaterDemandAnalysisPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  RESIDENT: 'RESIDENT',
  GOVERNMENT_OFFICIAL: 'GOVERNMENT_OFFICIAL',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ReportType: {
  INFRASTRUCTURE: 'INFRASTRUCTURE',
  WATER_SHORTAGE: 'WATER_SHORTAGE',
  FLOODING: 'FLOODING',
  WASTE_MANAGEMENT: 'WASTE_MANAGEMENT',
  ILLEGAL_DEVELOPMENT: 'ILLEGAL_DEVELOPMENT',
  OTHER: 'OTHER'
};

export type ReportType = (typeof ReportType)[keyof typeof ReportType]


export const ReportStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  RESOLVED: 'RESOLVED',
  REJECTED: 'REJECTED'
};

export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus]


export const Priority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type Priority = (typeof Priority)[keyof typeof Priority]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ReportType = $Enums.ReportType

export const ReportType: typeof $Enums.ReportType

export type ReportStatus = $Enums.ReportStatus

export const ReportStatus: typeof $Enums.ReportStatus

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reportUpdate`: Exposes CRUD operations for the **ReportUpdate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReportUpdates
    * const reportUpdates = await prisma.reportUpdate.findMany()
    * ```
    */
  get reportUpdate(): Prisma.ReportUpdateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.satelliteAnalysis`: Exposes CRUD operations for the **SatelliteAnalysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SatelliteAnalyses
    * const satelliteAnalyses = await prisma.satelliteAnalysis.findMany()
    * ```
    */
  get satelliteAnalysis(): Prisma.SatelliteAnalysisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.floodRiskArea`: Exposes CRUD operations for the **FloodRiskArea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FloodRiskAreas
    * const floodRiskAreas = await prisma.floodRiskArea.findMany()
    * ```
    */
  get floodRiskArea(): Prisma.FloodRiskAreaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.developmentPlan`: Exposes CRUD operations for the **DevelopmentPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DevelopmentPlans
    * const developmentPlans = await prisma.developmentPlan.findMany()
    * ```
    */
  get developmentPlan(): Prisma.DevelopmentPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publicConsultation`: Exposes CRUD operations for the **PublicConsultation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublicConsultations
    * const publicConsultations = await prisma.publicConsultation.findMany()
    * ```
    */
  get publicConsultation(): Prisma.PublicConsultationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consultationVote`: Exposes CRUD operations for the **ConsultationVote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConsultationVotes
    * const consultationVotes = await prisma.consultationVote.findMany()
    * ```
    */
  get consultationVote(): Prisma.ConsultationVoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consultationComment`: Exposes CRUD operations for the **ConsultationComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConsultationComments
    * const consultationComments = await prisma.consultationComment.findMany()
    * ```
    */
  get consultationComment(): Prisma.ConsultationCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.waterDemandAnalysis`: Exposes CRUD operations for the **WaterDemandAnalysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WaterDemandAnalyses
    * const waterDemandAnalyses = await prisma.waterDemandAnalysis.findMany()
    * ```
    */
  get waterDemandAnalysis(): Prisma.WaterDemandAnalysisDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    Report: 'Report',
    ReportUpdate: 'ReportUpdate',
    SatelliteAnalysis: 'SatelliteAnalysis',
    FloodRiskArea: 'FloodRiskArea',
    DevelopmentPlan: 'DevelopmentPlan',
    PublicConsultation: 'PublicConsultation',
    ConsultationVote: 'ConsultationVote',
    ConsultationComment: 'ConsultationComment',
    WaterDemandAnalysis: 'WaterDemandAnalysis'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "session" | "user" | "verificationToken" | "report" | "reportUpdate" | "satelliteAnalysis" | "floodRiskArea" | "developmentPlan" | "publicConsultation" | "consultationVote" | "consultationComment" | "waterDemandAnalysis"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      ReportUpdate: {
        payload: Prisma.$ReportUpdatePayload<ExtArgs>
        fields: Prisma.ReportUpdateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportUpdateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportUpdatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportUpdateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportUpdatePayload>
          }
          findFirst: {
            args: Prisma.ReportUpdateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportUpdatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportUpdateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportUpdatePayload>
          }
          findMany: {
            args: Prisma.ReportUpdateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportUpdatePayload>[]
          }
          create: {
            args: Prisma.ReportUpdateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportUpdatePayload>
          }
          createMany: {
            args: Prisma.ReportUpdateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportUpdateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportUpdatePayload>[]
          }
          delete: {
            args: Prisma.ReportUpdateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportUpdatePayload>
          }
          update: {
            args: Prisma.ReportUpdateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportUpdatePayload>
          }
          deleteMany: {
            args: Prisma.ReportUpdateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportUpdatePayload>[]
          }
          upsert: {
            args: Prisma.ReportUpdateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportUpdatePayload>
          }
          aggregate: {
            args: Prisma.ReportUpdateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReportUpdate>
          }
          groupBy: {
            args: Prisma.ReportUpdateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportUpdateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportUpdateCountArgs<ExtArgs>
            result: $Utils.Optional<ReportUpdateCountAggregateOutputType> | number
          }
        }
      }
      SatelliteAnalysis: {
        payload: Prisma.$SatelliteAnalysisPayload<ExtArgs>
        fields: Prisma.SatelliteAnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SatelliteAnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatelliteAnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SatelliteAnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatelliteAnalysisPayload>
          }
          findFirst: {
            args: Prisma.SatelliteAnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatelliteAnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SatelliteAnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatelliteAnalysisPayload>
          }
          findMany: {
            args: Prisma.SatelliteAnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatelliteAnalysisPayload>[]
          }
          create: {
            args: Prisma.SatelliteAnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatelliteAnalysisPayload>
          }
          createMany: {
            args: Prisma.SatelliteAnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SatelliteAnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatelliteAnalysisPayload>[]
          }
          delete: {
            args: Prisma.SatelliteAnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatelliteAnalysisPayload>
          }
          update: {
            args: Prisma.SatelliteAnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatelliteAnalysisPayload>
          }
          deleteMany: {
            args: Prisma.SatelliteAnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SatelliteAnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SatelliteAnalysisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatelliteAnalysisPayload>[]
          }
          upsert: {
            args: Prisma.SatelliteAnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SatelliteAnalysisPayload>
          }
          aggregate: {
            args: Prisma.SatelliteAnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSatelliteAnalysis>
          }
          groupBy: {
            args: Prisma.SatelliteAnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<SatelliteAnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.SatelliteAnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<SatelliteAnalysisCountAggregateOutputType> | number
          }
        }
      }
      FloodRiskArea: {
        payload: Prisma.$FloodRiskAreaPayload<ExtArgs>
        fields: Prisma.FloodRiskAreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FloodRiskAreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloodRiskAreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FloodRiskAreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloodRiskAreaPayload>
          }
          findFirst: {
            args: Prisma.FloodRiskAreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloodRiskAreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FloodRiskAreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloodRiskAreaPayload>
          }
          findMany: {
            args: Prisma.FloodRiskAreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloodRiskAreaPayload>[]
          }
          create: {
            args: Prisma.FloodRiskAreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloodRiskAreaPayload>
          }
          createMany: {
            args: Prisma.FloodRiskAreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FloodRiskAreaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloodRiskAreaPayload>[]
          }
          delete: {
            args: Prisma.FloodRiskAreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloodRiskAreaPayload>
          }
          update: {
            args: Prisma.FloodRiskAreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloodRiskAreaPayload>
          }
          deleteMany: {
            args: Prisma.FloodRiskAreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FloodRiskAreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FloodRiskAreaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloodRiskAreaPayload>[]
          }
          upsert: {
            args: Prisma.FloodRiskAreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloodRiskAreaPayload>
          }
          aggregate: {
            args: Prisma.FloodRiskAreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFloodRiskArea>
          }
          groupBy: {
            args: Prisma.FloodRiskAreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FloodRiskAreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FloodRiskAreaCountArgs<ExtArgs>
            result: $Utils.Optional<FloodRiskAreaCountAggregateOutputType> | number
          }
        }
      }
      DevelopmentPlan: {
        payload: Prisma.$DevelopmentPlanPayload<ExtArgs>
        fields: Prisma.DevelopmentPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DevelopmentPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevelopmentPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DevelopmentPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevelopmentPlanPayload>
          }
          findFirst: {
            args: Prisma.DevelopmentPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevelopmentPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DevelopmentPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevelopmentPlanPayload>
          }
          findMany: {
            args: Prisma.DevelopmentPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevelopmentPlanPayload>[]
          }
          create: {
            args: Prisma.DevelopmentPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevelopmentPlanPayload>
          }
          createMany: {
            args: Prisma.DevelopmentPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DevelopmentPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevelopmentPlanPayload>[]
          }
          delete: {
            args: Prisma.DevelopmentPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevelopmentPlanPayload>
          }
          update: {
            args: Prisma.DevelopmentPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevelopmentPlanPayload>
          }
          deleteMany: {
            args: Prisma.DevelopmentPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DevelopmentPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DevelopmentPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevelopmentPlanPayload>[]
          }
          upsert: {
            args: Prisma.DevelopmentPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevelopmentPlanPayload>
          }
          aggregate: {
            args: Prisma.DevelopmentPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevelopmentPlan>
          }
          groupBy: {
            args: Prisma.DevelopmentPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<DevelopmentPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.DevelopmentPlanCountArgs<ExtArgs>
            result: $Utils.Optional<DevelopmentPlanCountAggregateOutputType> | number
          }
        }
      }
      PublicConsultation: {
        payload: Prisma.$PublicConsultationPayload<ExtArgs>
        fields: Prisma.PublicConsultationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicConsultationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicConsultationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicConsultationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicConsultationPayload>
          }
          findFirst: {
            args: Prisma.PublicConsultationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicConsultationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicConsultationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicConsultationPayload>
          }
          findMany: {
            args: Prisma.PublicConsultationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicConsultationPayload>[]
          }
          create: {
            args: Prisma.PublicConsultationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicConsultationPayload>
          }
          createMany: {
            args: Prisma.PublicConsultationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicConsultationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicConsultationPayload>[]
          }
          delete: {
            args: Prisma.PublicConsultationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicConsultationPayload>
          }
          update: {
            args: Prisma.PublicConsultationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicConsultationPayload>
          }
          deleteMany: {
            args: Prisma.PublicConsultationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicConsultationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublicConsultationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicConsultationPayload>[]
          }
          upsert: {
            args: Prisma.PublicConsultationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicConsultationPayload>
          }
          aggregate: {
            args: Prisma.PublicConsultationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublicConsultation>
          }
          groupBy: {
            args: Prisma.PublicConsultationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicConsultationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicConsultationCountArgs<ExtArgs>
            result: $Utils.Optional<PublicConsultationCountAggregateOutputType> | number
          }
        }
      }
      ConsultationVote: {
        payload: Prisma.$ConsultationVotePayload<ExtArgs>
        fields: Prisma.ConsultationVoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultationVoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationVotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultationVoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationVotePayload>
          }
          findFirst: {
            args: Prisma.ConsultationVoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationVotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultationVoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationVotePayload>
          }
          findMany: {
            args: Prisma.ConsultationVoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationVotePayload>[]
          }
          create: {
            args: Prisma.ConsultationVoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationVotePayload>
          }
          createMany: {
            args: Prisma.ConsultationVoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultationVoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationVotePayload>[]
          }
          delete: {
            args: Prisma.ConsultationVoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationVotePayload>
          }
          update: {
            args: Prisma.ConsultationVoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationVotePayload>
          }
          deleteMany: {
            args: Prisma.ConsultationVoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultationVoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultationVoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationVotePayload>[]
          }
          upsert: {
            args: Prisma.ConsultationVoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationVotePayload>
          }
          aggregate: {
            args: Prisma.ConsultationVoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultationVote>
          }
          groupBy: {
            args: Prisma.ConsultationVoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultationVoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultationVoteCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultationVoteCountAggregateOutputType> | number
          }
        }
      }
      ConsultationComment: {
        payload: Prisma.$ConsultationCommentPayload<ExtArgs>
        fields: Prisma.ConsultationCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultationCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultationCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationCommentPayload>
          }
          findFirst: {
            args: Prisma.ConsultationCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultationCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationCommentPayload>
          }
          findMany: {
            args: Prisma.ConsultationCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationCommentPayload>[]
          }
          create: {
            args: Prisma.ConsultationCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationCommentPayload>
          }
          createMany: {
            args: Prisma.ConsultationCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultationCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationCommentPayload>[]
          }
          delete: {
            args: Prisma.ConsultationCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationCommentPayload>
          }
          update: {
            args: Prisma.ConsultationCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationCommentPayload>
          }
          deleteMany: {
            args: Prisma.ConsultationCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultationCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultationCommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationCommentPayload>[]
          }
          upsert: {
            args: Prisma.ConsultationCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationCommentPayload>
          }
          aggregate: {
            args: Prisma.ConsultationCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultationComment>
          }
          groupBy: {
            args: Prisma.ConsultationCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultationCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultationCommentCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultationCommentCountAggregateOutputType> | number
          }
        }
      }
      WaterDemandAnalysis: {
        payload: Prisma.$WaterDemandAnalysisPayload<ExtArgs>
        fields: Prisma.WaterDemandAnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaterDemandAnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterDemandAnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaterDemandAnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterDemandAnalysisPayload>
          }
          findFirst: {
            args: Prisma.WaterDemandAnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterDemandAnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaterDemandAnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterDemandAnalysisPayload>
          }
          findMany: {
            args: Prisma.WaterDemandAnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterDemandAnalysisPayload>[]
          }
          create: {
            args: Prisma.WaterDemandAnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterDemandAnalysisPayload>
          }
          createMany: {
            args: Prisma.WaterDemandAnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WaterDemandAnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterDemandAnalysisPayload>[]
          }
          delete: {
            args: Prisma.WaterDemandAnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterDemandAnalysisPayload>
          }
          update: {
            args: Prisma.WaterDemandAnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterDemandAnalysisPayload>
          }
          deleteMany: {
            args: Prisma.WaterDemandAnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaterDemandAnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WaterDemandAnalysisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterDemandAnalysisPayload>[]
          }
          upsert: {
            args: Prisma.WaterDemandAnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterDemandAnalysisPayload>
          }
          aggregate: {
            args: Prisma.WaterDemandAnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaterDemandAnalysis>
          }
          groupBy: {
            args: Prisma.WaterDemandAnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaterDemandAnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaterDemandAnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<WaterDemandAnalysisCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
    report?: ReportOmit
    reportUpdate?: ReportUpdateOmit
    satelliteAnalysis?: SatelliteAnalysisOmit
    floodRiskArea?: FloodRiskAreaOmit
    developmentPlan?: DevelopmentPlanOmit
    publicConsultation?: PublicConsultationOmit
    consultationVote?: ConsultationVoteOmit
    consultationComment?: ConsultationCommentOmit
    waterDemandAnalysis?: WaterDemandAnalysisOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
    accounts: number
    sessions: number
    reports: number
    consultationVotes: number
    consultationComments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    reports?: boolean | UserCountOutputTypeCountReportsArgs
    consultationVotes?: boolean | UserCountOutputTypeCountConsultationVotesArgs
    consultationComments?: boolean | UserCountOutputTypeCountConsultationCommentsArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConsultationVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationVoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConsultationCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationCommentWhereInput
  }


  /**
   * Count Type ReportCountOutputType
   */

  export type ReportCountOutputType = {
    updates: number
    analysis: number
  }

  export type ReportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    updates?: boolean | ReportCountOutputTypeCountUpdatesArgs
    analysis?: boolean | ReportCountOutputTypeCountAnalysisArgs
  }

  // Custom InputTypes
  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCountOutputType
     */
    select?: ReportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeCountUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportUpdateWhereInput
  }

  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeCountAnalysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SatelliteAnalysisWhereInput
  }


  /**
   * Count Type PublicConsultationCountOutputType
   */

  export type PublicConsultationCountOutputType = {
    votes: number
    comments: number
  }

  export type PublicConsultationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | PublicConsultationCountOutputTypeCountVotesArgs
    comments?: boolean | PublicConsultationCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * PublicConsultationCountOutputType without action
   */
  export type PublicConsultationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicConsultationCountOutputType
     */
    select?: PublicConsultationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PublicConsultationCountOutputType without action
   */
  export type PublicConsultationCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationVoteWhereInput
  }

  /**
   * PublicConsultationCountOutputType without action
   */
  export type PublicConsultationCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationCommentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    role: $Enums.UserRole | null
    phoneNumber: string | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    role: $Enums.UserRole | null
    phoneNumber: string | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    role: number
    phoneNumber: number
    location: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    phoneNumber?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    phoneNumber?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    phoneNumber?: true
    location?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    image: string | null
    role: $Enums.UserRole
    phoneNumber: string | null
    location: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    phoneNumber?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    reports?: boolean | User$reportsArgs<ExtArgs>
    consultationVotes?: boolean | User$consultationVotesArgs<ExtArgs>
    consultationComments?: boolean | User$consultationCommentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    phoneNumber?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    phoneNumber?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    phoneNumber?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "role" | "phoneNumber" | "location" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    reports?: boolean | User$reportsArgs<ExtArgs>
    consultationVotes?: boolean | User$consultationVotesArgs<ExtArgs>
    consultationComments?: boolean | User$consultationCommentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      reports: Prisma.$ReportPayload<ExtArgs>[]
      consultationVotes: Prisma.$ConsultationVotePayload<ExtArgs>[]
      consultationComments: Prisma.$ConsultationCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      image: string | null
      role: $Enums.UserRole
      phoneNumber: string | null
      location: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reports<T extends User$reportsArgs<ExtArgs> = {}>(args?: Subset<T, User$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    consultationVotes<T extends User$consultationVotesArgs<ExtArgs> = {}>(args?: Subset<T, User$consultationVotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    consultationComments<T extends User$consultationCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$consultationCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.reports
   */
  export type User$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * User.consultationVotes
   */
  export type User$consultationVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVote
     */
    select?: ConsultationVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVote
     */
    omit?: ConsultationVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationVoteInclude<ExtArgs> | null
    where?: ConsultationVoteWhereInput
    orderBy?: ConsultationVoteOrderByWithRelationInput | ConsultationVoteOrderByWithRelationInput[]
    cursor?: ConsultationVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultationVoteScalarFieldEnum | ConsultationVoteScalarFieldEnum[]
  }

  /**
   * User.consultationComments
   */
  export type User$consultationCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationComment
     */
    select?: ConsultationCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationComment
     */
    omit?: ConsultationCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationCommentInclude<ExtArgs> | null
    where?: ConsultationCommentWhereInput
    orderBy?: ConsultationCommentOrderByWithRelationInput | ConsultationCommentOrderByWithRelationInput[]
    cursor?: ConsultationCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultationCommentScalarFieldEnum | ConsultationCommentScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type ReportSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: $Enums.ReportType | null
    status: $Enums.ReportStatus | null
    priority: $Enums.Priority | null
    latitude: number | null
    longitude: number | null
    address: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    resolvedAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: $Enums.ReportType | null
    status: $Enums.ReportStatus | null
    priority: $Enums.Priority | null
    latitude: number | null
    longitude: number | null
    address: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    resolvedAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    status: number
    priority: number
    latitude: number
    longitude: number
    address: number
    images: number
    userId: number
    createdAt: number
    updatedAt: number
    resolvedAt: number
    _all: number
  }


  export type ReportAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type ReportSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type ReportMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    status?: true
    priority?: true
    latitude?: true
    longitude?: true
    address?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    resolvedAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    status?: true
    priority?: true
    latitude?: true
    longitude?: true
    address?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    resolvedAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    status?: true
    priority?: true
    latitude?: true
    longitude?: true
    address?: true
    images?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    resolvedAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _avg?: ReportAvgAggregateInputType
    _sum?: ReportSumAggregateInputType
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    title: string
    description: string
    type: $Enums.ReportType
    status: $Enums.ReportStatus
    priority: $Enums.Priority
    latitude: number
    longitude: number
    address: string | null
    images: string[]
    userId: string
    createdAt: Date
    updatedAt: Date
    resolvedAt: Date | null
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    priority?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    images?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    updates?: boolean | Report$updatesArgs<ExtArgs>
    analysis?: boolean | Report$analysisArgs<ExtArgs>
    _count?: boolean | ReportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    priority?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    images?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    priority?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    images?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    priority?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    images?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "type" | "status" | "priority" | "latitude" | "longitude" | "address" | "images" | "userId" | "createdAt" | "updatedAt" | "resolvedAt", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    updates?: boolean | Report$updatesArgs<ExtArgs>
    analysis?: boolean | Report$analysisArgs<ExtArgs>
    _count?: boolean | ReportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      updates: Prisma.$ReportUpdatePayload<ExtArgs>[]
      analysis: Prisma.$SatelliteAnalysisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      type: $Enums.ReportType
      status: $Enums.ReportStatus
      priority: $Enums.Priority
      latitude: number
      longitude: number
      address: string | null
      images: string[]
      userId: string
      createdAt: Date
      updatedAt: Date
      resolvedAt: Date | null
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
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
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updates<T extends Report$updatesArgs<ExtArgs> = {}>(args?: Subset<T, Report$updatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    analysis<T extends Report$analysisArgs<ExtArgs> = {}>(args?: Subset<T, Report$analysisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SatelliteAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly title: FieldRef<"Report", 'String'>
    readonly description: FieldRef<"Report", 'String'>
    readonly type: FieldRef<"Report", 'ReportType'>
    readonly status: FieldRef<"Report", 'ReportStatus'>
    readonly priority: FieldRef<"Report", 'Priority'>
    readonly latitude: FieldRef<"Report", 'Float'>
    readonly longitude: FieldRef<"Report", 'Float'>
    readonly address: FieldRef<"Report", 'String'>
    readonly images: FieldRef<"Report", 'String[]'>
    readonly userId: FieldRef<"Report", 'String'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
    readonly updatedAt: FieldRef<"Report", 'DateTime'>
    readonly resolvedAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report.updates
   */
  export type Report$updatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUpdate
     */
    select?: ReportUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUpdate
     */
    omit?: ReportUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUpdateInclude<ExtArgs> | null
    where?: ReportUpdateWhereInput
    orderBy?: ReportUpdateOrderByWithRelationInput | ReportUpdateOrderByWithRelationInput[]
    cursor?: ReportUpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportUpdateScalarFieldEnum | ReportUpdateScalarFieldEnum[]
  }

  /**
   * Report.analysis
   */
  export type Report$analysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatelliteAnalysis
     */
    select?: SatelliteAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatelliteAnalysis
     */
    omit?: SatelliteAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatelliteAnalysisInclude<ExtArgs> | null
    where?: SatelliteAnalysisWhereInput
    orderBy?: SatelliteAnalysisOrderByWithRelationInput | SatelliteAnalysisOrderByWithRelationInput[]
    cursor?: SatelliteAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SatelliteAnalysisScalarFieldEnum | SatelliteAnalysisScalarFieldEnum[]
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model ReportUpdate
   */

  export type AggregateReportUpdate = {
    _count: ReportUpdateCountAggregateOutputType | null
    _min: ReportUpdateMinAggregateOutputType | null
    _max: ReportUpdateMaxAggregateOutputType | null
  }

  export type ReportUpdateMinAggregateOutputType = {
    id: string | null
    reportId: string | null
    message: string | null
    status: $Enums.ReportStatus | null
    createdAt: Date | null
    updatedBy: string | null
  }

  export type ReportUpdateMaxAggregateOutputType = {
    id: string | null
    reportId: string | null
    message: string | null
    status: $Enums.ReportStatus | null
    createdAt: Date | null
    updatedBy: string | null
  }

  export type ReportUpdateCountAggregateOutputType = {
    id: number
    reportId: number
    message: number
    status: number
    createdAt: number
    updatedBy: number
    _all: number
  }


  export type ReportUpdateMinAggregateInputType = {
    id?: true
    reportId?: true
    message?: true
    status?: true
    createdAt?: true
    updatedBy?: true
  }

  export type ReportUpdateMaxAggregateInputType = {
    id?: true
    reportId?: true
    message?: true
    status?: true
    createdAt?: true
    updatedBy?: true
  }

  export type ReportUpdateCountAggregateInputType = {
    id?: true
    reportId?: true
    message?: true
    status?: true
    createdAt?: true
    updatedBy?: true
    _all?: true
  }

  export type ReportUpdateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportUpdate to aggregate.
     */
    where?: ReportUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportUpdates to fetch.
     */
    orderBy?: ReportUpdateOrderByWithRelationInput | ReportUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReportUpdates
    **/
    _count?: true | ReportUpdateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportUpdateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportUpdateMaxAggregateInputType
  }

  export type GetReportUpdateAggregateType<T extends ReportUpdateAggregateArgs> = {
        [P in keyof T & keyof AggregateReportUpdate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReportUpdate[P]>
      : GetScalarType<T[P], AggregateReportUpdate[P]>
  }




  export type ReportUpdateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportUpdateWhereInput
    orderBy?: ReportUpdateOrderByWithAggregationInput | ReportUpdateOrderByWithAggregationInput[]
    by: ReportUpdateScalarFieldEnum[] | ReportUpdateScalarFieldEnum
    having?: ReportUpdateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportUpdateCountAggregateInputType | true
    _min?: ReportUpdateMinAggregateInputType
    _max?: ReportUpdateMaxAggregateInputType
  }

  export type ReportUpdateGroupByOutputType = {
    id: string
    reportId: string
    message: string
    status: $Enums.ReportStatus | null
    createdAt: Date
    updatedBy: string | null
    _count: ReportUpdateCountAggregateOutputType | null
    _min: ReportUpdateMinAggregateOutputType | null
    _max: ReportUpdateMaxAggregateOutputType | null
  }

  type GetReportUpdateGroupByPayload<T extends ReportUpdateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportUpdateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportUpdateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportUpdateGroupByOutputType[P]>
            : GetScalarType<T[P], ReportUpdateGroupByOutputType[P]>
        }
      >
    >


  export type ReportUpdateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportUpdate"]>

  export type ReportUpdateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportUpdate"]>

  export type ReportUpdateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportUpdate"]>

  export type ReportUpdateSelectScalar = {
    id?: boolean
    reportId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedBy?: boolean
  }

  export type ReportUpdateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reportId" | "message" | "status" | "createdAt" | "updatedBy", ExtArgs["result"]["reportUpdate"]>
  export type ReportUpdateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }
  export type ReportUpdateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }
  export type ReportUpdateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }

  export type $ReportUpdatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReportUpdate"
    objects: {
      report: Prisma.$ReportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reportId: string
      message: string
      status: $Enums.ReportStatus | null
      createdAt: Date
      updatedBy: string | null
    }, ExtArgs["result"]["reportUpdate"]>
    composites: {}
  }

  type ReportUpdateGetPayload<S extends boolean | null | undefined | ReportUpdateDefaultArgs> = $Result.GetResult<Prisma.$ReportUpdatePayload, S>

  type ReportUpdateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportUpdateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportUpdateCountAggregateInputType | true
    }

  export interface ReportUpdateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReportUpdate'], meta: { name: 'ReportUpdate' } }
    /**
     * Find zero or one ReportUpdate that matches the filter.
     * @param {ReportUpdateFindUniqueArgs} args - Arguments to find a ReportUpdate
     * @example
     * // Get one ReportUpdate
     * const reportUpdate = await prisma.reportUpdate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportUpdateFindUniqueArgs>(args: SelectSubset<T, ReportUpdateFindUniqueArgs<ExtArgs>>): Prisma__ReportUpdateClient<$Result.GetResult<Prisma.$ReportUpdatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReportUpdate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportUpdateFindUniqueOrThrowArgs} args - Arguments to find a ReportUpdate
     * @example
     * // Get one ReportUpdate
     * const reportUpdate = await prisma.reportUpdate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportUpdateFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportUpdateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportUpdateClient<$Result.GetResult<Prisma.$ReportUpdatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReportUpdate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateFindFirstArgs} args - Arguments to find a ReportUpdate
     * @example
     * // Get one ReportUpdate
     * const reportUpdate = await prisma.reportUpdate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportUpdateFindFirstArgs>(args?: SelectSubset<T, ReportUpdateFindFirstArgs<ExtArgs>>): Prisma__ReportUpdateClient<$Result.GetResult<Prisma.$ReportUpdatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReportUpdate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateFindFirstOrThrowArgs} args - Arguments to find a ReportUpdate
     * @example
     * // Get one ReportUpdate
     * const reportUpdate = await prisma.reportUpdate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportUpdateFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportUpdateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportUpdateClient<$Result.GetResult<Prisma.$ReportUpdatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReportUpdates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReportUpdates
     * const reportUpdates = await prisma.reportUpdate.findMany()
     * 
     * // Get first 10 ReportUpdates
     * const reportUpdates = await prisma.reportUpdate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportUpdateWithIdOnly = await prisma.reportUpdate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportUpdateFindManyArgs>(args?: SelectSubset<T, ReportUpdateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReportUpdate.
     * @param {ReportUpdateCreateArgs} args - Arguments to create a ReportUpdate.
     * @example
     * // Create one ReportUpdate
     * const ReportUpdate = await prisma.reportUpdate.create({
     *   data: {
     *     // ... data to create a ReportUpdate
     *   }
     * })
     * 
     */
    create<T extends ReportUpdateCreateArgs>(args: SelectSubset<T, ReportUpdateCreateArgs<ExtArgs>>): Prisma__ReportUpdateClient<$Result.GetResult<Prisma.$ReportUpdatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReportUpdates.
     * @param {ReportUpdateCreateManyArgs} args - Arguments to create many ReportUpdates.
     * @example
     * // Create many ReportUpdates
     * const reportUpdate = await prisma.reportUpdate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportUpdateCreateManyArgs>(args?: SelectSubset<T, ReportUpdateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReportUpdates and returns the data saved in the database.
     * @param {ReportUpdateCreateManyAndReturnArgs} args - Arguments to create many ReportUpdates.
     * @example
     * // Create many ReportUpdates
     * const reportUpdate = await prisma.reportUpdate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReportUpdates and only return the `id`
     * const reportUpdateWithIdOnly = await prisma.reportUpdate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportUpdateCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportUpdateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportUpdatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReportUpdate.
     * @param {ReportUpdateDeleteArgs} args - Arguments to delete one ReportUpdate.
     * @example
     * // Delete one ReportUpdate
     * const ReportUpdate = await prisma.reportUpdate.delete({
     *   where: {
     *     // ... filter to delete one ReportUpdate
     *   }
     * })
     * 
     */
    delete<T extends ReportUpdateDeleteArgs>(args: SelectSubset<T, ReportUpdateDeleteArgs<ExtArgs>>): Prisma__ReportUpdateClient<$Result.GetResult<Prisma.$ReportUpdatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReportUpdate.
     * @param {ReportUpdateUpdateArgs} args - Arguments to update one ReportUpdate.
     * @example
     * // Update one ReportUpdate
     * const reportUpdate = await prisma.reportUpdate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateUpdateArgs>(args: SelectSubset<T, ReportUpdateUpdateArgs<ExtArgs>>): Prisma__ReportUpdateClient<$Result.GetResult<Prisma.$ReportUpdatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReportUpdates.
     * @param {ReportUpdateDeleteManyArgs} args - Arguments to filter ReportUpdates to delete.
     * @example
     * // Delete a few ReportUpdates
     * const { count } = await prisma.reportUpdate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportUpdateDeleteManyArgs>(args?: SelectSubset<T, ReportUpdateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReportUpdates
     * const reportUpdate = await prisma.reportUpdate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateUpdateManyArgs>(args: SelectSubset<T, ReportUpdateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportUpdates and returns the data updated in the database.
     * @param {ReportUpdateUpdateManyAndReturnArgs} args - Arguments to update many ReportUpdates.
     * @example
     * // Update many ReportUpdates
     * const reportUpdate = await prisma.reportUpdate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReportUpdates and only return the `id`
     * const reportUpdateWithIdOnly = await prisma.reportUpdate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReportUpdateUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportUpdatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReportUpdate.
     * @param {ReportUpdateUpsertArgs} args - Arguments to update or create a ReportUpdate.
     * @example
     * // Update or create a ReportUpdate
     * const reportUpdate = await prisma.reportUpdate.upsert({
     *   create: {
     *     // ... data to create a ReportUpdate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReportUpdate we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpdateUpsertArgs>(args: SelectSubset<T, ReportUpdateUpsertArgs<ExtArgs>>): Prisma__ReportUpdateClient<$Result.GetResult<Prisma.$ReportUpdatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReportUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateCountArgs} args - Arguments to filter ReportUpdates to count.
     * @example
     * // Count the number of ReportUpdates
     * const count = await prisma.reportUpdate.count({
     *   where: {
     *     // ... the filter for the ReportUpdates we want to count
     *   }
     * })
    **/
    count<T extends ReportUpdateCountArgs>(
      args?: Subset<T, ReportUpdateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportUpdateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReportUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportUpdateAggregateArgs>(args: Subset<T, ReportUpdateAggregateArgs>): Prisma.PrismaPromise<GetReportUpdateAggregateType<T>>

    /**
     * Group by ReportUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateGroupByArgs} args - Group by arguments.
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
      T extends ReportUpdateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportUpdateGroupByArgs['orderBy'] }
        : { orderBy?: ReportUpdateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportUpdateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportUpdateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReportUpdate model
   */
  readonly fields: ReportUpdateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReportUpdate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportUpdateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends ReportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReportDefaultArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReportUpdate model
   */
  interface ReportUpdateFieldRefs {
    readonly id: FieldRef<"ReportUpdate", 'String'>
    readonly reportId: FieldRef<"ReportUpdate", 'String'>
    readonly message: FieldRef<"ReportUpdate", 'String'>
    readonly status: FieldRef<"ReportUpdate", 'ReportStatus'>
    readonly createdAt: FieldRef<"ReportUpdate", 'DateTime'>
    readonly updatedBy: FieldRef<"ReportUpdate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReportUpdate findUnique
   */
  export type ReportUpdateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUpdate
     */
    select?: ReportUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUpdate
     */
    omit?: ReportUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ReportUpdate to fetch.
     */
    where: ReportUpdateWhereUniqueInput
  }

  /**
   * ReportUpdate findUniqueOrThrow
   */
  export type ReportUpdateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUpdate
     */
    select?: ReportUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUpdate
     */
    omit?: ReportUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ReportUpdate to fetch.
     */
    where: ReportUpdateWhereUniqueInput
  }

  /**
   * ReportUpdate findFirst
   */
  export type ReportUpdateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUpdate
     */
    select?: ReportUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUpdate
     */
    omit?: ReportUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ReportUpdate to fetch.
     */
    where?: ReportUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportUpdates to fetch.
     */
    orderBy?: ReportUpdateOrderByWithRelationInput | ReportUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportUpdates.
     */
    cursor?: ReportUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportUpdates.
     */
    distinct?: ReportUpdateScalarFieldEnum | ReportUpdateScalarFieldEnum[]
  }

  /**
   * ReportUpdate findFirstOrThrow
   */
  export type ReportUpdateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUpdate
     */
    select?: ReportUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUpdate
     */
    omit?: ReportUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ReportUpdate to fetch.
     */
    where?: ReportUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportUpdates to fetch.
     */
    orderBy?: ReportUpdateOrderByWithRelationInput | ReportUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportUpdates.
     */
    cursor?: ReportUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportUpdates.
     */
    distinct?: ReportUpdateScalarFieldEnum | ReportUpdateScalarFieldEnum[]
  }

  /**
   * ReportUpdate findMany
   */
  export type ReportUpdateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUpdate
     */
    select?: ReportUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUpdate
     */
    omit?: ReportUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ReportUpdates to fetch.
     */
    where?: ReportUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportUpdates to fetch.
     */
    orderBy?: ReportUpdateOrderByWithRelationInput | ReportUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReportUpdates.
     */
    cursor?: ReportUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportUpdates.
     */
    skip?: number
    distinct?: ReportUpdateScalarFieldEnum | ReportUpdateScalarFieldEnum[]
  }

  /**
   * ReportUpdate create
   */
  export type ReportUpdateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUpdate
     */
    select?: ReportUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUpdate
     */
    omit?: ReportUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUpdateInclude<ExtArgs> | null
    /**
     * The data needed to create a ReportUpdate.
     */
    data: XOR<ReportUpdateCreateInput, ReportUpdateUncheckedCreateInput>
  }

  /**
   * ReportUpdate createMany
   */
  export type ReportUpdateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReportUpdates.
     */
    data: ReportUpdateCreateManyInput | ReportUpdateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReportUpdate createManyAndReturn
   */
  export type ReportUpdateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUpdate
     */
    select?: ReportUpdateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUpdate
     */
    omit?: ReportUpdateOmit<ExtArgs> | null
    /**
     * The data used to create many ReportUpdates.
     */
    data: ReportUpdateCreateManyInput | ReportUpdateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUpdateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReportUpdate update
   */
  export type ReportUpdateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUpdate
     */
    select?: ReportUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUpdate
     */
    omit?: ReportUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUpdateInclude<ExtArgs> | null
    /**
     * The data needed to update a ReportUpdate.
     */
    data: XOR<ReportUpdateUpdateInput, ReportUpdateUncheckedUpdateInput>
    /**
     * Choose, which ReportUpdate to update.
     */
    where: ReportUpdateWhereUniqueInput
  }

  /**
   * ReportUpdate updateMany
   */
  export type ReportUpdateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReportUpdates.
     */
    data: XOR<ReportUpdateUpdateManyMutationInput, ReportUpdateUncheckedUpdateManyInput>
    /**
     * Filter which ReportUpdates to update
     */
    where?: ReportUpdateWhereInput
    /**
     * Limit how many ReportUpdates to update.
     */
    limit?: number
  }

  /**
   * ReportUpdate updateManyAndReturn
   */
  export type ReportUpdateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUpdate
     */
    select?: ReportUpdateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUpdate
     */
    omit?: ReportUpdateOmit<ExtArgs> | null
    /**
     * The data used to update ReportUpdates.
     */
    data: XOR<ReportUpdateUpdateManyMutationInput, ReportUpdateUncheckedUpdateManyInput>
    /**
     * Filter which ReportUpdates to update
     */
    where?: ReportUpdateWhereInput
    /**
     * Limit how many ReportUpdates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUpdateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReportUpdate upsert
   */
  export type ReportUpdateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUpdate
     */
    select?: ReportUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUpdate
     */
    omit?: ReportUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUpdateInclude<ExtArgs> | null
    /**
     * The filter to search for the ReportUpdate to update in case it exists.
     */
    where: ReportUpdateWhereUniqueInput
    /**
     * In case the ReportUpdate found by the `where` argument doesn't exist, create a new ReportUpdate with this data.
     */
    create: XOR<ReportUpdateCreateInput, ReportUpdateUncheckedCreateInput>
    /**
     * In case the ReportUpdate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateUpdateInput, ReportUpdateUncheckedUpdateInput>
  }

  /**
   * ReportUpdate delete
   */
  export type ReportUpdateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUpdate
     */
    select?: ReportUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUpdate
     */
    omit?: ReportUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUpdateInclude<ExtArgs> | null
    /**
     * Filter which ReportUpdate to delete.
     */
    where: ReportUpdateWhereUniqueInput
  }

  /**
   * ReportUpdate deleteMany
   */
  export type ReportUpdateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportUpdates to delete
     */
    where?: ReportUpdateWhereInput
    /**
     * Limit how many ReportUpdates to delete.
     */
    limit?: number
  }

  /**
   * ReportUpdate without action
   */
  export type ReportUpdateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUpdate
     */
    select?: ReportUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUpdate
     */
    omit?: ReportUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUpdateInclude<ExtArgs> | null
  }


  /**
   * Model SatelliteAnalysis
   */

  export type AggregateSatelliteAnalysis = {
    _count: SatelliteAnalysisCountAggregateOutputType | null
    _avg: SatelliteAnalysisAvgAggregateOutputType | null
    _sum: SatelliteAnalysisSumAggregateOutputType | null
    _min: SatelliteAnalysisMinAggregateOutputType | null
    _max: SatelliteAnalysisMaxAggregateOutputType | null
  }

  export type SatelliteAnalysisAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    confidence: number | null
  }

  export type SatelliteAnalysisSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    confidence: number | null
  }

  export type SatelliteAnalysisMinAggregateOutputType = {
    id: string | null
    reportId: string | null
    analysisType: string | null
    latitude: number | null
    longitude: number | null
    confidence: number | null
    imageUrl: string | null
    analysisDate: Date | null
    createdAt: Date | null
  }

  export type SatelliteAnalysisMaxAggregateOutputType = {
    id: string | null
    reportId: string | null
    analysisType: string | null
    latitude: number | null
    longitude: number | null
    confidence: number | null
    imageUrl: string | null
    analysisDate: Date | null
    createdAt: Date | null
  }

  export type SatelliteAnalysisCountAggregateOutputType = {
    id: number
    reportId: number
    analysisType: number
    latitude: number
    longitude: number
    confidence: number
    detectedChanges: number
    imageUrl: number
    analysisDate: number
    createdAt: number
    _all: number
  }


  export type SatelliteAnalysisAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    confidence?: true
  }

  export type SatelliteAnalysisSumAggregateInputType = {
    latitude?: true
    longitude?: true
    confidence?: true
  }

  export type SatelliteAnalysisMinAggregateInputType = {
    id?: true
    reportId?: true
    analysisType?: true
    latitude?: true
    longitude?: true
    confidence?: true
    imageUrl?: true
    analysisDate?: true
    createdAt?: true
  }

  export type SatelliteAnalysisMaxAggregateInputType = {
    id?: true
    reportId?: true
    analysisType?: true
    latitude?: true
    longitude?: true
    confidence?: true
    imageUrl?: true
    analysisDate?: true
    createdAt?: true
  }

  export type SatelliteAnalysisCountAggregateInputType = {
    id?: true
    reportId?: true
    analysisType?: true
    latitude?: true
    longitude?: true
    confidence?: true
    detectedChanges?: true
    imageUrl?: true
    analysisDate?: true
    createdAt?: true
    _all?: true
  }

  export type SatelliteAnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SatelliteAnalysis to aggregate.
     */
    where?: SatelliteAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SatelliteAnalyses to fetch.
     */
    orderBy?: SatelliteAnalysisOrderByWithRelationInput | SatelliteAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SatelliteAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SatelliteAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SatelliteAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SatelliteAnalyses
    **/
    _count?: true | SatelliteAnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SatelliteAnalysisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SatelliteAnalysisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SatelliteAnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SatelliteAnalysisMaxAggregateInputType
  }

  export type GetSatelliteAnalysisAggregateType<T extends SatelliteAnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateSatelliteAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSatelliteAnalysis[P]>
      : GetScalarType<T[P], AggregateSatelliteAnalysis[P]>
  }




  export type SatelliteAnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SatelliteAnalysisWhereInput
    orderBy?: SatelliteAnalysisOrderByWithAggregationInput | SatelliteAnalysisOrderByWithAggregationInput[]
    by: SatelliteAnalysisScalarFieldEnum[] | SatelliteAnalysisScalarFieldEnum
    having?: SatelliteAnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SatelliteAnalysisCountAggregateInputType | true
    _avg?: SatelliteAnalysisAvgAggregateInputType
    _sum?: SatelliteAnalysisSumAggregateInputType
    _min?: SatelliteAnalysisMinAggregateInputType
    _max?: SatelliteAnalysisMaxAggregateInputType
  }

  export type SatelliteAnalysisGroupByOutputType = {
    id: string
    reportId: string | null
    analysisType: string
    latitude: number
    longitude: number
    confidence: number
    detectedChanges: JsonValue | null
    imageUrl: string | null
    analysisDate: Date
    createdAt: Date
    _count: SatelliteAnalysisCountAggregateOutputType | null
    _avg: SatelliteAnalysisAvgAggregateOutputType | null
    _sum: SatelliteAnalysisSumAggregateOutputType | null
    _min: SatelliteAnalysisMinAggregateOutputType | null
    _max: SatelliteAnalysisMaxAggregateOutputType | null
  }

  type GetSatelliteAnalysisGroupByPayload<T extends SatelliteAnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SatelliteAnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SatelliteAnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SatelliteAnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], SatelliteAnalysisGroupByOutputType[P]>
        }
      >
    >


  export type SatelliteAnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    analysisType?: boolean
    latitude?: boolean
    longitude?: boolean
    confidence?: boolean
    detectedChanges?: boolean
    imageUrl?: boolean
    analysisDate?: boolean
    createdAt?: boolean
    report?: boolean | SatelliteAnalysis$reportArgs<ExtArgs>
  }, ExtArgs["result"]["satelliteAnalysis"]>

  export type SatelliteAnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    analysisType?: boolean
    latitude?: boolean
    longitude?: boolean
    confidence?: boolean
    detectedChanges?: boolean
    imageUrl?: boolean
    analysisDate?: boolean
    createdAt?: boolean
    report?: boolean | SatelliteAnalysis$reportArgs<ExtArgs>
  }, ExtArgs["result"]["satelliteAnalysis"]>

  export type SatelliteAnalysisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    analysisType?: boolean
    latitude?: boolean
    longitude?: boolean
    confidence?: boolean
    detectedChanges?: boolean
    imageUrl?: boolean
    analysisDate?: boolean
    createdAt?: boolean
    report?: boolean | SatelliteAnalysis$reportArgs<ExtArgs>
  }, ExtArgs["result"]["satelliteAnalysis"]>

  export type SatelliteAnalysisSelectScalar = {
    id?: boolean
    reportId?: boolean
    analysisType?: boolean
    latitude?: boolean
    longitude?: boolean
    confidence?: boolean
    detectedChanges?: boolean
    imageUrl?: boolean
    analysisDate?: boolean
    createdAt?: boolean
  }

  export type SatelliteAnalysisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reportId" | "analysisType" | "latitude" | "longitude" | "confidence" | "detectedChanges" | "imageUrl" | "analysisDate" | "createdAt", ExtArgs["result"]["satelliteAnalysis"]>
  export type SatelliteAnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | SatelliteAnalysis$reportArgs<ExtArgs>
  }
  export type SatelliteAnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | SatelliteAnalysis$reportArgs<ExtArgs>
  }
  export type SatelliteAnalysisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | SatelliteAnalysis$reportArgs<ExtArgs>
  }

  export type $SatelliteAnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SatelliteAnalysis"
    objects: {
      report: Prisma.$ReportPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reportId: string | null
      analysisType: string
      latitude: number
      longitude: number
      confidence: number
      detectedChanges: Prisma.JsonValue | null
      imageUrl: string | null
      analysisDate: Date
      createdAt: Date
    }, ExtArgs["result"]["satelliteAnalysis"]>
    composites: {}
  }

  type SatelliteAnalysisGetPayload<S extends boolean | null | undefined | SatelliteAnalysisDefaultArgs> = $Result.GetResult<Prisma.$SatelliteAnalysisPayload, S>

  type SatelliteAnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SatelliteAnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SatelliteAnalysisCountAggregateInputType | true
    }

  export interface SatelliteAnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SatelliteAnalysis'], meta: { name: 'SatelliteAnalysis' } }
    /**
     * Find zero or one SatelliteAnalysis that matches the filter.
     * @param {SatelliteAnalysisFindUniqueArgs} args - Arguments to find a SatelliteAnalysis
     * @example
     * // Get one SatelliteAnalysis
     * const satelliteAnalysis = await prisma.satelliteAnalysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SatelliteAnalysisFindUniqueArgs>(args: SelectSubset<T, SatelliteAnalysisFindUniqueArgs<ExtArgs>>): Prisma__SatelliteAnalysisClient<$Result.GetResult<Prisma.$SatelliteAnalysisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SatelliteAnalysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SatelliteAnalysisFindUniqueOrThrowArgs} args - Arguments to find a SatelliteAnalysis
     * @example
     * // Get one SatelliteAnalysis
     * const satelliteAnalysis = await prisma.satelliteAnalysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SatelliteAnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, SatelliteAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SatelliteAnalysisClient<$Result.GetResult<Prisma.$SatelliteAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SatelliteAnalysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatelliteAnalysisFindFirstArgs} args - Arguments to find a SatelliteAnalysis
     * @example
     * // Get one SatelliteAnalysis
     * const satelliteAnalysis = await prisma.satelliteAnalysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SatelliteAnalysisFindFirstArgs>(args?: SelectSubset<T, SatelliteAnalysisFindFirstArgs<ExtArgs>>): Prisma__SatelliteAnalysisClient<$Result.GetResult<Prisma.$SatelliteAnalysisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SatelliteAnalysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatelliteAnalysisFindFirstOrThrowArgs} args - Arguments to find a SatelliteAnalysis
     * @example
     * // Get one SatelliteAnalysis
     * const satelliteAnalysis = await prisma.satelliteAnalysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SatelliteAnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, SatelliteAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__SatelliteAnalysisClient<$Result.GetResult<Prisma.$SatelliteAnalysisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SatelliteAnalyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatelliteAnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SatelliteAnalyses
     * const satelliteAnalyses = await prisma.satelliteAnalysis.findMany()
     * 
     * // Get first 10 SatelliteAnalyses
     * const satelliteAnalyses = await prisma.satelliteAnalysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const satelliteAnalysisWithIdOnly = await prisma.satelliteAnalysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SatelliteAnalysisFindManyArgs>(args?: SelectSubset<T, SatelliteAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SatelliteAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SatelliteAnalysis.
     * @param {SatelliteAnalysisCreateArgs} args - Arguments to create a SatelliteAnalysis.
     * @example
     * // Create one SatelliteAnalysis
     * const SatelliteAnalysis = await prisma.satelliteAnalysis.create({
     *   data: {
     *     // ... data to create a SatelliteAnalysis
     *   }
     * })
     * 
     */
    create<T extends SatelliteAnalysisCreateArgs>(args: SelectSubset<T, SatelliteAnalysisCreateArgs<ExtArgs>>): Prisma__SatelliteAnalysisClient<$Result.GetResult<Prisma.$SatelliteAnalysisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SatelliteAnalyses.
     * @param {SatelliteAnalysisCreateManyArgs} args - Arguments to create many SatelliteAnalyses.
     * @example
     * // Create many SatelliteAnalyses
     * const satelliteAnalysis = await prisma.satelliteAnalysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SatelliteAnalysisCreateManyArgs>(args?: SelectSubset<T, SatelliteAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SatelliteAnalyses and returns the data saved in the database.
     * @param {SatelliteAnalysisCreateManyAndReturnArgs} args - Arguments to create many SatelliteAnalyses.
     * @example
     * // Create many SatelliteAnalyses
     * const satelliteAnalysis = await prisma.satelliteAnalysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SatelliteAnalyses and only return the `id`
     * const satelliteAnalysisWithIdOnly = await prisma.satelliteAnalysis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SatelliteAnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, SatelliteAnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SatelliteAnalysisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SatelliteAnalysis.
     * @param {SatelliteAnalysisDeleteArgs} args - Arguments to delete one SatelliteAnalysis.
     * @example
     * // Delete one SatelliteAnalysis
     * const SatelliteAnalysis = await prisma.satelliteAnalysis.delete({
     *   where: {
     *     // ... filter to delete one SatelliteAnalysis
     *   }
     * })
     * 
     */
    delete<T extends SatelliteAnalysisDeleteArgs>(args: SelectSubset<T, SatelliteAnalysisDeleteArgs<ExtArgs>>): Prisma__SatelliteAnalysisClient<$Result.GetResult<Prisma.$SatelliteAnalysisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SatelliteAnalysis.
     * @param {SatelliteAnalysisUpdateArgs} args - Arguments to update one SatelliteAnalysis.
     * @example
     * // Update one SatelliteAnalysis
     * const satelliteAnalysis = await prisma.satelliteAnalysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SatelliteAnalysisUpdateArgs>(args: SelectSubset<T, SatelliteAnalysisUpdateArgs<ExtArgs>>): Prisma__SatelliteAnalysisClient<$Result.GetResult<Prisma.$SatelliteAnalysisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SatelliteAnalyses.
     * @param {SatelliteAnalysisDeleteManyArgs} args - Arguments to filter SatelliteAnalyses to delete.
     * @example
     * // Delete a few SatelliteAnalyses
     * const { count } = await prisma.satelliteAnalysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SatelliteAnalysisDeleteManyArgs>(args?: SelectSubset<T, SatelliteAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SatelliteAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatelliteAnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SatelliteAnalyses
     * const satelliteAnalysis = await prisma.satelliteAnalysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SatelliteAnalysisUpdateManyArgs>(args: SelectSubset<T, SatelliteAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SatelliteAnalyses and returns the data updated in the database.
     * @param {SatelliteAnalysisUpdateManyAndReturnArgs} args - Arguments to update many SatelliteAnalyses.
     * @example
     * // Update many SatelliteAnalyses
     * const satelliteAnalysis = await prisma.satelliteAnalysis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SatelliteAnalyses and only return the `id`
     * const satelliteAnalysisWithIdOnly = await prisma.satelliteAnalysis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SatelliteAnalysisUpdateManyAndReturnArgs>(args: SelectSubset<T, SatelliteAnalysisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SatelliteAnalysisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SatelliteAnalysis.
     * @param {SatelliteAnalysisUpsertArgs} args - Arguments to update or create a SatelliteAnalysis.
     * @example
     * // Update or create a SatelliteAnalysis
     * const satelliteAnalysis = await prisma.satelliteAnalysis.upsert({
     *   create: {
     *     // ... data to create a SatelliteAnalysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SatelliteAnalysis we want to update
     *   }
     * })
     */
    upsert<T extends SatelliteAnalysisUpsertArgs>(args: SelectSubset<T, SatelliteAnalysisUpsertArgs<ExtArgs>>): Prisma__SatelliteAnalysisClient<$Result.GetResult<Prisma.$SatelliteAnalysisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SatelliteAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatelliteAnalysisCountArgs} args - Arguments to filter SatelliteAnalyses to count.
     * @example
     * // Count the number of SatelliteAnalyses
     * const count = await prisma.satelliteAnalysis.count({
     *   where: {
     *     // ... the filter for the SatelliteAnalyses we want to count
     *   }
     * })
    **/
    count<T extends SatelliteAnalysisCountArgs>(
      args?: Subset<T, SatelliteAnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SatelliteAnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SatelliteAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatelliteAnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SatelliteAnalysisAggregateArgs>(args: Subset<T, SatelliteAnalysisAggregateArgs>): Prisma.PrismaPromise<GetSatelliteAnalysisAggregateType<T>>

    /**
     * Group by SatelliteAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatelliteAnalysisGroupByArgs} args - Group by arguments.
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
      T extends SatelliteAnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SatelliteAnalysisGroupByArgs['orderBy'] }
        : { orderBy?: SatelliteAnalysisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SatelliteAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSatelliteAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SatelliteAnalysis model
   */
  readonly fields: SatelliteAnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SatelliteAnalysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SatelliteAnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends SatelliteAnalysis$reportArgs<ExtArgs> = {}>(args?: Subset<T, SatelliteAnalysis$reportArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SatelliteAnalysis model
   */
  interface SatelliteAnalysisFieldRefs {
    readonly id: FieldRef<"SatelliteAnalysis", 'String'>
    readonly reportId: FieldRef<"SatelliteAnalysis", 'String'>
    readonly analysisType: FieldRef<"SatelliteAnalysis", 'String'>
    readonly latitude: FieldRef<"SatelliteAnalysis", 'Float'>
    readonly longitude: FieldRef<"SatelliteAnalysis", 'Float'>
    readonly confidence: FieldRef<"SatelliteAnalysis", 'Float'>
    readonly detectedChanges: FieldRef<"SatelliteAnalysis", 'Json'>
    readonly imageUrl: FieldRef<"SatelliteAnalysis", 'String'>
    readonly analysisDate: FieldRef<"SatelliteAnalysis", 'DateTime'>
    readonly createdAt: FieldRef<"SatelliteAnalysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SatelliteAnalysis findUnique
   */
  export type SatelliteAnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatelliteAnalysis
     */
    select?: SatelliteAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatelliteAnalysis
     */
    omit?: SatelliteAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatelliteAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which SatelliteAnalysis to fetch.
     */
    where: SatelliteAnalysisWhereUniqueInput
  }

  /**
   * SatelliteAnalysis findUniqueOrThrow
   */
  export type SatelliteAnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatelliteAnalysis
     */
    select?: SatelliteAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatelliteAnalysis
     */
    omit?: SatelliteAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatelliteAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which SatelliteAnalysis to fetch.
     */
    where: SatelliteAnalysisWhereUniqueInput
  }

  /**
   * SatelliteAnalysis findFirst
   */
  export type SatelliteAnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatelliteAnalysis
     */
    select?: SatelliteAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatelliteAnalysis
     */
    omit?: SatelliteAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatelliteAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which SatelliteAnalysis to fetch.
     */
    where?: SatelliteAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SatelliteAnalyses to fetch.
     */
    orderBy?: SatelliteAnalysisOrderByWithRelationInput | SatelliteAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SatelliteAnalyses.
     */
    cursor?: SatelliteAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SatelliteAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SatelliteAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SatelliteAnalyses.
     */
    distinct?: SatelliteAnalysisScalarFieldEnum | SatelliteAnalysisScalarFieldEnum[]
  }

  /**
   * SatelliteAnalysis findFirstOrThrow
   */
  export type SatelliteAnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatelliteAnalysis
     */
    select?: SatelliteAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatelliteAnalysis
     */
    omit?: SatelliteAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatelliteAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which SatelliteAnalysis to fetch.
     */
    where?: SatelliteAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SatelliteAnalyses to fetch.
     */
    orderBy?: SatelliteAnalysisOrderByWithRelationInput | SatelliteAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SatelliteAnalyses.
     */
    cursor?: SatelliteAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SatelliteAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SatelliteAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SatelliteAnalyses.
     */
    distinct?: SatelliteAnalysisScalarFieldEnum | SatelliteAnalysisScalarFieldEnum[]
  }

  /**
   * SatelliteAnalysis findMany
   */
  export type SatelliteAnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatelliteAnalysis
     */
    select?: SatelliteAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatelliteAnalysis
     */
    omit?: SatelliteAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatelliteAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which SatelliteAnalyses to fetch.
     */
    where?: SatelliteAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SatelliteAnalyses to fetch.
     */
    orderBy?: SatelliteAnalysisOrderByWithRelationInput | SatelliteAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SatelliteAnalyses.
     */
    cursor?: SatelliteAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SatelliteAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SatelliteAnalyses.
     */
    skip?: number
    distinct?: SatelliteAnalysisScalarFieldEnum | SatelliteAnalysisScalarFieldEnum[]
  }

  /**
   * SatelliteAnalysis create
   */
  export type SatelliteAnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatelliteAnalysis
     */
    select?: SatelliteAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatelliteAnalysis
     */
    omit?: SatelliteAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatelliteAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a SatelliteAnalysis.
     */
    data: XOR<SatelliteAnalysisCreateInput, SatelliteAnalysisUncheckedCreateInput>
  }

  /**
   * SatelliteAnalysis createMany
   */
  export type SatelliteAnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SatelliteAnalyses.
     */
    data: SatelliteAnalysisCreateManyInput | SatelliteAnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SatelliteAnalysis createManyAndReturn
   */
  export type SatelliteAnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatelliteAnalysis
     */
    select?: SatelliteAnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SatelliteAnalysis
     */
    omit?: SatelliteAnalysisOmit<ExtArgs> | null
    /**
     * The data used to create many SatelliteAnalyses.
     */
    data: SatelliteAnalysisCreateManyInput | SatelliteAnalysisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatelliteAnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SatelliteAnalysis update
   */
  export type SatelliteAnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatelliteAnalysis
     */
    select?: SatelliteAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatelliteAnalysis
     */
    omit?: SatelliteAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatelliteAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a SatelliteAnalysis.
     */
    data: XOR<SatelliteAnalysisUpdateInput, SatelliteAnalysisUncheckedUpdateInput>
    /**
     * Choose, which SatelliteAnalysis to update.
     */
    where: SatelliteAnalysisWhereUniqueInput
  }

  /**
   * SatelliteAnalysis updateMany
   */
  export type SatelliteAnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SatelliteAnalyses.
     */
    data: XOR<SatelliteAnalysisUpdateManyMutationInput, SatelliteAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which SatelliteAnalyses to update
     */
    where?: SatelliteAnalysisWhereInput
    /**
     * Limit how many SatelliteAnalyses to update.
     */
    limit?: number
  }

  /**
   * SatelliteAnalysis updateManyAndReturn
   */
  export type SatelliteAnalysisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatelliteAnalysis
     */
    select?: SatelliteAnalysisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SatelliteAnalysis
     */
    omit?: SatelliteAnalysisOmit<ExtArgs> | null
    /**
     * The data used to update SatelliteAnalyses.
     */
    data: XOR<SatelliteAnalysisUpdateManyMutationInput, SatelliteAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which SatelliteAnalyses to update
     */
    where?: SatelliteAnalysisWhereInput
    /**
     * Limit how many SatelliteAnalyses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatelliteAnalysisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SatelliteAnalysis upsert
   */
  export type SatelliteAnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatelliteAnalysis
     */
    select?: SatelliteAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatelliteAnalysis
     */
    omit?: SatelliteAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatelliteAnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the SatelliteAnalysis to update in case it exists.
     */
    where: SatelliteAnalysisWhereUniqueInput
    /**
     * In case the SatelliteAnalysis found by the `where` argument doesn't exist, create a new SatelliteAnalysis with this data.
     */
    create: XOR<SatelliteAnalysisCreateInput, SatelliteAnalysisUncheckedCreateInput>
    /**
     * In case the SatelliteAnalysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SatelliteAnalysisUpdateInput, SatelliteAnalysisUncheckedUpdateInput>
  }

  /**
   * SatelliteAnalysis delete
   */
  export type SatelliteAnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatelliteAnalysis
     */
    select?: SatelliteAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatelliteAnalysis
     */
    omit?: SatelliteAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatelliteAnalysisInclude<ExtArgs> | null
    /**
     * Filter which SatelliteAnalysis to delete.
     */
    where: SatelliteAnalysisWhereUniqueInput
  }

  /**
   * SatelliteAnalysis deleteMany
   */
  export type SatelliteAnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SatelliteAnalyses to delete
     */
    where?: SatelliteAnalysisWhereInput
    /**
     * Limit how many SatelliteAnalyses to delete.
     */
    limit?: number
  }

  /**
   * SatelliteAnalysis.report
   */
  export type SatelliteAnalysis$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
  }

  /**
   * SatelliteAnalysis without action
   */
  export type SatelliteAnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatelliteAnalysis
     */
    select?: SatelliteAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SatelliteAnalysis
     */
    omit?: SatelliteAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SatelliteAnalysisInclude<ExtArgs> | null
  }


  /**
   * Model FloodRiskArea
   */

  export type AggregateFloodRiskArea = {
    _count: FloodRiskAreaCountAggregateOutputType | null
    _min: FloodRiskAreaMinAggregateOutputType | null
    _max: FloodRiskAreaMaxAggregateOutputType | null
  }

  export type FloodRiskAreaMinAggregateOutputType = {
    id: string | null
    name: string | null
    riskLevel: string | null
    lastUpdated: Date | null
  }

  export type FloodRiskAreaMaxAggregateOutputType = {
    id: string | null
    name: string | null
    riskLevel: string | null
    lastUpdated: Date | null
  }

  export type FloodRiskAreaCountAggregateOutputType = {
    id: number
    name: number
    coordinates: number
    riskLevel: number
    lastUpdated: number
    predictions: number
    _all: number
  }


  export type FloodRiskAreaMinAggregateInputType = {
    id?: true
    name?: true
    riskLevel?: true
    lastUpdated?: true
  }

  export type FloodRiskAreaMaxAggregateInputType = {
    id?: true
    name?: true
    riskLevel?: true
    lastUpdated?: true
  }

  export type FloodRiskAreaCountAggregateInputType = {
    id?: true
    name?: true
    coordinates?: true
    riskLevel?: true
    lastUpdated?: true
    predictions?: true
    _all?: true
  }

  export type FloodRiskAreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FloodRiskArea to aggregate.
     */
    where?: FloodRiskAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FloodRiskAreas to fetch.
     */
    orderBy?: FloodRiskAreaOrderByWithRelationInput | FloodRiskAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FloodRiskAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FloodRiskAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FloodRiskAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FloodRiskAreas
    **/
    _count?: true | FloodRiskAreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FloodRiskAreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FloodRiskAreaMaxAggregateInputType
  }

  export type GetFloodRiskAreaAggregateType<T extends FloodRiskAreaAggregateArgs> = {
        [P in keyof T & keyof AggregateFloodRiskArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFloodRiskArea[P]>
      : GetScalarType<T[P], AggregateFloodRiskArea[P]>
  }




  export type FloodRiskAreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FloodRiskAreaWhereInput
    orderBy?: FloodRiskAreaOrderByWithAggregationInput | FloodRiskAreaOrderByWithAggregationInput[]
    by: FloodRiskAreaScalarFieldEnum[] | FloodRiskAreaScalarFieldEnum
    having?: FloodRiskAreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FloodRiskAreaCountAggregateInputType | true
    _min?: FloodRiskAreaMinAggregateInputType
    _max?: FloodRiskAreaMaxAggregateInputType
  }

  export type FloodRiskAreaGroupByOutputType = {
    id: string
    name: string
    coordinates: JsonValue
    riskLevel: string
    lastUpdated: Date
    predictions: JsonValue | null
    _count: FloodRiskAreaCountAggregateOutputType | null
    _min: FloodRiskAreaMinAggregateOutputType | null
    _max: FloodRiskAreaMaxAggregateOutputType | null
  }

  type GetFloodRiskAreaGroupByPayload<T extends FloodRiskAreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FloodRiskAreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FloodRiskAreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FloodRiskAreaGroupByOutputType[P]>
            : GetScalarType<T[P], FloodRiskAreaGroupByOutputType[P]>
        }
      >
    >


  export type FloodRiskAreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    coordinates?: boolean
    riskLevel?: boolean
    lastUpdated?: boolean
    predictions?: boolean
  }, ExtArgs["result"]["floodRiskArea"]>

  export type FloodRiskAreaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    coordinates?: boolean
    riskLevel?: boolean
    lastUpdated?: boolean
    predictions?: boolean
  }, ExtArgs["result"]["floodRiskArea"]>

  export type FloodRiskAreaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    coordinates?: boolean
    riskLevel?: boolean
    lastUpdated?: boolean
    predictions?: boolean
  }, ExtArgs["result"]["floodRiskArea"]>

  export type FloodRiskAreaSelectScalar = {
    id?: boolean
    name?: boolean
    coordinates?: boolean
    riskLevel?: boolean
    lastUpdated?: boolean
    predictions?: boolean
  }

  export type FloodRiskAreaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "coordinates" | "riskLevel" | "lastUpdated" | "predictions", ExtArgs["result"]["floodRiskArea"]>

  export type $FloodRiskAreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FloodRiskArea"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      coordinates: Prisma.JsonValue
      riskLevel: string
      lastUpdated: Date
      predictions: Prisma.JsonValue | null
    }, ExtArgs["result"]["floodRiskArea"]>
    composites: {}
  }

  type FloodRiskAreaGetPayload<S extends boolean | null | undefined | FloodRiskAreaDefaultArgs> = $Result.GetResult<Prisma.$FloodRiskAreaPayload, S>

  type FloodRiskAreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FloodRiskAreaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FloodRiskAreaCountAggregateInputType | true
    }

  export interface FloodRiskAreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FloodRiskArea'], meta: { name: 'FloodRiskArea' } }
    /**
     * Find zero or one FloodRiskArea that matches the filter.
     * @param {FloodRiskAreaFindUniqueArgs} args - Arguments to find a FloodRiskArea
     * @example
     * // Get one FloodRiskArea
     * const floodRiskArea = await prisma.floodRiskArea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FloodRiskAreaFindUniqueArgs>(args: SelectSubset<T, FloodRiskAreaFindUniqueArgs<ExtArgs>>): Prisma__FloodRiskAreaClient<$Result.GetResult<Prisma.$FloodRiskAreaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FloodRiskArea that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FloodRiskAreaFindUniqueOrThrowArgs} args - Arguments to find a FloodRiskArea
     * @example
     * // Get one FloodRiskArea
     * const floodRiskArea = await prisma.floodRiskArea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FloodRiskAreaFindUniqueOrThrowArgs>(args: SelectSubset<T, FloodRiskAreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FloodRiskAreaClient<$Result.GetResult<Prisma.$FloodRiskAreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FloodRiskArea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloodRiskAreaFindFirstArgs} args - Arguments to find a FloodRiskArea
     * @example
     * // Get one FloodRiskArea
     * const floodRiskArea = await prisma.floodRiskArea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FloodRiskAreaFindFirstArgs>(args?: SelectSubset<T, FloodRiskAreaFindFirstArgs<ExtArgs>>): Prisma__FloodRiskAreaClient<$Result.GetResult<Prisma.$FloodRiskAreaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FloodRiskArea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloodRiskAreaFindFirstOrThrowArgs} args - Arguments to find a FloodRiskArea
     * @example
     * // Get one FloodRiskArea
     * const floodRiskArea = await prisma.floodRiskArea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FloodRiskAreaFindFirstOrThrowArgs>(args?: SelectSubset<T, FloodRiskAreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FloodRiskAreaClient<$Result.GetResult<Prisma.$FloodRiskAreaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FloodRiskAreas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloodRiskAreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FloodRiskAreas
     * const floodRiskAreas = await prisma.floodRiskArea.findMany()
     * 
     * // Get first 10 FloodRiskAreas
     * const floodRiskAreas = await prisma.floodRiskArea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const floodRiskAreaWithIdOnly = await prisma.floodRiskArea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FloodRiskAreaFindManyArgs>(args?: SelectSubset<T, FloodRiskAreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloodRiskAreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FloodRiskArea.
     * @param {FloodRiskAreaCreateArgs} args - Arguments to create a FloodRiskArea.
     * @example
     * // Create one FloodRiskArea
     * const FloodRiskArea = await prisma.floodRiskArea.create({
     *   data: {
     *     // ... data to create a FloodRiskArea
     *   }
     * })
     * 
     */
    create<T extends FloodRiskAreaCreateArgs>(args: SelectSubset<T, FloodRiskAreaCreateArgs<ExtArgs>>): Prisma__FloodRiskAreaClient<$Result.GetResult<Prisma.$FloodRiskAreaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FloodRiskAreas.
     * @param {FloodRiskAreaCreateManyArgs} args - Arguments to create many FloodRiskAreas.
     * @example
     * // Create many FloodRiskAreas
     * const floodRiskArea = await prisma.floodRiskArea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FloodRiskAreaCreateManyArgs>(args?: SelectSubset<T, FloodRiskAreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FloodRiskAreas and returns the data saved in the database.
     * @param {FloodRiskAreaCreateManyAndReturnArgs} args - Arguments to create many FloodRiskAreas.
     * @example
     * // Create many FloodRiskAreas
     * const floodRiskArea = await prisma.floodRiskArea.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FloodRiskAreas and only return the `id`
     * const floodRiskAreaWithIdOnly = await prisma.floodRiskArea.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FloodRiskAreaCreateManyAndReturnArgs>(args?: SelectSubset<T, FloodRiskAreaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloodRiskAreaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FloodRiskArea.
     * @param {FloodRiskAreaDeleteArgs} args - Arguments to delete one FloodRiskArea.
     * @example
     * // Delete one FloodRiskArea
     * const FloodRiskArea = await prisma.floodRiskArea.delete({
     *   where: {
     *     // ... filter to delete one FloodRiskArea
     *   }
     * })
     * 
     */
    delete<T extends FloodRiskAreaDeleteArgs>(args: SelectSubset<T, FloodRiskAreaDeleteArgs<ExtArgs>>): Prisma__FloodRiskAreaClient<$Result.GetResult<Prisma.$FloodRiskAreaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FloodRiskArea.
     * @param {FloodRiskAreaUpdateArgs} args - Arguments to update one FloodRiskArea.
     * @example
     * // Update one FloodRiskArea
     * const floodRiskArea = await prisma.floodRiskArea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FloodRiskAreaUpdateArgs>(args: SelectSubset<T, FloodRiskAreaUpdateArgs<ExtArgs>>): Prisma__FloodRiskAreaClient<$Result.GetResult<Prisma.$FloodRiskAreaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FloodRiskAreas.
     * @param {FloodRiskAreaDeleteManyArgs} args - Arguments to filter FloodRiskAreas to delete.
     * @example
     * // Delete a few FloodRiskAreas
     * const { count } = await prisma.floodRiskArea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FloodRiskAreaDeleteManyArgs>(args?: SelectSubset<T, FloodRiskAreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FloodRiskAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloodRiskAreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FloodRiskAreas
     * const floodRiskArea = await prisma.floodRiskArea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FloodRiskAreaUpdateManyArgs>(args: SelectSubset<T, FloodRiskAreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FloodRiskAreas and returns the data updated in the database.
     * @param {FloodRiskAreaUpdateManyAndReturnArgs} args - Arguments to update many FloodRiskAreas.
     * @example
     * // Update many FloodRiskAreas
     * const floodRiskArea = await prisma.floodRiskArea.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FloodRiskAreas and only return the `id`
     * const floodRiskAreaWithIdOnly = await prisma.floodRiskArea.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FloodRiskAreaUpdateManyAndReturnArgs>(args: SelectSubset<T, FloodRiskAreaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloodRiskAreaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FloodRiskArea.
     * @param {FloodRiskAreaUpsertArgs} args - Arguments to update or create a FloodRiskArea.
     * @example
     * // Update or create a FloodRiskArea
     * const floodRiskArea = await prisma.floodRiskArea.upsert({
     *   create: {
     *     // ... data to create a FloodRiskArea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FloodRiskArea we want to update
     *   }
     * })
     */
    upsert<T extends FloodRiskAreaUpsertArgs>(args: SelectSubset<T, FloodRiskAreaUpsertArgs<ExtArgs>>): Prisma__FloodRiskAreaClient<$Result.GetResult<Prisma.$FloodRiskAreaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FloodRiskAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloodRiskAreaCountArgs} args - Arguments to filter FloodRiskAreas to count.
     * @example
     * // Count the number of FloodRiskAreas
     * const count = await prisma.floodRiskArea.count({
     *   where: {
     *     // ... the filter for the FloodRiskAreas we want to count
     *   }
     * })
    **/
    count<T extends FloodRiskAreaCountArgs>(
      args?: Subset<T, FloodRiskAreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FloodRiskAreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FloodRiskArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloodRiskAreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FloodRiskAreaAggregateArgs>(args: Subset<T, FloodRiskAreaAggregateArgs>): Prisma.PrismaPromise<GetFloodRiskAreaAggregateType<T>>

    /**
     * Group by FloodRiskArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloodRiskAreaGroupByArgs} args - Group by arguments.
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
      T extends FloodRiskAreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FloodRiskAreaGroupByArgs['orderBy'] }
        : { orderBy?: FloodRiskAreaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FloodRiskAreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFloodRiskAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FloodRiskArea model
   */
  readonly fields: FloodRiskAreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FloodRiskArea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FloodRiskAreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FloodRiskArea model
   */
  interface FloodRiskAreaFieldRefs {
    readonly id: FieldRef<"FloodRiskArea", 'String'>
    readonly name: FieldRef<"FloodRiskArea", 'String'>
    readonly coordinates: FieldRef<"FloodRiskArea", 'Json'>
    readonly riskLevel: FieldRef<"FloodRiskArea", 'String'>
    readonly lastUpdated: FieldRef<"FloodRiskArea", 'DateTime'>
    readonly predictions: FieldRef<"FloodRiskArea", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * FloodRiskArea findUnique
   */
  export type FloodRiskAreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloodRiskArea
     */
    select?: FloodRiskAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FloodRiskArea
     */
    omit?: FloodRiskAreaOmit<ExtArgs> | null
    /**
     * Filter, which FloodRiskArea to fetch.
     */
    where: FloodRiskAreaWhereUniqueInput
  }

  /**
   * FloodRiskArea findUniqueOrThrow
   */
  export type FloodRiskAreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloodRiskArea
     */
    select?: FloodRiskAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FloodRiskArea
     */
    omit?: FloodRiskAreaOmit<ExtArgs> | null
    /**
     * Filter, which FloodRiskArea to fetch.
     */
    where: FloodRiskAreaWhereUniqueInput
  }

  /**
   * FloodRiskArea findFirst
   */
  export type FloodRiskAreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloodRiskArea
     */
    select?: FloodRiskAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FloodRiskArea
     */
    omit?: FloodRiskAreaOmit<ExtArgs> | null
    /**
     * Filter, which FloodRiskArea to fetch.
     */
    where?: FloodRiskAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FloodRiskAreas to fetch.
     */
    orderBy?: FloodRiskAreaOrderByWithRelationInput | FloodRiskAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FloodRiskAreas.
     */
    cursor?: FloodRiskAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FloodRiskAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FloodRiskAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FloodRiskAreas.
     */
    distinct?: FloodRiskAreaScalarFieldEnum | FloodRiskAreaScalarFieldEnum[]
  }

  /**
   * FloodRiskArea findFirstOrThrow
   */
  export type FloodRiskAreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloodRiskArea
     */
    select?: FloodRiskAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FloodRiskArea
     */
    omit?: FloodRiskAreaOmit<ExtArgs> | null
    /**
     * Filter, which FloodRiskArea to fetch.
     */
    where?: FloodRiskAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FloodRiskAreas to fetch.
     */
    orderBy?: FloodRiskAreaOrderByWithRelationInput | FloodRiskAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FloodRiskAreas.
     */
    cursor?: FloodRiskAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FloodRiskAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FloodRiskAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FloodRiskAreas.
     */
    distinct?: FloodRiskAreaScalarFieldEnum | FloodRiskAreaScalarFieldEnum[]
  }

  /**
   * FloodRiskArea findMany
   */
  export type FloodRiskAreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloodRiskArea
     */
    select?: FloodRiskAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FloodRiskArea
     */
    omit?: FloodRiskAreaOmit<ExtArgs> | null
    /**
     * Filter, which FloodRiskAreas to fetch.
     */
    where?: FloodRiskAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FloodRiskAreas to fetch.
     */
    orderBy?: FloodRiskAreaOrderByWithRelationInput | FloodRiskAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FloodRiskAreas.
     */
    cursor?: FloodRiskAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FloodRiskAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FloodRiskAreas.
     */
    skip?: number
    distinct?: FloodRiskAreaScalarFieldEnum | FloodRiskAreaScalarFieldEnum[]
  }

  /**
   * FloodRiskArea create
   */
  export type FloodRiskAreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloodRiskArea
     */
    select?: FloodRiskAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FloodRiskArea
     */
    omit?: FloodRiskAreaOmit<ExtArgs> | null
    /**
     * The data needed to create a FloodRiskArea.
     */
    data: XOR<FloodRiskAreaCreateInput, FloodRiskAreaUncheckedCreateInput>
  }

  /**
   * FloodRiskArea createMany
   */
  export type FloodRiskAreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FloodRiskAreas.
     */
    data: FloodRiskAreaCreateManyInput | FloodRiskAreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FloodRiskArea createManyAndReturn
   */
  export type FloodRiskAreaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloodRiskArea
     */
    select?: FloodRiskAreaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FloodRiskArea
     */
    omit?: FloodRiskAreaOmit<ExtArgs> | null
    /**
     * The data used to create many FloodRiskAreas.
     */
    data: FloodRiskAreaCreateManyInput | FloodRiskAreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FloodRiskArea update
   */
  export type FloodRiskAreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloodRiskArea
     */
    select?: FloodRiskAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FloodRiskArea
     */
    omit?: FloodRiskAreaOmit<ExtArgs> | null
    /**
     * The data needed to update a FloodRiskArea.
     */
    data: XOR<FloodRiskAreaUpdateInput, FloodRiskAreaUncheckedUpdateInput>
    /**
     * Choose, which FloodRiskArea to update.
     */
    where: FloodRiskAreaWhereUniqueInput
  }

  /**
   * FloodRiskArea updateMany
   */
  export type FloodRiskAreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FloodRiskAreas.
     */
    data: XOR<FloodRiskAreaUpdateManyMutationInput, FloodRiskAreaUncheckedUpdateManyInput>
    /**
     * Filter which FloodRiskAreas to update
     */
    where?: FloodRiskAreaWhereInput
    /**
     * Limit how many FloodRiskAreas to update.
     */
    limit?: number
  }

  /**
   * FloodRiskArea updateManyAndReturn
   */
  export type FloodRiskAreaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloodRiskArea
     */
    select?: FloodRiskAreaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FloodRiskArea
     */
    omit?: FloodRiskAreaOmit<ExtArgs> | null
    /**
     * The data used to update FloodRiskAreas.
     */
    data: XOR<FloodRiskAreaUpdateManyMutationInput, FloodRiskAreaUncheckedUpdateManyInput>
    /**
     * Filter which FloodRiskAreas to update
     */
    where?: FloodRiskAreaWhereInput
    /**
     * Limit how many FloodRiskAreas to update.
     */
    limit?: number
  }

  /**
   * FloodRiskArea upsert
   */
  export type FloodRiskAreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloodRiskArea
     */
    select?: FloodRiskAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FloodRiskArea
     */
    omit?: FloodRiskAreaOmit<ExtArgs> | null
    /**
     * The filter to search for the FloodRiskArea to update in case it exists.
     */
    where: FloodRiskAreaWhereUniqueInput
    /**
     * In case the FloodRiskArea found by the `where` argument doesn't exist, create a new FloodRiskArea with this data.
     */
    create: XOR<FloodRiskAreaCreateInput, FloodRiskAreaUncheckedCreateInput>
    /**
     * In case the FloodRiskArea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FloodRiskAreaUpdateInput, FloodRiskAreaUncheckedUpdateInput>
  }

  /**
   * FloodRiskArea delete
   */
  export type FloodRiskAreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloodRiskArea
     */
    select?: FloodRiskAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FloodRiskArea
     */
    omit?: FloodRiskAreaOmit<ExtArgs> | null
    /**
     * Filter which FloodRiskArea to delete.
     */
    where: FloodRiskAreaWhereUniqueInput
  }

  /**
   * FloodRiskArea deleteMany
   */
  export type FloodRiskAreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FloodRiskAreas to delete
     */
    where?: FloodRiskAreaWhereInput
    /**
     * Limit how many FloodRiskAreas to delete.
     */
    limit?: number
  }

  /**
   * FloodRiskArea without action
   */
  export type FloodRiskAreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloodRiskArea
     */
    select?: FloodRiskAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FloodRiskArea
     */
    omit?: FloodRiskAreaOmit<ExtArgs> | null
  }


  /**
   * Model DevelopmentPlan
   */

  export type AggregateDevelopmentPlan = {
    _count: DevelopmentPlanCountAggregateOutputType | null
    _min: DevelopmentPlanMinAggregateOutputType | null
    _max: DevelopmentPlanMaxAggregateOutputType | null
  }

  export type DevelopmentPlanMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: string | null
    approvedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DevelopmentPlanMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: string | null
    approvedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DevelopmentPlanCountAggregateOutputType = {
    id: number
    title: number
    description: number
    coordinates: number
    status: number
    approvedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DevelopmentPlanMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    approvedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DevelopmentPlanMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    approvedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DevelopmentPlanCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    coordinates?: true
    status?: true
    approvedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DevelopmentPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DevelopmentPlan to aggregate.
     */
    where?: DevelopmentPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DevelopmentPlans to fetch.
     */
    orderBy?: DevelopmentPlanOrderByWithRelationInput | DevelopmentPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DevelopmentPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DevelopmentPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DevelopmentPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DevelopmentPlans
    **/
    _count?: true | DevelopmentPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DevelopmentPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DevelopmentPlanMaxAggregateInputType
  }

  export type GetDevelopmentPlanAggregateType<T extends DevelopmentPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateDevelopmentPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevelopmentPlan[P]>
      : GetScalarType<T[P], AggregateDevelopmentPlan[P]>
  }




  export type DevelopmentPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DevelopmentPlanWhereInput
    orderBy?: DevelopmentPlanOrderByWithAggregationInput | DevelopmentPlanOrderByWithAggregationInput[]
    by: DevelopmentPlanScalarFieldEnum[] | DevelopmentPlanScalarFieldEnum
    having?: DevelopmentPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DevelopmentPlanCountAggregateInputType | true
    _min?: DevelopmentPlanMinAggregateInputType
    _max?: DevelopmentPlanMaxAggregateInputType
  }

  export type DevelopmentPlanGroupByOutputType = {
    id: string
    title: string
    description: string
    coordinates: JsonValue
    status: string
    approvedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: DevelopmentPlanCountAggregateOutputType | null
    _min: DevelopmentPlanMinAggregateOutputType | null
    _max: DevelopmentPlanMaxAggregateOutputType | null
  }

  type GetDevelopmentPlanGroupByPayload<T extends DevelopmentPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DevelopmentPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DevelopmentPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DevelopmentPlanGroupByOutputType[P]>
            : GetScalarType<T[P], DevelopmentPlanGroupByOutputType[P]>
        }
      >
    >


  export type DevelopmentPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    coordinates?: boolean
    status?: boolean
    approvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["developmentPlan"]>

  export type DevelopmentPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    coordinates?: boolean
    status?: boolean
    approvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["developmentPlan"]>

  export type DevelopmentPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    coordinates?: boolean
    status?: boolean
    approvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["developmentPlan"]>

  export type DevelopmentPlanSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    coordinates?: boolean
    status?: boolean
    approvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DevelopmentPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "coordinates" | "status" | "approvedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["developmentPlan"]>

  export type $DevelopmentPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DevelopmentPlan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      coordinates: Prisma.JsonValue
      status: string
      approvedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["developmentPlan"]>
    composites: {}
  }

  type DevelopmentPlanGetPayload<S extends boolean | null | undefined | DevelopmentPlanDefaultArgs> = $Result.GetResult<Prisma.$DevelopmentPlanPayload, S>

  type DevelopmentPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DevelopmentPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DevelopmentPlanCountAggregateInputType | true
    }

  export interface DevelopmentPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DevelopmentPlan'], meta: { name: 'DevelopmentPlan' } }
    /**
     * Find zero or one DevelopmentPlan that matches the filter.
     * @param {DevelopmentPlanFindUniqueArgs} args - Arguments to find a DevelopmentPlan
     * @example
     * // Get one DevelopmentPlan
     * const developmentPlan = await prisma.developmentPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DevelopmentPlanFindUniqueArgs>(args: SelectSubset<T, DevelopmentPlanFindUniqueArgs<ExtArgs>>): Prisma__DevelopmentPlanClient<$Result.GetResult<Prisma.$DevelopmentPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DevelopmentPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DevelopmentPlanFindUniqueOrThrowArgs} args - Arguments to find a DevelopmentPlan
     * @example
     * // Get one DevelopmentPlan
     * const developmentPlan = await prisma.developmentPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DevelopmentPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, DevelopmentPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DevelopmentPlanClient<$Result.GetResult<Prisma.$DevelopmentPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DevelopmentPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevelopmentPlanFindFirstArgs} args - Arguments to find a DevelopmentPlan
     * @example
     * // Get one DevelopmentPlan
     * const developmentPlan = await prisma.developmentPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DevelopmentPlanFindFirstArgs>(args?: SelectSubset<T, DevelopmentPlanFindFirstArgs<ExtArgs>>): Prisma__DevelopmentPlanClient<$Result.GetResult<Prisma.$DevelopmentPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DevelopmentPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevelopmentPlanFindFirstOrThrowArgs} args - Arguments to find a DevelopmentPlan
     * @example
     * // Get one DevelopmentPlan
     * const developmentPlan = await prisma.developmentPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DevelopmentPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, DevelopmentPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__DevelopmentPlanClient<$Result.GetResult<Prisma.$DevelopmentPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DevelopmentPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevelopmentPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DevelopmentPlans
     * const developmentPlans = await prisma.developmentPlan.findMany()
     * 
     * // Get first 10 DevelopmentPlans
     * const developmentPlans = await prisma.developmentPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const developmentPlanWithIdOnly = await prisma.developmentPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DevelopmentPlanFindManyArgs>(args?: SelectSubset<T, DevelopmentPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevelopmentPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DevelopmentPlan.
     * @param {DevelopmentPlanCreateArgs} args - Arguments to create a DevelopmentPlan.
     * @example
     * // Create one DevelopmentPlan
     * const DevelopmentPlan = await prisma.developmentPlan.create({
     *   data: {
     *     // ... data to create a DevelopmentPlan
     *   }
     * })
     * 
     */
    create<T extends DevelopmentPlanCreateArgs>(args: SelectSubset<T, DevelopmentPlanCreateArgs<ExtArgs>>): Prisma__DevelopmentPlanClient<$Result.GetResult<Prisma.$DevelopmentPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DevelopmentPlans.
     * @param {DevelopmentPlanCreateManyArgs} args - Arguments to create many DevelopmentPlans.
     * @example
     * // Create many DevelopmentPlans
     * const developmentPlan = await prisma.developmentPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DevelopmentPlanCreateManyArgs>(args?: SelectSubset<T, DevelopmentPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DevelopmentPlans and returns the data saved in the database.
     * @param {DevelopmentPlanCreateManyAndReturnArgs} args - Arguments to create many DevelopmentPlans.
     * @example
     * // Create many DevelopmentPlans
     * const developmentPlan = await prisma.developmentPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DevelopmentPlans and only return the `id`
     * const developmentPlanWithIdOnly = await prisma.developmentPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DevelopmentPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, DevelopmentPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevelopmentPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DevelopmentPlan.
     * @param {DevelopmentPlanDeleteArgs} args - Arguments to delete one DevelopmentPlan.
     * @example
     * // Delete one DevelopmentPlan
     * const DevelopmentPlan = await prisma.developmentPlan.delete({
     *   where: {
     *     // ... filter to delete one DevelopmentPlan
     *   }
     * })
     * 
     */
    delete<T extends DevelopmentPlanDeleteArgs>(args: SelectSubset<T, DevelopmentPlanDeleteArgs<ExtArgs>>): Prisma__DevelopmentPlanClient<$Result.GetResult<Prisma.$DevelopmentPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DevelopmentPlan.
     * @param {DevelopmentPlanUpdateArgs} args - Arguments to update one DevelopmentPlan.
     * @example
     * // Update one DevelopmentPlan
     * const developmentPlan = await prisma.developmentPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DevelopmentPlanUpdateArgs>(args: SelectSubset<T, DevelopmentPlanUpdateArgs<ExtArgs>>): Prisma__DevelopmentPlanClient<$Result.GetResult<Prisma.$DevelopmentPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DevelopmentPlans.
     * @param {DevelopmentPlanDeleteManyArgs} args - Arguments to filter DevelopmentPlans to delete.
     * @example
     * // Delete a few DevelopmentPlans
     * const { count } = await prisma.developmentPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DevelopmentPlanDeleteManyArgs>(args?: SelectSubset<T, DevelopmentPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DevelopmentPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevelopmentPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DevelopmentPlans
     * const developmentPlan = await prisma.developmentPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DevelopmentPlanUpdateManyArgs>(args: SelectSubset<T, DevelopmentPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DevelopmentPlans and returns the data updated in the database.
     * @param {DevelopmentPlanUpdateManyAndReturnArgs} args - Arguments to update many DevelopmentPlans.
     * @example
     * // Update many DevelopmentPlans
     * const developmentPlan = await prisma.developmentPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DevelopmentPlans and only return the `id`
     * const developmentPlanWithIdOnly = await prisma.developmentPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DevelopmentPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, DevelopmentPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevelopmentPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DevelopmentPlan.
     * @param {DevelopmentPlanUpsertArgs} args - Arguments to update or create a DevelopmentPlan.
     * @example
     * // Update or create a DevelopmentPlan
     * const developmentPlan = await prisma.developmentPlan.upsert({
     *   create: {
     *     // ... data to create a DevelopmentPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DevelopmentPlan we want to update
     *   }
     * })
     */
    upsert<T extends DevelopmentPlanUpsertArgs>(args: SelectSubset<T, DevelopmentPlanUpsertArgs<ExtArgs>>): Prisma__DevelopmentPlanClient<$Result.GetResult<Prisma.$DevelopmentPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DevelopmentPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevelopmentPlanCountArgs} args - Arguments to filter DevelopmentPlans to count.
     * @example
     * // Count the number of DevelopmentPlans
     * const count = await prisma.developmentPlan.count({
     *   where: {
     *     // ... the filter for the DevelopmentPlans we want to count
     *   }
     * })
    **/
    count<T extends DevelopmentPlanCountArgs>(
      args?: Subset<T, DevelopmentPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DevelopmentPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DevelopmentPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevelopmentPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DevelopmentPlanAggregateArgs>(args: Subset<T, DevelopmentPlanAggregateArgs>): Prisma.PrismaPromise<GetDevelopmentPlanAggregateType<T>>

    /**
     * Group by DevelopmentPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevelopmentPlanGroupByArgs} args - Group by arguments.
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
      T extends DevelopmentPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DevelopmentPlanGroupByArgs['orderBy'] }
        : { orderBy?: DevelopmentPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DevelopmentPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevelopmentPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DevelopmentPlan model
   */
  readonly fields: DevelopmentPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DevelopmentPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DevelopmentPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DevelopmentPlan model
   */
  interface DevelopmentPlanFieldRefs {
    readonly id: FieldRef<"DevelopmentPlan", 'String'>
    readonly title: FieldRef<"DevelopmentPlan", 'String'>
    readonly description: FieldRef<"DevelopmentPlan", 'String'>
    readonly coordinates: FieldRef<"DevelopmentPlan", 'Json'>
    readonly status: FieldRef<"DevelopmentPlan", 'String'>
    readonly approvedBy: FieldRef<"DevelopmentPlan", 'String'>
    readonly createdAt: FieldRef<"DevelopmentPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"DevelopmentPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DevelopmentPlan findUnique
   */
  export type DevelopmentPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevelopmentPlan
     */
    select?: DevelopmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DevelopmentPlan
     */
    omit?: DevelopmentPlanOmit<ExtArgs> | null
    /**
     * Filter, which DevelopmentPlan to fetch.
     */
    where: DevelopmentPlanWhereUniqueInput
  }

  /**
   * DevelopmentPlan findUniqueOrThrow
   */
  export type DevelopmentPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevelopmentPlan
     */
    select?: DevelopmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DevelopmentPlan
     */
    omit?: DevelopmentPlanOmit<ExtArgs> | null
    /**
     * Filter, which DevelopmentPlan to fetch.
     */
    where: DevelopmentPlanWhereUniqueInput
  }

  /**
   * DevelopmentPlan findFirst
   */
  export type DevelopmentPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevelopmentPlan
     */
    select?: DevelopmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DevelopmentPlan
     */
    omit?: DevelopmentPlanOmit<ExtArgs> | null
    /**
     * Filter, which DevelopmentPlan to fetch.
     */
    where?: DevelopmentPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DevelopmentPlans to fetch.
     */
    orderBy?: DevelopmentPlanOrderByWithRelationInput | DevelopmentPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DevelopmentPlans.
     */
    cursor?: DevelopmentPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DevelopmentPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DevelopmentPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DevelopmentPlans.
     */
    distinct?: DevelopmentPlanScalarFieldEnum | DevelopmentPlanScalarFieldEnum[]
  }

  /**
   * DevelopmentPlan findFirstOrThrow
   */
  export type DevelopmentPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevelopmentPlan
     */
    select?: DevelopmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DevelopmentPlan
     */
    omit?: DevelopmentPlanOmit<ExtArgs> | null
    /**
     * Filter, which DevelopmentPlan to fetch.
     */
    where?: DevelopmentPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DevelopmentPlans to fetch.
     */
    orderBy?: DevelopmentPlanOrderByWithRelationInput | DevelopmentPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DevelopmentPlans.
     */
    cursor?: DevelopmentPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DevelopmentPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DevelopmentPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DevelopmentPlans.
     */
    distinct?: DevelopmentPlanScalarFieldEnum | DevelopmentPlanScalarFieldEnum[]
  }

  /**
   * DevelopmentPlan findMany
   */
  export type DevelopmentPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevelopmentPlan
     */
    select?: DevelopmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DevelopmentPlan
     */
    omit?: DevelopmentPlanOmit<ExtArgs> | null
    /**
     * Filter, which DevelopmentPlans to fetch.
     */
    where?: DevelopmentPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DevelopmentPlans to fetch.
     */
    orderBy?: DevelopmentPlanOrderByWithRelationInput | DevelopmentPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DevelopmentPlans.
     */
    cursor?: DevelopmentPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DevelopmentPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DevelopmentPlans.
     */
    skip?: number
    distinct?: DevelopmentPlanScalarFieldEnum | DevelopmentPlanScalarFieldEnum[]
  }

  /**
   * DevelopmentPlan create
   */
  export type DevelopmentPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevelopmentPlan
     */
    select?: DevelopmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DevelopmentPlan
     */
    omit?: DevelopmentPlanOmit<ExtArgs> | null
    /**
     * The data needed to create a DevelopmentPlan.
     */
    data: XOR<DevelopmentPlanCreateInput, DevelopmentPlanUncheckedCreateInput>
  }

  /**
   * DevelopmentPlan createMany
   */
  export type DevelopmentPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DevelopmentPlans.
     */
    data: DevelopmentPlanCreateManyInput | DevelopmentPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DevelopmentPlan createManyAndReturn
   */
  export type DevelopmentPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevelopmentPlan
     */
    select?: DevelopmentPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DevelopmentPlan
     */
    omit?: DevelopmentPlanOmit<ExtArgs> | null
    /**
     * The data used to create many DevelopmentPlans.
     */
    data: DevelopmentPlanCreateManyInput | DevelopmentPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DevelopmentPlan update
   */
  export type DevelopmentPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevelopmentPlan
     */
    select?: DevelopmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DevelopmentPlan
     */
    omit?: DevelopmentPlanOmit<ExtArgs> | null
    /**
     * The data needed to update a DevelopmentPlan.
     */
    data: XOR<DevelopmentPlanUpdateInput, DevelopmentPlanUncheckedUpdateInput>
    /**
     * Choose, which DevelopmentPlan to update.
     */
    where: DevelopmentPlanWhereUniqueInput
  }

  /**
   * DevelopmentPlan updateMany
   */
  export type DevelopmentPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DevelopmentPlans.
     */
    data: XOR<DevelopmentPlanUpdateManyMutationInput, DevelopmentPlanUncheckedUpdateManyInput>
    /**
     * Filter which DevelopmentPlans to update
     */
    where?: DevelopmentPlanWhereInput
    /**
     * Limit how many DevelopmentPlans to update.
     */
    limit?: number
  }

  /**
   * DevelopmentPlan updateManyAndReturn
   */
  export type DevelopmentPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevelopmentPlan
     */
    select?: DevelopmentPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DevelopmentPlan
     */
    omit?: DevelopmentPlanOmit<ExtArgs> | null
    /**
     * The data used to update DevelopmentPlans.
     */
    data: XOR<DevelopmentPlanUpdateManyMutationInput, DevelopmentPlanUncheckedUpdateManyInput>
    /**
     * Filter which DevelopmentPlans to update
     */
    where?: DevelopmentPlanWhereInput
    /**
     * Limit how many DevelopmentPlans to update.
     */
    limit?: number
  }

  /**
   * DevelopmentPlan upsert
   */
  export type DevelopmentPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevelopmentPlan
     */
    select?: DevelopmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DevelopmentPlan
     */
    omit?: DevelopmentPlanOmit<ExtArgs> | null
    /**
     * The filter to search for the DevelopmentPlan to update in case it exists.
     */
    where: DevelopmentPlanWhereUniqueInput
    /**
     * In case the DevelopmentPlan found by the `where` argument doesn't exist, create a new DevelopmentPlan with this data.
     */
    create: XOR<DevelopmentPlanCreateInput, DevelopmentPlanUncheckedCreateInput>
    /**
     * In case the DevelopmentPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DevelopmentPlanUpdateInput, DevelopmentPlanUncheckedUpdateInput>
  }

  /**
   * DevelopmentPlan delete
   */
  export type DevelopmentPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevelopmentPlan
     */
    select?: DevelopmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DevelopmentPlan
     */
    omit?: DevelopmentPlanOmit<ExtArgs> | null
    /**
     * Filter which DevelopmentPlan to delete.
     */
    where: DevelopmentPlanWhereUniqueInput
  }

  /**
   * DevelopmentPlan deleteMany
   */
  export type DevelopmentPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DevelopmentPlans to delete
     */
    where?: DevelopmentPlanWhereInput
    /**
     * Limit how many DevelopmentPlans to delete.
     */
    limit?: number
  }

  /**
   * DevelopmentPlan without action
   */
  export type DevelopmentPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevelopmentPlan
     */
    select?: DevelopmentPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DevelopmentPlan
     */
    omit?: DevelopmentPlanOmit<ExtArgs> | null
  }


  /**
   * Model PublicConsultation
   */

  export type AggregatePublicConsultation = {
    _count: PublicConsultationCountAggregateOutputType | null
    _min: PublicConsultationMinAggregateOutputType | null
    _max: PublicConsultationMaxAggregateOutputType | null
  }

  export type PublicConsultationMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublicConsultationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublicConsultationCountAggregateOutputType = {
    id: number
    title: number
    description: number
    startDate: number
    endDate: number
    status: number
    coordinates: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PublicConsultationMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublicConsultationMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublicConsultationCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    status?: true
    coordinates?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PublicConsultationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicConsultation to aggregate.
     */
    where?: PublicConsultationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicConsultations to fetch.
     */
    orderBy?: PublicConsultationOrderByWithRelationInput | PublicConsultationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicConsultationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicConsultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicConsultations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublicConsultations
    **/
    _count?: true | PublicConsultationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicConsultationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicConsultationMaxAggregateInputType
  }

  export type GetPublicConsultationAggregateType<T extends PublicConsultationAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicConsultation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicConsultation[P]>
      : GetScalarType<T[P], AggregatePublicConsultation[P]>
  }




  export type PublicConsultationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicConsultationWhereInput
    orderBy?: PublicConsultationOrderByWithAggregationInput | PublicConsultationOrderByWithAggregationInput[]
    by: PublicConsultationScalarFieldEnum[] | PublicConsultationScalarFieldEnum
    having?: PublicConsultationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicConsultationCountAggregateInputType | true
    _min?: PublicConsultationMinAggregateInputType
    _max?: PublicConsultationMaxAggregateInputType
  }

  export type PublicConsultationGroupByOutputType = {
    id: string
    title: string
    description: string
    startDate: Date
    endDate: Date
    status: string
    coordinates: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: PublicConsultationCountAggregateOutputType | null
    _min: PublicConsultationMinAggregateOutputType | null
    _max: PublicConsultationMaxAggregateOutputType | null
  }

  type GetPublicConsultationGroupByPayload<T extends PublicConsultationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicConsultationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicConsultationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicConsultationGroupByOutputType[P]>
            : GetScalarType<T[P], PublicConsultationGroupByOutputType[P]>
        }
      >
    >


  export type PublicConsultationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    coordinates?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    votes?: boolean | PublicConsultation$votesArgs<ExtArgs>
    comments?: boolean | PublicConsultation$commentsArgs<ExtArgs>
    _count?: boolean | PublicConsultationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicConsultation"]>

  export type PublicConsultationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    coordinates?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["publicConsultation"]>

  export type PublicConsultationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    coordinates?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["publicConsultation"]>

  export type PublicConsultationSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    coordinates?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PublicConsultationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "startDate" | "endDate" | "status" | "coordinates" | "createdAt" | "updatedAt", ExtArgs["result"]["publicConsultation"]>
  export type PublicConsultationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | PublicConsultation$votesArgs<ExtArgs>
    comments?: boolean | PublicConsultation$commentsArgs<ExtArgs>
    _count?: boolean | PublicConsultationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PublicConsultationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PublicConsultationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PublicConsultationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PublicConsultation"
    objects: {
      votes: Prisma.$ConsultationVotePayload<ExtArgs>[]
      comments: Prisma.$ConsultationCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      startDate: Date
      endDate: Date
      status: string
      coordinates: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["publicConsultation"]>
    composites: {}
  }

  type PublicConsultationGetPayload<S extends boolean | null | undefined | PublicConsultationDefaultArgs> = $Result.GetResult<Prisma.$PublicConsultationPayload, S>

  type PublicConsultationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublicConsultationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicConsultationCountAggregateInputType | true
    }

  export interface PublicConsultationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PublicConsultation'], meta: { name: 'PublicConsultation' } }
    /**
     * Find zero or one PublicConsultation that matches the filter.
     * @param {PublicConsultationFindUniqueArgs} args - Arguments to find a PublicConsultation
     * @example
     * // Get one PublicConsultation
     * const publicConsultation = await prisma.publicConsultation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicConsultationFindUniqueArgs>(args: SelectSubset<T, PublicConsultationFindUniqueArgs<ExtArgs>>): Prisma__PublicConsultationClient<$Result.GetResult<Prisma.$PublicConsultationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PublicConsultation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublicConsultationFindUniqueOrThrowArgs} args - Arguments to find a PublicConsultation
     * @example
     * // Get one PublicConsultation
     * const publicConsultation = await prisma.publicConsultation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicConsultationFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicConsultationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicConsultationClient<$Result.GetResult<Prisma.$PublicConsultationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicConsultation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicConsultationFindFirstArgs} args - Arguments to find a PublicConsultation
     * @example
     * // Get one PublicConsultation
     * const publicConsultation = await prisma.publicConsultation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicConsultationFindFirstArgs>(args?: SelectSubset<T, PublicConsultationFindFirstArgs<ExtArgs>>): Prisma__PublicConsultationClient<$Result.GetResult<Prisma.$PublicConsultationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicConsultation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicConsultationFindFirstOrThrowArgs} args - Arguments to find a PublicConsultation
     * @example
     * // Get one PublicConsultation
     * const publicConsultation = await prisma.publicConsultation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicConsultationFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicConsultationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicConsultationClient<$Result.GetResult<Prisma.$PublicConsultationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PublicConsultations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicConsultationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublicConsultations
     * const publicConsultations = await prisma.publicConsultation.findMany()
     * 
     * // Get first 10 PublicConsultations
     * const publicConsultations = await prisma.publicConsultation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicConsultationWithIdOnly = await prisma.publicConsultation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicConsultationFindManyArgs>(args?: SelectSubset<T, PublicConsultationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicConsultationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PublicConsultation.
     * @param {PublicConsultationCreateArgs} args - Arguments to create a PublicConsultation.
     * @example
     * // Create one PublicConsultation
     * const PublicConsultation = await prisma.publicConsultation.create({
     *   data: {
     *     // ... data to create a PublicConsultation
     *   }
     * })
     * 
     */
    create<T extends PublicConsultationCreateArgs>(args: SelectSubset<T, PublicConsultationCreateArgs<ExtArgs>>): Prisma__PublicConsultationClient<$Result.GetResult<Prisma.$PublicConsultationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PublicConsultations.
     * @param {PublicConsultationCreateManyArgs} args - Arguments to create many PublicConsultations.
     * @example
     * // Create many PublicConsultations
     * const publicConsultation = await prisma.publicConsultation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicConsultationCreateManyArgs>(args?: SelectSubset<T, PublicConsultationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PublicConsultations and returns the data saved in the database.
     * @param {PublicConsultationCreateManyAndReturnArgs} args - Arguments to create many PublicConsultations.
     * @example
     * // Create many PublicConsultations
     * const publicConsultation = await prisma.publicConsultation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PublicConsultations and only return the `id`
     * const publicConsultationWithIdOnly = await prisma.publicConsultation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublicConsultationCreateManyAndReturnArgs>(args?: SelectSubset<T, PublicConsultationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicConsultationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PublicConsultation.
     * @param {PublicConsultationDeleteArgs} args - Arguments to delete one PublicConsultation.
     * @example
     * // Delete one PublicConsultation
     * const PublicConsultation = await prisma.publicConsultation.delete({
     *   where: {
     *     // ... filter to delete one PublicConsultation
     *   }
     * })
     * 
     */
    delete<T extends PublicConsultationDeleteArgs>(args: SelectSubset<T, PublicConsultationDeleteArgs<ExtArgs>>): Prisma__PublicConsultationClient<$Result.GetResult<Prisma.$PublicConsultationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PublicConsultation.
     * @param {PublicConsultationUpdateArgs} args - Arguments to update one PublicConsultation.
     * @example
     * // Update one PublicConsultation
     * const publicConsultation = await prisma.publicConsultation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicConsultationUpdateArgs>(args: SelectSubset<T, PublicConsultationUpdateArgs<ExtArgs>>): Prisma__PublicConsultationClient<$Result.GetResult<Prisma.$PublicConsultationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PublicConsultations.
     * @param {PublicConsultationDeleteManyArgs} args - Arguments to filter PublicConsultations to delete.
     * @example
     * // Delete a few PublicConsultations
     * const { count } = await prisma.publicConsultation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicConsultationDeleteManyArgs>(args?: SelectSubset<T, PublicConsultationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicConsultations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicConsultationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublicConsultations
     * const publicConsultation = await prisma.publicConsultation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicConsultationUpdateManyArgs>(args: SelectSubset<T, PublicConsultationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicConsultations and returns the data updated in the database.
     * @param {PublicConsultationUpdateManyAndReturnArgs} args - Arguments to update many PublicConsultations.
     * @example
     * // Update many PublicConsultations
     * const publicConsultation = await prisma.publicConsultation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PublicConsultations and only return the `id`
     * const publicConsultationWithIdOnly = await prisma.publicConsultation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PublicConsultationUpdateManyAndReturnArgs>(args: SelectSubset<T, PublicConsultationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicConsultationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PublicConsultation.
     * @param {PublicConsultationUpsertArgs} args - Arguments to update or create a PublicConsultation.
     * @example
     * // Update or create a PublicConsultation
     * const publicConsultation = await prisma.publicConsultation.upsert({
     *   create: {
     *     // ... data to create a PublicConsultation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublicConsultation we want to update
     *   }
     * })
     */
    upsert<T extends PublicConsultationUpsertArgs>(args: SelectSubset<T, PublicConsultationUpsertArgs<ExtArgs>>): Prisma__PublicConsultationClient<$Result.GetResult<Prisma.$PublicConsultationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PublicConsultations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicConsultationCountArgs} args - Arguments to filter PublicConsultations to count.
     * @example
     * // Count the number of PublicConsultations
     * const count = await prisma.publicConsultation.count({
     *   where: {
     *     // ... the filter for the PublicConsultations we want to count
     *   }
     * })
    **/
    count<T extends PublicConsultationCountArgs>(
      args?: Subset<T, PublicConsultationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicConsultationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublicConsultation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicConsultationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PublicConsultationAggregateArgs>(args: Subset<T, PublicConsultationAggregateArgs>): Prisma.PrismaPromise<GetPublicConsultationAggregateType<T>>

    /**
     * Group by PublicConsultation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicConsultationGroupByArgs} args - Group by arguments.
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
      T extends PublicConsultationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicConsultationGroupByArgs['orderBy'] }
        : { orderBy?: PublicConsultationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PublicConsultationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicConsultationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PublicConsultation model
   */
  readonly fields: PublicConsultationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PublicConsultation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicConsultationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    votes<T extends PublicConsultation$votesArgs<ExtArgs> = {}>(args?: Subset<T, PublicConsultation$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends PublicConsultation$commentsArgs<ExtArgs> = {}>(args?: Subset<T, PublicConsultation$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PublicConsultation model
   */
  interface PublicConsultationFieldRefs {
    readonly id: FieldRef<"PublicConsultation", 'String'>
    readonly title: FieldRef<"PublicConsultation", 'String'>
    readonly description: FieldRef<"PublicConsultation", 'String'>
    readonly startDate: FieldRef<"PublicConsultation", 'DateTime'>
    readonly endDate: FieldRef<"PublicConsultation", 'DateTime'>
    readonly status: FieldRef<"PublicConsultation", 'String'>
    readonly coordinates: FieldRef<"PublicConsultation", 'Json'>
    readonly createdAt: FieldRef<"PublicConsultation", 'DateTime'>
    readonly updatedAt: FieldRef<"PublicConsultation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PublicConsultation findUnique
   */
  export type PublicConsultationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicConsultation
     */
    select?: PublicConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicConsultation
     */
    omit?: PublicConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicConsultationInclude<ExtArgs> | null
    /**
     * Filter, which PublicConsultation to fetch.
     */
    where: PublicConsultationWhereUniqueInput
  }

  /**
   * PublicConsultation findUniqueOrThrow
   */
  export type PublicConsultationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicConsultation
     */
    select?: PublicConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicConsultation
     */
    omit?: PublicConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicConsultationInclude<ExtArgs> | null
    /**
     * Filter, which PublicConsultation to fetch.
     */
    where: PublicConsultationWhereUniqueInput
  }

  /**
   * PublicConsultation findFirst
   */
  export type PublicConsultationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicConsultation
     */
    select?: PublicConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicConsultation
     */
    omit?: PublicConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicConsultationInclude<ExtArgs> | null
    /**
     * Filter, which PublicConsultation to fetch.
     */
    where?: PublicConsultationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicConsultations to fetch.
     */
    orderBy?: PublicConsultationOrderByWithRelationInput | PublicConsultationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicConsultations.
     */
    cursor?: PublicConsultationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicConsultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicConsultations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicConsultations.
     */
    distinct?: PublicConsultationScalarFieldEnum | PublicConsultationScalarFieldEnum[]
  }

  /**
   * PublicConsultation findFirstOrThrow
   */
  export type PublicConsultationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicConsultation
     */
    select?: PublicConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicConsultation
     */
    omit?: PublicConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicConsultationInclude<ExtArgs> | null
    /**
     * Filter, which PublicConsultation to fetch.
     */
    where?: PublicConsultationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicConsultations to fetch.
     */
    orderBy?: PublicConsultationOrderByWithRelationInput | PublicConsultationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicConsultations.
     */
    cursor?: PublicConsultationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicConsultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicConsultations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicConsultations.
     */
    distinct?: PublicConsultationScalarFieldEnum | PublicConsultationScalarFieldEnum[]
  }

  /**
   * PublicConsultation findMany
   */
  export type PublicConsultationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicConsultation
     */
    select?: PublicConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicConsultation
     */
    omit?: PublicConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicConsultationInclude<ExtArgs> | null
    /**
     * Filter, which PublicConsultations to fetch.
     */
    where?: PublicConsultationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicConsultations to fetch.
     */
    orderBy?: PublicConsultationOrderByWithRelationInput | PublicConsultationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublicConsultations.
     */
    cursor?: PublicConsultationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicConsultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicConsultations.
     */
    skip?: number
    distinct?: PublicConsultationScalarFieldEnum | PublicConsultationScalarFieldEnum[]
  }

  /**
   * PublicConsultation create
   */
  export type PublicConsultationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicConsultation
     */
    select?: PublicConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicConsultation
     */
    omit?: PublicConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicConsultationInclude<ExtArgs> | null
    /**
     * The data needed to create a PublicConsultation.
     */
    data: XOR<PublicConsultationCreateInput, PublicConsultationUncheckedCreateInput>
  }

  /**
   * PublicConsultation createMany
   */
  export type PublicConsultationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PublicConsultations.
     */
    data: PublicConsultationCreateManyInput | PublicConsultationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PublicConsultation createManyAndReturn
   */
  export type PublicConsultationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicConsultation
     */
    select?: PublicConsultationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublicConsultation
     */
    omit?: PublicConsultationOmit<ExtArgs> | null
    /**
     * The data used to create many PublicConsultations.
     */
    data: PublicConsultationCreateManyInput | PublicConsultationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PublicConsultation update
   */
  export type PublicConsultationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicConsultation
     */
    select?: PublicConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicConsultation
     */
    omit?: PublicConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicConsultationInclude<ExtArgs> | null
    /**
     * The data needed to update a PublicConsultation.
     */
    data: XOR<PublicConsultationUpdateInput, PublicConsultationUncheckedUpdateInput>
    /**
     * Choose, which PublicConsultation to update.
     */
    where: PublicConsultationWhereUniqueInput
  }

  /**
   * PublicConsultation updateMany
   */
  export type PublicConsultationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PublicConsultations.
     */
    data: XOR<PublicConsultationUpdateManyMutationInput, PublicConsultationUncheckedUpdateManyInput>
    /**
     * Filter which PublicConsultations to update
     */
    where?: PublicConsultationWhereInput
    /**
     * Limit how many PublicConsultations to update.
     */
    limit?: number
  }

  /**
   * PublicConsultation updateManyAndReturn
   */
  export type PublicConsultationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicConsultation
     */
    select?: PublicConsultationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublicConsultation
     */
    omit?: PublicConsultationOmit<ExtArgs> | null
    /**
     * The data used to update PublicConsultations.
     */
    data: XOR<PublicConsultationUpdateManyMutationInput, PublicConsultationUncheckedUpdateManyInput>
    /**
     * Filter which PublicConsultations to update
     */
    where?: PublicConsultationWhereInput
    /**
     * Limit how many PublicConsultations to update.
     */
    limit?: number
  }

  /**
   * PublicConsultation upsert
   */
  export type PublicConsultationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicConsultation
     */
    select?: PublicConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicConsultation
     */
    omit?: PublicConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicConsultationInclude<ExtArgs> | null
    /**
     * The filter to search for the PublicConsultation to update in case it exists.
     */
    where: PublicConsultationWhereUniqueInput
    /**
     * In case the PublicConsultation found by the `where` argument doesn't exist, create a new PublicConsultation with this data.
     */
    create: XOR<PublicConsultationCreateInput, PublicConsultationUncheckedCreateInput>
    /**
     * In case the PublicConsultation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicConsultationUpdateInput, PublicConsultationUncheckedUpdateInput>
  }

  /**
   * PublicConsultation delete
   */
  export type PublicConsultationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicConsultation
     */
    select?: PublicConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicConsultation
     */
    omit?: PublicConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicConsultationInclude<ExtArgs> | null
    /**
     * Filter which PublicConsultation to delete.
     */
    where: PublicConsultationWhereUniqueInput
  }

  /**
   * PublicConsultation deleteMany
   */
  export type PublicConsultationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicConsultations to delete
     */
    where?: PublicConsultationWhereInput
    /**
     * Limit how many PublicConsultations to delete.
     */
    limit?: number
  }

  /**
   * PublicConsultation.votes
   */
  export type PublicConsultation$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVote
     */
    select?: ConsultationVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVote
     */
    omit?: ConsultationVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationVoteInclude<ExtArgs> | null
    where?: ConsultationVoteWhereInput
    orderBy?: ConsultationVoteOrderByWithRelationInput | ConsultationVoteOrderByWithRelationInput[]
    cursor?: ConsultationVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultationVoteScalarFieldEnum | ConsultationVoteScalarFieldEnum[]
  }

  /**
   * PublicConsultation.comments
   */
  export type PublicConsultation$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationComment
     */
    select?: ConsultationCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationComment
     */
    omit?: ConsultationCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationCommentInclude<ExtArgs> | null
    where?: ConsultationCommentWhereInput
    orderBy?: ConsultationCommentOrderByWithRelationInput | ConsultationCommentOrderByWithRelationInput[]
    cursor?: ConsultationCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultationCommentScalarFieldEnum | ConsultationCommentScalarFieldEnum[]
  }

  /**
   * PublicConsultation without action
   */
  export type PublicConsultationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicConsultation
     */
    select?: PublicConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicConsultation
     */
    omit?: PublicConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicConsultationInclude<ExtArgs> | null
  }


  /**
   * Model ConsultationVote
   */

  export type AggregateConsultationVote = {
    _count: ConsultationVoteCountAggregateOutputType | null
    _min: ConsultationVoteMinAggregateOutputType | null
    _max: ConsultationVoteMaxAggregateOutputType | null
  }

  export type ConsultationVoteMinAggregateOutputType = {
    id: string | null
    consultationId: string | null
    userId: string | null
    vote: string | null
    createdAt: Date | null
  }

  export type ConsultationVoteMaxAggregateOutputType = {
    id: string | null
    consultationId: string | null
    userId: string | null
    vote: string | null
    createdAt: Date | null
  }

  export type ConsultationVoteCountAggregateOutputType = {
    id: number
    consultationId: number
    userId: number
    vote: number
    createdAt: number
    _all: number
  }


  export type ConsultationVoteMinAggregateInputType = {
    id?: true
    consultationId?: true
    userId?: true
    vote?: true
    createdAt?: true
  }

  export type ConsultationVoteMaxAggregateInputType = {
    id?: true
    consultationId?: true
    userId?: true
    vote?: true
    createdAt?: true
  }

  export type ConsultationVoteCountAggregateInputType = {
    id?: true
    consultationId?: true
    userId?: true
    vote?: true
    createdAt?: true
    _all?: true
  }

  export type ConsultationVoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultationVote to aggregate.
     */
    where?: ConsultationVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationVotes to fetch.
     */
    orderBy?: ConsultationVoteOrderByWithRelationInput | ConsultationVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultationVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConsultationVotes
    **/
    _count?: true | ConsultationVoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultationVoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultationVoteMaxAggregateInputType
  }

  export type GetConsultationVoteAggregateType<T extends ConsultationVoteAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultationVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultationVote[P]>
      : GetScalarType<T[P], AggregateConsultationVote[P]>
  }




  export type ConsultationVoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationVoteWhereInput
    orderBy?: ConsultationVoteOrderByWithAggregationInput | ConsultationVoteOrderByWithAggregationInput[]
    by: ConsultationVoteScalarFieldEnum[] | ConsultationVoteScalarFieldEnum
    having?: ConsultationVoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultationVoteCountAggregateInputType | true
    _min?: ConsultationVoteMinAggregateInputType
    _max?: ConsultationVoteMaxAggregateInputType
  }

  export type ConsultationVoteGroupByOutputType = {
    id: string
    consultationId: string
    userId: string
    vote: string
    createdAt: Date
    _count: ConsultationVoteCountAggregateOutputType | null
    _min: ConsultationVoteMinAggregateOutputType | null
    _max: ConsultationVoteMaxAggregateOutputType | null
  }

  type GetConsultationVoteGroupByPayload<T extends ConsultationVoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultationVoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultationVoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultationVoteGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultationVoteGroupByOutputType[P]>
        }
      >
    >


  export type ConsultationVoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    consultationId?: boolean
    userId?: boolean
    vote?: boolean
    createdAt?: boolean
    consultation?: boolean | PublicConsultationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultationVote"]>

  export type ConsultationVoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    consultationId?: boolean
    userId?: boolean
    vote?: boolean
    createdAt?: boolean
    consultation?: boolean | PublicConsultationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultationVote"]>

  export type ConsultationVoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    consultationId?: boolean
    userId?: boolean
    vote?: boolean
    createdAt?: boolean
    consultation?: boolean | PublicConsultationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultationVote"]>

  export type ConsultationVoteSelectScalar = {
    id?: boolean
    consultationId?: boolean
    userId?: boolean
    vote?: boolean
    createdAt?: boolean
  }

  export type ConsultationVoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "consultationId" | "userId" | "vote" | "createdAt", ExtArgs["result"]["consultationVote"]>
  export type ConsultationVoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultation?: boolean | PublicConsultationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConsultationVoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultation?: boolean | PublicConsultationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConsultationVoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultation?: boolean | PublicConsultationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConsultationVotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConsultationVote"
    objects: {
      consultation: Prisma.$PublicConsultationPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      consultationId: string
      userId: string
      vote: string
      createdAt: Date
    }, ExtArgs["result"]["consultationVote"]>
    composites: {}
  }

  type ConsultationVoteGetPayload<S extends boolean | null | undefined | ConsultationVoteDefaultArgs> = $Result.GetResult<Prisma.$ConsultationVotePayload, S>

  type ConsultationVoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultationVoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultationVoteCountAggregateInputType | true
    }

  export interface ConsultationVoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConsultationVote'], meta: { name: 'ConsultationVote' } }
    /**
     * Find zero or one ConsultationVote that matches the filter.
     * @param {ConsultationVoteFindUniqueArgs} args - Arguments to find a ConsultationVote
     * @example
     * // Get one ConsultationVote
     * const consultationVote = await prisma.consultationVote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultationVoteFindUniqueArgs>(args: SelectSubset<T, ConsultationVoteFindUniqueArgs<ExtArgs>>): Prisma__ConsultationVoteClient<$Result.GetResult<Prisma.$ConsultationVotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConsultationVote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultationVoteFindUniqueOrThrowArgs} args - Arguments to find a ConsultationVote
     * @example
     * // Get one ConsultationVote
     * const consultationVote = await prisma.consultationVote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultationVoteFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultationVoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultationVoteClient<$Result.GetResult<Prisma.$ConsultationVotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsultationVote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationVoteFindFirstArgs} args - Arguments to find a ConsultationVote
     * @example
     * // Get one ConsultationVote
     * const consultationVote = await prisma.consultationVote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultationVoteFindFirstArgs>(args?: SelectSubset<T, ConsultationVoteFindFirstArgs<ExtArgs>>): Prisma__ConsultationVoteClient<$Result.GetResult<Prisma.$ConsultationVotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsultationVote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationVoteFindFirstOrThrowArgs} args - Arguments to find a ConsultationVote
     * @example
     * // Get one ConsultationVote
     * const consultationVote = await prisma.consultationVote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultationVoteFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultationVoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultationVoteClient<$Result.GetResult<Prisma.$ConsultationVotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConsultationVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationVoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConsultationVotes
     * const consultationVotes = await prisma.consultationVote.findMany()
     * 
     * // Get first 10 ConsultationVotes
     * const consultationVotes = await prisma.consultationVote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultationVoteWithIdOnly = await prisma.consultationVote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultationVoteFindManyArgs>(args?: SelectSubset<T, ConsultationVoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConsultationVote.
     * @param {ConsultationVoteCreateArgs} args - Arguments to create a ConsultationVote.
     * @example
     * // Create one ConsultationVote
     * const ConsultationVote = await prisma.consultationVote.create({
     *   data: {
     *     // ... data to create a ConsultationVote
     *   }
     * })
     * 
     */
    create<T extends ConsultationVoteCreateArgs>(args: SelectSubset<T, ConsultationVoteCreateArgs<ExtArgs>>): Prisma__ConsultationVoteClient<$Result.GetResult<Prisma.$ConsultationVotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConsultationVotes.
     * @param {ConsultationVoteCreateManyArgs} args - Arguments to create many ConsultationVotes.
     * @example
     * // Create many ConsultationVotes
     * const consultationVote = await prisma.consultationVote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultationVoteCreateManyArgs>(args?: SelectSubset<T, ConsultationVoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConsultationVotes and returns the data saved in the database.
     * @param {ConsultationVoteCreateManyAndReturnArgs} args - Arguments to create many ConsultationVotes.
     * @example
     * // Create many ConsultationVotes
     * const consultationVote = await prisma.consultationVote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConsultationVotes and only return the `id`
     * const consultationVoteWithIdOnly = await prisma.consultationVote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultationVoteCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultationVoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationVotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConsultationVote.
     * @param {ConsultationVoteDeleteArgs} args - Arguments to delete one ConsultationVote.
     * @example
     * // Delete one ConsultationVote
     * const ConsultationVote = await prisma.consultationVote.delete({
     *   where: {
     *     // ... filter to delete one ConsultationVote
     *   }
     * })
     * 
     */
    delete<T extends ConsultationVoteDeleteArgs>(args: SelectSubset<T, ConsultationVoteDeleteArgs<ExtArgs>>): Prisma__ConsultationVoteClient<$Result.GetResult<Prisma.$ConsultationVotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConsultationVote.
     * @param {ConsultationVoteUpdateArgs} args - Arguments to update one ConsultationVote.
     * @example
     * // Update one ConsultationVote
     * const consultationVote = await prisma.consultationVote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultationVoteUpdateArgs>(args: SelectSubset<T, ConsultationVoteUpdateArgs<ExtArgs>>): Prisma__ConsultationVoteClient<$Result.GetResult<Prisma.$ConsultationVotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConsultationVotes.
     * @param {ConsultationVoteDeleteManyArgs} args - Arguments to filter ConsultationVotes to delete.
     * @example
     * // Delete a few ConsultationVotes
     * const { count } = await prisma.consultationVote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultationVoteDeleteManyArgs>(args?: SelectSubset<T, ConsultationVoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsultationVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationVoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConsultationVotes
     * const consultationVote = await prisma.consultationVote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultationVoteUpdateManyArgs>(args: SelectSubset<T, ConsultationVoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsultationVotes and returns the data updated in the database.
     * @param {ConsultationVoteUpdateManyAndReturnArgs} args - Arguments to update many ConsultationVotes.
     * @example
     * // Update many ConsultationVotes
     * const consultationVote = await prisma.consultationVote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConsultationVotes and only return the `id`
     * const consultationVoteWithIdOnly = await prisma.consultationVote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsultationVoteUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultationVoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationVotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConsultationVote.
     * @param {ConsultationVoteUpsertArgs} args - Arguments to update or create a ConsultationVote.
     * @example
     * // Update or create a ConsultationVote
     * const consultationVote = await prisma.consultationVote.upsert({
     *   create: {
     *     // ... data to create a ConsultationVote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConsultationVote we want to update
     *   }
     * })
     */
    upsert<T extends ConsultationVoteUpsertArgs>(args: SelectSubset<T, ConsultationVoteUpsertArgs<ExtArgs>>): Prisma__ConsultationVoteClient<$Result.GetResult<Prisma.$ConsultationVotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConsultationVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationVoteCountArgs} args - Arguments to filter ConsultationVotes to count.
     * @example
     * // Count the number of ConsultationVotes
     * const count = await prisma.consultationVote.count({
     *   where: {
     *     // ... the filter for the ConsultationVotes we want to count
     *   }
     * })
    **/
    count<T extends ConsultationVoteCountArgs>(
      args?: Subset<T, ConsultationVoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultationVoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConsultationVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationVoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsultationVoteAggregateArgs>(args: Subset<T, ConsultationVoteAggregateArgs>): Prisma.PrismaPromise<GetConsultationVoteAggregateType<T>>

    /**
     * Group by ConsultationVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationVoteGroupByArgs} args - Group by arguments.
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
      T extends ConsultationVoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultationVoteGroupByArgs['orderBy'] }
        : { orderBy?: ConsultationVoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConsultationVoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultationVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConsultationVote model
   */
  readonly fields: ConsultationVoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConsultationVote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultationVoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consultation<T extends PublicConsultationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublicConsultationDefaultArgs<ExtArgs>>): Prisma__PublicConsultationClient<$Result.GetResult<Prisma.$PublicConsultationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ConsultationVote model
   */
  interface ConsultationVoteFieldRefs {
    readonly id: FieldRef<"ConsultationVote", 'String'>
    readonly consultationId: FieldRef<"ConsultationVote", 'String'>
    readonly userId: FieldRef<"ConsultationVote", 'String'>
    readonly vote: FieldRef<"ConsultationVote", 'String'>
    readonly createdAt: FieldRef<"ConsultationVote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConsultationVote findUnique
   */
  export type ConsultationVoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVote
     */
    select?: ConsultationVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVote
     */
    omit?: ConsultationVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationVoteInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationVote to fetch.
     */
    where: ConsultationVoteWhereUniqueInput
  }

  /**
   * ConsultationVote findUniqueOrThrow
   */
  export type ConsultationVoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVote
     */
    select?: ConsultationVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVote
     */
    omit?: ConsultationVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationVoteInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationVote to fetch.
     */
    where: ConsultationVoteWhereUniqueInput
  }

  /**
   * ConsultationVote findFirst
   */
  export type ConsultationVoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVote
     */
    select?: ConsultationVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVote
     */
    omit?: ConsultationVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationVoteInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationVote to fetch.
     */
    where?: ConsultationVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationVotes to fetch.
     */
    orderBy?: ConsultationVoteOrderByWithRelationInput | ConsultationVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultationVotes.
     */
    cursor?: ConsultationVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultationVotes.
     */
    distinct?: ConsultationVoteScalarFieldEnum | ConsultationVoteScalarFieldEnum[]
  }

  /**
   * ConsultationVote findFirstOrThrow
   */
  export type ConsultationVoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVote
     */
    select?: ConsultationVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVote
     */
    omit?: ConsultationVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationVoteInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationVote to fetch.
     */
    where?: ConsultationVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationVotes to fetch.
     */
    orderBy?: ConsultationVoteOrderByWithRelationInput | ConsultationVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultationVotes.
     */
    cursor?: ConsultationVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultationVotes.
     */
    distinct?: ConsultationVoteScalarFieldEnum | ConsultationVoteScalarFieldEnum[]
  }

  /**
   * ConsultationVote findMany
   */
  export type ConsultationVoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVote
     */
    select?: ConsultationVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVote
     */
    omit?: ConsultationVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationVoteInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationVotes to fetch.
     */
    where?: ConsultationVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationVotes to fetch.
     */
    orderBy?: ConsultationVoteOrderByWithRelationInput | ConsultationVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConsultationVotes.
     */
    cursor?: ConsultationVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationVotes.
     */
    skip?: number
    distinct?: ConsultationVoteScalarFieldEnum | ConsultationVoteScalarFieldEnum[]
  }

  /**
   * ConsultationVote create
   */
  export type ConsultationVoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVote
     */
    select?: ConsultationVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVote
     */
    omit?: ConsultationVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationVoteInclude<ExtArgs> | null
    /**
     * The data needed to create a ConsultationVote.
     */
    data: XOR<ConsultationVoteCreateInput, ConsultationVoteUncheckedCreateInput>
  }

  /**
   * ConsultationVote createMany
   */
  export type ConsultationVoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConsultationVotes.
     */
    data: ConsultationVoteCreateManyInput | ConsultationVoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConsultationVote createManyAndReturn
   */
  export type ConsultationVoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVote
     */
    select?: ConsultationVoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVote
     */
    omit?: ConsultationVoteOmit<ExtArgs> | null
    /**
     * The data used to create many ConsultationVotes.
     */
    data: ConsultationVoteCreateManyInput | ConsultationVoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationVoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConsultationVote update
   */
  export type ConsultationVoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVote
     */
    select?: ConsultationVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVote
     */
    omit?: ConsultationVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationVoteInclude<ExtArgs> | null
    /**
     * The data needed to update a ConsultationVote.
     */
    data: XOR<ConsultationVoteUpdateInput, ConsultationVoteUncheckedUpdateInput>
    /**
     * Choose, which ConsultationVote to update.
     */
    where: ConsultationVoteWhereUniqueInput
  }

  /**
   * ConsultationVote updateMany
   */
  export type ConsultationVoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConsultationVotes.
     */
    data: XOR<ConsultationVoteUpdateManyMutationInput, ConsultationVoteUncheckedUpdateManyInput>
    /**
     * Filter which ConsultationVotes to update
     */
    where?: ConsultationVoteWhereInput
    /**
     * Limit how many ConsultationVotes to update.
     */
    limit?: number
  }

  /**
   * ConsultationVote updateManyAndReturn
   */
  export type ConsultationVoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVote
     */
    select?: ConsultationVoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVote
     */
    omit?: ConsultationVoteOmit<ExtArgs> | null
    /**
     * The data used to update ConsultationVotes.
     */
    data: XOR<ConsultationVoteUpdateManyMutationInput, ConsultationVoteUncheckedUpdateManyInput>
    /**
     * Filter which ConsultationVotes to update
     */
    where?: ConsultationVoteWhereInput
    /**
     * Limit how many ConsultationVotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationVoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConsultationVote upsert
   */
  export type ConsultationVoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVote
     */
    select?: ConsultationVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVote
     */
    omit?: ConsultationVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationVoteInclude<ExtArgs> | null
    /**
     * The filter to search for the ConsultationVote to update in case it exists.
     */
    where: ConsultationVoteWhereUniqueInput
    /**
     * In case the ConsultationVote found by the `where` argument doesn't exist, create a new ConsultationVote with this data.
     */
    create: XOR<ConsultationVoteCreateInput, ConsultationVoteUncheckedCreateInput>
    /**
     * In case the ConsultationVote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultationVoteUpdateInput, ConsultationVoteUncheckedUpdateInput>
  }

  /**
   * ConsultationVote delete
   */
  export type ConsultationVoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVote
     */
    select?: ConsultationVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVote
     */
    omit?: ConsultationVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationVoteInclude<ExtArgs> | null
    /**
     * Filter which ConsultationVote to delete.
     */
    where: ConsultationVoteWhereUniqueInput
  }

  /**
   * ConsultationVote deleteMany
   */
  export type ConsultationVoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultationVotes to delete
     */
    where?: ConsultationVoteWhereInput
    /**
     * Limit how many ConsultationVotes to delete.
     */
    limit?: number
  }

  /**
   * ConsultationVote without action
   */
  export type ConsultationVoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationVote
     */
    select?: ConsultationVoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationVote
     */
    omit?: ConsultationVoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationVoteInclude<ExtArgs> | null
  }


  /**
   * Model ConsultationComment
   */

  export type AggregateConsultationComment = {
    _count: ConsultationCommentCountAggregateOutputType | null
    _min: ConsultationCommentMinAggregateOutputType | null
    _max: ConsultationCommentMaxAggregateOutputType | null
  }

  export type ConsultationCommentMinAggregateOutputType = {
    id: string | null
    consultationId: string | null
    userId: string | null
    comment: string | null
    createdAt: Date | null
  }

  export type ConsultationCommentMaxAggregateOutputType = {
    id: string | null
    consultationId: string | null
    userId: string | null
    comment: string | null
    createdAt: Date | null
  }

  export type ConsultationCommentCountAggregateOutputType = {
    id: number
    consultationId: number
    userId: number
    comment: number
    createdAt: number
    _all: number
  }


  export type ConsultationCommentMinAggregateInputType = {
    id?: true
    consultationId?: true
    userId?: true
    comment?: true
    createdAt?: true
  }

  export type ConsultationCommentMaxAggregateInputType = {
    id?: true
    consultationId?: true
    userId?: true
    comment?: true
    createdAt?: true
  }

  export type ConsultationCommentCountAggregateInputType = {
    id?: true
    consultationId?: true
    userId?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type ConsultationCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultationComment to aggregate.
     */
    where?: ConsultationCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationComments to fetch.
     */
    orderBy?: ConsultationCommentOrderByWithRelationInput | ConsultationCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultationCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConsultationComments
    **/
    _count?: true | ConsultationCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultationCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultationCommentMaxAggregateInputType
  }

  export type GetConsultationCommentAggregateType<T extends ConsultationCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultationComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultationComment[P]>
      : GetScalarType<T[P], AggregateConsultationComment[P]>
  }




  export type ConsultationCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationCommentWhereInput
    orderBy?: ConsultationCommentOrderByWithAggregationInput | ConsultationCommentOrderByWithAggregationInput[]
    by: ConsultationCommentScalarFieldEnum[] | ConsultationCommentScalarFieldEnum
    having?: ConsultationCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultationCommentCountAggregateInputType | true
    _min?: ConsultationCommentMinAggregateInputType
    _max?: ConsultationCommentMaxAggregateInputType
  }

  export type ConsultationCommentGroupByOutputType = {
    id: string
    consultationId: string
    userId: string
    comment: string
    createdAt: Date
    _count: ConsultationCommentCountAggregateOutputType | null
    _min: ConsultationCommentMinAggregateOutputType | null
    _max: ConsultationCommentMaxAggregateOutputType | null
  }

  type GetConsultationCommentGroupByPayload<T extends ConsultationCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultationCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultationCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultationCommentGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultationCommentGroupByOutputType[P]>
        }
      >
    >


  export type ConsultationCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    consultationId?: boolean
    userId?: boolean
    comment?: boolean
    createdAt?: boolean
    consultation?: boolean | PublicConsultationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultationComment"]>

  export type ConsultationCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    consultationId?: boolean
    userId?: boolean
    comment?: boolean
    createdAt?: boolean
    consultation?: boolean | PublicConsultationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultationComment"]>

  export type ConsultationCommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    consultationId?: boolean
    userId?: boolean
    comment?: boolean
    createdAt?: boolean
    consultation?: boolean | PublicConsultationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultationComment"]>

  export type ConsultationCommentSelectScalar = {
    id?: boolean
    consultationId?: boolean
    userId?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type ConsultationCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "consultationId" | "userId" | "comment" | "createdAt", ExtArgs["result"]["consultationComment"]>
  export type ConsultationCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultation?: boolean | PublicConsultationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConsultationCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultation?: boolean | PublicConsultationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConsultationCommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultation?: boolean | PublicConsultationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConsultationCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConsultationComment"
    objects: {
      consultation: Prisma.$PublicConsultationPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      consultationId: string
      userId: string
      comment: string
      createdAt: Date
    }, ExtArgs["result"]["consultationComment"]>
    composites: {}
  }

  type ConsultationCommentGetPayload<S extends boolean | null | undefined | ConsultationCommentDefaultArgs> = $Result.GetResult<Prisma.$ConsultationCommentPayload, S>

  type ConsultationCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultationCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultationCommentCountAggregateInputType | true
    }

  export interface ConsultationCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConsultationComment'], meta: { name: 'ConsultationComment' } }
    /**
     * Find zero or one ConsultationComment that matches the filter.
     * @param {ConsultationCommentFindUniqueArgs} args - Arguments to find a ConsultationComment
     * @example
     * // Get one ConsultationComment
     * const consultationComment = await prisma.consultationComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultationCommentFindUniqueArgs>(args: SelectSubset<T, ConsultationCommentFindUniqueArgs<ExtArgs>>): Prisma__ConsultationCommentClient<$Result.GetResult<Prisma.$ConsultationCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConsultationComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultationCommentFindUniqueOrThrowArgs} args - Arguments to find a ConsultationComment
     * @example
     * // Get one ConsultationComment
     * const consultationComment = await prisma.consultationComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultationCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultationCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultationCommentClient<$Result.GetResult<Prisma.$ConsultationCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsultationComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationCommentFindFirstArgs} args - Arguments to find a ConsultationComment
     * @example
     * // Get one ConsultationComment
     * const consultationComment = await prisma.consultationComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultationCommentFindFirstArgs>(args?: SelectSubset<T, ConsultationCommentFindFirstArgs<ExtArgs>>): Prisma__ConsultationCommentClient<$Result.GetResult<Prisma.$ConsultationCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsultationComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationCommentFindFirstOrThrowArgs} args - Arguments to find a ConsultationComment
     * @example
     * // Get one ConsultationComment
     * const consultationComment = await prisma.consultationComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultationCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultationCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultationCommentClient<$Result.GetResult<Prisma.$ConsultationCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConsultationComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConsultationComments
     * const consultationComments = await prisma.consultationComment.findMany()
     * 
     * // Get first 10 ConsultationComments
     * const consultationComments = await prisma.consultationComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultationCommentWithIdOnly = await prisma.consultationComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultationCommentFindManyArgs>(args?: SelectSubset<T, ConsultationCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConsultationComment.
     * @param {ConsultationCommentCreateArgs} args - Arguments to create a ConsultationComment.
     * @example
     * // Create one ConsultationComment
     * const ConsultationComment = await prisma.consultationComment.create({
     *   data: {
     *     // ... data to create a ConsultationComment
     *   }
     * })
     * 
     */
    create<T extends ConsultationCommentCreateArgs>(args: SelectSubset<T, ConsultationCommentCreateArgs<ExtArgs>>): Prisma__ConsultationCommentClient<$Result.GetResult<Prisma.$ConsultationCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConsultationComments.
     * @param {ConsultationCommentCreateManyArgs} args - Arguments to create many ConsultationComments.
     * @example
     * // Create many ConsultationComments
     * const consultationComment = await prisma.consultationComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultationCommentCreateManyArgs>(args?: SelectSubset<T, ConsultationCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConsultationComments and returns the data saved in the database.
     * @param {ConsultationCommentCreateManyAndReturnArgs} args - Arguments to create many ConsultationComments.
     * @example
     * // Create many ConsultationComments
     * const consultationComment = await prisma.consultationComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConsultationComments and only return the `id`
     * const consultationCommentWithIdOnly = await prisma.consultationComment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultationCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultationCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConsultationComment.
     * @param {ConsultationCommentDeleteArgs} args - Arguments to delete one ConsultationComment.
     * @example
     * // Delete one ConsultationComment
     * const ConsultationComment = await prisma.consultationComment.delete({
     *   where: {
     *     // ... filter to delete one ConsultationComment
     *   }
     * })
     * 
     */
    delete<T extends ConsultationCommentDeleteArgs>(args: SelectSubset<T, ConsultationCommentDeleteArgs<ExtArgs>>): Prisma__ConsultationCommentClient<$Result.GetResult<Prisma.$ConsultationCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConsultationComment.
     * @param {ConsultationCommentUpdateArgs} args - Arguments to update one ConsultationComment.
     * @example
     * // Update one ConsultationComment
     * const consultationComment = await prisma.consultationComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultationCommentUpdateArgs>(args: SelectSubset<T, ConsultationCommentUpdateArgs<ExtArgs>>): Prisma__ConsultationCommentClient<$Result.GetResult<Prisma.$ConsultationCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConsultationComments.
     * @param {ConsultationCommentDeleteManyArgs} args - Arguments to filter ConsultationComments to delete.
     * @example
     * // Delete a few ConsultationComments
     * const { count } = await prisma.consultationComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultationCommentDeleteManyArgs>(args?: SelectSubset<T, ConsultationCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsultationComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConsultationComments
     * const consultationComment = await prisma.consultationComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultationCommentUpdateManyArgs>(args: SelectSubset<T, ConsultationCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsultationComments and returns the data updated in the database.
     * @param {ConsultationCommentUpdateManyAndReturnArgs} args - Arguments to update many ConsultationComments.
     * @example
     * // Update many ConsultationComments
     * const consultationComment = await prisma.consultationComment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConsultationComments and only return the `id`
     * const consultationCommentWithIdOnly = await prisma.consultationComment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsultationCommentUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultationCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConsultationComment.
     * @param {ConsultationCommentUpsertArgs} args - Arguments to update or create a ConsultationComment.
     * @example
     * // Update or create a ConsultationComment
     * const consultationComment = await prisma.consultationComment.upsert({
     *   create: {
     *     // ... data to create a ConsultationComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConsultationComment we want to update
     *   }
     * })
     */
    upsert<T extends ConsultationCommentUpsertArgs>(args: SelectSubset<T, ConsultationCommentUpsertArgs<ExtArgs>>): Prisma__ConsultationCommentClient<$Result.GetResult<Prisma.$ConsultationCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConsultationComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationCommentCountArgs} args - Arguments to filter ConsultationComments to count.
     * @example
     * // Count the number of ConsultationComments
     * const count = await prisma.consultationComment.count({
     *   where: {
     *     // ... the filter for the ConsultationComments we want to count
     *   }
     * })
    **/
    count<T extends ConsultationCommentCountArgs>(
      args?: Subset<T, ConsultationCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultationCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConsultationComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsultationCommentAggregateArgs>(args: Subset<T, ConsultationCommentAggregateArgs>): Prisma.PrismaPromise<GetConsultationCommentAggregateType<T>>

    /**
     * Group by ConsultationComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationCommentGroupByArgs} args - Group by arguments.
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
      T extends ConsultationCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultationCommentGroupByArgs['orderBy'] }
        : { orderBy?: ConsultationCommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConsultationCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultationCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConsultationComment model
   */
  readonly fields: ConsultationCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConsultationComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultationCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consultation<T extends PublicConsultationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublicConsultationDefaultArgs<ExtArgs>>): Prisma__PublicConsultationClient<$Result.GetResult<Prisma.$PublicConsultationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ConsultationComment model
   */
  interface ConsultationCommentFieldRefs {
    readonly id: FieldRef<"ConsultationComment", 'String'>
    readonly consultationId: FieldRef<"ConsultationComment", 'String'>
    readonly userId: FieldRef<"ConsultationComment", 'String'>
    readonly comment: FieldRef<"ConsultationComment", 'String'>
    readonly createdAt: FieldRef<"ConsultationComment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConsultationComment findUnique
   */
  export type ConsultationCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationComment
     */
    select?: ConsultationCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationComment
     */
    omit?: ConsultationCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationCommentInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationComment to fetch.
     */
    where: ConsultationCommentWhereUniqueInput
  }

  /**
   * ConsultationComment findUniqueOrThrow
   */
  export type ConsultationCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationComment
     */
    select?: ConsultationCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationComment
     */
    omit?: ConsultationCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationCommentInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationComment to fetch.
     */
    where: ConsultationCommentWhereUniqueInput
  }

  /**
   * ConsultationComment findFirst
   */
  export type ConsultationCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationComment
     */
    select?: ConsultationCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationComment
     */
    omit?: ConsultationCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationCommentInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationComment to fetch.
     */
    where?: ConsultationCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationComments to fetch.
     */
    orderBy?: ConsultationCommentOrderByWithRelationInput | ConsultationCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultationComments.
     */
    cursor?: ConsultationCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultationComments.
     */
    distinct?: ConsultationCommentScalarFieldEnum | ConsultationCommentScalarFieldEnum[]
  }

  /**
   * ConsultationComment findFirstOrThrow
   */
  export type ConsultationCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationComment
     */
    select?: ConsultationCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationComment
     */
    omit?: ConsultationCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationCommentInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationComment to fetch.
     */
    where?: ConsultationCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationComments to fetch.
     */
    orderBy?: ConsultationCommentOrderByWithRelationInput | ConsultationCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultationComments.
     */
    cursor?: ConsultationCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultationComments.
     */
    distinct?: ConsultationCommentScalarFieldEnum | ConsultationCommentScalarFieldEnum[]
  }

  /**
   * ConsultationComment findMany
   */
  export type ConsultationCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationComment
     */
    select?: ConsultationCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationComment
     */
    omit?: ConsultationCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationCommentInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationComments to fetch.
     */
    where?: ConsultationCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationComments to fetch.
     */
    orderBy?: ConsultationCommentOrderByWithRelationInput | ConsultationCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConsultationComments.
     */
    cursor?: ConsultationCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationComments.
     */
    skip?: number
    distinct?: ConsultationCommentScalarFieldEnum | ConsultationCommentScalarFieldEnum[]
  }

  /**
   * ConsultationComment create
   */
  export type ConsultationCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationComment
     */
    select?: ConsultationCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationComment
     */
    omit?: ConsultationCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a ConsultationComment.
     */
    data: XOR<ConsultationCommentCreateInput, ConsultationCommentUncheckedCreateInput>
  }

  /**
   * ConsultationComment createMany
   */
  export type ConsultationCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConsultationComments.
     */
    data: ConsultationCommentCreateManyInput | ConsultationCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConsultationComment createManyAndReturn
   */
  export type ConsultationCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationComment
     */
    select?: ConsultationCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationComment
     */
    omit?: ConsultationCommentOmit<ExtArgs> | null
    /**
     * The data used to create many ConsultationComments.
     */
    data: ConsultationCommentCreateManyInput | ConsultationCommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConsultationComment update
   */
  export type ConsultationCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationComment
     */
    select?: ConsultationCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationComment
     */
    omit?: ConsultationCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a ConsultationComment.
     */
    data: XOR<ConsultationCommentUpdateInput, ConsultationCommentUncheckedUpdateInput>
    /**
     * Choose, which ConsultationComment to update.
     */
    where: ConsultationCommentWhereUniqueInput
  }

  /**
   * ConsultationComment updateMany
   */
  export type ConsultationCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConsultationComments.
     */
    data: XOR<ConsultationCommentUpdateManyMutationInput, ConsultationCommentUncheckedUpdateManyInput>
    /**
     * Filter which ConsultationComments to update
     */
    where?: ConsultationCommentWhereInput
    /**
     * Limit how many ConsultationComments to update.
     */
    limit?: number
  }

  /**
   * ConsultationComment updateManyAndReturn
   */
  export type ConsultationCommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationComment
     */
    select?: ConsultationCommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationComment
     */
    omit?: ConsultationCommentOmit<ExtArgs> | null
    /**
     * The data used to update ConsultationComments.
     */
    data: XOR<ConsultationCommentUpdateManyMutationInput, ConsultationCommentUncheckedUpdateManyInput>
    /**
     * Filter which ConsultationComments to update
     */
    where?: ConsultationCommentWhereInput
    /**
     * Limit how many ConsultationComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationCommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConsultationComment upsert
   */
  export type ConsultationCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationComment
     */
    select?: ConsultationCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationComment
     */
    omit?: ConsultationCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the ConsultationComment to update in case it exists.
     */
    where: ConsultationCommentWhereUniqueInput
    /**
     * In case the ConsultationComment found by the `where` argument doesn't exist, create a new ConsultationComment with this data.
     */
    create: XOR<ConsultationCommentCreateInput, ConsultationCommentUncheckedCreateInput>
    /**
     * In case the ConsultationComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultationCommentUpdateInput, ConsultationCommentUncheckedUpdateInput>
  }

  /**
   * ConsultationComment delete
   */
  export type ConsultationCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationComment
     */
    select?: ConsultationCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationComment
     */
    omit?: ConsultationCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationCommentInclude<ExtArgs> | null
    /**
     * Filter which ConsultationComment to delete.
     */
    where: ConsultationCommentWhereUniqueInput
  }

  /**
   * ConsultationComment deleteMany
   */
  export type ConsultationCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultationComments to delete
     */
    where?: ConsultationCommentWhereInput
    /**
     * Limit how many ConsultationComments to delete.
     */
    limit?: number
  }

  /**
   * ConsultationComment without action
   */
  export type ConsultationCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationComment
     */
    select?: ConsultationCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationComment
     */
    omit?: ConsultationCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationCommentInclude<ExtArgs> | null
  }


  /**
   * Model WaterDemandAnalysis
   */

  export type AggregateWaterDemandAnalysis = {
    _count: WaterDemandAnalysisCountAggregateOutputType | null
    _avg: WaterDemandAnalysisAvgAggregateOutputType | null
    _sum: WaterDemandAnalysisSumAggregateOutputType | null
    _min: WaterDemandAnalysisMinAggregateOutputType | null
    _max: WaterDemandAnalysisMaxAggregateOutputType | null
  }

  export type WaterDemandAnalysisAvgAggregateOutputType = {
    populationDensity: number | null
    predictedDemand: number | null
    currentSupply: number | null
    shortage: number | null
  }

  export type WaterDemandAnalysisSumAggregateOutputType = {
    populationDensity: number | null
    predictedDemand: number | null
    currentSupply: number | null
    shortage: number | null
  }

  export type WaterDemandAnalysisMinAggregateOutputType = {
    id: string | null
    area: string | null
    populationDensity: number | null
    predictedDemand: number | null
    currentSupply: number | null
    shortage: number | null
    analysisDate: Date | null
  }

  export type WaterDemandAnalysisMaxAggregateOutputType = {
    id: string | null
    area: string | null
    populationDensity: number | null
    predictedDemand: number | null
    currentSupply: number | null
    shortage: number | null
    analysisDate: Date | null
  }

  export type WaterDemandAnalysisCountAggregateOutputType = {
    id: number
    area: number
    coordinates: number
    populationDensity: number
    predictedDemand: number
    currentSupply: number
    shortage: number
    analysisDate: number
    _all: number
  }


  export type WaterDemandAnalysisAvgAggregateInputType = {
    populationDensity?: true
    predictedDemand?: true
    currentSupply?: true
    shortage?: true
  }

  export type WaterDemandAnalysisSumAggregateInputType = {
    populationDensity?: true
    predictedDemand?: true
    currentSupply?: true
    shortage?: true
  }

  export type WaterDemandAnalysisMinAggregateInputType = {
    id?: true
    area?: true
    populationDensity?: true
    predictedDemand?: true
    currentSupply?: true
    shortage?: true
    analysisDate?: true
  }

  export type WaterDemandAnalysisMaxAggregateInputType = {
    id?: true
    area?: true
    populationDensity?: true
    predictedDemand?: true
    currentSupply?: true
    shortage?: true
    analysisDate?: true
  }

  export type WaterDemandAnalysisCountAggregateInputType = {
    id?: true
    area?: true
    coordinates?: true
    populationDensity?: true
    predictedDemand?: true
    currentSupply?: true
    shortage?: true
    analysisDate?: true
    _all?: true
  }

  export type WaterDemandAnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaterDemandAnalysis to aggregate.
     */
    where?: WaterDemandAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterDemandAnalyses to fetch.
     */
    orderBy?: WaterDemandAnalysisOrderByWithRelationInput | WaterDemandAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaterDemandAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterDemandAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterDemandAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WaterDemandAnalyses
    **/
    _count?: true | WaterDemandAnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaterDemandAnalysisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaterDemandAnalysisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaterDemandAnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaterDemandAnalysisMaxAggregateInputType
  }

  export type GetWaterDemandAnalysisAggregateType<T extends WaterDemandAnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateWaterDemandAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaterDemandAnalysis[P]>
      : GetScalarType<T[P], AggregateWaterDemandAnalysis[P]>
  }




  export type WaterDemandAnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaterDemandAnalysisWhereInput
    orderBy?: WaterDemandAnalysisOrderByWithAggregationInput | WaterDemandAnalysisOrderByWithAggregationInput[]
    by: WaterDemandAnalysisScalarFieldEnum[] | WaterDemandAnalysisScalarFieldEnum
    having?: WaterDemandAnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaterDemandAnalysisCountAggregateInputType | true
    _avg?: WaterDemandAnalysisAvgAggregateInputType
    _sum?: WaterDemandAnalysisSumAggregateInputType
    _min?: WaterDemandAnalysisMinAggregateInputType
    _max?: WaterDemandAnalysisMaxAggregateInputType
  }

  export type WaterDemandAnalysisGroupByOutputType = {
    id: string
    area: string
    coordinates: JsonValue
    populationDensity: number
    predictedDemand: number
    currentSupply: number | null
    shortage: number | null
    analysisDate: Date
    _count: WaterDemandAnalysisCountAggregateOutputType | null
    _avg: WaterDemandAnalysisAvgAggregateOutputType | null
    _sum: WaterDemandAnalysisSumAggregateOutputType | null
    _min: WaterDemandAnalysisMinAggregateOutputType | null
    _max: WaterDemandAnalysisMaxAggregateOutputType | null
  }

  type GetWaterDemandAnalysisGroupByPayload<T extends WaterDemandAnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaterDemandAnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaterDemandAnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaterDemandAnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], WaterDemandAnalysisGroupByOutputType[P]>
        }
      >
    >


  export type WaterDemandAnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    area?: boolean
    coordinates?: boolean
    populationDensity?: boolean
    predictedDemand?: boolean
    currentSupply?: boolean
    shortage?: boolean
    analysisDate?: boolean
  }, ExtArgs["result"]["waterDemandAnalysis"]>

  export type WaterDemandAnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    area?: boolean
    coordinates?: boolean
    populationDensity?: boolean
    predictedDemand?: boolean
    currentSupply?: boolean
    shortage?: boolean
    analysisDate?: boolean
  }, ExtArgs["result"]["waterDemandAnalysis"]>

  export type WaterDemandAnalysisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    area?: boolean
    coordinates?: boolean
    populationDensity?: boolean
    predictedDemand?: boolean
    currentSupply?: boolean
    shortage?: boolean
    analysisDate?: boolean
  }, ExtArgs["result"]["waterDemandAnalysis"]>

  export type WaterDemandAnalysisSelectScalar = {
    id?: boolean
    area?: boolean
    coordinates?: boolean
    populationDensity?: boolean
    predictedDemand?: boolean
    currentSupply?: boolean
    shortage?: boolean
    analysisDate?: boolean
  }

  export type WaterDemandAnalysisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "area" | "coordinates" | "populationDensity" | "predictedDemand" | "currentSupply" | "shortage" | "analysisDate", ExtArgs["result"]["waterDemandAnalysis"]>

  export type $WaterDemandAnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WaterDemandAnalysis"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      area: string
      coordinates: Prisma.JsonValue
      populationDensity: number
      predictedDemand: number
      currentSupply: number | null
      shortage: number | null
      analysisDate: Date
    }, ExtArgs["result"]["waterDemandAnalysis"]>
    composites: {}
  }

  type WaterDemandAnalysisGetPayload<S extends boolean | null | undefined | WaterDemandAnalysisDefaultArgs> = $Result.GetResult<Prisma.$WaterDemandAnalysisPayload, S>

  type WaterDemandAnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WaterDemandAnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaterDemandAnalysisCountAggregateInputType | true
    }

  export interface WaterDemandAnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WaterDemandAnalysis'], meta: { name: 'WaterDemandAnalysis' } }
    /**
     * Find zero or one WaterDemandAnalysis that matches the filter.
     * @param {WaterDemandAnalysisFindUniqueArgs} args - Arguments to find a WaterDemandAnalysis
     * @example
     * // Get one WaterDemandAnalysis
     * const waterDemandAnalysis = await prisma.waterDemandAnalysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaterDemandAnalysisFindUniqueArgs>(args: SelectSubset<T, WaterDemandAnalysisFindUniqueArgs<ExtArgs>>): Prisma__WaterDemandAnalysisClient<$Result.GetResult<Prisma.$WaterDemandAnalysisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WaterDemandAnalysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaterDemandAnalysisFindUniqueOrThrowArgs} args - Arguments to find a WaterDemandAnalysis
     * @example
     * // Get one WaterDemandAnalysis
     * const waterDemandAnalysis = await prisma.waterDemandAnalysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaterDemandAnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, WaterDemandAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaterDemandAnalysisClient<$Result.GetResult<Prisma.$WaterDemandAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaterDemandAnalysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterDemandAnalysisFindFirstArgs} args - Arguments to find a WaterDemandAnalysis
     * @example
     * // Get one WaterDemandAnalysis
     * const waterDemandAnalysis = await prisma.waterDemandAnalysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaterDemandAnalysisFindFirstArgs>(args?: SelectSubset<T, WaterDemandAnalysisFindFirstArgs<ExtArgs>>): Prisma__WaterDemandAnalysisClient<$Result.GetResult<Prisma.$WaterDemandAnalysisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaterDemandAnalysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterDemandAnalysisFindFirstOrThrowArgs} args - Arguments to find a WaterDemandAnalysis
     * @example
     * // Get one WaterDemandAnalysis
     * const waterDemandAnalysis = await prisma.waterDemandAnalysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaterDemandAnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, WaterDemandAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaterDemandAnalysisClient<$Result.GetResult<Prisma.$WaterDemandAnalysisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WaterDemandAnalyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterDemandAnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaterDemandAnalyses
     * const waterDemandAnalyses = await prisma.waterDemandAnalysis.findMany()
     * 
     * // Get first 10 WaterDemandAnalyses
     * const waterDemandAnalyses = await prisma.waterDemandAnalysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waterDemandAnalysisWithIdOnly = await prisma.waterDemandAnalysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaterDemandAnalysisFindManyArgs>(args?: SelectSubset<T, WaterDemandAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterDemandAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WaterDemandAnalysis.
     * @param {WaterDemandAnalysisCreateArgs} args - Arguments to create a WaterDemandAnalysis.
     * @example
     * // Create one WaterDemandAnalysis
     * const WaterDemandAnalysis = await prisma.waterDemandAnalysis.create({
     *   data: {
     *     // ... data to create a WaterDemandAnalysis
     *   }
     * })
     * 
     */
    create<T extends WaterDemandAnalysisCreateArgs>(args: SelectSubset<T, WaterDemandAnalysisCreateArgs<ExtArgs>>): Prisma__WaterDemandAnalysisClient<$Result.GetResult<Prisma.$WaterDemandAnalysisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WaterDemandAnalyses.
     * @param {WaterDemandAnalysisCreateManyArgs} args - Arguments to create many WaterDemandAnalyses.
     * @example
     * // Create many WaterDemandAnalyses
     * const waterDemandAnalysis = await prisma.waterDemandAnalysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaterDemandAnalysisCreateManyArgs>(args?: SelectSubset<T, WaterDemandAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WaterDemandAnalyses and returns the data saved in the database.
     * @param {WaterDemandAnalysisCreateManyAndReturnArgs} args - Arguments to create many WaterDemandAnalyses.
     * @example
     * // Create many WaterDemandAnalyses
     * const waterDemandAnalysis = await prisma.waterDemandAnalysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WaterDemandAnalyses and only return the `id`
     * const waterDemandAnalysisWithIdOnly = await prisma.waterDemandAnalysis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WaterDemandAnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, WaterDemandAnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterDemandAnalysisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WaterDemandAnalysis.
     * @param {WaterDemandAnalysisDeleteArgs} args - Arguments to delete one WaterDemandAnalysis.
     * @example
     * // Delete one WaterDemandAnalysis
     * const WaterDemandAnalysis = await prisma.waterDemandAnalysis.delete({
     *   where: {
     *     // ... filter to delete one WaterDemandAnalysis
     *   }
     * })
     * 
     */
    delete<T extends WaterDemandAnalysisDeleteArgs>(args: SelectSubset<T, WaterDemandAnalysisDeleteArgs<ExtArgs>>): Prisma__WaterDemandAnalysisClient<$Result.GetResult<Prisma.$WaterDemandAnalysisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WaterDemandAnalysis.
     * @param {WaterDemandAnalysisUpdateArgs} args - Arguments to update one WaterDemandAnalysis.
     * @example
     * // Update one WaterDemandAnalysis
     * const waterDemandAnalysis = await prisma.waterDemandAnalysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaterDemandAnalysisUpdateArgs>(args: SelectSubset<T, WaterDemandAnalysisUpdateArgs<ExtArgs>>): Prisma__WaterDemandAnalysisClient<$Result.GetResult<Prisma.$WaterDemandAnalysisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WaterDemandAnalyses.
     * @param {WaterDemandAnalysisDeleteManyArgs} args - Arguments to filter WaterDemandAnalyses to delete.
     * @example
     * // Delete a few WaterDemandAnalyses
     * const { count } = await prisma.waterDemandAnalysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaterDemandAnalysisDeleteManyArgs>(args?: SelectSubset<T, WaterDemandAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaterDemandAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterDemandAnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaterDemandAnalyses
     * const waterDemandAnalysis = await prisma.waterDemandAnalysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaterDemandAnalysisUpdateManyArgs>(args: SelectSubset<T, WaterDemandAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaterDemandAnalyses and returns the data updated in the database.
     * @param {WaterDemandAnalysisUpdateManyAndReturnArgs} args - Arguments to update many WaterDemandAnalyses.
     * @example
     * // Update many WaterDemandAnalyses
     * const waterDemandAnalysis = await prisma.waterDemandAnalysis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WaterDemandAnalyses and only return the `id`
     * const waterDemandAnalysisWithIdOnly = await prisma.waterDemandAnalysis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WaterDemandAnalysisUpdateManyAndReturnArgs>(args: SelectSubset<T, WaterDemandAnalysisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterDemandAnalysisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WaterDemandAnalysis.
     * @param {WaterDemandAnalysisUpsertArgs} args - Arguments to update or create a WaterDemandAnalysis.
     * @example
     * // Update or create a WaterDemandAnalysis
     * const waterDemandAnalysis = await prisma.waterDemandAnalysis.upsert({
     *   create: {
     *     // ... data to create a WaterDemandAnalysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaterDemandAnalysis we want to update
     *   }
     * })
     */
    upsert<T extends WaterDemandAnalysisUpsertArgs>(args: SelectSubset<T, WaterDemandAnalysisUpsertArgs<ExtArgs>>): Prisma__WaterDemandAnalysisClient<$Result.GetResult<Prisma.$WaterDemandAnalysisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WaterDemandAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterDemandAnalysisCountArgs} args - Arguments to filter WaterDemandAnalyses to count.
     * @example
     * // Count the number of WaterDemandAnalyses
     * const count = await prisma.waterDemandAnalysis.count({
     *   where: {
     *     // ... the filter for the WaterDemandAnalyses we want to count
     *   }
     * })
    **/
    count<T extends WaterDemandAnalysisCountArgs>(
      args?: Subset<T, WaterDemandAnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaterDemandAnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WaterDemandAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterDemandAnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WaterDemandAnalysisAggregateArgs>(args: Subset<T, WaterDemandAnalysisAggregateArgs>): Prisma.PrismaPromise<GetWaterDemandAnalysisAggregateType<T>>

    /**
     * Group by WaterDemandAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterDemandAnalysisGroupByArgs} args - Group by arguments.
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
      T extends WaterDemandAnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaterDemandAnalysisGroupByArgs['orderBy'] }
        : { orderBy?: WaterDemandAnalysisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WaterDemandAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaterDemandAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WaterDemandAnalysis model
   */
  readonly fields: WaterDemandAnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WaterDemandAnalysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaterDemandAnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the WaterDemandAnalysis model
   */
  interface WaterDemandAnalysisFieldRefs {
    readonly id: FieldRef<"WaterDemandAnalysis", 'String'>
    readonly area: FieldRef<"WaterDemandAnalysis", 'String'>
    readonly coordinates: FieldRef<"WaterDemandAnalysis", 'Json'>
    readonly populationDensity: FieldRef<"WaterDemandAnalysis", 'Float'>
    readonly predictedDemand: FieldRef<"WaterDemandAnalysis", 'Float'>
    readonly currentSupply: FieldRef<"WaterDemandAnalysis", 'Float'>
    readonly shortage: FieldRef<"WaterDemandAnalysis", 'Float'>
    readonly analysisDate: FieldRef<"WaterDemandAnalysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WaterDemandAnalysis findUnique
   */
  export type WaterDemandAnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterDemandAnalysis
     */
    select?: WaterDemandAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterDemandAnalysis
     */
    omit?: WaterDemandAnalysisOmit<ExtArgs> | null
    /**
     * Filter, which WaterDemandAnalysis to fetch.
     */
    where: WaterDemandAnalysisWhereUniqueInput
  }

  /**
   * WaterDemandAnalysis findUniqueOrThrow
   */
  export type WaterDemandAnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterDemandAnalysis
     */
    select?: WaterDemandAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterDemandAnalysis
     */
    omit?: WaterDemandAnalysisOmit<ExtArgs> | null
    /**
     * Filter, which WaterDemandAnalysis to fetch.
     */
    where: WaterDemandAnalysisWhereUniqueInput
  }

  /**
   * WaterDemandAnalysis findFirst
   */
  export type WaterDemandAnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterDemandAnalysis
     */
    select?: WaterDemandAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterDemandAnalysis
     */
    omit?: WaterDemandAnalysisOmit<ExtArgs> | null
    /**
     * Filter, which WaterDemandAnalysis to fetch.
     */
    where?: WaterDemandAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterDemandAnalyses to fetch.
     */
    orderBy?: WaterDemandAnalysisOrderByWithRelationInput | WaterDemandAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaterDemandAnalyses.
     */
    cursor?: WaterDemandAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterDemandAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterDemandAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaterDemandAnalyses.
     */
    distinct?: WaterDemandAnalysisScalarFieldEnum | WaterDemandAnalysisScalarFieldEnum[]
  }

  /**
   * WaterDemandAnalysis findFirstOrThrow
   */
  export type WaterDemandAnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterDemandAnalysis
     */
    select?: WaterDemandAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterDemandAnalysis
     */
    omit?: WaterDemandAnalysisOmit<ExtArgs> | null
    /**
     * Filter, which WaterDemandAnalysis to fetch.
     */
    where?: WaterDemandAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterDemandAnalyses to fetch.
     */
    orderBy?: WaterDemandAnalysisOrderByWithRelationInput | WaterDemandAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaterDemandAnalyses.
     */
    cursor?: WaterDemandAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterDemandAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterDemandAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaterDemandAnalyses.
     */
    distinct?: WaterDemandAnalysisScalarFieldEnum | WaterDemandAnalysisScalarFieldEnum[]
  }

  /**
   * WaterDemandAnalysis findMany
   */
  export type WaterDemandAnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterDemandAnalysis
     */
    select?: WaterDemandAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterDemandAnalysis
     */
    omit?: WaterDemandAnalysisOmit<ExtArgs> | null
    /**
     * Filter, which WaterDemandAnalyses to fetch.
     */
    where?: WaterDemandAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterDemandAnalyses to fetch.
     */
    orderBy?: WaterDemandAnalysisOrderByWithRelationInput | WaterDemandAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WaterDemandAnalyses.
     */
    cursor?: WaterDemandAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterDemandAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterDemandAnalyses.
     */
    skip?: number
    distinct?: WaterDemandAnalysisScalarFieldEnum | WaterDemandAnalysisScalarFieldEnum[]
  }

  /**
   * WaterDemandAnalysis create
   */
  export type WaterDemandAnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterDemandAnalysis
     */
    select?: WaterDemandAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterDemandAnalysis
     */
    omit?: WaterDemandAnalysisOmit<ExtArgs> | null
    /**
     * The data needed to create a WaterDemandAnalysis.
     */
    data: XOR<WaterDemandAnalysisCreateInput, WaterDemandAnalysisUncheckedCreateInput>
  }

  /**
   * WaterDemandAnalysis createMany
   */
  export type WaterDemandAnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WaterDemandAnalyses.
     */
    data: WaterDemandAnalysisCreateManyInput | WaterDemandAnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaterDemandAnalysis createManyAndReturn
   */
  export type WaterDemandAnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterDemandAnalysis
     */
    select?: WaterDemandAnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaterDemandAnalysis
     */
    omit?: WaterDemandAnalysisOmit<ExtArgs> | null
    /**
     * The data used to create many WaterDemandAnalyses.
     */
    data: WaterDemandAnalysisCreateManyInput | WaterDemandAnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaterDemandAnalysis update
   */
  export type WaterDemandAnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterDemandAnalysis
     */
    select?: WaterDemandAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterDemandAnalysis
     */
    omit?: WaterDemandAnalysisOmit<ExtArgs> | null
    /**
     * The data needed to update a WaterDemandAnalysis.
     */
    data: XOR<WaterDemandAnalysisUpdateInput, WaterDemandAnalysisUncheckedUpdateInput>
    /**
     * Choose, which WaterDemandAnalysis to update.
     */
    where: WaterDemandAnalysisWhereUniqueInput
  }

  /**
   * WaterDemandAnalysis updateMany
   */
  export type WaterDemandAnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WaterDemandAnalyses.
     */
    data: XOR<WaterDemandAnalysisUpdateManyMutationInput, WaterDemandAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which WaterDemandAnalyses to update
     */
    where?: WaterDemandAnalysisWhereInput
    /**
     * Limit how many WaterDemandAnalyses to update.
     */
    limit?: number
  }

  /**
   * WaterDemandAnalysis updateManyAndReturn
   */
  export type WaterDemandAnalysisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterDemandAnalysis
     */
    select?: WaterDemandAnalysisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaterDemandAnalysis
     */
    omit?: WaterDemandAnalysisOmit<ExtArgs> | null
    /**
     * The data used to update WaterDemandAnalyses.
     */
    data: XOR<WaterDemandAnalysisUpdateManyMutationInput, WaterDemandAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which WaterDemandAnalyses to update
     */
    where?: WaterDemandAnalysisWhereInput
    /**
     * Limit how many WaterDemandAnalyses to update.
     */
    limit?: number
  }

  /**
   * WaterDemandAnalysis upsert
   */
  export type WaterDemandAnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterDemandAnalysis
     */
    select?: WaterDemandAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterDemandAnalysis
     */
    omit?: WaterDemandAnalysisOmit<ExtArgs> | null
    /**
     * The filter to search for the WaterDemandAnalysis to update in case it exists.
     */
    where: WaterDemandAnalysisWhereUniqueInput
    /**
     * In case the WaterDemandAnalysis found by the `where` argument doesn't exist, create a new WaterDemandAnalysis with this data.
     */
    create: XOR<WaterDemandAnalysisCreateInput, WaterDemandAnalysisUncheckedCreateInput>
    /**
     * In case the WaterDemandAnalysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaterDemandAnalysisUpdateInput, WaterDemandAnalysisUncheckedUpdateInput>
  }

  /**
   * WaterDemandAnalysis delete
   */
  export type WaterDemandAnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterDemandAnalysis
     */
    select?: WaterDemandAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterDemandAnalysis
     */
    omit?: WaterDemandAnalysisOmit<ExtArgs> | null
    /**
     * Filter which WaterDemandAnalysis to delete.
     */
    where: WaterDemandAnalysisWhereUniqueInput
  }

  /**
   * WaterDemandAnalysis deleteMany
   */
  export type WaterDemandAnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaterDemandAnalyses to delete
     */
    where?: WaterDemandAnalysisWhereInput
    /**
     * Limit how many WaterDemandAnalyses to delete.
     */
    limit?: number
  }

  /**
   * WaterDemandAnalysis without action
   */
  export type WaterDemandAnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterDemandAnalysis
     */
    select?: WaterDemandAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterDemandAnalysis
     */
    omit?: WaterDemandAnalysisOmit<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    role: 'role',
    phoneNumber: 'phoneNumber',
    location: 'location',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    type: 'type',
    status: 'status',
    priority: 'priority',
    latitude: 'latitude',
    longitude: 'longitude',
    address: 'address',
    images: 'images',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    resolvedAt: 'resolvedAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const ReportUpdateScalarFieldEnum: {
    id: 'id',
    reportId: 'reportId',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt',
    updatedBy: 'updatedBy'
  };

  export type ReportUpdateScalarFieldEnum = (typeof ReportUpdateScalarFieldEnum)[keyof typeof ReportUpdateScalarFieldEnum]


  export const SatelliteAnalysisScalarFieldEnum: {
    id: 'id',
    reportId: 'reportId',
    analysisType: 'analysisType',
    latitude: 'latitude',
    longitude: 'longitude',
    confidence: 'confidence',
    detectedChanges: 'detectedChanges',
    imageUrl: 'imageUrl',
    analysisDate: 'analysisDate',
    createdAt: 'createdAt'
  };

  export type SatelliteAnalysisScalarFieldEnum = (typeof SatelliteAnalysisScalarFieldEnum)[keyof typeof SatelliteAnalysisScalarFieldEnum]


  export const FloodRiskAreaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    coordinates: 'coordinates',
    riskLevel: 'riskLevel',
    lastUpdated: 'lastUpdated',
    predictions: 'predictions'
  };

  export type FloodRiskAreaScalarFieldEnum = (typeof FloodRiskAreaScalarFieldEnum)[keyof typeof FloodRiskAreaScalarFieldEnum]


  export const DevelopmentPlanScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    coordinates: 'coordinates',
    status: 'status',
    approvedBy: 'approvedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DevelopmentPlanScalarFieldEnum = (typeof DevelopmentPlanScalarFieldEnum)[keyof typeof DevelopmentPlanScalarFieldEnum]


  export const PublicConsultationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    coordinates: 'coordinates',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PublicConsultationScalarFieldEnum = (typeof PublicConsultationScalarFieldEnum)[keyof typeof PublicConsultationScalarFieldEnum]


  export const ConsultationVoteScalarFieldEnum: {
    id: 'id',
    consultationId: 'consultationId',
    userId: 'userId',
    vote: 'vote',
    createdAt: 'createdAt'
  };

  export type ConsultationVoteScalarFieldEnum = (typeof ConsultationVoteScalarFieldEnum)[keyof typeof ConsultationVoteScalarFieldEnum]


  export const ConsultationCommentScalarFieldEnum: {
    id: 'id',
    consultationId: 'consultationId',
    userId: 'userId',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type ConsultationCommentScalarFieldEnum = (typeof ConsultationCommentScalarFieldEnum)[keyof typeof ConsultationCommentScalarFieldEnum]


  export const WaterDemandAnalysisScalarFieldEnum: {
    id: 'id',
    area: 'area',
    coordinates: 'coordinates',
    populationDensity: 'populationDensity',
    predictedDemand: 'predictedDemand',
    currentSupply: 'currentSupply',
    shortage: 'shortage',
    analysisDate: 'analysisDate'
  };

  export type WaterDemandAnalysisScalarFieldEnum = (typeof WaterDemandAnalysisScalarFieldEnum)[keyof typeof WaterDemandAnalysisScalarFieldEnum]


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


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'ReportType'
   */
  export type EnumReportTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportType'>
    


  /**
   * Reference to a field of type 'ReportType[]'
   */
  export type ListEnumReportTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportType[]'>
    


  /**
   * Reference to a field of type 'ReportStatus'
   */
  export type EnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus'>
    


  /**
   * Reference to a field of type 'ReportStatus[]'
   */
  export type ListEnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    phoneNumber?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    reports?: ReportListRelationFilter
    consultationVotes?: ConsultationVoteListRelationFilter
    consultationComments?: ConsultationCommentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    reports?: ReportOrderByRelationAggregateInput
    consultationVotes?: ConsultationVoteOrderByRelationAggregateInput
    consultationComments?: ConsultationCommentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    phoneNumber?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    reports?: ReportListRelationFilter
    consultationVotes?: ConsultationVoteListRelationFilter
    consultationComments?: ConsultationCommentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    title?: StringFilter<"Report"> | string
    description?: StringFilter<"Report"> | string
    type?: EnumReportTypeFilter<"Report"> | $Enums.ReportType
    status?: EnumReportStatusFilter<"Report"> | $Enums.ReportStatus
    priority?: EnumPriorityFilter<"Report"> | $Enums.Priority
    latitude?: FloatFilter<"Report"> | number
    longitude?: FloatFilter<"Report"> | number
    address?: StringNullableFilter<"Report"> | string | null
    images?: StringNullableListFilter<"Report">
    userId?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Report"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    updates?: ReportUpdateListRelationFilter
    analysis?: SatelliteAnalysisListRelationFilter
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrderInput | SortOrder
    images?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    updates?: ReportUpdateOrderByRelationAggregateInput
    analysis?: SatelliteAnalysisOrderByRelationAggregateInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    title?: StringFilter<"Report"> | string
    description?: StringFilter<"Report"> | string
    type?: EnumReportTypeFilter<"Report"> | $Enums.ReportType
    status?: EnumReportStatusFilter<"Report"> | $Enums.ReportStatus
    priority?: EnumPriorityFilter<"Report"> | $Enums.Priority
    latitude?: FloatFilter<"Report"> | number
    longitude?: FloatFilter<"Report"> | number
    address?: StringNullableFilter<"Report"> | string | null
    images?: StringNullableListFilter<"Report">
    userId?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Report"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    updates?: ReportUpdateListRelationFilter
    analysis?: SatelliteAnalysisListRelationFilter
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrderInput | SortOrder
    images?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    _count?: ReportCountOrderByAggregateInput
    _avg?: ReportAvgOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
    _sum?: ReportSumOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    title?: StringWithAggregatesFilter<"Report"> | string
    description?: StringWithAggregatesFilter<"Report"> | string
    type?: EnumReportTypeWithAggregatesFilter<"Report"> | $Enums.ReportType
    status?: EnumReportStatusWithAggregatesFilter<"Report"> | $Enums.ReportStatus
    priority?: EnumPriorityWithAggregatesFilter<"Report"> | $Enums.Priority
    latitude?: FloatWithAggregatesFilter<"Report"> | number
    longitude?: FloatWithAggregatesFilter<"Report"> | number
    address?: StringNullableWithAggregatesFilter<"Report"> | string | null
    images?: StringNullableListFilter<"Report">
    userId?: StringWithAggregatesFilter<"Report"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Report"> | Date | string | null
  }

  export type ReportUpdateWhereInput = {
    AND?: ReportUpdateWhereInput | ReportUpdateWhereInput[]
    OR?: ReportUpdateWhereInput[]
    NOT?: ReportUpdateWhereInput | ReportUpdateWhereInput[]
    id?: StringFilter<"ReportUpdate"> | string
    reportId?: StringFilter<"ReportUpdate"> | string
    message?: StringFilter<"ReportUpdate"> | string
    status?: EnumReportStatusNullableFilter<"ReportUpdate"> | $Enums.ReportStatus | null
    createdAt?: DateTimeFilter<"ReportUpdate"> | Date | string
    updatedBy?: StringNullableFilter<"ReportUpdate"> | string | null
    report?: XOR<ReportScalarRelationFilter, ReportWhereInput>
  }

  export type ReportUpdateOrderByWithRelationInput = {
    id?: SortOrder
    reportId?: SortOrder
    message?: SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    report?: ReportOrderByWithRelationInput
  }

  export type ReportUpdateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportUpdateWhereInput | ReportUpdateWhereInput[]
    OR?: ReportUpdateWhereInput[]
    NOT?: ReportUpdateWhereInput | ReportUpdateWhereInput[]
    reportId?: StringFilter<"ReportUpdate"> | string
    message?: StringFilter<"ReportUpdate"> | string
    status?: EnumReportStatusNullableFilter<"ReportUpdate"> | $Enums.ReportStatus | null
    createdAt?: DateTimeFilter<"ReportUpdate"> | Date | string
    updatedBy?: StringNullableFilter<"ReportUpdate"> | string | null
    report?: XOR<ReportScalarRelationFilter, ReportWhereInput>
  }, "id">

  export type ReportUpdateOrderByWithAggregationInput = {
    id?: SortOrder
    reportId?: SortOrder
    message?: SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    _count?: ReportUpdateCountOrderByAggregateInput
    _max?: ReportUpdateMaxOrderByAggregateInput
    _min?: ReportUpdateMinOrderByAggregateInput
  }

  export type ReportUpdateScalarWhereWithAggregatesInput = {
    AND?: ReportUpdateScalarWhereWithAggregatesInput | ReportUpdateScalarWhereWithAggregatesInput[]
    OR?: ReportUpdateScalarWhereWithAggregatesInput[]
    NOT?: ReportUpdateScalarWhereWithAggregatesInput | ReportUpdateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReportUpdate"> | string
    reportId?: StringWithAggregatesFilter<"ReportUpdate"> | string
    message?: StringWithAggregatesFilter<"ReportUpdate"> | string
    status?: EnumReportStatusNullableWithAggregatesFilter<"ReportUpdate"> | $Enums.ReportStatus | null
    createdAt?: DateTimeWithAggregatesFilter<"ReportUpdate"> | Date | string
    updatedBy?: StringNullableWithAggregatesFilter<"ReportUpdate"> | string | null
  }

  export type SatelliteAnalysisWhereInput = {
    AND?: SatelliteAnalysisWhereInput | SatelliteAnalysisWhereInput[]
    OR?: SatelliteAnalysisWhereInput[]
    NOT?: SatelliteAnalysisWhereInput | SatelliteAnalysisWhereInput[]
    id?: StringFilter<"SatelliteAnalysis"> | string
    reportId?: StringNullableFilter<"SatelliteAnalysis"> | string | null
    analysisType?: StringFilter<"SatelliteAnalysis"> | string
    latitude?: FloatFilter<"SatelliteAnalysis"> | number
    longitude?: FloatFilter<"SatelliteAnalysis"> | number
    confidence?: FloatFilter<"SatelliteAnalysis"> | number
    detectedChanges?: JsonNullableFilter<"SatelliteAnalysis">
    imageUrl?: StringNullableFilter<"SatelliteAnalysis"> | string | null
    analysisDate?: DateTimeFilter<"SatelliteAnalysis"> | Date | string
    createdAt?: DateTimeFilter<"SatelliteAnalysis"> | Date | string
    report?: XOR<ReportNullableScalarRelationFilter, ReportWhereInput> | null
  }

  export type SatelliteAnalysisOrderByWithRelationInput = {
    id?: SortOrder
    reportId?: SortOrderInput | SortOrder
    analysisType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    confidence?: SortOrder
    detectedChanges?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    analysisDate?: SortOrder
    createdAt?: SortOrder
    report?: ReportOrderByWithRelationInput
  }

  export type SatelliteAnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SatelliteAnalysisWhereInput | SatelliteAnalysisWhereInput[]
    OR?: SatelliteAnalysisWhereInput[]
    NOT?: SatelliteAnalysisWhereInput | SatelliteAnalysisWhereInput[]
    reportId?: StringNullableFilter<"SatelliteAnalysis"> | string | null
    analysisType?: StringFilter<"SatelliteAnalysis"> | string
    latitude?: FloatFilter<"SatelliteAnalysis"> | number
    longitude?: FloatFilter<"SatelliteAnalysis"> | number
    confidence?: FloatFilter<"SatelliteAnalysis"> | number
    detectedChanges?: JsonNullableFilter<"SatelliteAnalysis">
    imageUrl?: StringNullableFilter<"SatelliteAnalysis"> | string | null
    analysisDate?: DateTimeFilter<"SatelliteAnalysis"> | Date | string
    createdAt?: DateTimeFilter<"SatelliteAnalysis"> | Date | string
    report?: XOR<ReportNullableScalarRelationFilter, ReportWhereInput> | null
  }, "id">

  export type SatelliteAnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    reportId?: SortOrderInput | SortOrder
    analysisType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    confidence?: SortOrder
    detectedChanges?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    analysisDate?: SortOrder
    createdAt?: SortOrder
    _count?: SatelliteAnalysisCountOrderByAggregateInput
    _avg?: SatelliteAnalysisAvgOrderByAggregateInput
    _max?: SatelliteAnalysisMaxOrderByAggregateInput
    _min?: SatelliteAnalysisMinOrderByAggregateInput
    _sum?: SatelliteAnalysisSumOrderByAggregateInput
  }

  export type SatelliteAnalysisScalarWhereWithAggregatesInput = {
    AND?: SatelliteAnalysisScalarWhereWithAggregatesInput | SatelliteAnalysisScalarWhereWithAggregatesInput[]
    OR?: SatelliteAnalysisScalarWhereWithAggregatesInput[]
    NOT?: SatelliteAnalysisScalarWhereWithAggregatesInput | SatelliteAnalysisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SatelliteAnalysis"> | string
    reportId?: StringNullableWithAggregatesFilter<"SatelliteAnalysis"> | string | null
    analysisType?: StringWithAggregatesFilter<"SatelliteAnalysis"> | string
    latitude?: FloatWithAggregatesFilter<"SatelliteAnalysis"> | number
    longitude?: FloatWithAggregatesFilter<"SatelliteAnalysis"> | number
    confidence?: FloatWithAggregatesFilter<"SatelliteAnalysis"> | number
    detectedChanges?: JsonNullableWithAggregatesFilter<"SatelliteAnalysis">
    imageUrl?: StringNullableWithAggregatesFilter<"SatelliteAnalysis"> | string | null
    analysisDate?: DateTimeWithAggregatesFilter<"SatelliteAnalysis"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"SatelliteAnalysis"> | Date | string
  }

  export type FloodRiskAreaWhereInput = {
    AND?: FloodRiskAreaWhereInput | FloodRiskAreaWhereInput[]
    OR?: FloodRiskAreaWhereInput[]
    NOT?: FloodRiskAreaWhereInput | FloodRiskAreaWhereInput[]
    id?: StringFilter<"FloodRiskArea"> | string
    name?: StringFilter<"FloodRiskArea"> | string
    coordinates?: JsonFilter<"FloodRiskArea">
    riskLevel?: StringFilter<"FloodRiskArea"> | string
    lastUpdated?: DateTimeFilter<"FloodRiskArea"> | Date | string
    predictions?: JsonNullableFilter<"FloodRiskArea">
  }

  export type FloodRiskAreaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    coordinates?: SortOrder
    riskLevel?: SortOrder
    lastUpdated?: SortOrder
    predictions?: SortOrderInput | SortOrder
  }

  export type FloodRiskAreaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FloodRiskAreaWhereInput | FloodRiskAreaWhereInput[]
    OR?: FloodRiskAreaWhereInput[]
    NOT?: FloodRiskAreaWhereInput | FloodRiskAreaWhereInput[]
    name?: StringFilter<"FloodRiskArea"> | string
    coordinates?: JsonFilter<"FloodRiskArea">
    riskLevel?: StringFilter<"FloodRiskArea"> | string
    lastUpdated?: DateTimeFilter<"FloodRiskArea"> | Date | string
    predictions?: JsonNullableFilter<"FloodRiskArea">
  }, "id">

  export type FloodRiskAreaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    coordinates?: SortOrder
    riskLevel?: SortOrder
    lastUpdated?: SortOrder
    predictions?: SortOrderInput | SortOrder
    _count?: FloodRiskAreaCountOrderByAggregateInput
    _max?: FloodRiskAreaMaxOrderByAggregateInput
    _min?: FloodRiskAreaMinOrderByAggregateInput
  }

  export type FloodRiskAreaScalarWhereWithAggregatesInput = {
    AND?: FloodRiskAreaScalarWhereWithAggregatesInput | FloodRiskAreaScalarWhereWithAggregatesInput[]
    OR?: FloodRiskAreaScalarWhereWithAggregatesInput[]
    NOT?: FloodRiskAreaScalarWhereWithAggregatesInput | FloodRiskAreaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FloodRiskArea"> | string
    name?: StringWithAggregatesFilter<"FloodRiskArea"> | string
    coordinates?: JsonWithAggregatesFilter<"FloodRiskArea">
    riskLevel?: StringWithAggregatesFilter<"FloodRiskArea"> | string
    lastUpdated?: DateTimeWithAggregatesFilter<"FloodRiskArea"> | Date | string
    predictions?: JsonNullableWithAggregatesFilter<"FloodRiskArea">
  }

  export type DevelopmentPlanWhereInput = {
    AND?: DevelopmentPlanWhereInput | DevelopmentPlanWhereInput[]
    OR?: DevelopmentPlanWhereInput[]
    NOT?: DevelopmentPlanWhereInput | DevelopmentPlanWhereInput[]
    id?: StringFilter<"DevelopmentPlan"> | string
    title?: StringFilter<"DevelopmentPlan"> | string
    description?: StringFilter<"DevelopmentPlan"> | string
    coordinates?: JsonFilter<"DevelopmentPlan">
    status?: StringFilter<"DevelopmentPlan"> | string
    approvedBy?: StringNullableFilter<"DevelopmentPlan"> | string | null
    createdAt?: DateTimeFilter<"DevelopmentPlan"> | Date | string
    updatedAt?: DateTimeFilter<"DevelopmentPlan"> | Date | string
  }

  export type DevelopmentPlanOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coordinates?: SortOrder
    status?: SortOrder
    approvedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DevelopmentPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DevelopmentPlanWhereInput | DevelopmentPlanWhereInput[]
    OR?: DevelopmentPlanWhereInput[]
    NOT?: DevelopmentPlanWhereInput | DevelopmentPlanWhereInput[]
    title?: StringFilter<"DevelopmentPlan"> | string
    description?: StringFilter<"DevelopmentPlan"> | string
    coordinates?: JsonFilter<"DevelopmentPlan">
    status?: StringFilter<"DevelopmentPlan"> | string
    approvedBy?: StringNullableFilter<"DevelopmentPlan"> | string | null
    createdAt?: DateTimeFilter<"DevelopmentPlan"> | Date | string
    updatedAt?: DateTimeFilter<"DevelopmentPlan"> | Date | string
  }, "id">

  export type DevelopmentPlanOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coordinates?: SortOrder
    status?: SortOrder
    approvedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DevelopmentPlanCountOrderByAggregateInput
    _max?: DevelopmentPlanMaxOrderByAggregateInput
    _min?: DevelopmentPlanMinOrderByAggregateInput
  }

  export type DevelopmentPlanScalarWhereWithAggregatesInput = {
    AND?: DevelopmentPlanScalarWhereWithAggregatesInput | DevelopmentPlanScalarWhereWithAggregatesInput[]
    OR?: DevelopmentPlanScalarWhereWithAggregatesInput[]
    NOT?: DevelopmentPlanScalarWhereWithAggregatesInput | DevelopmentPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DevelopmentPlan"> | string
    title?: StringWithAggregatesFilter<"DevelopmentPlan"> | string
    description?: StringWithAggregatesFilter<"DevelopmentPlan"> | string
    coordinates?: JsonWithAggregatesFilter<"DevelopmentPlan">
    status?: StringWithAggregatesFilter<"DevelopmentPlan"> | string
    approvedBy?: StringNullableWithAggregatesFilter<"DevelopmentPlan"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DevelopmentPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DevelopmentPlan"> | Date | string
  }

  export type PublicConsultationWhereInput = {
    AND?: PublicConsultationWhereInput | PublicConsultationWhereInput[]
    OR?: PublicConsultationWhereInput[]
    NOT?: PublicConsultationWhereInput | PublicConsultationWhereInput[]
    id?: StringFilter<"PublicConsultation"> | string
    title?: StringFilter<"PublicConsultation"> | string
    description?: StringFilter<"PublicConsultation"> | string
    startDate?: DateTimeFilter<"PublicConsultation"> | Date | string
    endDate?: DateTimeFilter<"PublicConsultation"> | Date | string
    status?: StringFilter<"PublicConsultation"> | string
    coordinates?: JsonNullableFilter<"PublicConsultation">
    createdAt?: DateTimeFilter<"PublicConsultation"> | Date | string
    updatedAt?: DateTimeFilter<"PublicConsultation"> | Date | string
    votes?: ConsultationVoteListRelationFilter
    comments?: ConsultationCommentListRelationFilter
  }

  export type PublicConsultationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    coordinates?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    votes?: ConsultationVoteOrderByRelationAggregateInput
    comments?: ConsultationCommentOrderByRelationAggregateInput
  }

  export type PublicConsultationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PublicConsultationWhereInput | PublicConsultationWhereInput[]
    OR?: PublicConsultationWhereInput[]
    NOT?: PublicConsultationWhereInput | PublicConsultationWhereInput[]
    title?: StringFilter<"PublicConsultation"> | string
    description?: StringFilter<"PublicConsultation"> | string
    startDate?: DateTimeFilter<"PublicConsultation"> | Date | string
    endDate?: DateTimeFilter<"PublicConsultation"> | Date | string
    status?: StringFilter<"PublicConsultation"> | string
    coordinates?: JsonNullableFilter<"PublicConsultation">
    createdAt?: DateTimeFilter<"PublicConsultation"> | Date | string
    updatedAt?: DateTimeFilter<"PublicConsultation"> | Date | string
    votes?: ConsultationVoteListRelationFilter
    comments?: ConsultationCommentListRelationFilter
  }, "id">

  export type PublicConsultationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    coordinates?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PublicConsultationCountOrderByAggregateInput
    _max?: PublicConsultationMaxOrderByAggregateInput
    _min?: PublicConsultationMinOrderByAggregateInput
  }

  export type PublicConsultationScalarWhereWithAggregatesInput = {
    AND?: PublicConsultationScalarWhereWithAggregatesInput | PublicConsultationScalarWhereWithAggregatesInput[]
    OR?: PublicConsultationScalarWhereWithAggregatesInput[]
    NOT?: PublicConsultationScalarWhereWithAggregatesInput | PublicConsultationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PublicConsultation"> | string
    title?: StringWithAggregatesFilter<"PublicConsultation"> | string
    description?: StringWithAggregatesFilter<"PublicConsultation"> | string
    startDate?: DateTimeWithAggregatesFilter<"PublicConsultation"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"PublicConsultation"> | Date | string
    status?: StringWithAggregatesFilter<"PublicConsultation"> | string
    coordinates?: JsonNullableWithAggregatesFilter<"PublicConsultation">
    createdAt?: DateTimeWithAggregatesFilter<"PublicConsultation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PublicConsultation"> | Date | string
  }

  export type ConsultationVoteWhereInput = {
    AND?: ConsultationVoteWhereInput | ConsultationVoteWhereInput[]
    OR?: ConsultationVoteWhereInput[]
    NOT?: ConsultationVoteWhereInput | ConsultationVoteWhereInput[]
    id?: StringFilter<"ConsultationVote"> | string
    consultationId?: StringFilter<"ConsultationVote"> | string
    userId?: StringFilter<"ConsultationVote"> | string
    vote?: StringFilter<"ConsultationVote"> | string
    createdAt?: DateTimeFilter<"ConsultationVote"> | Date | string
    consultation?: XOR<PublicConsultationScalarRelationFilter, PublicConsultationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ConsultationVoteOrderByWithRelationInput = {
    id?: SortOrder
    consultationId?: SortOrder
    userId?: SortOrder
    vote?: SortOrder
    createdAt?: SortOrder
    consultation?: PublicConsultationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ConsultationVoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    consultationId_userId?: ConsultationVoteConsultationIdUserIdCompoundUniqueInput
    AND?: ConsultationVoteWhereInput | ConsultationVoteWhereInput[]
    OR?: ConsultationVoteWhereInput[]
    NOT?: ConsultationVoteWhereInput | ConsultationVoteWhereInput[]
    consultationId?: StringFilter<"ConsultationVote"> | string
    userId?: StringFilter<"ConsultationVote"> | string
    vote?: StringFilter<"ConsultationVote"> | string
    createdAt?: DateTimeFilter<"ConsultationVote"> | Date | string
    consultation?: XOR<PublicConsultationScalarRelationFilter, PublicConsultationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "consultationId_userId">

  export type ConsultationVoteOrderByWithAggregationInput = {
    id?: SortOrder
    consultationId?: SortOrder
    userId?: SortOrder
    vote?: SortOrder
    createdAt?: SortOrder
    _count?: ConsultationVoteCountOrderByAggregateInput
    _max?: ConsultationVoteMaxOrderByAggregateInput
    _min?: ConsultationVoteMinOrderByAggregateInput
  }

  export type ConsultationVoteScalarWhereWithAggregatesInput = {
    AND?: ConsultationVoteScalarWhereWithAggregatesInput | ConsultationVoteScalarWhereWithAggregatesInput[]
    OR?: ConsultationVoteScalarWhereWithAggregatesInput[]
    NOT?: ConsultationVoteScalarWhereWithAggregatesInput | ConsultationVoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConsultationVote"> | string
    consultationId?: StringWithAggregatesFilter<"ConsultationVote"> | string
    userId?: StringWithAggregatesFilter<"ConsultationVote"> | string
    vote?: StringWithAggregatesFilter<"ConsultationVote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ConsultationVote"> | Date | string
  }

  export type ConsultationCommentWhereInput = {
    AND?: ConsultationCommentWhereInput | ConsultationCommentWhereInput[]
    OR?: ConsultationCommentWhereInput[]
    NOT?: ConsultationCommentWhereInput | ConsultationCommentWhereInput[]
    id?: StringFilter<"ConsultationComment"> | string
    consultationId?: StringFilter<"ConsultationComment"> | string
    userId?: StringFilter<"ConsultationComment"> | string
    comment?: StringFilter<"ConsultationComment"> | string
    createdAt?: DateTimeFilter<"ConsultationComment"> | Date | string
    consultation?: XOR<PublicConsultationScalarRelationFilter, PublicConsultationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ConsultationCommentOrderByWithRelationInput = {
    id?: SortOrder
    consultationId?: SortOrder
    userId?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    consultation?: PublicConsultationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ConsultationCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConsultationCommentWhereInput | ConsultationCommentWhereInput[]
    OR?: ConsultationCommentWhereInput[]
    NOT?: ConsultationCommentWhereInput | ConsultationCommentWhereInput[]
    consultationId?: StringFilter<"ConsultationComment"> | string
    userId?: StringFilter<"ConsultationComment"> | string
    comment?: StringFilter<"ConsultationComment"> | string
    createdAt?: DateTimeFilter<"ConsultationComment"> | Date | string
    consultation?: XOR<PublicConsultationScalarRelationFilter, PublicConsultationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ConsultationCommentOrderByWithAggregationInput = {
    id?: SortOrder
    consultationId?: SortOrder
    userId?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    _count?: ConsultationCommentCountOrderByAggregateInput
    _max?: ConsultationCommentMaxOrderByAggregateInput
    _min?: ConsultationCommentMinOrderByAggregateInput
  }

  export type ConsultationCommentScalarWhereWithAggregatesInput = {
    AND?: ConsultationCommentScalarWhereWithAggregatesInput | ConsultationCommentScalarWhereWithAggregatesInput[]
    OR?: ConsultationCommentScalarWhereWithAggregatesInput[]
    NOT?: ConsultationCommentScalarWhereWithAggregatesInput | ConsultationCommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConsultationComment"> | string
    consultationId?: StringWithAggregatesFilter<"ConsultationComment"> | string
    userId?: StringWithAggregatesFilter<"ConsultationComment"> | string
    comment?: StringWithAggregatesFilter<"ConsultationComment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ConsultationComment"> | Date | string
  }

  export type WaterDemandAnalysisWhereInput = {
    AND?: WaterDemandAnalysisWhereInput | WaterDemandAnalysisWhereInput[]
    OR?: WaterDemandAnalysisWhereInput[]
    NOT?: WaterDemandAnalysisWhereInput | WaterDemandAnalysisWhereInput[]
    id?: StringFilter<"WaterDemandAnalysis"> | string
    area?: StringFilter<"WaterDemandAnalysis"> | string
    coordinates?: JsonFilter<"WaterDemandAnalysis">
    populationDensity?: FloatFilter<"WaterDemandAnalysis"> | number
    predictedDemand?: FloatFilter<"WaterDemandAnalysis"> | number
    currentSupply?: FloatNullableFilter<"WaterDemandAnalysis"> | number | null
    shortage?: FloatNullableFilter<"WaterDemandAnalysis"> | number | null
    analysisDate?: DateTimeFilter<"WaterDemandAnalysis"> | Date | string
  }

  export type WaterDemandAnalysisOrderByWithRelationInput = {
    id?: SortOrder
    area?: SortOrder
    coordinates?: SortOrder
    populationDensity?: SortOrder
    predictedDemand?: SortOrder
    currentSupply?: SortOrderInput | SortOrder
    shortage?: SortOrderInput | SortOrder
    analysisDate?: SortOrder
  }

  export type WaterDemandAnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WaterDemandAnalysisWhereInput | WaterDemandAnalysisWhereInput[]
    OR?: WaterDemandAnalysisWhereInput[]
    NOT?: WaterDemandAnalysisWhereInput | WaterDemandAnalysisWhereInput[]
    area?: StringFilter<"WaterDemandAnalysis"> | string
    coordinates?: JsonFilter<"WaterDemandAnalysis">
    populationDensity?: FloatFilter<"WaterDemandAnalysis"> | number
    predictedDemand?: FloatFilter<"WaterDemandAnalysis"> | number
    currentSupply?: FloatNullableFilter<"WaterDemandAnalysis"> | number | null
    shortage?: FloatNullableFilter<"WaterDemandAnalysis"> | number | null
    analysisDate?: DateTimeFilter<"WaterDemandAnalysis"> | Date | string
  }, "id">

  export type WaterDemandAnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    area?: SortOrder
    coordinates?: SortOrder
    populationDensity?: SortOrder
    predictedDemand?: SortOrder
    currentSupply?: SortOrderInput | SortOrder
    shortage?: SortOrderInput | SortOrder
    analysisDate?: SortOrder
    _count?: WaterDemandAnalysisCountOrderByAggregateInput
    _avg?: WaterDemandAnalysisAvgOrderByAggregateInput
    _max?: WaterDemandAnalysisMaxOrderByAggregateInput
    _min?: WaterDemandAnalysisMinOrderByAggregateInput
    _sum?: WaterDemandAnalysisSumOrderByAggregateInput
  }

  export type WaterDemandAnalysisScalarWhereWithAggregatesInput = {
    AND?: WaterDemandAnalysisScalarWhereWithAggregatesInput | WaterDemandAnalysisScalarWhereWithAggregatesInput[]
    OR?: WaterDemandAnalysisScalarWhereWithAggregatesInput[]
    NOT?: WaterDemandAnalysisScalarWhereWithAggregatesInput | WaterDemandAnalysisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WaterDemandAnalysis"> | string
    area?: StringWithAggregatesFilter<"WaterDemandAnalysis"> | string
    coordinates?: JsonWithAggregatesFilter<"WaterDemandAnalysis">
    populationDensity?: FloatWithAggregatesFilter<"WaterDemandAnalysis"> | number
    predictedDemand?: FloatWithAggregatesFilter<"WaterDemandAnalysis"> | number
    currentSupply?: FloatNullableWithAggregatesFilter<"WaterDemandAnalysis"> | number | null
    shortage?: FloatNullableWithAggregatesFilter<"WaterDemandAnalysis"> | number | null
    analysisDate?: DateTimeWithAggregatesFilter<"WaterDemandAnalysis"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    phoneNumber?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
    consultationVotes?: ConsultationVoteCreateNestedManyWithoutUserInput
    consultationComments?: ConsultationCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    phoneNumber?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    consultationVotes?: ConsultationVoteUncheckedCreateNestedManyWithoutUserInput
    consultationComments?: ConsultationCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
    consultationVotes?: ConsultationVoteUpdateManyWithoutUserNestedInput
    consultationComments?: ConsultationCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    consultationVotes?: ConsultationVoteUncheckedUpdateManyWithoutUserNestedInput
    consultationComments?: ConsultationCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    phoneNumber?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    id?: string
    title: string
    description: string
    type: $Enums.ReportType
    status?: $Enums.ReportStatus
    priority?: $Enums.Priority
    latitude: number
    longitude: number
    address?: string | null
    images?: ReportCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    user: UserCreateNestedOneWithoutReportsInput
    updates?: ReportUpdateCreateNestedManyWithoutReportInput
    analysis?: SatelliteAnalysisCreateNestedManyWithoutReportInput
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    type: $Enums.ReportType
    status?: $Enums.ReportStatus
    priority?: $Enums.Priority
    latitude: number
    longitude: number
    address?: string | null
    images?: ReportCreateimagesInput | string[]
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    updates?: ReportUpdateUncheckedCreateNestedManyWithoutReportInput
    analysis?: SatelliteAnalysisUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ReportUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutReportsNestedInput
    updates?: ReportUpdateUpdateManyWithoutReportNestedInput
    analysis?: SatelliteAnalysisUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ReportUpdateimagesInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updates?: ReportUpdateUncheckedUpdateManyWithoutReportNestedInput
    analysis?: SatelliteAnalysisUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportCreateManyInput = {
    id?: string
    title: string
    description: string
    type: $Enums.ReportType
    status?: $Enums.ReportStatus
    priority?: $Enums.Priority
    latitude: number
    longitude: number
    address?: string | null
    images?: ReportCreateimagesInput | string[]
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ReportUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ReportUpdateimagesInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportUpdateCreateInput = {
    id?: string
    message: string
    status?: $Enums.ReportStatus | null
    createdAt?: Date | string
    updatedBy?: string | null
    report: ReportCreateNestedOneWithoutUpdatesInput
  }

  export type ReportUpdateUncheckedCreateInput = {
    id?: string
    reportId: string
    message: string
    status?: $Enums.ReportStatus | null
    createdAt?: Date | string
    updatedBy?: string | null
  }

  export type ReportUpdateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    report?: ReportUpdateOneRequiredWithoutUpdatesNestedInput
  }

  export type ReportUpdateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReportUpdateCreateManyInput = {
    id?: string
    reportId: string
    message: string
    status?: $Enums.ReportStatus | null
    createdAt?: Date | string
    updatedBy?: string | null
  }

  export type ReportUpdateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReportUpdateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SatelliteAnalysisCreateInput = {
    id?: string
    analysisType: string
    latitude: number
    longitude: number
    confidence: number
    detectedChanges?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    analysisDate?: Date | string
    createdAt?: Date | string
    report?: ReportCreateNestedOneWithoutAnalysisInput
  }

  export type SatelliteAnalysisUncheckedCreateInput = {
    id?: string
    reportId?: string | null
    analysisType: string
    latitude: number
    longitude: number
    confidence: number
    detectedChanges?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    analysisDate?: Date | string
    createdAt?: Date | string
  }

  export type SatelliteAnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisType?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    detectedChanges?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    analysisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: ReportUpdateOneWithoutAnalysisNestedInput
  }

  export type SatelliteAnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: NullableStringFieldUpdateOperationsInput | string | null
    analysisType?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    detectedChanges?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    analysisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SatelliteAnalysisCreateManyInput = {
    id?: string
    reportId?: string | null
    analysisType: string
    latitude: number
    longitude: number
    confidence: number
    detectedChanges?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    analysisDate?: Date | string
    createdAt?: Date | string
  }

  export type SatelliteAnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisType?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    detectedChanges?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    analysisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SatelliteAnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: NullableStringFieldUpdateOperationsInput | string | null
    analysisType?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    detectedChanges?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    analysisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FloodRiskAreaCreateInput = {
    id?: string
    name: string
    coordinates: JsonNullValueInput | InputJsonValue
    riskLevel: string
    lastUpdated?: Date | string
    predictions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FloodRiskAreaUncheckedCreateInput = {
    id?: string
    name: string
    coordinates: JsonNullValueInput | InputJsonValue
    riskLevel: string
    lastUpdated?: Date | string
    predictions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FloodRiskAreaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coordinates?: JsonNullValueInput | InputJsonValue
    riskLevel?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    predictions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FloodRiskAreaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coordinates?: JsonNullValueInput | InputJsonValue
    riskLevel?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    predictions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FloodRiskAreaCreateManyInput = {
    id?: string
    name: string
    coordinates: JsonNullValueInput | InputJsonValue
    riskLevel: string
    lastUpdated?: Date | string
    predictions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FloodRiskAreaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coordinates?: JsonNullValueInput | InputJsonValue
    riskLevel?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    predictions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FloodRiskAreaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coordinates?: JsonNullValueInput | InputJsonValue
    riskLevel?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    predictions?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DevelopmentPlanCreateInput = {
    id?: string
    title: string
    description: string
    coordinates: JsonNullValueInput | InputJsonValue
    status: string
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DevelopmentPlanUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    coordinates: JsonNullValueInput | InputJsonValue
    status: string
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DevelopmentPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coordinates?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevelopmentPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coordinates?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevelopmentPlanCreateManyInput = {
    id?: string
    title: string
    description: string
    coordinates: JsonNullValueInput | InputJsonValue
    status: string
    approvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DevelopmentPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coordinates?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevelopmentPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coordinates?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicConsultationCreateInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    status: string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: ConsultationVoteCreateNestedManyWithoutConsultationInput
    comments?: ConsultationCommentCreateNestedManyWithoutConsultationInput
  }

  export type PublicConsultationUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    status: string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: ConsultationVoteUncheckedCreateNestedManyWithoutConsultationInput
    comments?: ConsultationCommentUncheckedCreateNestedManyWithoutConsultationInput
  }

  export type PublicConsultationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: ConsultationVoteUpdateManyWithoutConsultationNestedInput
    comments?: ConsultationCommentUpdateManyWithoutConsultationNestedInput
  }

  export type PublicConsultationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: ConsultationVoteUncheckedUpdateManyWithoutConsultationNestedInput
    comments?: ConsultationCommentUncheckedUpdateManyWithoutConsultationNestedInput
  }

  export type PublicConsultationCreateManyInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    status: string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicConsultationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicConsultationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationVoteCreateInput = {
    id?: string
    vote: string
    createdAt?: Date | string
    consultation: PublicConsultationCreateNestedOneWithoutVotesInput
    user: UserCreateNestedOneWithoutConsultationVotesInput
  }

  export type ConsultationVoteUncheckedCreateInput = {
    id?: string
    consultationId: string
    userId: string
    vote: string
    createdAt?: Date | string
  }

  export type ConsultationVoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultation?: PublicConsultationUpdateOneRequiredWithoutVotesNestedInput
    user?: UserUpdateOneRequiredWithoutConsultationVotesNestedInput
  }

  export type ConsultationVoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationVoteCreateManyInput = {
    id?: string
    consultationId: string
    userId: string
    vote: string
    createdAt?: Date | string
  }

  export type ConsultationVoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationVoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationCommentCreateInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    consultation: PublicConsultationCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutConsultationCommentsInput
  }

  export type ConsultationCommentUncheckedCreateInput = {
    id?: string
    consultationId: string
    userId: string
    comment: string
    createdAt?: Date | string
  }

  export type ConsultationCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultation?: PublicConsultationUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutConsultationCommentsNestedInput
  }

  export type ConsultationCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationCommentCreateManyInput = {
    id?: string
    consultationId: string
    userId: string
    comment: string
    createdAt?: Date | string
  }

  export type ConsultationCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterDemandAnalysisCreateInput = {
    id?: string
    area: string
    coordinates: JsonNullValueInput | InputJsonValue
    populationDensity: number
    predictedDemand: number
    currentSupply?: number | null
    shortage?: number | null
    analysisDate?: Date | string
  }

  export type WaterDemandAnalysisUncheckedCreateInput = {
    id?: string
    area: string
    coordinates: JsonNullValueInput | InputJsonValue
    populationDensity: number
    predictedDemand: number
    currentSupply?: number | null
    shortage?: number | null
    analysisDate?: Date | string
  }

  export type WaterDemandAnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    coordinates?: JsonNullValueInput | InputJsonValue
    populationDensity?: FloatFieldUpdateOperationsInput | number
    predictedDemand?: FloatFieldUpdateOperationsInput | number
    currentSupply?: NullableFloatFieldUpdateOperationsInput | number | null
    shortage?: NullableFloatFieldUpdateOperationsInput | number | null
    analysisDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterDemandAnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    coordinates?: JsonNullValueInput | InputJsonValue
    populationDensity?: FloatFieldUpdateOperationsInput | number
    predictedDemand?: FloatFieldUpdateOperationsInput | number
    currentSupply?: NullableFloatFieldUpdateOperationsInput | number | null
    shortage?: NullableFloatFieldUpdateOperationsInput | number | null
    analysisDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterDemandAnalysisCreateManyInput = {
    id?: string
    area: string
    coordinates: JsonNullValueInput | InputJsonValue
    populationDensity: number
    predictedDemand: number
    currentSupply?: number | null
    shortage?: number | null
    analysisDate?: Date | string
  }

  export type WaterDemandAnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    coordinates?: JsonNullValueInput | InputJsonValue
    populationDensity?: FloatFieldUpdateOperationsInput | number
    predictedDemand?: FloatFieldUpdateOperationsInput | number
    currentSupply?: NullableFloatFieldUpdateOperationsInput | number | null
    shortage?: NullableFloatFieldUpdateOperationsInput | number | null
    analysisDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterDemandAnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    coordinates?: JsonNullValueInput | InputJsonValue
    populationDensity?: FloatFieldUpdateOperationsInput | number
    predictedDemand?: FloatFieldUpdateOperationsInput | number
    currentSupply?: NullableFloatFieldUpdateOperationsInput | number | null
    shortage?: NullableFloatFieldUpdateOperationsInput | number | null
    analysisDate?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type ConsultationVoteListRelationFilter = {
    every?: ConsultationVoteWhereInput
    some?: ConsultationVoteWhereInput
    none?: ConsultationVoteWhereInput
  }

  export type ConsultationCommentListRelationFilter = {
    every?: ConsultationCommentWhereInput
    some?: ConsultationCommentWhereInput
    none?: ConsultationCommentWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsultationVoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsultationCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    phoneNumber?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    phoneNumber?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    phoneNumber?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type EnumReportTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeFilter<$PrismaModel> | $Enums.ReportType
  }

  export type EnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ReportUpdateListRelationFilter = {
    every?: ReportUpdateWhereInput
    some?: ReportUpdateWhereInput
    none?: ReportUpdateWhereInput
  }

  export type SatelliteAnalysisListRelationFilter = {
    every?: SatelliteAnalysisWhereInput
    some?: SatelliteAnalysisWhereInput
    none?: SatelliteAnalysisWhereInput
  }

  export type ReportUpdateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SatelliteAnalysisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    images?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type ReportAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type ReportSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnumReportTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReportType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportTypeFilter<$PrismaModel>
    _max?: NestedEnumReportTypeFilter<$PrismaModel>
  }

  export type EnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumReportStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumReportStatusNullableFilter<$PrismaModel> | $Enums.ReportStatus | null
  }

  export type ReportScalarRelationFilter = {
    is?: ReportWhereInput
    isNot?: ReportWhereInput
  }

  export type ReportUpdateCountOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ReportUpdateMaxOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type ReportUpdateMinOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type EnumReportStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumReportStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumReportStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumReportStatusNullableFilter<$PrismaModel>
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ReportNullableScalarRelationFilter = {
    is?: ReportWhereInput | null
    isNot?: ReportWhereInput | null
  }

  export type SatelliteAnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    analysisType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    confidence?: SortOrder
    detectedChanges?: SortOrder
    imageUrl?: SortOrder
    analysisDate?: SortOrder
    createdAt?: SortOrder
  }

  export type SatelliteAnalysisAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    confidence?: SortOrder
  }

  export type SatelliteAnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    analysisType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    confidence?: SortOrder
    imageUrl?: SortOrder
    analysisDate?: SortOrder
    createdAt?: SortOrder
  }

  export type SatelliteAnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    analysisType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    confidence?: SortOrder
    imageUrl?: SortOrder
    analysisDate?: SortOrder
    createdAt?: SortOrder
  }

  export type SatelliteAnalysisSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    confidence?: SortOrder
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloodRiskAreaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coordinates?: SortOrder
    riskLevel?: SortOrder
    lastUpdated?: SortOrder
    predictions?: SortOrder
  }

  export type FloodRiskAreaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    riskLevel?: SortOrder
    lastUpdated?: SortOrder
  }

  export type FloodRiskAreaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    riskLevel?: SortOrder
    lastUpdated?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DevelopmentPlanCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coordinates?: SortOrder
    status?: SortOrder
    approvedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DevelopmentPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    approvedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DevelopmentPlanMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    approvedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicConsultationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    coordinates?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicConsultationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicConsultationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicConsultationScalarRelationFilter = {
    is?: PublicConsultationWhereInput
    isNot?: PublicConsultationWhereInput
  }

  export type ConsultationVoteConsultationIdUserIdCompoundUniqueInput = {
    consultationId: string
    userId: string
  }

  export type ConsultationVoteCountOrderByAggregateInput = {
    id?: SortOrder
    consultationId?: SortOrder
    userId?: SortOrder
    vote?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsultationVoteMaxOrderByAggregateInput = {
    id?: SortOrder
    consultationId?: SortOrder
    userId?: SortOrder
    vote?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsultationVoteMinOrderByAggregateInput = {
    id?: SortOrder
    consultationId?: SortOrder
    userId?: SortOrder
    vote?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsultationCommentCountOrderByAggregateInput = {
    id?: SortOrder
    consultationId?: SortOrder
    userId?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsultationCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    consultationId?: SortOrder
    userId?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsultationCommentMinOrderByAggregateInput = {
    id?: SortOrder
    consultationId?: SortOrder
    userId?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type WaterDemandAnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    area?: SortOrder
    coordinates?: SortOrder
    populationDensity?: SortOrder
    predictedDemand?: SortOrder
    currentSupply?: SortOrder
    shortage?: SortOrder
    analysisDate?: SortOrder
  }

  export type WaterDemandAnalysisAvgOrderByAggregateInput = {
    populationDensity?: SortOrder
    predictedDemand?: SortOrder
    currentSupply?: SortOrder
    shortage?: SortOrder
  }

  export type WaterDemandAnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    area?: SortOrder
    populationDensity?: SortOrder
    predictedDemand?: SortOrder
    currentSupply?: SortOrder
    shortage?: SortOrder
    analysisDate?: SortOrder
  }

  export type WaterDemandAnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    area?: SortOrder
    populationDensity?: SortOrder
    predictedDemand?: SortOrder
    currentSupply?: SortOrder
    shortage?: SortOrder
    analysisDate?: SortOrder
  }

  export type WaterDemandAnalysisSumOrderByAggregateInput = {
    populationDensity?: SortOrder
    predictedDemand?: SortOrder
    currentSupply?: SortOrder
    shortage?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutUserInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ConsultationVoteCreateNestedManyWithoutUserInput = {
    create?: XOR<ConsultationVoteCreateWithoutUserInput, ConsultationVoteUncheckedCreateWithoutUserInput> | ConsultationVoteCreateWithoutUserInput[] | ConsultationVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsultationVoteCreateOrConnectWithoutUserInput | ConsultationVoteCreateOrConnectWithoutUserInput[]
    createMany?: ConsultationVoteCreateManyUserInputEnvelope
    connect?: ConsultationVoteWhereUniqueInput | ConsultationVoteWhereUniqueInput[]
  }

  export type ConsultationCommentCreateNestedManyWithoutUserInput = {
    create?: XOR<ConsultationCommentCreateWithoutUserInput, ConsultationCommentUncheckedCreateWithoutUserInput> | ConsultationCommentCreateWithoutUserInput[] | ConsultationCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsultationCommentCreateOrConnectWithoutUserInput | ConsultationCommentCreateOrConnectWithoutUserInput[]
    createMany?: ConsultationCommentCreateManyUserInputEnvelope
    connect?: ConsultationCommentWhereUniqueInput | ConsultationCommentWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ConsultationVoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConsultationVoteCreateWithoutUserInput, ConsultationVoteUncheckedCreateWithoutUserInput> | ConsultationVoteCreateWithoutUserInput[] | ConsultationVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsultationVoteCreateOrConnectWithoutUserInput | ConsultationVoteCreateOrConnectWithoutUserInput[]
    createMany?: ConsultationVoteCreateManyUserInputEnvelope
    connect?: ConsultationVoteWhereUniqueInput | ConsultationVoteWhereUniqueInput[]
  }

  export type ConsultationCommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConsultationCommentCreateWithoutUserInput, ConsultationCommentUncheckedCreateWithoutUserInput> | ConsultationCommentCreateWithoutUserInput[] | ConsultationCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsultationCommentCreateOrConnectWithoutUserInput | ConsultationCommentCreateOrConnectWithoutUserInput[]
    createMany?: ConsultationCommentCreateManyUserInputEnvelope
    connect?: ConsultationCommentWhereUniqueInput | ConsultationCommentWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutUserInput | ReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutUserInput | ReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutUserInput | ReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ConsultationVoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConsultationVoteCreateWithoutUserInput, ConsultationVoteUncheckedCreateWithoutUserInput> | ConsultationVoteCreateWithoutUserInput[] | ConsultationVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsultationVoteCreateOrConnectWithoutUserInput | ConsultationVoteCreateOrConnectWithoutUserInput[]
    upsert?: ConsultationVoteUpsertWithWhereUniqueWithoutUserInput | ConsultationVoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConsultationVoteCreateManyUserInputEnvelope
    set?: ConsultationVoteWhereUniqueInput | ConsultationVoteWhereUniqueInput[]
    disconnect?: ConsultationVoteWhereUniqueInput | ConsultationVoteWhereUniqueInput[]
    delete?: ConsultationVoteWhereUniqueInput | ConsultationVoteWhereUniqueInput[]
    connect?: ConsultationVoteWhereUniqueInput | ConsultationVoteWhereUniqueInput[]
    update?: ConsultationVoteUpdateWithWhereUniqueWithoutUserInput | ConsultationVoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConsultationVoteUpdateManyWithWhereWithoutUserInput | ConsultationVoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConsultationVoteScalarWhereInput | ConsultationVoteScalarWhereInput[]
  }

  export type ConsultationCommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConsultationCommentCreateWithoutUserInput, ConsultationCommentUncheckedCreateWithoutUserInput> | ConsultationCommentCreateWithoutUserInput[] | ConsultationCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsultationCommentCreateOrConnectWithoutUserInput | ConsultationCommentCreateOrConnectWithoutUserInput[]
    upsert?: ConsultationCommentUpsertWithWhereUniqueWithoutUserInput | ConsultationCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConsultationCommentCreateManyUserInputEnvelope
    set?: ConsultationCommentWhereUniqueInput | ConsultationCommentWhereUniqueInput[]
    disconnect?: ConsultationCommentWhereUniqueInput | ConsultationCommentWhereUniqueInput[]
    delete?: ConsultationCommentWhereUniqueInput | ConsultationCommentWhereUniqueInput[]
    connect?: ConsultationCommentWhereUniqueInput | ConsultationCommentWhereUniqueInput[]
    update?: ConsultationCommentUpdateWithWhereUniqueWithoutUserInput | ConsultationCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConsultationCommentUpdateManyWithWhereWithoutUserInput | ConsultationCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConsultationCommentScalarWhereInput | ConsultationCommentScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput> | ReportCreateWithoutUserInput[] | ReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutUserInput | ReportCreateOrConnectWithoutUserInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutUserInput | ReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReportCreateManyUserInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutUserInput | ReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutUserInput | ReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ConsultationVoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConsultationVoteCreateWithoutUserInput, ConsultationVoteUncheckedCreateWithoutUserInput> | ConsultationVoteCreateWithoutUserInput[] | ConsultationVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsultationVoteCreateOrConnectWithoutUserInput | ConsultationVoteCreateOrConnectWithoutUserInput[]
    upsert?: ConsultationVoteUpsertWithWhereUniqueWithoutUserInput | ConsultationVoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConsultationVoteCreateManyUserInputEnvelope
    set?: ConsultationVoteWhereUniqueInput | ConsultationVoteWhereUniqueInput[]
    disconnect?: ConsultationVoteWhereUniqueInput | ConsultationVoteWhereUniqueInput[]
    delete?: ConsultationVoteWhereUniqueInput | ConsultationVoteWhereUniqueInput[]
    connect?: ConsultationVoteWhereUniqueInput | ConsultationVoteWhereUniqueInput[]
    update?: ConsultationVoteUpdateWithWhereUniqueWithoutUserInput | ConsultationVoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConsultationVoteUpdateManyWithWhereWithoutUserInput | ConsultationVoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConsultationVoteScalarWhereInput | ConsultationVoteScalarWhereInput[]
  }

  export type ConsultationCommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConsultationCommentCreateWithoutUserInput, ConsultationCommentUncheckedCreateWithoutUserInput> | ConsultationCommentCreateWithoutUserInput[] | ConsultationCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsultationCommentCreateOrConnectWithoutUserInput | ConsultationCommentCreateOrConnectWithoutUserInput[]
    upsert?: ConsultationCommentUpsertWithWhereUniqueWithoutUserInput | ConsultationCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConsultationCommentCreateManyUserInputEnvelope
    set?: ConsultationCommentWhereUniqueInput | ConsultationCommentWhereUniqueInput[]
    disconnect?: ConsultationCommentWhereUniqueInput | ConsultationCommentWhereUniqueInput[]
    delete?: ConsultationCommentWhereUniqueInput | ConsultationCommentWhereUniqueInput[]
    connect?: ConsultationCommentWhereUniqueInput | ConsultationCommentWhereUniqueInput[]
    update?: ConsultationCommentUpdateWithWhereUniqueWithoutUserInput | ConsultationCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConsultationCommentUpdateManyWithWhereWithoutUserInput | ConsultationCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConsultationCommentScalarWhereInput | ConsultationCommentScalarWhereInput[]
  }

  export type ReportCreateimagesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutReportsInput = {
    create?: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsInput
    connect?: UserWhereUniqueInput
  }

  export type ReportUpdateCreateNestedManyWithoutReportInput = {
    create?: XOR<ReportUpdateCreateWithoutReportInput, ReportUpdateUncheckedCreateWithoutReportInput> | ReportUpdateCreateWithoutReportInput[] | ReportUpdateUncheckedCreateWithoutReportInput[]
    connectOrCreate?: ReportUpdateCreateOrConnectWithoutReportInput | ReportUpdateCreateOrConnectWithoutReportInput[]
    createMany?: ReportUpdateCreateManyReportInputEnvelope
    connect?: ReportUpdateWhereUniqueInput | ReportUpdateWhereUniqueInput[]
  }

  export type SatelliteAnalysisCreateNestedManyWithoutReportInput = {
    create?: XOR<SatelliteAnalysisCreateWithoutReportInput, SatelliteAnalysisUncheckedCreateWithoutReportInput> | SatelliteAnalysisCreateWithoutReportInput[] | SatelliteAnalysisUncheckedCreateWithoutReportInput[]
    connectOrCreate?: SatelliteAnalysisCreateOrConnectWithoutReportInput | SatelliteAnalysisCreateOrConnectWithoutReportInput[]
    createMany?: SatelliteAnalysisCreateManyReportInputEnvelope
    connect?: SatelliteAnalysisWhereUniqueInput | SatelliteAnalysisWhereUniqueInput[]
  }

  export type ReportUpdateUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<ReportUpdateCreateWithoutReportInput, ReportUpdateUncheckedCreateWithoutReportInput> | ReportUpdateCreateWithoutReportInput[] | ReportUpdateUncheckedCreateWithoutReportInput[]
    connectOrCreate?: ReportUpdateCreateOrConnectWithoutReportInput | ReportUpdateCreateOrConnectWithoutReportInput[]
    createMany?: ReportUpdateCreateManyReportInputEnvelope
    connect?: ReportUpdateWhereUniqueInput | ReportUpdateWhereUniqueInput[]
  }

  export type SatelliteAnalysisUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<SatelliteAnalysisCreateWithoutReportInput, SatelliteAnalysisUncheckedCreateWithoutReportInput> | SatelliteAnalysisCreateWithoutReportInput[] | SatelliteAnalysisUncheckedCreateWithoutReportInput[]
    connectOrCreate?: SatelliteAnalysisCreateOrConnectWithoutReportInput | SatelliteAnalysisCreateOrConnectWithoutReportInput[]
    createMany?: SatelliteAnalysisCreateManyReportInputEnvelope
    connect?: SatelliteAnalysisWhereUniqueInput | SatelliteAnalysisWhereUniqueInput[]
  }

  export type EnumReportTypeFieldUpdateOperationsInput = {
    set?: $Enums.ReportType
  }

  export type EnumReportStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReportStatus
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReportUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportsInput
    upsert?: UserUpsertWithoutReportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReportsInput, UserUpdateWithoutReportsInput>, UserUncheckedUpdateWithoutReportsInput>
  }

  export type ReportUpdateUpdateManyWithoutReportNestedInput = {
    create?: XOR<ReportUpdateCreateWithoutReportInput, ReportUpdateUncheckedCreateWithoutReportInput> | ReportUpdateCreateWithoutReportInput[] | ReportUpdateUncheckedCreateWithoutReportInput[]
    connectOrCreate?: ReportUpdateCreateOrConnectWithoutReportInput | ReportUpdateCreateOrConnectWithoutReportInput[]
    upsert?: ReportUpdateUpsertWithWhereUniqueWithoutReportInput | ReportUpdateUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: ReportUpdateCreateManyReportInputEnvelope
    set?: ReportUpdateWhereUniqueInput | ReportUpdateWhereUniqueInput[]
    disconnect?: ReportUpdateWhereUniqueInput | ReportUpdateWhereUniqueInput[]
    delete?: ReportUpdateWhereUniqueInput | ReportUpdateWhereUniqueInput[]
    connect?: ReportUpdateWhereUniqueInput | ReportUpdateWhereUniqueInput[]
    update?: ReportUpdateUpdateWithWhereUniqueWithoutReportInput | ReportUpdateUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: ReportUpdateUpdateManyWithWhereWithoutReportInput | ReportUpdateUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: ReportUpdateScalarWhereInput | ReportUpdateScalarWhereInput[]
  }

  export type SatelliteAnalysisUpdateManyWithoutReportNestedInput = {
    create?: XOR<SatelliteAnalysisCreateWithoutReportInput, SatelliteAnalysisUncheckedCreateWithoutReportInput> | SatelliteAnalysisCreateWithoutReportInput[] | SatelliteAnalysisUncheckedCreateWithoutReportInput[]
    connectOrCreate?: SatelliteAnalysisCreateOrConnectWithoutReportInput | SatelliteAnalysisCreateOrConnectWithoutReportInput[]
    upsert?: SatelliteAnalysisUpsertWithWhereUniqueWithoutReportInput | SatelliteAnalysisUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: SatelliteAnalysisCreateManyReportInputEnvelope
    set?: SatelliteAnalysisWhereUniqueInput | SatelliteAnalysisWhereUniqueInput[]
    disconnect?: SatelliteAnalysisWhereUniqueInput | SatelliteAnalysisWhereUniqueInput[]
    delete?: SatelliteAnalysisWhereUniqueInput | SatelliteAnalysisWhereUniqueInput[]
    connect?: SatelliteAnalysisWhereUniqueInput | SatelliteAnalysisWhereUniqueInput[]
    update?: SatelliteAnalysisUpdateWithWhereUniqueWithoutReportInput | SatelliteAnalysisUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: SatelliteAnalysisUpdateManyWithWhereWithoutReportInput | SatelliteAnalysisUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: SatelliteAnalysisScalarWhereInput | SatelliteAnalysisScalarWhereInput[]
  }

  export type ReportUpdateUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<ReportUpdateCreateWithoutReportInput, ReportUpdateUncheckedCreateWithoutReportInput> | ReportUpdateCreateWithoutReportInput[] | ReportUpdateUncheckedCreateWithoutReportInput[]
    connectOrCreate?: ReportUpdateCreateOrConnectWithoutReportInput | ReportUpdateCreateOrConnectWithoutReportInput[]
    upsert?: ReportUpdateUpsertWithWhereUniqueWithoutReportInput | ReportUpdateUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: ReportUpdateCreateManyReportInputEnvelope
    set?: ReportUpdateWhereUniqueInput | ReportUpdateWhereUniqueInput[]
    disconnect?: ReportUpdateWhereUniqueInput | ReportUpdateWhereUniqueInput[]
    delete?: ReportUpdateWhereUniqueInput | ReportUpdateWhereUniqueInput[]
    connect?: ReportUpdateWhereUniqueInput | ReportUpdateWhereUniqueInput[]
    update?: ReportUpdateUpdateWithWhereUniqueWithoutReportInput | ReportUpdateUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: ReportUpdateUpdateManyWithWhereWithoutReportInput | ReportUpdateUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: ReportUpdateScalarWhereInput | ReportUpdateScalarWhereInput[]
  }

  export type SatelliteAnalysisUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<SatelliteAnalysisCreateWithoutReportInput, SatelliteAnalysisUncheckedCreateWithoutReportInput> | SatelliteAnalysisCreateWithoutReportInput[] | SatelliteAnalysisUncheckedCreateWithoutReportInput[]
    connectOrCreate?: SatelliteAnalysisCreateOrConnectWithoutReportInput | SatelliteAnalysisCreateOrConnectWithoutReportInput[]
    upsert?: SatelliteAnalysisUpsertWithWhereUniqueWithoutReportInput | SatelliteAnalysisUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: SatelliteAnalysisCreateManyReportInputEnvelope
    set?: SatelliteAnalysisWhereUniqueInput | SatelliteAnalysisWhereUniqueInput[]
    disconnect?: SatelliteAnalysisWhereUniqueInput | SatelliteAnalysisWhereUniqueInput[]
    delete?: SatelliteAnalysisWhereUniqueInput | SatelliteAnalysisWhereUniqueInput[]
    connect?: SatelliteAnalysisWhereUniqueInput | SatelliteAnalysisWhereUniqueInput[]
    update?: SatelliteAnalysisUpdateWithWhereUniqueWithoutReportInput | SatelliteAnalysisUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: SatelliteAnalysisUpdateManyWithWhereWithoutReportInput | SatelliteAnalysisUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: SatelliteAnalysisScalarWhereInput | SatelliteAnalysisScalarWhereInput[]
  }

  export type ReportCreateNestedOneWithoutUpdatesInput = {
    create?: XOR<ReportCreateWithoutUpdatesInput, ReportUncheckedCreateWithoutUpdatesInput>
    connectOrCreate?: ReportCreateOrConnectWithoutUpdatesInput
    connect?: ReportWhereUniqueInput
  }

  export type NullableEnumReportStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReportStatus | null
  }

  export type ReportUpdateOneRequiredWithoutUpdatesNestedInput = {
    create?: XOR<ReportCreateWithoutUpdatesInput, ReportUncheckedCreateWithoutUpdatesInput>
    connectOrCreate?: ReportCreateOrConnectWithoutUpdatesInput
    upsert?: ReportUpsertWithoutUpdatesInput
    connect?: ReportWhereUniqueInput
    update?: XOR<XOR<ReportUpdateToOneWithWhereWithoutUpdatesInput, ReportUpdateWithoutUpdatesInput>, ReportUncheckedUpdateWithoutUpdatesInput>
  }

  export type ReportCreateNestedOneWithoutAnalysisInput = {
    create?: XOR<ReportCreateWithoutAnalysisInput, ReportUncheckedCreateWithoutAnalysisInput>
    connectOrCreate?: ReportCreateOrConnectWithoutAnalysisInput
    connect?: ReportWhereUniqueInput
  }

  export type ReportUpdateOneWithoutAnalysisNestedInput = {
    create?: XOR<ReportCreateWithoutAnalysisInput, ReportUncheckedCreateWithoutAnalysisInput>
    connectOrCreate?: ReportCreateOrConnectWithoutAnalysisInput
    upsert?: ReportUpsertWithoutAnalysisInput
    disconnect?: ReportWhereInput | boolean
    delete?: ReportWhereInput | boolean
    connect?: ReportWhereUniqueInput
    update?: XOR<XOR<ReportUpdateToOneWithWhereWithoutAnalysisInput, ReportUpdateWithoutAnalysisInput>, ReportUncheckedUpdateWithoutAnalysisInput>
  }

  export type ConsultationVoteCreateNestedManyWithoutConsultationInput = {
    create?: XOR<ConsultationVoteCreateWithoutConsultationInput, ConsultationVoteUncheckedCreateWithoutConsultationInput> | ConsultationVoteCreateWithoutConsultationInput[] | ConsultationVoteUncheckedCreateWithoutConsultationInput[]
    connectOrCreate?: ConsultationVoteCreateOrConnectWithoutConsultationInput | ConsultationVoteCreateOrConnectWithoutConsultationInput[]
    createMany?: ConsultationVoteCreateManyConsultationInputEnvelope
    connect?: ConsultationVoteWhereUniqueInput | ConsultationVoteWhereUniqueInput[]
  }

  export type ConsultationCommentCreateNestedManyWithoutConsultationInput = {
    create?: XOR<ConsultationCommentCreateWithoutConsultationInput, ConsultationCommentUncheckedCreateWithoutConsultationInput> | ConsultationCommentCreateWithoutConsultationInput[] | ConsultationCommentUncheckedCreateWithoutConsultationInput[]
    connectOrCreate?: ConsultationCommentCreateOrConnectWithoutConsultationInput | ConsultationCommentCreateOrConnectWithoutConsultationInput[]
    createMany?: ConsultationCommentCreateManyConsultationInputEnvelope
    connect?: ConsultationCommentWhereUniqueInput | ConsultationCommentWhereUniqueInput[]
  }

  export type ConsultationVoteUncheckedCreateNestedManyWithoutConsultationInput = {
    create?: XOR<ConsultationVoteCreateWithoutConsultationInput, ConsultationVoteUncheckedCreateWithoutConsultationInput> | ConsultationVoteCreateWithoutConsultationInput[] | ConsultationVoteUncheckedCreateWithoutConsultationInput[]
    connectOrCreate?: ConsultationVoteCreateOrConnectWithoutConsultationInput | ConsultationVoteCreateOrConnectWithoutConsultationInput[]
    createMany?: ConsultationVoteCreateManyConsultationInputEnvelope
    connect?: ConsultationVoteWhereUniqueInput | ConsultationVoteWhereUniqueInput[]
  }

  export type ConsultationCommentUncheckedCreateNestedManyWithoutConsultationInput = {
    create?: XOR<ConsultationCommentCreateWithoutConsultationInput, ConsultationCommentUncheckedCreateWithoutConsultationInput> | ConsultationCommentCreateWithoutConsultationInput[] | ConsultationCommentUncheckedCreateWithoutConsultationInput[]
    connectOrCreate?: ConsultationCommentCreateOrConnectWithoutConsultationInput | ConsultationCommentCreateOrConnectWithoutConsultationInput[]
    createMany?: ConsultationCommentCreateManyConsultationInputEnvelope
    connect?: ConsultationCommentWhereUniqueInput | ConsultationCommentWhereUniqueInput[]
  }

  export type ConsultationVoteUpdateManyWithoutConsultationNestedInput = {
    create?: XOR<ConsultationVoteCreateWithoutConsultationInput, ConsultationVoteUncheckedCreateWithoutConsultationInput> | ConsultationVoteCreateWithoutConsultationInput[] | ConsultationVoteUncheckedCreateWithoutConsultationInput[]
    connectOrCreate?: ConsultationVoteCreateOrConnectWithoutConsultationInput | ConsultationVoteCreateOrConnectWithoutConsultationInput[]
    upsert?: ConsultationVoteUpsertWithWhereUniqueWithoutConsultationInput | ConsultationVoteUpsertWithWhereUniqueWithoutConsultationInput[]
    createMany?: ConsultationVoteCreateManyConsultationInputEnvelope
    set?: ConsultationVoteWhereUniqueInput | ConsultationVoteWhereUniqueInput[]
    disconnect?: ConsultationVoteWhereUniqueInput | ConsultationVoteWhereUniqueInput[]
    delete?: ConsultationVoteWhereUniqueInput | ConsultationVoteWhereUniqueInput[]
    connect?: ConsultationVoteWhereUniqueInput | ConsultationVoteWhereUniqueInput[]
    update?: ConsultationVoteUpdateWithWhereUniqueWithoutConsultationInput | ConsultationVoteUpdateWithWhereUniqueWithoutConsultationInput[]
    updateMany?: ConsultationVoteUpdateManyWithWhereWithoutConsultationInput | ConsultationVoteUpdateManyWithWhereWithoutConsultationInput[]
    deleteMany?: ConsultationVoteScalarWhereInput | ConsultationVoteScalarWhereInput[]
  }

  export type ConsultationCommentUpdateManyWithoutConsultationNestedInput = {
    create?: XOR<ConsultationCommentCreateWithoutConsultationInput, ConsultationCommentUncheckedCreateWithoutConsultationInput> | ConsultationCommentCreateWithoutConsultationInput[] | ConsultationCommentUncheckedCreateWithoutConsultationInput[]
    connectOrCreate?: ConsultationCommentCreateOrConnectWithoutConsultationInput | ConsultationCommentCreateOrConnectWithoutConsultationInput[]
    upsert?: ConsultationCommentUpsertWithWhereUniqueWithoutConsultationInput | ConsultationCommentUpsertWithWhereUniqueWithoutConsultationInput[]
    createMany?: ConsultationCommentCreateManyConsultationInputEnvelope
    set?: ConsultationCommentWhereUniqueInput | ConsultationCommentWhereUniqueInput[]
    disconnect?: ConsultationCommentWhereUniqueInput | ConsultationCommentWhereUniqueInput[]
    delete?: ConsultationCommentWhereUniqueInput | ConsultationCommentWhereUniqueInput[]
    connect?: ConsultationCommentWhereUniqueInput | ConsultationCommentWhereUniqueInput[]
    update?: ConsultationCommentUpdateWithWhereUniqueWithoutConsultationInput | ConsultationCommentUpdateWithWhereUniqueWithoutConsultationInput[]
    updateMany?: ConsultationCommentUpdateManyWithWhereWithoutConsultationInput | ConsultationCommentUpdateManyWithWhereWithoutConsultationInput[]
    deleteMany?: ConsultationCommentScalarWhereInput | ConsultationCommentScalarWhereInput[]
  }

  export type ConsultationVoteUncheckedUpdateManyWithoutConsultationNestedInput = {
    create?: XOR<ConsultationVoteCreateWithoutConsultationInput, ConsultationVoteUncheckedCreateWithoutConsultationInput> | ConsultationVoteCreateWithoutConsultationInput[] | ConsultationVoteUncheckedCreateWithoutConsultationInput[]
    connectOrCreate?: ConsultationVoteCreateOrConnectWithoutConsultationInput | ConsultationVoteCreateOrConnectWithoutConsultationInput[]
    upsert?: ConsultationVoteUpsertWithWhereUniqueWithoutConsultationInput | ConsultationVoteUpsertWithWhereUniqueWithoutConsultationInput[]
    createMany?: ConsultationVoteCreateManyConsultationInputEnvelope
    set?: ConsultationVoteWhereUniqueInput | ConsultationVoteWhereUniqueInput[]
    disconnect?: ConsultationVoteWhereUniqueInput | ConsultationVoteWhereUniqueInput[]
    delete?: ConsultationVoteWhereUniqueInput | ConsultationVoteWhereUniqueInput[]
    connect?: ConsultationVoteWhereUniqueInput | ConsultationVoteWhereUniqueInput[]
    update?: ConsultationVoteUpdateWithWhereUniqueWithoutConsultationInput | ConsultationVoteUpdateWithWhereUniqueWithoutConsultationInput[]
    updateMany?: ConsultationVoteUpdateManyWithWhereWithoutConsultationInput | ConsultationVoteUpdateManyWithWhereWithoutConsultationInput[]
    deleteMany?: ConsultationVoteScalarWhereInput | ConsultationVoteScalarWhereInput[]
  }

  export type ConsultationCommentUncheckedUpdateManyWithoutConsultationNestedInput = {
    create?: XOR<ConsultationCommentCreateWithoutConsultationInput, ConsultationCommentUncheckedCreateWithoutConsultationInput> | ConsultationCommentCreateWithoutConsultationInput[] | ConsultationCommentUncheckedCreateWithoutConsultationInput[]
    connectOrCreate?: ConsultationCommentCreateOrConnectWithoutConsultationInput | ConsultationCommentCreateOrConnectWithoutConsultationInput[]
    upsert?: ConsultationCommentUpsertWithWhereUniqueWithoutConsultationInput | ConsultationCommentUpsertWithWhereUniqueWithoutConsultationInput[]
    createMany?: ConsultationCommentCreateManyConsultationInputEnvelope
    set?: ConsultationCommentWhereUniqueInput | ConsultationCommentWhereUniqueInput[]
    disconnect?: ConsultationCommentWhereUniqueInput | ConsultationCommentWhereUniqueInput[]
    delete?: ConsultationCommentWhereUniqueInput | ConsultationCommentWhereUniqueInput[]
    connect?: ConsultationCommentWhereUniqueInput | ConsultationCommentWhereUniqueInput[]
    update?: ConsultationCommentUpdateWithWhereUniqueWithoutConsultationInput | ConsultationCommentUpdateWithWhereUniqueWithoutConsultationInput[]
    updateMany?: ConsultationCommentUpdateManyWithWhereWithoutConsultationInput | ConsultationCommentUpdateManyWithWhereWithoutConsultationInput[]
    deleteMany?: ConsultationCommentScalarWhereInput | ConsultationCommentScalarWhereInput[]
  }

  export type PublicConsultationCreateNestedOneWithoutVotesInput = {
    create?: XOR<PublicConsultationCreateWithoutVotesInput, PublicConsultationUncheckedCreateWithoutVotesInput>
    connectOrCreate?: PublicConsultationCreateOrConnectWithoutVotesInput
    connect?: PublicConsultationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutConsultationVotesInput = {
    create?: XOR<UserCreateWithoutConsultationVotesInput, UserUncheckedCreateWithoutConsultationVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutConsultationVotesInput
    connect?: UserWhereUniqueInput
  }

  export type PublicConsultationUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<PublicConsultationCreateWithoutVotesInput, PublicConsultationUncheckedCreateWithoutVotesInput>
    connectOrCreate?: PublicConsultationCreateOrConnectWithoutVotesInput
    upsert?: PublicConsultationUpsertWithoutVotesInput
    connect?: PublicConsultationWhereUniqueInput
    update?: XOR<XOR<PublicConsultationUpdateToOneWithWhereWithoutVotesInput, PublicConsultationUpdateWithoutVotesInput>, PublicConsultationUncheckedUpdateWithoutVotesInput>
  }

  export type UserUpdateOneRequiredWithoutConsultationVotesNestedInput = {
    create?: XOR<UserCreateWithoutConsultationVotesInput, UserUncheckedCreateWithoutConsultationVotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutConsultationVotesInput
    upsert?: UserUpsertWithoutConsultationVotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConsultationVotesInput, UserUpdateWithoutConsultationVotesInput>, UserUncheckedUpdateWithoutConsultationVotesInput>
  }

  export type PublicConsultationCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PublicConsultationCreateWithoutCommentsInput, PublicConsultationUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PublicConsultationCreateOrConnectWithoutCommentsInput
    connect?: PublicConsultationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutConsultationCommentsInput = {
    create?: XOR<UserCreateWithoutConsultationCommentsInput, UserUncheckedCreateWithoutConsultationCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConsultationCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type PublicConsultationUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PublicConsultationCreateWithoutCommentsInput, PublicConsultationUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PublicConsultationCreateOrConnectWithoutCommentsInput
    upsert?: PublicConsultationUpsertWithoutCommentsInput
    connect?: PublicConsultationWhereUniqueInput
    update?: XOR<XOR<PublicConsultationUpdateToOneWithWhereWithoutCommentsInput, PublicConsultationUpdateWithoutCommentsInput>, PublicConsultationUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutConsultationCommentsNestedInput = {
    create?: XOR<UserCreateWithoutConsultationCommentsInput, UserUncheckedCreateWithoutConsultationCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConsultationCommentsInput
    upsert?: UserUpsertWithoutConsultationCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConsultationCommentsInput, UserUpdateWithoutConsultationCommentsInput>, UserUncheckedUpdateWithoutConsultationCommentsInput>
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumReportTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeFilter<$PrismaModel> | $Enums.ReportType
  }

  export type NestedEnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
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

  export type NestedEnumReportTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReportType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportTypeFilter<$PrismaModel>
    _max?: NestedEnumReportTypeFilter<$PrismaModel>
  }

  export type NestedEnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumReportStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumReportStatusNullableFilter<$PrismaModel> | $Enums.ReportStatus | null
  }

  export type NestedEnumReportStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumReportStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumReportStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumReportStatusNullableFilter<$PrismaModel>
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    phoneNumber?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
    consultationVotes?: ConsultationVoteCreateNestedManyWithoutUserInput
    consultationComments?: ConsultationCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    phoneNumber?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    consultationVotes?: ConsultationVoteUncheckedCreateNestedManyWithoutUserInput
    consultationComments?: ConsultationCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
    consultationVotes?: ConsultationVoteUpdateManyWithoutUserNestedInput
    consultationComments?: ConsultationCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    consultationVotes?: ConsultationVoteUncheckedUpdateManyWithoutUserNestedInput
    consultationComments?: ConsultationCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    phoneNumber?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
    consultationVotes?: ConsultationVoteCreateNestedManyWithoutUserInput
    consultationComments?: ConsultationCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    phoneNumber?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    consultationVotes?: ConsultationVoteUncheckedCreateNestedManyWithoutUserInput
    consultationComments?: ConsultationCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
    consultationVotes?: ConsultationVoteUpdateManyWithoutUserNestedInput
    consultationComments?: ConsultationCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    consultationVotes?: ConsultationVoteUncheckedUpdateManyWithoutUserNestedInput
    consultationComments?: ConsultationCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    type: $Enums.ReportType
    status?: $Enums.ReportStatus
    priority?: $Enums.Priority
    latitude: number
    longitude: number
    address?: string | null
    images?: ReportCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    updates?: ReportUpdateCreateNestedManyWithoutReportInput
    analysis?: SatelliteAnalysisCreateNestedManyWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    type: $Enums.ReportType
    status?: $Enums.ReportStatus
    priority?: $Enums.Priority
    latitude: number
    longitude: number
    address?: string | null
    images?: ReportCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    updates?: ReportUpdateUncheckedCreateNestedManyWithoutReportInput
    analysis?: SatelliteAnalysisUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutUserInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput>
  }

  export type ReportCreateManyUserInputEnvelope = {
    data: ReportCreateManyUserInput | ReportCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConsultationVoteCreateWithoutUserInput = {
    id?: string
    vote: string
    createdAt?: Date | string
    consultation: PublicConsultationCreateNestedOneWithoutVotesInput
  }

  export type ConsultationVoteUncheckedCreateWithoutUserInput = {
    id?: string
    consultationId: string
    vote: string
    createdAt?: Date | string
  }

  export type ConsultationVoteCreateOrConnectWithoutUserInput = {
    where: ConsultationVoteWhereUniqueInput
    create: XOR<ConsultationVoteCreateWithoutUserInput, ConsultationVoteUncheckedCreateWithoutUserInput>
  }

  export type ConsultationVoteCreateManyUserInputEnvelope = {
    data: ConsultationVoteCreateManyUserInput | ConsultationVoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConsultationCommentCreateWithoutUserInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    consultation: PublicConsultationCreateNestedOneWithoutCommentsInput
  }

  export type ConsultationCommentUncheckedCreateWithoutUserInput = {
    id?: string
    consultationId: string
    comment: string
    createdAt?: Date | string
  }

  export type ConsultationCommentCreateOrConnectWithoutUserInput = {
    where: ConsultationCommentWhereUniqueInput
    create: XOR<ConsultationCommentCreateWithoutUserInput, ConsultationCommentUncheckedCreateWithoutUserInput>
  }

  export type ConsultationCommentCreateManyUserInputEnvelope = {
    data: ConsultationCommentCreateManyUserInput | ConsultationCommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type ReportUpsertWithWhereUniqueWithoutUserInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutUserInput, ReportUncheckedUpdateWithoutUserInput>
    create: XOR<ReportCreateWithoutUserInput, ReportUncheckedCreateWithoutUserInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutUserInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutUserInput, ReportUncheckedUpdateWithoutUserInput>
  }

  export type ReportUpdateManyWithWhereWithoutUserInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutUserInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: StringFilter<"Report"> | string
    title?: StringFilter<"Report"> | string
    description?: StringFilter<"Report"> | string
    type?: EnumReportTypeFilter<"Report"> | $Enums.ReportType
    status?: EnumReportStatusFilter<"Report"> | $Enums.ReportStatus
    priority?: EnumPriorityFilter<"Report"> | $Enums.Priority
    latitude?: FloatFilter<"Report"> | number
    longitude?: FloatFilter<"Report"> | number
    address?: StringNullableFilter<"Report"> | string | null
    images?: StringNullableListFilter<"Report">
    userId?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Report"> | Date | string | null
  }

  export type ConsultationVoteUpsertWithWhereUniqueWithoutUserInput = {
    where: ConsultationVoteWhereUniqueInput
    update: XOR<ConsultationVoteUpdateWithoutUserInput, ConsultationVoteUncheckedUpdateWithoutUserInput>
    create: XOR<ConsultationVoteCreateWithoutUserInput, ConsultationVoteUncheckedCreateWithoutUserInput>
  }

  export type ConsultationVoteUpdateWithWhereUniqueWithoutUserInput = {
    where: ConsultationVoteWhereUniqueInput
    data: XOR<ConsultationVoteUpdateWithoutUserInput, ConsultationVoteUncheckedUpdateWithoutUserInput>
  }

  export type ConsultationVoteUpdateManyWithWhereWithoutUserInput = {
    where: ConsultationVoteScalarWhereInput
    data: XOR<ConsultationVoteUpdateManyMutationInput, ConsultationVoteUncheckedUpdateManyWithoutUserInput>
  }

  export type ConsultationVoteScalarWhereInput = {
    AND?: ConsultationVoteScalarWhereInput | ConsultationVoteScalarWhereInput[]
    OR?: ConsultationVoteScalarWhereInput[]
    NOT?: ConsultationVoteScalarWhereInput | ConsultationVoteScalarWhereInput[]
    id?: StringFilter<"ConsultationVote"> | string
    consultationId?: StringFilter<"ConsultationVote"> | string
    userId?: StringFilter<"ConsultationVote"> | string
    vote?: StringFilter<"ConsultationVote"> | string
    createdAt?: DateTimeFilter<"ConsultationVote"> | Date | string
  }

  export type ConsultationCommentUpsertWithWhereUniqueWithoutUserInput = {
    where: ConsultationCommentWhereUniqueInput
    update: XOR<ConsultationCommentUpdateWithoutUserInput, ConsultationCommentUncheckedUpdateWithoutUserInput>
    create: XOR<ConsultationCommentCreateWithoutUserInput, ConsultationCommentUncheckedCreateWithoutUserInput>
  }

  export type ConsultationCommentUpdateWithWhereUniqueWithoutUserInput = {
    where: ConsultationCommentWhereUniqueInput
    data: XOR<ConsultationCommentUpdateWithoutUserInput, ConsultationCommentUncheckedUpdateWithoutUserInput>
  }

  export type ConsultationCommentUpdateManyWithWhereWithoutUserInput = {
    where: ConsultationCommentScalarWhereInput
    data: XOR<ConsultationCommentUpdateManyMutationInput, ConsultationCommentUncheckedUpdateManyWithoutUserInput>
  }

  export type ConsultationCommentScalarWhereInput = {
    AND?: ConsultationCommentScalarWhereInput | ConsultationCommentScalarWhereInput[]
    OR?: ConsultationCommentScalarWhereInput[]
    NOT?: ConsultationCommentScalarWhereInput | ConsultationCommentScalarWhereInput[]
    id?: StringFilter<"ConsultationComment"> | string
    consultationId?: StringFilter<"ConsultationComment"> | string
    userId?: StringFilter<"ConsultationComment"> | string
    comment?: StringFilter<"ConsultationComment"> | string
    createdAt?: DateTimeFilter<"ConsultationComment"> | Date | string
  }

  export type UserCreateWithoutReportsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    phoneNumber?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    consultationVotes?: ConsultationVoteCreateNestedManyWithoutUserInput
    consultationComments?: ConsultationCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReportsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    phoneNumber?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    consultationVotes?: ConsultationVoteUncheckedCreateNestedManyWithoutUserInput
    consultationComments?: ConsultationCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
  }

  export type ReportUpdateCreateWithoutReportInput = {
    id?: string
    message: string
    status?: $Enums.ReportStatus | null
    createdAt?: Date | string
    updatedBy?: string | null
  }

  export type ReportUpdateUncheckedCreateWithoutReportInput = {
    id?: string
    message: string
    status?: $Enums.ReportStatus | null
    createdAt?: Date | string
    updatedBy?: string | null
  }

  export type ReportUpdateCreateOrConnectWithoutReportInput = {
    where: ReportUpdateWhereUniqueInput
    create: XOR<ReportUpdateCreateWithoutReportInput, ReportUpdateUncheckedCreateWithoutReportInput>
  }

  export type ReportUpdateCreateManyReportInputEnvelope = {
    data: ReportUpdateCreateManyReportInput | ReportUpdateCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type SatelliteAnalysisCreateWithoutReportInput = {
    id?: string
    analysisType: string
    latitude: number
    longitude: number
    confidence: number
    detectedChanges?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    analysisDate?: Date | string
    createdAt?: Date | string
  }

  export type SatelliteAnalysisUncheckedCreateWithoutReportInput = {
    id?: string
    analysisType: string
    latitude: number
    longitude: number
    confidence: number
    detectedChanges?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    analysisDate?: Date | string
    createdAt?: Date | string
  }

  export type SatelliteAnalysisCreateOrConnectWithoutReportInput = {
    where: SatelliteAnalysisWhereUniqueInput
    create: XOR<SatelliteAnalysisCreateWithoutReportInput, SatelliteAnalysisUncheckedCreateWithoutReportInput>
  }

  export type SatelliteAnalysisCreateManyReportInputEnvelope = {
    data: SatelliteAnalysisCreateManyReportInput | SatelliteAnalysisCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutReportsInput = {
    update: XOR<UserUpdateWithoutReportsInput, UserUncheckedUpdateWithoutReportsInput>
    create: XOR<UserCreateWithoutReportsInput, UserUncheckedCreateWithoutReportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReportsInput, UserUncheckedUpdateWithoutReportsInput>
  }

  export type UserUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    consultationVotes?: ConsultationVoteUpdateManyWithoutUserNestedInput
    consultationComments?: ConsultationCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    consultationVotes?: ConsultationVoteUncheckedUpdateManyWithoutUserNestedInput
    consultationComments?: ConsultationCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReportUpdateUpsertWithWhereUniqueWithoutReportInput = {
    where: ReportUpdateWhereUniqueInput
    update: XOR<ReportUpdateUpdateWithoutReportInput, ReportUpdateUncheckedUpdateWithoutReportInput>
    create: XOR<ReportUpdateCreateWithoutReportInput, ReportUpdateUncheckedCreateWithoutReportInput>
  }

  export type ReportUpdateUpdateWithWhereUniqueWithoutReportInput = {
    where: ReportUpdateWhereUniqueInput
    data: XOR<ReportUpdateUpdateWithoutReportInput, ReportUpdateUncheckedUpdateWithoutReportInput>
  }

  export type ReportUpdateUpdateManyWithWhereWithoutReportInput = {
    where: ReportUpdateScalarWhereInput
    data: XOR<ReportUpdateUpdateManyMutationInput, ReportUpdateUncheckedUpdateManyWithoutReportInput>
  }

  export type ReportUpdateScalarWhereInput = {
    AND?: ReportUpdateScalarWhereInput | ReportUpdateScalarWhereInput[]
    OR?: ReportUpdateScalarWhereInput[]
    NOT?: ReportUpdateScalarWhereInput | ReportUpdateScalarWhereInput[]
    id?: StringFilter<"ReportUpdate"> | string
    reportId?: StringFilter<"ReportUpdate"> | string
    message?: StringFilter<"ReportUpdate"> | string
    status?: EnumReportStatusNullableFilter<"ReportUpdate"> | $Enums.ReportStatus | null
    createdAt?: DateTimeFilter<"ReportUpdate"> | Date | string
    updatedBy?: StringNullableFilter<"ReportUpdate"> | string | null
  }

  export type SatelliteAnalysisUpsertWithWhereUniqueWithoutReportInput = {
    where: SatelliteAnalysisWhereUniqueInput
    update: XOR<SatelliteAnalysisUpdateWithoutReportInput, SatelliteAnalysisUncheckedUpdateWithoutReportInput>
    create: XOR<SatelliteAnalysisCreateWithoutReportInput, SatelliteAnalysisUncheckedCreateWithoutReportInput>
  }

  export type SatelliteAnalysisUpdateWithWhereUniqueWithoutReportInput = {
    where: SatelliteAnalysisWhereUniqueInput
    data: XOR<SatelliteAnalysisUpdateWithoutReportInput, SatelliteAnalysisUncheckedUpdateWithoutReportInput>
  }

  export type SatelliteAnalysisUpdateManyWithWhereWithoutReportInput = {
    where: SatelliteAnalysisScalarWhereInput
    data: XOR<SatelliteAnalysisUpdateManyMutationInput, SatelliteAnalysisUncheckedUpdateManyWithoutReportInput>
  }

  export type SatelliteAnalysisScalarWhereInput = {
    AND?: SatelliteAnalysisScalarWhereInput | SatelliteAnalysisScalarWhereInput[]
    OR?: SatelliteAnalysisScalarWhereInput[]
    NOT?: SatelliteAnalysisScalarWhereInput | SatelliteAnalysisScalarWhereInput[]
    id?: StringFilter<"SatelliteAnalysis"> | string
    reportId?: StringNullableFilter<"SatelliteAnalysis"> | string | null
    analysisType?: StringFilter<"SatelliteAnalysis"> | string
    latitude?: FloatFilter<"SatelliteAnalysis"> | number
    longitude?: FloatFilter<"SatelliteAnalysis"> | number
    confidence?: FloatFilter<"SatelliteAnalysis"> | number
    detectedChanges?: JsonNullableFilter<"SatelliteAnalysis">
    imageUrl?: StringNullableFilter<"SatelliteAnalysis"> | string | null
    analysisDate?: DateTimeFilter<"SatelliteAnalysis"> | Date | string
    createdAt?: DateTimeFilter<"SatelliteAnalysis"> | Date | string
  }

  export type ReportCreateWithoutUpdatesInput = {
    id?: string
    title: string
    description: string
    type: $Enums.ReportType
    status?: $Enums.ReportStatus
    priority?: $Enums.Priority
    latitude: number
    longitude: number
    address?: string | null
    images?: ReportCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    user: UserCreateNestedOneWithoutReportsInput
    analysis?: SatelliteAnalysisCreateNestedManyWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutUpdatesInput = {
    id?: string
    title: string
    description: string
    type: $Enums.ReportType
    status?: $Enums.ReportStatus
    priority?: $Enums.Priority
    latitude: number
    longitude: number
    address?: string | null
    images?: ReportCreateimagesInput | string[]
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    analysis?: SatelliteAnalysisUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutUpdatesInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutUpdatesInput, ReportUncheckedCreateWithoutUpdatesInput>
  }

  export type ReportUpsertWithoutUpdatesInput = {
    update: XOR<ReportUpdateWithoutUpdatesInput, ReportUncheckedUpdateWithoutUpdatesInput>
    create: XOR<ReportCreateWithoutUpdatesInput, ReportUncheckedCreateWithoutUpdatesInput>
    where?: ReportWhereInput
  }

  export type ReportUpdateToOneWithWhereWithoutUpdatesInput = {
    where?: ReportWhereInput
    data: XOR<ReportUpdateWithoutUpdatesInput, ReportUncheckedUpdateWithoutUpdatesInput>
  }

  export type ReportUpdateWithoutUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ReportUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutReportsNestedInput
    analysis?: SatelliteAnalysisUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ReportUpdateimagesInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    analysis?: SatelliteAnalysisUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportCreateWithoutAnalysisInput = {
    id?: string
    title: string
    description: string
    type: $Enums.ReportType
    status?: $Enums.ReportStatus
    priority?: $Enums.Priority
    latitude: number
    longitude: number
    address?: string | null
    images?: ReportCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    user: UserCreateNestedOneWithoutReportsInput
    updates?: ReportUpdateCreateNestedManyWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutAnalysisInput = {
    id?: string
    title: string
    description: string
    type: $Enums.ReportType
    status?: $Enums.ReportStatus
    priority?: $Enums.Priority
    latitude: number
    longitude: number
    address?: string | null
    images?: ReportCreateimagesInput | string[]
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    updates?: ReportUpdateUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutAnalysisInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutAnalysisInput, ReportUncheckedCreateWithoutAnalysisInput>
  }

  export type ReportUpsertWithoutAnalysisInput = {
    update: XOR<ReportUpdateWithoutAnalysisInput, ReportUncheckedUpdateWithoutAnalysisInput>
    create: XOR<ReportCreateWithoutAnalysisInput, ReportUncheckedCreateWithoutAnalysisInput>
    where?: ReportWhereInput
  }

  export type ReportUpdateToOneWithWhereWithoutAnalysisInput = {
    where?: ReportWhereInput
    data: XOR<ReportUpdateWithoutAnalysisInput, ReportUncheckedUpdateWithoutAnalysisInput>
  }

  export type ReportUpdateWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ReportUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutReportsNestedInput
    updates?: ReportUpdateUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ReportUpdateimagesInput | string[]
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updates?: ReportUpdateUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ConsultationVoteCreateWithoutConsultationInput = {
    id?: string
    vote: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutConsultationVotesInput
  }

  export type ConsultationVoteUncheckedCreateWithoutConsultationInput = {
    id?: string
    userId: string
    vote: string
    createdAt?: Date | string
  }

  export type ConsultationVoteCreateOrConnectWithoutConsultationInput = {
    where: ConsultationVoteWhereUniqueInput
    create: XOR<ConsultationVoteCreateWithoutConsultationInput, ConsultationVoteUncheckedCreateWithoutConsultationInput>
  }

  export type ConsultationVoteCreateManyConsultationInputEnvelope = {
    data: ConsultationVoteCreateManyConsultationInput | ConsultationVoteCreateManyConsultationInput[]
    skipDuplicates?: boolean
  }

  export type ConsultationCommentCreateWithoutConsultationInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutConsultationCommentsInput
  }

  export type ConsultationCommentUncheckedCreateWithoutConsultationInput = {
    id?: string
    userId: string
    comment: string
    createdAt?: Date | string
  }

  export type ConsultationCommentCreateOrConnectWithoutConsultationInput = {
    where: ConsultationCommentWhereUniqueInput
    create: XOR<ConsultationCommentCreateWithoutConsultationInput, ConsultationCommentUncheckedCreateWithoutConsultationInput>
  }

  export type ConsultationCommentCreateManyConsultationInputEnvelope = {
    data: ConsultationCommentCreateManyConsultationInput | ConsultationCommentCreateManyConsultationInput[]
    skipDuplicates?: boolean
  }

  export type ConsultationVoteUpsertWithWhereUniqueWithoutConsultationInput = {
    where: ConsultationVoteWhereUniqueInput
    update: XOR<ConsultationVoteUpdateWithoutConsultationInput, ConsultationVoteUncheckedUpdateWithoutConsultationInput>
    create: XOR<ConsultationVoteCreateWithoutConsultationInput, ConsultationVoteUncheckedCreateWithoutConsultationInput>
  }

  export type ConsultationVoteUpdateWithWhereUniqueWithoutConsultationInput = {
    where: ConsultationVoteWhereUniqueInput
    data: XOR<ConsultationVoteUpdateWithoutConsultationInput, ConsultationVoteUncheckedUpdateWithoutConsultationInput>
  }

  export type ConsultationVoteUpdateManyWithWhereWithoutConsultationInput = {
    where: ConsultationVoteScalarWhereInput
    data: XOR<ConsultationVoteUpdateManyMutationInput, ConsultationVoteUncheckedUpdateManyWithoutConsultationInput>
  }

  export type ConsultationCommentUpsertWithWhereUniqueWithoutConsultationInput = {
    where: ConsultationCommentWhereUniqueInput
    update: XOR<ConsultationCommentUpdateWithoutConsultationInput, ConsultationCommentUncheckedUpdateWithoutConsultationInput>
    create: XOR<ConsultationCommentCreateWithoutConsultationInput, ConsultationCommentUncheckedCreateWithoutConsultationInput>
  }

  export type ConsultationCommentUpdateWithWhereUniqueWithoutConsultationInput = {
    where: ConsultationCommentWhereUniqueInput
    data: XOR<ConsultationCommentUpdateWithoutConsultationInput, ConsultationCommentUncheckedUpdateWithoutConsultationInput>
  }

  export type ConsultationCommentUpdateManyWithWhereWithoutConsultationInput = {
    where: ConsultationCommentScalarWhereInput
    data: XOR<ConsultationCommentUpdateManyMutationInput, ConsultationCommentUncheckedUpdateManyWithoutConsultationInput>
  }

  export type PublicConsultationCreateWithoutVotesInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    status: string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: ConsultationCommentCreateNestedManyWithoutConsultationInput
  }

  export type PublicConsultationUncheckedCreateWithoutVotesInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    status: string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: ConsultationCommentUncheckedCreateNestedManyWithoutConsultationInput
  }

  export type PublicConsultationCreateOrConnectWithoutVotesInput = {
    where: PublicConsultationWhereUniqueInput
    create: XOR<PublicConsultationCreateWithoutVotesInput, PublicConsultationUncheckedCreateWithoutVotesInput>
  }

  export type UserCreateWithoutConsultationVotesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    phoneNumber?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
    consultationComments?: ConsultationCommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConsultationVotesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    phoneNumber?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    consultationComments?: ConsultationCommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConsultationVotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConsultationVotesInput, UserUncheckedCreateWithoutConsultationVotesInput>
  }

  export type PublicConsultationUpsertWithoutVotesInput = {
    update: XOR<PublicConsultationUpdateWithoutVotesInput, PublicConsultationUncheckedUpdateWithoutVotesInput>
    create: XOR<PublicConsultationCreateWithoutVotesInput, PublicConsultationUncheckedCreateWithoutVotesInput>
    where?: PublicConsultationWhereInput
  }

  export type PublicConsultationUpdateToOneWithWhereWithoutVotesInput = {
    where?: PublicConsultationWhereInput
    data: XOR<PublicConsultationUpdateWithoutVotesInput, PublicConsultationUncheckedUpdateWithoutVotesInput>
  }

  export type PublicConsultationUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: ConsultationCommentUpdateManyWithoutConsultationNestedInput
  }

  export type PublicConsultationUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: ConsultationCommentUncheckedUpdateManyWithoutConsultationNestedInput
  }

  export type UserUpsertWithoutConsultationVotesInput = {
    update: XOR<UserUpdateWithoutConsultationVotesInput, UserUncheckedUpdateWithoutConsultationVotesInput>
    create: XOR<UserCreateWithoutConsultationVotesInput, UserUncheckedCreateWithoutConsultationVotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConsultationVotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConsultationVotesInput, UserUncheckedUpdateWithoutConsultationVotesInput>
  }

  export type UserUpdateWithoutConsultationVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
    consultationComments?: ConsultationCommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConsultationVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    consultationComments?: ConsultationCommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PublicConsultationCreateWithoutCommentsInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    status: string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: ConsultationVoteCreateNestedManyWithoutConsultationInput
  }

  export type PublicConsultationUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    description: string
    startDate: Date | string
    endDate: Date | string
    status: string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: ConsultationVoteUncheckedCreateNestedManyWithoutConsultationInput
  }

  export type PublicConsultationCreateOrConnectWithoutCommentsInput = {
    where: PublicConsultationWhereUniqueInput
    create: XOR<PublicConsultationCreateWithoutCommentsInput, PublicConsultationUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutConsultationCommentsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    phoneNumber?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    reports?: ReportCreateNestedManyWithoutUserInput
    consultationVotes?: ConsultationVoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConsultationCommentsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    phoneNumber?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    reports?: ReportUncheckedCreateNestedManyWithoutUserInput
    consultationVotes?: ConsultationVoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConsultationCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConsultationCommentsInput, UserUncheckedCreateWithoutConsultationCommentsInput>
  }

  export type PublicConsultationUpsertWithoutCommentsInput = {
    update: XOR<PublicConsultationUpdateWithoutCommentsInput, PublicConsultationUncheckedUpdateWithoutCommentsInput>
    create: XOR<PublicConsultationCreateWithoutCommentsInput, PublicConsultationUncheckedCreateWithoutCommentsInput>
    where?: PublicConsultationWhereInput
  }

  export type PublicConsultationUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PublicConsultationWhereInput
    data: XOR<PublicConsultationUpdateWithoutCommentsInput, PublicConsultationUncheckedUpdateWithoutCommentsInput>
  }

  export type PublicConsultationUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: ConsultationVoteUpdateManyWithoutConsultationNestedInput
  }

  export type PublicConsultationUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: ConsultationVoteUncheckedUpdateManyWithoutConsultationNestedInput
  }

  export type UserUpsertWithoutConsultationCommentsInput = {
    update: XOR<UserUpdateWithoutConsultationCommentsInput, UserUncheckedUpdateWithoutConsultationCommentsInput>
    create: XOR<UserCreateWithoutConsultationCommentsInput, UserUncheckedCreateWithoutConsultationCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConsultationCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConsultationCommentsInput, UserUncheckedUpdateWithoutConsultationCommentsInput>
  }

  export type UserUpdateWithoutConsultationCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    reports?: ReportUpdateManyWithoutUserNestedInput
    consultationVotes?: ConsultationVoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConsultationCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    reports?: ReportUncheckedUpdateManyWithoutUserNestedInput
    consultationVotes?: ConsultationVoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type ReportCreateManyUserInput = {
    id?: string
    title: string
    description: string
    type: $Enums.ReportType
    status?: $Enums.ReportStatus
    priority?: $Enums.Priority
    latitude: number
    longitude: number
    address?: string | null
    images?: ReportCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type ConsultationVoteCreateManyUserInput = {
    id?: string
    consultationId: string
    vote: string
    createdAt?: Date | string
  }

  export type ConsultationCommentCreateManyUserInput = {
    id?: string
    consultationId: string
    comment: string
    createdAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ReportUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updates?: ReportUpdateUpdateManyWithoutReportNestedInput
    analysis?: SatelliteAnalysisUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ReportUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updates?: ReportUpdateUncheckedUpdateManyWithoutReportNestedInput
    analysis?: SatelliteAnalysisUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ReportUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConsultationVoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    vote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultation?: PublicConsultationUpdateOneRequiredWithoutVotesNestedInput
  }

  export type ConsultationVoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultationId?: StringFieldUpdateOperationsInput | string
    vote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationVoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultationId?: StringFieldUpdateOperationsInput | string
    vote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationCommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultation?: PublicConsultationUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type ConsultationCommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultationId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationCommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultationId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateCreateManyReportInput = {
    id?: string
    message: string
    status?: $Enums.ReportStatus | null
    createdAt?: Date | string
    updatedBy?: string | null
  }

  export type SatelliteAnalysisCreateManyReportInput = {
    id?: string
    analysisType: string
    latitude: number
    longitude: number
    confidence: number
    detectedChanges?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    analysisDate?: Date | string
    createdAt?: Date | string
  }

  export type ReportUpdateUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReportUpdateUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReportUpdateUncheckedUpdateManyWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SatelliteAnalysisUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisType?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    detectedChanges?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    analysisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SatelliteAnalysisUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisType?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    detectedChanges?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    analysisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SatelliteAnalysisUncheckedUpdateManyWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    analysisType?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    detectedChanges?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    analysisDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationVoteCreateManyConsultationInput = {
    id?: string
    userId: string
    vote: string
    createdAt?: Date | string
  }

  export type ConsultationCommentCreateManyConsultationInput = {
    id?: string
    userId: string
    comment: string
    createdAt?: Date | string
  }

  export type ConsultationVoteUpdateWithoutConsultationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConsultationVotesNestedInput
  }

  export type ConsultationVoteUncheckedUpdateWithoutConsultationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationVoteUncheckedUpdateManyWithoutConsultationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vote?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationCommentUpdateWithoutConsultationInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConsultationCommentsNestedInput
  }

  export type ConsultationCommentUncheckedUpdateWithoutConsultationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationCommentUncheckedUpdateManyWithoutConsultationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
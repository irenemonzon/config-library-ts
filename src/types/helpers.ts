export type NullOrUndefined = null | undefined
export type MaybeId = number | string | NullOrUndefined

export interface Identifable {
  id: MaybeId
}

export type AnyFuntion = (...args: unknown[]) => unknown

/* eslint-disable @typescript-eslint/no-explicit-any */
export type GenericDataType =
  | string
  | number
  | boolean
  | undefined
  | any
  | null
  | Date
  | FormData

export type GenericObjectType = {
  [key: string]: GenericDataType
}
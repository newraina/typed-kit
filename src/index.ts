import { IMSTArray, IAnyType, IType } from 'mobx-state-tree'

type ExtractT<T extends IAnyType> = T extends IType<any, any, infer X> ? X : any

export type ListItemType<T extends any[]> = T extends IMSTArray<infer R>
  ? ExtractT<R>
  : T extends Array<infer R>
  ? R
  : any

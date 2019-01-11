import { IMSTArray } from 'mobx-state-tree'

export type ListItemType<T extends any[]> = T extends IMSTArray<infer R>
  ? R
  : T extends Array<infer R>
  ? R
  : any

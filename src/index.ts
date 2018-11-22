export type ListItemType<T extends any[]> = T extends Array<infer R> ? R : any

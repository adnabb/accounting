export type Category = 'expenditure' | 'income'
export type BaseRecord = {
  tagIds:  number[],
  note: string,
  category: Category,
  amount: number,
}
export type Record = { createTime: number, } & BaseRecord
export type GroupedRecord = {
  [key: string]: Record[]
}
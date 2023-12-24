export type TableColumn = {
  key: string | number
  data: string
}

export type TableItem = {
  [key: string]: any
}

export type SortOrder = 'asc' | 'desc'
export interface TableSort {
  column: string
  order: SortOrder
}

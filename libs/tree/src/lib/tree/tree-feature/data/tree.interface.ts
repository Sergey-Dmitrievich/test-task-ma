export interface Tree {
  id: number
  title: string
  is_deleted?: boolean
  deleted_at?: string | null
  children: Tree[]
  expanded?: boolean
}

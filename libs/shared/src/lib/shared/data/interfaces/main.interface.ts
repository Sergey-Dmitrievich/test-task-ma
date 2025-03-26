export interface ITree {
  id: number,
  title: string,
  is_deleted?: boolean,
  deleted_at?: null
  children: ITree[] | []
}
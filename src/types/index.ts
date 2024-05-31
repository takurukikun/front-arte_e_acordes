export interface DefaultProps {
  id: number
  createdAt: string
  updateAt: string
}

export interface GetData {
  url: string
  query?: string
  id?: number
  signal?: AbortSignal
}

export interface PostData<TForm> {
  url: string
  data: TForm
  signal?: AbortSignal
}

export interface PutData<TForm> {
  url?: string
  data: TForm
  id: number
  signal?: AbortSignal
  fullUrl?: string
}

export interface DeleteData {
  id: number
  url: string
  signal?: AbortSignal
}

export interface TableSearchProps {
  search: string
  setSearch: (search: string) => void
  data?: any[]
  setData: (data: any[]) => void
}

export interface CommonProps {
  className?: string
  children?: React.ReactNode
}

export interface WithId {
  id: string | number
}

export interface WithTimestamps {
  createdAt: string
  updatedAt: string
}

export interface WithStatus<T = string> {
  status: T
}

export interface WithMetadata {
  title: string
  description?: string
  tags?: string[]
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginationParams {
  page: number
  limit: number
  total?: number
}

export interface SortParams {
  field: string
  direction: 'asc' | 'desc'
}

export interface FilterParams {
  search?: string
  category?: string
  tags?: string[]
  dateRange?: {
    start: string
    end: string
  }
}

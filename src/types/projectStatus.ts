export type ProjectStatus = 'complete' | 'in_progress' | 'pending'

export interface ProjectStatusItem {
  id: string
  name: string
  status: ProjectStatus
  updatedAt?: string
}

export interface ProjectStatusCounts {
  total: number
  complete: number
  inProgress: number
  pending: number
}

export interface DraggableProjectsCardProps {
  projects: ProjectStatusItem[]
  storageKey?: string
  maxVisible?: number
}

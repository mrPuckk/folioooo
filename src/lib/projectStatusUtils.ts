import { ProjectStatusItem, ProjectStatusCounts } from '@/types/projectStatus'

/**
 * Get status icon component based on project status
 */
export const getStatusIcon = (status: string) => {
  switch (status) {
    case 'complete':
      return 'CheckCircle2'
    case 'in_progress':
      return 'Clock'
    case 'pending':
      return 'PauseCircle'
    default:
      return 'PauseCircle'
  }
}

/**
 * Calculate project status counts and completion percentage
 */
export const calculateProjectStats = (projects: ProjectStatusItem[]): {
  counts: ProjectStatusCounts
  completionPercentage: number
} => {
  const counts = projects.reduce(
    (acc, project) => {
      acc[project.status]++
      return acc
    },
    { complete: 0, in_progress: 0, pending: 0 }
  )

  const countsWithTotal: ProjectStatusCounts = {
    total: projects.length,
    complete: counts.complete,
    inProgress: counts.in_progress,
    pending: counts.pending
  }

  const completionPercentage = countsWithTotal.total > 0 
    ? Math.round((countsWithTotal.complete / countsWithTotal.total) * 100) 
    : 0

  return {
    counts: countsWithTotal,
    completionPercentage
  }
}

/**
 * Format project status for display
 */
export const formatProjectStatus = (status: string): string => {
  return status.replace('_', ' ')
}

/**
 * Get status badge styling classes
 */
export const getStatusBadgeClasses = (status: string): string => {
  const baseClasses = 'text-xs px-1.5 py-0.5'
  
  switch (status) {
    case 'complete':
      return `${baseClasses} border-green-600 text-green-600`
    case 'in_progress':
      return `${baseClasses} border-amber-600 text-amber-600`
    case 'pending':
      return `${baseClasses} border-slate-500 text-slate-500`
    default:
      return `${baseClasses} border-slate-500 text-slate-500`
  }
}

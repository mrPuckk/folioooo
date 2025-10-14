'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { 
  CheckCircle2, 
  Clock, 
  PauseCircle, 
  MoreVertical, 
  ExternalLink,
  Edit3,
  Trash2,
  RotateCcw
} from 'lucide-react'

type ProjectStatus = 'complete' | 'in_progress' | 'pending'

type Project = {
  id: string
  name: string
  status: ProjectStatus
  href?: string
  updatedAt?: string
}

interface ProjectsMiniPanelProps {
  projects: Project[]
  storageKey?: string
  maxVisible?: number
}

export function ProjectsMiniPanel({ 
  projects, 
  storageKey = 'projectsMini_v1',
  maxVisible = 6 
}: ProjectsMiniPanelProps) {
  const [localProjects, setLocalProjects] = useState<Project[]>(projects)
  const [activeTab, setActiveTab] = useState<'all' | 'in_progress' | 'pending' | 'complete'>('all')
  const [openMenuId, setOpenMenuId] = useState<string | null>(null)

  // Load from localStorage on mount
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem(storageKey)
        if (stored) {
          const parsedProjects = JSON.parse(stored)
          setLocalProjects(parsedProjects)
        }
      }
    } catch (error) {
      console.warn('Failed to load projects from localStorage:', error)
    }
  }, [storageKey])

  // Save to localStorage whenever projects change
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(storageKey, JSON.stringify(localProjects))
      }
    } catch (error) {
      console.warn('Failed to save projects to localStorage:', error)
    }
  }, [localProjects, storageKey])

  const updateProjectStatus = (id: string, newStatus: ProjectStatus) => {
    setLocalProjects(prev => 
      prev.map(project => 
        project.id === id 
          ? { ...project, status: newStatus, updatedAt: new Date().toISOString() }
          : project
      )
    )
    setOpenMenuId(null)
  }

  const removeProject = (id: string) => {
    setLocalProjects(prev => prev.filter(project => project.id !== id))
    setOpenMenuId(null)
  }

  const resetToDefaults = () => {
    setLocalProjects(projects)
    setOpenMenuId(null)
  }

  const getStatusIcon = (status: ProjectStatus) => {
    switch (status) {
      case 'complete':
        return <CheckCircle2 className="h-4 w-4 text-green-600" />
      case 'in_progress':
        return <Clock className="h-4 w-4 text-amber-600" />
      case 'pending':
        return <PauseCircle className="h-4 w-4 text-slate-500" />
    }
  }

  const getStatusCounts = () => {
    const counts = localProjects.reduce((acc, project) => {
      acc[project.status]++
      return acc
    }, { complete: 0, in_progress: 0, pending: 0 })
    
    return {
      total: localProjects.length,
      complete: counts.complete,
      inProgress: counts.in_progress,
      pending: counts.pending
    }
  }

  const getFilteredProjects = () => {
    if (activeTab === 'all') return localProjects
    return localProjects.filter(project => project.status === activeTab)
  }

  const getCompletionPercentage = () => {
    const counts = getStatusCounts()
    return counts.total > 0 ? Math.round((counts.complete / counts.total) * 100) : 0
  }

  const formatUpdatedAt = (updatedAt?: string) => {
    if (!updatedAt) return ''
    const date = new Date(updatedAt)
    const now = new Date()
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) return 'Updated today'
    if (diffDays === 1) return 'Updated 1 day ago'
    return `Updated ${diffDays} days ago`
  }

  const counts = getStatusCounts()
  const filteredProjects = getFilteredProjects()
  const visibleProjects = filteredProjects.slice(0, maxVisible)
  const completionPercentage = getCompletionPercentage()

  return (
    <Card className="w-full max-w-[420px] mx-auto">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Projects</CardTitle>
          <div className="flex items-center gap-2">
            <div className="text-xs text-muted-foreground">
              {completionPercentage}% complete
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={resetToDefaults}
              className="h-6 w-6 p-0"
              aria-label="Reset to defaults"
            >
              <RotateCcw className="h-3 w-3" />
            </Button>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>

        {/* Summary row */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{counts.total} total</span>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3 text-green-600" />
            <span>{counts.complete}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-amber-600" />
            <span>{counts.inProgress}</span>
          </div>
          <div className="flex items-center gap-1">
            <PauseCircle className="h-3 w-3 text-slate-500" />
            <span>{counts.pending}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Tabs */}
        <div className="flex gap-1 mb-4 p-1 bg-muted rounded-lg">
          {[
            { key: 'all', label: 'All' },
            { key: 'in_progress', label: 'In progress' },
            { key: 'pending', label: 'Pending' },
            { key: 'complete', label: 'Complete' }
          ].map(({ key, label }) => (
            <Button
              key={key}
              variant={activeTab === key ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab(key as any)}
              className="flex-1 h-7 text-xs"
            >
              {label}
            </Button>
          ))}
        </div>

        {/* Projects list */}
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {visibleProjects.length === 0 ? (
            <div className="text-center text-muted-foreground text-sm py-4">
              No projects found
            </div>
          ) : (
            visibleProjects.map((project) => (
              <div
                key={project.id}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
              >
                {/* Status icon */}
                <div className="flex-shrink-0">
                  {getStatusIcon(project.status)}
                </div>

                {/* Project info */}
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">
                    {project.name}
                  </div>
                  {project.updatedAt && (
                    <div className="text-xs text-muted-foreground">
                      {formatUpdatedAt(project.updatedAt)}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1">
                  {project.status !== 'complete' && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => updateProjectStatus(project.id, 'complete')}
                      className="h-6 px-2 text-xs"
                    >
                      Mark Complete
                    </Button>
                  )}
                  
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setOpenMenuId(openMenuId === project.id ? null : project.id)}
                      className="h-6 w-6 p-0"
                      aria-label="More actions"
                    >
                      <MoreVertical className="h-3 w-3" />
                    </Button>
                    
                    {openMenuId === project.id && (
                      <div className="absolute right-0 top-8 z-10 w-48 bg-background border rounded-md shadow-lg">
                        <div className="py-1">
                          {project.href && (
                            <button
                              className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-muted"
                              onClick={() => window.open(project.href, '_blank')}
                            >
                              <ExternalLink className="h-3 w-3" />
                              View
                            </button>
                          )}
                          <button
                            className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-muted"
                            onClick={() => {
                              const href = prompt('Enter project URL:', project.href || '')
                              if (href !== null) {
                                setLocalProjects(prev => 
                                  prev.map(p => p.id === project.id ? { ...p, href } : p)
                                )
                              }
                              setOpenMenuId(null)
                            }}
                          >
                            <Edit3 className="h-3 w-3" />
                            Edit link
                          </button>
                          <button
                            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-destructive hover:bg-muted"
                            onClick={() => removeProject(project.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                            Remove from list
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {filteredProjects.length > maxVisible && (
          <div className="text-center text-xs text-muted-foreground mt-2">
            Showing {maxVisible} of {filteredProjects.length} projects
          </div>
        )}
      </CardContent>
    </Card>
  )
}

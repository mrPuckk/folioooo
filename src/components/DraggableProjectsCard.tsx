'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useDragControls, PanInfo } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ScrollArea } from '@/components/ui/ScrollArea'
import { Progress } from '@/components/ui/Progress'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu'
import {
  CheckCircle2,
  Clock,
  PauseCircle,
  MoreVertical,
  GripVertical,
  RotateCcw,
} from 'lucide-react'

type ProjectStatus = 'complete' | 'in_progress' | 'pending'

type Project = {
  id: string
  name: string
  status: ProjectStatus
  updatedAt?: string
}

interface DraggableProjectsCardProps {
  projects: Project[]
  storageKey?: string
  maxVisible?: number
}

export function DraggableProjectsCard({
  projects,
  storageKey = 'projectsCardPos_v1',
  maxVisible = 6
}: DraggableProjectsCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [mounted, setMounted] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const dragControls = useDragControls()

  // Load position from localStorage on mount
  useEffect(() => {
    setMounted(true)
    
    if (typeof window !== 'undefined') {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      
      try {
        const savedPosition = localStorage.getItem(storageKey)
        if (savedPosition) {
          const { x, y } = JSON.parse(savedPosition)
          setPosition({ x, y })
        } else {
          // Default position: bottom-right with 16px offset
          setPosition({
            x: Math.max(0, window.innerWidth - 448 - 16), // max-w-md (448px) + 16px offset
            y: Math.max(0, window.innerHeight - 500 - 16) // estimated height + 16px offset
          })
        }
      } catch (error) {
        console.warn('Failed to load card position from localStorage:', error)
        // Fallback to default position
        setPosition({
          x: Math.max(0, window.innerWidth - 448 - 16),
          y: Math.max(0, window.innerHeight - 500 - 16)
        })
      }
    }
  }, [storageKey])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Clamp position to viewport bounds
  const clampToViewport = (x: number, y: number) => {
    if (!cardRef.current || windowSize.width === 0) return { x, y }

    const cardRect = cardRef.current.getBoundingClientRect()
    const cardWidth = cardRect.width
    const cardHeight = cardRect.height

    const clampedX = Math.max(0, Math.min(x, windowSize.width - cardWidth))
    const clampedY = Math.max(0, Math.min(y, windowSize.height - cardHeight))

    return { x: clampedX, y: clampedY }
  }

  // Save position to localStorage
  const savePosition = (x: number, y: number) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ x, y }))
    } catch (error) {
      console.warn('Failed to save card position to localStorage:', error)
    }
  }

  // Handle drag end
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false)
    const newX = position.x + info.offset.x
    const newY = position.y + info.offset.y
    const clamped = clampToViewport(newX, newY)
    
    setPosition(clamped)
    savePosition(clamped.x, clamped.y)
  }

  // Reset position to default
  const resetPosition = () => {
    const defaultPos = {
      x: windowSize.width - 448 - 16,
      y: windowSize.height - 500 - 16
    }
    const clamped = clampToViewport(defaultPos.x, defaultPos.y)
    setPosition(clamped)
    savePosition(clamped.x, clamped.y)
  }

  // Get status icon
  const getStatusIcon = (status: ProjectStatus) => {
    switch (status) {
      case 'complete':
        return <CheckCircle2 className="h-3 w-3 text-green-600" />
      case 'in_progress':
        return <Clock className="h-3 w-3 text-amber-600" />
      case 'pending':
        return <PauseCircle className="h-3 w-3 text-slate-500" />
    }
  }

  // Calculate status counts and completion
  const getStatusCounts = () => {
    const counts = projects.reduce((acc, project) => {
      acc[project.status]++
      return acc
    }, { complete: 0, in_progress: 0, pending: 0 })
    
    return {
      total: projects.length,
      complete: counts.complete,
      inProgress: counts.in_progress,
      pending: counts.pending
    }
  }

  const counts = getStatusCounts()
  const completionPercentage = counts.total > 0 ? Math.round((counts.complete / counts.total) * 100) : 0

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <motion.div
      ref={cardRef}
      className="fixed z-50 max-w-md w-full sm:max-w-md"
      style={{
        x: position.x,
        y: position.y,
      }}
      drag
      dragControls={dragControls}
      dragMomentum={false}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.02, rotate: 1 }}
      animate={{
        scale: isDragging ? 1.02 : 1,
        rotate: isDragging ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
    >
      <Card className="shadow-lg border-2 border-border/50 bg-background/95 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" />
              <CardTitle className="text-sm font-medium">Projects</CardTitle>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <MoreVertical className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={resetPosition} className="text-xs">
                  <RotateCcw className="h-3 w-3 mr-2" />
                  Reset position
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Progress Summary */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">Progress</span>
              <span className="text-xs font-medium">{completionPercentage}%</span>
            </div>
            <Progress value={completionPercentage} className="h-2" />
            <div className="flex justify-between mt-2">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-green-600" />
                <span className="text-xs text-muted-foreground">{counts.complete}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3 text-amber-600" />
                <span className="text-xs text-muted-foreground">{counts.inProgress}</span>
              </div>
              <div className="flex items-center gap-1">
                <PauseCircle className="h-3 w-3 text-slate-500" />
                <span className="text-xs text-muted-foreground">{counts.pending}</span>
              </div>
            </div>
          </div>

          {/* Projects List */}
          <ScrollArea className="h-48">
            <div className="space-y-2">
              {projects.slice(0, maxVisible).map((project) => (
                <div key={project.id} className="flex items-center gap-2 p-2 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors">
                  {getStatusIcon(project.status)}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium truncate">{project.name}</p>
                    {project.updatedAt && (
                      <p className="text-xs text-muted-foreground">
                        {new Date(project.updatedAt).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`text-xs px-1.5 py-0.5 ${
                      project.status === 'complete' ? 'border-green-600 text-green-600' :
                      project.status === 'in_progress' ? 'border-amber-600 text-amber-600' :
                      'border-slate-500 text-slate-500'
                    }`}
                  >
                    {project.status.replace('_', ' ')}
                  </Badge>
                </div>
              ))}
              {projects.length > maxVisible && (
                <div className="text-center py-2">
                  <span className="text-xs text-muted-foreground">
                    +{projects.length - maxVisible} more projects
                  </span>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </motion.div>
  )
}

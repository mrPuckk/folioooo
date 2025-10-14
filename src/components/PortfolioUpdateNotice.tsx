'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/Dialog'
import { Button } from '@/components/ui/Button'
import { CheckCircle2, Clock } from 'lucide-react'

type Project = { id: string; name: string; status: 'complete' | 'in_progress' | 'pending' }

interface PortfolioUpdateNoticeProps {
  projects: Project[]
  deadline?: string
  sessionKeyClosed?: string
  sessionKeyShown?: string
}

export function PortfolioUpdateNotice({
  projects,
  deadline = '2025-10-25',
  sessionKeyClosed = 'portfolioUpdateClosedThisTab_v1',
  sessionKeyShown = 'portfolioUpdateShownThisTab_v1'
}: PortfolioUpdateNoticeProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return
    
    try {
      const now = new Date()
      const end = new Date(deadline)

      // Never show after deadline
      if (now > end) return

      // If user closed in this tab, keep it closed on reload/navigation in this tab
      const closedThisTab = sessionStorage.getItem(sessionKeyClosed) === 'true'
      if (closedThisTab) return

      // Auto-open on NEW TAB only (not yet shown in this tab)
      const shownThisTab = sessionStorage.getItem(sessionKeyShown) === 'true'
      if (!shownThisTab) {
        setOpen(true)
        sessionStorage.setItem(sessionKeyShown, 'true')
      }
    } catch {
      // If storage is blocked, fail open
      setOpen(true)
    }
  }, [deadline, sessionKeyClosed, sessionKeyShown])

  const handleClose = () => {
    try {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(sessionKeyClosed, 'true')
      }
    } catch {}
    setOpen(false)
  }

  const StatusIcon = ({ status }: { status: Project['status'] }) => {
    if (status === 'complete') {
      return (
        <span className="inline-flex items-center">
          <CheckCircle2 aria-hidden className="h-5 w-5 text-green-600" />
          <span className="sr-only">Complete</span>
        </span>
      )
    }
    return (
      <span className="inline-flex items-center">
        <Clock aria-hidden className="h-5 w-5 text-amber-600" />
        <span className="sr-only">Waiting</span>
      </span>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Work in progress</DialogTitle>
          <DialogDescription>
            This portfolio is currently being updated—mainly the project pages. A full refresh will be completed by <strong>25 October 2025</strong>.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <h3 className="mb-2 text-sm font-medium text-muted-foreground">Projects status</h3>
          <ul className="space-y-1">
            {projects.map(p => (
              <li key={p.id} className="flex items-center gap-2">
                <StatusIcon status={p.status} />
                <span className="text-sm">{p.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex justify-end">
          <Button onClick={handleClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

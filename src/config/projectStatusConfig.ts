import { ProjectStatusItem } from '@/types/projectStatus'

/**
 * Default project status data
 * Update this array to add, remove, or modify project statuses
 */
export const DEFAULT_PROJECT_STATUSES: ProjectStatusItem[] = [
  { 
    id: 'p1', 
    name: 'EEG Seizure Detector – SoC Accelerator', 
    status: 'in_progress',
    updatedAt: '2024-12-01'
  },
  { 
    id: 'p2', 
    name: 'ECG MINA Accelerator Reproduction', 
    status: 'complete',
    updatedAt: '2024-11-15'
  },
  { 
    id: 'p3', 
    name: 'IoT Gas Detection System (Realtime Dashboard)', 
    status: 'in_progress',
    updatedAt: '2024-12-05'
  },
  { 
    id: 'p4', 
    name: 'RF LNA 1–3 GHz Notes & Validation', 
    status: 'pending',
    updatedAt: '2024-11-20'
  },
]

/**
 * Project status configuration
 */
export const PROJECT_STATUS_CONFIG = {
  storageKey: 'homepageProjectsCard_v1',
  maxVisible: 8,
  defaultPosition: {
    x: 0,
    y: 0
  }
} as const

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
    // updatedAt: '2025-12-01'
  },
  {
    id: 'p2',
    name: 'ECG MINA Accelerator Reproduction',
    status: 'complete',
    // updatedAt: '2024-11-15'
  },
  {
    id: 'p3',
    name: 'Real-Time QRS Detection and Atrial Fibrillation Feature Engineering',
    status: 'in_progress',
    // updatedAt: '2024-12-05'
  },
    {
    id: 'p4',
    name: 'Motion-Compensated Pulse Rate Estimation from Wearable PPG',
    status: 'in_progress',
    // updatedAt: '2024-12-05'
  },
    {
    id: 'p5',
    name: 'Learning to Read X-rays: Transfer-Learned CNNs with Gold-Standard Curation',
    status: 'in_progress',
    // updatedAt: '2024-12-05'
  },
    {
    id: 'p6',
    name: 'Point to Perception: A Unified Lidar Stack with RANSAC + KD-Tree + Bounding Boxes',
    status: 'in_progress',
  },
  {
    id: 'p7',
    name: 'RF LNA 1–3 GHz Notes & Validation',
    status: 'pending',
    // updatedAt: '2024-11-20'
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

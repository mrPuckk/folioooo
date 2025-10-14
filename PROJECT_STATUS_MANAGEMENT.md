# Project Status Management Guide

This guide explains how to manage project statuses in the portfolio's draggable projects card and pop-up announcements.

## 📁 File Structure

```
src/
├── types/
│   └── projectStatus.ts          # TypeScript interfaces for project status
├── lib/
│   └── projectStatusUtils.ts     # Utility functions for status management
├── config/
│   └── projectStatusConfig.ts    # Configuration and default project data
└── components/
    └── DraggableProjectsCard.tsx # Main draggable card component
```

## 🔧 Quick Updates

### Adding a New Project

1. **Open** `src/config/projectStatusConfig.ts`
2. **Add** new project to `DEFAULT_PROJECT_STATUSES` array:

```typescript
{
  id: 'p5',                           // Unique identifier
  name: 'Your New Project Name',      // Display name
  status: 'pending',                  // 'complete' | 'in_progress' | 'pending'
  updatedAt: '2024-12-10'            // Last update date (YYYY-MM-DD)
}
```

### Updating Project Status

1. **Open** `src/config/projectStatusConfig.ts`
2. **Find** the project by `id`
3. **Update** the `status` and `updatedAt` fields:

```typescript
// Example: Mark project as complete
{
  id: 'p1',
  name: 'EEG Seizure Detector – SoC Accelerator',
  status: 'complete',                 // Changed from 'in_progress'
  updatedAt: '2024-12-15'            // Updated date
}
```

### Removing a Project

1. **Open** `src/config/projectStatusConfig.ts`
2. **Remove** the entire project object from `DEFAULT_PROJECT_STATUSES` array

## 📊 Project Status Types

| Status | Description | Icon | Color |
|--------|-------------|------|-------|
| `complete` | Project finished | ✅ CheckCircle2 | Green |
| `in_progress` | Currently working | 🕐 Clock | Amber |
| `pending` | Not started | ⏸️ PauseCircle | Gray |

## 🎛️ Configuration Options

### Card Settings

Edit `PROJECT_STATUS_CONFIG` in `src/config/projectStatusConfig.ts`:

```typescript
export const PROJECT_STATUS_CONFIG = {
  storageKey: 'homepageProjectsCard_v1',  // localStorage key for position
  maxVisible: 8,                          // Max projects shown in card
  defaultPosition: {                      // Default card position
    x: 0,
    y: 0
  }
}
```

### Card Behavior

- **Draggable**: Users can drag the card anywhere on screen
- **Minimizable**: Users can minimize/expand the card
- **Persistent**: Card position is saved in localStorage
- **Responsive**: Adapts to different screen sizes

## 🔄 Status Update Workflow

### 1. Development Phase
```typescript
status: 'in_progress'
updatedAt: '2024-12-01'
```

### 2. Testing Phase
```typescript
status: 'in_progress'
updatedAt: '2024-12-10'
```

### 3. Completion
```typescript
status: 'complete'
updatedAt: '2024-12-15'
```

## 📝 Best Practices

### Naming Conventions
- **Project IDs**: Use `p1`, `p2`, `p3`, etc.
- **Project Names**: Keep concise but descriptive
- **Dates**: Use `YYYY-MM-DD` format

### Status Management
- Update `updatedAt` whenever status changes
- Use `in_progress` for active development
- Use `complete` only when fully finished
- Use `pending` for planned but not started projects

### Performance
- Keep `maxVisible` reasonable (6-10 projects)
- Remove old/completed projects if list gets too long
- Update dates regularly for accurate progress tracking

## 🚀 Advanced Customization

### Adding New Status Types

1. **Update** `ProjectStatus` type in `src/types/projectStatus.ts`:
```typescript
export type ProjectStatus = 'complete' | 'in_progress' | 'pending' | 'on_hold'
```

2. **Update** utility functions in `src/lib/projectStatusUtils.ts`
3. **Add** corresponding icons and colors

### Custom Styling

Modify badge classes in `src/lib/projectStatusUtils.ts`:
```typescript
export const getStatusBadgeClasses = (status: string): string => {
  // Add your custom styling here
}
```

## 🔍 Troubleshooting

### Card Not Appearing
- Check if `DEFAULT_PROJECT_STATUSES` array is not empty
- Verify component is imported correctly in `page.tsx`

### Status Not Updating
- Ensure `updatedAt` field is updated when changing status
- Check browser console for TypeScript errors

### Position Not Saving
- Verify `storageKey` is unique
- Check localStorage permissions in browser

## 📋 Example Configuration

```typescript
export const DEFAULT_PROJECT_STATUSES: ProjectStatusItem[] = [
  { 
    id: 'p1', 
    name: 'EEG Seizure Detector – SoC Accelerator', 
    status: 'complete',
    updatedAt: '2024-12-15'
  },
  { 
    id: 'p2', 
    name: 'IoT Gas Detection System', 
    status: 'in_progress',
    updatedAt: '2024-12-10'
  },
  { 
    id: 'p3', 
    name: 'RF LNA Design', 
    status: 'pending',
    updatedAt: '2024-12-01'
  }
]
```

---

**Need Help?** Check the component files for more detailed implementation or create an issue in the repository.

# Projects Section Structure

## Folder & File Tree

```
src/
├── components/
│   ├── ProjectCard.tsx          # Individual project card component
│   └── ProjectsGrid.tsx         # Main projects grid layout
├── data/
│   └── projects.json            # Project data and metadata
└── types/
    └── project.ts               # TypeScript interfaces for projects
```

## Key Files & Their Roles

| File/Folder | Purpose | When to Edit |
|-------------|---------|--------------|
| `ProjectCard.tsx` | Renders individual project cards with animations and interactions | When changing card design, adding new project fields, or updating animations |
| `ProjectsGrid.tsx` | Main container that displays all projects in a responsive grid | When modifying grid layout, adding filters, or changing overall projects section structure |
| `projects.json` | Contains all project data including titles, descriptions, links, and images | When adding new projects, updating project details, or modifying project metadata |
| `project.ts` | TypeScript interfaces defining project data structure | When adding new project fields or changing data types |

## Files/Folders to Ignore

- **`src/app/page.tsx`** - Main page layout, only edit if changing overall page structure
- **`src/components/ui/`** - Reusable UI components, not project-specific
- **`src/styles/globals.css`** - Global styles, project styles are in component files
- **`public/`** - Static assets, project images should be referenced from `projects.json`
- **`src/lib/constants.ts`** - Global constants, project categories are in `projects.json`

## Editing Workflow

### 1. Adding a New Project

1. **Update `projects.json`** - Add new project object with required fields:
   ```json
   {
     "id": "unique-id",
     "title": "Project Name",
     "description": "Brief description",
     "longDescription": "Detailed description",
     "image": "/path/to/image.jpg",
     "technologies": ["React", "TypeScript"],
     "githubUrl": "https://github.com/...",
     "liveUrl": "https://project.com",
     "category": "web"
   }
   ```

2. **Add project image** - Place image in `public/` directory and reference in JSON

3. **Test display** - Run dev server and verify project appears correctly

### 2. Updating Project Summaries

1. **Edit `projects.json`** - Modify `description` field for brief summaries
2. **Update `longDescription`** - For detailed project information
3. **Refresh browser** - Check changes in development server

### 3. Revising Detail Pages

1. **Modify `ProjectCard.tsx`** - Update card layout and information display
2. **Adjust animations** - Update motion variants and transitions
3. **Test responsiveness** - Verify layout works on different screen sizes

### 4. Tweaking Layout/Styles

1. **Edit `ProjectsGrid.tsx`** - Modify grid layout, spacing, and container styles
2. **Update `ProjectCard.tsx`** - Change card styling, hover effects, and animations
3. **Test across devices** - Ensure responsive design works properly
4. **Check animations** - Verify smooth transitions and interactions 
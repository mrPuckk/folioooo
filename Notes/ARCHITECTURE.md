# Portfolio Site Architecture

## 🏗️ High-Level Component Architecture

```
Layout (Root)
├── Header
│   ├── Logo
│   ├── Navigation
│   └── ThemeToggle
├── Main Content
│   ├── Hero Section
│   ├── About Section
│   ├── Skills Section
│   ├── Projects Grid
│   │   └── Project Card (Multiple)
│   ├── Experience Section
│   └── Contact Section
└── Footer
    ├── Social Links
    └── Copyright
```

## 📁 Folder Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── components/                   # Reusable UI components
│   ├── ui/                      # Base UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── ThemeToggle.tsx
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   └── sections/                # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── ProjectsGrid.tsx
│       ├── Experience.tsx
│       └── Contact.tsx
├── lib/                         # Utility libraries
│   ├── utils.ts                 # General utilities
│   └── constants.ts             # App constants
├── hooks/                       # Custom React hooks
│   ├── useTheme.ts              # Theme management
│   └── useScrollAnimation.ts    # Scroll animations
├── context/                     # React Context providers
│   └── ThemeContext.tsx         # Dark/light mode context
├── types/                       # TypeScript type definitions
│   ├── project.ts               # Project data types
│   ├── skill.ts                 # Skill data types
│   └── experience.ts            # Experience data types
├── data/                        # Static data files
│   ├── projects.json            # Project data
│   ├── skills.json              # Skills data
│   └── experience.json          # Experience data
├── styles/                      # Global styles
│   └── globals.css              # Tailwind directives
└── assets/                      # Static assets
    ├── images/                  # Image files
    ├── icons/                   # Icon files
    └── fonts/                   # Custom fonts
```

## 🔄 Data Flow Architecture

### Projects Data Flow
```
projects.json → ProjectsGrid → ProjectCard
     ↓              ↓              ↓
  Static Data → Grid Layout → Individual Cards
```

**Detailed Flow:**
1. **Data Source**: `src/data/projects.json`
   ```json
   {
     "projects": [
       {
         "id": "1",
         "title": "Project Name",
         "description": "Description",
         "technologies": ["React", "TypeScript"],
         "image": "/images/project1.jpg",
         "githubUrl": "https://github.com/...",
         "liveUrl": "https://project.com",
         "featured": true
       }
     ]
   }
   ```

2. **Data Loading**: `ProjectsGrid` component imports and processes the data
3. **Rendering**: Each project is rendered as a `ProjectCard` component
4. **Props Flow**: Data flows from JSON → Grid → Individual Cards

### Skills Data Flow
```
skills.json → Skills Section → Skill Badge
     ↓              ↓              ↓
  Skill Data → Category Groups → Individual Skills
```

### Experience Data Flow
```
experience.json → Experience Section → Timeline Item
     ↓              ↓              ↓
  Experience Data → Timeline Layout → Individual Entries
```

## 🎨 State Management Architecture

### Theme Context (Dark/Light Mode)
```typescript
// Context Structure
ThemeContext {
  theme: 'light' | 'dark'
  toggleTheme: () => void
  isDark: boolean
}

// Usage Flow
ThemeContext → ThemeProvider → ThemeToggle → Layout
     ↓              ↓              ↓              ↓
  State Store → Provider → Toggle Button → Apply Styles
```

**State Flow:**
1. **Context Provider**: Wraps the entire app in `layout.tsx`
2. **Theme Toggle**: Button in header triggers theme change
3. **State Update**: Context updates theme state
4. **Style Application**: Tailwind classes applied based on theme
5. **Persistence**: Theme preference saved to localStorage

### Local State Management
- **Component State**: Individual components manage their own state
- **Form State**: Contact form uses local state with validation
- **Animation State**: Scroll animations use custom hooks
- **No Global State**: Simple enough to use React Context only

## 🎯 Component Architecture Details

### Layout Components
```typescript
// Header Component
Header {
  - Logo
  - Navigation (Home, About, Projects, Contact)
  - ThemeToggle
  - Mobile Menu (responsive)
}

// Footer Component
Footer {
  - Social Links (GitHub, LinkedIn, Twitter)
  - Copyright
  - Back to Top Button
}
```

### Section Components
```typescript
// Hero Section
Hero {
  - Name & Title
  - Brief Description
  - Call-to-Action Buttons
  - Background Animation
}

// About Section
About {
  - Personal Story
  - Profile Image
  - Key Highlights
}

// Projects Grid
ProjectsGrid {
  - Filter Controls (All, Featured, Web, Mobile)
  - Grid Layout
  - Project Cards
}

// Project Card
ProjectCard {
  - Project Image
  - Title & Description
  - Technology Badges
  - GitHub & Live Links
  - Hover Effects
}
```

## 🎨 Styling Architecture

### Tailwind CSS Structure
```css
/* Global Styles */
@tailwind base;     /* Reset & base styles */
@tailwind components; /* Component classes */
@tailwind utilities;  /* Utility classes */

/* Custom Components */
@layer components {
  .btn-primary { /* Custom button styles */ }
  .card-hover { /* Card hover effects */ }
  .gradient-text { /* Gradient text effects */ }
}
```

### Theme System
```typescript
// Light Theme
light: {
  background: 'bg-white',
  text: 'text-gray-900',
  card: 'bg-gray-50',
  border: 'border-gray-200'
}

// Dark Theme
dark: {
  background: 'bg-gray-900',
  text: 'text-gray-100',
  card: 'bg-gray-800',
  border: 'border-gray-700'
}
```

## 🚀 Performance Architecture

### Optimization Strategies
1. **Static Generation**: All pages pre-rendered at build time
2. **Image Optimization**: Next.js Image component for optimized images
3. **Code Splitting**: Automatic code splitting by Next.js
4. **Lazy Loading**: Images and components loaded on demand
5. **Caching**: Static assets cached for performance

### SEO Architecture
```typescript
// Metadata Structure
metadata: {
  title: 'Tuong Portfolio - Frontend Developer',
  description: 'Personal portfolio showcasing projects and skills',
  keywords: ['React', 'TypeScript', 'Next.js', 'Frontend'],
  openGraph: { /* Social media cards */ },
  twitter: { /* Twitter cards */ }
}
```

## 🔧 Development Architecture

### Development Workflow
1. **Component Development**: Create components in isolation
2. **Data Management**: Update JSON files for content
3. **Styling**: Use Tailwind classes and custom components
4. **Testing**: Component testing with Jest/React Testing Library
5. **Deployment**: Vercel deployment with automatic builds

### Code Organization Principles
- **Single Responsibility**: Each component has one clear purpose
- **Composition**: Components composed of smaller components
- **Props Interface**: Clear TypeScript interfaces for all props
- **Consistent Naming**: PascalCase for components, camelCase for functions
- **File Organization**: Related files grouped in feature folders

## 📊 Data Architecture

### Static Data Structure
```typescript
// Project Data Type
interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'fullstack';
}

// Skill Data Type
interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  level: 'beginner' | 'intermediate' | 'advanced';
  icon: string;
}

// Experience Data Type
interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}
```

This architecture provides a scalable, maintainable, and performant foundation for your portfolio site with clear separation of concerns and modern React/Next.js best practices. 
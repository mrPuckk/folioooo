# Content Modification Guide & Project Structure

## 📁 Project Structure Overview

```
Tuong-porfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with theme toggle
│   │   └── page.tsx           # Main page with all sections
│   ├── components/             # React components
│   │   ├── Hero.tsx           # Hero section with animations
│   │   ├── About.tsx          # About section with skills & timeline
│   │   ├── ProjectsGrid.tsx   # Projects grid container
│   │   ├── ProjectCard.tsx    # Individual project card
│   │   ├── Layout.tsx         # Main layout with navigation
│   │   ├── layout/
│   │   │   └── Navigation.tsx # Header navigation component
│   │   └── ui/                # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       └── switch.tsx
│   ├── data/                  # JSON data files
│   │   └── projects.json      # Project data
│   ├── types/                 # TypeScript type definitions
│   │   └── project.ts         # Project interface
│   ├── lib/                   # Utility functions
│   │   └── constants.ts       # Site configuration
│   └── styles/
│       └── globals.css        # Global styles
├── public/                    # Static assets
│   ├── avatar.jpg
│   ├── cv.pdf
│   └── projects/              # Project images
└── package.json               # Dependencies & scripts
```

## 🎯 Critical Files for Content Modification

### **1. Personal Information & Content**

#### **Hero Section** (`src/components/Hero.tsx`)
```typescript
// Lines 95-105: Main heading
<motion.h1 className="...">
  Tuong Phung  // ← Change your name here
</motion.h1>

// Lines 107-111: Professional title
<motion.h2 className="...">
  AI & Embedded Systems Engineer  // ← Change your title
</motion.h2>

// Lines 113-119: Description
<motion.p className="...">
  Passionate about creating intelligent systems...  // ← Change description
</motion.p>
```

#### **About Section** (`src/components/About.tsx`)
```typescript
// Lines 15-25: Skills array
const skills = [
  { name: 'C/C++', category: 'Programming', level: 'Expert' },
  { name: 'Python', category: 'Programming', level: 'Expert' },
  // ← Add/modify your skills here
]

// Lines 27-50: Timeline data
const timeline = [
  {
    type: 'education',
    title: 'Bachelor of Engineering',
    institution: 'University of Technology',
    period: '2020 - 2024',
    description: 'Specialized in Electrical Engineering...'
  },
  // ← Add/modify your education & experience
]
```

### **2. Project Data** (`src/data/projects.json`)

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Smart IoT Sensor Network",
      "description": "A comprehensive IoT system...",
      "tech": ["C/C++", "Python", "ROS2", "Verilog", "Cadence"],
      "image": "/projects/iot-sensor.jpg",
      "github": "https://github.com/tuongphung/iot-sensor-network",
      "demo": "https://demo.iot-sensor.net",
      "tags": ["IoT", "Embedded Systems", "Real-time", "Cloud"],
      "category": "embedded",
      "featured": true
    }
    // ← Add/modify your projects here
  ]
}
```

### **3. Site Configuration** (`src/lib/constants.ts`)

```typescript
export const SITE_CONFIG = {
  name: 'Tuong Phung',  // ← Change your name
  title: 'AI & Embedded Systems Engineer',  // ← Change title
  description: 'Portfolio of Tuong Phung...'  // ← Change description
}

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/tuongphung' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/tuongphung' },
  // ← Add/modify your social links
]
```

## 🔧 Step-by-Step Content Modification

### **Step 1: Update Personal Information**

1. **Change Name & Title**
   - Open `src/components/Hero.tsx`
   - Modify lines 95-111 with your name and title
   - Update description in lines 113-119

2. **Update About Section**
   - Open `src/components/About.tsx`
   - Modify skills array (lines 15-25)
   - Update timeline data (lines 27-50)

3. **Update Site Configuration**
   - Open `src/lib/constants.ts`
   - Update `SITE_CONFIG` with your information
   - Modify `SOCIAL_LINKS` with your social media

### **Step 2: Add/Modify Projects**

1. **Add Project Images**
   - Place project images in `public/projects/`
   - Use descriptive names: `project-name.jpg`

2. **Update Project Data**
   - Open `src/data/projects.json`
   - Add new project objects with all required fields:
     - `id`: Unique number
     - `title`: Project name
     - `description`: Detailed description
     - `tech`: Array of technologies used
     - `image`: Path to image (`/projects/image-name.jpg`)
     - `github`: GitHub repository URL
     - `demo`: Live demo URL (optional)
     - `tags`: Array of project tags
     - `category`: Project category
     - `featured`: Boolean for featured projects

### **Step 3: Update CV/Resume**

1. **Replace CV File**
   - Replace `public/cv.pdf` with your CV
   - Keep the same filename or update the download link in `Hero.tsx`

### **Step 4: Customize Styling**

1. **Colors & Theme**
   - Modify `src/styles/globals.css` for color changes
   - Update Tailwind classes in components

2. **Animations**
   - Adjust animation timing in component files
   - Modify `framer-motion` variants

## 🔗 How Components Connect

### **Data Flow**

```
projects.json → ProjectCard → ProjectsGrid → page.tsx
     ↓              ↓              ↓           ↓
  Project data → Card display → Grid layout → Main page
```

### **Component Hierarchy**

```
Layout.tsx (Root)
├── Navigation.tsx (Header)
└── page.tsx (Main content)
    ├── Hero.tsx
    ├── About.tsx
    ├── ProjectsGrid.tsx
    │   └── ProjectCard.tsx (for each project)
    └── Contact section
```

### **Type Safety**

```
project.ts (Interface) → projects.json (Data) → ProjectCard.tsx (Display)
     ↓                        ↓                        ↓
TypeScript types → JSON data → React component
```

## 🎨 Customization Options

### **1. Change Colors**
```css
/* In src/styles/globals.css */
:root {
  --primary: #your-color;
  --secondary: #your-color;
  --background: #your-color;
}
```

### **2. Modify Animations**
```typescript
// In any component file
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,  // ← Adjust timing
      ease: "easeOut"
    }
  }
}
```

### **3. Add New Sections**
1. Create new component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Add navigation item in `src/lib/constants.ts`

## 📝 Content Update Checklist

### **Personal Information**
- [ ] Name in Hero section
- [ ] Professional title
- [ ] About description
- [ ] Skills list
- [ ] Education timeline
- [ ] Experience timeline
- [ ] Site configuration
- [ ] Social media links

### **Projects**
- [ ] Project images in `public/projects/`
- [ ] Project data in `projects.json`
- [ ] GitHub links
- [ ] Demo links (if available)
- [ ] Technology stacks
- [ ] Project tags
- [ ] Featured status

### **Assets**
- [ ] CV/Resume file
- [ ] Avatar image
- [ ] Project screenshots
- [ ] Logo (if needed)

## 🚀 Deployment Steps

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Test locally**
   ```bash
   npm run dev
   ```

3. **Deploy to platform**
   - Vercel: Connect GitHub repository
   - Netlify: Drag and drop `out` folder
   - GitHub Pages: Use GitHub Actions

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📋 File Modification Priority

### **High Priority (Content)**
1. `src/data/projects.json` - Your projects
2. `src/components/Hero.tsx` - Name and title
3. `src/components/About.tsx` - Skills and timeline
4. `src/lib/constants.ts` - Site configuration

### **Medium Priority (Styling)**
1. `src/styles/globals.css` - Colors and fonts
2. Component files - Animation timing
3. `public/` folder - Images and assets

### **Low Priority (Structure)**
1. `src/types/` - Type definitions
2. `src/components/ui/` - UI components
3. Configuration files

## 🎯 Quick Start Guide

1. **Clone and install**
   ```bash
   git clone <repository>
   cd Tuong-porfolio
   npm install
   ```

2. **Update personal info**
   - Edit `src/components/Hero.tsx` (name, title, description)
   - Edit `src/components/About.tsx` (skills, timeline)
   - Edit `src/lib/constants.ts` (site config, social links)

3. **Add your projects**
   - Add images to `public/projects/`
   - Update `src/data/projects.json`

4. **Customize styling**
   - Modify colors in `src/styles/globals.css`
   - Adjust animations in component files

5. **Deploy**
   ```bash
   npm run build
   # Deploy to your preferred platform
   ```

This guide provides everything you need to customize your portfolio with your own content while maintaining the elegant Apple-style design! 
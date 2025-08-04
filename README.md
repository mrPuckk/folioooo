# Tuong Q. Phung - Portfolio

A modern, responsive portfolio website showcasing AI & Embedded Systems engineering projects, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Project Blog**: Detailed project pages with markdown content
- **Responsive**: Optimized for all devices and screen sizes
- **Performance**: Fast loading with static generation
- **SEO Optimized**: Proper meta tags and structured data
- **Dark/Light Mode**: Theme switching capability

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Content**: Markdown with MDX
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── projects/          # Project blog pages
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Hero.tsx          # Hero section
│   ├── ProjectCard.tsx   # Project cards
│   └── ProjectDetail.tsx # Project detail pages
├── data/                 # Static data
│   └── projects.json     # Project information
├── lib/                  # Utilities
│   └── projects.ts       # Project data handling
└── styles/               # Global styles
    └── globals.css       # Tailwind and custom CSS
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd tuong-porfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run analyze` - Analyze bundle size

## 🌐 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to connect your GitHub repository

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to your preferred hosting service**

## 📝 Content Management

### Adding New Projects

1. **Add project data** to `src/data/projects.json`
2. **Create markdown file** in `content/projects/`
3. **Update images** in `public/projects/`

### Customizing Content

- **Hero section**: Edit `src/components/Hero.tsx`
- **Project cards**: Modify `src/components/ProjectCard.tsx`
- **Styling**: Update `src/styles/globals.css`

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Next.js Config

See `next.config.js` for build optimizations and image settings.

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading Speed**: < 2s on 3G networks
- **SEO**: Fully optimized for search engines

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Tuong Q. Phung**
- AI & Embedded Systems Engineer
- Specializing in machine learning, computer vision, and IoT solutions

---

Built with ❤️ using Next.js and TypeScript 
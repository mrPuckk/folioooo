# PDF Previewer Guide

## Overview

The PDF Previewer is a feature that allows users to preview and download multiple PDF files for each project. It's integrated into each project detail page and provides a professional way to share project documentation and notes with a sidebar file browser.

## Features

### Core Functionality
- **Multiple PDF Support**: Handle multiple PDF files per project
- **Sidebar File Browser**: Left sidebar showing all available PDF files
- **PDF Preview**: View uploaded PDF files in a modal with embedded viewer
- **PDF Download**: Download PDF files directly from the preview
- **File Upload**: Upload new PDF files (when enabled)
- **File Deletion**: Delete uploaded PDF files (when enabled)
- **Responsive Design**: Works on desktop and mobile devices
- **Professional Interface**: Clean, modern modal design

### Technical Features
- **Embedded PDF Viewer**: Uses browser's native PDF viewer
- **File Upload Support**: Drag and drop or click to upload PDFs
- **Multiple File Sources**: Support for both uploaded files and server-hosted PDFs
- **Loading States**: Smooth loading animations and error handling
- **File Management**: Upload, preview, download, and delete PDF files
- **Accessibility**: Keyboard navigation and screen reader support

## Usage

### In Project Detail Pages

The PDF Previewer is automatically available on all project detail pages. Users can:

1. **Preview PDFs**: Click the "Preview PDFs (X files)" button to open a modal with the PDF viewer
2. **Select Files**: Use the sidebar to select different PDF files
3. **Download PDF**: Click the "Download" button to download the selected PDF file
4. **Upload PDF**: Click "Upload PDF" to add a new PDF file (when enabled)
5. **Delete PDF**: Click the delete icon next to uploaded files (when enabled)
6. **Close Preview**: Click the X button or outside the modal to close the preview

### Component Props

```typescript
interface PDFFile {
  id: string
  name: string
  url: string
  size?: string
  uploadedAt?: string | Date
}

interface PDFPreviewerProps {
  pdfUrl?: string              // Single PDF URL (legacy support)
  pdfFiles?: PDFFile[]         // Array of PDF files
  title?: string              // Project title for the modal
  className?: string          // Additional CSS classes
  allowUpload?: boolean       // Enable file upload functionality
  onFileUpload?: (file: File) => void  // Callback for file uploads
  onFileDelete?: (fileId: string) => void  // Callback for file deletions
}
```

### Example Usage

```tsx
import { PDFPreviewer } from '@/components/PDFPreviewer'

// With multiple PDF files
<PDFPreviewer 
  pdfFiles={[
    {
      id: 'main-notes',
      name: 'Project Overview.pdf',
      url: '/pdfs/project-overview.pdf',
      size: '2.4 MB',
      uploadedAt: '2024-01-15'
    },
    {
      id: 'technical-specs',
      name: 'Technical Specifications.pdf',
      url: '/pdfs/technical-specs.pdf',
      size: '1.8 MB',
      uploadedAt: '2024-01-20'
    }
  ]}
  title="Project Notes"
  allowUpload={true}
  onFileUpload={(file) => {
    console.log('PDF uploaded:', file.name)
    // Handle file upload logic
  }}
  onFileDelete={(fileId) => {
    console.log('PDF deleted:', fileId)
    // Handle file deletion logic
  }}
/>
```

## Implementation Details

### Dependencies
- `framer-motion`: Animation library for smooth transitions
- `lucide-react`: Icon library
- Browser's native PDF viewer (no additional dependencies)

### File Structure
```
src/components/
├── PDFPreviewer.tsx          # Main PDF previewer component
└── ProjectDetail.tsx         # Project detail page with PDF previewer integration

public/pdfs/
├── README.md                 # Documentation for PDF files
├── smart-iot-sensor-network-notes.pdf
├── smart-iot-sensor-network-specs.pdf
└── smart-iot-sensor-network-implementation.pdf
```

### PDF File Management

#### Adding PDF Files
1. Place PDF files in the `public/pdfs/` directory
2. Update the `pdfFiles` field in `src/data/projects.json`
3. The PDFs will be automatically available in the project detail page

#### File Naming Convention
- Use descriptive names for better organization
- Example: `project-overview.pdf`, `technical-specs.pdf`, `implementation-guide.pdf`

### Data Structure

The project data structure includes a `pdfFiles` array:

```json
{
  "id": 1,
  "title": "Smart IoT Sensor Network",
  "pdfFiles": [
    {
      "id": "main-notes",
      "name": "Project Overview & Architecture.pdf",
      "url": "/pdfs/smart-iot-sensor-network-notes.pdf",
      "size": "2.4 MB",
      "uploadedAt": "2024-01-15"
    },
    {
      "id": "technical-specs",
      "name": "Technical Specifications.pdf",
      "url": "/pdfs/smart-iot-sensor-network-specs.pdf",
      "size": "1.8 MB",
      "uploadedAt": "2024-01-20"
    }
  ]
}
```

## UI Features

### Sidebar File Browser
- **File List**: Shows all available PDF files with names and metadata
- **File Selection**: Click to select and preview different files
- **File Information**: Displays file size and upload date
- **Delete Option**: Remove uploaded files (with confirmation)
- **Visual Feedback**: Selected file is highlighted

### Main Viewer
- **Full-screen PDF**: Embedded PDF viewer takes up the main area
- **Loading States**: Smooth loading animations
- **Error Handling**: Graceful handling of missing or corrupted files
- **Responsive Design**: Adapts to different screen sizes

### Upload Interface
- **Drag & Drop**: Users can drag PDF files directly into the modal
- **Click to Upload**: Traditional file picker interface
- **File Validation**: Only PDF files are accepted
- **Progress Feedback**: Loading states during upload

## Customization

### Styling

The component uses Tailwind CSS classes and can be customized:

```tsx
<PDFPreviewer 
  pdfFiles={pdfFiles}
  title={title}
  className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30"
/>
```

### Upload Functionality

Enable file upload with custom handling:

```tsx
<PDFPreviewer 
  title={title}
  allowUpload={true}
  onFileUpload={(file) => {
    // Upload to your server
    const formData = new FormData()
    formData.append('pdf', file)
    
    fetch('/api/upload-pdf', {
      method: 'POST',
      body: formData
    })
  }}
  onFileDelete={(fileId) => {
    // Delete from server
    fetch(`/api/delete-pdf/${fileId}`, {
      method: 'DELETE'
    })
  }}
/>
```

## Browser Compatibility

The PDF previewer works in all modern browsers that support:
- HTML5 iframe elements
- File API for uploads
- CSS transforms and animations
- Native PDF viewing (most modern browsers)

## Performance Considerations

- PDF files are served statically from the public directory
- Large PDF files may take time to load
- Consider compressing PDFs for better performance
- File uploads are handled client-side for immediate feedback
- Sidebar only appears when multiple files are available

## Security Considerations

- Only PDF files are accepted for upload
- File size limits should be implemented on the server
- Validate file types and content on the server side
- Consider implementing authentication for file uploads
- Sanitize file names and metadata

## Future Enhancements

Potential improvements for future versions:
- PDF thumbnail generation
- PDF annotation and commenting
- Version control for uploaded PDFs
- Cloud storage integration (AWS S3, Google Cloud Storage)
- PDF search functionality
- OCR text extraction
- PDF metadata editing
- Batch operations (upload multiple files, delete multiple files)
- File organization (folders, tags)
- PDF comparison tools 
# Lecture Notes Uploader

## Overview

The Lecture Notes Uploader is a specialized feature integrated into each project page that allows you to upload, organize, and manage your lecture notes and project documentation. It's designed specifically for students and researchers to keep their learning materials organized by project.

## Features

### Core Functionality
- **Project-Specific Upload**: Upload lecture notes directly within each project page
- **Multiple File Types**: Support for lecture notes, project notes, and documentation
- **File Organization**: Automatic categorization and visual indicators
- **Easy Access**: Quick preview and download of uploaded materials
- **File Management**: Upload, preview, download, and delete lecture notes

### File Types Supported
- **Lecture Notes** (📚): Course lectures and presentations
- **Project Notes** (📄): Research notes and project documentation
- **Documentation** (📋): Technical specifications and guides

## How to Use

### Uploading Lecture Notes

1. **Navigate to a Project**: Go to any project detail page
2. **Click "Lecture Notes"**: Find the lecture notes button in the project actions
3. **Upload Files**: Click "Add Notes" to upload your PDF lecture notes
4. **Organize**: Files are automatically categorized and displayed in the sidebar

### Managing Your Notes

- **Preview**: Click on any file in the sidebar to preview it
- **Download**: Use the download button to save files locally
- **Delete**: Remove uploaded files using the delete icon (uploaded files only)
- **Organize**: Files are automatically sorted by type and upload date

## File Organization

### Automatic Categorization
- **Lecture Notes**: Course materials, presentations, and lectures
- **Project Notes**: Research notes, findings, and project documentation
- **Documentation**: Technical specs, guides, and reference materials

### Visual Indicators
- 📚 **Blue Icon**: Lecture notes
- 📄 **Green Icon**: Project notes  
- 📋 **Purple Icon**: Documentation

## Technical Implementation

### File Storage
- Files are organized by project slug
- Automatic file naming and categorization
- Support for multiple file formats (PDF)

### Data Structure
```typescript
interface PDFFile {
  id: string
  name: string
  url: string
  size?: string
  uploadedAt?: string | Date
  type?: 'lecture' | 'notes' | 'documentation'
}
```

### Project Integration
Each project can have multiple lecture notes:
```json
{
  "pdfFiles": [
    {
      "id": "lecture-1",
      "name": "Lecture 1 - Introduction to IoT.pdf",
      "url": "/pdfs/smart-iot-sensor-network-lecture-1.pdf",
      "size": "2.4 MB",
      "uploadedAt": "2024-01-15",
      "type": "lecture"
    }
  ]
}
```

## Benefits for Students

### Organization
- Keep all lecture notes organized by project
- Easy access to course materials
- Visual categorization for quick identification

### Accessibility
- Preview notes without downloading
- Quick access from project pages
- Mobile-friendly interface

### Collaboration
- Share lecture notes with project context
- Maintain project-specific documentation
- Easy file management

## Best Practices

### File Naming
- Use descriptive names: "Lecture 1 - Introduction.pdf"
- Include lecture numbers for easy sorting
- Add relevant keywords for searchability

### Organization
- Upload lecture notes as you receive them
- Use consistent naming conventions
- Categorize files appropriately

### File Management
- Keep files under 10MB for optimal performance
- Use compressed PDFs when possible
- Regularly clean up outdated materials

## Future Enhancements

Potential improvements for future versions:
- **Search Functionality**: Search within uploaded notes
- **Note Taking**: Add annotations to PDFs
- **Sharing**: Share notes with classmates
- **Version Control**: Track changes to notes
- **Cloud Sync**: Automatic backup to cloud storage
- **Mobile App**: Dedicated mobile interface
- **Collaborative Notes**: Real-time collaborative editing
- **Integration**: Connect with learning management systems 
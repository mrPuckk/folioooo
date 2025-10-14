# Adding Lecture Notes Through Code

## Overview

The lecture notes system now works like a blog where you add PDF files through code rather than user uploads. This provides better control, organization, and consistency across your portfolio.

## How to Add Lecture Notes

### 1. **Add PDF Files to Public Directory**

First, place your PDF files in the `public/pdfs/` directory:

```
public/pdfs/
├── smart-iot-sensor-network-lecture-1.pdf
├── smart-iot-sensor-network-lecture-2.pdf
├── smart-iot-sensor-network-lecture-3.pdf
├── smart-iot-sensor-network-notes.pdf
├── smart-iot-sensor-network-docs.pdf
├── fpga-image-processor-lecture-1.pdf
├── fpga-image-processor-lecture-2.pdf
└── fpga-image-processor-notes.pdf
```

### 2. **Update Project Data**

Add lecture notes to your project in `src/data/projects.json`:

```json
{
  "id": 1,
  "title": "Smart IoT Sensor Network",
  "pdfFiles": [
    {
      "id": "lecture-1",
      "name": "Lecture 1 - Introduction to IoT.pdf",
      "url": "/pdfs/smart-iot-sensor-network-lecture-1.pdf",
      "size": "2.4 MB",
      "uploadedAt": "2024-01-15",
      "type": "lecture"
    },
    {
      "id": "lecture-2",
      "name": "Lecture 2 - Sensor Networks.pdf",
      "url": "/pdfs/smart-iot-sensor-network-lecture-2.pdf",
      "size": "1.8 MB",
      "uploadedAt": "2024-01-20",
      "type": "lecture"
    },
    {
      "id": "project-notes",
      "name": "Project Notes & Research.pdf",
      "url": "/pdfs/smart-iot-sensor-network-notes.pdf",
      "size": "3.2 MB",
      "uploadedAt": "2024-01-25",
      "type": "notes"
    }
  ]
}
```

### 3. **File Structure**

Each lecture note entry has these fields:

- **`id`**: Unique identifier (e.g., "lecture-1", "project-notes")
- **`name`**: Display name for the file
- **`url`**: Path to the PDF file in public directory
- **`size`**: File size for display (optional)
- **`uploadedAt`**: Date when the file was added
- **`type`**: File category ("lecture", "notes", "documentation")

### 4. **File Types**

The system supports three types of files:

- **`lecture`**: Course lectures and presentations (blue icon)
- **`notes`**: Project notes and research (green icon)
- **`documentation`**: Technical documentation (purple icon)

## Example: Adding Lecture Notes to a New Project

### Step 1: Create PDF Files
```
public/pdfs/
└── ml-accelerator-lecture-1.pdf
└── ml-accelerator-lecture-2.pdf
└── ml-accelerator-notes.pdf
```

### Step 2: Update Project Data
```json
{
  "id": 5,
  "title": "ML Accelerator Chip",
  "pdfFiles": [
    {
      "id": "lecture-1",
      "name": "Lecture 1 - Neural Network Basics.pdf",
      "url": "/pdfs/ml-accelerator-lecture-1.pdf",
      "size": "2.7 MB",
      "uploadedAt": "2024-03-01",
      "type": "lecture"
    },
    {
      "id": "lecture-2",
      "name": "Lecture 2 - Hardware Acceleration.pdf",
      "url": "/pdfs/ml-accelerator-lecture-2.pdf",
      "size": "3.1 MB",
      "uploadedAt": "2024-03-05",
      "type": "lecture"
    },
    {
      "id": "project-notes",
      "name": "ML Accelerator Design Notes.pdf",
      "url": "/pdfs/ml-accelerator-notes.pdf",
      "size": "4.2 MB",
      "uploadedAt": "2024-03-10",
      "type": "notes"
    }
  ]
}
```

## Benefits of Code-Based Approach

### ✅ **Advantages**
- **Version Control**: All lecture notes are tracked in Git
- **Consistency**: Standardized file naming and organization
- **Performance**: Static files served efficiently
- **Reliability**: No dependency on user uploads
- **Organization**: Clear structure and categorization

### 📁 **File Organization**
- **Descriptive Names**: Use clear, descriptive file names
- **Consistent Structure**: Follow naming conventions
- **Proper Categorization**: Use appropriate file types
- **Size Information**: Include file sizes for user reference

## Best Practices

### **File Naming**
- Use descriptive names: "Lecture 1 - Introduction to IoT.pdf"
- Include project context: "smart-iot-sensor-network-lecture-1.pdf"
- Use consistent numbering for lectures

### **Organization**
- Group related files together
- Use appropriate file types
- Include meaningful metadata
- Keep file sizes reasonable

### **Maintenance**
- Update file sizes when files change
- Keep upload dates current
- Remove outdated files
- Maintain consistent structure

## Current Projects with Lecture Notes

### **Smart IoT Sensor Network**
- Lecture 1 - Introduction to IoT
- Lecture 2 - Sensor Networks  
- Lecture 3 - Data Processing
- Project Notes & Research
- Technical Documentation

### **FPGA Image Processor**
- Lecture 1 - FPGA Fundamentals
- Lecture 2 - Image Processing Algorithms
- FPGA Design Notes

## Future Enhancements

Potential improvements for the code-based approach:
- **Automated File Processing**: Scripts to generate metadata
- **File Validation**: Checks for missing or corrupted files
- **Bulk Import**: Tools for adding multiple files at once
- **Search Integration**: Full-text search across PDFs
- **Versioning**: Track changes to lecture notes over time 
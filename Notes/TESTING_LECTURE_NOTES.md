# Testing Lecture Notes Uploader

## How to Test the Upload Functionality

### 1. **Open a Project Page**
- Navigate to any project detail page (e.g., `/projects/smart-iot-sensor-network`)
- Look for the "Lecture Notes" button in the project actions section

### 2. **Test Upload Functionality**
- Click the "Lecture Notes" button to open the modal
- Click "Add Notes" to show the upload area
- Click "Choose PDF File" to select a PDF file
- The file should appear in the sidebar immediately after upload

### 3. **Test File Management**
- **Preview**: Click on any file in the sidebar to preview it
- **Download**: Use the download button to save files locally
- **Delete**: Click the delete icon (🗑️) next to uploaded files
- **Multiple Files**: Upload multiple files to test the sidebar

### 4. **Test Persistence**
- Upload a file
- Refresh the page
- Check the browser console for localStorage logs
- Note: Blob URLs don't persist across refreshes, but metadata does

## Expected Behavior

### ✅ **Working Features**
- File upload with immediate preview
- Sidebar file browser with file information
- File type categorization (Lecture Notes, Project Notes, Documentation)
- Download functionality
- Delete functionality for uploaded files
- Visual feedback during upload process
- Proper error handling

### ⚠️ **Known Limitations**
- **Blob URLs**: Uploaded files use blob URLs that don't persist across page refreshes
- **File Storage**: Currently client-side only (no server storage)
- **File Size**: Large files may cause performance issues

## Debug Information

### Console Logs
The component logs important events to the console:
- `File uploaded successfully: [file object]`
- `Lecture notes uploaded for project: [project-slug] [filename] [size]`
- `Lecture notes deleted: [file-id]`
- `Found persisted uploads: [metadata]`

### localStorage Keys
- Format: `project-{project-slug}-uploads`
- Example: `project-smart-iot-sensor-network-uploads`
- Contains metadata about uploaded files

## Troubleshooting

### **Files Don't Appear After Upload**
1. Check browser console for errors
2. Verify file is a valid PDF
3. Check file size (should be under 10MB)
4. Ensure upload area is visible

### **Files Disappear on Refresh**
- This is expected behavior with blob URLs
- In production, you'd implement server-side storage
- Metadata is preserved in localStorage

### **Delete Button Not Visible**
- Delete buttons only appear for uploaded files
- Pre-existing PDF files (from pdfFiles prop) cannot be deleted
- Check if file ID starts with "uploaded-"

## Production Implementation

For a production environment, you would need to:

1. **Server-Side Storage**: Implement file upload to a server (AWS S3, etc.)
2. **Database**: Store file metadata in a database
3. **Authentication**: Add user authentication for file management
4. **File Validation**: Server-side file type and size validation
5. **CDN**: Use a CDN for file delivery
6. **Backup**: Implement file backup and recovery

## Current Implementation Details

### **State Management**
- `uploadedFiles`: React state for uploaded files
- `selectedFileId`: Currently selected file
- `isLoading`: Upload progress indicator
- `showUploadArea`: Upload interface visibility

### **File Handling**
- **Blob URLs**: Used for immediate preview
- **File Metadata**: Stored in component state
- **Memory Management**: Blob URLs are revoked on delete/unmount
- **Type Safety**: Full TypeScript support

### **UI Features**
- **Responsive Design**: Works on mobile and desktop
- **Smooth Animations**: Framer Motion transitions
- **Visual Feedback**: Loading states and progress indicators
- **Accessibility**: Keyboard navigation support 
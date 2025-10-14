'use client'

import React, { useState, useRef, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, FileText, BookOpen, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface PDFFile {
  id: string
  name: string
  url: string
  size?: string
  uploadedAt?: string | Date
  type?: 'lecture' | 'notes' | 'documentation'
}

interface PDFPreviewerProps {
  pdfUrl?: string
  pdfFiles?: PDFFile[]
  title?: string
  className?: string
  projectSlug?: string
}

export function PDFPreviewer({ 
  pdfUrl, 
  pdfFiles = [],
  title = 'Project Notes',
  className = '',
  projectSlug
}: PDFPreviewerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedFileId, setSelectedFileId] = useState<string | null>(null)

  // Combine single PDF URL with multiple PDF files
  const allFiles: PDFFile[] = useMemo(() => [
    ...(pdfUrl ? [{
      id: 'main-pdf',
      name: `${title} Notes.pdf`,
      url: pdfUrl,
      size: 'Unknown',
      uploadedAt: new Date().toISOString(),
      type: 'notes' as const
    }] : []),
    ...pdfFiles
  ], [pdfUrl, title, pdfFiles])

  // Set initial selected file when files change
  useEffect(() => {
    if (allFiles.length > 0 && !selectedFileId) {
      setSelectedFileId(allFiles[0].id)
    }
  }, [allFiles, selectedFileId])

  const selectedFile = allFiles.find(file => file.id === selectedFileId) || allFiles[0]
  const hasFiles = allFiles.length > 0

  const downloadPDF = () => {
    if (selectedFile) {
      const link = document.createElement('a')
      link.href = selectedFile.url
      link.download = selectedFile.name
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const formatFileSize = (size: string) => {
    return size
  }

  const formatDate = (date: string | Date) => {
    if (typeof date === 'string') {
      return new Date(date).toLocaleDateString()
    }
    return date.toLocaleDateString()
  }

  const getFileTypeIcon = (type?: string) => {
    switch (type) {
      case 'lecture':
        return <BookOpen className="w-4 h-4 text-blue-500" />
      case 'notes':
        return <FileText className="w-4 h-4 text-green-500" />
      case 'documentation':
        return <FileText className="w-4 h-4 text-purple-500" />
      default:
        return <FileText className="w-4 h-4 text-primary" />
    }
  }

  const getFileTypeLabel = (type?: string) => {
    switch (type) {
      case 'lecture':
        return 'Lecture Notes'
      case 'notes':
        return 'Project Notes'
      case 'documentation':
        return 'Documentation'
      default:
        return 'PDF'
    }
  }

  return (
    <>
      {/* PDF Preview Button */}
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        className={`group ${className}`}
        disabled={!hasFiles}
      >
        {hasFiles ? (
          <>
            <BookOpen className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Lecture Notes ({allFiles.length})
          </>
        ) : (
          <>
            <FileText className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            No Lecture Notes
          </>
        )}
      </Button>

      {/* PDF Preview Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card border border-border rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">
                    {title} - Lecture Notes
                  </h2>
                  {hasFiles && (
                    <span className="text-sm text-muted-foreground">
                      ({allFiles.length} files)
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-3">
                  {selectedFile && (
                    <Button
                      onClick={downloadPDF}
                      variant="outline"
                      size="sm"
                      className="group"
                    >
                      <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Download
                    </Button>
                  )}
                  
                  <Button
                    onClick={() => setIsOpen(false)}
                    variant="ghost"
                    size="sm"
                    className="hover:bg-destructive/10 hover:text-destructive"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="flex h-[calc(90vh-80px)]">
                {/* Sidebar - File Browser */}
                {allFiles.length > 1 && (
                  <div className="w-80 border-r border-border bg-muted/20">
                    <div className="p-4 border-b border-border">
                      <h3 className="font-semibold text-foreground mb-2">Lecture Notes</h3>
                      <p className="text-sm text-muted-foreground">
                        Select a file to preview
                      </p>
                    </div>
                    
                    <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
                      {allFiles.map((file) => (
                        <motion.div
                          key={file.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div
                            className={`relative group ${
                              selectedFileId === file.id 
                                ? 'bg-primary/20 border-primary/50 shadow-lg' 
                                : 'hover:bg-muted/50'
                            } border-b border-border/50 transition-all duration-200`}
                          >
                            <button
                              onClick={() => setSelectedFileId(file.id)}
                              className="w-full p-4 text-left transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                  {getFileTypeIcon(file.type)}
                                  <div className="flex-1 min-w-0">
                                    <p className="font-medium text-foreground truncate">
                                      {file.name}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                                        {getFileTypeLabel(file.type)}
                                      </span>
                                      {file.size && (
                                        <span>{formatFileSize(file.size)}</span>
                                      )}
                                      {file.uploadedAt && (
                                        <span>• {formatDate(file.uploadedAt)}</span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Main Content - PDF Viewer */}
                <div className="flex-1 overflow-hidden">
                  {selectedFile ? (
                    <div className="w-full h-full">
                      <iframe
                        src={`${selectedFile.url}#toolbar=0&navpanes=0&scrollbar=0`}
                        className="w-full h-full border-0"
                        title={`PDF Preview - ${selectedFile.name}`}
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          No Lecture Notes Available
                        </h3>
                        <p className="text-muted-foreground">
                          No lecture notes have been added for this project.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 
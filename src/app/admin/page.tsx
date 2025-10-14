'use client'

import { useState, useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { RefreshCw, Mail, Calendar, Users, LogOut } from 'lucide-react'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { useAuth } from '@/context/AuthContext'

interface EmailData {
  email: string
  created_at: string
}

interface ApiResponse {
  emails: string[]
  count: number
  lastUpdated: string
  details: EmailData[]
}

function AdminPageContent() {
  const [emails, setEmails] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { logout } = useAuth()

  const fetchEmails = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('/api/cv-request')
      if (!response.ok) {
        throw new Error('Failed to fetch emails')
      }
      
      const data = await response.json()
      setEmails(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEmails()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Section className="py-8">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">CV Request Admin</h1>
                <p className="text-muted-foreground">
                  View and manage submitted email requests
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Button onClick={fetchEmails} disabled={loading}>
                  <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
                <Button onClick={logout} variant="outline">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>

            {loading && (
              <div className="text-center py-8">
                <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4" />
                <p>Loading emails...</p>
              </div>
            )}

            {error && (
              <Card className="p-6 mb-6 border-red-200 bg-red-50 dark:bg-red-900/20">
                <p className="text-red-600 dark:text-red-400">{error}</p>
              </Card>
            )}

            {emails && !loading && (
              <>
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="p-6">
                    <div className="flex items-center">
                      <Users className="w-8 h-8 text-blue-600 mr-3" />
                      <div>
                        <p className="text-2xl font-bold">{emails.count}</p>
                        <p className="text-muted-foreground">Total Requests</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6">
                    <div className="flex items-center">
                      <Mail className="w-8 h-8 text-green-600 mr-3" />
                      <div>
                        <p className="text-2xl font-bold">{emails.emails.length}</p>
                        <p className="text-muted-foreground">Unique Emails</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6">
                    <div className="flex items-center">
                      <Calendar className="w-8 h-8 text-purple-600 mr-3" />
                      <div>
                        <p className="text-sm font-medium">Last Updated</p>
                        <p className="text-muted-foreground text-xs">
                          {formatDate(emails.lastUpdated)}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Email List */}
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Email Requests</h2>
                  
                  {emails.details.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">
                      No email requests yet.
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {emails.details.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 text-muted-foreground mr-3" />
                            <span className="font-medium">{item.email}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-2" />
                            {formatDate(item.created_at)}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              </>
            )}
          </div>
        </Container>
      </Section>
    </div>
  )
}

export default function AdminPage() {
  return (
    <ProtectedRoute>
      <AdminPageContent />
    </ProtectedRoute>
  )
}

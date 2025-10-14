'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface AuthContextType {
  isAuthenticated: boolean
  login: (token: string) => void
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated on mount
    const token = localStorage.getItem('authToken')
    const authStatus = localStorage.getItem('isAuthenticated')
    
    if (token && authStatus === 'true') {
      setIsAuthenticated(true)
    }
    setLoading(false)
  }, [])

  const login = (token: string) => {
    localStorage.setItem('authToken', token)
    localStorage.setItem('isAuthenticated', 'true')
    setIsAuthenticated(true)
  }

  const logout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('isAuthenticated')
    setIsAuthenticated(false)
    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

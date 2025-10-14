'use client'

import { useState, useEffect, useCallback } from 'react'
import { FormState } from '@/types'

export function useFormSubmission<T = any>(
  submitFn: (data: T) => Promise<any>
): {
  formState: FormState
  submit: (data: T) => Promise<void>
  reset: () => void
} {
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSubmitted: false,
  })

  const submit = useCallback(async (data: T) => {
    setFormState(prev => ({ ...prev, isSubmitting: true, error: undefined }))
    
    try {
      const result = await submitFn(data)
      setFormState({
        isSubmitting: false,
        isSubmitted: true,
        success: 'Form submitted successfully!'
      })
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred'
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        error: errorMessage
      })
    }
  }, [submitFn])

  const reset = useCallback(() => {
    setFormState({
      isSubmitting: false,
      isSubmitted: false,
      error: undefined,
      success: undefined
    })
  }, [])

  return { formState, submit, reset }
}

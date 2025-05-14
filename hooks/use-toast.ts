"use client"

import { toast as sonnerToast, Toaster } from 'sonner'

type ToastProps = {
  title?: string
  description?: string
  variant?: 'default' | 'destructive' | 'success'
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

export function useToast() {
  function toast({
    title,
    description,
    variant = 'default',
    duration = 5000,
    action
  }: ToastProps) {
    const options = {
      description,
      duration,
      action: action ? {
        label: action.label,
        onClick: action.onClick
      } : undefined,
    };

    // Instead of using bracket notation, use explicit function calls
    if (variant === 'destructive') {
      return sonnerToast.error(title, options);
    } else if (variant === 'success') {
      return sonnerToast.success(title, options);
    } else {
      return sonnerToast(title, options); // Default toast
    }
  }

  return {
    toast,
    dismiss: sonnerToast.dismiss,
    // For compatibility with existing code
    success: (props: Omit<ToastProps, 'variant'>) => toast({ ...props, variant: 'success' }),
    error: (props: Omit<ToastProps, 'variant'>) => toast({ ...props, variant: 'destructive' }),
  }
}

// Export the Toaster component for use in your layout
export { Toaster }

// For direct imports
export const toast = sonnerToast;
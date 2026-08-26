import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          'hover:-translate-x-0.5',
          'rounded-full', // Consistent for all buttons
          {
            // Variants
            'bg-accent text-white hover:bg-accent-hover shadow-subtle hover:shadow-card':
              variant === 'primary',
            'bg-background-alt text-text-primary hover:bg-border':
              variant === 'secondary',
            'border border-border bg-transparent hover:bg-background-alt':
              variant === 'outline',
            'hover:bg-background-alt': variant === 'ghost',
            // Sizes - consistent across site
            'px-4 py-2.5 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }

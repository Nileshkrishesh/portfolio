import { cn } from '@/lib/utils'

interface TagProps {
  children: React.ReactNode
  variant?: 'default' | 'accent'
  className?: string
}

export function Tag({ children, variant = 'default', className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200',
        {
          'bg-background-alt text-text-secondary hover:bg-border':
            variant === 'default',
          'bg-accent-tint text-accent hover:bg-accent hover:text-white':
            variant === 'accent',
        },
        className
      )}
    >
      {children}
    </span>
  )
}

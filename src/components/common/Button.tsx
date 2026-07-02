import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type ButtonSize = 'sm' | 'md' | 'lg'
type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = {
  children?: ReactNode
  className?: string
  size?: ButtonSize
  variant?: ButtonVariant
} & ComponentPropsWithoutRef<'button'>

export function Button({
  children,
  className,
  size = 'md',
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  const classes = [
    'button',
    `button--${variant}`,
    size !== 'md' ? `button--${size}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  )
}

import type { ComponentPropsWithoutRef } from 'react'

type SectionHeaderProps = {
  align?: 'start' | 'center'
  className?: string
  description?: string
  eyebrow?: string
  title: string
} & ComponentPropsWithoutRef<'div'>

export function SectionHeader({
  align = 'start',
  className,
  description,
  eyebrow,
  title,
  ...props
}: SectionHeaderProps) {
  const classes = [
    'section-header',
    align === 'center' ? 'section-header--center' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      {eyebrow ? <p className="section-header__eyebrow">{eyebrow}</p> : null}
      <h2 className="section-header__title">{title}</h2>
      {description ? <p className="section-header__description">{description}</p> : null}
    </div>
  )
}

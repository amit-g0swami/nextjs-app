import React, { ReactNode } from 'react'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  className?: string
  style?: React.CSSProperties
  id?: string
  onClick?: () => void
}

export const Container = ({
  children,
  className,
  style,
  id,
  ...rest
}: ContainerProps) => {
  return React.createElement('div', { ...rest, style, id, className }, children)
}

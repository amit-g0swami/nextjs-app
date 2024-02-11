import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnText: string | React.ReactNode
  className?: string
  disable?: boolean
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  btnText,
  disable = false,
  className = 'rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
  onClick,
  ...rest
}) => {
  return React.createElement(
    'button',
    {
      className,
      onClick,
      disabled: disable,
      ...rest
    },
    btnText
  )
}

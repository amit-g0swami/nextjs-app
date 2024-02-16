import React, { useState } from 'react'

type TooltipProps = {
  text: string
  position?: 'top' | 'right' | 'bottom' | 'left'
  children: React.ReactNode
}

export const Tooltip = ({
  text,
  position = 'bottom',
  children
}: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false)

  const handleMouseEnter = () => {
    setShowTooltip(true)
  }

  const handleMouseLeave = () => {
    setShowTooltip(false)
  }

  const getTooltipStyle = () => {
    switch (position) {
      case 'top':
        return { bottom: '100%', left: '50%', transform: 'translateX(-50%)' }
      case 'right':
        return { top: '50%', left: '100%', transform: 'translateY(-50%)' }
      case 'bottom':
        return { top: '100%', left: '50%', transform: 'translateX(-50%)' }
      case 'left':
        return { top: '50%', right: '100%', transform: 'translateY(-50%)' }
      default:
        return {}
    }
  }

  return (
    <div className="relative inline-block">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      {showTooltip && (
        <div
          className="absolute bg-neutral-900 text-white p-2 rounded-md shadow-md z-50
          w-max h-8 flex items-center justify-center text-xs
          "
          style={getTooltipStyle()}
        >
          {text}
        </div>
      )}
    </div>
  )
}

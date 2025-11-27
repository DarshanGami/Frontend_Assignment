'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
    children: React.ReactNode
    onClick: () => void
    disabled?: boolean
    variant?: 'primary' | 'secondary'
    className?: string
}

/**
 * Reusable button component (used for Submit and Start Again buttons)
 */
export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    disabled = false,
    variant = 'primary',
    className = '',
}) => {
    const baseStyles = `
    py-3 px-8 rounded-quiz-option
    font-medium text-base
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-quiz-teal focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `

    const variantStyles = {
        primary: 'bg-quiz-nav hover:bg-quiz-nav-hover text-quiz-teal',
        secondary: 'bg-quiz-teal hover:bg-quiz-teal-light text-white',
    }

    return (
        <motion.button
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            whileHover={!disabled ? { scale: 1.05 } : {}}
            whileTap={!disabled ? { scale: 0.95 } : {}}
        >
            {children}
        </motion.button>
    )
}

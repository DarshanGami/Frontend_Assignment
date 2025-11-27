'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface NavigationButtonProps {
    direction: 'prev' | 'next'
    onClick: () => void
    disabled?: boolean
}

/**
 * Circular navigation button (previous/next arrows)
 * Light blue background with hover state
 */
export const NavigationButton: React.FC<NavigationButtonProps> = ({
    direction,
    onClick,
    disabled = false,
}) => {
    const isPrev = direction === 'prev'

    return (
        <motion.button
            onClick={onClick}
            disabled={disabled}
            className={`
        w-10 h-10 rounded-full
        bg-quiz-nav hover:bg-quiz-nav-hover
        flex items-center justify-center
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-quiz-teal focus:ring-offset-2
        disabled:opacity-40 disabled:cursor-not-allowed
      `}
            whileHover={!disabled ? { scale: 1.1 } : {}}
            whileTap={!disabled ? { scale: 0.9 } : {}}
            aria-label={isPrev ? 'Previous question' : 'Next question'}
        >
            {/* Arrow SVG */}
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={isPrev ? 'rotate-180' : ''}
            >
                <path
                    d="M6 12L10 8L6 4"
                    stroke="#2C5F6F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </motion.button>
    )
}

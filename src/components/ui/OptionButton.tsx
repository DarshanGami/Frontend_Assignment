'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface OptionButtonProps {
    text: string
    isSelected: boolean
    onClick: () => void
    index: number
}

/**
 * Multiple choice option button with hover and selected states
 * Accessible with keyboard navigation
 */
export const OptionButton: React.FC<OptionButtonProps> = ({
    text,
    isSelected,
    onClick,
    index,
}) => {
    return (
        <motion.button
            onClick={onClick}
            className={`
        w-full py-4 px-6 rounded-quiz-option
        text-center text-base font-medium
        transition-all duration-200
        border-2
        focus:outline-none focus:ring-2 focus:ring-quiz-teal focus:ring-offset-2
        ${isSelected
                    ? 'bg-quiz-blue-light border-quiz-teal text-quiz-teal'
                    : 'bg-white border-quiz-gray-light text-gray-800 hover:bg-quiz-blue-light hover:border-quiz-nav'
                }
      `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            aria-pressed={isSelected}
            role="radio"
            aria-checked={isSelected}
        >
            {text}
        </motion.button>
    )
}

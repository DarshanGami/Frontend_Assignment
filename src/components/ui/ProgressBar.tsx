'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ProgressBarProps {
    current: number
    total: number
}

/**
 * Segmented progress bar showing quiz completion
 * E.g., 1/4, 2/4, 3/4, 4/4
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
    return (
        <div className="flex items-center justify-center gap-2 mb-8">
            {Array.from({ length: total }, (_, index) => {
                const isActive = index < current

                return (
                    <motion.div
                        key={index}
                        className={`h-1.5 flex-1 max-w-[80px] rounded-full transition-colors duration-300 ${isActive ? 'bg-quiz-teal' : 'bg-quiz-gray-light'
                            }`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    />
                )
            })}
        </div>
    )
}

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

interface ResultCardProps {
    score: number
    onRestart: () => void
}

/**
 * Final results card displaying score percentage
 * Shows "Your Final score is X%" with "Start Again" button
 */
export const ResultCard: React.FC<ResultCardProps> = ({ score, onRestart }) => {
    return (
        <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* "Keep Learning!" message */}
            <p className="text-sm text-quiz-gray">Keep Learning!</p>

            {/* Score display */}
            <div className="space-y-2">
                <h2 className="text-3xl font-serif italic text-quiz-teal">
                    Your Final score is
                </h2>

                {/* Large percentage number */}
                <motion.div
                    className="text-8xl md:text-9xl font-serif font-bold text-quiz-teal"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 15,
                        delay: 0.2
                    }}
                >
                    {score}
                    <span className="text-5xl align-top">%</span>
                </motion.div>
            </div>

            {/* Start Again button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <Button onClick={onRestart} variant="primary">
                    Start Again
                </Button>
            </motion.div>
        </motion.div>
    )
}

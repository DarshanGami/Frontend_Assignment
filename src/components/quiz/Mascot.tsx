'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

/**
 * "Best of Luck!" mascot card with cat paw illustration
 * Appears on the first question only
 */
export const Mascot: React.FC = () => {
    return (
        <motion.div
            className="absolute left-8 bottom-8 bg-white rounded-2xl shadow-lg p-4 max-w-[140px]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
            {/* Speech bubble pointer */}
            <div className="absolute -top-2 left-6 w-4 h-4 bg-white rotate-45" />

            {/* "Best of Luck!" text */}
            <p className="text-sm font-medium text-quiz-teal mb-3 relative z-10">
                Best of Luck!
            </p>

            {/* Cat paw illustration */}
            <div className="relative w-full h-20 flex items-center justify-center">
                <Image
                    src="/assets/mascot.svg"
                    alt="Cat paw mascot"
                    width={80}
                    height={80}
                    className="object-contain"
                />
            </div>
        </motion.div>
    )
}

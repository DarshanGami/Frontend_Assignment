'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

interface ResultScreenProps {
    score: number;
    onStartAgain: () => void;
}

export default function ResultScreen({ score, onStartAgain }: ResultScreenProps) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        const controls = animate(count, score, {
            duration: 2,
            ease: 'easeOut',
        });

        return controls.stop;
    }, [count, score]);

    return (
        <main className="min-h-screen flex items-center justify-center p-4">
            <div className="relative w-full max-w-[980px]">
                {/* Outer Glass/Frame Container - More transparency, specific border */}
                <div className="bg-white/30 backdrop-blur-md border-4 border-white rounded-[48px] p-3 shadow-2xl relative">
                    {/* Inner White Card - Pure white, specific rounding */}
                    <motion.div
                        className="bg-white rounded-[36px] px-24 py-6 text-center w-full shadow-sm"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                    >
                        {/* Keep Learning Text */}
                        <motion.p
                            className="text-sm text-gray-600 mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Keep Learning
                        </motion.p>

                        {/* Title - Match Figma sizing */}
                        <motion.h1
                            className="font-serif italic text-4xl text-primary-dark mb-6 leading-tight"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Your Final score is
                        </motion.h1>

                        {/* Animated Score - Larger display */}
                        <div className="mb-8">
                            <motion.div
                                className="inline-flex items-baseline gap-2"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                            >
                                <motion.span className="text-8xl font-bold text-primary-blue leading-none">
                                    {rounded}
                                </motion.span>
                                <span className="text-4xl font-semibold text-primary-blue">%</span>
                            </motion.div>
                        </div>

                        {/* Start Again Button - Larger, more prominent */}
                        <motion.button
                            onClick={onStartAgain}
                            className="px-8 py-3 bg-primary-light hover:bg-primary-blue text-primary-dark font-semibold text-lg rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.2 }}
                            aria-label="Start quiz again"
                        >
                            Start Again
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}

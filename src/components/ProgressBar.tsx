'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
    current: number;
    total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
    return (
        <div className="flex items-center gap-2 my-3 px-10">
            {Array.from({ length: total }, (_, index) => (
                <div
                    key={index}
                    className="flex-1 h-1 bg-[#E8F1F5] rounded-full overflow-hidden"
                >
                    <motion.div
                        className="h-full bg-[#2B5F7E]"
                        initial={{ width: '0%' }}
                        animate={{
                            width: index < current ? '100%' : '0%'
                        }}
                        transition={{
                            duration: 0.6,
                            ease: [0.43, 0.13, 0.23, 0.96],
                            delay: index < current ? index * 0.1 : 0
                        }}
                    />
                </div>
            ))}
        </div>
    );
}

'use client';

import { motion } from 'framer-motion';

interface NavigationArrowsProps {
    onPrevious: () => void;
    onNext: () => void;
    canGoPrevious: boolean;
    canGoNext: boolean;
    isLastQuestion?: boolean;
}

export default function NavigationArrows({
    onPrevious,
    onNext,
    canGoPrevious,
    canGoNext,
    isLastQuestion,
}: NavigationArrowsProps) {
    return (
        <div className="flex justify-end gap-4 mt-10 items-center">
            {/* Previous Button - Rounded Square */}
            <motion.button
                onClick={onPrevious}
                disabled={!canGoPrevious}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${canGoPrevious
                    ? 'bg-primary-light hover:bg-primary-blue cursor-pointer shadow-sm hover:shadow-md'
                    : 'bg-bg-gray-2 cursor-not-allowed opacity-50'
                    }`}
                whileHover={canGoPrevious ? { scale: 1.1 } : {}}
                whileTap={canGoPrevious ? { scale: 0.95 } : {}}
                aria-label="Previous question"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={canGoPrevious ? 'text-primary-dark' : 'text-gray-400'}
                >
                    <path
                        d="M15 18L9 12L15 6"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </motion.button>

            {/* Next Button or Submit Button */}
            {isLastQuestion ? (
                <motion.button
                    onClick={onNext}
                    disabled={!canGoNext}
                    className={`px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${canGoNext
                        ? 'bg-primary-light hover:bg-primary-blue text-primary-dark cursor-pointer shadow-sm hover:shadow-md'
                        : 'bg-bg-gray-2 text-gray-400 cursor-not-allowed opacity-50'
                        }`}
                    whileHover={canGoNext ? { scale: 1.05 } : {}}
                    whileTap={canGoNext ? { scale: 0.95 } : {}}
                    aria-label="Submit quiz"
                >
                    Submit
                </motion.button>
            ) : (
                <motion.button
                    onClick={onNext}
                    disabled={!canGoNext}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${canGoNext
                        ? 'bg-primary-light hover:bg-primary-blue cursor-pointer shadow-sm hover:shadow-md'
                        : 'bg-bg-gray-2 cursor-not-allowed opacity-50'
                        }`}
                    whileHover={canGoNext ? { scale: 1.1 } : {}}
                    whileTap={canGoNext ? { scale: 0.95 } : {}}
                    aria-label="Next question"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={canGoNext ? 'text-primary-dark' : 'text-gray-400'}
                    >
                        <path
                            d="M9 18L15 12L9 6"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </motion.button>
            )}
        </div>
    );
}

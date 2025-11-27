import React from 'react'

interface QuizCardProps {
    children: React.ReactNode
    className?: string
}

/**
 * Main card container with white background, shadow, and golden top border
 * Matches the pixel-perfect design from screenshots
 */
export const QuizCard: React.FC<QuizCardProps> = ({ children, className = '' }) => {
    return (
        <div className={`quiz-card-container ${className}`}>
            {/* Golden top border accent */}
            <div className="h-1.5 w-full bg-quiz-accent rounded-t-quiz-card" />

            {/* Main card content */}
            <div className="glass-card rounded-b-quiz-card shadow-quiz-card p-12">
                {children}
            </div>
        </div>
    )
}

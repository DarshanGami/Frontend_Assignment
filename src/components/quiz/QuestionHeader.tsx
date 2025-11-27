import React from 'react'

/**
 * Quiz header with title and subtitle
 * "Test Your Knowledge" with "Answer all questions to see your results"
 */
export const QuestionHeader: React.FC = () => {
    return (
        <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif italic text-quiz-teal mb-2">
                Test Your Knowledge
            </h1>
            <p className="text-sm text-quiz-gray">
                Answer all questions to see your results
            </p>
        </div>
    )
}

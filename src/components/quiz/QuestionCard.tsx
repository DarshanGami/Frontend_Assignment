'use client'

import React from 'react'
import { OptionButton } from '@/components/ui/OptionButton'
import { NavigationButton } from '@/components/ui/NavigationButton'
import { Button } from '@/components/ui/Button'

interface QuestionCardProps {
    questionNumber: number
    questionText: string
    options: string[]
    selectedAnswer: number | null
    onSelectAnswer: (index: number) => void
    onPrevious: () => void
    onNext: () => void
    onSubmit: () => void
    isFirstQuestion: boolean
    isLastQuestion: boolean
    canNavigateBack: boolean
    canNavigateForward: boolean
}

/**
 * Individual question card with options and navigation
 */
export const QuestionCard: React.FC<QuestionCardProps> = ({
    questionNumber,
    questionText,
    options,
    selectedAnswer,
    onSelectAnswer,
    onPrevious,
    onNext,
    onSubmit,
    isFirstQuestion,
    isLastQuestion,
    canNavigateBack,
    canNavigateForward,
}) => {
    return (
        <div className="space-y-6">
            {/* Question header with number */}
            <div className="bg-quiz-blue-light rounded-quiz-option py-4 px-6">
                <h2 className="text-base font-medium text-gray-800">
                    {questionNumber}. {questionText}
                </h2>
            </div>

            {/* Options list */}
            <div className="space-y-3" role="radiogroup" aria-label={questionText}>
                {options.map((option, index) => (
                    <OptionButton
                        key={index}
                        text={option}
                        isSelected={selectedAnswer === index}
                        onClick={() => onSelectAnswer(index)}
                        index={index}
                    />
                ))}
            </div>

            {/* Navigation controls */}
            <div className="flex items-center justify-between pt-4">
                {/* Previous button - only show if not first question */}
                <div className="w-10">
                    {!isFirstQuestion && (
                        <NavigationButton
                            direction="prev"
                            onClick={onPrevious}
                            disabled={!canNavigateBack}
                        />
                    )}
                </div>

                {/* Next or Submit button */}
                <div>
                    {isLastQuestion ? (
                        <Button
                            onClick={onSubmit}
                            disabled={selectedAnswer === null}
                            variant="primary"
                        >
                            Submit
                        </Button>
                    ) : (
                        <NavigationButton
                            direction="next"
                            onClick={onNext}
                            disabled={!canNavigateForward}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

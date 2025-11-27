'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useQuiz } from '@/hooks/useQuiz'
import { QuizCard } from '@/components/ui/QuizCard'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { QuestionHeader } from '@/components/quiz/QuestionHeader'
import { QuestionCard } from '@/components/quiz/QuestionCard'
import { Mascot } from '@/components/quiz/Mascot'

/**
 * Main quiz page
 * Displays questions with navigation and progress tracking
 */
export default function Home() {
    const router = useRouter()
    const {
        state,
        questions,
        selectAnswer,
        nextQuestion,
        previousQuestion,
        submitQuiz,
        getProgress,
    } = useQuiz()

    const currentQuestion = questions[state.currentQuestion]
    const progress = getProgress()
    const isFirstQuestion = state.currentQuestion === 0
    const isLastQuestion = state.currentQuestion === questions.length - 1

    // Handle quiz submission
    const handleSubmit = () => {
        submitQuiz()
        // Navigate to results page with score in URL
        router.push('/results')
    }

    return (
        <main className="min-h-screen flex items-center justify-center p-4 relative">
            <div className="w-full max-w-3xl relative">
                {/* Quiz Card */}
                <QuizCard>
                    {/* Question Header */}
                    <QuestionHeader />

                    {/* Progress Bar */}
                    <ProgressBar current={progress.current} total={progress.total} />

                    {/* Question Content with animation */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={state.currentQuestion}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <QuestionCard
                                questionNumber={progress.current}
                                questionText={currentQuestion.text}
                                options={currentQuestion.options}
                                selectedAnswer={state.answers[state.currentQuestion]}
                                onSelectAnswer={selectAnswer}
                                onPrevious={previousQuestion}
                                onNext={nextQuestion}
                                onSubmit={handleSubmit}
                                isFirstQuestion={isFirstQuestion}
                                isLastQuestion={isLastQuestion}
                                canNavigateBack={state.currentQuestion > 0}
                                canNavigateForward={state.currentQuestion < questions.length - 1}
                            />
                        </motion.div>
                    </AnimatePresence>
                </QuizCard>

                {/* Show mascot only on first question */}
                {isFirstQuestion && <Mascot />}
            </div>
        </main>
    )
}

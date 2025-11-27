'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { QuizCard } from '@/components/ui/QuizCard'
import { ResultCard } from '@/components/quiz/ResultCard'
import { useQuiz } from '@/hooks/useQuiz'

/**
 * Results page displaying final quiz score
 */
export default function Results() {
    const router = useRouter()
    const { state, resetQuiz } = useQuiz()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        // Redirect to home if quiz is not complete
        if (!state.isComplete && state.score === 0) {
            // Allow showing 0% score if user hasn't started
            // but redirect if they're in the middle of the quiz
            const hasAnswers = state.answers.some(answer => answer !== null)
            if (hasAnswers && !state.isComplete) {
                router.push('/')
            }
        }
    }, [state.isComplete, state.score, state.answers, router])

    // Handle restart
    const handleRestart = () => {
        resetQuiz()
        router.push('/')
    }

    if (!mounted) {
        return null // Avoid hydration mismatch
    }

    return (
        <main className="min-h-screen flex items-center justify-center p-4">
            <motion.div
                className="w-full max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <QuizCard className="py-16">
                    <ResultCard score={state.score} onRestart={handleRestart} />
                </QuizCard>
            </motion.div>
        </main>
    )
}

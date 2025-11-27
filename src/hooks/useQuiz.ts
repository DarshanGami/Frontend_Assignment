'use client'

import { useState, useCallback } from 'react'
import { QuizState } from '@/lib/types'
import { quizQuestions, calculateScore } from '@/lib/quizData'

/**
 * Custom hook for managing quiz state and logic
 * Handles answer selection, navigation, score calculation, and quiz reset
 */
export const useQuiz = () => {
    const [state, setState] = useState<QuizState>({
        currentQuestion: 0,
        answers: Array(quizQuestions.length).fill(null),
        isComplete: false,
        score: 0,
    })

    /**
     * Select an answer for the current question
     */
    const selectAnswer = useCallback((answerIndex: number) => {
        setState(prev => {
            const newAnswers = [...prev.answers]
            newAnswers[prev.currentQuestion] = answerIndex
            return {
                ...prev,
                answers: newAnswers,
            }
        })
    }, [])

    /**
     * Navigate to the next question
     */
    const nextQuestion = useCallback(() => {
        setState(prev => ({
            ...prev,
            currentQuestion: Math.min(
                prev.currentQuestion + 1,
                quizQuestions.length - 1
            ),
        }))
    }, [])

    /**
     * Navigate to the previous question
     */
    const previousQuestion = useCallback(() => {
        setState(prev => ({
            ...prev,
            currentQuestion: Math.max(prev.currentQuestion - 1, 0),
        }))
    }, [])

    /**
     * Submit quiz and calculate final score
     */
    const submitQuiz = useCallback(() => {
        setState(prev => ({
            ...prev,
            isComplete: true,
            score: calculateScore(prev.answers),
        }))
    }, [])

    /**
     * Reset quiz to initial state
     */
    const resetQuiz = useCallback(() => {
        setState({
            currentQuestion: 0,
            answers: Array(quizQuestions.length).fill(null),
            isComplete: false,
            score: 0,
        })
    }, [])

    /**
     * Get current progress information
     */
    const getProgress = useCallback(() => {
        return {
            current: state.currentQuestion + 1,
            total: quizQuestions.length,
        }
    }, [state.currentQuestion])

    return {
        state,
        questions: quizQuestions,
        selectAnswer,
        nextQuestion,
        previousQuestion,
        submitQuiz,
        resetQuiz,
        getProgress,
    }
}

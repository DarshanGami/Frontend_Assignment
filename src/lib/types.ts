// TypeScript interfaces for the quiz application

export interface Question {
    id: number
    text: string
    options: string[]
    correctAnswer: number // Index of the correct option (0-2)
}

export interface QuizState {
    currentQuestion: number
    answers: (number | null)[] // User's selected answers (null if not answered)
    isComplete: boolean
    score: number
}

export interface QuizContextType {
    state: QuizState
    questions: Question[]
    selectAnswer: (answerIndex: number) => void
    nextQuestion: () => void
    previousQuestion: () => void
    submitQuiz: () => void
    resetQuiz: () => void
    getProgress: () => { current: number; total: number }
}

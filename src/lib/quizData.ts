import { Question } from './types'

/**
 * Quiz Questions Data
 * Matches the exact questions from the provided screenshots
 */
export const quizQuestions: Question[] = [
    {
        id: 1,
        text: 'What sound does a cat make?',
        options: ['Bhau-Bhau', 'Meow-Meow', 'Oink-Oink'],
        correctAnswer: 1, // Meow-Meow
    },
    {
        id: 2,
        text: 'What would you probably find in your fridge?',
        options: ['Shoes', 'Ice Cream', 'Books'],
        correctAnswer: 1, // Ice Cream
    },
    {
        id: 3,
        text: 'What color are bananas?',
        options: ['Blue', 'Yellow', 'Red'],
        correctAnswer: 1, // Yellow
    },
    {
        id: 4,
        text: 'How many stars are in the sky?',
        options: ['Two', 'Infinite', 'One Hundred'],
        correctAnswer: 1, // Infinite
    },
]

/**
 * Calculate quiz score
 * @param answers - Array of user's selected answer indices
 * @returns Score percentage (0-100)
 */
export const calculateScore = (answers: (number | null)[]): number => {
    const correctAnswers = answers.filter(
        (answer, index) => answer === quizQuestions[index].correctAnswer
    ).length

    return Math.round((correctAnswers / quizQuestions.length) * 100)
}

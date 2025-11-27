import { calculateScore } from '@/lib/quizData'

describe('Quiz Logic', () => {
    describe('calculateScore', () => {
        it('should return 100% for all correct answers', () => {
            const answers = [1, 1, 1, 1] // All correct (index 1 for each question)
            expect(calculateScore(answers)).toBe(100)
        })

        it('should return 0% for all incorrect answers', () => {
            const answers = [0, 0, 0, 0] // All incorrect
            expect(calculateScore(answers)).toBe(0)
        })

        it('should return 50% for half correct answers', () => {
            const answers = [1, 1, 0, 0] // 2 correct, 2 incorrect
            expect(calculateScore(answers)).toBe(50)
        })

        it('should return 25% for one correct answer', () => {
            const answers = [1, 0, 0, 0] // 1 correct, 3 incorrect
            expect(calculateScore(answers)).toBe(25)
        })

        it('should return 75% for three correct answers', () => {
            const answers = [1, 1, 1, 0] // 3 correct, 1 incorrect
            expect(calculateScore(answers)).toBe(75)
        })

        it('should handle null answers (unanswered) as incorrect', () => {
            const answers = [1, null, null, null] // 1 correct, 3 unanswered
            expect(calculateScore(answers)).toBe(25)
        })
    })
})

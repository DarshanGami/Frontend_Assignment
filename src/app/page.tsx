'use client';

import { useState } from 'react';
import { quizQuestions } from '@/data/quizData';
import QuestionCard from '@/components/QuestionCard';
import ResultScreen from '@/components/ResultScreen';

export default function Home() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
        new Array(quizQuestions.length).fill(null)
    );
    const [isQuizComplete, setIsQuizComplete] = useState(false);

    const handleSelectAnswer = (optionIndex: number) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[currentQuestion] = optionIndex;
        setSelectedAnswers(newAnswers);
    };

    const handleNext = () => {
        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setIsQuizComplete(true);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleStartAgain = () => {
        setCurrentQuestion(0);
        setSelectedAnswers(new Array(quizQuestions.length).fill(null));
        setIsQuizComplete(false);
    };

    const calculateScore = (): number => {
        let correct = 0;
        selectedAnswers.forEach((answer, index) => {
            if (answer === quizQuestions[index].correctAnswer) {
                correct++;
            }
        });
        return Math.round((correct / quizQuestions.length) * 100);
    };

    if (isQuizComplete) {
        return <ResultScreen score={calculateScore()} onStartAgain={handleStartAgain} />;
    }

    return (
        <main className="min-h-screen flex items-center justify-center p-8">
            <QuestionCard
                question={quizQuestions[currentQuestion]}
                currentQuestionNumber={currentQuestion + 1}
                totalQuestions={quizQuestions.length}
                selectedAnswer={selectedAnswers[currentQuestion]}
                onSelectAnswer={handleSelectAnswer}
                onNext={handleNext}
                onPrevious={handlePrevious}
                canGoNext={selectedAnswers[currentQuestion] !== null}
                canGoPrevious={currentQuestion > 0}
            />
        </main>
    );
}

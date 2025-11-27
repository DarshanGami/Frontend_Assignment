'use client';

import { QuizQuestion } from '@/data/quizData';
import ProgressBar from './ProgressBar';
import NavigationArrows from './NavigationArrows';
import { motion } from 'framer-motion';

interface QuestionCardProps {
    question: QuizQuestion;
    currentQuestionNumber: number;
    totalQuestions: number;
    selectedAnswer: number | null;
    onSelectAnswer: (optionIndex: number) => void;
    onNext: () => void;
    onPrevious: () => void;
    canGoNext: boolean;
    canGoPrevious: boolean;
}

export default function QuestionCard({
    question,
    currentQuestionNumber,
    totalQuestions,
    selectedAnswer,
    onSelectAnswer,
    onNext,
    onPrevious,
    canGoNext,
    canGoPrevious,
}: QuestionCardProps) {
    return (
        <div className="relative w-full max-w-[980px]">
            {/* Outer Glass/Frame Container - More transparency, specific border */}
            <div className="bg-white/20 backdrop-blur-md border-1 border-white rounded-[48px] p-6 shadow-2xl relative">
                {/* Inner White Card - Pure white, specific rounding */}
                <div className="bg-white rounded-[36px] px-44 py-6 relative overflow-hidden shadow-sm">
                    {/* Header - Based on Figma measurements */}
                    <div className="text-center mb-2">
                        {/* Title: ~919 × 102 px - Playfair Display Italic */}
                        <h1 className="font-serif italic font-bold text-[48px] leading-[1.2] mb-1 bg-gradient-to-r from-[rgba(21,49,61,1)] to-[rgba(60,171,218,1)] bg-clip-text text-transparent">
                            Test Your Knowledge
                        </h1>
                        {/* Subtitle: ~422 × 45 px */}
                        <p className="text-[#6B8E9B] text-sm font-medium tracking-wide">
                            Answer all questions to see your results
                        </p>
                    </div>

                    {/* Progress Bar */}
                    <ProgressBar
                        current={currentQuestionNumber}
                        total={totalQuestions}
                    />

                    {/* Question Section */}
                    <div className="mt-4">
                        {/* Question Box: ~896 × 78 px */}
                        <motion.div
                            className="bg-gradient-to-r from-[#C6E9F7] to-[#E5F8FF] rounded-2xl px-6 py-4 mb-8 text-center"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <p className="text-[#2B5F7E] text-lg font-medium leading-relaxed">
                                {currentQuestionNumber}. {question.question}
                            </p>
                        </motion.div>

                        {/* Options - Each ~896 × 68 px */}
                        <div className="space-y-2">
                            {question.options.map((option, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => onSelectAnswer(index)}
                                    className={`w-full text-center px-6 py-3 rounded-xl transition-all duration-300 border-2 text-lg font-medium ${selectedAnswer === index
                                        ? 'bg-[#F4FDFF] border-[#96E5FF] shadow-lg'
                                        : 'bg-white border-[#E6E6E6] hover:bg-gray-50 hover:border-[#96E5FF] hover:shadow-md'
                                        }`}
                                    whileHover={{ scale: selectedAnswer === index ? 1.01 : 1.005 }}
                                    whileTap={{ scale: 0.99 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.2,
                                        delay: index * 0.05
                                    }}
                                    aria-pressed={selectedAnswer === index}
                                    aria-label={`Option ${index + 1}: ${option}`}
                                >
                                    <span className="text-gray-800">{option}</span>
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows - Positioned based on Figma specs */}
                    <NavigationArrows
                        onPrevious={onPrevious}
                        onNext={onNext}
                        canGoPrevious={canGoPrevious}
                        canGoNext={canGoNext}
                        isLastQuestion={currentQuestionNumber === totalQuestions}
                    />
                </div>

                {/* Cat Paw "Best of Luck!" - Moved to Outer Container to avoid clipping */}
                {currentQuestionNumber === 1 && (
                    <motion.div
                        className="absolute -left-12 bottom-0 flex flex-col items-center z-50"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.4, type: "spring", stiffness: 200 }}
                    >
                        {/* Speech Bubble */}
                        <div className="relative bg-white rounded-2xl shadow-sm px-5 py-2 mb-9 border-[3px] border-[#96E5FF]">
                            <span className="font-handwriting text-xl text-gray-800 whitespace-nowrap transform -rotate-2 block">
                                Best of Luck!
                            </span>
                            {/* Tail */}
                            <div className="absolute -bottom-2.5 right-6 w-4 h-4 bg-white border-b-[3px] border-r-[3px] border-[#96E5FF] transform rotate-45"></div>
                        </div>

                        {/* Cat Paw Image */}
                        <div className="relative w-28 h-28 bottom-6 left-20">
                            <img
                                src="/cat-paw.gif"
                                alt="Cat Paw"
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

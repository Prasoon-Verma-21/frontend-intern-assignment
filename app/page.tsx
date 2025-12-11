"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

// Data: Quiz Questions
const questions = [
  {
    id: 1,
    question: "What sound does a cat make?",
    options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
    correctAnswer: "Meow-Meow",
  },
  {
    id: 2,
    question: "What would you probably find in your fridge?",
    options: ["Shoes", "Ice Cream", "Books"],
    correctAnswer: "Ice Cream",
  },
  {
    id: 3,
    question: "What color are bananas?",
    options: ["Blue", "Yellow", "Red"],
    correctAnswer: "Yellow",
  },
  {
    id: 4,
    question: "How many stars are in the sky?",
    options: ["Two", "Infinite", "One Hundred"],
    correctAnswer: "Infinite",
  },
];

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(new Array(questions.length).fill(null));
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelectOption = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = option;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        score++;
      }
    });
    return Math.round((score / questions.length) * 100);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers(new Array(questions.length).fill(null));
    setIsSubmitted(false);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const score = calculateScore();

  // --- RESULT SCREEN ---
  if (isSubmitted) {
    return (
      <main className="min-h-screen w-full bg-[#F0F9FF] flex items-center justify-center p-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <span className="bg-white px-8 py-3 rounded-full text-gray-800 font-medium shadow-sm border border-gray-100">
              {score === 100 ? "Well Done!!" : "Keep Learning!"}
            </span>
          </div>

          <h2 className="font-serif italic text-6xl text-[#1e4b6d] mb-4">
            Your Final score is
          </h2>
          
          <div className="font-serif text-[140px] leading-none text-[#2b5278] mb-12">
            {score}%
          </div>

          <button
            onClick={resetQuiz}
            className="bg-[#D6EAF8] hover:bg-[#c3e0f3] text-[#1e3a5f] font-semibold py-3 px-16 rounded-xl transition-colors duration-200"
          >
            Start Again
          </button>
        </div>
      </main>
    );
  }

  // --- QUIZ SCREEN ---
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#A5D5F5] via-[#CDE8F6] to-[#E8F4FC] flex items-center justify-center p-6 md:p-12">
      
      {/* WHITE CARD CONTAINER 
          UPDATED: 
          - Changed 'bg-white' to 'bg-white/90' (90% opacity).
          - Added 'backdrop-blur-sm' for that glassy Figma look.
          - Added 'border border-white/50' for a subtle edge definition.
      */}
      <div className="bg-white/90 backdrop-blur-sm border border-white/50 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 md:p-16 w-full max-w-[1400px] min-h-[600px] flex flex-col relative mx-auto">
        
        {/* Cat Decoration (Bottom Left) 
            Positioned at 'left-0' to keep it away from the text options.
        */}
        {currentQuestion.id === 1 && (
             <div className="absolute -bottom-4 left-0 pl-8 hidden xl:block z-20">
                 <div className="bg-white px-4 py-2 rounded-xl mb-2 shadow-sm -rotate-12 border border-gray-100 transform translate-x-12">
                    <span className="font-handwriting text-[#1e3a5f] font-bold font-serif">Best of Luck!</span>
                 </div>
                 
                 <img 
                    src="/paw.png" 
                    alt="Good Luck Paw" 
                    className="w-40 animate-float origin-bottom ml-8" 
                 />
             </div>
        )}

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="font-serif italic text-6xl text-[#185576] mb-4 tracking-tight">
            Test Your Knowledge
          </h1>
          <div className="flex justify-center">
             <span className="text-gray-500 bg-white border border-gray-100 px-6 py-2 rounded-full text-sm font-medium shadow-sm">
                Answer all questions to see your results
            </span>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="flex gap-4 mb-12 max-w-2xl mx-auto w-full">
            {questions.map((_, idx) => (
                <div 
                    key={idx} 
                    className={twMerge(
                        "h-2 w-full rounded-full transition-all duration-300",
                        idx <= currentQuestionIndex ? "bg-[#1e3a5f]" : "bg-gray-200"
                    )}
                />
            ))}
        </div>

        {/* QUESTION AREA */}
        <div className="flex-1 max-w-3xl mx-auto w-full flex flex-col gap-6">
            <div className="bg-[#D8EFF9] py-6 px-8 rounded-2xl text-center mb-4 shadow-sm border border-[#ccebf8]">
                <h2 className="text-[#1e3a5f] text-xl font-bold">
                    {currentQuestion.id}. {currentQuestion.question}
                </h2>
            </div>

            <div className="flex flex-col gap-4">
                {currentQuestion.options.map((option) => (
                    <button
                        key={option}
                        onClick={() => handleSelectOption(option)}
                        className={twMerge(
                            "w-full py-5 px-6 rounded-2xl border transition-all duration-200 text-center font-bold text-[#1e3a5f] shadow-sm",
                            answers[currentQuestionIndex] === option
                                ? "bg-[#D8EFF9] border-[#b0dcf5] shadow-inner"
                                : "bg-[#F8FBFE] border-transparent hover:bg-white hover:shadow-md"
                        )}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>

        {/* NAVIGATION ARROWS */}
        <div className="flex justify-end gap-3 mt-12">
             <button
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
                className={twMerge(
                    "w-12 h-12 flex items-center justify-center rounded-xl bg-[#E0F7FA] text-[#1e3a5f] transition-opacity",
                    currentQuestionIndex === 0 ? "opacity-0 pointer-events-none" : "hover:bg-[#d1f0f5]"
                )}
            >
                <ArrowLeft size={24} />
            </button>

            {currentQuestionIndex === questions.length - 1 ? (
                <button
                    onClick={handleSubmit}
                    className="px-8 py-3 bg-[#D8EFF9] hover:bg-[#c6e6f5] text-[#1e3a5f] font-bold rounded-xl transition-colors"
                >
                    Submit
                </button>
            ) : (
                <button
                    onClick={handleNext}
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#E0F7FA] hover:bg-[#d1f0f5] text-[#1e3a5f] transition-colors"
                >
                    <ArrowRight size={24} />
                </button>
            )}
        </div>

      </div>
    </main>
  );
}
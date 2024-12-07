"use client";

import Loader from "@/app/components/Loader/Loader";
import { useState } from "react";

import { UserContextProvider } from "../contexts/user-context";

import RegisterForm from "./components/register-form";
import Quiz from "./components/quiz";

import "./quiz-page.css";

export default function QuizPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(true);
  const [startQuiz, setStartQuiz] = useState(false);

  function handleGetQuestions() {
    setIsLoading(true);
    setShowRegisterForm(false);
    setInterval(() => {
      setIsLoading(false);
      setStartQuiz(true);
    }, 4000);

    clearInterval();
  }

  return (
    <UserContextProvider>
      <div className="quiz-page">
        {isLoading && <Loader />}
        {showRegisterForm && <RegisterForm onSubmitFunc={handleGetQuestions} />}
        {startQuiz && <Quiz />}
      </div>
    </UserContextProvider>
  );
}

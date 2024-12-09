// src/app/quiz-page/page.js

"use client";

import Loader from "@/app/components/Loader/Loader";
import { useState } from "react";

import { UserContextProvider, useUser } from "../contexts/user-context";
import RegisterForm from "./components/register-form";
import CategorySelection from "./components/category-selection";
import Quiz from "./components/quiz";

import "./quiz-page.css";

export default function QuizPage() {
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(true);
  const [showCategorySelection, setShowCategorySelection] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);
  const [category, setCategory] = useState(null);

  function handleGetQuestions() {
    setShowRegisterForm(false);
    setShowCategorySelection(true);
  }

  function handleCategorySelect(selectedCategory) {
    setCategory(selectedCategory);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStartQuiz(true);
    }, 4000);
  }

  return (
    <div className="quiz-page">
      {user && <label className="user-profile">Welcome {user.name}!</label>}
      {isLoading && <Loader />}
      {showRegisterForm && <RegisterForm onSubmitFunc={handleGetQuestions} />}
      {showCategorySelection && !startQuiz && !isLoading && (
        <CategorySelection onSelectCategory={handleCategorySelect} />
      )}
      {startQuiz && category && <Quiz category={category} />}
    </div>
  );
}

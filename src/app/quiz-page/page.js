"use client";

import Loader from "@/components/Loader/Loader";
import { useEffect, useState } from "react";

import "./quiz-page.css";

export default function QuizPage() {
  const [isLoading, setIsLoading] = useState(false);

  function handleGetQuestions() {
    setIsLoading(true);
    setInterval(() => {
      setIsLoading(false);
    }, 4000);

    clearInterval();
  }

  return (
    <div className="quiz-page">
      {isLoading && <Loader />}
      <button className="btn" onClick={handleGetQuestions}>
        Ready
      </button>
    </div>
  );
}

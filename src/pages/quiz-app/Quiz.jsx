import { useState } from "react";
import questions from "../../data/questions.json";
import Question from "./components/Question";
import Result from "./components/Result";
export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  // all logic
  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  const correctAnswer = questions?.map((question) =>
  question?.answerOptions?.find((option) => option?.isCorrect)
)
// console.log(correctAnswer, "correctAnswer");

  return (
    <div className="App">
      <h1>questions</h1>
      {/* question component */}
      {currentQuestion < questions?.length && (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}
      {/* answers component */}
      {currentQuestion === questions?.length && (
        <Result
          userAnswers={userAnswers}
          questions={questions}
          resetQuiz={resetQuiz}
          correctAnswer={correctAnswer}
        />
      )}
    </div>
  );
}

import Button from "./Button";

export default function Result({
  userAnswers,
  questions,
  resetQuiz = () => {},
  correctAnswer,
}) {
  const correctAnswers = userAnswers?.filter((answer) => answer).length;
  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        You answered {correctAnswers} out of {questions?.length} questions
      </p>
      <Button onClick={resetQuiz}>Reset Quiz</Button>
      <ul>
        {questions?.map((question, index) => {
          return (
            <li key={index} data-correct={userAnswers[index]}>
              (Q.{index + 1}) {question?.question} {userAnswers[index] === true && "✅"} -
              <p>Correct Answer is : {correctAnswer[index]?.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

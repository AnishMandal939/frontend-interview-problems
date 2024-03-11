import Button from "./Button";

export default function Question({ question, onAnswerClick }) {
    // to generate random options
    const shuffleArray = (array) =>
    [...array].sort(() => Math.random() - 0.5);
    
  return (
    <div className="questions">
      <h2>{question?.question}</h2>
      <ul className="options">
        {shuffleArray(question?.answerOptions)?.map((option) => {
          return (
            <li key={option?.text}>
              <Button className="button-styles" onClick={() =>onAnswerClick(option?.isCorrect)}>
                {option?.text}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
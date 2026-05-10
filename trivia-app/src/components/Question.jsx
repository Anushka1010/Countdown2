import { useState } from "react";
import Button from "@mui/material/Button";

function buildAnswerChoices(questionData) {
    return [
      {
        text: questionData.correctAnswer,
        isCorrect: true,
      },
      ...questionData.incorrectAnswers.map((ans) => ({
        text: ans,
        isCorrect: false,
      })),
    ].sort(() => Math.random() - 0.5);
  }

const Question = ({ questionData }) => {
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [answerChoices] = useState(() => buildAnswerChoices(questionData));

  return (
    <div>
      <h4>{questionData.question.text}</h4>

      {answerChoices.map((answer, index) => (
        <Button variant="contained"
          key={index}
          onClick={() => setSelectedAnswer(answer)}
          color={
            selectedAnswer?.text === answer.text
              ? (answer.isCorrect ? "success" : "error")
              : "primary"
          }

        >
          {answer.text}
        </Button>
      ))}
    </div>
  );
};

export default Question;
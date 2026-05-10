import { useState } from "react";
import { Button, Card, CardContent, Typography, Stack } from "@mui/material";

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
    <Card sx={{ mb: 3, textAlign: 'left', boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {questionData.question.text}
        </Typography>

        <Stack spacing={1}> 
          {answerChoices.map((answer, index) => (
            <Button
              fullWidth 
              variant="contained"
              key={index}
              onClick={() => setSelectedAnswer(answer)}
              color={
                selectedAnswer?.text === answer.text
                  ? (answer.isCorrect ? "success" : "error")
                  : "primary"
              }
              sx={{ py: 1.5, textTransform: 'none' }} 
            >
              {answer.text}
            </Button>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Question;
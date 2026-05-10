import { useState, useEffect } from "react";
import Question from "./Question";
import { Container, Box, Button, Typography } from "@mui/material";

const TriviaApp = () => {
  const [questions, setQuestions] = useState([]);

  async function fetchQuestions() {
    const response = await fetch("https://the-trivia-api.com/v2/questions");
    const data = await response.json();
    setQuestions(data);
    console.log(data);
  }

  useEffect(() => {
		fetchQuestions();
	}, []);

  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h1">Trivia App</Typography>

        <Button variant="outlined" onClick={fetchQuestions} sx={{ my: 4, display: 'inline-block', mx: 'auto' }}>
          Generate New Questions
        </Button>

        {questions.map((question) => (
          <Question key={question.id} questionData={question}/>
        ))}
        
      </Box>
    </Container>
  );
};

export default TriviaApp;
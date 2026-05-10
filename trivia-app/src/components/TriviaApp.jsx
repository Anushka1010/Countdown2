import { useState, useEffect } from "react";
import Question from "./Question";
import Button from "@mui/material/Button";

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
    <>
      <div style={{ padding: "20px" }}>
        <h1>Trivia App</h1>

        <Button variant="outlined" onClick={fetchQuestions} style={{ marginBottom: "20px" }}>
          Generate New Questions
        </Button>

        {questions.map((question, index) => (
          <Question key={question.id} questionData={question}/>
        ))}
      </div>
    </>
  );
};

export default TriviaApp;
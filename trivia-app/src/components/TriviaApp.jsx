import { useState, useEffect } from "react";
import Question from "./Question";

const TriviaApp = () => {
  const [questions, setQuestions] = useState([]);

  //useEffect(() => {    --> remember useEffect runs after the first render and only re-runs if dependencies change.
  // async work happens here
  //}, []);
  //async/await handles waiting for data, but useEffect controls when that data-fetching happens in the React lifecycle.

  useEffect(() => {
    async function fetchQuestions() {
      const response = await fetch("https://the-trivia-api.com/v2/questions"); // - wait until the server responds - > fetch returns a promise
      const data = await response.json(); // - wait until the response is fully converted into data
      setQuestions(data);
      console.log(data);
    }

    fetchQuestions();
  }, []);

  return (
    <>
      Trivia App
      {questions.map((question, index) => (
        <Question key={index} questionData={question}/>
      ))}
    </>
  );
};

export default TriviaApp;
import { useState } from "react";
import "./App.css";
import Questions from "./components/Questions";
import Question from "./components/Question";
import Data from "./Data";

function App() {
  const [questions, setQuestions] = useState(Data);

  return (
    <main>
      <div className="container">
        <div className="title"><h1>Questions And Answers About Jobs</h1></div>
        <div className="questions-container">
          <Questions questions={questions} />
        </div>
      </div>
    </main>
  );
}

export default App;

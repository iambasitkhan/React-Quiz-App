import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

const reducer = function (state, action) {
  switch (action.type) {
    case "dataRecieved":
      return { ...state, questions: action.paylaod, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      return "unknown Action";
  }
};

const initialState = {
  questions: [],
  status: "loading",
};

export default function App() {
  const [{ questions }, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function fetchQuestions() {
      try {
        const resp = await fetch(`http://localhost:8000/questions`);
        const data = await resp.json();
        dispatch({ type: "dataRecieved", paylaod: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    }

    fetchQuestions();
  }, []);

  console.log(questions);
  return (
    <div className="app">
      <Header />
      <MainContainer></MainContainer>
    </div>
  );
}

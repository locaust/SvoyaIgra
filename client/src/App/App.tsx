import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as api from "./api";

import "./App.css";
import NavBar from "../features/navbar/NavBar";
import QuestionsPage from "../features/questions/QuestionsPage";
import { useAppDispatch } from "../redux/store";
import Error from "../features/404/404";

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const loadQuestions = async (): Promise<void> => {
    const data = await api.fetchQuestion();
    console.log(data);
    dispatch({ type: "questions/load", payload: data });
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route path='/question' element={<QuestionsPage />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

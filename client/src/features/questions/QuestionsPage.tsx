import React, { useState } from "react";
import "./styles/style.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import QuestionItem from "./QuestionItem";

function QuestionsPage(): JSX.Element {
  const { themes } = useSelector((store: RootState) => store.themes);
  const [score, setScore] =useState(0)

  return (
    <> <div>
      <h1>Своя игра</h1>
      <h1> Твои очки : {score}</h1>
      </div>
      <div className='cards__container'>
        {themes.map((theme) => (
          <div className="cards__cards">
            {theme.title}
            {theme.Questions.map((question) => (
              <QuestionItem key={question.id} question={question} setScore={setScore} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default QuestionsPage;

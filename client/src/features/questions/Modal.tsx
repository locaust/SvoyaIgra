import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Question, QuestionId } from "./types/types";

export default function Modal({
  active,
  setActive,
  question,
}: {
  active: boolean;
  setActive: (status: boolean) => void;
  question: Question;
}): JSX.Element {
  const [answer, setAnswer] = useState("");
  console.log(answer);

  // const handleAnswer: React.FormEventHandler<HTMLFormElement> = async (e) => {
  //   e.preventDefault();
  //   const answerDiv = document.querySelector(".answer");
  //   if (answer.toLocaleLowerCase() === question.answer.toLocaleLowerCase()) {
  //     answerDiv?.innerHTML = "ok";
  //   } else {
  //     answerDiv?.innerHTML = "Neok";
  //   }
  // };
  console.log(answer);

  return (
    <div className='cards__modal'>
      <div className='cards__modal__cross' onClick={() => setActive(false)}>
        X
      </div>
      <h4>{question.question}</h4>
      <img className='cards__modal__img' src={question.img} alt='question' />
      <form>
        <input
          className='cards__modal__input'
          type='text'
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button type='submit'>Проверить ответ</button>
      </form>

      {answer.toLocaleLowerCase() === question.answer.toLocaleLowerCase() ? (
        <div className='answer'> верно</div>
      ) : answer === "" ? (
        <div />
      ) : (
        <div className='answer'> Неверно</div>
      )}
    </div>
  );
}

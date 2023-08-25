import React, { useEffect, useState } from "react";
import "./styles/style.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Question, QuestionId } from "./types/types";

export default function Modal({
  active,
  setActive,
  question,
  setScore,
}: {
  active: boolean;
  setActive: (status: boolean) => void;
  question: Question;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  const [answer, setAnswer] = useState("");
  const [curAnswer, setCurAnswer] = useState("");

  const handleAnswer: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (answer.toLocaleLowerCase() === question.answer.toLocaleLowerCase()) {
      setCurAnswer("Правильно");
      setScore((prev) => Number(prev + +question.price));
    } else {
      setCurAnswer(`Неправильно. Правильный ответ: ${question.answer} `);
      setScore((prev) => Number(prev - question.price));
    }
    setAnswer("");
  };
  console.log(answer);

  return (
    <div className='cards__modal'>
      <div className='cards__modal__cross' onClick={() => setActive(false)}>
        X
      </div>
      <h4>{question.question}</h4>
      <img className='cards__modal__img' src={question.img} alt='question' />
      <form onSubmit={handleAnswer}>
        <input
          className='cards__modal__input'
          type='text'
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button className='glow-on-hover' type='submit'>
          Проверить ответ
        </button>
      </form>

      <p>{curAnswer}</p>
    </div>
  );
}

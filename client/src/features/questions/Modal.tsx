import React from "react";

import { RootState } from "../../redux/store";
import { Question, QuestionId } from "./types/types";
import { useSelector } from "react-redux";

export default function Modal({
  active,
  setActive,
  question,
}: {
  active: boolean;
  setActive: (status: boolean) => void;
  question: Question;
}): JSX.Element {
  return (
    <div className='cards__modal'>
      <div className='cards__modal__cross' onClick={() => setActive(false)}>
        X
      </div>
      <h4>{question.question}</h4>
      <img className='cards__modal__img' src={question.img} alt='question' />
      <input className='cards__modal__input' type='text' />
      <button type='submit'>Проверить ответ</button>
    </div>
  );
}

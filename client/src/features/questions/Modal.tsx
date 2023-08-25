import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Question, QuestionId } from './types/types';

export default function Modal({id, onClick}:{id:QuestionId, onClick:React.Dispatch<React.SetStateAction<number>> }):JSX.Element {
  const questions = useSelector((store: RootState) => store.questions.question);
   const {question, img} = questions.find((el) => el.id === id) as Question;

  return (
  <div className="cards__modal">
    <div className="cards__modal__cross" onClick={() => onClick(0)}>X</div>
    <h4>{question}</h4>
    <img className="cards__modal__img" src={img} alt="question" />
    <input className="cards__modal__input" type="text" />
    <button type="submit">Проверить ответ</button>

  </div>
  );
}

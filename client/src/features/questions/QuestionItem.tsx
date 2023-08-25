import React, { useState } from 'react';
import { Question } from './types/types';

export default function QuestionItem({ question, onClick }: { question: Question, onClick:React.Dispatch<React.SetStateAction<number>> }):JSX.Element {
  return (
    <div className="cards__card" onClick={() => onClick(question.id)}>
      {question.price}
       {/* <img src={question.img} alt="question" />
    <h5>{question.question}</h5> */}
    </div>
  );
}

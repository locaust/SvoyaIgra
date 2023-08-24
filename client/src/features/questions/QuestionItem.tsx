import React from 'react';
import { Question } from './types/types';

export default function QuestionItem({ question }: { question: Question }):JSX.Element {
  return (
    <div >
       <img src={question.img} alt="question" />
    <h5>{question.question}</h5>
  
  </div>
  );
}

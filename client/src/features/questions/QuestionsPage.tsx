import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import QuestionItem from './QuestionItem';

function QuestionsPage():JSX.Element {

  const questions = useSelector((store: RootState) => store.questions.question);

  return (
  <>
    <h1>Своя игра</h1>
    <div>
        {questions.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))}
      </div>
  </>
  );
}

export default QuestionsPage;

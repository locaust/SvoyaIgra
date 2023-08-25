import React, { useState } from 'react';
import './styles/style.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import QuestionItem from './QuestionItem';
import Modal from './Modal';

function QuestionsPage():JSX.Element {
  const questions = useSelector((store: RootState) => store.questions.question);
  const [currentModalId, setCurrentModalId] = useState(0);

  return (
  <>
    <h1>Своя игра</h1>
    {Boolean(currentModalId) && <Modal onClick={setCurrentModalId} id={currentModalId} />}
    <div className="cards__container">
        {/* {questions.map((question) => (
          <QuestionItem key={question.id} question={question} onClick={setCurrentModalId} />
        ))} */}
    </div>
  </>
  );
}

export default QuestionsPage;

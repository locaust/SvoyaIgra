import React, { useState } from "react";
import { Question } from "./types/types";
import Modal from "./Modal";

export default function QuestionItem({
  question,
}: {
  question: Question;
}): JSX.Element {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div className='cards__card' onClick={() => setModalActive(true)}>
        {question.price}
        {/* <img src={question.img} alt="question" />
    <h5>{question.question}</h5> */}
      </div>

      {modalActive && (
        <Modal
          active={modalActive}
          setActive={setModalActive}
          question={question}
        />
      )}
    </>
  );
}

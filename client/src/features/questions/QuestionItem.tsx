import React, { useState } from "react";
import { Question } from "./types/types";
import Modal from "./Modal";

export default function QuestionItem({
  question,
}: {
  question: Question;
}): JSX.Element {
  const [modalActive, setModalActive] = useState(false);
  const [dis, setDis] = useState(false);

  const handleDis: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setDis(true);
  };

  return (
    <>
      {dis ? (
        <button
          disabled
          className='cards__card'
          onClick={() => {
            setModalActive(true), setDis(true);
          }}
        >
          {question.price}
        </button>
      ) : (
        <button
          className='cards__card'
          onClick={() => {
            setModalActive(true), setDis(true);
          }}
        >
          {question.price}
        </button>
      )}

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

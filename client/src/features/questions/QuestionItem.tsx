import React, { useState } from "react";
import { Question } from "./types/types";
import Modal from "./Modal";

export default function QuestionItem({
  question,
  setScore,
}: {
  question: Question;
  setScore: React.Dispatch<React.SetStateAction<number>>,
}): JSX.Element {
  const [modalActive, setModalActive] = useState(false);
  const [dis, setDis] = useState(false);

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
          {" "}
          <img className="close"
            src='https://thumbs.dreamstime.com/b/%D0%B7%D0%B0%D0%BA%D1%80%D1%8B%D1%82%D1%8B%D0%B9-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-%D0%B7%D0%BD%D0%B0%D0%BA-136486447.jpg'
            alt=''
          ></img>
          {/* {question.price} */}
        </button>
      ) : (
        <button
          className='cards__card'
          onClick={() => {
            setModalActive(true), setDis(true)
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
          setScore={setScore}
        />
      )}
    </>
  );
}

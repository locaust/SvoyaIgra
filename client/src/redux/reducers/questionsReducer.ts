import { Action } from "../../features/questions/types/Action";
import { State } from "../../features/questions/types/State";

const initialState: State = {
  question: [],
};

const questionsReducer =(state=initialState, action: Action): State => {
  switch (action.type) {
    case "questions/load":
      return{
        ...state,
        question: action.payload,
      }
  
    default:
      return state;
  }
}

export default questionsReducer;
import { Action } from '../../features/questions/types/Action';
import { State } from '../../features/questions/types/State';

const initialState: State = {
  themes: [],
};

const themesReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'questions/load':
      return {
        ...state,
        themes: action.payload,
      };

    default:
      return state;
  }
};

export default themesReducer;

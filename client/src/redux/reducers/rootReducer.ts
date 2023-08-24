/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  questions: questionsReducer,

});

export default rootReducer;

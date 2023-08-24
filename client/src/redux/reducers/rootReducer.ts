/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer'

const rootReducer = combineReducers({
  questions: questionsReducer,

});



export default rootReducer;

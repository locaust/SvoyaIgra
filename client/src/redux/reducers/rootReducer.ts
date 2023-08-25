/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer'

const rootReducer = combineReducers({
  themes: questionsReducer,

});



export default rootReducer;

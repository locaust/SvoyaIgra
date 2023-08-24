import React, {useEffect} from 'react';
import * as api from './api';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import NavBar from '../features/navbar/NavBar';
import QuestionsPage from '../features/questions/QuestionsPage';
import { useAppDispatch } from '../redux/store';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

const loadQuestions = async (): Promise<void> => {
    const data = await api.fetchQuestion();
    console.log(data);
    
    dispatch({ type: 'questions/load', payload: data });
  };

  useEffect(() => {
    loadQuestions();
    
  }, []);

  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBar/>}>
      <Route path='/question' element={<QuestionsPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from '../features/navbar/NavBar';

function App(): JSX.Element {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBar/>}>

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

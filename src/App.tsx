import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Home' element={<Home/>} />
      </Routes>
      <h1>Hello</h1>
</BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import About from './pages/About';
import Departments from './pages/Departments';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Departments' element={<Departments/>} />
      <Route path='/Register' element={<Register/>} />

      
      </Routes>
</BrowserRouter>
  );
}

export default App;

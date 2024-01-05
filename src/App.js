import React from 'react';
import './App.css';
import  Login  from "./components/Login";
import { BrowserRouter as Router, Route,Routes, BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Login/>
    </BrowserRouter>
  );
}

export default App;

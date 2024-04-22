// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import DashboardPage from './pages/DashboardPage';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <div  sx={{margin:'auto',padding: 0}} >
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/dashboard" element={<DashboardPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

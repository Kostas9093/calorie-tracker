import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import DayDetail from './DayDetail';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Router basename="/calorie-tracker"/>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/day/:dayName" element={<DayDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

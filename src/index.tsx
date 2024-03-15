import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Components from './Components/index.tsx';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
    <Router>
      <Routes>
        <Route path="/components" element={<Components />} />
      </Routes>
    </Router>
);



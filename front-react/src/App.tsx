// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Header} from './components/Header';
import {EventoPage} from './pages/EventoPage';

function App() {
  return (
    <Router>
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/eventos" element={<EventoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Header} from './components/Header';
import {EventPage} from './pages/EventPage';
import {CreateEventPage} from './pages/CreateEventPage';

function App() {
  return (
    <Router>
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/eventos" element={<EventPage />} />
          <Route path='/cadastrarEvento' element={<CreateEventPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNavigation from './components/BottomNavigation';
import Home from './pages/Home';
import Library from './pages/Library';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="app-container">
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/library" element={<Library />} />
            </Routes>
          </main>
          <BottomNavigation />
        </div>
      </div>
    </Router>
  );
}

export default App;
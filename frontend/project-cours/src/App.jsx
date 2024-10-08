import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EntityHandler from './components/EntityHandler';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ajouter" element={<EntityHandler />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
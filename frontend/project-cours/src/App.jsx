import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EntityHandler from './components/EntityHandler';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CourseListPage from './pages/CourseListPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ToastContainer />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Dynamic route for adding entities */}
            <Route path="/ajouter/:entity" element={<EntityHandler />} />
            <Route path="/cours" element={<CourseListPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
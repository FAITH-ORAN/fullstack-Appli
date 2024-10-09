import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CourseListPage from './pages/CourseListPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [entityType, setEntityType] = useState('course');

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header entityType={entityType} setEntityType={setEntityType} />
        <ToastContainer />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cours" element={<CourseListPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EntityHandler from './components/EntityHandler';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import StudentPage from "./pages/StudentPage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ToastContainer />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/students" element={<StudentPage />} />
            {/* Dynamic route for adding entities */}
            <Route path="/ajouter/:entity" element={<EntityHandler />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
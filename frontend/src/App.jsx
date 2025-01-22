import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import AIMate from './pages/AI-Mate'; // Renamed to match AI-Mate as a chatbot
import Tours from './pages/Tours';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import SignIn from './pages/Auth/SignIn'; // Adjusted path for SignIn
import SignUp from './pages/Auth/SignUp'; // Adjusted path for SignUp
import TourDetails from './pages/TourDetails';


export default function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/ai-mate" element={<AIMate />} /> {/* Updated path for AI-Mate */}
          <Route path="/tours" element={<Tours />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tour/:id" element={<TourDetails />} />

          {/* Authentication Pages */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Catch-All Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

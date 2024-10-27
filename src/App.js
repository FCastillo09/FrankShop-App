// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import AuthTabs from './components/auth';
import Navbar from './components/navbar';
import Shop from './components/shop';
import ProtectedRoute from './components/protectedRoute';


function App() {
  const token = localStorage.getItem('sessionToken');
  const isAuthenticated = !!token;

  return (
    <Router>
      <Navbar />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthTabs />} />
          <Route path="/shop" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Shop />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

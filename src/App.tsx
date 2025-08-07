import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import MangalDosh from './pages/MangalDosh';
import ShaniSadeSathi from './pages/ShaniSadeSathi';
import IshtDevta from './pages/IshtDevta';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/mangal-dosh" element={
                <ProtectedRoute>
                  <MangalDosh />
                </ProtectedRoute>
              } />
              <Route path="/shani-sade-sathi" element={
                <ProtectedRoute>
                  <ShaniSadeSathi />
                </ProtectedRoute>
              } />
              <Route path="/isht-devta" element={
                <ProtectedRoute>
                  <IshtDevta />
                </ProtectedRoute>
              } />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
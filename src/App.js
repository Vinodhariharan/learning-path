import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InstructorPage from './pages/InstructorPage';
import LearnerPage from './pages/LearnerPage';
import Login from './components/Login';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function App() {
  const { role } = useAuth();

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route
            path="/instructor"
            element={
              <ProtectedRoute allowedRoles={['instructor']}>
                <InstructorPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/learner"
            element={
              <ProtectedRoute allowedRoles={['learner']}>
                <LearnerPage />
              </ProtectedRoute>
            }
          />
          
          {/* Redirect based on role */}
          <Route path="*" element={<Navigate to={role === 'instructor' ? '/instructor' : role === 'learner' ? '/learner' : '/'} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

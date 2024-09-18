import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, role, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // or any loading spinner
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    // Redirect to the home page or an unauthorized page if the role is not allowed
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;

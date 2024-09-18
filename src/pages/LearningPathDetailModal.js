import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { addProgress } from '../services/firestore'; // Import the function to add progress
import { useAuth } from '../contexts/AuthContext'; // Import AuthContext to get the current user

const LearningPathDetailModal = ({ open, onClose, learningPath }) => {
  const { user } = useAuth(); // Get the current user from AuthContext

  const handleEnroll = async () => {
    if (!user || !learningPath) return; // Ensure there's a user and learning path before proceeding

    try {
      // Add progress document for the user
      await addProgress(user.uid, learningPath.id);
      onClose(); // Close the modal after enrolling
    } catch (error) {
      console.error("Error enrolling in learning path:", error);
    }
  };

  if (!learningPath) return null; // Ensure there's a learning path before rendering

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>{learningPath.title}</DialogTitle>
      <DialogContent>
        <Typography variant="body1" paragraph>
          {learningPath.description}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Created At: {new Date(learningPath.createdAt?.seconds * 1000).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Number of Resources: {learningPath.resources?.length || 0}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Estimated Duration: {Math.ceil((learningPath.resources?.length || 0) * (15 + Math.random() * 15))} minutes
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button onClick={handleEnroll} color="primary">
          Enroll
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LearningPathDetailModal;

import React from 'react';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

// Styling for the animated button
const buttonStyles = {
  backgroundColor: '#234289', // Red color
  color: '#fff',
  '&:hover': {
    backgroundColor: '#d32f2f',
    transition: 'background-color 0.3s ease-in-out',
  },
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontWeight: 'bold',
};

const AnimatedButton = () => {
  const history = useNavigate(); // To handle redirection

  const handleClick = () => {
    history('/signup'); // Redirect to signup page
  };

  return (
    <Button
      variant="contained"
      startIcon={<ArrowForwardIcon />}
      sx={buttonStyles}
      onClick={handleClick}
    >
      Get Started
    </Button>
  );
};

export default AnimatedButton;

import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import LearningPathCreator from '../../../learning-path/src/components/LearningPathCreator';
import ResourceUploader from '../components/ResourceUploader';
import Navigation from '../components/Nav';
import TopNav from '../components/TopNav';

const InstructorPage = () => {
  return (
    <>
    <TopNav/>
    <Box sx={{ display: 'flex'}}>
    <Box
          sx={{
            width: '250px', // Adjust the width as needed
            // bgcolor: '#EEEEee', // Darker sidebar background
            // borderRight: '1px solid',
            // borderColor: '#333', // Lighter border color for contrast
            p: 2,
            // color: '#e0e0e0', // Light text color
                    height:'100vh',

          }}
        >
          <Navigation  />
        </Box>
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Instructor Dashboard
        </Typography>
        <Divider sx={{ my: 2 }} />
        <LearningPathCreator />
        {/* You can add more components here if needed */}
      </Box>
    </Box>
    </>
  );
};

export default InstructorPage;

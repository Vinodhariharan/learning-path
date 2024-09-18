import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Dashboard = () => {
  return (
    <Box p={3}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1">
          Statistics and progress overview will be displayed here.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Dashboard;

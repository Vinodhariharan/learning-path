// pages/LearnerPage.js

import React, { useState } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import Navigation from '../components/Nav';
import EnrolledPathsPage from './EnrolledPathsPage';
import ProgressTracker from '../components/ProgressTracker';
import LearningPathList from './LearningPathsPage';
import TopNav from '../components/TopNav';

const LearnerPage = () => {
  const [view, setView] = useState('progress');

  return (
    <>
    <TopNav/>
    <Box sx={{ display: 'flex', height: '90vh' }}>
    {/* <Box sx={{ display: 'flex', height: '90vh', bgcolor: '#121212' }}> Dark background */}
        <Box
          sx={{
            width: '250px', // Adjust the width as needed
            // bgcolor: '#EEEEFF', // Darker sidebar background
            // borderRight: '1px solid',
            // borderColor: '#333', // Lighter border color for contrast
            p: 2,
            color: '#e0e0e0', // Light text color
          }}
        >
          <Navigation setView={setView} />
        </Box>
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        {/* <Typography sx={} variant="h4" gutterBottom>
          Learner Dashboard
        </Typography> */}
        {/* <Divider sx={{ my: 2 }} /> */}
        {view === 'progress' && <ProgressTracker />}
        {view === 'learningPaths' && <LearningPathList />}
        {view === 'enrolledPaths' && <EnrolledPathsPage />}
        {/* Add other components based on view */}
      </Box>
    </Box>
    </>
  );
};

export default LearnerPage;
// pages/LearnerPage.js

// import React, { useState } from 'react';
// import { Box, Typography, Divider } from '@mui/material';
// import Navigation from '../components/Nav';
// import EnrolledPathsPage from './EnrolledPathsPage';
// import ProgressTracker from '../components/ProgressTracker';
// import LearningPathList from './LearningPathsPage';
// import TopNav from '../components/TopNav';

// const LearnerPage = () => {
//   const [view, setView] = useState('progress');

//   return (
//     <>
//       <TopNav />
//       <Box sx={{ display: 'flex', height: '90vh', bgcolor: '#121212' }}> {/* Dark background */}
//         <Box
//           sx={{
//             width: '250px', // Adjust the width as needed
//             bgcolor: '#1e1e1e', // Darker sidebar background
//             borderRight: '1px solid',
//             borderColor: '#333', // Lighter border color for contrast
//             p: 2,
//             color: '#e0e0e0', // Light text color
//           }}
//         >
//           <Navigation setView={setView} />
//         </Box>
//         <Box
//           sx={{
//             flexGrow: 1,
//             p: 3,
//             bgcolor: '#121212', // Dark background for content area
//             color: '#e0e0e0', // Light text color for content
//           }}
//         >
//           <Typography variant="h4" gutterBottom>
//             Learner Dashboard
//           </Typography>
//           <Divider sx={{ my: 2, borderColor: '#333' }} /> {/* Darker divider */}
//           {view === 'progress' && <ProgressTracker />}
//           {view === 'learningPaths' && <LearningPathList />}
//           {view === 'enrolledPaths' && <EnrolledPathsPage />}
//           {/* Add other components based on view */}
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default LearnerPage;

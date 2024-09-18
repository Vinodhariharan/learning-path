// import React, { useEffect, useState } from 'react';
// import { Box, Typography, LinearProgress, Alert, Button, TextField } from '@mui/material';
// import { db } from '../firebase';
// import { doc, getDoc } from 'firebase/firestore';
// import { useAuth } from '../contexts/AuthContext';
// import { addCompletedResource } from '../services/firestore'; // Import the function

// const ProgressTracker = () => {
//   const { currentUser } = useAuth();
//   const [progress, setProgress] = useState(null);
//   const [error, setError] = useState('');
//   const [resourceId, setResourceId] = useState(''); // State to store resource ID to be completed

//   useEffect(() => {
//     const fetchProgress = async () => {
//       if (!currentUser) {
//         setError("You must be logged in to view progress.");
//         return;
//       }

//       try {
//         const progressRef = doc(db, 'progress', currentUser.uid);
//         const progressSnap = await getDoc(progressRef);

//         if (progressSnap.exists()) {
//           setProgress(progressSnap.data());
//         } else {
//           setProgress({ progressPercentage: 0 });
//         }
//       } catch (err) {
//         setError("Failed to fetch progress.");
//       }
//     };

//     fetchProgress();
//   }, [currentUser]);

//   const handleCompleteResource = async () => {
//     try {
//       await addCompletedResource(currentUser.uid, resourceId);
//       setResourceId(''); // Clear input after completing resource
//     } catch (err) {
//       setError("Failed to update progress.");
//     }
//   };

//   if (error) {
//     return <Alert severity="error">{error}</Alert>;
//   }

//   if (!progress) {
//     return <Typography>Loading...</Typography>;
//   }

//   return (
//     <Box p={3}>
//       <Typography variant="h4" gutterBottom>
//         Progress Tracker
//       </Typography>
//       <Typography variant="body1">
//         Your Progress: {progress.progressPercentage}%
//       </Typography>
//       <LinearProgress variant="determinate" value={progress.progressPercentage} sx={{ mt: 1 }} />
//       <Box mt={2}>
//         <TextField
//           label="Resource ID"
//           value={resourceId}
//           onChange={(e) => setResourceId(e.target.value)}
//           fullWidth
//         />
//         <Button onClick={handleCompleteResource} variant="contained" color="primary" sx={{ mt: 2 }}>
//           Complete Resource
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default ProgressTracker;
import React from 'react';
import { Box, Typography, Card, CardContent, List, ListItem, Divider } from '@mui/material';

const ProgressTracker = () => {
  // Dummy data for learning paths and statistics
  const learningPaths = [
    { id: '1', title: 'Introduction to React', progress: 45 },
    { id: '2', title: 'Advanced JavaScript', progress: 70 },
    { id: '3', title: 'UI/UX Design Principles', progress: 60 },
  ];

  const statistics = {
    totalPaths: learningPaths.length,
    completedPaths: learningPaths.filter(path => path.progress === 100).length,
    averageProgress: (learningPaths.reduce((acc, path) => acc + path.progress, 0) / learningPaths.length).toFixed(2),
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Learning Paths in Progress
      </Typography>
      <List>
        {learningPaths.map((path) => (
          <ListItem key={path.id}>
            <Box sx={{ width: '100%' }}>
              <Typography variant="body1">{path.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                Progress: {path.progress}%
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ my: 2 }} />
      <Card>
        <CardContent>
          <Typography variant="h6">Statistics</Typography>
          <Typography variant="body1">Total Paths: {statistics.totalPaths}</Typography>
          <Typography variant="body1">Completed Paths: {statistics.completedPaths}</Typography>
          <Typography variant="body1">Average Progress: {statistics.averageProgress}%</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProgressTracker;

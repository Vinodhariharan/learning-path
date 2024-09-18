// components/EnrolledPathsPage.js

import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, CircularProgress } from '@mui/material';
import { useAuth } from '../contexts/AuthContext'; // Import AuthContext to get user ID
import { fetchEnrolledPaths } from '../services/firestore'; // Adjust the import path as needed

const EnrolledPathsPage = () => {
  const { user } = useAuth(); // Get user ID from AuthContext
  const [enrolledPaths, setEnrolledPaths] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEnrolledPaths = async () => {
      try {
        if (user.uid) {
            console.log("Hello");
          const paths = await fetchEnrolledPaths(user.uid);
          setEnrolledPaths(paths);
          console.log(enrolledPaths);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadEnrolledPaths();
  }, [user.uid]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        My Enrolled Learning Paths
      </Typography>
      <Grid container spacing={3}>
        {enrolledPaths.length > 0 ? (
          enrolledPaths.map((path) => (
            <Grid item xs={12} sm={6} md={4} key={path.id}>
              <Card sx={{ height: 200, display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">{path.title}</Typography>
                  <Typography variant="body2">{path.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography>No enrolled learning paths found.</Typography>
        )}
      </Grid>
    </Box>
  );
};

export default EnrolledPathsPage;

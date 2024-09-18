import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Pagination } from '@mui/material';
import { fetchLearningPaths } from '../services/firestore'; // Adjust the import path as needed
import LearningPathDetailModal from './LearningPathDetailModal'; // Import the modal component

const LearningPathList = () => {
  const [learningPaths, setLearningPaths] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedPath, setSelectedPath] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const itemsPerPage = 6; // Number of items per page

  useEffect(() => {
    const loadLearningPaths = async () => {
      try {
        const paths = await fetchLearningPaths();
        setLearningPaths(paths);
        setTotalPages(Math.ceil(paths.length / itemsPerPage));
      } catch (error) {
        console.error("Error fetching learning paths:", error);
      }
    };

    loadLearningPaths();
  }, []);

  // Get current items based on page number
  const paginatedPaths = learningPaths.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handleOpenModal = (path) => {
    setSelectedPath(path);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPath(null);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Available Learning Paths
      </Typography>
      <Grid container spacing={3}>
        {paginatedPaths.map((path) => (
          <Grid item xs={12} sm={6} md={4} key={path.id}>
            <Card sx={{ height: 200, display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{path.title}</Typography>
                <Typography variant="body2">{path.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => handleOpenModal(path)}>
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box mt={2} display="flex" justifyContent="center">
        <Pagination
          count={totalPages}
          page={page}
          onChange={(event, value) => setPage(value)}
          color="primary"
        />
      </Box>
      <LearningPathDetailModal
        open={modalOpen}
        onClose={handleCloseModal}
        learningPath={selectedPath}
      />
    </Box>
  );
};

export default LearningPathList;

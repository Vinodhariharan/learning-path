import React, { useState } from 'react';
import { Box, Typography, Button, List, ListItem, Alert, Divider, Stack, Card, CardActions, CardContent, FormControl, FormLabel, TextField } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';
import ResourceUploader from './ResourceUploader'; // Import the ResourceUploader component

const LearningPathCreator = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [resources, setResources] = useState([]);
  const [error, setError] = useState('');
  const { user } = useAuth();
  const db = getFirestore();

  // Handle file upload success
  const handleUploadSuccess = (downloadURL) => {
    setResources([...resources, { id: Date.now().toString(), type: 'file', url: downloadURL }]);
  };

  // Create learning path
  const handleCreate = async () => {
    if (!user) {
      setError("You must be logged in to create a learning path.");
      return;
    }

    const learningPath = {
      title,
      description,
      instructorId: user.uid,
      resources,
      createdAt: Timestamp.fromDate(new Date()),
    };

    try {
      await addDoc(collection(db, 'learningPaths'), learningPath);
      setTitle('');
      setDescription('');
      setResources([]);
      setError('');
      alert("Learning path created successfully!");
    } catch (err) {
      console.error("Failed to create learning path:", err);
      setError("Failed to create learning path.");
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h2" component="h1" gutterBottom>
        Create Learning Path
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <Card>
        <CardContent>
          <Stack spacing={2} sx={{ my: 2 }}>
            <FormControl fullWidth>
              <FormLabel>Title</FormLabel>
              <TextField
                placeholder="Enter the title of the learning path"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth>
              <FormLabel>Description</FormLabel>
              <TextField
                placeholder="Enter a description of the learning path"
                multiline
                minRows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth>
              <FormLabel>Add a new resource</FormLabel>
              <ResourceUploader onUploadSuccess={handleUploadSuccess} />
            </FormControl>
          </Stack>

          <Divider sx={{ my: 2 }} />

          <List>
            {resources.map((resource) => (
              <ListItem key={resource.id}>
                {resource.type === 'file' ? (
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.url}</a>
                ) : (
                  resource.url
                )}
              </ListItem>
            ))}
          </List>
        </CardContent>

        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="outlined" color="neutral">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleCreate}>
            Create Learning Path
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default LearningPathCreator;

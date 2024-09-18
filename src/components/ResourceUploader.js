import React, { useState } from 'react';
import { Box, Typography, Button, Input, Alert } from '@mui/material';
import { uploadFile } from '../services/storage';
import { useAuth } from '../contexts/AuthContext';

const ResourceUploader = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const { user } = useAuth();

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    if (!user) {
      setError("You must be logged in to upload resources.");
      return;
    }

    try {
      const downloadURL = await uploadFile(file);
      setFile(null);
      setError('');
      if (onUploadSuccess) {
        onUploadSuccess(downloadURL);
      }
      alert("File uploaded successfully!");
    } catch (err) {
      setError("Failed to upload file.");
    }
  };

  return (
    <Box p={3}>
      <Typography level="h4" gutterBottom>
        Upload Resources
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <Button variant="contained" component="label">
        Upload File
        <Input
          type="file"
          hidden
          onChange={(e) => setFile(e.target.files[0])}
        />
      </Button>
      {file && <Typography level="body1" sx={{ mt: 1 }}>{file.name}</Typography>}
      <Button variant="solid" onClick={handleUpload} sx={{ mt: 2 }}>
        Upload
      </Button>
    </Box>
  );
};

export default ResourceUploader;

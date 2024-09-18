import axios from 'axios';

const API_BASE_URL = 'https://api.example.com';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getLearningPath = () => api.get('/learning-path');
export const createResource = (data) => api.post('/resources', data);
export const uploadResource = (file) => api.post('/upload', file);

export default api;

import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Divider } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import AnimatedButton from './Button';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title
);

// Dummy data for learning paths
const learningPaths = [
  {
    id: 'path1',
    title: 'Mastering Data Science',
    description: 'An in-depth course on data science covering statistical analysis, machine learning, and data visualization techniques.',
    createdAt: new Date(),
    image: 'https://cdn.prod.website-files.com/63ccf2f0ea97be12ead278ed/644a18b637053fa3709c5ba2_what-is-data-science.jpg',
    resources: [
      { id: 'resource1', title: 'Introduction to Data Science', type: 'Video', duration: 20 },
      { id: 'resource2', title: 'Data Visualization Techniques', type: 'Article', duration: 30 },
    ],
  },
  {
    id: 'path2',
    title: 'Full-Stack Web Development',
    description: 'Learn full-stack web development, including front-end technologies, back-end programming, and database management.',
    createdAt: new Date(),
    image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/full_stack_banner.jpg',
    resources: [
      { id: 'resource3', title: 'Front-End Fundamentals', type: 'Video', duration: 25 },
      { id: 'resource4', title: 'Back-End Development with Node.js', type: 'Article', duration: 35 },
    ],
  },
];

const LearningPathDetail = ({ path }) => {
  const data = {
    labels: path.resources.map((res) => res.title),
    datasets: [
      {
        label: 'Resource Duration',
        data: path.resources.map((res) => res.duration),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  return (
    <Grid container spacing={2} sx={{ mb: 4 }}>
      <Grid item xs={12} md={6}>
        <CardMedia
          component="img"
          image={path.image}
          alt={path.title}
          sx={{ height: '100%', objectFit: 'cover' }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {path.title}
            </Typography>
            <Typography variant="body1" paragraph>
              {path.description}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6">Resources</Typography>
            {path.resources.map((resource) => (
              <Box key={resource.id} sx={{ mb: 1 }}>
                <Typography variant="body2">{resource.title} ({resource.type}) - {resource.duration} minutes</Typography>
              </Box>
            ))}
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6">Statistics</Typography>
            <Line data={data} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

const HomePage = () => {
  return (
    <Container
      sx={{
        position: 'relative',
        minHeight: '100vh',
        py: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        '@media (min-width: 834px)': {
          flexDirection: 'column',
          gap: 6,
        },
        '@media (min-width: 1199px)': {
          gap: 12,
        },
      }}
    >
      {/* Two-Column Layout */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img src='logo512.png' width={'250px'}></img>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              maxWidth: '50ch',
              textAlign: 'center',
              '@media (min-width: 834px)': {
                minWidth: 420,
                alignItems: 'flex-start',
                textAlign: 'initial',
              },
            }}
          >
            <Typography variant="h3" gutterBottom>
              Welcome to the Learning Path Platform
            </Typography>
            <Typography variant="body1" paragraph>
              Explore our curated learning paths designed to enhance your skills and knowledge. Whether you're an instructor creating content or a learner advancing your career, we have resources tailored for you.
            </Typography>
            <AnimatedButton/>
          </Box>
        </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1483791424735-e9ad0209eea2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt="Learning Path"
                sx={{
                  width: '100%',
                  // height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            </Grid>
      </Grid>

      {/* Featured Learning Paths Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Featured Learning Paths
        </Typography>
        {learningPaths.map((path) => (
          <LearningPathDetail key={path.id} path={path} />
        ))}
      </Box>
    </Container>
  );
};

export default HomePage;

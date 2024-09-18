import React, { useState } from 'react';
import {
  CssVarsProvider,
  extendTheme,
} from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Typography,
  Alert,
  IconButton,
} from '@mui/joy';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const customTheme = extendTheme({});

function ColorSchemeToggle() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <IconButton
      variant="outlined"
      color="neutral"
      onClick={toggleMode}
    >
      {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

const Login = () => {
  const { login,role } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      const user = await login(email, password); // Assuming login returns user data

      const redirectPath = role === 'instructor' ? '/instructor' : '/learner';
      navigate(redirectPath);
    } catch (err) {
      setError('Failed to log in. Please check your credentials.');
    }
    setLoading(false);
  };

  return (
    <CssVarsProvider theme={customTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          minHeight: '100vh',
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            flex: 1,
            display: { xs: 'none', md: 'block' },
            backgroundImage:
              'url(https://i.gifer.com/OKEq.gif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Main Content */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 3,
            py: 5,
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: 400,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Typography level="h4" component="h1">
                Welcome Back
              </Typography>
              <ColorSchemeToggle />
            </Box>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <FormControl required sx={{ mb: 2 }}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl required sx={{ mb: 2 }}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>

              <Button
                type="submit"
                fullWidth
                loading={loading}
                disabled={loading}
                sx={{ mt: 1, mb: 2 }}
              >
                Log In
              </Button>
            </form>

            <Typography
              endDecorator={
                <RouterLink to="/signup">Sign Up</RouterLink>
              }
              fontSize="sm"
              sx={{ alignSelf: 'center' }}
            >
              Don&apos;t have an account?
            </Typography>
          </Box>
        </Box>
      </Box>
    </CssVarsProvider>
  );
};

export default Login;

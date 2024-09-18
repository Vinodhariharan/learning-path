// // import React, { useState } from 'react';
// // import {
// //   CssVarsProvider,
// //   extendTheme,
// // } from '@mui/joy/styles';
// // import CssBaseline from '@mui/joy/CssBaseline';
// // import {
// //   Box,
// //   Button,
// //   FormControl,
// //   FormLabel,
// //   Input,
// //   Typography,
// //   Alert,
// //   Select,
// //   Option,
// //   IconButton,
// // } from '@mui/joy';
// // import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
// // import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
// // import { useAuth } from '../contexts/AuthContext';
// // import { Link } from 'react-router-dom';

// // const customTheme = extendTheme({
// //   colorSchemes: {
// //     light: {
// //       palette: {
// //         background: {
// //           body: 'linear-gradient(to right, #6a11cb, #2575fc)',
// //         },
// //       },
// //     },
// //     dark: {
// //       palette: {
// //         background: {
// //           body: 'linear-gradient(to right, #141e30, #243b55)',
// //         },
// //       },
// //     },
// //   },
// // });

// // function ColorSchemeToggle() {
// //   const [mode, setMode] = useState('light');

// //   const toggleMode = () => {
// //     setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
// //   };

// //   return (
// //     <IconButton
// //       variant="outlined"
// //       color="neutral"
// //       onClick={toggleMode}
// //     >
// //       {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
// //     </IconButton>
// //   );
// // }

// // const Signup = () => {
// //   const { signup } = useAuth();
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [name, setName] = useState('');
// //   const [role, setRole] = useState('learner');
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState('');

// //   const handleSignup = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await signup(email, password, name, role);
// //       setEmail('');
// //       setPassword('');
// //       setName('');
// //       setRole('learner');
// //       setError('');
// //       setSuccess('Signup successful! You can now log in.');
// //     } catch (err) {
// //       setError('Failed to sign up. Please try again.');
// //       setSuccess('');
// //     }
// //   };

// //   return (
// //     <CssVarsProvider theme={customTheme}>
// //       <CssBaseline />
// //       <Box
// //         sx={{
// //           display: 'flex',
// //           minHeight: '100vh',
// //           alignItems: 'center',
// //           justifyContent: 'center',
// //           backgroundColor: 'background.body',
// //           px: 3,
// //           py: 5,
// //         }}
// //       >
// //         <Box
// //           sx={{
// //             width: '100%',
// //             maxWidth: 400,
// //             backgroundColor: 'background.paper',
// //             padding: 3,
// //             borderRadius: 2,
// //             boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
// //           }}
// //         >
// //           <Box
// //             sx={{
// //               display: 'flex',
// //               justifyContent: 'space-between',
// //               alignItems: 'center',
// //               mb: 2,
// //             }}
// //           >
// //             <Typography level="h4" component="h1">
// //               Create an Account
// //             </Typography>
// //             <ColorSchemeToggle />
// //           </Box>

// //           {error && (
// //             <Alert severity="error" sx={{ mb: 2 }}>
// //               {error}
// //             </Alert>
// //           )}

// //           {success && (
// //             <Alert severity="success" sx={{ mb: 2 }}>
// //               {success}
// //             </Alert>
// //           )}

// //           <form onSubmit={handleSignup}>
// //             <FormControl required sx={{ mb: 2 }}>
// //               <FormLabel>Name</FormLabel>
// //               <Input
// //                 type="text"
// //                 placeholder="Enter your name"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //               />
// //             </FormControl>

// //             <FormControl required sx={{ mb: 2 }}>
// //               <FormLabel>Email</FormLabel>
// //               <Input
// //                 type="email"
// //                 placeholder="Enter your email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //               />
// //             </FormControl>

// //             <FormControl required sx={{ mb: 2 }}>
// //               <FormLabel>Password</FormLabel>
// //               <Input
// //                 type="password"
// //                 placeholder="Enter your password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //               />
// //             </FormControl>

// //             <FormControl required sx={{ mb: 2 }}>
// //               <FormLabel>Role</FormLabel>
// //               <Select
// //                 value={role}
// //                 onChange={(e, newValue) => setRole(newValue)}
// //                 placeholder="Select your role"
// //               >
// //                 <Option value="learner">Learner</Option>
// //                 <Option value="instructor">Instructor</Option>
// //               </Select>
// //             </FormControl>

// //             <Button
// //               type="submit"
// //               fullWidth
// //               sx={{ mt: 1, mb: 2 }}
// //             >
// //               Sign Up
// //             </Button>
// //           </form>

// //           <Typography
// //             endDecorator={
// //               <Link to="/login">Log In</Link>
// //             }
// //             fontSize="sm"
// //             sx={{ alignSelf: 'center' }}
// //           >
// //             Already have an account?
// //           </Typography>
// //         </Box>
// //       </Box>
// //     </CssVarsProvider>
// //   );
// // };

// // export default Signup;
// import React, { useState } from 'react';
// import {
//   CssVarsProvider,
//   extendTheme,
// } from '@mui/joy/styles';
// import CssBaseline from '@mui/joy/CssBaseline';
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   Typography,
//   Alert,
//   Select,
//   Option,
//   IconButton,
// } from '@mui/joy';
// import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
// import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
// import { useAuth } from '../contexts/AuthContext';
// import { Link } from 'react-router-dom';

// const customTheme = extendTheme({
//   colorSchemes: {
//     light: {
//       palette: {
//         background: {
//           body: 'linear-gradient(to right, #6a11cb, #2575fc)',
//         },
//       },
//     },
//     dark: {
//       palette: {
//         background: {
//           body: 'linear-gradient(to right, #141e30, #243b55)',
//         },
//       },
//     },
//   },
// });

// function ColorSchemeToggle() {
//   const [mode, setMode] = useState('light');

//   const toggleMode = () => {
//     setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <IconButton
//       variant="outlined"
//       color="neutral"
//       onClick={toggleMode}
//     >
//       {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
//     </IconButton>
//   );
// }

// const Signup = () => {
//   const { signup } = useAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [role, setRole] = useState('learner');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       await signup(email, password, name, role);
//       setEmail('');
//       setPassword('');
//       setName('');
//       setRole('learner');
//       setError('');
//       setSuccess('Signup successful! You can now log in.');
//     } catch (err) {
//       setError('Failed to sign up. Please try again.');
//       setSuccess('');
//     }
//   };

//   return (
//     <CssVarsProvider theme={customTheme}>
//       <CssBaseline />
//       <Box
//         sx={{
//           display: 'flex',
//           minHeight: '100vh',
//           alignItems: 'center',
//           justifyContent: 'center',
//           background: 'linear-gradient(to right, #6a11cb, #2575fc)', // Set the gradient directly here
//           px: 3,
//           py: 5,
//         }}
//       >
//         <Box
//           sx={{
//             width: '100%',
//             maxWidth: 400,
//             backgroundColor: '#fff', // Adjust if needed for contrast
//             padding: 3,
//             borderRadius: 2,
//             boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
//           }}
//         >
//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               mb: 2,
//             }}
//           >
//             <Typography level="h4" component="h1">
//               Create an Account
//             </Typography>
//             <ColorSchemeToggle />
//           </Box>

//           {error && (
//             <Alert severity="error" sx={{ mb: 2 }}>
//               {error}
//             </Alert>
//           )}

//           {success && (
//             <Alert severity="success" sx={{ mb: 2 }}>
//               {success}
//             </Alert>
//           )}

//           <form onSubmit={handleSignup}>
//             <FormControl required sx={{ mb: 2 }}>
//               <FormLabel>Name</FormLabel>
//               <Input
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </FormControl>

//             <FormControl required sx={{ mb: 2 }}>
//               <FormLabel>Email</FormLabel>
//               <Input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </FormControl>

//             <FormControl required sx={{ mb: 2 }}>
//               <FormLabel>Password</FormLabel>
//               <Input
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </FormControl>

//             <FormControl required sx={{ mb: 2 }}>
//               <FormLabel>Role</FormLabel>
//               <Select
//                 value={role}
//                 onChange={(e, newValue) => setRole(newValue)}
//                 placeholder="Select your role"
//               >
//                 <Option value="learner">Learner</Option>
//                 <Option value="instructor">Instructor</Option>
//               </Select>
//             </FormControl>

//             <Button
//               type="submit"
//               fullWidth
//               sx={{ mt: 1, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//           </form>

//           <Typography
//             endDecorator={
//               <Link to="/login">Log In</Link>
//             }
//             fontSize="sm"
//             sx={{ alignSelf: 'center' }}
//           >
//             Already have an account?
//           </Typography>
//         </Box>
//       </Box>
//     </CssVarsProvider>
//   );
// };

// export default Signup;
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
  Select,
  Option,
  IconButton,
} from '@mui/joy';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const customTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: 'linear-gradient(to right, #6a11cb, #2575fc)',
        },
      },
    },
    dark: {
      palette: {
        background: {
          body: 'linear-gradient(to right, #141e30, #243b55)',
        },
      },
    },
  },
});

function ColorSchemeToggle() {
  const [mode, setMode] = useState('dark');

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

const Signup = () => {
  const { signup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('learner');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password, name, role);
      setEmail('');
      setPassword('');
      setName('');
      setRole('learner');
      setError('');
      setSuccess('Signup successful! You can now log in.');
    } catch (err) {
      setError('Failed to sign up. Please try again.');
      setSuccess('');
    }
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
        {/* GIF Sidebar */}
        <Box
          sx={{
            flex: 1,
            display: { xs: 'none', md: 'block' },
            backgroundImage: 'url(https://i.pinimg.com/originals/7c/c2/31/7cc23110078bbc24116d124e1c6b2dee.gif)',
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
              // backgroundColor: 'background.paper',
              padding: 3,
              // borderRadius: 2,
              // boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
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
                Create an Account
              </Typography>
              <ColorSchemeToggle />
            </Box>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            {success && (
              <Alert severity="success" sx={{ mb: 2 }}>
                {success}
              </Alert>
            )}

            <form onSubmit={handleSignup}>
              <FormControl required sx={{ mb: 2 }}>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

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

              <FormControl required sx={{ mb: 2 }}>
                <FormLabel>Role</FormLabel>
                <Select
                  value={role}
                  onChange={(e, newValue) => setRole(newValue)}
                  placeholder="Select your role"
                >
                  <Option value="learner">Learner</Option>
                  <Option value="instructor">Instructor</Option>
                </Select>
              </FormControl>

              <Button
                type="submit"
                fullWidth
                sx={{ mt: 1, mb: 2 }}
              >
                Sign Up
              </Button>
            </form>

            <Typography
              endDecorator={
                <Link to="/login">Log In</Link>
              }
              fontSize="sm"
              sx={{ alignSelf: 'center' }}
            >
              Already have an account?
            </Typography>
          </Box>
        </Box>
      </Box>
    </CssVarsProvider>
  );
};

export default Signup;

import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Import AuthContext to get user info
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

export default function TopNav() {
  const { user, logout } = useAuth(); // Assuming 'user' contains user info and 'logout' logs out the user
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout(); // Log out the user
    navigate('/login'); // Redirect to login page
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: '#333', // Dark background for the AppBar
        color: '#e0e0e0', // Light text color
        boxShadow: 1,
      }}
    >
      <Toolbar>
        {/* Logo and App Name on the Left */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img
            src="/logo512.png"
            alt="Aura Logo"
            style={{ height: 40, marginRight: 8 }}
          />
          Aura
        </Typography>

        {/* Profile Avatar and Logout Button on the Right */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" onClick={() => navigate('/profile')}>
            <Avatar alt={user?.name} src={user?.profilePicture} />
          </IconButton>
          <Button
            color="inherit"
            onClick={handleLogout}
            startIcon={<LogoutRoundedIcon />}
            sx={{ ml: 2 }} // Margin-left for spacing
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

// import React from 'react';
// import { AppBar, Toolbar, Typography, IconButton, Avatar, Button, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
// import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

// export default function TopNav() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     await logout();
//     navigate('/login');
//   };

//   return (
//     <AppBar
//       position="static"
//       sx={{
//         background: 'linear-gradient(135deg, #6C0BA9, #9C1AB1, #F2444E)', // Background gradient from logo
//         boxShadow: 1,
//       }}
//     >
//       <Toolbar>
//         {/* Logo and App Name on the Left */}
//         <Typography variant="h3" component="div" sx={{ flexGrow: 1, color: '#FFFFFF' }}>
//           <img
//             src="/logo512.png"
//             alt="Aura"
//             style={{ height: 40, marginRight: 8 }}
//           />
//           Aura
//         </Typography>

//         {/* Profile Avatar and Logout Button on the Right */}
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <IconButton color="inherit" onClick={() => navigate('/profile')}>
//             <Avatar alt={user?.name} src={user?.profilePicture} />
//           </IconButton>
//           <Button
//             sx={{
//               color: '#FFFFFF',
//               textTransform: 'none', // To keep button text case as is
//               ml: 2,
//               '&:hover': {
//                 backgroundColor: '#F2444E', // Button hover color
//               },
//             }}
//             onClick={handleLogout}
//             startIcon={<LogoutRoundedIcon />}
//           >
//             Logout
//           </Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

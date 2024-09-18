// import React from 'react';
// import { useAuth } from '../contexts/AuthContext'; // Import AuthContext to get user role
// import { List, ListItem, ListItemText, ListSubheader, ListItemButton, ListItemIcon } from '@mui/material';
// import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
// import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
// import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
// import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
// import TodayRoundedIcon from '@mui/icons-material/TodayRounded';

// export default function Navigation({ setView }) {
//   const { role } = useAuth(); // Get user role from AuthContext

//   if (!role) {
//     return null; // Return nothing if user is not authenticated
//   }

//   return (
//     <List
//       sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
//     >
//       {role === 'instructor' && (
//         <>
//           <ListSubheader sx={{ letterSpacing: '2px', fontWeight: '800' }}>
//             Instructor Dashboard
//           </ListSubheader>
//           <List>
//             <ListItemButton onClick={() => setView('managePaths')}>
//               <ListItemIcon>
//                 <AssignmentIndRoundedIcon />
//               </ListItemIcon>
//               <ListItemText primary="Manage Learning Paths" />
//             </ListItemButton>
//             <ListItemButton onClick={() => setView('trackProgress')}>
//               <ListItemIcon>
//                 <TodayRoundedIcon />
//               </ListItemIcon>
//               <ListItemText primary="Track Progress" />
//             </ListItemButton>
//             <ListItemButton onClick={() => setView('uploadResources')}>
//               <ListItemIcon>
//                 <ArticleRoundedIcon />
//               </ListItemIcon>
//               <ListItemText primary="Upload Resources" />
//             </ListItemButton>
//             <ListItemButton onClick={() => setView('viewLearners')}>
//               <ListItemIcon>
//                 <PeopleRoundedIcon />
//               </ListItemIcon>
//               <ListItemText primary="View Learners" />
//             </ListItemButton>
//           </List>
//         </>
//       )}

//       {role === 'learner' && (
//         <>
//           <ListSubheader sx={{ letterSpacing: '2px', fontWeight: '800' }}>
//             Learner Dashboard
//           </ListSubheader>
//           <List>
//             <ListItemButton onClick={() => setView('learningPaths')}>
//               <ListItemIcon>
//                 <AssignmentIndRoundedIcon />
//               </ListItemIcon>
//               <ListItemText primary="Learning Paths" />
//             </ListItemButton>
//             <ListItemButton onClick={() => setView('progress')}>
//               <ListItemIcon>
//                 <TodayRoundedIcon />
//               </ListItemIcon>
//               <ListItemText primary="Track My Progress" />
//             </ListItemButton>
//             <ListItemButton onClick={() => setView('enrolledPaths')}>
//               <ListItemIcon>
//                 <AssignmentIndRoundedIcon />
//               </ListItemIcon>
//               <ListItemText primary="My Enrolled Paths" />
//             </ListItemButton>
//           </List>
//         </>
//       )}
//     </List>
//   );
// }
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';

export default function Navigation({ setView }) {
  const { role } = useAuth();

  if (!role) {
    return null;
  }

  return (
    <List
      sx={{
        width: '100%',
        height:'100vh',
        maxWidth: 360,
        bgcolor: 'background.paper',
        background: 'linear-gradient(135deg, #6C0BA9, #9C1AB1, #F2444E)', // Gradient based on logo colors
        color: 'white', // Text color
        borderRadius: 2,
        p: 1,
      }}
    >
      {role === 'instructor' && (
        <>
          <ListSubheader
            sx={{
              letterSpacing: '2px',
              fontWeight: '800',
              color: 'white',
              bgcolor: 'transparent',
              textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
            }}
          >
            Instructor Dashboard
          </ListSubheader>
          <List>
            <ListItemButton onClick={() => setView('managePaths')}>
              <ListItemIcon sx={{ color: 'white' }}>
                <AssignmentIndRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Learning Paths" />
            </ListItemButton>
            <ListItemButton onClick={() => setView('trackProgress')}>
              <ListItemIcon sx={{ color: 'white' }}>
                <TodayRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Track Progress" />
            </ListItemButton>
            <ListItemButton onClick={() => setView('uploadResources')}>
              <ListItemIcon sx={{ color: 'white' }}>
                <ArticleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Upload Resources" />
            </ListItemButton>
            <ListItemButton onClick={() => setView('viewLearners')}>
              <ListItemIcon sx={{ color: 'white' }}>
                <PeopleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="View Learners" />
            </ListItemButton>
          </List>
        </>
      )}

      {role === 'learner' && (
        <>
          <ListSubheader
            sx={{
              letterSpacing: '2px',
              fontWeight: '800',
              color: 'white',
              bgcolor: 'transparent',
              textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
            }}
          >
            Learner Dashboard
          </ListSubheader>
          <List>
            <ListItemButton onClick={() => setView('learningPaths')}>
              <ListItemIcon sx={{ color: 'white' }}>
                <AssignmentIndRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Learning Paths" />
            </ListItemButton>
            <ListItemButton onClick={() => setView('progress')}>
              <ListItemIcon sx={{ color: 'white' }}>
                <TodayRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Track My Progress" />
            </ListItemButton>
            <ListItemButton onClick={() => setView('enrolledPaths')}>
              <ListItemIcon sx={{ color: 'white' }}>
                <AssignmentIndRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="My Enrolled Paths" />
            </ListItemButton>
          </List>
        </>
      )}
    </List>
  );
}

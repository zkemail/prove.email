// 'use client'
// import React from 'react';
// import { Card, CardContent, Typography, Box, IconButton, Grid } from '@mui/material';
// import ArrowOutward from '@mui/icons-material/ArrowOutward';

// interface ProjectCardProps {
//   projectTitle: string;
//   projectDescription: string;
//   projectTag: string;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ projectTitle, projectDescription, projectTag }) => {
//   return (
//     <Card
//       sx={{
//         maxWidth: 345,
//         backgroundColor: '#181818',
//         color: 'white',
//         borderRadius: '8px',
//         position: 'relative',
//         overflow: 'visible',
//         padding: '16px',
//       }}
//     >
//       <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
//         <IconButton aria-label="open" sx={{ color: 'white' }}>
//           <ArrowOutward />
//         </IconButton>
//       </Box>
//       <CardContent sx={{ padding: 0 }}>
//         <Grid container direction="column" spacing={2}>
//           <Grid item >
//             <Typography variant="subtitle2" sx={{ opacity: 0.6, fontSize: '0.75rem', textTransform: 'uppercase' }}>
//               {projectTag}
//             </Typography>
//           </Grid>
//           <Grid item>
//             <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginTop: 1 }}>
//               {projectTitle}
//             </Typography>
//           </Grid>
//           <Grid item>
//             <Typography variant="body2" sx={{ marginTop: 2 }}>
//               {projectDescription}
//             </Typography>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// };

// export default ProjectCard;


'use client'
import React from 'react';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import ArrowOutward from '@mui/icons-material/ArrowOutward';

interface ProjectCardProps {
  projectTitle: string;
  projectDescription: string;
  projectTag: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectTitle, projectDescription, projectTag }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: '#181818',
        color: 'white',
        borderRadius: '8px',
        position: 'relative',
        overflow: 'visible',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
        <IconButton aria-label="open" sx={{ color: 'white' }}>
          <ArrowOutward />
        </IconButton>
      </Box>
      <CardContent sx={{ padding: '16px' }}>
        <Typography variant="subtitle2" sx={{ opacity: 0.6, fontSize: '0.75rem', textTransform: 'uppercase' }}>
          {projectTag}
        </Typography>
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', fontSize: '1.5rem', marginTop: 1 }}>
          {projectTitle}
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 1, fontSize: '1rem' }}>
          {projectDescription}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;


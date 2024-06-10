// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import List from '@mui/material/List';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import CloseIcon from '@mui/icons-material/Close';
// import Slide from '@mui/material/Slide';
// import { TransitionProps } from '@mui/material/transitions';
// import { useTheme } from '@mui/material/styles';

// const Transition = React.forwardRef(function Transition(
//   props: TransitionProps & {
//     children: React.ReactElement;
//   },
//   ref: React.Ref<unknown>,
// ) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// interface Page {
//   label: string;
//   link: string;
// }

// interface FullScreenDialogProps {
//   open: boolean;
//   onClose: () => void;
//   pages: Page[];
// }

// export default function FullScreenDialog({ open, onClose, pages }: FullScreenDialogProps) {
//   const theme = useTheme();

//   return (
//     <Dialog
//       fullScreen
//       open={open}
//       onClose={onClose}
//       TransitionComponent={Transition}
//       PaperProps={{
//         sx: {
//           backgroundColor: 'black',
//           paddingX:'8%',
//           paddingY:'4%'
//         },
//       }}
//     >
//       <AppBar sx={{ position: 'relative', background: 'black' }}>
//         <Toolbar>
//           <IconButton
//             edge="start"
//             color="inherit"
//             onClick={onClose}
//             aria-label="close"
//           >
//             <CloseIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <List sx={{ padding: theme.spacing(2), background: 'black' }}>
//         {pages.map((page) => (
//           <Typography
//             key={page.label}
//             variant="h4"
//             component="a"
//             href={page.link}
//             sx={{
//               display: 'block',
//               color: 'white',
//               textDecoration: 'none',
//               marginBottom: theme.spacing(2),
//               position: 'relative',
//               '&:hover': {
//                 opacity: 0.8,
//                 '&::after': {
//                   transform: 'scaleX(1)',
//                 },
//               },
//               '&::after': {
//                 content: '""',
//                 position: 'absolute',
//                 bottom: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '2px',
//                 backgroundColor: theme.palette.secondary.main, // Underline color
//                 transform: 'scaleX(0)',
//                 transformOrigin: 'bottom right',
//                 transition: 'transform 0.3s ease-out',
//               },
//             }}
//           >
//             {page.label}
//           </Typography>
//         ))}
//       </List>
//     </Dialog>
//   );
// }



import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useTheme } from '@mui/material/styles';
import ZKEIcon from '../ZKEIcon/ZKEIcon'; // Adjust the import path if necessary

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Page {
  label: string;
  link: string;
}

interface FullScreenDialogProps {
  open: boolean;
  onClose: () => void;
  pages: Page[];
}

export default function FullScreenDialog({ open, onClose, pages }: FullScreenDialogProps) {
  const theme = useTheme();

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      PaperProps={{
        sx: {
          backgroundColor: 'black',
          paddingX: '8%',
          paddingY: '4%'
        },
      }}
    >
      <AppBar sx={{ position: 'relative', background: 'black' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
            
          <IconButton
            edge="start"
            color="inherit"
            href="/"
            aria-label="home"
          >
            <ZKEIcon sx={{ color: 'white' }} />
          </IconButton>

          <IconButton
            edge="end"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
       <List sx={{ padding: theme.spacing(2), background: 'black' }}>
         {pages.map((page) => (
          <Typography
            key={page.label}
            variant="h4"
            component="a"
            href={page.link}
            sx={{
              display: 'block',
              color: 'white',
              textDecoration: 'none',
              marginBottom: theme.spacing(2),
              position: 'relative',
              '&:hover': {
                opacity: 0.8,
                '&::after': {
                  transform: 'scaleX(1)',
                },
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '2px',
                backgroundColor: theme.palette.secondary.main, // Underline color
                transform: 'scaleX(0)',
                transformOrigin: 'bottom right',
                transition: 'transform 0.3s ease-out',
              },
            }}
          >
            {page.label}
          </Typography>
        ))}
      </List>
    </Dialog>
  );
}


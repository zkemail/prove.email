import * as React from 'react';
import { Button, Dialog, List, AppBar, Toolbar, IconButton, Typography, Slide, Grid, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import ZKEIcon from '../ZKEIcon/ZKEIcon'; // Adjust the import path if necessary
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import IconLink from '../IconLink/IconLink';
// import DiscordIcon from '../DiscordIcon/DiscordIcon'; // Uncomment if you have this component
import { TransitionProps } from '@mui/material/transitions';

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
          paddingX: '8%',
          paddingY: '4%',
          position: 'relative', // Ensure relative positioning
        },
      }}
    >
      <AppBar sx={{ position: 'relative', background: 'black' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton edge="start" color="inherit" href="/" aria-label="home">
          <img src={'/zkemailLogo.png'} style={{height: '3rem', width:'auto'}} />
          </IconButton>

          <IconButton edge="end" color="inherit" onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Grid container direction="column" spacing={1} sx={{ padding: '1.5%', paddingTop: '40px' }} >
        {pages.map((page) => (
          <Grid item key={page.label}>
            <Typography
              variant="h4"
              component="a"
              href={page.link}
              sx={{
                display: 'inline-block', // Ensures the underline is as wide as the text
                color: 'white',
                textDecoration: 'none',
                marginBottom: theme.spacing(3),
                position: 'relative',

                '&:hover': {
                  opacity: 0.8,
                  '&::after': {
                    transform: 'scaleX(1)',
                    height: '2px',
                    backgroundColor: theme.palette.secondary.main, // Underline color
                    transformOrigin: 'bottom left',
                    transition: 'transform 0.3s ease-out',
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
                  transformOrigin: 'bottom left',
                  transition: 'transform 0.3s ease-out',
                },
              }}
            >
              {page.label}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Social Icons Container */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 60,
          right: {xs:50, md:70, lg: 100},
          display: 'flex',
          gap: 2,
        }}
      >
        <IconLink target={false} href="https://twitter.com/zkemail?lang=en" IconComponent={XIcon} />
        <IconLink target={false} href="https://t.me/zkemail" IconComponent={TelegramIcon} />
        {/* <IconLink target={false} href="https://discord.com/invite/yourlink" IconComponent={DiscordIcon} /> */}
        <IconLink target={false} href="https://www.youtube.com/yourchannel" IconComponent={YouTubeIcon} />
        <IconLink target={false} href="https://github.com/zkemail" IconComponent={GitHubIcon} />
      </Box>
    </Dialog>
  );
}

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import SvgIcon from '@mui/material/SvgIcon';
import Image from 'next/image';
import SocialIconLink from './SocialIconLink'; // Import the new component
import zkEmailFooter from '.././public/zkEmailFooter.svg'; // Adjust the path as necessary
import Link from 'next/link';

function DiscordIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M0 48C0 21.49 21.49 0 48 0h352c26.51 0 48 21.49 48 48v336c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V48zm214.4 278c0 4.84-3.6 8.8-8.8 8.8-4.84 0-8.8-3.96-8.8-8.8 0-4.84 3.96-8.8 8.8-8.8 5.2 0 8.8 3.96 8.8 8.8zm96 0c0 4.84-3.6 8.8-8.8 8.8-4.84 0-8.8-3.96-8.8-8.8 0-4.84 3.96-8.8 8.8-8.8 5.2 0 8.8 3.96 8.8 8.8zm-87.2-97.6c-16.68 0-33.6-1.28-50.4-3.8-5.2-.96-9.16-4.96-9.16-10.16v-7.84c0-5.28 3.96-9.44 9.2-10.28 19.4-3.44 39.2-5.28 59.2-5.28s39.8 1.84 59.2 5.28c5.24.84 9.2 5 9.2 10.28v7.84c0 5.2-3.96 9.2-9.16 10.16-16.8 2.52-33.72 3.8-50.4 3.8zm-37.2-57.8c-3.2 0-5.8 2.56-5.8 5.8v18.8c0 3.2 2.6 5.8 5.8 5.8h74.4c3.2 0 5.8-2.6 5.8-5.8v-18.8c0-3.24-2.6-5.8-5.8-5.8H186zM96 48h352v336H48V48zm130.8 183.6c-17.08-1.4-34.08-3.4-51-6-5.2-.88-9.08-5.08-9.08-10.28v-7.84c0-5.28 3.88-9.44 9.08-10.28 21.4-3.64 43.2-5.8 65.2-6.52-12.6 7.8-24.6 16.36-36.08 25.44-4.88 3.88-5.4 11.32-1.24 16.2 2.48 2.92 6.28 4.44 10 4.44 2.6 0 5.2-.84 7.44-2.56 15.08-12.24 31-22.72 47.28-31.24 1.56-.8 3.24-.64 4.64.4 1.4 1.04 2.16 2.64 2.16 4.28v7.84c0 5.2-3.96 9.28-9.16 10.16-18.48 3.28-37.24 4.96-56 5.92zm85.6-51.8h12.6v-5.88h-12.6v5.88zm16.8 0h12.6v-5.88h-12.6v5.88zm16.8 0h12.6v-5.88h-12.6v5.88z" />
      </SvgIcon>
    );
}

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        pt: 2,
        textAlign: 'center',
        borderTop: 1,
        borderColor: 'divider',
        marginTop: 'auto',
        background: 'black',
        fontFamily: ''
      }}
    >
      <Box
        sx={{
          px: 6,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >

        {/* FOOTER TAGLINE */}
        <Grid container spacing={2}>
          <Grid item xs={6} justifyContent="flex-start">
            <Typography color="white" textAlign="left">
              transfer truth with the freedom of privacy
            </Typography>
          </Grid>

          {/* FOOTER SITE LINKS */}
          <Grid item xs={6} justifyContent="flex-end">
            <Grid container spacing={6} justifyContent="flex-end">
              <Grid item>
                <Typography variant="h6" component="h3" color="white" fontWeight="bold" pb={2} textAlign="center">
                  DEVELOPERS
                </Typography>
                <Grid container direction="column" spacing={1} textAlign="center" color="text.secondary">
                  <Grid item>
                    <Link href="https://zkemail.gitbook.io/zk-email" color="inherit" target="_blank" underline="none">
                      <Typography variant='footerLink'>
                        Docs
                      </Typography>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/projects" target="_blank" color="inherit" underline="none">
                      <Typography variant='footerLink'>
                        Projects
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Typography variant="h6" component="h3" color="white" fontWeight="bold" pb={2} textAlign="center">
                  COMMUNITY
                </Typography>
                <Grid container direction="column" spacing={1} textAlign="center" color="text.secondary">
                  <Grid item>
                    <Link href="/blog" target="_blank" color="inherit" underline="none">
                      <Typography variant='footerLink'>
                        Blog
                      </Typography>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/projects" target="_blank" color="inherit" underline="none">
                      <Typography variant='footerLink'>
                        Learn
                      </Typography>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/projects" target="_blank" color="inherit" underline="none">
                      <Typography variant='footerLink'>
                        Partner
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>

              {/* FOOTER SOCIAL ICONS  */}
              <Grid item>
                <Grid container justifyContent="center" spacing={2}>
                  <Grid item>
                    <SocialIconLink href="https://twitter.com/zkemail?lang=en" IconComponent={TwitterIcon} />
                  </Grid>
                  <Grid item>
                    <SocialIconLink href="https://t.me/zkemail" IconComponent={TelegramIcon} />
                  </Grid>
                  <Grid item>
                    <SocialIconLink href="https://discord.com/invite/yourlink" IconComponent={DiscordIcon} />
                  </Grid>
                  <Grid item>
                    <SocialIconLink href="https://www.youtube.com/yourchannel" IconComponent={YouTubeIcon} />
                  </Grid>
                  <Grid item>
                    <SocialIconLink href="https://github.com/zkemail" IconComponent={GitHubIcon} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* BOTTOM FOOTER ZK EMAIL BIG TEXT*/}
        <Box sx={{ marginTop: 'auto' }}>
          <Image
            src={zkEmailFooter}
            alt='checkbox'
            className='w-full h-full fill-white pt-24'
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

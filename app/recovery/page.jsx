'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography } from '@mui/material';

export default function RecoveryPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const redirect = async () => {
      await router.replace('https://recovery.prove.email');
      setIsLoading(false);
    };
    redirect();
  }, [router]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        width: '100vw',
      }}
    >
      {isLoading && (
        <Typography variant="h4" align="center">
          Redirecting to <a href="https://recovery.prove.email" style={{ textDecoration: 'underline' }}>https://recovery.prove.email</a>...
        </Typography>
      )}
    </Box>
  );
}

'use client';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// @project
import branding from '@/branding.json';

/***************************  LOGO - MAIN  ***************************/

export default function LogoMain() {
  const theme = useTheme();
  const logoMainPath = branding.logo.main;

  return (
    <Box
      className="main-logo"
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      {logoMainPath ? (
        <Box
          component="img"
          src={logoMainPath}
          alt={branding.brandName || 'WipeAble'}
          sx={{ width: { xs: 112, lg: 160 }, height: 'auto' }}
          loading="lazy"
        />
      ) : (
        <Typography
          variant="h4" // bigger than h5
          sx={{
            fontWeight: 800, // extra bold
            color: theme.palette.primary.main,
            letterSpacing: 2,
            fontFamily: "'Poppins', sans-serif",
            textDecoration: 'none', // ensures no underline
          }}
        >
          {branding.brandName || 'WipeAble'}
        </Typography>
      )}
    </Box>
  );
}

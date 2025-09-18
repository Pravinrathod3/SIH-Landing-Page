'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// @project
import branding from '@/branding.json';

/***************************  LOGO - TEXT ONLY  ***************************/

export default function LogoIcon() {
  const theme = useTheme();

  return (
    <Box
      className="icon-logo"
      sx={{
        width: "auto",
        height: "auto",
        position: "relative",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: theme.palette.primary.main,
          letterSpacing: 1,
          fontFamily: "'Poppins', sans-serif", // optional: custom font
        }}
      >
        {branding.brandName}
      </Typography>
    </Box>
  );
}

import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      py={2}
      textAlign="center"
      bgcolor="lightgray"
      position="fixed"  // Fix the footer at the bottom of the page
      bottom={0}
      left={0}
      width="100%"
      zIndex={1000}  // Ensure it's layered above the main content
      height="20px"  // Explicitly define the height of the footer
    >
      <Typography variant="body2" color="textSecondary">
        © 2024 Leaderboard. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#6EACDA">
    <Stack gap="10px" sx={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '100px', height: '100px' }} />
      <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="30px" textAlign="center" pb="40px">Fitness Tracker</Typography>
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="30px" textAlign="center" pb="40px">The Ultimate Gym Guide</Typography>
  </Box>
);

export default Footer;

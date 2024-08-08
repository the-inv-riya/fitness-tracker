import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '78px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '150px', height: '150px', margin: '0px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="center"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #03346E' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #03346E' }}>Exercises</a>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #03346E' }}>BMI Calculator</a>
    </Stack>
  </Stack>
);

export default Navbar;

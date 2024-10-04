"use client"
import React from 'react';
import { useSidebar } from '@/app/context/SidebarContext';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { pink } from '@mui/material/colors';






const Navbar: React.FC  = () => {
  const {isOpen , setIsOpen }  = useSidebar();
  const toggleSidebar =() =>{
    setIsOpen(!isOpen)
  }
  return (
    // <AppBar position="static" sx={{ borderRadius: '0',bgcolor:"rgb(18, 134, 206);" }}>
    <AppBar elevation={0} position="static" sx={{ borderRadius: '0',bgcolor:"#ffffff00" }}>
      <Toolbar>
      <IconButton
  onClick={toggleSidebar}
  size="large" // This can be adjusted if needed
  edge="start"
  color="inherit"
  aria-label="menu"
  sx={{
    mr: 2,
    color: '#60C6F2',
    width: '64px',   // Adjust width if needed
    height: '64px',
      // Adjust height if needed
  }}
>
  <MenuIcon sx={{ fontSize: '2.5rem',backgroundColor:'#fff',borderRadius:'10px' }} /> {/* Set desired font size */}
</IconButton>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'#60C6F2' }}>
           {/* Alo! universal */}
        </Typography>
      
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

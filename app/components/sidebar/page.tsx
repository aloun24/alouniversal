'use client'
import React from 'react'
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useSidebar } from '@/app/context/SidebarContext';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink, { LinkProps } from 'next/link';

// icons
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


// icons


import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PeopleIcon from '@mui/icons-material/People';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { List, Divider, ListItem, ListItemIcon, ListItemText, Button, Icon } from '@mui/material';

import { usePathname } from 'next/navigation';
import CancelIcon from '@mui/icons-material/Cancel';

// interface SidebarProps {
//   fullpage: boolean;
// }
type Props = {}
const  menuItems = [
  { icon: <AccountCircleIcon  />, text: 'Profile' ,path:''},
  { icon: <DesignServicesIcon   />, text: 'Service' ,path:'service'},
  { icon: <EmojiEventsIcon  />, text: 'Skill' ,path:'skill'},
  { icon: <PhotoLibraryIcon   />, text: 'Portfolio' ,path:'portfolio'},
  { icon: <ContactMailIcon  />, text: 'Contact' , path:'contact'},
  { divider: true },
  { icon: <SettingsIcon />, text: 'Settings' ,path:'settings'},
  { icon: <ExitToAppIcon />, text: 'Logout' ,path:'logout'},
];

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
export default function Sidebar ({}: Props) {

  const {isOpen , setIsOpen }  = useSidebar();
  const toggleSidebar =() =>{
    setIsOpen(!isOpen)
  }
  const currentPath = usePathname();
	
    
    
  return (
    <>
    <Box className={`sidebar ${isOpen ? 'fullpage' : ''}`}  >
    {/* <Box className={`sidebar  `}> */}
   
    <Box className={`sidebarfixed ${isOpen ? 'fullpage' : ''}`}>
      <Box sx={{display: 'flex', width:"100%",justifyContent:"space-between"}}>
      <Box sx={{display: 'flex', width:"100%"}}>
      <Box sx={{color:'#fff',fontSize: 50,mx:2}}>A</Box>
      <Box sx={{color:'#fff',fontSize: 20, mt:3,letterSpacing:3}}>louniversal</Box>
     
      </Box>
      <Button className='close_sidebar_icon' onClick={toggleSidebar} sx={{color:'#fff',fontSize: 20,fontWeight:800}}>
     <CancelIcon  sx={{height:35,width:35}}/>
    </Button> 
      </Box>
   
    <List sx={{fontWeight:1200}}>
    
      {menuItems.map((item, index) => (
        // Check if it's a divider item
        item.divider ? (
          <Divider key={index} />
        ) : (
          
          // <Link   sx={{color:`${currentPath === '/'+item.path ? 'rgb(18, 134, 206);' : '#fff'}` }} underline="none" href={`/${item.path}`} key={index}>
          <Link   sx={{color:`${currentPath === '/'+item.path ? '#272727' : '#fff'}` }} underline="none" href={`/${item.path}`} key={index}>
          <ListItem sx={{bgcolor:`${currentPath === '/'+item.path ? 'white' : ''}`,borderRadius:0,}}>
            {/* <ListItemIcon sx={{color:`${currentPath === '/'+item.path ? 'rgb(18, 134, 206);' : '#fff'}` }}>{item.icon}</ListItemIcon> */}
            <ListItemIcon sx={{color:`${currentPath === '/'+item.path ? '#272727' : '#fff'}` }}>{item.icon}</ListItemIcon>
            <ListItemText  primary={item.text} />
          </ListItem>
         </Link>
          
        )
      ))}
    </List>
    </Box>
    </Box>
    </>
  )
}

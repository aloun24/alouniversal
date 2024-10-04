
import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "./components/navbar/page";
// import Sidebar from "./components/sidebar/page";
import { Box, Button } from "@mui/material";
import React, { useState } from 'react';

import Sidebar from "./components/sidebar/page";
import Navbar from "./components/navbar/page";
import { SidebarProvider } from "./context/SidebarContext";
import { positions } from "@mui/system";
// import { SidebarProvider } from "./context/SidebarContext";
// import Middleware from "./middleware/page";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 

  
  return (
    <html lang="en">
      {/* <Middleware/> */}
      
       <SidebarProvider>
        <body>
        <Box   sx={{display: 'flex', justifyContent: 'space-between', width:"100%",
          
          bgcolor: '#fff',
          borderRadius: 1,
          overflow:"hidden"
          }}>
        <Box >
       
        <Sidebar />
        
        
      </Box>


      <Box className="right_side" sx={{ flexDirection: 'column',width:"100%" ,p:0}}>
        <Box  sx={{position:'fixed',width:'100%', }}>
        
        <Navbar />
        
        </Box>
        
        <Box sx={{minHeight:"100vh",padding:'20px',background:'#fff',paddingTop:'80px'}}>
       
      
        {children}
        
        </Box>
      </Box>



      </Box>
      
        </body>
     
        </SidebarProvider>
    </html>
  );
}


"use client"
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface SidebarContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  // const [isOpen, setIsOpen] = useState(() => {
  //   const storedOpen = localStorage.getItem('isOpen');
  //   return storedOpen ? JSON.parse(storedOpen) : false;
  // });

  // useEffect(() => {
  //   console.log('Setting isOpen:', isOpen);
  //   localStorage.setItem('isOpen', JSON.stringify(isOpen));
  // }, [isOpen]);







  // const [isOpen, setIsOpen] = useState(() => {
    
  //   const storedOpen = localStorage.getItem('isOpen');
  //   return storedOpen ? JSON.parse(storedOpen) : false;
  // });

  // useEffect(() => {
  //   localStorage.setItem('isOpen', JSON.stringify(isOpen));
  // }, [isOpen]);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {  
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

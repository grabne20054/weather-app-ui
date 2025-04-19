"use client";
import { useState } from "react";
import {Navbar} from "./navbar";
import {Sidebar} from "./sidebar";

interface NavigationProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Navigation = ({theme, toggleTheme}: NavigationProps) => 
{
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme}/>
    </>
  );
};
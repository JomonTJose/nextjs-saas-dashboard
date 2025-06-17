'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import {ThemeProvider as NextThemesProvider} from "next-themes";

const  ThemeProvider=({children, ...props}) =>{
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export default ThemeProvider
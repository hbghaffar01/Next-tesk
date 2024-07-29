'use client';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';

export function StyledRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
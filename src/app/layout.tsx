import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { StyledRoot } from './StyledRoot';
import Navbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Navbar />
          <StyledRoot>{children}</StyledRoot>
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
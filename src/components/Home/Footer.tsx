import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Container } from '@mui/material';

export default function Footer() {
    return (
        <Box sx={{ position: 'sticky', bottom: 0, width: '100%' }}>
            <AppBar position="static" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <Container>
                        <Typography variant="body2" color="text.white" align="center" sx={{ flexGrow: 1 }}>
                            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                React App Task
                            </Link>
                        </Typography>
                        <Typography variant="body2" color="text.white" align="center">
                            &copy; {new Date().getFullYear()} <strong>Haseeb</strong> All rights reserved.
                        </Typography>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

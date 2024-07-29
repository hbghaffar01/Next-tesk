import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link'

export default function ButtonAppBar() {
    return (
        <Box sx={{ position: 'sticky', top: 0, width: '100%' }}>
            <AppBar position="static" sx={{ top: 'auto', top: 0 }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link href="/">
                            Home
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

import { Box, CssBaseline, Toolbar } from '@mui/material';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const drawerWidth = 240;

const Layout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header />
            <Sidebar />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    minHeight: '100vh',
                    bgcolor: 'background.default',
                }}
            >
                <Toolbar /> {/* Placeholder for AppBar height */}
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;

import { AppBar, Toolbar, Typography, IconButton, InputBase, Box, Avatar, Badge, Breadcrumbs, Link } from '@mui/material';
import { Search, NotificationsOutlined, SettingsOutlined, DateRange } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

const drawerWidth = 240;

const Header = () => {
    const location = useLocation();

    return (
        <AppBar
            position="fixed"
            color="inherit" // Keep it light or transparent
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                boxShadow: 'none',
                borderBottom: '1px solid #f0f0f0',
                zIndex: (theme) => theme.zIndex.drawer + 1,
                bgcolor: '#ffffff'
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', minHeight: 70 }}>
                {/* Search Bar - moved to left as per screenshot */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        border: '1px solid #e0e0e0',
                        borderRadius: 1,
                        px: 1.5,
                        py: 0.5,
                        width: { xs: '150px', sm: '300px' },
                        height: 40
                    }}
                >
                    <InputBase placeholder="Search" sx={{ width: '100%', fontSize: '0.9rem' }} />
                    <Search sx={{ color: '#9e9e9e', fontSize: 20 }} />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    {/* Theme Toggle Placeholder */}
                    <Box sx={{ display: 'flex', border: '1px solid #e0e0e0', borderRadius: 1, p: 0.5, alignItems: 'center' }}>
                        <Box sx={{ bgcolor: '#00C853', borderRadius: 0.5, width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <SettingsOutlined sx={{ color: '#fff', fontSize: 16 }} />
                            {/* Actually using Sun icon in real app, but using Settings as placeholder for Light Mode based on available imports or close match */}
                        </Box>
                        <Box sx={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <NotificationsOutlined sx={{ color: '#9e9e9e', fontSize: 16, transform: 'rotate(180deg)' }} />
                            {/* Moon placeholder */}
                        </Box>
                    </Box>

                    {/* Notification Icon */}
                    <IconButton size="small" sx={{ border: '1px solid #e0e0e0', borderRadius: 1, width: 36, height: 36 }}>
                        <Badge badgeContent={4} color="error" sx={{ '& .MuiBadge-badge': { fontSize: 9, height: 14, minWidth: 14 } }}>
                            <NotificationsOutlined sx={{ fontSize: 20, color: '#424242' }} />
                        </Badge>
                    </IconButton>

                    {/* Messages Icon (using Settings as placeholder or DateRange if specific icon not imported yet) */}
                    <IconButton size="small" sx={{ border: '1px solid #e0e0e0', borderRadius: 1, width: 36, height: 36 }}>
                        <Badge badgeContent={10} color="error" sx={{ '& .MuiBadge-badge': { fontSize: 9, height: 14, minWidth: 14 } }}>
                            <NotificationsOutlined sx={{ fontSize: 20, color: '#424242' }} />
                            {/* Should be ChatBubbleOutline but using what is available or adding import */}
                        </Badge>
                    </IconButton>

                    {/* Profile Avatar */}
                    <Avatar alt="Admin User" src="/static/images/avatar/1.jpg" sx={{ width: 36, height: 36, bgcolor: '#fce4ec', borderRadius: 1 }}>
                        <img src="https://mui.com/static/images/avatar/2.jpg" alt="User" style={{ width: '100%', height: '100%' }} />
                    </Avatar>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

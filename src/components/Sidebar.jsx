import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Divider, Toolbar } from '@mui/material';
import {
    DashboardOutlined,
    BadgeOutlined,
    AdminPanelSettingsOutlined,
    GroupOutlined,
    DescriptionOutlined,
    LocalOfferOutlined,
    SettingsOutlined,
    AssessmentOutlined,
    SupportAgentOutlined,
    AccountCircleOutlined,
    Security
} from '@mui/icons-material';

const drawerWidth = 240;

const menuItems = [
    { text: 'Dashboard', icon: <DashboardOutlined />, path: '/' },
    { text: 'Role', icon: <BadgeOutlined />, path: '/role' },
    { text: 'Admin', icon: <AdminPanelSettingsOutlined />, path: '/admin' },
    { text: 'Users', icon: <GroupOutlined />, path: '/users' },
    { text: 'Content', icon: <DescriptionOutlined />, path: '/content' },
    { text: 'Coupons', icon: <LocalOfferOutlined />, path: '/coupons' },
    { text: 'Operations', icon: <SettingsOutlined />, path: '/operations' },
    { text: 'Reports', icon: <AssessmentOutlined />, path: '/reports' },
    { text: 'Support', icon: <SupportAgentOutlined />, path: '/support' },
    { text: 'Account', icon: <AccountCircleOutlined />, path: '/account' },
];

export default function Sidebar() {
    const location = useLocation();

    const drawerContent = (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Toolbar sx={{ display: 'flex', alignItems: 'center', px: 2, minHeight: 64 }}>
                <Security color="primary" sx={{ mr: 1, fontSize: 32 }} />
                <Box>
                    <Typography variant="subtitle1" noWrap component="div" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                        Suraksha
                    </Typography>
                    <Typography variant="caption" noWrap component="div" color="text.secondary" sx={{ lineHeight: 1 }}>
                        EMI Locker
                    </Typography>
                </Box>
            </Toolbar>
            <Divider />
            <List component="nav" sx={{ px: 2, py: 2 }}>
                {menuItems.map((item) => (
                    <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
                        <ListItemButton
                            component={NavLink}
                            to={item.path}
                            selected={location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path))}
                            sx={{
                                borderRadius: 2,
                                color: 'text.secondary',
                                '&.active, &.Mui-selected': {
                                    bgcolor: 'primary.main',
                                    color: 'primary.contrastText',
                                    '&:hover': {
                                        bgcolor: 'primary.dark',
                                    },
                                    '& .MuiListItemIcon-root': {
                                        color: 'inherit',
                                    },
                                },
                                '&:hover': {
                                    bgcolor: 'action.hover',
                                }
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.text}
                                primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ p: 2 }}>
                <Typography variant="caption" color="text.secondary" align="center" display="block">
                    v1.0.0
                </Typography>
            </Box>
        </Box>
    );

    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            {/* Permanent drawer for desktop */}
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        borderRight: '1px solid rgba(0, 0, 0, 0.08)',
                        backgroundColor: 'background.paper'
                    },
                }}
                open
            >
                {drawerContent}
            </Drawer>
        </Box>
    );
}

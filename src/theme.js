import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Or a custom primary color if specified
        },
        secondary: {
            main: '#dc004e',
        },
        background: {
            default: '#f4f6f8', // Soft background
            paper: '#ffffff',
        },
        text: {
            primary: '#2d3748',
            secondary: '#718096',
        },
    },
    typography: {
        fontFamily: [
            'Inter',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
        h1: { fontWeight: 600 },
        h2: { fontWeight: 600 },
        h3: { fontWeight: 600 },
        h4: { fontWeight: 600 },
        h5: { fontWeight: 600 },
        h6: { fontWeight: 600 },
        subtitle1: { fontWeight: 500 },
        subtitle2: { fontWeight: 500 },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 8,
                    fontWeight: 600,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)', // Subtle shadow
                },
                rounded: {
                    borderRadius: 12,
                },
                elevation1: {
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                },
                elevation2: {
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
                }
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    '&.Mui-selected': {
                        backgroundColor: 'rgba(25, 118, 210, 0.08)',
                        '&:hover': {
                            backgroundColor: 'rgba(25, 118, 210, 0.12)',
                        },
                    },
                },
            },
        },
    },
});

export default theme;

import { Box, Typography } from '@mui/material';

const ComingSoon = () => {
    return (
        <Box
            sx={{
                height: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}
        >
            <Typography variant="h1" sx={{ fontSize: '3rem', fontWeight: 800, mb: 2 }}>
                Coming Soon 🚀
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
                This page is under construction.
            </Typography>
        </Box>
    );
};

export default ComingSoon;

import { Paper, Box, Typography } from '@mui/material';

const ChartCard = ({ title, children, action }) => {
    return (
        <Paper sx={{ p: 3, height: 400, borderRadius: 3, boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, alignItems: 'center' }}>
                <Typography variant="h6" fontWeight="bold">{title}</Typography>
                {action}
            </Box>
            <Box sx={{ height: 'calc(100% - 40px)', width: '100%' }}>
                {children}
            </Box>
        </Paper>
    );
};

export default ChartCard;

import { Card as MuiCard, CardContent, Typography, Box, Stack } from '@mui/material';
import { TrendingUp, TrendingDown, ArrowForwardIos } from '@mui/icons-material';

/**
 * Reusable Card Component
 * @param {string} title - The title of the card
 * @param {string|number} value - The main value (count)
 * @param {number} trend - Percentage change (positive or negative)
 * @param {ReactNode} icon - Optional icon
 * @param {string} type - 'role' or 'business' or 'simple'
 */
const Card = ({ title, value, trend, icon, type = 'simple', footerText }) => {
    const isPositive = trend >= 0;

    if (type === 'role') {
        return (
            <MuiCard elevation={0} sx={{ height: '100%', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 3 }}>
                <CardContent sx={{ pb: '16px !important' }}>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                        {title}
                    </Typography>
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
                        <Stack direction="row" alignItems="baseline" spacing={0.5}>
                            <Typography variant="h4" fontWeight="bold">
                                {value}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                Total
                            </Typography>
                        </Stack>
                        {trend !== undefined && (
                            <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: isPositive ? 'success.main' : 'error.main' }}>
                                {isPositive ? <TrendingUp fontSize="small" /> : <TrendingDown fontSize="small" />}
                                <Typography variant="caption" fontWeight="bold">
                                    {Math.abs(trend)}%
                                </Typography>
                            </Stack>
                        )}
                    </Stack>
                </CardContent>
            </MuiCard>
        );
    }

    if (type === 'business') {
        return (
            <MuiCard elevation={0} sx={{ height: '100%', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 3 }}>
                <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: '16px !important' }}>
                    <Box>
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                            {title}
                        </Typography>
                        <Stack direction="row" alignItems="baseline" spacing={0.5}>
                            <Typography variant="h4" fontWeight="bold">
                                {value}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {footerText || 'Total'}
                            </Typography>
                        </Stack>
                    </Box>
                    <Box
                        sx={{
                            width: 56,
                            height: 56,
                            borderRadius: '12px',
                            bgcolor: 'action.hover',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'primary.main'
                        }}
                    >
                        {icon}
                    </Box>
                </CardContent>
            </MuiCard>
        )
    }

    return (
        <MuiCard elevation={0} sx={{ height: '100%', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 3 }}>
            <CardContent>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="h4">{value}</Typography>
            </CardContent>
        </MuiCard>
    );
};

export default Card;

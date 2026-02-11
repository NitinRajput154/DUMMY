import { Box, Typography, Paper, Grid, Select, MenuItem, FormControl, IconButton } from '@mui/material';
import {
    TrendingUp,
    TrendingDown,
    CalendarToday,
    Refresh, // Used for refresh button
    Person,
    Lock,
    LockOpen,
    DeleteOutline,
    Smartphone,
    MoreVert // For menu dots if needed
} from '@mui/icons-material';

// --- Styled Components / Sub-Components ---

const SectionHeader = ({ title, showSelect = true, selectValue = 30, onSelectChange }) => (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem', color: '#1a1a1a' }}>
            {title}
        </Typography>
        {showSelect && (
            <FormControl size="small" sx={{ minWidth: 120 }}>
                <Select
                    value={selectValue}
                    // onChange={onSelectChange} // Placeholder
                    displayEmpty
                    sx={{
                        height: 32,
                        fontSize: '0.8125rem',
                        backgroundColor: '#fff',
                        '& .MuiOutlinedInput-notchedOutline': { borderColor: '#e0e0e0' },
                        '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#c0c0c0' },
                    }}
                >
                    <MenuItem value={30}>Last 30 days</MenuItem>
                    <MenuItem value={7}>Last 7 days</MenuItem>
                    <MenuItem value="today">Today</MenuItem>
                </Select>
            </FormControl>
        )}
    </Box>
);

// const RoleCard = ({ title, value, label = "Total", trend, trendType }) => {
//     const isPositive = trendType === 'up';
//     return (
//         <Paper elevation={0} sx={{ p: 2.5, border: '1px solid #f0f0f0', borderRadius: 3, height: '100%', position: 'relative', height: 105, width: 201, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//             <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '0.875rem', color: '#4a4a4a' }}>
//                 {title}
//             </Typography>

//             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mt: 2 }}>
//                 <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
//                     <Typography variant="h3" sx={{ fontWeight: 600, fontSize: '2rem', color: '#1a1a1a' }}>
//                         {value}
//                     </Typography>
//                     <Typography variant="caption" sx={{ fontSize: '0.75rem', color: '#9e9e9e', fontWeight: 500 }}>
//                         {label}
//                     </Typography>
//                 </Box>

//                 <Box sx={{ display: 'flex', alignItems: 'center', color: isPositive ? '#00C853' : '#FF3D00' }}>
//                     {isPositive ? <TrendingUp sx={{ fontSize: '1.2rem' }} /> : <TrendingDown sx={{ fontSize: '1.2rem' }} />}
//                     <Typography variant="caption" sx={{ fontWeight: 700, ml: 0.5, fontSize: '0.8rem' }}>
//                         {trend}%
//                     </Typography>
//                 </Box>
//             </Box>
//         </Paper>
//     );
// };
const RoleCard = ({ title, count, trend, trendUp }) => {
    return (
        <Box
            sx={{
                p: 2.5,
                bgcolor: '#fff',
                borderRadius: 2,
                border: '1px solid #f0f0f0',
                height: '100%',
                minHeight: 140,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    color: '#4a4a4a',
                    mb: 2,
                }}
            >
                {title}
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            fontSize: '2.5rem',
                            color: '#1a1a1a',
                            lineHeight: 1,
                            height: 80,
                            width: 80,
                        }}
                    >
                        {count}
                    </Typography>
                    <Typography
                        variant="caption"
                        sx={{
                            fontSize: '0.75rem',
                            color: '#9e9e9e',
                            fontWeight: 500,
                        }}
                    >
                        Total
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        color: trendUp ? '#00C853' : '#FF3D00',
                    }}
                >
                    {trendUp ? (
                        <TrendingUp sx={{ fontSize: '1.2rem' }} />
                    ) : (
                        <TrendingDown sx={{ fontSize: '1.2rem' }} />
                    )}
                    <Typography
                        variant="caption"
                        sx={{
                            fontWeight: 700,
                            fontSize: '0.875rem',
                        }}
                    >
                        {trend}%
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

const StatBlock = ({ label, count, subLabel, icon: Icon, color }) => (
    <Box sx={{
        flex: 1,
        bgcolor: '#f8f9fa',
        borderRadius: 4,
        p: 2,
        position: 'relative',
        overflow: 'hidden',
        minHeight: 110,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }}>
        <Typography variant="caption" sx={{ color: color, fontWeight: 700, fontSize: '0.85rem', mb: 1.5, display: 'block' }}>
            {label}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5, zIndex: 2, position: 'relative' }}>
            <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '1.75rem', color: '#1a1a1a' }}>
                {count}
            </Typography>
            <Typography variant="caption" sx={{ fontSize: '0.75rem', color: '#616161' }}>
                {subLabel}
            </Typography>
        </Box>
        {/* Watermark Icon */}
        <Box sx={{ position: 'absolute', right: -15, bottom: -15, opacity: 0.08, zIndex: 1, pointerEvents: 'none' }}>
            <Icon sx={{ fontSize: 100, color: '#000' }} />
        </Box>
    </Box>
);

const DualStatRow = ({ title, proCount, proSub, plusCount, plusSub, icon }) => (
    <Box sx={{ mb: 4, width: 201, height: 105 }}>
        <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 600, fontSize: '0.95rem', color: '#1a1a1a' }}>
            {title}
        </Typography>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <StatBlock
                    label="Pro"
                    count={proCount}
                    subLabel={proSub}
                    icon={icon}
                    color="#2979ff" // Blue
                />
            </Grid>
            <Grid item xs={6}>
                <StatBlock
                    label="Plus"
                    count={plusCount}
                    subLabel={plusSub}
                    icon={icon}
                    color="#651fff" // Deep Purple/Blue
                />
            </Grid>
        </Grid>
    </Box>
);

const DateRangePicker = () => (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: '#fff',
            border: '1px solid #e0e0e0',
            borderRadius: 2,
            px: 2,
            py: 0.8,
            boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
        }}>
            <CalendarToday sx={{ fontSize: 16, color: '#757575', mr: 1 }} />
            <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '0.85rem', color: '#424242' }}>
                23 May 2025 - 30 May 2025
            </Typography>
        </Box>
        <IconButton sx={{ border: '1px solid #e0e0e0', borderRadius: 2, bgcolor: '#fff', width: 36, height: 36 }} size="small">
            <Refresh fontSize="small" sx={{ fontSize: 18 }} />
        </IconButton>
        <IconButton sx={{ border: '1px solid #e0e0e0', borderRadius: 2, bgcolor: '#fff', width: 36, height: 36 }} size="small">
            <CalendarToday fontSize="small" sx={{ fontSize: 18 }} />
        </IconButton>
    </Box>
);


const Dashboard = () => {
    return (
        <Box sx={{ flexGrow: 1, p: 0 }}>
            {/* Page Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#FF3D00', fontSize: '1.5rem' }}>
                    Admin Overview
                </Typography>
                <DateRangePicker />
            </Box>

            <Grid container spacing={3}>
                {/* LEFT COLUMN - Role Overview & Today's Activity */}
                <Grid item xs={12} lg={7} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>

                    {/* Role Overview */}
                    <Paper elevation={0} sx={{ p: 3, borderRadius: 3, border: '1px solid #f0f0f0' }}>
                        <SectionHeader title="Role Overview" />
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <RoleCard title="Super Distributor" value={75} trend={8} trendType="up" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <RoleCard title="Distributor" value={65} trend={8} trendType="up" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <RoleCard title="TSM" value={39} trend={8} trendType="down" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <RoleCard title="Seller" value={21} trend={8} trendType="down" />
                            </Grid>
                        </Grid>
                    </Paper>

                    {/* Today's Activity */}
                    <Paper elevation={0} sx={{ p: 3, borderRadius: 3, border: '1px solid #f0f0f0', flexGrow: 1 }}>
                        <SectionHeader title="Today's Activity" selectValue="today" />

                        <DualStatRow
                            title="New Users"
                            proCount="26" proSub="New"
                            plusCount="65" plusSub="New"
                            icon={Person}
                        />

                        <DualStatRow
                            title="Pending Setup"
                            proCount="26" proSub="Pending"
                            plusCount="65" plusSub="Pending"
                            icon={Smartphone}
                        />
                    </Paper>

                </Grid>

                {/* RIGHT COLUMN - Business Overview */}
                <Grid item xs={12} lg={5}>
                    <Paper elevation={0} sx={{ p: 3, borderRadius: 3, border: '1px solid #f0f0f0', height: '100%', width: '100%' }}>
                        <SectionHeader title="Business Overview" />

                        <DualStatRow
                            title="Total Users"
                            proCount="200" proSub="Total"
                            plusCount="400" plusSub="Total"
                            icon={Person}
                        />

                        <DualStatRow
                            title="Locked Users"
                            proCount="45" proSub="Locked"
                            plusCount="16" plusSub="Locked"
                            icon={Lock}
                        />

                        <DualStatRow
                            title="Unlocked Users"
                            proCount="75" proSub="Unlocked"
                            plusCount="01" plusSub="Unlocked"
                            icon={LockOpen}
                        />

                        <DualStatRow
                            title="Removed User"
                            proCount="26" proSub="Removed"
                            plusCount="65" plusSub="Removed"
                            icon={DeleteOutline}
                        />

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Secondary Key</Typography>
                            <IconButton size="small"><MoreVert fontSize="small" /></IconButton>
                        </Box>
                    </Paper>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Dashboard;

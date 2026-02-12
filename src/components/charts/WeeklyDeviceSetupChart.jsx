import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const data = [
    { name: 'Jan', value: 800 },
    { name: 'Feb', value: 3200 },
    { name: 'Mar', value: 1600 },
    { name: 'Apr', value: 3200 },
    { name: 'May', value: 3800 },
    { name: 'Jun', value: 2400 },
    { name: 'Jul', value: 4200 },
    { name: 'Aug', value: 2400 },
    { name: 'Sep', value: 4800 },
    { name: 'Oct', value: 3200 },
    { name: 'Nov', value: 3800 },
    { name: 'Dec', value: 1200 },
];

const WeeklyDeviceSetupChart = () => {
    const { darkMode } = useTheme();

    return (
        <div className="bg-white dark:bg-secondary-900 p-6 rounded-2xl border border-secondary-100 dark:border-secondary-800 w-full mb-6 transition-colors">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-base font-bold text-secondary-900 dark:text-secondary-100">Weekly Device Setup</h2>
                <div className="flex gap-3">
                    <div className="relative">
                        <select className="appearance-none bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-lg px-4 py-2 pr-8 text-sm text-secondary-800 dark:text-secondary-200 font-medium focus:outline-none cursor-pointer hover:border-secondary-300 dark:hover:border-secondary-600 transition-colors">
                            <option>Sales Pipeline</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-500 pointer-events-none" />
                    </div>
                    <div className="relative">
                        <select className="appearance-none bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-lg px-4 py-2 pr-8 text-sm text-secondary-800 dark:text-secondary-200 font-medium focus:outline-none cursor-pointer hover:border-secondary-300 dark:hover:border-secondary-600 transition-colors">
                            <option>Last 30 Days</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-500 pointer-events-none" />
                    </div>
                </div>
            </div>

            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={darkMode ? '#333' : '#f0f0f0'} />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: darkMode ? '#71717a' : '#9e9e9e', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: darkMode ? '#71717a' : '#9e9e9e', fontSize: 12 }}
                            tickFormatter={(value) => `${value / 1000}k`}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
                                borderRadius: '12px',
                                border: darkMode ? '1px solid #333' : 'none',
                                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                                color: darkMode ? '#f4f4f5' : '#18181b'
                            }}
                            itemStyle={{ color: darkMode ? '#f4f4f5' : '#18181b' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#6366f1"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorValue)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default WeeklyDeviceSetupChart;

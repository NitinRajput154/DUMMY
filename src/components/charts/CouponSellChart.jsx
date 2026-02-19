import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const data = [
    { name: 'Jan', value: 1200 },
    { name: 'Feb', value: 2100 },
    { name: 'Mar', value: 1400 },
    { name: 'Apr', value: 4100 },
    { name: 'May', value: 1900 },
    { name: 'Jun', value: 3100 },
    { name: 'Jul', value: 1100 },
    { name: 'Aug', value: 5200 },
    { name: 'Sep', value: 2400 },
    { name: 'Oct', value: 3200 },
    { name: 'Nov', value: 2000 },
    { name: 'Dec', value: 2500 },
];

const CouponSellChart = () => {
    const { darkMode } = useTheme();

    return (
        <div className="bg-white dark:bg-secondary-900 rounded-2xl border border-secondary-100 dark:border-secondary-800 w-full mb-6 transition-colors shadow-sm overflow-hidden pb-6">
            <div className="bg-[#A594F9] px-6 py-4 flex justify-between items-center rounded-t-2xl mb-8">
                <h2 className="text-base font-bold text-[#4D35F9]">Coupon sell</h2>
                <div className="flex gap-3">
                    <div className="relative">
                        <select className="appearance-none bg-white/90 border-none rounded-full px-6 py-1.5 pr-10 text-xs text-secondary-800 font-bold focus:outline-none cursor-pointer transition-colors">
                            <option>Sales Pipeline</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-500 pointer-events-none" />
                    </div>
                    <div className="relative">
                        <select className="appearance-none bg-white/90 border-none rounded-full px-6 py-1.5 pr-10 text-xs text-secondary-800 font-bold focus:outline-none cursor-pointer transition-colors">
                            <option>Last 3 months</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-500 pointer-events-none" />
                    </div>
                </div>
            </div>

            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
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
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#FFA726"
                            strokeWidth={3}
                            dot={{ fill: '#FFA726', strokeWidth: 2, r: 5 }}
                            activeDot={{ r: 7 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default CouponSellChart;

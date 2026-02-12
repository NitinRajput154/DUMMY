import React from 'react';
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
    return (
        <div className="bg-white p-6 rounded-2xl border border-secondary-100 w-full mb-6">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-base font-bold text-secondary-900">Weekly Device Setup</h2>
                <div className="flex gap-3">
                    <div className="relative">
                        <select className="appearance-none bg-white border border-secondary-200 rounded-lg px-4 py-2 pr-8 text-sm text-secondary-800 font-medium focus:outline-none cursor-pointer hover:border-secondary-300 transition-colors">
                            <option>Sales Pipeline</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-500 pointer-events-none" />
                    </div>
                    <div className="relative">
                        <select className="appearance-none bg-white border border-secondary-200 rounded-lg px-4 py-2 pr-8 text-sm text-secondary-800 font-medium focus:outline-none cursor-pointer hover:border-secondary-300 transition-colors">
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
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9e9e9e', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9e9e9e', fontSize: 12 }}
                            tickFormatter={(value) => `${value / 1000}k`}
                        />
                        <Tooltip
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
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

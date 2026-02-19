import { useState } from 'react';
import {
    Calendar,
    RefreshCw,
    TrendingUp,
    TrendingDown,
    User,
    Lock,
    Unlock,
    Trash2,
    Smartphone,
    MoreVertical,
    ChevronDown
} from 'lucide-react';
import CouponSellChart from '../../components/charts/CouponSellChart';
import WeeklyDeviceSetupChart from '../../components/charts/WeeklyDeviceSetupChart';

// Role Card Component
const RoleCard = ({ title, count, trend, trendUp }) => {
    return (
        <div className="bg-white dark:bg-secondary-900 p-6 rounded-2xl border border-secondary-100 dark:border-secondary-800 flex flex-col justify-between transition-all hover:shadow-sm">
            <p className="text-sm font-semibold text-secondary-900 dark:text-secondary-100 mb-6">{title}</p>

            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <h3 className="text-4xl font-bold text-secondary-900 dark:text-secondary-100">
                        {count}
                    </h3>
                    <span className="text-xs text-secondary-400 font-medium">Total</span>
                </div>

                <div className={`flex items-center gap-1 ${trendUp ? 'text-success' : 'text-error'}`}>
                    {trendUp ? (
                        <TrendingUp className="w-4 h-4" />
                    ) : (
                        <TrendingDown className="w-4 h-4" />
                    )}
                    <span className="text-xs font-bold">{trend}%</span>
                </div>
            </div>
        </div>
    );
};

// Stat Block Component with Background Icon
const StatBlock = ({ label, count, subLabel, icon: Icon, color }) => {
    return (
        <div className="relative bg-white dark:bg-secondary-800 rounded-xl p-6 flex flex-col justify-center border border-secondary-100 dark:border-secondary-700 transition-colors shadow-sm">
            <p className={`text-sm font-bold ${color} mb-6`}>
                {label}
            </p>
            <div className="flex items-center gap-2 relative">
                <h4 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">{count}</h4>
                <span className="text-xs text-secondary-400 font-medium">{subLabel}</span>
            </div>

            {/* Watermark Icon - Simple Profile-like Icon as in screenshot */}
            <div className="absolute right-4 bottom-4 opacity-10 pointer-events-none">
                <Icon className="w-16 h-16 text-secondary-400" strokeWidth={1} />
            </div>
        </div>
    );
};

// Dual Stat Row Component
const DualStatRow = ({ title, proCount, proSub, plusCount, plusSub, icon }) => {
    return (
        <div className="mb-8 last:mb-0 px-6">
            <h3 className="text-sm font-bold text-secondary-900 dark:text-secondary-100 mb-4">{title}</h3>
            <div className="grid grid-cols-2 gap-4">
                <StatBlock
                    label="Pro"
                    count={proCount}
                    subLabel={proSub}
                    icon={icon}
                    color="text-[#4D35F9]"
                />
                <StatBlock
                    label="Plus"
                    count={plusCount}
                    subLabel={plusSub}
                    icon={icon}
                    color="text-[#A594F9]"
                />
            </div>
        </div>
    );
};

// Section Header Component
const SectionHeader = ({ title, showSelect = true, selectValue = "30", onSelectChange }) => {
    return (
        <div className="bg-[#A594F9] px-6 py-4 flex justify-between items-center rounded-t-2xl">
            <h2 className="text-base font-bold text-[#4D35F9]">{title}</h2>

            {showSelect && (
                <div className="relative">
                    <select
                        value={selectValue}
                        onChange={onSelectChange}
                        className="appearance-none bg-white/90 border-none rounded-full px-6 py-1.5 pr-10 text-xs text-secondary-800 font-bold focus:outline-none cursor-pointer transition-colors"
                    >
                        <option value="30">Last 30 days</option>
                        <option value="7">Last 7 days</option>
                        <option value="today">Today</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-500 pointer-events-none" />
                </div>
            )}
        </div>
    );
};

// Date Range Picker Component
const DateRangePicker = () => {
    return (
        <div className="flex gap-2 items-center">
            <div className="flex items-center bg-white border border-secondary-200 rounded-lg px-4 py-1.5 shadow-sm">
                <Calendar className="w-4 h-4 text-secondary-500 mr-2" />
                <span className="text-xs font-bold text-secondary-800">
                    23 May 2025 - 30 May 2025
                </span>
            </div>
            <button className="bg-white border border-secondary-200 rounded-lg px-4 py-1.5 text-xs font-bold text-secondary-800 shadow-sm hover:bg-secondary-50 transition-colors">
                Export
            </button>
            <button className="bg-white border border-secondary-200 rounded-lg p-2 flex items-center justify-center shadow-sm hover:bg-secondary-50 transition-colors">
                <RefreshCw className="w-4 h-4 text-secondary-600" />
            </button>
        </div>
    );
};


// Main Dashboard Component
const Dashboard = () => {
    const [roleFilter, setRoleFilter] = useState("30");
    const [activityFilter, setActivityFilter] = useState("today");
    const [businessFilter, setBusinessFilter] = useState("30");

    return (
        <div className="flex-1 p-8 bg-secondary-50 dark:bg-secondary-950 space-y-8 min-h-screen">
            {/* Page Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-[#4D35F9]">Admin Overview</h1>
                <DateRangePicker />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* LEFT COLUMN - Role Overview & Today's Activity */}
                <div className="lg:col-span-7 flex flex-col gap-8">

                    {/* Role Overview */}
                    <div className="bg-white dark:bg-secondary-900 rounded-2xl border border-secondary-100 dark:border-secondary-800 shadow-sm overflow-hidden pb-8">
                        <SectionHeader
                            title="Role Overview"
                            selectValue={roleFilter}
                            onSelectChange={(e) => setRoleFilter(e.target.value)}
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-6">
                            <RoleCard title="Super Distributor" count={75} trend={8} trendUp={true} />
                            <RoleCard title="Distributor" count={65} trend={8} trendUp={true} />
                            <RoleCard title="TSM" count={39} trend={8} trendUp={false} />
                            <RoleCard title="Seller" count={21} trend={8} trendUp={false} />
                        </div>
                    </div>

                    {/* Today's Activity */}
                    <div className="bg-white dark:bg-secondary-900 rounded-2xl border border-secondary-100 dark:border-secondary-800 shadow-sm overflow-hidden pb-8">
                        <SectionHeader
                            title="Today's Activity"
                            selectValue={activityFilter}
                            onSelectChange={(e) => setActivityFilter(e.target.value)}
                        />

                        <div className="mt-8">
                            <DualStatRow
                                title="New Users"
                                proCount="26"
                                proSub="New"
                                plusCount="65"
                                plusSub="New"
                                icon={User}
                            />

                            <DualStatRow
                                title="Pending Setup"
                                proCount="26"
                                proSub="Pending"
                                plusCount="65"
                                plusSub="Pending"
                                icon={Smartphone}
                            />
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN - Business Overview */}
                <div className="lg:col-span-5">
                    <div className="bg-white dark:bg-secondary-900 rounded-2xl border border-secondary-100 dark:border-secondary-800 shadow-sm h-full overflow-hidden pb-8">
                        <SectionHeader
                            title="Business Overview"
                            selectValue={businessFilter}
                            onSelectChange={(e) => setBusinessFilter(e.target.value)}
                        />

                        <div className="mt-8">
                            <DualStatRow
                                title="Total Users"
                                proCount="200"
                                proSub="Total"
                                plusCount="400"
                                plusSub="Total"
                                icon={User}
                            />

                            <DualStatRow
                                title="Locked Users"
                                proCount="45"
                                proSub="Locked"
                                plusCount="16"
                                plusSub="Locked"
                                icon={Lock}
                            />

                            <DualStatRow
                                title="Unlocked Users"
                                proCount="75"
                                proSub="Unlocked"
                                plusCount="01"
                                plusSub="Unlocked"
                                icon={Unlock}
                            />

                            <DualStatRow
                                title="Removed User"
                                proCount="26"
                                proSub="Removed"
                                plusCount="65"
                                plusSub="Removed"
                                icon={Trash2}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 gap-6">
                <CouponSellChart />
                <WeeklyDeviceSetupChart />
            </div>
        </div>
    );
};

export default Dashboard;

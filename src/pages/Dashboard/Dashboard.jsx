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
        <div className="bg-white p-6 rounded-2xl border border-secondary-100 min-h-[140px] flex flex-col justify-between transition-all hover:shadow-card">
            <p className="text-sm font-medium text-secondary-700 mb-2">{title}</p>

            <div className="flex justify-between items-end">
                <div className="flex items-baseline gap-2">
                    <h3 className="text-5xl font-bold text-secondary-900 leading-none">
                        {count}
                    </h3>
                    <span className="text-xs text-secondary-400 font-medium">Total</span>
                </div>

                <div className={`flex items-center gap-1 ${trendUp ? 'text-success' : 'text-error'}`}>
                    {trendUp ? (
                        <TrendingUp className="w-5 h-5" />
                    ) : (
                        <TrendingDown className="w-5 h-5" />
                    )}
                    <span className="text-sm font-bold">{trend}%</span>
                </div>
            </div>
        </div>
    );
};

// Stat Block Component with Background Icon
const StatBlock = ({ label, count, subLabel, icon: Icon, color }) => {
    return (
        <div className="relative bg-secondary-50 rounded-2xl p-4 min-h-[110px] flex flex-col justify-center overflow-hidden">
            <p className={`text-xs font-bold ${color} mb-3 uppercase tracking-wide z-10 relative`}>
                {label}
            </p>
            <div className="flex items-baseline gap-1 z-10 relative">
                <h4 className="text-3xl font-semibold text-secondary-900">{count}</h4>
                <span className="text-xs text-secondary-600">{subLabel}</span>
            </div>

            {/* Watermark Icon */}
            <div className="absolute -right-4 -bottom-4 opacity-[0.08] pointer-events-none">
                <Icon className="w-24 h-24 text-black" strokeWidth={1.5} />
            </div>
        </div>
    );
};

// Dual Stat Row Component
const DualStatRow = ({ title, proCount, proSub, plusCount, plusSub, icon }) => {
    return (
        <div className="mb-6">
            <h3 className="text-base font-semibold text-secondary-900 mb-3">{title}</h3>
            <div className="grid grid-cols-2 gap-4">
                <StatBlock
                    label="Pro"
                    count={proCount}
                    subLabel={proSub}
                    icon={icon}
                    color="text-blue-primary"
                />
                <StatBlock
                    label="Plus"
                    count={plusCount}
                    subLabel={plusSub}
                    icon={icon}
                    color="text-blue-deep"
                />
            </div>
        </div>
    );
};

// Section Header Component
const SectionHeader = ({ title, showSelect = true, selectValue = "30", onSelectChange }) => {
    return (
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-base font-bold text-secondary-900">{title}</h2>

            {showSelect && (
                <div className="relative">
                    <select
                        value={selectValue}
                        onChange={onSelectChange}
                        className="appearance-none bg-white border border-secondary-200 rounded-lg px-4 py-2 pr-8 text-sm text-secondary-800 font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer hover:border-secondary-300 transition-colors"
                    >
                        <option value="30">Last 30 days</option>
                        <option value="7">Last 7 days</option>
                        <option value="today">Today</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-500 pointer-events-none" />
                </div>
            )}
        </div>
    );
};

// Date Range Picker Component
const DateRangePicker = () => {
    return (
        <div className="flex gap-2 items-center">
            <div className="flex items-center bg-white border border-secondary-200 rounded-lg px-4 py-2 shadow-sm">
                <Calendar className="w-4 h-4 text-secondary-500 mr-2" />
                <span className="text-sm font-medium text-secondary-800">
                    23 May 2025 - 30 May 2025
                </span>
            </div>
            <button className="bg-white border border-secondary-200 rounded-lg p-2 w-9 h-9 flex items-center justify-center hover:bg-secondary-50 transition-colors">
                <RefreshCw className="w-4 h-4 text-secondary-600" />
            </button>
            <button className="bg-white border border-secondary-200 rounded-lg p-2 w-9 h-9 flex items-center justify-center hover:bg-secondary-50 transition-colors">
                <Calendar className="w-4 h-4 text-secondary-600" />
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
        <div className="flex-1 p-0 space-y-6">
            {/* Page Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-extrabold text-primary">Admin Overview</h1>
                <DateRangePicker />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* LEFT COLUMN - Role Overview & Today's Activity */}
                <div className="lg:col-span-7 flex flex-col gap-6">

                    {/* Role Overview */}
                    <div className="bg-white p-6 rounded-2xl border border-secondary-100">
                        <SectionHeader
                            title="Role Overview"
                            selectValue={roleFilter}
                            onSelectChange={(e) => setRoleFilter(e.target.value)}
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <RoleCard title="Super Distributor" count={75} trend={8} trendUp={true} />
                            <RoleCard title="Distributor" count={65} trend={8} trendUp={true} />
                            <RoleCard title="TSM" count={39} trend={8} trendUp={false} />
                            <RoleCard title="Seller" count={21} trend={8} trendUp={false} />
                        </div>
                    </div>

                    {/* Today's Activity */}
                    <div className="bg-white p-6 rounded-2xl border border-secondary-100 flex-1">
                        <SectionHeader
                            title="Today's Activity"
                            selectValue={activityFilter}
                            onSelectChange={(e) => setActivityFilter(e.target.value)}
                        />

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

                {/* RIGHT COLUMN - Business Overview */}
                <div className="lg:col-span-5">
                    <div className="bg-white p-6 rounded-2xl border border-secondary-100 h-full">
                        <SectionHeader
                            title="Business Overview"
                            selectValue={businessFilter}
                            onSelectChange={(e) => setBusinessFilter(e.target.value)}
                        />

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

                        <div className="flex justify-between items-center mt-4">
                            <h3 className="text-sm font-semibold text-secondary-900">Secondary Key</h3>
                            <button className="p-1 hover:bg-secondary-50 rounded transition-colors">
                                <MoreVertical className="w-5 h-5 text-secondary-500" />
                            </button>
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

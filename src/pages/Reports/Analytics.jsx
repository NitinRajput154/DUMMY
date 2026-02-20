import { useState } from "react";
import { Calendar } from "lucide-react";

// ─── Sub-Components ──────────────────────────────────────────────────────────

const ReportSection = ({ title, children, onSubmit }) => (
    <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">{title}</h2>
        <div className="flex items-end gap-4">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {children}
            </div>
            <button
                onClick={onSubmit}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-2.5 rounded-lg transition-colors shadow-sm whitespace-nowrap"
            >
                Submit
            </button>
        </div>
    </div>
);

const FormField = ({ label, children }) => (
    <div className="flex flex-col gap-1.5">
        {label && <label className="text-xs font-semibold text-gray-500">{label}</label>}
        {children}
    </div>
);

const DateInput = ({ value, onChange, placeholder }) => (
    <div className="relative group">
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all bg-white text-gray-700"
        />
        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-hover:text-indigo-400 transition-colors" />
    </div>
);

const SelectInput = ({ value, onChange, options, placeholder }) => (
    <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all bg-white text-gray-700 appearance-none cursor-pointer"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundPosition: 'right 0.75rem center',
            backgroundSize: '1rem',
            backgroundRepeat: 'no-repeat'
        }}
    >
        <option value="">{placeholder || "Select Option"}</option>
        {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
    </select>
);

// ─── Main Component ─────────────────────────────────────────────────────────

function Analytics() {
    const handleSumbit = (type) => {
        console.log(`Submitting ${type} report`);
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Page Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-4">
                <h1 className="text-2xl font-bold text-indigo-600 tracking-tight">Report</h1>
            </div>

            <div className="p-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-h-[80vh]">
                    {/* Inner Header */}
                    <div className="px-6 py-4 border-b border-gray-100">
                        <h2 className="text-xl font-bold text-indigo-600">Report</h2>
                    </div>

                    <div className="p-8 max-w-6xl">
                        {/* Closing Report */}
                        <ReportSection title="Closing Report" onSubmit={() => handleSumbit("Closing")}>
                            <FormField label="Select Role">
                                <SelectInput options={[
                                    { value: 'admin', label: 'Admin' },
                                    { value: 'seller', label: 'Seller' },
                                    { value: 'tsm', label: 'TSM' }
                                ]} />
                            </FormField>
                        </ReportSection>

                        {/* User Report */}
                        <ReportSection title="User Report" onSubmit={() => handleSumbit("User")}>
                            <FormField label="From date">
                                <DateInput placeholder="" />
                            </FormField>
                            <FormField label="To date">
                                <DateInput placeholder="" />
                            </FormField>
                        </ReportSection>

                        {/* Information Report */}
                        <ReportSection title="Information Report" onSubmit={() => handleSumbit("Information")}>
                            <FormField>
                                <SelectInput options={[]} />
                            </FormField>
                        </ReportSection>

                        {/* Accounting Report */}
                        <ReportSection title="Accounting Report" onSubmit={() => handleSumbit("Accounting")}>
                            <FormField>
                                <DateInput placeholder="" />
                            </FormField>
                            <FormField>
                                <DateInput placeholder="" />
                            </FormField>
                            <FormField>
                                <SelectInput options={[]} />
                            </FormField>
                        </ReportSection>

                        {/* TSM Report */}
                        <ReportSection title="TSM Report" onSubmit={() => handleSumbit("TSM")}>
                            <FormField label="From">
                                <DateInput placeholder="" />
                            </FormField>
                            <FormField label="To">
                                <DateInput placeholder="" />
                            </FormField>
                            <FormField label="Tsm">
                                <SelectInput options={[]} placeholder="Tsm" />
                            </FormField>
                            <FormField label="Plus">
                                <SelectInput options={[]} placeholder="Plus" />
                            </FormField>
                        </ReportSection>
                    </div>

                    {/* Footer copyright */}
                    <div className="text-center text-sm text-gray-400 py-8 border-t border-gray-50 mt-12">
                        2025 © Copyright <a href="#" className="text-indigo-400 hover:underline">Suraksha Pvt Ltd</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Analytics;

import {
    Calendar,
    RefreshCw,
    Filter,
    LayoutGrid,
    Edit3,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    ChevronDown
} from 'lucide-react';
import { useState } from 'react';

const adminData = [
    { id: 1, name: 'Rahul Sharma', role: 'Seller', email: 'rahul.sharma@example.com', number: '0000000000', status: 'Active' },
    { id: 2, name: 'Priya Verma', role: 'Seller', email: 'priya.verma@example.com', number: '1111111111', status: 'Inactive' },
    { id: 3, name: 'Anil Gupta', role: 'Super admin', email: 'anil.gupta@example.com', number: '2222222222', status: 'Active' },
    { id: 4, name: 'Sneha Patel', role: 'Seller', email: 'sneha.patel@example.com', number: '3333333333', status: 'Pending' },
    { id: 5, name: 'Vikram Singh', role: 'Seller', email: 'vikram.singh@example.com', number: '4444444444', status: 'Active' },
    { id: 6, name: 'Aisha Patel', role: 'Seller', email: 'aisha.patel@example.com', number: '5555555555', status: 'Inactive' },
    { id: 7, name: 'John Doe', role: 'Seller', email: 'john.doe@example.com', number: '6666666666', status: 'Active' },
    { id: 8, name: 'Maria Garcia', role: 'Seller', email: 'maria.garcia@example.com', number: '7777777777', status: 'Active' },
    { id: 9, name: 'Chen Wei', role: 'Seller', email: 'chen.wei@example.com', number: '8888888888', status: 'Inactive' },
    { id: 10, name: 'Fatima Khan', role: 'Seller', email: 'fatima.khan@example.com', number: '9999999999', status: 'Active' },
    { id: 11, name: 'Liam O\'Connor', role: 'Seller', email: 'liam.oconnor@example.com', number: '1010101010', status: 'Inactive' },
    { id: 12, name: 'Sofia Rossi', role: 'Seller', email: 'sofia.rossi@example.com', number: '2020202020', status: 'Active' },
];

const AdminHeader = () => (
    <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-extrabold text-primary">Admin</h1>
        <div className="flex gap-2 items-center">
            <div className="flex items-center bg-white border border-secondary-200 rounded-lg px-4 py-2 shadow-sm">
                <Calendar className="w-4 h-4 text-secondary-500 mr-2" />
                <span className="text-sm font-medium text-secondary-800">
                    23 May 2025 - 30 May 2025
                </span>
            </div>
            <button className="bg-white border border-secondary-200 rounded-lg p-2 hover:bg-secondary-50 transition-colors shadow-sm">
                <Filter className="w-4 h-4 text-secondary-600" />
            </button>
            <button className="bg-white border border-secondary-200 rounded-lg p-2 hover:bg-secondary-50 transition-colors shadow-sm">
                <RefreshCw className="w-4 h-4 text-secondary-600" />
            </button>
            <button className="bg-white border border-secondary-200 rounded-lg p-2 hover:bg-secondary-50 transition-colors shadow-sm">
                <LayoutGrid className="w-4 h-4 text-secondary-600" />
            </button>
        </div>
    </div>
);

const AdminTable = () => {
    return (
        <div className="bg-white rounded-2xl border border-secondary-100 overflow-hidden shadow-sm">
            <div className="p-4 border-b border-secondary-100 flex justify-between items-center bg-white">
                <h2 className="text-base font-bold text-secondary-900">Admin</h2>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-secondary-600">Show entities</span>
                    <div className="relative">
                        <select className="appearance-none bg-white border border-secondary-200 rounded-lg px-3 py-1 pr-8 text-sm text-secondary-800 font-medium focus:outline-none cursor-pointer hover:border-secondary-300 transition-colors">
                            <option>10</option>
                            <option>20</option>
                            <option>50</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-500 pointer-events-none" />
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-white border-b border-secondary-100">
                            <th className="px-6 py-4 text-center text-sm font-bold text-secondary-900 border-r border-secondary-50">Name</th>
                            <th className="px-6 py-4 text-center text-sm font-bold text-secondary-900 border-r border-secondary-50">Role Name</th>
                            <th className="px-6 py-4 text-center text-sm font-bold text-secondary-900 border-r border-secondary-50">Email id</th>
                            <th className="px-6 py-4 text-center text-sm font-bold text-secondary-900 border-r border-secondary-50">Number</th>
                            <th className="px-6 py-4 text-center text-sm font-bold text-secondary-900 border-r border-secondary-50">Status</th>
                            <th className="px-6 py-4 text-center text-sm font-bold text-secondary-900">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {adminData.map((item) => (
                            <tr key={item.id} className="hover:bg-secondary-50/50 transition-colors border-b border-secondary-50 last:border-b-0">
                                <td className="px-6 py-4 text-sm text-secondary-800 font-medium border-r border-secondary-50 text-center">
                                    {item.name}
                                </td>
                                <td className="px-6 py-4 text-sm text-secondary-700 border-r border-secondary-50 text-center">
                                    {item.role}
                                </td>
                                <td className="px-6 py-4 text-sm text-secondary-600 border-r border-secondary-50 text-center">
                                    {item.email}
                                </td>
                                <td className="px-6 py-4 text-sm text-secondary-600 border-r border-secondary-50 text-center">
                                    {item.number}
                                </td>
                                <td className="px-6 py-4 text-sm border-r border-secondary-50 text-center">
                                    <span className={`font-medium ${item.status === 'Active' ? 'text-success' :
                                            item.status === 'Pending' ? 'text-orange-500' :
                                                'text-secondary-400'
                                        }`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 flex justify-center">
                                    <button className="flex items-center gap-1.5 text-secondary-500 hover:text-secondary-900 transition-colors text-sm font-medium group">
                                        <Edit3 className="w-4 h-4 text-secondary-400 group-hover:text-secondary-700" />
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="p-4 border-t border-secondary-100 flex justify-end items-center bg-white">
                <div className="flex items-center gap-1">
                    <button className="p-2 text-secondary-400 hover:text-secondary-900 transition-colors">
                        <ChevronsLeft className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-secondary-400 hover:text-secondary-900 transition-colors">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button className="px-3 py-1 text-sm font-medium text-secondary-500 hover:text-secondary-900 transition-colors">
                        0
                    </button>
                    <button className="w-8 h-8 rounded bg-primary text-white text-sm font-bold flex items-center justify-center transition-all shadow-md">
                        1
                    </button>
                    <button className="px-3 py-1 text-sm font-medium text-secondary-500 hover:text-secondary-900 transition-colors">
                        2
                    </button>
                    <button className="p-2 text-secondary-600 hover:text-secondary-900 transition-colors">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-secondary-600 hover:text-secondary-900 transition-colors">
                        <ChevronsRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const Admin = () => {
    return (
        <div className="flex-1 p-0">
            <AdminHeader />
            <AdminTable />
        </div>
    );
};

export default Admin;

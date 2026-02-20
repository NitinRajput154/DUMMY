import { useState } from "react";

const initialData = [
    {
        id: "Dist2",
        name: "Alsha",
        address: "Sector 7 noida",
        username: "ai",
        email: "ai123@gmail.com",
        password: "Ai123",
        number: "9876543210",
        couponsUsed: 7541,
        couponsTotal: 100,
        status: "Active",
        role: "Super Distributor",
    },
    {
        id: "Dist3",
        name: "Rajesh",
        address: "Sector 12 noida",
        username: "rajesh99",
        email: "rajesh99@gmail.com",
        password: "Rajesh99",
        number: "9988776655",
        couponsUsed: 850,
        couponsTotal: 100,
        status: "Active",
        role: "Distributor",
    },
    {
        id: "Dist4",
        name: "Priya",
        address: "Sector 15 noida",
        username: "priya_p",
        email: "priya_p@gmail.com",
        password: "Priya21",
        number: "9123456789",
        couponsUsed: 650,
        couponsTotal: 100,
        status: "Inactive",
        role: "Regional Manager",
    },
    {
        id: "Dist5",
        name: "Sameer",
        address: "Sector 8 noida",
        username: "sameer1990",
        email: "sameer1990@gmail.com",
        password: "Sameer90",
        number: "8765432109",
        couponsUsed: 725,
        couponsTotal: 100,
        status: "Active",
        role: "Area Manager",
    },
];

const roleColors = {
    "Super Distributor": "bg-purple-600",
    Distributor: "bg-indigo-500",
    "Regional Manager": "bg-teal-500",
    "Area Manager": "bg-blue-500",
};

function CNFPage() {
    const [search, setSearch] = useState("");
    const [data] = useState(initialData);
    const [showEntities, setShowEntities] = useState(10);
    const [page, setPage] = useState(1);

    const filtered = data.filter(
        (d) =>
            d.name.toLowerCase().includes(search.toLowerCase()) ||
            d.id.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Top bar */}
            <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-purple-600 tracking-tight">CNF</h1>
                <div className="flex items-center gap-3">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors">
                        + Add
                    </button>
                    <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                        Export
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Filters bar */}
            <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between gap-4">
                <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" />
                    </svg>
                    <input
                        className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-purple-300"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 bg-white">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        23 May 2025 - 30 May 2025
                    </div>
                    <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Main content */}
            <div className="p-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Table header row */}
                    <div className="bg-[#A594F9] px-6 py-4 flex items-center justify-between">
                        <h2 className="text-purple-700 font-bold text-base">CNF List</h2>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600 font-medium">Show entities</span>
                            <div className="flex items-center gap-1 bg-purple-600 text-white text-sm font-semibold px-3 py-1.5 rounded-lg cursor-pointer select-none">
                                {showEntities}
                                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Column headers */}
                    <div className="grid grid-cols-[1.5fr_1.8fr_1.2fr_1.2fr_0.8fr_2fr] gap-4 px-6 py-3 border-b border-gray-100 bg-gray-50">
                        {["Business info", "Login info", "Number", "Coupons count", "Status", "Action"].map((h, i) => (
                            <div key={i} className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                {h}
                            </div>
                        ))}
                    </div>

                    {/* Rows */}
                    {filtered.map((row, idx) => (
                        <div
                            key={row.id}
                            className={`grid grid-cols-[1.5fr_1.8fr_1.2fr_1.2fr_0.8fr_2fr] gap-4 px-6 py-5 items-start ${idx !== filtered.length - 1 ? "border-b border-gray-100" : ""
                                } hover:bg-purple-50/30 transition-colors`}
                        >
                            {/* Business info */}
                            <div className="text-sm text-gray-700 space-y-0.5">
                                <div><span className="font-semibold text-gray-900">Sl no</span> : {row.id}</div>
                                <div><span className="font-semibold text-gray-900">Name</span> : {row.name}</div>
                                <div><span className="font-semibold text-gray-900">Address</span> : {row.address}</div>
                            </div>

                            {/* Login info */}
                            <div className="text-sm text-gray-700 space-y-0.5">
                                <div><span className="font-semibold text-gray-900">Username</span> : {row.username}</div>
                                <div><span className="font-semibold text-gray-900">Email</span> : {row.email}</div>
                                <div><span className="font-semibold text-gray-900">Password</span> : {row.password}</div>
                            </div>

                            {/* Number */}
                            <div className="text-sm text-gray-800 font-medium pt-0.5">{row.number}</div>

                            {/* Coupons */}
                            <div className="text-sm pt-0.5">
                                <div className="font-semibold text-gray-800">{row.couponsUsed} / {row.couponsTotal}</div>
                                <button className="text-gray-400 text-xs flex items-center gap-1 mt-1 hover:text-purple-500 transition-colors">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    Show History
                                </button>
                            </div>

                            {/* Status */}
                            <div className="pt-0.5">
                                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${row.status === "Active"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-600"
                                    }`}>
                                    {row.status}
                                </span>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col gap-1.5">
                                <div className="flex gap-1.5">
                                    <button className="text-xs font-semibold px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                                        Edit
                                    </button>
                                    <button className={`text-xs font-semibold px-3 py-1.5 text-white rounded-lg transition-colors ${roleColors[row.role] || "bg-purple-500"} hover:opacity-90`}>
                                        {row.role}
                                    </button>
                                </div>
                                <div className="flex gap-1.5">
                                    <button className="text-xs font-semibold px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors">
                                        Add Super Distributor
                                    </button>
                                    <button className="text-xs font-semibold px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors">
                                        Return to company
                                    </button>
                                </div>
                                <button className="text-xs font-semibold px-3 py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg transition-colors w-fit">
                                    Assign Coupon
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Pagination */}
                    <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-center gap-2">
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 transition-colors text-xs">
                            ««
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 transition-colors">
                            ‹
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition-colors text-sm">
                            0
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-purple-600 text-white text-sm font-semibold shadow">
                            1
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition-colors text-sm">
                            2
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 transition-colors">
                            ›
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 transition-colors text-xs">
                            »»
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CNFPage;
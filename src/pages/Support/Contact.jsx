import { useState, useMemo } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

// ─── Constants ───────────────────────────────────────────────────────────────

const INITIAL_DATA = [
    {
        id: 1,
        name: "Fahtima",
        email: "ftrical.wills@gmail.com",
        number: "03555514545",
        message: "Hello dear I need emi locker for sale i am a seller",
        created: "2025-11-09 02:25:54",
    },
    {
        id: 2,
        name: "Amina Khan",
        email: "amina.khan@example.com",
        number: "03312345678",
        message: "I have some vintage electronics for sale, please contact me.",
        created: "2025-11-10 03:30:00",
    },
    {
        id: 3,
        name: "Farhan Malik",
        email: "farhan.malik@xyz.com",
        number: "03456789123",
        message: "Looking to buy used tools for my workshop, let me know what you have!",
        created: "2025-11-11 04:15:45",
    },
    {
        id: 4,
        name: "Sara Ahmed",
        email: "sara.ahmed@abc.com",
        number: "03234567890",
        message: "I am interested in purchasing a new laptop, any recommendations?",
        created: "2025-11-12 05:00:30",
    },
    {
        id: 5,
        name: "Ali Raza",
        email: "ali.raza@sample.com",
        number: "03123456789",
        message: "I need a professional camera for photography, any leads would help!",
        created: "2025-11-13 06:45:15",
    },
    {
        id: 6,
        name: "Nida Faraz",
        email: "nida.faraz@mail.com",
        number: "03567891234",
        message: "Selling a high-end smartphone, please reach out if interested.",
        created: "2025-11-14 07:20:00",
    },
    {
        id: 7,
        name: "Omar Shah",
        email: "omar.shah@domain.com",
        number: "03612345678",
        message: "I am in search of a reliable electric bike, recommendations are welcome!",
        created: "2025-11-15 08:05:45",
    },
];

const TABLE_COLUMNS = [
    { key: "name", label: "NAME" },
    { key: "email", label: "EMAIL" },
    { key: "number", label: "NUMBER" },
    { key: "message", label: "MESSAGE" },
    { key: "created", label: "CREATED" },
];

/**
 * Contact Page component matching the requested UI.
 */
function Contact() {
    const [search, setSearch] = useState("");
    const [entriesCount, setEntriesCount] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const filteredData = useMemo(() => {
        const query = search.toLowerCase();
        return INITIAL_DATA.filter(
            (item) =>
                item.name.toLowerCase().includes(query) ||
                item.email.toLowerCase().includes(query) ||
                item.number.toLowerCase().includes(query) ||
                item.message.toLowerCase().includes(query)
        );
    }, [search]);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * entriesCount;
        return filteredData.slice(start, start + entriesCount);
    }, [filteredData, currentPage, entriesCount]);

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Header */}
            {/* <div className="bg-white border-b border-gray-200 px-6 py-4"> */}
            <h1 className="text-2xl font-bold text-indigo-600 tracking-tight px-6 py-4">Contact</h1>
            {/* </div> */}

            <div className="p-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-h-[80vh]">
                    {/* Inner Header */}
                    <div className="px-6 py-4 border-b border-gray-100">
                        <h2 className="text-xl font-bold text-indigo-600">Contact list</h2>
                    </div>

                    {/* Filters Bar */}
                    <div className="px-6 py-6 flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>Show</span>
                            <input
                                type="number"
                                value={entriesCount}
                                onChange={(e) => setEntriesCount(Number(e.target.value))}
                                className="w-16 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all text-center"
                            />
                            <span>entries</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="font-medium">Search:</span>
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all"
                            />
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    {TABLE_COLUMNS.map((col) => (
                                        <th key={col.key} className="px-6 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50/50 cursor-pointer group hover:bg-indigo-50/50 transition-colors">
                                            <div className="flex items-center gap-1">
                                                {col.label}
                                                <div className="flex flex-col -gap-1 opacity-40 group-hover:opacity-100">
                                                    <ChevronUp className="w-2.5 h-2.5" />
                                                    <ChevronDown className="w-2.5 h-2.5" />
                                                </div>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {paginatedData.length > 0 ? (
                                    paginatedData.map((row) => (
                                        <tr key={row.id} className="hover:bg-indigo-50/30 transition-colors group">
                                            <td className="px-6 py-5 text-gray-700 font-medium">{row.name}</td>
                                            <td className="px-6 py-5 text-gray-500">{row.email}</td>
                                            <td className="px-6 py-5 text-gray-600 font-mono text-[13px]">{row.number}</td>
                                            <td className="px-6 py-5 text-gray-500 max-w-xs truncate" title={row.message}>{row.message}</td>
                                            <td className="px-6 py-5 text-gray-500 whitespace-nowrap">{row.created}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={TABLE_COLUMNS.length} className="px-6 py-12 text-center text-gray-400 text-base">
                                            No matching contacts found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer / Pagination Placeholder */}
                    <div className="px-6 py-8 border-t border-gray-50 mt-auto">
                        {/* Placeholder for pagination if needed, or entry info */}
                        <p className="text-sm text-gray-400">
                            Showing {Math.min(filteredData.length, 1)} to {paginatedData.length} of {filteredData.length} entries
                        </p>
                    </div>

                    {/* Footer copyright */}
                    <div className="text-center text-sm text-gray-400 py-6">
                        2025 © Copyright <a href="#" className="text-indigo-400 hover:underline">Suraksha Pvt Ltd</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

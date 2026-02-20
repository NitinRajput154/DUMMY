import React from 'react';
import { X } from 'lucide-react';

const AddPlaylistModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="bg-white rounded-[10px] w-full max-w-[700px] flex flex-col overflow-hidden shadow-2xl relative z-10 animate-in fade-in zoom-in duration-200">

                {/* Header */}
                <div className="px-6 py-4 flex justify-between items-center border-b border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800">
                        Add Playlist
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-all transform hover:rotate-90"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Form Content */}
                <div className="p-8 space-y-5">
                    {/* Title */}
                    <div className="space-y-2 text-left">
                        <label className="text-sm font-bold text-gray-700">
                            Title
                        </label>
                        <input
                            type="text"
                            placeholder="Enter title"
                            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-400 transition-all placeholder:text-gray-300"
                        />
                    </div>

                    {/* Order */}
                    <div className="space-y-2 text-left">
                        <label className="text-sm font-bold text-gray-700">
                            Order
                        </label>
                        <input
                            type="text"
                            placeholder="Enter order"
                            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-400 transition-all placeholder:text-gray-300"
                        />
                    </div>

                    {/* Youtube ID */}
                    <div className="space-y-2 text-left">
                        <label className="text-sm font-bold text-gray-700">
                            Youtube ID
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Youtube ID"
                            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-400 transition-all placeholder:text-gray-300"
                        />
                    </div>

                    {/* Status */}
                    <div className="space-y-2 text-left">
                        <label className="text-sm font-bold text-gray-700">
                            Status
                        </label>
                        <input
                            type="text"
                            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-400 transition-all"
                        />
                    </div>

                    {/* Image */}
                    <div className="space-y-2 text-left">
                        <label className="text-sm font-bold text-gray-700">
                            Image
                        </label>
                        <div className="flex items-center gap-3">
                            <label className="cursor-pointer bg-[#F1F3F4] hover:bg-gray-200 text-gray-700 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors border border-gray-200">
                                Choose File
                                <input type="file" className="hidden" />
                            </label>
                            <span className="text-sm text-gray-400">No file chosen</span>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-8 py-6 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-8 py-2.5 rounded-lg text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
                    >
                        Cancel
                    </button>
                    <button
                        className="px-8 py-2.5 rounded-lg text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-all shadow-md active:scale-95"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddPlaylistModal;

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const EditPlaylistModal = ({ isOpen, onClose, playlistData }) => {
    const [formData, setFormData] = useState({
        playCategory: '',
        title: '',
        youtubeId: '',
        order: '',
        status: '',
        type: '',
    });

    useEffect(() => {
        if (playlistData) {
            setFormData({
                playCategory: playlistData.category || '',
                title: playlistData.title || '',
                youtubeId: playlistData.youtubeId || '',
                order: playlistData.order || '',
                status: playlistData.status || '',
                type: playlistData.type || '',
            });
        }
    }, [playlistData]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="bg-white rounded-[10px] w-full max-w-[800px] flex flex-col overflow-hidden shadow-2xl relative z-10 animate-in fade-in zoom-in duration-200">

                {/* Header */}
                <div className="bg-purple-600 px-6 py-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white">
                        Playlist Edit
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-white hover:text-gray-200 transition-all transform hover:rotate-90"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Form Content */}
                <div className="p-10 overflow-y-auto max-h-[75vh]">
                    <div className="max-w-[600px] mx-auto space-y-5">
                        {/* Inline Checkbox Header */}
                        <div className="flex items-center gap-3 py-2 border-b border-gray-100 mb-4">
                            <input type="checkbox" checked readOnly className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                            <span className="text-sm font-bold text-gray-800 tracking-tight">Playlist Edit</span>
                        </div>

                        {/* Fields Grid */}
                        <div className="space-y-4">
                            {[
                                { label: 'Play Category', key: 'playCategory' },
                                { label: 'Title', key: 'title' },
                                { label: 'Youtube id', key: 'youtubeId' },
                                { label: 'Order', key: 'order' },
                                { label: 'Status', key: 'status' },
                                { label: 'Type', key: 'type' },
                            ].map((field) => (
                                <div key={field.key} className="flex items-center">
                                    <label className="w-[180px] text-sm font-bold text-gray-700">
                                        {field.label}
                                    </label>
                                    <input
                                        type="text"
                                        value={formData[field.key]}
                                        onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                                        className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-400 transition-all"
                                    />
                                </div>
                            ))}

                            {/* Image Upload */}
                            <div className="flex items-center">
                                <label className="w-[180px] text-sm font-bold text-gray-700">
                                    Image
                                </label>
                                <div className="flex-1 flex items-center gap-3">
                                    <label className="cursor-pointer bg-[#E9ECEF] hover:bg-gray-200 text-gray-700 px-5 py-2 rounded-lg text-sm font-bold transition-colors border border-gray-200 shadow-sm">
                                        Choose File
                                        <input type="file" className="hidden" />
                                    </label>
                                    <span className="text-xs text-gray-400 italic">No file chosen</span>
                                </div>
                            </div>

                            {/* Video Upload */}
                            <div className="flex items-center">
                                <label className="w-[180px] text-sm font-bold text-gray-700">
                                    Video
                                </label>
                                <div className="flex-1 flex items-center gap-3">
                                    <label className="cursor-pointer bg-[#E9ECEF] hover:bg-gray-200 text-gray-700 px-5 py-2 rounded-lg text-sm font-bold transition-colors border border-gray-200 shadow-sm">
                                        Choose File
                                        <input type="file" className="hidden" />
                                    </label>
                                    <span className="text-xs text-gray-400 italic">No file chosen</span>
                                </div>
                            </div>
                        </div>

                        {/* Video Preview / Save Area */}
                        <div className="pt-6">
                            <div className="w-full h-32 bg-black rounded-xl flex items-center justify-center text-white/20 font-bold tracking-widest uppercase italic text-lg shadow-inner overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent pointer-events-none" />
                                Preview
                            </div>

                            <div className="mt-8 flex justify-center gap-4 border-t border-gray-50 pt-8">
                                <button
                                    onClick={onClose}
                                    className="px-10 py-3 rounded-xl text-sm font-extrabold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all border border-gray-200"
                                >
                                    Cancel
                                </button>
                                <button
                                    className="px-10 py-3 rounded-xl text-sm font-extrabold text-white bg-purple-600 hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-200 active:scale-95 border border-purple-500"
                                >
                                    Update Playlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditPlaylistModal;

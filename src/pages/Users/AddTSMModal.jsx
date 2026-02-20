import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const AddTSMModal = ({ isOpen, onClose, initialData, distributorName }) => {
    const isEditing = !!initialData;
    const [formData, setFormData] = useState({
        tsmName: '',
        username: '',
        password: '',
        businessAddress: '',
        email: '',
        phone: '',
        alternatePhone: '',
        status: '',
        pincode: '',
        state: '',
        city: '',
    });

    const [profileImg, setProfileImg] = useState(null);

    useEffect(() => {
        if (initialData) {
            setFormData({
                tsmName: initialData.name || '',
                username: initialData.username || '',
                password: initialData.password || '',
                businessAddress: initialData.address || '',
                email: initialData.email || '',
                phone: initialData.number || '',
                alternatePhone: initialData.alternatePhone || '',
                status: initialData.status || '',
                pincode: initialData.pincode || '',
                state: initialData.state || '',
                city: initialData.city || '',
            });
        } else {
            setFormData({
                tsmName: '',
                username: '',
                password: '',
                businessAddress: '',
                email: '',
                phone: '',
                alternatePhone: '',
                status: '',
                pincode: '',
                state: '',
                city: '',
            });
        }
    }, [initialData, isOpen]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProfileImg(e.target.files[0]);
        }
    };

    const inputClass = "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400 transition-all bg-white placeholder:text-gray-300";
    const labelClass = "block text-[13px] font-bold text-gray-700 mb-1.5";

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="bg-white rounded-xl w-full max-w-2xl flex flex-col overflow-hidden shadow-2xl relative z-10 animate-in fade-in zoom-in duration-200 border-2 border-[#A594F9]">

                {/* Header */}
                <div className="px-8 py-5 flex justify-between items-center bg-white border-b border-gray-50">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">
                            {isEditing ? 'Edit TSM' : 'Add TSM'}
                        </h2>
                        {distributorName && (
                            <p className="text-xs text-purple-600 font-bold mt-0.5">
                                For Distributor: {distributorName}
                            </p>
                        )}
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-gray-100 rounded-lg transition-colors text-gray-400 hover:text-gray-600"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Form Content */}
                <div className="p-8 space-y-5 max-h-[70vh] overflow-y-auto custom-scrollbar bg-white">
                    {/* TSM Name */}
                    <div>
                        <label className={labelClass}>TSM Name</label>
                        <input
                            name="tsmName"
                            placeholder="Owner Name"
                            className={inputClass}
                            value={formData.tsmName}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Username & Password */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className={labelClass}>Username</label>
                            <input
                                name="username"
                                placeholder="Username"
                                className={inputClass}
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className={labelClass}>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className={inputClass}
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Address & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className={labelClass}>Business Address</label>
                            <input
                                name="businessAddress"
                                placeholder="Business Address"
                                className={inputClass}
                                value={formData.businessAddress}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className={labelClass}>Email</label>
                            <input
                                name="email"
                                placeholder="Email Address"
                                className={inputClass}
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Phone & Alt Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className={labelClass}>Phone</label>
                            <input
                                name="phone"
                                placeholder="Phone"
                                className={inputClass}
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className={labelClass}>Alternate Phone</label>
                            <input
                                name="alternatePhone"
                                placeholder="Alternate Phone"
                                className={inputClass}
                                value={formData.alternatePhone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Status & Profile Img */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className={labelClass}>Status</label>
                            <select
                                name="status"
                                className={`${inputClass} appearance-none cursor-pointer`}
                                value={formData.status}
                                onChange={handleChange}
                            >
                                <option value="">Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                        <div>
                            <label className={labelClass}>Profile Img</label>
                            <div className="flex items-center gap-3">
                                <label className="flex items-center justify-center px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-bold text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors">
                                    Choose File
                                    <input type="file" className="hidden" onChange={handleFileChange} />
                                </label>
                                <span className="text-[11px] text-gray-400 truncate max-w-[120px]">
                                    {profileImg ? profileImg.name : 'No file chosen'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Locality */}
                    <div>
                        <label className={labelClass}>Locality (Pincode)</label>
                        <input
                            name="pincode"
                            placeholder="Locality (Pincode)"
                            className={inputClass}
                            value={formData.pincode}
                            onChange={handleChange}
                        />
                    </div>

                    {/* State & City */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className={labelClass}>State</label>
                            <input
                                name="state"
                                className={inputClass}
                                value={formData.state}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className={labelClass}>City</label>
                            <input
                                name="city"
                                className={inputClass}
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-8 py-5 border-t border-gray-50 flex justify-end bg-gray-50/30">
                    <button
                        onClick={() => { console.log('Saving TSM:', formData); onClose(); }}
                        className="px-10 py-2.5 rounded-lg text-sm font-bold text-white bg-[#5E43FB] hover:bg-purple-700 transition-all shadow-lg active:scale-95"
                    >
                        Save
                    </button>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #E2E8F0;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #A594F9;
                }
            `}} />
        </div>
    );
};

export default AddTSMModal;

import React, { useState, useEffect } from 'react';
import { X, ArrowLeft } from 'lucide-react';

const AddDistributor = ({ onBack, initialData }) => {
    const isEditing = !!initialData;
    const [formData, setFormData] = useState({
        reportingManager: '',
        cnf: '',
        businessName: '',
        ownerName: '',
        username: '',
        password: '',
        businessAddress: '',
        email: '',
        phone: '',
        alternatePhone: '',
        status: '',
        gstNo: '',
        locality: '',
        state: '',
        city: '',
    });

    const [profileImg, setProfileImg] = useState(null);

    useEffect(() => {
        if (initialData) {
            setFormData({
                reportingManager: initialData.reportingManager || '',
                cnf: initialData.cnf || '',
                businessName: initialData.name || '',
                ownerName: initialData.ownerName || '',
                username: initialData.username || '',
                password: initialData.password || '',
                businessAddress: initialData.address || '',
                email: initialData.email || '',
                phone: initialData.number || '',
                alternatePhone: initialData.alternatePhone || '',
                status: initialData.status || '',
                gstNo: initialData.gstNo || '',
                locality: initialData.pincode || '',
                state: initialData.state || '',
                city: initialData.city || '',
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProfileImg(e.target.files[0]);
        }
    };

    const inputClass = "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-400 transition-all bg-white placeholder:text-gray-300";
    const labelClass = "block text-sm font-bold text-gray-700 mb-1.5";

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div className="bg-[#A594F9] px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <button
                        onClick={onBack}
                        className="p-1.5 hover:bg-white/20 rounded-lg transition-colors text-white"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <h2 className="text-lg font-bold text-white">
                        {isEditing ? 'Edit Distributor' : 'Add Distributor'}
                    </h2>
                </div>
                <button
                    onClick={onBack}
                    className="p-1 hover:bg-white/20 rounded-lg transition-colors text-white"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* Form Content */}
            <div className="p-8 space-y-6 max-h-[75vh] overflow-y-auto custom-scrollbar">
                {/* Row 1: 4 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div>
                        <label className={labelClass}>Reporting Manager</label>
                        <input
                            name="reportingManager"
                            className={inputClass}
                            value={formData.reportingManager}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className={labelClass}>CNF</label>
                        <input
                            name="cnf"
                            className={inputClass}
                            value={formData.cnf}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className={labelClass}>Business Name</label>
                        <input
                            name="businessName"
                            placeholder="Business Name"
                            className={inputClass}
                            value={formData.businessName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className={labelClass}>Owner Name</label>
                        <input
                            name="ownerName"
                            placeholder="Owner Name"
                            className={inputClass}
                            value={formData.ownerName}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Grid Rows: 2 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <div className="flex items-center gap-4">
                            <label className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors shrink-0">
                                Choose File
                                <input type="file" className="hidden" onChange={handleFileChange} />
                            </label>
                            <span className="text-sm text-gray-400 truncate">
                                {profileImg ? profileImg.name : 'No file chosen'}
                            </span>
                        </div>
                    </div>

                    <div>
                        <label className={labelClass}>GST No</label>
                        <input
                            name="gstNo"
                            placeholder="GST No"
                            className={inputClass}
                            value={formData.gstNo}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className={labelClass}>Locality (Pincode)</label>
                        <input
                            name="locality"
                            placeholder="Locality (Pincode)"
                            className={inputClass}
                            value={formData.locality}
                            onChange={handleChange}
                        />
                    </div>

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
            <div className="px-8 py-6 border-t border-gray-100 flex justify-end gap-3 bg-white">
                <button
                    onClick={onBack}
                    className="px-8 py-2.5 rounded-xl text-sm font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all active:scale-95"
                >
                    Cancel
                </button>
                <button
                    className="px-10 py-2.5 rounded-xl text-sm font-bold text-white bg-purple-600 hover:bg-purple-700 transition-all shadow-lg active:scale-95"
                >
                    {isEditing ? 'Update' : 'Save'}
                </button>
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
                    background: #CBD5E0;
                }
            `}} />
        </div>
    );
};

export default AddDistributor;

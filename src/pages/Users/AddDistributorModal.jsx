import React from 'react';
import { X } from 'lucide-react';

const AddDistributorModal = ({ isOpen, onClose, superDistributorName }) => {
    if (!isOpen) return null;

    const inputClasses = "w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-400 transition-all placeholder:text-gray-300";
    const labelClasses = "text-[13px] font-bold text-gray-700 mb-1.5 block";

    return (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="bg-white rounded-xl w-full max-w-4xl flex flex-col overflow-hidden shadow-2xl relative z-10 animate-in fade-in zoom-in duration-200">

                {/* Header */}
                <div className="px-8 py-5 flex justify-between items-center border-b border-gray-100">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">
                            Add Distributor
                        </h2>
                        {superDistributorName && (
                            <p className="text-xs text-purple-600 font-bold mt-0.5">
                                For Super Distributor: {superDistributorName}
                            </p>
                        )}
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-all transform hover:rotate-90"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Form Content */}
                <div className="p-8 overflow-y-auto max-h-[70vh] custom-scrollbar bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                        {/* Business Name */}
                        <div>
                            <label className={labelClasses}>Business Name</label>
                            <input type="text" placeholder="Business Name" className={inputClasses} />
                        </div>
                        {/* Owner Name */}
                        <div>
                            <label className={labelClasses}>Owner Name</label>
                            <input type="text" placeholder="Owner Name" className={inputClasses} />
                        </div>

                        {/* Username */}
                        <div>
                            <label className={labelClasses}>Username</label>
                            <input type="text" placeholder="Username" className={inputClasses} />
                        </div>
                        {/* Password */}
                        <div>
                            <label className={labelClasses}>Password</label>
                            <input type="password" placeholder="Password" className={inputClasses} />
                        </div>

                        {/* Business Address */}
                        <div>
                            <label className={labelClasses}>Business Address</label>
                            <input type="text" placeholder="Business Address" className={inputClasses} />
                        </div>
                        {/* Email */}
                        <div>
                            <label className={labelClasses}>Email</label>
                            <input type="email" placeholder="Email Address" className={inputClasses} />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className={labelClasses}>Phone</label>
                            <input type="text" placeholder="Phone" className={inputClasses} />
                        </div>
                        {/* Alternate Phone */}
                        <div>
                            <label className={labelClasses}>Alternate Phone</label>
                            <input type="text" placeholder="Alternate Phone" className={inputClasses} />
                        </div>

                        {/* Status */}
                        <div>
                            <label className={labelClasses}>Status</label>
                            <select className={`${inputClasses} appearance-none`}>
                                <option value="">Select Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                        {/* Profile Img */}
                        <div>
                            <label className={labelClasses}>Profile Img</label>
                            <div className="flex items-center gap-3">
                                <label className="cursor-pointer bg-[#F1F3F4] hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors border border-gray-200">
                                    Choose File
                                    <input type="file" className="hidden" />
                                </label>
                                <span className="text-sm text-gray-400">No file chosen</span>
                            </div>
                        </div>

                        {/* GST No */}
                        <div>
                            <label className={labelClasses}>GST No</label>
                            <input type="text" placeholder="GST No" className={inputClasses} />
                        </div>
                        {/* Locality (Pincode) */}
                        <div>
                            <label className={labelClasses}>Locality (Pincode)</label>
                            <input type="text" placeholder="Locality (Pincode)" className={inputClasses} />
                        </div>

                        {/* State */}
                        <div>
                            <label className={labelClasses}>State</label>
                            <input type="text" className={inputClasses} />
                        </div>
                        {/* City */}
                        <div>
                            <label className={labelClasses}>City</label>
                            <input type="text" className={inputClasses} />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-8 py-5 border-t border-gray-100 flex justify-end gap-3 bg-white">
                    <button
                        onClick={onClose}
                        className="px-8 py-2.5 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-100 transition-all"
                    >
                        Cancel
                    </button>
                    <button
                        className="px-10 py-2.5 rounded-lg text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg active:scale-95"
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
                    background: #CBD5E0;
                }
            `}} />
        </div>
    );
};

export default AddDistributorModal;

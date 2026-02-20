import React, { useState, useEffect } from 'react';
import { X, ArrowLeft } from 'lucide-react';

const AddSuperDistributor = ({ onBack, initialData }) => {
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
        pincode: '',
        state: '',
        city: ''
    });

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
                status: initialData.status?.toLowerCase() || '',
                gstNo: initialData.gstNo || '',
                pincode: initialData.pincode || '',
                state: initialData.state || '',
                city: initialData.city || ''
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const inputClasses = "w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-400 transition-all placeholder:text-gray-300";
    const labelClasses = "text-xs font-extrabold text-gray-700 mb-1.5 block";

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div className="bg-[#A594F9] px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <button
                        onClick={onBack}
                        className="bg-white/20 hover:bg-white/30 p-2 rounded-lg text-white transition-all active:scale-95"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <h2 className="text-lg font-bold text-white">
                        {isEditing ? 'Edit Super Distributor' : 'Add Super Distributor'}
                    </h2>
                </div>
                <button
                    onClick={onBack}
                    className="bg-white/20 hover:bg-white/30 rounded-full p-1 text-white transition-all transform hover:rotate-90"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* Form Content */}
            <div className="p-8 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4 text-left">
                    {/* Row 1 */}
                    <div>
                        <label className={labelClasses}>Reporting Manager</label>
                        <input name="reportingManager" value={formData.reportingManager} onChange={handleChange} type="text" className={inputClasses} />
                    </div>
                    <div>
                        <label className={labelClasses}>CNF</label>
                        <input name="cnf" value={formData.cnf} onChange={handleChange} type="text" className={inputClasses} />
                    </div>
                    <div>
                        <label className={labelClasses}>Business Name</label>
                        <input name="businessName" value={formData.businessName} onChange={handleChange} type="text" placeholder="Business Name" className={inputClasses} />
                    </div>
                    <div>
                        <label className={labelClasses}>Owner Name</label>
                        <input name="ownerName" value={formData.ownerName} onChange={handleChange} type="text" placeholder="Owner Name" className={inputClasses} />
                    </div>

                    {/* Row 2 */}
                    <div className="md:col-span-2">
                        <label className={labelClasses}>Username</label>
                        <input name="username" value={formData.username} onChange={handleChange} type="text" placeholder="Username" className={inputClasses} />
                    </div>
                    <div className="md:col-span-2">
                        <label className={labelClasses}>Password</label>
                        <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder="Password" className={inputClasses} />
                    </div>

                    {/* Row 3 */}
                    <div className="md:col-span-2">
                        <label className={labelClasses}>Business Address</label>
                        <input name="businessAddress" value={formData.businessAddress} onChange={handleChange} type="text" placeholder="Business Address" className={inputClasses} />
                    </div>
                    <div className="md:col-span-2">
                        <label className={labelClasses}>Email</label>
                        <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email Address" className={inputClasses} />
                    </div>

                    {/* Row 4 */}
                    <div className="md:col-span-2">
                        <label className={labelClasses}>Phone</label>
                        <input name="phone" value={formData.phone} onChange={handleChange} type="text" placeholder="Phone" className={inputClasses} />
                    </div>
                    <div className="md:col-span-2">
                        <label className={labelClasses}>Alternate Phone</label>
                        <input name="alternatePhone" value={formData.alternatePhone} onChange={handleChange} type="text" placeholder="Alternate Phone" className={inputClasses} />
                    </div>

                    {/* Row 5 */}
                    <div className="md:col-span-2">
                        <label className={labelClasses}>Status</label>
                        <div className="relative">
                            <select name="status" value={formData.status} onChange={handleChange} className={`${inputClasses} appearance-none`}>
                                <option value="">Select Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <label className={labelClasses}>Profile Img</label>
                        <div className="flex items-center gap-3">
                            <label className="cursor-pointer bg-[#F1F3F4] hover:bg-gray-200 text-gray-700 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors border border-gray-200">
                                Choose File
                                <input type="file" className="hidden" />
                            </label>
                            <span className="text-sm text-gray-400">No file chosen</span>
                        </div>
                    </div>

                    {/* Row 6 */}
                    <div className="md:col-span-2">
                        <label className={labelClasses}>GST No</label>
                        <input name="gstNo" value={formData.gstNo} onChange={handleChange} type="text" placeholder="GST No" className={inputClasses} />
                    </div>
                    <div className="md:col-span-2">
                        <label className={labelClasses}>Locality (Pincode)</label>
                        <input name="pincode" value={formData.pincode} onChange={handleChange} type="text" placeholder="Locality (Pincode)" className={inputClasses} />
                    </div>

                    {/* Row 7 */}
                    <div className="md:col-span-2">
                        <label className={labelClasses}>State</label>
                        <input name="state" value={formData.state} onChange={handleChange} type="text" className={inputClasses} />
                    </div>
                    <div className="md:col-span-2">
                        <label className={labelClasses}>City</label>
                        <input name="city" value={formData.city} onChange={handleChange} type="text" className={inputClasses} />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-6 bg-gray-50/50 border-t border-gray-100 flex justify-end gap-3 shadow-[0_-4px_20px_0_rgba(0,0,0,0.02)]">
                <button
                    onClick={onBack}
                    className="px-10 py-2.5 rounded-xl text-sm font-bold text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 transition-all active:scale-95"
                >
                    Cancel
                </button>
                <button
                    className="px-10 py-2.5 rounded-xl text-sm font-bold text-white bg-purple-600 hover:bg-purple-700 transition-all shadow-lg active:scale-95"
                >
                    {isEditing ? 'Update' : 'Save'}
                </button>
            </div>
        </div>
    );
};

export default AddSuperDistributor;

import { useState } from 'react';
import { X } from 'lucide-react';

const AdminAddModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: '',
        number: '',
        status: '',
        role: '',
        company: '',
    });

    if (!isOpen) return null;

    const handleChange = (field) => (e) =>
        setFormData((prev) => ({ ...prev, [field]: e.target.value }));

    const inputClass =
        'w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400 transition-all bg-white';

    const labelClass = 'block text-[13px] font-bold text-gray-600 mb-1';

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="bg-white rounded-xl shadow-2xl w-[500px] overflow-hidden relative z-10 animate-in fade-in zoom-in duration-200 border-2 border-[#A594F9]">

                {/* Header */}
                <div className="bg-[#A594F9] px-6 py-4 flex justify-between items-center">
                    <h2 className="text-lg font-bold text-white">Admin Add</h2>
                    <button
                        onClick={onClose}
                        className="text-white hover:opacity-80 transition-opacity"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Form Body */}
                <div className="p-8 space-y-5 bg-white max-h-[70vh] overflow-y-auto custom-scrollbar">
                    {/* Name */}
                    <div>
                        <label className={labelClass}>Name</label>
                        <input
                            type="text"
                            placeholder="Name"
                            className={inputClass}
                            value={formData.name}
                            onChange={handleChange('name')}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className={labelClass}>Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className={inputClass}
                            value={formData.password}
                            onChange={handleChange('password')}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className={labelClass}>Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className={inputClass}
                            value={formData.email}
                            onChange={handleChange('email')}
                        />
                    </div>

                    {/* Number */}
                    <div>
                        <label className={labelClass}>Number</label>
                        <input
                            type="text"
                            placeholder="Number"
                            className={inputClass}
                            value={formData.number}
                            onChange={handleChange('number')}
                        />
                    </div>

                    {/* Status */}
                    <div>
                        <label className={labelClass}>Status</label>
                        <select
                            className={`${inputClass} appearance-none cursor-pointer`}
                            value={formData.status}
                            onChange={handleChange('status')}
                        >
                            <option value="">Select Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>

                    {/* Role */}
                    <div>
                        <label className={labelClass}>Role</label>
                        <input
                            type="text"
                            placeholder="Role"
                            className={inputClass}
                            value={formData.role}
                            onChange={handleChange('role')}
                        />
                    </div>

                    {/* Company */}
                    <div>
                        <label className={labelClass}>Company</label>
                        <input
                            type="text"
                            placeholder="Company"
                            className={inputClass}
                            value={formData.company}
                            onChange={handleChange('company')}
                        />
                    </div>
                </div>

                {/* Footer - keeping it consistent with other premium modals */}
                <div className="px-8 py-5 border-t border-gray-100 flex justify-end gap-3 bg-gray-50/30">
                    <button
                        onClick={onClose}
                        className="px-8 py-2.5 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-100 transition-all active:scale-95"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => { console.log('Saving admin:', formData); onClose(); }}
                        className="px-10 py-2.5 rounded-lg text-sm font-bold text-white bg-[#A394F9] hover:bg-purple-600 transition-all shadow-lg active:scale-95"
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

export default AdminAddModal;
import React from 'react';
import { X } from 'lucide-react';

const AssignCouponModal = ({ isOpen, onClose, distributorName }) => {
    if (!isOpen) return null;

    const inputClasses = "w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400 transition-all placeholder:text-gray-300";
    const labelClasses = "text-[13px] font-bold text-gray-700 mb-1.5 block";

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="bg-white rounded-xl w-full max-w-lg flex flex-col overflow-hidden shadow-2xl relative z-10 animate-in fade-in zoom-in duration-200 border-2 border-[#A594F9]">

                {/* Header */}
                <div className="px-8 py-5 flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">
                            Assign Coupon
                        </h2>
                        {distributorName && (
                            <p className="text-xs text-purple-600 font-bold mt-0.5">
                                To: {distributorName}
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

                {/* Dotted Divider */}
                <div className="px-8">
                    <div className="border-t-2 border-dotted border-purple-200" />
                </div>

                {/* Form Content */}
                <div className="p-8 space-y-6 bg-white">
                    {/* Choose Coupons */}
                    <div>
                        <label className={labelClasses}>Choose Coupons</label>
                        <select className={`${inputClasses} h-24 appearance-none`} multiple>
                            <option>Coupon Set A - 500 Available</option>
                            <option>Coupon Set B - 1200 Available</option>
                            <option>Coupon Set C - 300 Available</option>
                        </select>
                        <p className="text-[10px] text-gray-400 mt-1 italic">* Hold Ctrl to select multiple</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Coupon Count */}
                        <div>
                            <label className={labelClasses}>Coupon Count</label>
                            <input type="number" placeholder="Count" className={inputClasses} />
                        </div>
                        {/* Remark */}
                        <div>
                            <label className={labelClasses}>Remark</label>
                            <input type="text" placeholder="Remark" className={inputClasses} />
                        </div>
                    </div>
                </div>

                {/* Dotted Divider */}
                <div className="px-8">
                    <div className="border-t-2 border-dotted border-purple-200" />
                </div>

                {/* Footer */}
                <div className="px-8 py-6 flex justify-end gap-3 bg-white">
                    <button
                        className="px-8 py-2.5 rounded-xl text-sm font-bold text-white bg-[#5E43FB] hover:bg-purple-700 transition-all shadow-lg active:scale-95"
                    >
                        Save
                    </button>
                    <button
                        onClick={onClose}
                        className="px-8 py-2.5 rounded-xl text-sm font-bold text-gray-600 bg-[#F1F3F4] hover:bg-gray-200 transition-all active:scale-95"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AssignCouponModal;

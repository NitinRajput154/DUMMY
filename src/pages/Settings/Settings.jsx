import { useState, useCallback } from "react";

// ─── Settings Page ──────────────────────────────────────────────────────────

const SETTINGS_FIELDS = [
    { id: "wifiSsid", label: "Wifi SSID", type: "text" },
    { id: "wifiPassword", label: "Wifi Password", type: "text" },
    { id: "plus", label: "Plus", type: "text" },
    { id: "pro", label: "Pro", type: "text" },
    { id: "resid", label: "Resid", type: "text" },
    { id: "basicOtp", label: "Basic OTP", type: "text" },
    { id: "maintenance", label: "Maintenance", type: "text" },
    { id: "maintenanceTitle", label: "Maintenance title", type: "text" },
    { id: "maintenanceText", label: "Maintenance Text", type: "text" },
];

function Settings() {
    const [formData, setFormData] = useState(() => {
        const init = {};
        SETTINGS_FIELDS.forEach((f) => { init[f.id] = ""; });
        return init;
    });
    const [maintenanceImage, setMaintenanceImage] = useState(null);
    const [maintenanceImageName, setMaintenanceImageName] = useState("");
    const [rapidAppFile, setRapidAppFile] = useState(null);
    const [rapidAppFileName, setRapidAppFileName] = useState("");
    const [rapidAppPreview, setRapidAppPreview] = useState(null);

    const handleChange = useCallback((field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    }, []);

    const handleMaintenanceImage = useCallback((e) => {
        const file = e.target.files?.[0];
        if (file) {
            setMaintenanceImage(file);
            setMaintenanceImageName(file.name);
        }
    }, []);

    const handleRapidAppFile = useCallback((e) => {
        const file = e.target.files?.[0];
        if (file) {
            setRapidAppFile(file);
            setRapidAppFileName(file.name);
            const reader = new FileReader();
            reader.onload = (ev) => setRapidAppPreview(ev.target.result);
            reader.readAsDataURL(file);
        }
    }, []);

    const handleSave = useCallback(() => {
        console.log("Settings saved:", { ...formData, maintenanceImage, rapidAppFile });
    }, [formData, maintenanceImage, rapidAppFile]);

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Page Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-3">
                <h1 className="text-2xl font-bold text-purple-600 tracking-tight">Setting</h1>
            </div>

            <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-start">
                    {/* ── Left Card: Setting Form ── */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-bold text-gray-800 mb-6">Setting</h2>

                        <div className="space-y-5">
                            {SETTINGS_FIELDS.map((field) => (
                                <div key={field.id} className="flex items-center gap-4">
                                    <label className="w-40 text-sm font-medium text-gray-700 text-right shrink-0">
                                        {field.label}
                                    </label>
                                    <input
                                        type={field.type}
                                        value={formData[field.id]}
                                        onChange={(e) => handleChange(field.id, e.target.value)}
                                        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 transition-colors"
                                    />
                                </div>
                            ))}

                            {/* Maintenance Image file input */}
                            <div className="flex items-center gap-4">
                                <label className="w-40 text-sm font-medium text-gray-700 text-right shrink-0">
                                    Maintenance Image
                                </label>
                                <div className="flex items-center gap-3">
                                    <label className="cursor-pointer bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                                        Choose File
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleMaintenanceImage}
                                        />
                                    </label>
                                    <span className="text-sm text-gray-400">
                                        {maintenanceImageName || "No file chosen"}
                                    </span>
                                </div>
                            </div>

                            {/* Second Maintenance Image row (as seen in screenshot) */}
                            <div className="flex items-center gap-4">
                                <label className="w-40 text-sm font-medium text-gray-700 text-right shrink-0">
                                    Maintenance Image
                                </label>
                                <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-6 py-2 rounded-lg transition-colors">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ── Right Card: TEST RAPID APP ── */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 w-72">
                        <h2 className="text-lg font-bold text-gray-800 mb-4">TEST RAPID APP</h2>

                        {/* Image preview area */}
                        <div className="w-full h-24 border border-gray-300 rounded-lg mb-4 flex items-center justify-center overflow-hidden bg-gray-50">
                            {rapidAppPreview ? (
                                <img src={rapidAppPreview} alt="Preview" className="w-full h-full object-contain" />
                            ) : (
                                <span className="text-xs text-gray-300">Preview</span>
                            )}
                        </div>

                        {/* Choose File */}
                        <div className="flex flex-col items-center gap-1 mb-4">
                            <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium px-6 py-2 rounded-lg transition-colors w-full text-center">
                                Choose File
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleRapidAppFile}
                                />
                            </label>
                            <span className="text-xs text-gray-400">
                                {rapidAppFileName || "No file chosen"}
                            </span>
                        </div>

                        {/* Save button */}
                        <button
                            onClick={handleSave}
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;

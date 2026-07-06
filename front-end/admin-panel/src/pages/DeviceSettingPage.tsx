import { useState } from "react";
import { toast } from "sonner";
import {
  Monitor,
  Wifi,
  Shield,
  Database,
  Bell,
  RefreshCw,
  Save,
} from "lucide-react";

export default function DeviceSettingsPage() {
  const [loading, setLoading] = useState(false);

  const [settings, setSettings] = useState({
    device_name: "",
    device_location: "",
    auto_sync: true,
    face_scan_enabled: true,
    offline_mode: false,
    sync_interval: "5",
    notification: true,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : value,
    }));
  }

  async function handleSave() {
    try {
      setLoading(true);

      // 👉 replace with your API
      // await api.post("/device/settings", settings);

      console.log(settings);

      toast.success("Device settings saved");
    } catch (err) {
      toast.error("Failed to save settings");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full flex justify-center p-4">

      <div className="w-full max-w-5xl space-y-6">

        {/* HEADER */}
        <div className="card p-6 rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Monitor className="w-6 h-6 text-blue-500" />
            Device Settings
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Configure your device behavior, security, and synchronization
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* DEVICE INFO */}
          <div className="card p-5 rounded-xl shadow-lg space-y-4">
            <h2 className="font-semibold flex items-center gap-2">
              <Monitor className="w-4 h-4" />
              Device Info
            </h2>

            <input
              name="device_name"
              value={settings.device_name}
              onChange={handleChange}
              placeholder="Device name"
              className="input"
            />

            <input
              name="device_location"
              value={settings.device_location}
              onChange={handleChange}
              placeholder="Device location"
              className="input"
            />
          </div>

          {/* SECURITY */}
          <div className="card p-5 rounded-xl shadow-lg space-y-4">
            <h2 className="font-semibold flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Security
            </h2>

            <label className="flex items-center justify-between">
              Face Scan Authentication
              <input
                type="checkbox"
                name="face_scan_enabled"
                checked={settings.face_scan_enabled}
                onChange={handleChange}
              />
            </label>

            <label className="flex items-center justify-between">
              Offline Mode
              <input
                type="checkbox"
                name="offline_mode"
                checked={settings.offline_mode}
                onChange={handleChange}
              />
            </label>
          </div>

          {/* SYNC SETTINGS */}
          <div className="card p-5 rounded-xl shadow-lg space-y-4">
            <h2 className="font-semibold flex items-center gap-2">
              <Database className="w-4 h-4" />
              Sync Settings
            </h2>

            <label className="flex items-center justify-between">
              Auto Sync
              <input
                type="checkbox"
                name="auto_sync"
                checked={settings.auto_sync}
                onChange={handleChange}
              />
            </label>

            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-gray-500" />
              <select
                name="sync_interval"
                value={settings.sync_interval}
                onChange={handleChange}
                className="input w-full"
              >
                <option value="1">1 min</option>
                <option value="5">5 min</option>
                <option value="10">10 min</option>
                <option value="30">30 min</option>
              </select>
            </div>
          </div>

          {/* NOTIFICATIONS */}
          <div className="card p-5 rounded-xl shadow-lg space-y-4">
            <h2 className="font-semibold flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Notifications
            </h2>

            <label className="flex items-center justify-between">
              Enable Notifications
              <input
                type="checkbox"
                name="notification"
                checked={settings.notification}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        {/* SAVE BUTTON */}
        <div className="card p-6 rounded-xl shadow-lg flex justify-end">
          <button
            onClick={handleSave}
            disabled={loading}
            className="
              flex items-center gap-2
              bg-blue-600 hover:bg-blue-700
              text-white px-6 py-3 rounded-xl
              shadow-lg shadow-blue-500/20
              transition
            "
          >
            <Save className="w-4 h-4" />
            {loading ? "Saving..." : "Save Settings"}
          </button>
        </div>

      </div>
    </div>
  );
}
import { useState } from 'react';
import { Bell, Lock, Globe, Moon, Sun, Mail } from 'lucide-react';
import Toggle from './ui/Toggle';

interface SettingsSectionProps {
  title: string;
  children: React.ReactNode;
}

function SettingsSection({ title, children }: SettingsSectionProps) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
      </div>
      <div className="px-4 py-5 sm:p-6 space-y-6">{children}</div>
    </div>
  );
}

export default function Settings() {
  const [settings, setSettings] = useState({
    twoFactor: true,
    securityAlerts: true,
    passwordExpiry: false,
    emailNotifications: true,
    pushNotifications: true,
    darkMode: false,
  });

  const updateSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="mt-2 text-sm text-gray-700">
          Manage your account preferences and system settings
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <SettingsSection title="Security Settings">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                </div>
              </div>
              <Toggle enabled={settings.twoFactor} onChange={() => updateSetting('twoFactor')} />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <Bell className="h-5 w-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Security Alerts</p>
                  <p className="text-sm text-gray-500">Get notified about important security events</p>
                </div>
              </div>
              <Toggle enabled={settings.securityAlerts} onChange={() => updateSetting('securityAlerts')} />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Password Expiry</p>
                  <p className="text-sm text-gray-500">Require password change every 90 days</p>
                </div>
              </div>
              <Toggle enabled={settings.passwordExpiry} onChange={() => updateSetting('passwordExpiry')} />
            </div>
          </div>
        </SettingsSection>

        <SettingsSection title="Notification Preferences">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive daily digest of activities</p>
                </div>
              </div>
              <Toggle enabled={settings.emailNotifications} onChange={() => updateSetting('emailNotifications')} />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <Bell className="h-5 w-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Push Notifications</p>
                  <p className="text-sm text-gray-500">Get real-time updates on your device</p>
                </div>
              </div>
              <Toggle enabled={settings.pushNotifications} onChange={() => updateSetting('pushNotifications')} />
            </div>
          </div>
        </SettingsSection>

        <SettingsSection title="Appearance">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  {settings.darkMode ? (
                    <Moon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Sun className="h-5 w-5 text-gray-400" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Theme</p>
                  <p className="text-sm text-gray-500">Choose between light and dark mode</p>
                </div>
              </div>
              <Toggle enabled={settings.darkMode} onChange={() => updateSetting('darkMode')} />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <Globe className="h-5 w-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Language</p>
                  <p className="text-sm text-gray-500">Select your preferred language</p>
                </div>
              </div>
              <select className="mt-1 block w-40 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                <option>English</option>
                <option>Tamil</option>
                <option>Hindi</option>
              </select>
            </div>
          </div>
        </SettingsSection>

        <SettingsSection title="Session Management">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900">Current Session</p>
                <p className="text-sm text-gray-500">Chennai, India • Chrome on Windows</p>
              </div>
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                Active Now
              </span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900">Previous Session</p>
                <p className="text-sm text-gray-500">Mumbai, India • Safari on MacOS</p>
              </div>
              <button className="text-sm font-medium text-red-600 hover:text-red-500">
                Revoke
              </button>
            </div>
          </div>
        </SettingsSection>
      </div>
    </div>
  );
}
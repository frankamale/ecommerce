import { useState } from 'react';
import {
  Store,
  CreditCard,
  Truck,
  Bell,
  Shield,
  Mail,
  Globe,
  Save
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', name: 'General', icon: Store },
    { id: 'payment', name: 'Payment', icon: CreditCard },
    { id: 'shipping', name: 'Shipping', icon: Truck },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'security', name: 'Security', icon: Shield },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-sm text-gray-500">Manage your store settings and preferences</p>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-gray-200">
            <nav className="p-4 space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon size={20} />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 p-6">
            {/* General Settings */}
            {activeTab === 'general' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-900">General Settings</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Store Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Nvuma Shoppers"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Store Email
                    </label>
                    <input
                      type="email"
                      defaultValue="info@nvumashoppers.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      defaultValue="+256 700 123 456"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Store Address
                    </label>
                    <textarea
                      rows={3}
                      defaultValue="Plot 45, Kampala Road, Kampala, Uganda"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Currency
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="UGX">UGX - Ugandan Shilling</option>
                      <option value="USD">USD - US Dollar</option>
                      <option value="KES">KES - Kenyan Shilling</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2">
                    <Save size={18} />
                    Save Changes
                  </Button>
                </div>
              </div>
            )}

            {/* Payment Settings */}
            {activeTab === 'payment' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-900">Payment Settings</h2>

                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-yellow-100 rounded-lg">
                          <CreditCard size={20} className="text-yellow-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Mobile Money</p>
                          <p className="text-sm text-gray-500">MTN, Airtel Money</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <CreditCard size={20} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Card Payments</p>
                          <p className="text-sm text-gray-500">Visa, Mastercard</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <Truck size={20} className="text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Cash on Delivery</p>
                          <p className="text-sm text-gray-500">Pay when you receive</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2">
                    <Save size={18} />
                    Save Changes
                  </Button>
                </div>
              </div>
            )}

            {/* Shipping Settings */}
            {activeTab === 'shipping' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-900">Shipping Settings</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Free Shipping Threshold
                    </label>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">UGX</span>
                      <input
                        type="number"
                        defaultValue="200000"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Orders above this amount get free shipping</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Standard Shipping Fee
                    </label>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">UGX</span>
                      <input
                        type="number"
                        defaultValue="10000"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Delivery Areas
                    </label>
                    <div className="space-y-2">
                      {['Kampala', 'Entebbe', 'Wakiso', 'Mbarara', 'Jinja', 'Gulu'].map((area) => (
                        <label key={area} className="flex items-center gap-2">
                          <input type="checkbox" defaultChecked className="rounded text-blue-600" />
                          <span className="text-sm text-gray-700">{area}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2">
                    <Save size={18} />
                    Save Changes
                  </Button>
                </div>
              </div>
            )}

            {/* Notifications Settings */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-900">Notification Settings</h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <p className="font-medium text-gray-900">New Order Alerts</p>
                      <p className="text-sm text-gray-500">Get notified when a new order is placed</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-3 border-t">
                    <div>
                      <p className="font-medium text-gray-900">Low Stock Alerts</p>
                      <p className="text-sm text-gray-500">Get notified when products are running low</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-3 border-t">
                    <div>
                      <p className="font-medium text-gray-900">Customer Reviews</p>
                      <p className="text-sm text-gray-500">Get notified when customers leave reviews</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-3 border-t">
                    <div>
                      <p className="font-medium text-gray-900">Email Reports</p>
                      <p className="text-sm text-gray-500">Receive weekly sales reports via email</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2">
                    <Save size={18} />
                    Save Changes
                  </Button>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-900">Security Settings</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter current password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter new password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="font-medium text-gray-900 mb-3">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">Enable 2FA</p>
                        <p className="text-sm text-gray-500">Add an extra layer of security</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2">
                    <Save size={18} />
                    Update Password
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

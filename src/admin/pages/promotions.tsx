import { useState } from 'react';
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Tag,
  Percent,
  Calendar,
  ToggleLeft,
  ToggleRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Promotions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('coupons');

  // Mock coupons data
  const coupons = [
    { id: 1, code: 'WELCOME20', discount: 20, type: 'percentage', minOrder: 50000, uses: 145, maxUses: 500, status: 'Active', expires: '2024-02-28' },
    { id: 2, code: 'FREESHIP', discount: 10000, type: 'fixed', minOrder: 100000, uses: 89, maxUses: 200, status: 'Active', expires: '2024-01-31' },
    { id: 3, code: 'SAVE15', discount: 15, type: 'percentage', minOrder: 75000, uses: 234, maxUses: 300, status: 'Active', expires: '2024-03-15' },
    { id: 4, code: 'FLASH50', discount: 50000, type: 'fixed', minOrder: 200000, uses: 50, maxUses: 50, status: 'Expired', expires: '2024-01-10' },
    { id: 5, code: 'VIP10', discount: 10, type: 'percentage', minOrder: 0, uses: 67, maxUses: 100, status: 'Active', expires: '2024-04-01' },
  ];

  // Mock promotions/deals data
  const deals = [
    { id: 1, name: 'New Year Sale', discount: 30, products: 25, status: 'Active', startDate: '2024-01-01', endDate: '2024-01-15' },
    { id: 2, name: 'Electronics Week', discount: 20, products: 45, status: 'Scheduled', startDate: '2024-02-01', endDate: '2024-02-07' },
    { id: 3, name: 'Flash Sale', discount: 50, products: 10, status: 'Active', startDate: '2024-01-10', endDate: '2024-01-12' },
    { id: 4, name: 'Clearance', discount: 40, products: 32, status: 'Active', startDate: '2024-01-05', endDate: '2024-01-31' },
  ];

  const filteredCoupons = coupons.filter(coupon =>
    coupon.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredDeals = deals.filter(deal =>
    deal.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'Expired':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Promotions</h1>
          <p className="text-sm text-gray-500">Manage coupons and promotional deals</p>
        </div>
        <Button className="bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2">
          <Plus size={20} />
          {activeTab === 'coupons' ? 'Create Coupon' : 'Create Deal'}
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Tag size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{coupons.length}</p>
              <p className="text-sm text-gray-500">Total Coupons</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Percent size={20} className="text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{deals.length}</p>
              <p className="text-sm text-gray-500">Active Deals</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Calendar size={20} className="text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">585</p>
              <p className="text-sm text-gray-500">Total Uses</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Tag size={20} className="text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">UGX 2.4M</p>
              <p className="text-sm text-gray-500">Total Savings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab('coupons')}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition ${
                activeTab === 'coupons'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Coupons
            </button>
            <button
              onClick={() => setActiveTab('deals')}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition ${
                activeTab === 'deals'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Deals & Promotions
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative max-w-md">
            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Coupons Table */}
        {activeTab === 'coupons' && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Code
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Discount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Min Order
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Usage
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Expires
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredCoupons.map((coupon) => (
                  <tr key={coupon.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 bg-gray-100 rounded font-mono text-sm font-semibold text-gray-900">
                        {coupon.code}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {coupon.type === 'percentage' ? `${coupon.discount}%` : `UGX ${coupon.discount.toLocaleString()}`}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {coupon.minOrder > 0 ? `UGX ${coupon.minOrder.toLocaleString()}` : 'None'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {coupon.uses} / {coupon.maxUses}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {coupon.expires}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(coupon.status)}`}>
                        {coupon.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1 text-gray-400 hover:text-green-600 transition">
                          <Edit size={18} />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-red-600 transition">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Deals Table */}
        {activeTab === 'deals' && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Deal Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Discount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Products
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredDeals.map((deal) => (
                  <tr key={deal.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {deal.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {deal.discount}% OFF
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {deal.products} products
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {deal.startDate} - {deal.endDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(deal.status)}`}>
                        {deal.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1 text-gray-400 hover:text-blue-600 transition">
                          {deal.status === 'Active' ? <ToggleRight size={18} /> : <ToggleLeft size={18} />}
                        </button>
                        <button className="p-1 text-gray-400 hover:text-green-600 transition">
                          <Edit size={18} />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-red-600 transition">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Promotions;

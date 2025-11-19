import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Users,
  Eye,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const Analytics = () => {
  // Mock analytics data
  const overviewStats = [
    { name: 'Total Revenue', value: 'UGX 45,231,000', change: '+20.1%', trend: 'up', icon: DollarSign },
    { name: 'Page Views', value: '24,532', change: '+15.3%', trend: 'up', icon: Eye },
    { name: 'Conversion Rate', value: '3.2%', change: '+0.8%', trend: 'up', icon: TrendingUp },
    { name: 'Avg Order Value', value: 'UGX 127,000', change: '-2.4%', trend: 'down', icon: ShoppingCart },
  ];

  const salesByCategory = [
    { category: 'Electronics', sales: 18500000, percentage: 41 },
    { category: 'Clothing', sales: 9800000, percentage: 22 },
    { category: 'Home & Garden', sales: 7200000, percentage: 16 },
    { category: 'Sports', sales: 5400000, percentage: 12 },
    { category: 'Others', sales: 4100000, percentage: 9 },
  ];

  const topLocations = [
    { city: 'Kampala', orders: 245, revenue: 28500000 },
    { city: 'Entebbe', orders: 89, revenue: 10200000 },
    { city: 'Mbarara', orders: 67, revenue: 7800000 },
    { city: 'Jinja', orders: 54, revenue: 6100000 },
    { city: 'Gulu', orders: 42, revenue: 4900000 },
  ];

  const monthlyRevenue = [
    { month: 'Jan', revenue: 3200000 },
    { month: 'Feb', revenue: 2800000 },
    { month: 'Mar', revenue: 3500000 },
    { month: 'Apr', revenue: 4100000 },
    { month: 'May', revenue: 3800000 },
    { month: 'Jun', revenue: 4500000 },
    { month: 'Jul', revenue: 5200000 },
    { month: 'Aug', revenue: 4800000 },
    { month: 'Sep', revenue: 5500000 },
    { month: 'Oct', revenue: 6100000 },
    { month: 'Nov', revenue: 5800000 },
    { month: 'Dec', revenue: 7200000 },
  ];

  const trafficSources = [
    { source: 'Direct', visits: 8500, percentage: 35 },
    { source: 'Organic Search', visits: 6200, percentage: 26 },
    { source: 'Social Media', visits: 4800, percentage: 20 },
    { source: 'Referral', visits: 3200, percentage: 13 },
    { source: 'Email', visits: 1500, percentage: 6 },
  ];

  const maxRevenue = Math.max(...monthlyRevenue.map(m => m.revenue));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-sm text-gray-500">Track your store performance and insights</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {overviewStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Icon size={20} className="text-blue-600" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                  {stat.change}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.name}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly Revenue</h2>
          <div className="h-64 flex items-end gap-2">
            {monthlyRevenue.map((month) => (
              <div key={month.month} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition cursor-pointer"
                  style={{ height: `${(month.revenue / maxRevenue) * 200}px` }}
                  title={`UGX ${month.revenue.toLocaleString()}`}
                />
                <span className="text-xs text-gray-500 mt-2">{month.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sales by Category */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Sales by Category</h2>
          <div className="space-y-4">
            {salesByCategory.map((item) => (
              <div key={item.category}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{item.category}</span>
                  <span className="text-sm text-gray-500">UGX {item.sales.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Locations */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Locations</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs font-medium text-gray-500 uppercase">
                  <th className="pb-3">City</th>
                  <th className="pb-3">Orders</th>
                  <th className="pb-3">Revenue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {topLocations.map((location) => (
                  <tr key={location.city}>
                    <td className="py-3 text-sm font-medium text-gray-900">{location.city}</td>
                    <td className="py-3 text-sm text-gray-500">{location.orders}</td>
                    <td className="py-3 text-sm text-gray-900">UGX {location.revenue.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h2>
          <div className="space-y-4">
            {trafficSources.map((source) => (
              <div key={source.source} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-sm font-medium text-gray-700">{source.source}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">{source.visits.toLocaleString()} visits</span>
                  <span className="text-sm font-semibold text-gray-900">{source.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

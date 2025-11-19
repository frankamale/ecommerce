import {
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
  // TrendingDown,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const Dashboard = () => {
  // Mock data for dashboard
  const stats = [
    {
      name: 'Total Revenue',
      value: 'UGX 45,231,000',
      change: '+20.1%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      name: 'Orders',
      value: '356',
      change: '+12.5%',
      trend: 'up',
      icon: ShoppingCart,
      color: 'bg-blue-500'
    },
    {
      name: 'Customers',
      value: '2,103',
      change: '+8.2%',
      trend: 'up',
      icon: Users,
      color: 'bg-purple-500'
    },
    {
      name: 'Products',
      value: '145',
      change: '-2.4%',
      trend: 'down',
      icon: Package,
      color: 'bg-orange-500'
    }
  ];

  const recentOrders = [
    { id: 'ORD-001', customer: 'Nakato Sarah', total: 125000, status: 'Completed', date: '2024-01-15' },
    { id: 'ORD-002', customer: 'Okello James', total: 89000, status: 'Processing', date: '2024-01-15' },
    { id: 'ORD-003', customer: 'Apio Grace', total: 234000, status: 'Shipped', date: '2024-01-14' },
    { id: 'ORD-004', customer: 'Mugisha Peter', total: 56000, status: 'Pending', date: '2024-01-14' },
    { id: 'ORD-005', customer: 'Nambi Rose', total: 178000, status: 'Completed', date: '2024-01-13' },
  ];

  const topProducts = [
    { name: 'Wireless Headphones', sales: 124, revenue: 12400000 },
    { name: 'Smart Watch Pro', sales: 98, revenue: 19600000 },
    { name: 'Laptop Stand', sales: 87, revenue: 4350000 },
    { name: 'USB-C Hub', sales: 76, revenue: 3800000 },
    { name: 'Mechanical Keyboard', sales: 65, revenue: 5850000 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Processing':
        return 'bg-blue-100 text-blue-800';
      case 'Shipped':
        return 'bg-purple-100 text-purple-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon size={24} className="text-white" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? (
                    <ArrowUpRight size={16} />
                  ) : (
                    <ArrowDownRight size={16} />
                  )}
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

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
              <a href="/admin/orders" className="text-sm text-blue-600 hover:text-blue-700">
                View all
              </a>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      UGX {order.total.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Top Products</h2>
              <a href="/admin/products" className="text-sm text-blue-600 hover:text-blue-700">
                View all
              </a>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-500 w-6">
                      #{index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{product.name}</p>
                      <p className="text-xs text-gray-500">{product.sales} sales</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">
                    UGX {product.revenue.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a
            href="/admin/products/new"
            className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
          >
            <Package size={24} className="text-blue-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">Add Product</span>
          </a>
          <a
            href="/admin/orders"
            className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
          >
            <ShoppingCart size={24} className="text-green-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">View Orders</span>
          </a>
          <a
            href="/admin/customers"
            className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
          >
            <Users size={24} className="text-purple-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">Customers</span>
          </a>
          <a
            href="/admin/analytics"
            className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
          >
            <TrendingUp size={24} className="text-orange-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">Analytics</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

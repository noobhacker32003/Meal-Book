import React from 'react';

const Dashboard = () => {
  // Mock Data
  const stats = [
    { label: 'Total Meals This Month', value: '142', change: '+12%', color: 'bg-indigo-50 text-indigo-600' },
    { label: 'Total Expense', value: '৳ 5,200', change: 'On track', color: 'bg-green-50 text-green-600' },
    { label: 'Current Balance', value: '৳ 1,800', change: 'Low balance', color: 'bg-yellow-50 text-yellow-600' },
  ];

  const recentMeals = [
    { id: 1, user: 'Asheq', date: 'Jan 14, 2026', type: 'Lunch', count: 1 },
    { id: 2, user: 'Rahim', date: 'Jan 14, 2026', type: 'Lunch', count: 1 },
    { id: 3, user: 'Karim', date: 'Jan 14, 2026', type: 'Lunch', count: 0 },
    { id: 4, user: 'Asheq', date: 'Jan 13, 2026', type: 'Dinner', count: 1 },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Overview of hostel meal status.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                   {/* Icon placeholder */}
                   <div className={`h-10 w-10 rounded-md flex items-center justify-center ${stat.color}`}>
                     #
                   </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">{stat.label}</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                  </dd>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Meal Entries</h3>
        </div>
        <ul className="divide-y divide-gray-200">
          {recentMeals.map((meal) => (
            <li key={meal.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                   <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                     {meal.user[0]}
                   </div>
                   <div className="ml-3">
                     <p className="text-sm font-medium text-indigo-600 truncate">{meal.user}</p>
                     <p className="flex text-xs text-gray-500">
                        <span>{meal.date}</span>
                        <span className="mx-1">&middot;</span>
                        <span>{meal.type}</span>
                     </p>
                   </div>
                </div>
                <div className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                  {meal.count} Meal
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="bg-gray-50 px-4 py-4 sm:px-6 rounded-b-lg">
          <div className="text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">View all history <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';

const MainLayout = ({ children, currentPage, onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => onNavigate('dashboard')}>
                <span className="text-xl font-bold text-indigo-600">MealBook</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => onNavigate('dashboard')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === 'dashboard' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Dashboard
              </button>
              <button 
                onClick={() => onNavigate('meals')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === 'meals' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Meals
              </button>
              <div className="h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold">
                A
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      
      {/* Simple Footer */}
      <footer className="bg-white py-4 border-t border-gray-100 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-sm">
          &copy; 2026 MealBook. Hostel Management System.
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;

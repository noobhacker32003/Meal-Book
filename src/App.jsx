import React, { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Meals from './pages/Meals';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <MainLayout currentPage={currentPage} onNavigate={setCurrentPage}>
      {currentPage === 'dashboard' && <Dashboard />}
      {currentPage === 'meals' && <Meals />}
    </MainLayout>
  );
}

export default App;

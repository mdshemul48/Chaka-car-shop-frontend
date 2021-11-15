import React from 'react';
import useAuth from '../../hooks/useAuth';

import AdminDashboard from '../AdminDashboard/AdminDashboard';
import UserDashboard from '../UserDashboard/UserDashboard';

const Dashboard = () => {
  const { adminRole, isLoading, user } = useAuth();
  if (adminRole && isLoading) {
    return <div>Loading...</div>;
  }
  return adminRole ? <AdminDashboard /> : <UserDashboard />;
};

export default Dashboard;

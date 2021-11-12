import React from 'react';
import useAuth from '../../hooks/useAuth';

import AdminDashboard from '../AdminDashboard/AdminDashboard';
import UserDashboard from '../UserDashboard/UserDashboard';

const Dashboard = () => {
  const { adminRole } = useAuth();
  return adminRole ? <AdminDashboard /> : <UserDashboard />;
};

export default Dashboard;

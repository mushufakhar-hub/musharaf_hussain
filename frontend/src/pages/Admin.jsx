import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminLogin from '../components/admin/AdminLogin';
import AdminDashboard from '../components/admin/AdminDashboard';
import DashboardOverview from '../components/admin/DashboardOverview';
import ProjectManager from '../components/admin/ProjectManager';
import SkillManager from '../components/admin/SkillManager';
import MessageViewer from '../components/admin/MessageViewer';

export default function Admin() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <Routes>
      <Route
        path="login"
        element={user ? <Navigate to="/admin/dashboard" /> : <AdminLogin />}
      />
      <Route
        path="dashboard"
        element={user ? <AdminDashboard /> : <Navigate to="/admin/login" />}
      >
        <Route index element={<DashboardOverview />} />
        <Route path="projects" element={<ProjectManager />} />
        <Route path="skills" element={<SkillManager />} />
        <Route path="messages" element={<MessageViewer />} />
      </Route>
      <Route path="*" element={<Navigate to={user ? '/admin/dashboard' : '/admin/login'} />} />
    </Routes>
  );
}

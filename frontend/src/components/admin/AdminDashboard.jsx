import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, NavLink, Outlet } from 'react-router-dom';
import {
  LayoutDashboard,
  FolderKanban,
  Wrench,
  MessageSquare,
  LogOut,
  Menu,
  X,
  ArrowLeft,
} from 'lucide-react';
import toast from 'react-hot-toast';

const navItems = [
  { to: '', label: 'Overview', icon: LayoutDashboard, end: true },
  { to: 'projects', label: 'Projects', icon: FolderKanban },
  { to: 'skills', label: 'Skills', icon: Wrench },
  { to: 'messages', label: 'Messages', icon: MessageSquare },
];

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [stats, setStats] = useState({ projects: 0, skills: 0, messages: 0, unread: 0 });

  const handleLogout = () => {
    logout();
    toast.success('Logged out');
    navigate('/admin/login');
  };

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
        const token = localStorage.getItem('token');
        const headers = { Authorization: `Bearer ${token}` };

        const [projRes, skillRes, msgRes] = await Promise.all([
          fetch(`${API_URL}/projects`).then((r) => r.json()),
          fetch(`${API_URL}/skills`).then((r) => r.json()),
          fetch(`${API_URL}/messages`, { headers }).then((r) => r.json()),
        ]);

        setStats({
          projects: projRes.success ? projRes.data.length : 0,
          skills: skillRes.success ? skillRes.data.length : 0,
          messages: msgRes.success ? msgRes.data.length : 0,
          unread: msgRes.success ? msgRes.data.filter((m) => !m.is_read).length : 0,
        });
      } catch (err) {
        console.error('Stats fetch error:', err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">MH</span>
              </div>
              <div>
                <h2 className="font-bold text-gray-900 dark:text-white">Admin Panel</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex-1 p-4 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`
                }
              >
                <item.icon size={20} />
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-800 space-y-2">
            <a
              href="/"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <ArrowLeft size={20} />
              View Portfolio
            </a>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors w-full"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 min-h-screen">
        {/* Top Bar */}
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Menu size={20} />
          </button>
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
              <span className="text-primary-600 dark:text-primary-400 font-bold text-xs">
                {user?.name?.charAt(0) || 'A'}
              </span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          <Outlet context={{ stats }} />
        </main>
      </div>
    </div>
  );
}

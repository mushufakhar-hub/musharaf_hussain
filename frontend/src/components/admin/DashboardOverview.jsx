import { FolderKanban, Wrench, MessageSquare, Eye } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

const statCards = [
  { key: 'projects', label: 'Total Projects', icon: FolderKanban, color: 'bg-blue-500' },
  { key: 'skills', label: 'Total Skills', icon: Wrench, color: 'bg-green-500' },
  { key: 'messages', label: 'Total Messages', icon: MessageSquare, color: 'bg-purple-500' },
  { key: 'unread', label: 'Unread Messages', icon: Eye, color: 'bg-orange-500' },
];

export default function DashboardOverview() {
  const { stats } = useOutletContext();

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Welcome to your Dashboard
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((card) => (
          <div
            key={card.key}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center`}>
                <card.icon size={24} className="text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats[card.key] || 0}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{card.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <a
            href="/admin/dashboard/projects"
            className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
          >
            <FolderKanban size={20} />
            <span className="font-medium">Manage Projects</span>
          </a>
          <a
            href="/admin/dashboard/skills"
            className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
          >
            <Wrench size={20} />
            <span className="font-medium">Manage Skills</span>
          </a>
          <a
            href="/admin/dashboard/messages"
            className="flex items-center gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
          >
            <MessageSquare size={20} />
            <span className="font-medium">View Messages</span>
          </a>
        </div>
      </div>
    </div>
  );
}

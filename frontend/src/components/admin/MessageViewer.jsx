import { useState, useEffect } from 'react';
import { Trash2, Eye, Mail, Clock } from 'lucide-react';
import toast from 'react-hot-toast';
import { messagesAPI } from '../../utils/api';

export default function MessageViewer() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const res = await messagesAPI.getAll();
      if (res.success) setMessages(res.data);
    } catch {
      toast.error('Failed to load messages');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleMarkRead = async (id) => {
    try {
      const res = await messagesAPI.markRead(id);
      if (res.success) {
        setMessages((prev) =>
          prev.map((m) => (m.id === id ? { ...m, is_read: true } : m))
        );
      }
    } catch {
      toast.error('Failed to mark as read');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this message?')) return;
    try {
      const res = await messagesAPI.delete(id);
      if (res.success) {
        toast.success('Message deleted');
        setMessages((prev) => prev.filter((m) => m.id !== id));
      }
    } catch {
      toast.error('Delete failed');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const unreadCount = messages.filter((m) => !m.is_read).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Messages</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {unreadCount > 0 ? `${unreadCount} unread message${unreadCount > 1 ? 's' : ''}` : 'All messages read'}
          </p>
        </div>
      </div>

      {messages.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
          <Mail size={40} className="text-gray-300 dark:text-gray-600 mx-auto mb-3" />
          <p className="text-gray-500 dark:text-gray-400">No messages yet</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-5 border transition-colors ${
                msg.is_read
                  ? 'border-gray-200 dark:border-gray-700'
                  : 'border-primary-300 dark:border-primary-700 bg-primary-50/30 dark:bg-primary-900/10'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-gray-900 dark:text-white">{msg.name}</h4>
                    {!msg.is_read && (
                      <span className="px-2 py-0.5 bg-primary-500 text-white text-xs rounded-full font-medium">
                        New
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Mail size={14} />
                      {msg.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {new Date(msg.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  {msg.subject && (
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {msg.subject}
                    </p>
                  )}
                  <p className="text-sm text-gray-600 dark:text-gray-400">{msg.message}</p>
                </div>

                <div className="flex items-center gap-1 flex-shrink-0">
                  {!msg.is_read && (
                    <button
                      onClick={() => handleMarkRead(msg.id)}
                      className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
                      title="Mark as read"
                    >
                      <Eye size={16} />
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(msg.id)}
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

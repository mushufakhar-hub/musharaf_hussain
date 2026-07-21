import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface-50 px-4 dark:bg-surface-950">
      <div className="w-full max-w-xl rounded-3xl border border-surface-200 bg-white/80 p-10 text-center shadow-2xl shadow-primary-500/10 backdrop-blur dark:border-white/10 dark:bg-surface-900/80">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-2xl font-bold text-white">
          404
        </div>
        <h1 className="mb-3 text-3xl font-bold text-surface-900 dark:text-white">Page not found</h1>
        <p className="mb-8 text-surface-600 dark:text-surface-300">
          The page you are looking for might have been moved or no longer exists.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <Home size={18} />
            Back Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-outline inline-flex items-center gap-2">
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

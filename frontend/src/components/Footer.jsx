import { Heart, Github, Linkedin, Mail, ArrowUp, MessageCircle } from 'lucide-react';
import { profileData } from '../utils/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-950 text-surface-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center shadow-lg shadow-primary-500/30">
                <span className="text-white font-bold text-xs">MH</span>
              </div>
              <span className="font-bold text-white">Musharaf Hussain</span>
            </div>
            <p className="text-sm text-surface-300">Receptionist & Aspiring Business Professional</p>
          </div>

          {/* Center - Social */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:mushufakhar@gmail.com"
              className="w-10 h-10 bg-surface-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-surface-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-surface-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profileData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-surface-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
            </a>
          </div>

          {/* Right */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-surface-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-surface-800 text-center text-sm">
          <p className="flex items-center justify-center gap-1 text-surface-300">
            Made with <Heart size={14} className="text-red-500" /> by Musharaf Hussain
          </p>
          <p className="mt-1 text-surface-500">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

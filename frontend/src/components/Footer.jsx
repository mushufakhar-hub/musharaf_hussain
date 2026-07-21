import { Heart, Github, Linkedin, Mail, ArrowUp, MessageCircle } from 'lucide-react';
import { profileData } from '../utils/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-950 py-12 text-surface-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <div className="mb-2 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg shadow-primary-500/30">
                <span className="text-xs font-bold text-white">MH</span>
              </div>
              <span className="font-bold text-white">Musharaf Hussain</span>
            </div>
            <p className="text-sm text-surface-300">Full Stack Developer | Generative AI Engineer</p>
          </div>

          <div className="flex items-center gap-3">
            <a href={`mailto:${profileData.email}`} className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-600">
              <Mail size={18} />
            </a>
            <a href={profileData.github} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-600">
              <Github size={18} />
            </a>
            <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-600">
              <Linkedin size={18} />
            </a>
            <a href={profileData.whatsapp} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600">
              <MessageCircle size={18} />
            </a>
          </div>

          <button onClick={scrollToTop} className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-600" aria-label="Scroll to top">
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="mt-8 border-t border-surface-800 pt-8 text-center text-sm">
          <p className="flex items-center justify-center gap-1 text-surface-300">
            Made with <Heart size={14} className="text-red-500" /> by Musharaf Hussain
          </p>
          <p className="mt-1 text-surface-500">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

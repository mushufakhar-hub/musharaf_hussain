import { motion } from 'framer-motion';
import { MapPin, Mail, Download, ChevronDown, MessageCircle } from 'lucide-react';
import { profileData } from '../utils/data';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-hero-gradient"
    >
      {/* Animated mesh overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.3),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.2),transparent_50%)]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-accent-300 px-4 py-2 rounded-full text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Available for opportunities
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-5 tracking-tight">
              Hi, I'm{' '}
              <span className="gradient-text-hero">{profileData.name}</span>
            </h1>

            <p className="text-xl sm:text-2xl text-accent-300 font-semibold mb-4">
              {profileData.heroTitle}
            </p>

            <p className="text-white/60 text-lg mb-8 max-w-lg leading-relaxed">
              {profileData.profile}
            </p>

            {/* Quick info */}
            <div className="flex flex-wrap gap-5 mb-10 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-accent-400" />
                {profileData.location}
              </span>
              <span className="flex items-center gap-2">
                <Mail size={16} className="text-accent-400" />
                {profileData.email}
              </span>
              <a
                href={profileData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle size={16} className="text-emerald-400" />
                {profileData.phone}
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                <Mail size={18} />
                Get in Touch
              </a>
              <a
                href={profileData.resumeUrl}
                download
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-8 bg-gradient-to-tr from-primary-500/30 to-accent-500/30 rounded-full blur-2xl animate-pulse" />
              {/* Rotating border */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-primary-400 via-accent-400 to-primary-500 opacity-60" style={{ animation: 'spin 8s linear infinite' }} />
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-primary-500/30 bg-gradient-to-br from-primary-700 to-primary-900">
                <img
                  src={profileData.profileImage}
                  alt={profileData.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -right-2 top-8 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl px-4 py-2.5 text-sm font-semibold text-white"
              >
                🎓 BBA Student
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                className="absolute -left-2 bottom-14 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl px-4 py-2.5 text-sm font-semibold text-white"
              >
                💼 Receptionist
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" className="text-white/30 hover:text-white/60 transition-colors">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}

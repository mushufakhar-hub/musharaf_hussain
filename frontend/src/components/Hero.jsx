import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Download, ChevronDown, Github, Linkedin, ArrowRight } from 'lucide-react';
import { profileData } from '../utils/data';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const words = profileData.typingWords;
    const currentWord = words[wordIndex];

    if (!isDeleting && displayText === currentWord) {
      const timeout = window.setTimeout(() => setIsDeleting(true), 1400);
      return () => window.clearTimeout(timeout);
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
      );
    }, isDeleting ? 60 : 90);

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-14 -left-14 h-72 w-72 rounded-full bg-gradient-to-br from-primary-500/30 via-accent-400/20 to-transparent blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-accent-400/20 blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 backdrop-blur-md"
            >
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
              Available for innovative opportunities
            </motion.div>

            <h1 className="mb-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-cyan-200 via-sky-100 to-amber-300 bg-clip-text text-transparent">
                {profileData.name}
              </span>
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3 text-lg sm:text-xl">
              <span className="font-semibold text-cyan-200">{profileData.heroTitle}</span>
              <span className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-100">
                {displayText}
                <span className="ml-1 animate-pulse">|</span>
              </span>
            </div>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-200/90">
              {profileData.profile}
            </p>

            <div className="mb-8 flex flex-wrap gap-4 text-sm text-slate-200/85">
              <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 backdrop-blur">
                <MapPin size={16} className="text-cyan-300" />
                {profileData.location}
              </span>
              <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 backdrop-blur">
                <Mail size={16} className="text-cyan-300" />
                {profileData.email}
              </span>
            </div>

            <div className="mb-10 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                <Mail size={18} />
                Let&apos;s Talk
              </a>
              <a
                href={profileData.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/20 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/20"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/20 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/20"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-100 transition hover:bg-amber-500/20">
                Contact Me
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-primary-500/30 via-accent-400/20 to-amber-400/20 blur-2xl" />
              <div className="absolute -inset-2 rounded-full border border-white/20" style={{ animation: 'spin 10s linear infinite' }} />
              <div className="relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-full border-4 border-white/20 bg-gradient-to-br from-primary-700 via-primary-600 to-accent-500 shadow-2xl shadow-primary-900/30 sm:h-80 sm:w-80">
                {!imageError ? (
                  <img
                    src={profileData.profileImage}
                    alt={profileData.name}
                    className="h-full w-full object-cover object-top"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="text-center text-white">
                    <div className="mb-3 text-5xl font-bold">MH</div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-100/80">Developer</p>
                  </div>
                )}
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -right-2 top-8 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-xl backdrop-blur"
              >
                ✨ AI + Web
              </motion.div>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                className="absolute -left-2 bottom-10 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-xl backdrop-blur"
              >
                🚀 Product Builder
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <a href="#about" className="text-white/40 transition-colors hover:text-white/70">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Courses from '../components/Courses';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { projectsAPI, skillsAPI } from '../utils/api';
import { defaultSkills } from '../utils/data';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState(defaultSkills);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projRes, skillRes] = await Promise.all([
          projectsAPI.getAll(),
          skillsAPI.getAll(),
        ]);
        if (projRes.success) setProjects(projRes.data);
        if (skillRes.success) setSkills(skillRes.data);
      } catch (err) {
        console.error('Failed to fetch data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 dark:text-gray-400 font-medium">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

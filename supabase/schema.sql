-- =============================================
-- Supabase SQL Schema for Musharaf's Portfolio
-- Run this in Supabase SQL Editor
-- =============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- TABLES
-- =============================================

-- Users table (admin authentication)
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Profile table
CREATE TABLE IF NOT EXISTS profile (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) DEFAULT 'Musharaf Hussain',
  email VARCHAR(255) DEFAULT 'mushufakhar@gmail.com',
  phone VARCHAR(50) DEFAULT '+923554464192',
  location VARCHAR(255) DEFAULT 'Skardu, Gilgit-Baltistan, Pakistan',
  linkedin VARCHAR(500) DEFAULT 'https://linkedin.com/in/musharaf-hussain-7a054124a',
  profile TEXT DEFAULT 'Experienced receptionist skilled in managing communication channels and providing excellent customer service. Strong multitasking and professionalism.',
  hero_title VARCHAR(255) DEFAULT 'Receptionist & Aspiring Business Professional',
  resume_url VARCHAR(500) DEFAULT '/resume.pdf',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  tech_stack TEXT,
  github_link VARCHAR(500),
  live_link VARCHAR(500),
  image_url VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Skills table
CREATE TABLE IF NOT EXISTS skills (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) DEFAULT 'Technical',
  proficiency INTEGER DEFAULT 50 CHECK (proficiency >= 0 AND proficiency <= 100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Messages table (contact form)
CREATE TABLE IF NOT EXISTS messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(500),
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================
-- ROW LEVEL SECURITY (RLS)
-- =============================================

-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Public read projects" ON projects FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public read skills" ON skills FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public read profile" ON profile FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public send messages" ON messages FOR INSERT TO anon, authenticated WITH CHECK (true);

-- Admin-only write policies (using service_role key bypasses RLS, but add these for safety)
CREATE POLICY "Admin manage projects" ON projects FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin manage skills" ON skills FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin manage profile" ON profile FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin read messages" ON messages FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admin manage messages" ON messages FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Admin manage users" ON users FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- =============================================
-- SEED DATA
-- =============================================

-- Insert default profile
INSERT INTO profile (id, name, email, phone, location, linkedin, profile, hero_title)
VALUES (
  1,
  'Musharaf Hussain',
  'mushufakhar@gmail.com',
  '+923554464192',
  'Skardu, Gilgit-Baltistan, Pakistan',
  'https://linkedin.com/in/musharaf-hussain-7a054124a',
  'Experienced receptionist skilled in managing communication channels and providing excellent customer service. Strong multitasking and professionalism.',
  'Receptionist & Aspiring Business Professional'
) ON CONFLICT (id) DO NOTHING;

-- Insert default skills
INSERT INTO skills (name, category, proficiency) VALUES
  ('Organizational Behavior', 'Professional', 85),
  ('Front Desk Management', 'Professional', 90),
  ('C++', 'Technical', 65),
  ('Python', 'Technical', 70),
  ('Generative AI', 'Technical', 75);

-- Insert sample projects (optional - remove or modify as needed)
INSERT INTO projects (title, description, tech_stack, github_link, live_link) VALUES
  (
    'Portfolio Website',
    'A modern personal portfolio website built with React and Tailwind CSS, featuring smooth animations and responsive design.',
    'React, Tailwind CSS, Framer Motion',
    'https://github.com/musharaf',
    'https://musharaf.dev'
  ),
  (
    'AI Chat Assistant',
    'A generative AI chatbot built with Python and TensorFlow, capable of natural language conversations.',
    'Python, TensorFlow, Flask',
    'https://github.com/musharaf',
    ''
  );

-- =============================================
-- INDEXES
-- =============================================
CREATE INDEX IF NOT EXISTS idx_projects_created ON projects (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_skills_category ON skills (category);
CREATE INDEX IF NOT EXISTS idx_messages_read ON messages (is_read);
CREATE INDEX IF NOT EXISTS idx_messages_created ON messages (created_at DESC);

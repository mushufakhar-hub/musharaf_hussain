const supabase = require('../config/db');

// Get all projects (public)
const getProjects = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    console.error('Get projects error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Get single project (public)
const getProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !data) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    res.json({ success: true, data });
  } catch (error) {
    console.error('Get project error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Create project (admin)
const createProject = async (req, res) => {
  try {
    const { title, description, tech_stack, github_link, live_link } = req.body;
    const image_url = req.file ? `/uploads/${req.file.filename}` : null;

    const { data, error } = await supabase
      .from('projects')
      .insert([{
        title,
        description,
        tech_stack,
        github_link,
        live_link,
        image_url,
      }])
      .select()
      .single();

    if (error) throw error;

    res.status(201).json({ success: true, data });
  } catch (error) {
    console.error('Create project error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Update project (admin)
const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, tech_stack, github_link, live_link } = req.body;
    const updateData = { title, description, tech_stack, github_link, live_link };

    if (req.file) {
      updateData.image_url = `/uploads/${req.file.filename}`;
    }

    const { data, error } = await supabase
      .from('projects')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    console.error('Update project error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Delete project (admin)
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id);

    if (error) throw error;

    res.json({ success: true, message: 'Project deleted' });
  } catch (error) {
    console.error('Delete project error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = { getProjects, getProject, createProject, updateProject, deleteProject };

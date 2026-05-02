const supabase = require('../config/db');

// Get all skills (public)
const getSkills = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('category', { ascending: true });

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    console.error('Get skills error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Create skill (admin)
const createSkill = async (req, res) => {
  try {
    const { name, category, proficiency } = req.body;

    const { data, error } = await supabase
      .from('skills')
      .insert([{ name, category, proficiency }])
      .select()
      .single();

    if (error) throw error;

    res.status(201).json({ success: true, data });
  } catch (error) {
    console.error('Create skill error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Update skill (admin)
const updateSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, proficiency } = req.body;

    const { data, error } = await supabase
      .from('skills')
      .update({ name, category, proficiency })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    console.error('Update skill error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Delete skill (admin)
const deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from('skills')
      .delete()
      .eq('id', id);

    if (error) throw error;

    res.json({ success: true, message: 'Skill deleted' });
  } catch (error) {
    console.error('Delete skill error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = { getSkills, createSkill, updateSkill, deleteSkill };

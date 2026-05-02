const supabase = require('../config/db');

// Get public profile data
const getProfile = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('profile')
      .select('*')
      .single();

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Update profile (admin)
const updateProfile = async (req, res) => {
  try {
    const updates = req.body;

    const { data, error } = await supabase
      .from('profile')
      .update(updates)
      .eq('id', 1)
      .select()
      .single();

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = { getProfile, updateProfile };

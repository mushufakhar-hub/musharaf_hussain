import { useState, useEffect } from 'react';
import { Plus, Pencil, Trash2, X } from 'lucide-react';
import toast from 'react-hot-toast';
import { skillsAPI } from '../../utils/api';

const emptyForm = { name: '', category: 'Technical', proficiency: 50 };

export default function SkillManager() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const fetchSkills = async () => {
    try {
      const res = await skillsAPI.getAll();
      if (res.success) setSkills(res.data);
    } catch {
      toast.error('Failed to load skills');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleChange = (e) => {
    const val = e.target.name === 'proficiency' ? parseInt(e.target.value) || 0 : e.target.value;
    setForm((prev) => ({ ...prev, [e.target.name]: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      let res;
      if (editingId) {
        res = await skillsAPI.update(editingId, form);
      } else {
        res = await skillsAPI.create(form);
      }

      if (res.success) {
        toast.success(editingId ? 'Skill updated!' : 'Skill created!');
        resetForm();
        fetchSkills();
      } else {
        toast.error(res.message || 'Operation failed');
      }
    } catch {
      toast.error('Something went wrong');
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (skill) => {
    setForm({
      name: skill.name,
      category: skill.category,
      proficiency: skill.proficiency,
    });
    setEditingId(skill.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this skill?')) return;
    try {
      const res = await skillsAPI.delete(id);
      if (res.success) {
        toast.success('Skill deleted');
        fetchSkills();
      }
    } catch {
      toast.error('Delete failed');
    }
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h2>
        <button
          onClick={() => { resetForm(); setShowForm(true); }}
          className="btn-primary flex items-center gap-2 text-sm"
        >
          <Plus size={18} />
          Add Skill
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {editingId ? 'Edit Skill' : 'New Skill'}
              </h3>
              <button onClick={resetForm} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Skill Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
                >
                  <option value="Technical">Technical</option>
                  <option value="Professional">Professional</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Proficiency: {form.proficiency}%
                </label>
                <input
                  type="range"
                  name="proficiency"
                  min="10"
                  max="100"
                  step="5"
                  value={form.proficiency}
                  onChange={handleChange}
                  className="w-full accent-primary-600"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button type="submit" disabled={saving} className="btn-primary flex-1 disabled:opacity-50">
                  {saving ? 'Saving...' : editingId ? 'Update Skill' : 'Create Skill'}
                </button>
                <button type="button" onClick={resetForm} className="btn-outline">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Skills List */}
      <div className="grid gap-3">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-gray-200 dark:border-gray-700 flex items-center gap-4"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                <span className="px-2 py-0.5 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded text-xs">
                  {skill.category}
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-primary-500 to-primary-600 h-full rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400 w-12 text-right">
              {skill.proficiency}%
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => handleEdit(skill)}
                className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
              >
                <Pencil size={16} />
              </button>
              <button
                onClick={() => handleDelete(skill.id)}
                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

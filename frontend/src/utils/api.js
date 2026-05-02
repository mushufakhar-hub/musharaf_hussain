const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Projects API
export const projectsAPI = {
  getAll: () => fetch(`${API_URL}/projects`).then((r) => r.json()),
  getOne: (id) => fetch(`${API_URL}/projects/${id}`).then((r) => r.json()),
  create: (formData) =>
    fetch(`${API_URL}/projects`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: formData,
    }).then((r) => r.json()),
  update: (id, formData) =>
    fetch(`${API_URL}/projects/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: formData,
    }).then((r) => r.json()),
  delete: (id) =>
    fetch(`${API_URL}/projects/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    }).then((r) => r.json()),
};

// Skills API
export const skillsAPI = {
  getAll: () => fetch(`${API_URL}/skills`).then((r) => r.json()),
  create: (data) =>
    fetch(`${API_URL}/skills`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
      body: JSON.stringify(data),
    }).then((r) => r.json()),
  update: (id, data) =>
    fetch(`${API_URL}/skills/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
      body: JSON.stringify(data),
    }).then((r) => r.json()),
  delete: (id) =>
    fetch(`${API_URL}/skills/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    }).then((r) => r.json()),
};

// Messages API
export const messagesAPI = {
  send: (data) =>
    fetch(`${API_URL}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then((r) => r.json()),
  getAll: () =>
    fetch(`${API_URL}/messages`, { headers: getAuthHeaders() }).then((r) => r.json()),
  markRead: (id) =>
    fetch(`${API_URL}/messages/${id}/read`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
    }).then((r) => r.json()),
  delete: (id) =>
    fetch(`${API_URL}/messages/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    }).then((r) => r.json()),
};

// Profile API
export const profileAPI = {
  get: () => fetch(`${API_URL}/profile`).then((r) => r.json()),
  update: (data) =>
    fetch(`${API_URL}/profile`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
      body: JSON.stringify(data),
    }).then((r) => r.json()),
};

import axios from 'axios';

// Base URL: in production set VITE_API_URL in your .env file
// In development, Vite proxy handles /api → localhost:5000
const BASE_URL = import.meta.env.VITE_API_URL || '';

const api = axios.create({
  baseURL: `${BASE_URL}/api`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ── Request Interceptor ──────────────────────────────────────────────────────
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ── Response Interceptor ─────────────────────────────────────────────────────
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message =
      error.response?.data?.message || error.message || 'Something went wrong';
    return Promise.reject(new Error(message));
  }
);

// ── Service Methods ──────────────────────────────────────────────────────────
export const portfolioService = {
  getProfile: () => api.get('/profile'),
  getSkills: () => api.get('/skills'),
  getProjects: () => api.get('/projects'),
  getServices: () => api.get('/services'),
  getEducation: () => api.get('/education'),
  submitContact: (data) => api.post('/contact', data),
};

export default api;

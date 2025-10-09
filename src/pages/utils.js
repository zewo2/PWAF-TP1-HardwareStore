// src/pages/utils.js
// Utility functions for BuildIT SPA

export function getFavourites() {
  try {
    return JSON.parse(localStorage.getItem('favourites') || '[]');
  } catch {
    return [];
  }
}

// get favs to avoid duped code
export function getFavourites() {
  try {
    return JSON.parse(localStorage.getItem('favourites') || '[]');
  } catch {
    return [];
  }
}

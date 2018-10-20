let API_URL = 'https://community-ec-api.now.sh/api';
if (window.location.hostname === 'localhost') {
  API_URL = 'http://localhost:3000/';
}

export default async function isAdmin() {
  const response = await fetch(`${API_URL}/auth/isAdmin`);
  return response.json();
}

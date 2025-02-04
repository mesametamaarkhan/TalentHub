import axios from 'axios';

const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  const accessToken = localStorage.getItem('accessToken');

  if (!refreshToken) {
    console.warn('No refresh token found, user might need to log in again.');
    return;
  }

  
  console.log(`Access Token: ${accessToken}`);
  try {
    const response = await axios.post('http://localhost:8080/users/refresh-token', { refreshToken });

    if (response.status === 200) {
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      console.log('Access token refreshed successfully');
    }
  } catch (error) {
    console.error('Error refreshing access token:', error);
    // Handle token refresh failure (e.g., logout)
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
};

export default refreshAccessToken;
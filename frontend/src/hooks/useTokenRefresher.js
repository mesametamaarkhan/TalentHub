import { useEffect } from 'react';
import refreshAccessToken from '../utility/TokenRefresher.js';

const useTokenRefresher = () => {
  useEffect(() => {
    const refreshInterval = setInterval(() => {
      refreshAccessToken();
    }, 15 * 60 * 1000); // 15 minutes

    // Cleanup interval on component unmount
    return () => clearInterval(refreshInterval);
  }, []);
};

export default useTokenRefresher;

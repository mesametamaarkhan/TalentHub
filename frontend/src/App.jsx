import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GigsPage from './pages/FreelancersPage';
import InternshipsPage from './pages/InternshipsPage';
import ProfilePage from './pages/ProfilePage';
import InternshipDetailPage from './pages/InternshipDetailPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FreelancerDetailPage from './pages/FreelancerDetailPage';
import ScrollToTop from './components/ScrollToTop';
import useTokenRefresher from './hooks/useTokenRefresher';

const App = () => {
  useTokenRefresher();

  return (
    <div>
      <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gigs" element={<GigsPage />} />
          <Route path="/internships" element={<InternshipsPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/gig/:id" element={<FreelancerDetailPage />} />
          <Route path="/internship/:id" element={<InternshipDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
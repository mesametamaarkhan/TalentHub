import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FreelancersPage from './pages/FreelancersPage';
import InternshipsPage from './pages/InternshipsPage';
import CompaniesPage from './pages/CompaniesPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InternshipDetailPage from './pages/InternshipDetailPage';
import CompanyDetailPage from './pages/CompanyDetailPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FreelancerDetailPage from './pages/FreelancerDetailPage';
import InternProfilePage from './pages/InternProfilePage';
import CompanyProfilePage from './pages/CompanyProfilePage';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div>
      <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freelancers" element={<FreelancersPage />} />
          <Route path="/internships" element={<InternshipsPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/f-profile/:id" element={<ProfilePage />} />
          <Route path="/i-profile/:id" element={<InternProfilePage />} />
          <Route path="/c-profile/:id" element={<CompanyProfilePage />} />
          <Route path="/freelancer/:id" element={<FreelancerDetailPage />} />
          <Route path="/internship/:id" element={<InternshipDetailPage />} />
          <Route path="/company/:id" element={<CompanyDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
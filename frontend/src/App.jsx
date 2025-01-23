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
import TechLeadsPage from './pages/TechLeadsPage';
import FreelancerDetailPage from './pages/FreelancerDetailPage';
import InternProfilePage from './pages/InternProfilePage';
import CompanyProfilePage from './pages/CompanyProfilePage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import EventsPage from './pages/EventsPage';
import SuccessStoryDetailPage from './pages/SuccessStoryDetailPage';
import STPPage from './pages/STPPage';
import STPDetailPage from './pages/STPDetailPage';
import TechLeadsDetailPage from './pages/TechLeadsDetailPage';
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
          <Route path="/tech-leads" element={<TechLeadsPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/stp" element={<STPPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/f-profile/:id" element={<ProfilePage />} />
          <Route path="/i-profile/:id" element={<InternProfilePage />} />
          <Route path="/c-profile/:id" element={<CompanyProfilePage />} />
          <Route path="/freelancer/:id" element={<FreelancerDetailPage />} />
          <Route path="/internship/:id" element={<InternshipDetailPage />} />
          <Route path="/company/:id" element={<CompanyDetailPage />} />
          <Route path="/tech-leads/:id" element={<TechLeadsDetailPage />} />
          <Route path="/success-stories/:id" element={<SuccessStoryDetailPage />} />
          <Route path="/stp/:id" element={<STPDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
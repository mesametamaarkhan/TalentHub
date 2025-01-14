import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhoWeAreFor from '../components/WhoWeAreFor';
import FreelanceProgram from '../components/FreelanceProgram';
import STPSection from '../components/STPSection';
import Benefits from '../components/Benefits';
import TopCompanies from '../components/TopCompanies';
import TopFreelancers from '../components/TopFreelancers';
import SuccessStories from '../components/SuccessStories';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <WhoWeAreFor />
      <FreelanceProgram />
      <STPSection />
      <Benefits />
      <TopCompanies />
      <TopFreelancers />
      <SuccessStories />
      <Footer />
    </div>
  );
}

export default Home;
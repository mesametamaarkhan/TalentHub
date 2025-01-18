import React, { Suspense } from 'react';
import Hero from '../components/Hero';
import WhoWeAreFor from '../components/WhoWeAreFor';
import FreelanceProgram from '../components/FreelanceProgram';
import STPSection from '../components/STPSection';
import TopCompanies from '../components/TopCompanies';
import TopFreelancers from '../components/TopFreelancers';
import SuccessStories from '../components/SuccessStories';
const Benefits = React.lazy(() => import('../components/Benefits'));

function Home() {
  return (
    <div className="min-h-screen bg-primary">
      <Suspense fallback={<div>Loading...</div>}> 
        <Hero />
        <WhoWeAreFor />
        <FreelanceProgram />
        <STPSection />
        <Benefits />
        <TopCompanies />
        <TopFreelancers />
        <SuccessStories />
      </Suspense>
    </div>
  );
}

export default Home;
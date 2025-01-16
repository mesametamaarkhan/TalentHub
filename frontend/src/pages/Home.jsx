import React, { Suspense } from 'react';
const Hero = React.lazy(() => import('../components/Hero'));
const WhoWeAreFor = React.lazy(() => import('../components/WhoWeAreFor'));
const FreelanceProgram = React.lazy(() => import('../components/FreelanceProgram'));
const STPSection = React.lazy(() => import('../components/STPSection'));
const Benefits = React.lazy(() => import('../components/Benefits'));
const TopCompanies = React.lazy(() => import('../components/TopCompanies'));
const TopFreelancers = React.lazy(() => import('../components/TopFreelancers'));
const SuccessStories = React.lazy(() => import('../components/SuccessStories'));

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
import React, { Suspense } from 'react';
import Hero from '../components/Hero';
import WhoWeAreFor from '../components/WhoWeAreFor';
import FreelanceProgram from '../components/FreelanceProgram';
import TopCompanies from '../components/TopCompanies';
import TopFreelancers from '../components/TopFreelancers';
const Benefits = React.lazy(() => import('../components/Benefits'));

function Home() {
  return (
    <div className="min-h-screen bg-primary">
      <Suspense fallback={<div>Loading...</div>}> 
        {console.log(localStorage.getItem('accessToken'))}
        <Hero />
        <WhoWeAreFor />
        <FreelanceProgram />
        <Benefits />
        <TopCompanies />
        <TopFreelancers />
      </Suspense>
    </div>
  );
}

export default Home;
import React, { useState, useEffect } from 'react';
import { Link as LinkIcon, Briefcase, MapPin, DollarSign } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Gig } from '../../../backend/models/GigModel';

const FreelancerDetailPage = () => {
  const [gig, setGig] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGigDetail = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        console.log(id);
        const response = await axios.get(`http://localhost:8080/gigs/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setGig(response.data.gig);
          console.log(gig);
        } 
        else {
          console.error('Error fetching gig details');
          navigate('/gigs');
        }
      } catch (error) {
        console.error('Error fetching gig details:', error);
        navigate('/gigs');
      }
    };

    fetchGigDetail();
  }, [id, navigate]);

  if (!gig) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-dark-greenish-gray pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gig Header */}
        <div className="bg-black rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold mb-2">{gig.title}</h1>
              <p className="text-white mb-4">Budget: ${gig.budget}</p>
              <div className="flex flex-wrap gap-4 text-white mb-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {gig.location || "Remote"}
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-1" />
                  {gig.paymentType || "Fixed"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gig Details */}
        <div className="bg-black rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Description</h3>
          <p className="text-white">{gig.description}</p>
        </div>

        {/* Skills Required */}
        <div className="bg-black rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Skills Required</h3>
          <div className="flex flex-wrap gap-2">
            {gig.skillsRequired.map((skill, index) => (
              <span
                key={index}
                className="bg-green-600 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Client Information */}
        {gig.client && (
          <div className="bg-black rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Client Information</h3>
            <p className="text-white">Name: {gig.client.name}</p>
            <p className="text-white">Email: {gig.client.email}</p>
          </div>
        )}

        {/* Back to Gigs Button */}
        <button
          onClick={() => navigate('/gigs')}
          className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
        >
          Back to Gigs
        </button>
      </div>
    </div>
  );
};

export default FreelancerDetailPage;
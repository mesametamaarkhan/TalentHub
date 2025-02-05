import React, { useState, useEffect } from 'react';
import { Link as LinkIcon, Briefcase, MapPin, DollarSign } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const InternshipDetailPage = () => {
  const [internship, setInternship] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInternshipDetail = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get(`http://localhost:8080/internships/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setInternship(response.data.internship);
        } else {
          console.error('Error fetching internship details');
          navigate('/internships');
        }
      } catch (error) {
        console.error('Error fetching internship details:', error);
        navigate('/internships');
      }
    };

    fetchInternshipDetail();
  }, [id, navigate]);

  if (!internship) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-dark-greenish-gray pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Internship Header */}
        <div className="bg-black rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold mb-2">{internship.title}</h1>
              <p className="text-white mb-4">Stipend: ${internship.stipend || 'Unpaid'}</p>
              <div className="flex flex-wrap gap-4 text-white mb-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {internship.location || "Remote"}
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-1" />
                  Start Date: {internship.startDate.split('T')[0]} - End Date: {internship.endDate.split('T')[0]}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Internship Details */}
        <div className="bg-black rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Description</h3>
          <p className="text-white">{internship.description}</p>
        </div>

        {/* Skills Required */}
        <div className="bg-black rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Skills Required</h3>
          <div className="flex flex-wrap gap-2">
            {internship.skillsRequired.map((skill, index) => (
              <span
                key={index}
                className="bg-green-600 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Company Information
        {internship.company && (
          <div className="bg-black rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Company Information</h3>
            <p className="text-white">Name: {internship.company.name}</p>
            <p className="text-white">Email: {internship.company.email}</p>
          </div>
        )} */}

        {/* Back to Internships Button */}
        <button
          onClick={() => navigate('/internships')}
          className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
        >
          Back to Internships
        </button>
      </div>
    </div>
  );
};

export default InternshipDetailPage;

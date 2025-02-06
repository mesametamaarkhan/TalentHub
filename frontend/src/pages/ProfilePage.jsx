import React, { useState, useEffect } from 'react';
import { User, Mail, Link2, Wrench, Star, Globe, DownloadIcon } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CollapsibleSection from '../components/CollapsibleSection';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState({
    name: '',
    email: '',
    bio: '',
    skills: [],
    portfolioLinks: '',
    role: '',
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
    skills: '',
    portfolioLinks: '',
  });

  const [gigs, setGigs] = useState([]);

  const [internships, setInternships] = useState([]);
  
  const [passwordFormData, setPasswordFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = localStorage.getItem('accessToken');
        const response = await axios.get(`http://localhost:8080/users/profile/${user.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data.user);
        setFormData({
          name: response.data.user.name,
          email: response.data.user.email,
          bio: response.data.user.bio,
          skills: response.data.user.skills.join(', '),
          portfolioLinks: response.data.user.portfolioLinks,
        });
      }
      catch (error) {
        console.log(error);
      }
    };

    const fetchGigsPosted = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = localStorage.getItem('accessToken');
        const response = await axios.get(`http://localhost:8080/gigs/postedBy/${user.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setGigs(response.data.gigs);
        } 
        else if (response.status === 403) {
          navigate('/login');
        }
        else if (response.status === 404) {
          navigate('/');
        }
      }
      catch (error) {
        console.log(error);
      }
    }

    fetchUserProfile();
    fetchGigsPosted();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordFormData({
      ...passwordFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();

    console.log(formData.skills);

    let updatedSkills = formData.skills;
    
    if (typeof updatedSkills === 'string') {
      updatedSkills = updatedSkills.split(',').map((skill) => skill.trim()).filter(Boolean);
    }

    const updatedFormData = {
      ...formData,
      skills: updatedSkills,  // Update skills to be an array, even if unchanged
    };

    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const token = localStorage.getItem('accessToken');
      
      const response = await axios.put(`http://localhost:8080/users/profile/${user.id}`, updatedFormData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        setUser(response.data.user);
      }
      window.location.reload();
    } catch (error) {
      console.error('Error updating profile', error);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    const { currentPassword, newPassword, confirmPassword } = passwordFormData;

    if (newPassword !== confirmPassword) {
      alert("New password and confirmation don't match.");
      return;
    }

    if (newPassword.length < 6) {
      alert("Password should be at least 6 characters.");
      return;
    }

    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const token = localStorage.getItem('accessToken');

      const response = await axios.put(
        `http://localhost:8080/users/password/${user.id}`,
        { currentPassword, newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert('Password changed successfully!');
      }
      window.location.reload();
    } catch (error) {
      console.error('Error changing password', error);
      alert('Failed to change password. Please try again.');
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Bio Section */}
            <div className="bg-black rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">About</h3>
              <p className="text-white">{user.bio}</p>
            </div>

            {/* Skills Section */}
            <div className="bg-black rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {user.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-green-600 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <>
            <CollapsibleSection title="Profile Details">
                {/* Profile Details Section */}
                <div className="bg-black rounded-lg p-8">
                  <form onSubmit={handleProfileSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="block w-full pl-10 pr-3 py-2 bg-dark-greenish-gray border border-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="block w-full pl-10 pr-3 py-2 bg-dark-greenish-gray border border-forest-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Bio Field */}
                    <div className="relative">
                      <Wrench className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
                      <textarea
                        id="bio"
                        name="bio"
                        className="block w-full pl-10 pr-3 py-2 bg-dark-greenish-gray border border-forest-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Tell us about yourself"
                        value={formData.bio}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Skills Field */}
                    <div className="relative">
                      <Wrench className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
                      <input
                        id="skills"
                        name="skills"
                        type="text"
                        className="block w-full pl-10 pr-3 py-2 bg-dark-greenish-gray border border-forest-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Skills (e.g., React, Node.js, MongoDB)"
                        value={formData.skills}
                        onChange={(e) => setFormData({ 
                          ...formData, 
                          skills: e.target.value.split(',').map(skill => skill.trim())
                        })}
                      />
                    </div>

                    {/* Portfolio Link Field */}
                    <div className="relative">
                      <Link2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
                      <input
                        id="portfolioLinks"
                        name="portfolioLinks"
                        type="text"
                        className="block w-full pl-10 pr-3 py-2 bg-dark-greenish-gray border border-forest-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Portfolio/GitHub Link"
                        value={formData.portfolioLinks}
                        onChange={handleChange}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg transition-colors duration-300"
                    >
                      Save Changes
                    </button>
                  </form>
                </div>
            </CollapsibleSection>

            {/* Change Password Section */}
            <CollapsibleSection title="Change Password">
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div className="flex flex-col">
                  <label className="text-white mb-1">Current Password</label>
                  <input
                    type="password"
                    name="currentPassword"
                    placeholder='Enter current password'
                    value={passwordFormData.currentPassword}
                    onChange={handlePasswordChange}
                    className="bg-dark-greenish-gray text-white rounded-lg p-2"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-white mb-1">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    placeholder='Enter new password'
                    value={passwordFormData.newPassword}
                    onChange={handlePasswordChange}
                    className="bg-dark-greenish-gray text-white rounded-lg p-2"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-white mb-1">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder='Confirm new password'
                    value={passwordFormData.confirmPassword}
                    onChange={handlePasswordChange}
                    className="bg-dark-greenish-gray text-white rounded-lg p-2"
                  />
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg transition-colors duration-300 text-white">
                  Change Password
                </button>
              </form>
            </CollapsibleSection>
         </>
        );

      case 'gigs':
        return (
          <div className="space-y-8">
            {gigs.map((gig) => (
              <div key={gig._id} className="bg-black rounded-lg p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{gig.title}</h3>
                  <p className="text-gray-300 mb-2">{gig.description}</p>
                  <div className="flex items-center text-sm text-gray-400">
                  <span>Posted on {new Date(gig.postedDate).toLocaleDateString()}</span>
                    {gig.budget && (
                      <>
                        <span className="mx-2">•</span>
                        <span>${gig.budget}</span>
                      </>
                    )}
                  </div>
                </div>
  
                {gig.applicants.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Applicants</h4>
                    <div className="space-y-4 ">
                      {gig.applicants.map((applicant) => (
                        <div
                          key={applicant._id}
                          className="flex items-center justify-between bg-dark-greenish-gray p-4 rounded-lg"
                        >
                          <div className="flex items-center">
                            <img
                              src={applicant.image}
                              alt={applicant.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="ml-4">
                              <h5 className="text-white font-medium">{applicant.name}</h5>
                              {applicant.experience && (
                                <p className="text-gray-400 text-sm">
                                  Experience: {applicant.experience} years
                                </p>
                              )}
                            </div>
                          </div>
                          <a
                            href={`/freelancer/${applicant._id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-green-400 hover:text-accent-light"
                          >
                            <User className="mr-2" />
                            Profile
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      
      case 'Internships':
        return (
          <div className="space-y-8">
            {user.posts.map((post) => (
              <div key={post.id} className="bg-secondary rounded-lg p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                  <p className="text-gray-300 mb-2">{post.description}</p>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>Posted on {post.date}</span>
                    {post.type && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{post.type}</span>
                      </>
                    )}
                    {post.salary && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{post.salary}</span>
                      </>
                    )}
                  </div>
                </div>
    
                {post.applicants.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Applicants</h4>
                    <div className="space-y-4">
                      {post.applicants.map((applicant) => (
                        <div
                          key={applicant.id}
                          className="flex items-center justify-between bg-primary p-4 rounded-lg"
                        >
                          <div className="flex items-center">
                            <img
                              src={applicant.image}
                              alt={applicant.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="ml-4">
                              <h5 className="text-white font-medium">{applicant.name}</h5>
                              <p className="text-gray-400 text-sm">Applied: {applicant.appliedDate}</p>
                              {applicant.experience && (
                                <p className="text-gray-400 text-sm">
                                  Experience: {applicant.experience}
                                </p>
                              )}
                            </div>
                          </div>
                          <a
                            href={applicant.resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-accent hover:text-accent-light"
                          >
                            <FiDownload className="mr-2" />
                            Resume
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        );
  
      case 'Applications':
        return (
          <div className="space-y-6">
            {user.applications.map((application, index) => (
              <div key={index} className="bg-secondary rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{application.position}</h3>
                <p className="text-accent mb-2">{application.company}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-300">Applied: {application.date}</span>
                  <span className="px-3 py-1 bg-primary rounded-full text-accent">
                    {application.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-dark-greenish-gray pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-black rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <img
              src={user.profilePicture}
              alt={user.name}
              className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
            />
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
              <p className="text-white mb-4">{user.title}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-white mb-4">
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-yellow-400" />
                  {user.rating}
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                <a href={`mailto:${user.email}`} className="flex items-center text-white hover:text-green-400">
                  <Mail className="h-4 w-4 mr-1" />
                  {user.email}
                </a>
                <a href={`https://${user.portfolioLinks}`} className="flex items-center text-white hover:text-green-400">
                  <Globe className="h-4 w-4 mr-1" />
                  {user.portfolioLinks}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-700">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 relative ${activeTab === 'overview' ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400 hover:text-gray-300'}`}
              >
                <div className="flex items-center">
                  Overview
                </div>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`py-4 px-1 relative ${activeTab === 'settings' ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400 hover:text-gray-300'}`}
              >
                <div className="flex items-center">
                  Settings
                </div>
              </button>
              {user.role === 'employer' && 
                <button
                  onClick={() => setActiveTab('gigs')}
                  className={`py-4 px-1 relative ${activeTab === 'gigs' ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400 hover:text-gray-300'}`}
                >
                  <div className="flex items-center">
                    Gigs
                  </div>
                </button>
              }
              {user.role === 'employer' && 
                <button
                  onClick={() => setActiveTab('internships')}
                  className={`py-4 px-1 relative ${activeTab === 'internships' ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400 hover:text-gray-300'}`}
                >
                  <div className="flex items-center">
                    Internships
                  </div>
                </button>
              }
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-12">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default ProfilePage;

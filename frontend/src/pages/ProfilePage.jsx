import React, { useState, useEffect } from 'react';
import { User, Mail, Link2, Wrench, Star, Globe } from 'lucide-react';
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
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
    skills: '',
    portfolioLinks: '',
  });
  
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

    fetchUserProfile();
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

    // Check if skills is a string (and not an array), then split it
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
                  <User className="h-5 w-5 mr-2" />
                  Overview
                </div>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`py-4 px-1 relative ${activeTab === 'settings' ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400 hover:text-gray-300'}`}
              >
                <div className="flex items-center">
                  <Wrench className="h-5 w-5 mr-2" />
                  Settings
                </div>
              </button>
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

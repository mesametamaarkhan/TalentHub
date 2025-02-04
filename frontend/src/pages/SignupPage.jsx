import React, { useState } from 'react';
import { Leaf, Briefcase, GraduationCap, User, Mail, Lock, Eye, EyeOff, Image, Link2, PenTool, Star, Wrench, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupPage = () => {
  const navigate = useNavigate;
  const [userType, setUserType] = useState('freelancer');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    bio: '',
    skills: '',
    portfolioLinks: '',
    experience: '',
  });

  const userTypes = [
    { id: 'freelancer', label: 'Freelancer', icon: User },
    { id: 'employer', label: 'Employer', icon: Briefcase },
    { id: 'internee', label: 'Internee', icon: GraduationCap },
  ];

  const handleUserTypeChange = (typeId) => {
    setUserType(typeId);
    setFormData((prevData) => ({
      ...prevData,
      role: typeId, 
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage('Passwords do not match');
        return;
      }
      
      const response = await axios.post('http://localhost:8080/users/register', formData, {
        headers: { 'Content-Type': 'application/json' }
      });

      if(response.status === 201) {
        navigate('/login');
      }
    }
    catch(error) {
      console.log('Login Error', error);
      setErrorMessage('Something went wrong. Please try again');
    }
  };

  return (
    <div className="min-h-screen bg-dark-greenish-gray flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-8">
          <Leaf className="mx-auto mt-10 h-12 w-12 text-green-400 animate-float" />
          <h2 className="mt-4 text-3xl font-bold">Join Our Ecosystem</h2>
          <p className="mt-2 text-gray-400">Start your journey with us</p>
        </motion.div>

        {/* User Type Selection */}
        <div className="glass-effect bg-black rounded-lg p-4 mb-6">
          <div className="grid grid-cols-3 gap-2">
            {userTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => handleUserTypeChange(type.id)}
                className={`p-3 rounded-lg flex flex-col items-center justify-center transition-all duration-300 ${
                  userType === type.id
                    ? 'bg-green-600/20 border border-green-500'
                    : 'hover:bg-green-800'
                }`}
              >
                <type.icon className={`h-6 w-6 mb-2 ${userType === type.id ? 'text-green-500' : 'text-gray-500'}`} />
                <span className="text-sm">{type.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* User signup form */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="glass-effect bg-black rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className='relative'>
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
              <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full pl-10 pr-3 py-2 bg-dark-greenish-gray border border-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            </div>

            <div className='relative'>
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full pl-10 pr-3 py-2 bg-dark-greenish-gray border border-forest-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className='relative'>
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                className="block w-full pl-10 pr-10 py-2 bg-dark-greenish-gray border border-forest-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Create a password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3">
                {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
              </button>
            </div>

            <div className='relative'>
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                required
                className="block w-full pl-10 pr-10 py-2 bg-dark-greenish-gray border border-forest-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3">
                {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
              </button>
            </div>

            <div className='relative'>
              <PenTool className="absolute left-3 top-1/2 transform -translate-y-3/4 h-5 w-5 text-green-400" />
              <textarea 
                className="block w-full pl-10 pr-10 py-2 bg-dark-greenish-gray border border-forest-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" 
                placeholder="Tell us about yourself" 
                value={formData.bio} 
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })} 
              />
            </div>

            <div className='relative'>
              <Wrench className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
              <input 
                type="text" 
                className="block w-full pl-10 pr-10 py-2 bg-dark-greenish-gray border border-forest-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Skills: e.g., React, Node.js, MongoDB" 
                value={formData.skills} 
                onChange={(e) => setFormData({ 
                  ...formData, 
                  skills: e.target.value.split(',').map(skill => skill.trim())
                })}
              />
            </div>

            <div className='relative'>
              <Link2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
              <input 
                type="text" 
                className="block w-full pl-10 pr-10 py-2 bg-dark-greenish-gray border border-forest-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" 
                placeholder="Portfolio/Github Link: e.g., https://portfolio.com" 
                value={formData.portfolioLinks} 
                onChange={(e) => setFormData({ ...formData, portfolioLinks: e.target.value })}
              />
            </div>

            <div className='relative'>
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
              <input 
                type="text" 
                className="block w-full pl-10 pr-10 py-2 bg-dark-greenish-gray border border-forest-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" 
                placeholder="Years of experience" 
                value={formData.experience} 
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })} 
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}

            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg transition-colors duration-300">Create Account</button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-white">Already have an account?</span>{' '}
            <Link to="/login" className="text-green-400 hover:text-green-300">Log in</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupPage;
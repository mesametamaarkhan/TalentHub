import React, { useState } from 'react';
import axios from 'axios';

const ApplicationForm = ({ id, type }) => {
    const [resumeLink, setResumeLink] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const token = localStorage.getItem('accessToken');
            const user = JSON.parse(localStorage.getItem('user'));

            const response = await axios.post(
                `http://localhost:8080/applications/${type}/${id}`, 
                {
                    gigId: type === 'gig' ? id : undefined,
                    internshipId: type === 'internship' ? id : undefined,
                    userId: user.id,
                    resumeLink: resumeLink,
                    status: 'pending',
                    applicationDate: Date.now(),
                },
                {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (response.status === 200) {
                setSuccess(true);
                window.location.reload();
            }
            else if (response.status === 409) {
                setError(`You have already applied to this gig, wait for the employer's response`);
            }
        } 
        catch (error) {
            setError('Failed to submit application. Please try again.');
        }
    };

    return (
        <div className="bg-black rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Apply for this Gig</h3>
            
            {success && (
                <div className="text-green-600 mb-4">Application submitted successfully!</div>
            )}
            
            {error && (
                <div className="text-red-600 mb-4">{error}</div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <label htmlFor="resumeLink" className="block text-white mb-2">Resume Link</label>
                <input
                    id="resumeLink"
                    type="url"
                    className="w-full p-2 rounded-md bg-dark-greenish-gray text-white"
                    value={resumeLink}
                    onChange={(e) => setResumeLink(e.target.value)}
                    required
                />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded-lg transition-colors duration-300"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
};

export default ApplicationForm;

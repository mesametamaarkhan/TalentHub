import React, { useState } from 'react';
import axios from 'axios';

const ApplicationForm = ({ id, type }) => {
    const [resumeLink, setResumeLink] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    

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

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react';

const JobSection = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/auth/getjobs");
                if (res.data.success) {
                    setJobs(res.data.jobs);
                }
            } catch (error) {
                console.log("Error fetching jobs", error);
            }
        };
        fetchJobs();
    }, []);

    return (
        <div style={{ padding: '40px 5%', backgroundColor: '#f8fafc' }}>
            <div style={gridContainer}>
                {jobs.map(job => (
                    <div key={job.id} style={cardStyle}>
                        <div style={logoWrapper}>
                            <img 
                                src={job.logo_url || "https://via.placeholder.com/80"} 
                                alt={job.company_name} 
                                style={logoImageStyle} 
                            />
                        </div>

                        <p style={companyText}>{job.company_name}</p>
                        <h3 style={jobTitle}>{job.title}</h3>

                        <div style={infoRow}>
                            <span style={infoItem}><MapPin size={14} /> {job.location}</span>
                            <span style={dot}>•</span>
                            <span style={infoItem}><Briefcase size={14} /> Full-time</span>
                        </div>

                        <div style={salaryText}>NPR {job.salary?.toLocaleString()}</div>

                        <div style={tagRow}>
                            <span style={tagStyle}>{job.category}</span>
                        </div>

                        <hr style={divider} />

                        <div style={footerRow}>
                            <span style={timeText}><Clock size={14} /> 2 days ago</span>
                            <button style={applyBtn}>
                                Apply Now <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};



export default JobSection;
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

const gridContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px'
};

const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '24px',
    padding: '30px',
    textAlign: 'center',
    boxShadow: '0 10px 25px rgba(0,0,0,0.03)',
    border: '1px solid #f1f5f9'
};

const logoWrapper = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    margin: '0 auto 15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
};

const logoImageStyle = { width: '100%', height: '100%', objectFit: 'contain' };
const companyText = { color: '#64748b', fontSize: '14px', marginBottom: '5px' };
const jobTitle = { fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '15px' };
const infoRow = { display: 'flex', justifyContent: 'center', gap: '10px', color: '#94a3b8', fontSize: '13px', marginBottom: '15px' };
const salaryText = { color: '#2ed46b', fontWeight: 'bold', fontSize: '18px', marginBottom: '15px' };
const tagStyle = { backgroundColor: '#f1f5f9', padding: '5px 12px', borderRadius: '8px', fontSize: '12px', color: '#64748b' };
const divider = { border: '0', borderTop: '1px solid #f1f5f9', margin: '20px 0' };
const footerRow = { display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const timeText = { display: 'flex', alignItems: 'center', gap: '5px', color: '#94a3b8', fontSize: '12px' };
const applyBtn = { backgroundColor: '#2ed46b', color: 'white', border: 'none', padding: '10px 18px', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' };


const infoItem = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '14px',
    color: '#64748b'
};

const dot = {
    color: '#cbd5e1',
    fontWeight: 'bold'
};

const tagRow = {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    flexWrap: 'wrap',
    marginTop: '10px'
};


export default JobSection;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {MapPin, Briefcase,Clock,ArrowRight} from 'lucide-react';
const JobCategory = () => {
  const [categories, setCategories] = useState([]);

    const getIcon = (cat) => {
        const lowerCat = cat.toLowerCase();
        if (lowerCat.includes('it') || lowerCat.includes('software')) return <Monitor size={24} />;
        if (lowerCat.includes('health')) return <HeartPulse size={24} />;
        if (lowerCat.includes('bank')) return <Landmark size={24} />;
        if (lowerCat.includes('design')) return <PenTool size={24} />;
        if (lowerCat.includes('marketing')) return <Speaker size={24} />;
        return <LayoutGrid size={24} />; // Default icon
    };

    useEffect(() => {
        const fetchcats = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/auth/getjobs");
                if (res.data.success && res.data.jobs) {
                    const unique = [...new Set(res.data.jobs.map(job => job.category))];
                    setCategories(unique);
                }
            } catch (error) {
                console.log("Error fetching categories", error);
            }
        }
        fetchcats();
    }, []);

    return (
        <div style={{ padding: '60px 5%', textAlign: 'center', backgroundColor: '#f8fafc' }}>
            <h2 style={{ color: '#2d3e50', marginBottom: '10px', fontSize: '28px' }}>Explore by Category</h2>
            <p style={{ color: '#64748b', marginBottom: '40px' }}>Find the right job for your skills</p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', flexWrap: 'wrap' }}>
                {categories.map(cat => (
                    <div key={cat} style={categoryCard}>
                        <div style={iconWrapper}>{getIcon(cat)}</div>
                        <div style={{ fontWeight: '600', color: '#1e293b' }}>{cat}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const categoryCard = {
    padding: '30px 20px',
    backgroundColor: 'white',
    borderRadius: '20px',
    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)',
    cursor: 'pointer',
    transition: '0.3s transform, 0.3s box-shadow',
    width: '180px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    border: '1px solid #f1f5f9'
};

const iconWrapper = {
    width: '60px',
    height: '60px',
    borderRadius: '15px',
    backgroundColor: '#eff6ff',
    color: '#3b82f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

export default JobCategory;
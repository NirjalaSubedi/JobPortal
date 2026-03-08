import React, { useState, useEffect } from 'react';
import axios from 'axios';
const JobCategory = () => {

    const [categories, setcategories]=useState([]);
    useEffect(()=>{
        const fetchcats=async()=>{
            try{
                const res = await axios.get("http://localhost:5000/api/auth/getjobs");
                if (res.data.success) 
                {
                    const unique = [...new Set(res.data.jobs.map(job => job.category))];
                    setcategories(unique);
                }
            }catch(error){
                console.log("Error fetching categories",error);
            }
        }
        fetchcats();
    },[])


  return (
    <div style={{ padding: '50px 5%', textAlign: 'center', backgroundColor: '#f8fafc' }}>
      <h2 style={{ color: '#2d3e50', marginBottom: '30px' }}>Explore by Category</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <div key={cat} style={cardStyle}>{cat}</div>
        ))}
      </div>
    </div>
  );
};

const cardStyle = {
  padding: '20px 40px',
  backgroundColor: 'white',
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
  cursor: 'pointer',
  transition: '0.3s',
  fontWeight: '600',
  color: '#2ed46b'
};

export default JobCategory;
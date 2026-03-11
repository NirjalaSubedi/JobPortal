import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './style/Companies.css';

const Companies = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/auth/fetchcompany");
                if (res.data.success) {
                    setCompanies(res.data.companies);
                }
            } catch (err) {
                console.log("Error fetching companies:", err);
            }
        };
        fetchCompanies();
    }, []);
    return(
        <div style={sectionWrapper}>
            <p style={subTitle}>Trusted by Leading Companies</p>
            <div className="marquee-wrapper">
                <div className="marquee-track">
                    {companies.concat(companies, companies).map((company, index) => (
                        <div key={`${company.id}-${index}`} className="company-logo-item">
                            <img 
                                src={company.logo_url && company.logo_url.includes('http') 
                                     ? company.logo_url 
                                     : "https://via.placeholder.com/150x50?text=Company"} 
                                alt={company.name} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
const sectionWrapper = {
    padding: '40px 0',
    backgroundColor: '#fff',
    textAlign: 'center',
    borderBottom: '1px solid #f1f5f9'
};

const subTitle = {
    fontSize: '14px',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '30px',
    fontWeight: '600'
};
export default Companies;
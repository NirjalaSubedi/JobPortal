import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

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
            <div style={logoRow}>
                {companies.length > 0 ? (
                    companies.map((company) => (
                        <div key={company.id} style={logoWrapper} title={company.name}>
                            <img 
                                src={company.logo_url && company.logo_url.includes('http') 
                                     ? company.logo_url 
                                     : "https://via.placeholder.com/150x50?text=Company"} 
                                alt={company.name} 
                                style={logoStyle} 
                            />
                        </div>
                    ))
                ) : (
                    <p style={{color: '#94a3b8'}}>No companies found.</p>
                )}
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

const logoRow = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '50px',
    flexWrap: 'wrap',
    padding: '0 5%'
};

const logoWrapper = {
    width: '140px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    filter: 'grayscale(100%) opacity(0.6)', 
    transition: '0.3s'
};

const logoStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain'
};


export default Companies;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompanySection = () => {
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
        <div>
            <p>Trusted By Landing Companies</p>
            <div>
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


export default CompanySection;
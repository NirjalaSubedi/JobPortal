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
}

export default CompanySection;
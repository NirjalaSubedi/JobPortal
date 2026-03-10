import react from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
const Companies=()=>{
    const {companies, setcompanies}=useState([]);
    useEffect(()=>{
        const fetchcompany= async ()=>{
            try{
                const res = await axios.get("http://localhost:5000/api/auth/fetchcompany");
                if (res.data.success) {
                    setcompanies(res.data.companies);
                }
            }catch(error){
                console.log("error on fetching company",error);
            }
        }
        fetchcompany();
    },[])
}
export default Companies;
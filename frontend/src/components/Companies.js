import react from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
const Companies=()=>{
    const {companies, setcompanies}=useState([]);
    useEffect(()=>{
        const fetchcompany= async ()=>{
            try{
                const res = await axios.get("http://localhost:5000/api/auth/getjobs");
            }catch(error){

            }
        }
    })
}
export default Companies;
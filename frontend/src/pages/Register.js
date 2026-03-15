import React, { useState } from 'react';
import { User, Building2 } from 'lucide-react';

const Register = () => {
  const [role, setRole] = useState(null); 

  return (
    <div className='flex'>
      <div className=' flex flex-col items-center bg-green-100 p-4 m-4 border'>
        <User size={48} className="text-green-500 mb-4" />
        <h1 className='text-green-600 font-bold'>Candidate</h1>
      </div>
      <div className=' flex flex-col items-center bg-red-100 p-4 m-4 border'>
        <Building2 size={48} className="text-red-500 mb-4" />
        <h1 className='text-red-600 font-bold'>Company</h1>
      </div>
    </div>
  );
};

export default Register;
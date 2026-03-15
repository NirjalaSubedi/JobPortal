import React, { useState } from 'react';
import { User, Building2 } from 'lucide-react';

const Register = () => {
  const [role, setRole] = useState(null); 

  return (
    <div>
      <div className='bg-green-100 p-4'>
        <User size={48} className="text-green-500 mb-4" />
        <h1>Candidate</h1>
      </div>
      <div className='bg-red-100 p-4'>
        <Building2 size={48} className="text-red-500 mb-4" />
        <h1>Company</h1>
      </div>
    </div>
  );
};

export default Register;
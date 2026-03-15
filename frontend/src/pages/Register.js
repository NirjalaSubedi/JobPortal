import React, { useState } from 'react';

const Register = () => {
  const [role, setRole] = useState(null); 

  return (
    <div>
      <div className='bg-green-100 p-4'>
        <h1>Candidate</h1>
      </div>
      <div className='bg-red-100 p-4'>
        <h1>Company</h1>
      </div>
    </div>
  );
};

export default Register;
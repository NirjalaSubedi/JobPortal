import React, { useState } from 'react';
import { User, Building2 } from 'lucide-react';

const Register = () => {
  const [role, setRole] = useState(null); 

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-slate-50 font-sans p-4'>
      
      {!role ? (
        <>
          <h1 className='text-4xl   mb-2'>
            Sajilo<span className='text-green-600'>Rojgar</span>
          </h1>
          <h2 className='text-slate-500 font-medium mb-10'>SignUp As</h2>

          <div className='flex flex-col md:flex-row'>
            <div 
              onClick={() => setRole('candidate')}
              className='flex flex-col items-center bg-white p-10 m-4 border-2 border-transparent hover:border-green-500 rounded-[1rem] shadow-xl hover:shadow-2xl transition-all cursor-pointer w-64'
            >
              <div className='bg-green-100 p-4 rounded-full mb-4'>
                <User size={48} className="text-green-600" />
              </div>
              <h1 className='text-green-600 text-xl '>Candidate</h1>
            </div>

            <div 
              onClick={() => setRole('company')} 
              className='flex flex-col items-center bg-white p-10 m-4 border-2 border-transparent hover:border-red-500 rounded-[1rem] shadow-xl hover:shadow-2xl transition-all cursor-pointer w-64'
            >
              <div className='bg-red-100 p-4 rounded-full mb-4'>
                <Building2 size={48} className="text-red-600" />
              </div>
              <h1 className='text-red-600 text-xl '>Company</h1>
            </div>
          </div>
        </>
      ) : (
        <div className='bg-white p-10 rounded-2xl shadow-2xl text-center'>
          <h2 className='text-2xl font-bold'>Registering as {role}</h2>
          <label for="name">Name</label>
          <input type="text" name="name" placeholder='Enter your name'/>
          <label for="email">email</label>
          <input type="email" name="email" placeholder="example@gmail.com"></input>
          <label for="password">password</label>
          <input type="text" name="password" plceholder="create unique password"></input>
          <label for="confirmPassword">Confirm Password</label>
          <button type="submit" className='register-btn'>Register</button>
        </div>
      )}

    </div>
  );
};

export default Register;
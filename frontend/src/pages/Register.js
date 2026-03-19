import React, { useState } from 'react';
import { User, Building2 } from 'lucide-react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Register = () => {
  const [role, setRole] = useState(null); 
  //password matching logic
  const [formdata, setformdata]=useState({
        name:'',
        email:'',
        website:'',
        password:'',
        confirmpassword:''
  });

  //settting error message usestate
  const [error,seterror]=useState('');

  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
    seterror(''); // Change huda error message hatai dine
  };

  const handleSubmit =(e)=>{
    e.preventDefault();
    if (formdata.password !== formdata.confirmpassword) {
      seterror("Passwords do not match!");
    } else {
      seterror("");
      console.log("Form Submitted Successfully:", formdata);
      
    }
  }

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
              onClick={() => setRole('Candidate')}
              className='flex flex-col items-center bg-white p-10 m-4 border-2 border-transparent hover:border-green-500 rounded-[1rem] shadow-xl hover:shadow-2xl transition-all cursor-pointer w-64'
            >
              <div className='bg-green-100 p-4 rounded-full mb-4'>
                <User size={48} className="text-green-600" />
              </div>
              <h1 className='text-green-600 text-xl '>Candidate</h1>
            </div>

            <div 
              onClick={() => setRole('Company')} 
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
        <div className='bg-white p-10 rounded-2xl shadow-2xl text-center w-full max-w-md'>
  <h2 className='text-2xl font-bold mb-6 text-slate-800'>Register As  
  <span className={role==='Company'?'text-red-500':'text-green-500'}>{role==='Candidate'?'Candidate':'Company'}</span></h2>
  
  <form className='flex flex-col text-left gap-4' onSubmit={handleSubmit}>
    <div>
      <label className='block text-sm font-semibold text-slate-700 mb-1' htmlFor="name">
         <span className={`${role ==='Company'?'inline':'hidden'}`}>Company </span>Name</label>
      <input type="text"
             name="name"
             placeholder='Enter your name'
             value={formdata.name}
             onChange={handleChange}
             className='w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-all'/>
    </div>

    <div>
      <label className='block text-sm font-semibold text-slate-700 mb-1' htmlFor="email">
        <span className={`${role ==='Company'?'inline':'hidden'}`}>Offical </span>Email</label>
      <input  type="email"
              name="email" 
              placeholder="example@gmail.com"
              value={formdata.email}
              onChange={handleChange}
              className='w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-all'
      />
    </div>
    
    <div className={`${role === 'Company'?'block':'hidden'}`}>
      <label className='block text-sm font-semibold text-slate-700 mb-1' htmlFor="website">Website</label>
      <input type="text"
             name="website"
             placeholder="enter you website url"
             value={formdata.website}
             onChange={handleChange}
             className=' text-left w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all'
      />  
    </div>

    <div className={`${role === 'Company'?'block':'hidden'}`}>
      <div className="h-40 w-full rounded-lg overflow-hidden my-2 border border-slate-300">
    <MapContainer center={[26.6646, 87.1755]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[26.6646, 87.1755]} />
    </MapContainer>
    <p className="text-[10px] text-slate-500 mt-1">* Click to pin company location</p>
  </div>
    </div>

    <div className={`${role === 'Company'?'block':'hidden'}`}>
      <label className='block text-sm font-semibold text-slate-700 mb-1' htmlFor="Description">Description</label>
      <input type="text"
             name="Description"
             placeholder="Brief description About your company"
             value={formdata.website}
             onChange={handleChange}
             className=' text-left w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-all'
      />  
    </div>

    <div>
      <label className='block text-sm font-semibold text-slate-700 mb-1' htmlFor="password">Password</label>
      <input type="password"
             name="password"
             placeholder="Create unique password"
             value={formdata.password}
             onChange={handleChange}
             className='text-left w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-all'
      />
    </div>

    <div>
      <label className='block text-sm font-semibold text-slate-700 mb-1' htmlFor="confirmPassword">Confirm Password</label>
      <input type="password"
             name="confirmpassword"
             value={formdata.confirmpassword}
             onChange={handleChange}
             placeholder="Re-enter password" 
             className={`w-full p-2.5 border rounded-lg outline-none ${error ? 'border-red-500' : 'border-slate-300'}`}
      />
              {error && <p className='text-red-500 text-xs mt-1 font-medium'>{error}</p>}
    </div>

    <button type="submit" 
      className={`mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg shadow-lg transform transition-transform active:scale-95
      ${role === 'Company' ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}>
      Register
    </button>
  </form>
</div>
      )}

    </div>
  );
};

export default Register;
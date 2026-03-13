import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Hero from './components/Hero';
import JobSection from './components/JobSection'; 
import Companies from './components/Companies';
import About from './components/About';
import Footer from './components/Footer';

const Homepage=()=>{
  return(
    <>
      <Navbar />
      <Hero/>
      <JobSection/>
      <Companies/>
      <About/>
      <Footer/>
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/tailwind-test" element={
          <div className="flex items-center justify-center min-h-screen bg-brandDark">
            <div className="bg-white p-10 rounded-3xl shadow-2xl text-center border-t-8 border-brandGreen">
              <h1 className="text-4xl font-black text-brandDark mb-4">
                sajilo<span className="text-brandGreen">Rojgar</span>
              </h1>
              <p className="text-slate-600 font-medium">
                Yadi yo box center ma chha, background dark chha, 
                ani setup success vayo vane Tailwind le kaam garyo! 🚀
              </p>
              <button className="mt-6 px-6 py-2 bg-brandGreen text-white rounded-full font-bold hover:bg-green-600 transition-all">
                Setup Working!
              </button>
            </div>
          </div>
        } />
        {/* ----------------------------- */}
       
      </Routes>
    </Router>
  );
}

export default App;
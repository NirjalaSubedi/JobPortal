import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Hero from './components/Hero';
import JobSection from './components/JobSection'; 
import Companies from './components/Companies';
import About from './components/About';
import Footer from './components/Footer';
import Register from './pages/Register';

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
        <Route path="/register"element={<Register/>}/>
       
      </Routes>
    </Router>
  );
}

export default App;
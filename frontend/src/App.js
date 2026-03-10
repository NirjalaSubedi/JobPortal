import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Hero from './components/Hero';
import JobCategory from './components/JobCategory'
import JobSection from './components/JobSection'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Hero/>
      <JobCategory/>
      <JobSection/>

      <Routes>
        <Route path="/login" element={<Login />} />
       
      </Routes>
    </Router>
  );
}

export default App;
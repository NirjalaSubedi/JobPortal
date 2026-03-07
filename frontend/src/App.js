import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero/>
      <Routes>
        <Route path="/login" element={<Login />} />
       
      </Routes>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<h1 style={{ textAlign: 'center' }}>Welcome to Job Portal</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
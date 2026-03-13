import React from "react";
import {Link} from "react-router-dom";
const Navbar = ()=>{
    return(
<nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 5%',
      backgroundColor: 'rgba(45, 62, 80, 0.95)', 
      backdropFilter: 'blur(10px)',
      position:"sticky",
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff', letterSpacing: '1px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Sajilo<span style={{ color: '#4ade80' }}>Rojgar</span>
        </Link>
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {['Home', 'Jobs', 'Companies', 'About'].map((item) => (
          <Link key={item} to={`/${item.toLowerCase()}`} style={{
            textDecoration: 'none',
            color: '#cbd5e1',
            fontWeight: '500',
            fontSize:'1.2rem'
          }}>
            {item}
          </Link>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Link to="/login" style={{
          textDecoration: 'none',
          color: '#fff',
          padding: '0.5rem 1.5rem',
          borderRadius: '8px',
          border: '2px solid rgba(255,255,255,0.2)',
          transition: '0.3s'
        }}>
          Login
        </Link>
        <Link to="/register" style={{
          textDecoration: 'none',
          color: '#fff',
          backgroundColor: '#2ed46b', 
          padding: '0.6rem 1.5rem',
          borderRadius: '8px',
          fontWeight: 'bold',
          transition: '0.3s'
        }}>
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
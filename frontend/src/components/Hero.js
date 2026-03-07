import React from "react"; 
import jobbanner from "../Assets/jobbanner.png";
const Hero = ()=>{
    return(
        <div style={{
            width: '100%',
            height: '400px',
            overflow: 'hidden',
            position: 'relative'
        }}>
            <img src={jobbanner} alt="job banner"
            style={{
                width: '100%',
                height: '100%',
                objectFit:'cover',
                filter: 'brightness(30%)'
            }}
            />

            <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    textAlign: 'center'
                }}>
                <h1 style={{ fontSize:'3rem',color:'#4ade80',margin:'0' }}>Find Your Dream Job</h1>
                <p style={{opacity: '0.9',fontSize:'1.2 rem',margin: '10px 0 0 0',}}>Thousands of opportunities are waiting for you.</p>
                <button style={{
                                marginTop:'15px',
                                padding: '12px 30px',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                color: 'white',
                                backgroundColor:'#2ed46b', 
                                backdropFilter: 'blur(2px)', 
                                border: '1px solid rgba(11, 10, 10, 0.3)',
                                borderRadius: '10px', 
                                cursor: 'pointer',
                                transition: '0.3s ease',
                            }}> Lets Explore
                </button>
            </div>
        </div>
    )
}
export default Hero;
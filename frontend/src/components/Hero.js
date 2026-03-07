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
                objectFit: 'cover',
                filter: 'brightness(70%)'
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
                <h1 style={{ fontSize: '3rem' }}>Find Your Dream Job</h1>
                <p>Thousands of opportunities are waiting for you.</p>
            </div>
        </div>
    )
}
export default Hero;
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
        </div>
    )
}
export default Hero;
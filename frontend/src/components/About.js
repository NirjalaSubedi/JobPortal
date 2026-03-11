import React from 'react';
import './style/About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-hero">
                <h1>Connecting Nepal's Talent with <span className="highlight">Opportunity</span></h1>
                <p>SajiloRojgar is more than just a job portal; it's a bridge to your professional future.</p>
            </div>

            <div className="about-content">
                <div className="about-text">
                    <h2>Our Story</h2>
                    <p>
                        Nepal ko competitive job market ma sahi avasar bhetauna dherai garo hunchha. 
                        Tyo samasya lai samadhan garna <strong>SajiloRojgar</strong> ko shuruwat bhayeko ho. 
                        Hamro lakshya bhane ko job seekers ra companies bich ko duri lai digital platform 
                        marfat hataunu ho.
                    </p>
                    
                    
            </div>
        </div>
    );
};

export default About;
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
                    
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3>500+</h3>
                            <p>Jobs Posted</p>
                        </div>
                        <div className="stat-item">
                            <h3>200+</h3>
                            <p>Companies</p>
                        </div>
                        <div className="stat-item">
                            <h3>1000+</h3>
                            <p>Happy Candidates</p>
                        </div>
                    </div>
                </div>
                
                <div className="about-image">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" alt="Team Working" />
                </div>
            </div>

            <div className="mission-section">
                <h2>Why Choose SajiloRojgar?</h2>
                <div className="mission-grid">
                    <div className="mission-card">
                        <i className="fas fa-search"></i>
                        <h3>Easy Search</h3>
                        <p>Filter jobs by category, location, and salary to find your perfect match instantly.</p>
                    </div>
                    <div className="mission-card">
                        <i className="fas fa-building"></i>
                        <h3>Verified Companies</h3>
                        <p>We work with trusted leading companies to ensure quality listings.</p>
                    </div>
                    <div className="mission-card">
                        <i className="fas fa-user-tie"></i>
                        <h3>Career Growth</h3>
                        <p>Resources and tools to help you build your resume and land your dream job.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
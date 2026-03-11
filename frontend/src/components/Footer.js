import react from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
const Footer =()=>{
    return(
        <footer className="main-footer">
            <div className="footer-top">
                <div className="footer-grid">
                    <div className="footer-col brand-col">
                        <h2 className="footer-logo">Sajilo<span>Rojgar</span></h2>
                        <p>Nepal's most reliable job portal. We connect talented professionals with top companies across the country.</p>
                        <div className="social-icons">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
                            <a href="#"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
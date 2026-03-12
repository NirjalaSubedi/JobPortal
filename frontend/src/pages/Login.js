import react from 'react';
import { Mail, Lock} from 'lucide-react';
import './style/Login.css';
const Login = ()=>{
    return(
        <div className='Maincontainer'>
            <div className="headerText">
                <h1>sajilo<span className='highlight'>Rojgar</span></h1>
                <p>Please login using the form below</p>
            </div>
            <div className='input-group'>
                <label>Email</label>
                <div className="input-wrapper">
                    <Mail className="input-icon" size={18} />
                    <input type="email" placeholder="Enter your email" />
                </div>
            </div>

            <div className='input-group'>
                <label>Password</label>
                <div className="input-wrapper">
                    <Lock className="input-icon" size={18} />
                    <input type="password" placeholder="Enter your password" />
                </div>
            </div>

            <div className='rememberme'>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember Me</label>
            </div>

            <button type="submit" className='login-btn'>
                Login
            </button>
            <div className='divider'>
                <p></p>
                <p>Or</p>
                <p></p>
            </div>
            <div className='signuptext'>
                <p>Don't have an account? <span>SignUp</span></p>
            </div>


        </div>
    )
}
export default Login;
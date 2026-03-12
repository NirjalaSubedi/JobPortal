import react from 'react';
const Login = ()=>{
    return(
        <div className='Maincontainer'>
            <div className="headerText">
                <h1>sajilo<span className='highlight'>Rojgar</span></h1>
                <p>Please login using the form below</p>
            </div>
            <div className='email'>
                Email
                <input type="email"/>
            </div>
            <div className='password'>
                password
                <input type="password"/>
            </div>
            <div className='rememberme'>
                <input type="checkbox"/>
                Remember Me
            </div>
            <div className='login-btn'>
                <input type="submit"/>
            </div>
            <div className='divider'>
                <p></p>
                <p>Or</p>
                <p></p>
            </div>


        </div>
    )
}
export default Login;
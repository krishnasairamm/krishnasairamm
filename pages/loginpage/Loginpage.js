import React from 'react';
import './Loginpage.css';

const Loginpage = () => {
    const showpw = () => {
        var x = document.getElementById('password');
         if (x.type === 'password') {
                x.type = 'text';
            } else {
                x.type = 'password';
            }
    
    }
    return (
        <div className='login-container'>
            <div className='login-page'>
                <div className='login-h1'>
                    <h1>Login</h1>
                </div>

                <div className='login-fields'>
                    <input type='text' placeholder='username' className='input-field'/>
                </div>

                <div className='login-fields'>
                    <input type='password' id='password' placeholder='password' className='input-field'/>
                    
                </div>

                <div className='forgot-password'>
                    <label><input type='checkbox' onClick={showpw}/> Show password</label>
                    <p id='forgot-pw'>Forgot password</p>
                </div>

                <div>
                    <button className='login-button'>LOGIN</button>
                </div>

                <div className='no-acc'>
                    <p>Don't have account? <span>Sign Up</span></p>
                </div>
            </div>
        </div>
    );

}

export default Loginpage;
import React from 'react';
import './Signpage.css';

const SignupPage = () => {
    const showpw = () => {
        var x = document.getElementById('password');
        if (x.type === 'password') {
            x.type = 'text';
        } else {
            x.type = 'password';
        }
    }

    return (
        <div className='signup-container'>
            <div className='signup-page'>
                <div className='signup-h1'>
                    <h1>Sign Up</h1>
                </div>

                <div className='signup-fields'>
                    <input type='text' placeholder='Full Name' className='input-field' />
                </div>

                <div className='signup-fields'>
                    <input type='email' placeholder='Email' className='input-field' />
                </div>

                <div className='signup-fields'>
                    <input type='password' id='password' placeholder='Password' className='input-field' />
                </div>

                <div className='showpw-field'>
                    <label><input type='checkbox' onClick={showpw}/> Show password</label>
                </div>

                <div>
                    <button className='signup-button'>SIGN UP</button>
                </div>

                <div className='already-acc'>
                    <p>Already have an account? <span>Login</span></p>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;

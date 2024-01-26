import React, { useState } from 'react'; // Import useState from React
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../utils/LoginValidation';
import axios from 'axios';
function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({}); // Initialize errors state with an empty object

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values); // Get validation errors
        setErrors(validationErrors); // Set errors state

        // Check if there are no validation errors
        if (validationErrors.email === '' && validationErrors.password === '') {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    if (res.data === "success") {
                        navigate('/home');
                    } else {
                        alert("No record exists");
                    }
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className='bg-white p-3 rounded w-25'>
                <h2>Log in</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.email && <span className='text-danger'> {errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                            onChange={handleInput} className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success border w-100'><strong>Login</strong></button>
                    <p>agree term and service</p>
                    <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;

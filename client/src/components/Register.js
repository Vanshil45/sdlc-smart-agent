import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, {
                email,
                password
            });
            history.push('/login');
        } catch (err) {
            setError('Failed to register. Email may already be in use.');
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Register</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default Register;

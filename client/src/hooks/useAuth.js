import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get(`${process.env.REACT_APP_API_URL}/auth/me`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(response => {
                setUser(response.data);
            })
            .catch(() => {
                setUser(null);
            })
            .finally(() => {
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, []);

    return { user, loading };
};

export default useAuth;

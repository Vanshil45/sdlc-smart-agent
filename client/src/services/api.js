import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Intercept requests to add the JWT token
apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export const login = async (email, password) => {
    return await apiClient.post('/auth/login', { email, password });
};

export const register = async (email, password) => {
    return await apiClient.post('/auth/register', { email, password });
};

export const fetchTodos = async () => {
    return await apiClient.get('/todos');
};

export const createTodo = async (todo) => {
    return await apiClient.post('/todos', todo);
};

export const updateTodo = async (id, todo) => {
    return await apiClient.put(`/todos/${id}`, todo);
};

export const deleteTodo = async (id) => {
    return await apiClient.delete(`/todos/${id}`);
};

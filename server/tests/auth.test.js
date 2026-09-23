const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index'); // Assuming your express app is exported from index.js
const User = require('../models/User');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await User.deleteMany();
  await mongoose.connection.close();
});

describe('Authentication Routes', () => {
  it('should register a new user', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({ username: 'testuser', password: 'password123' });
    
    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe('User registered successfully');
  });

  it('should login an existing user', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ username: 'testuser', password: 'password123' });
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('should not login with incorrect credentials', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ username: 'testuser', password: 'wrongpassword' });

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Invalid credentials');
  });
});

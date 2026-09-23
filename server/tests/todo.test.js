const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index');
const User = require('../models/User');
const Todo = require('../models/Todo');

let token;

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Create a user and login to get the token
  const userResponse = await request(app)
    .post('/api/auth/register')
    .send({ username: 'testuser', password: 'password123' });

  const loginResponse = await request(app)
    .post('/api/auth/login')
    .send({ username: 'testuser', password: 'password123' });

  token = loginResponse.body.token;
});

afterAll(async () => {
  await Todo.deleteMany();
  await User.deleteMany();
  await mongoose.connection.close();
});

describe('Todo Routes', () => {
  it('should create a new todo', async () => {
    const response = await request(app)
      .post('/api/todos')
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'Test Todo' });

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe('Test Todo');
  });

  it('should fetch all todos', async () => {
    const response = await request(app)
      .get('/api/todos')
      .set('Authorization', `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should delete a todo', async () => {
    const todo = await Todo.findOne();
    
    const response = await request(app)
      .delete(`/api/todos/${todo._id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(response.statusCode).toBe(204);
  });
});

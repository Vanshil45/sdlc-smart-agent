# Todo App with Authentication

A simple Todo application built with Express and React which includes user authentication.

## Features
- User registration and login
- Create, read, update, and delete todos
- Protected routes that require authentication

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose
- React
- React Router
- Passport.js for authentication
- JWT for token management
- Jest for testing

## Setup Instructions

### Server
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on the `.env.example` file:
   ```bash
   cp .env.example .env
   ```
   Update the environment variables if necessary.

4. Start the server:
   ```bash
   npm run start
   ```

### Client
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on the `.env.example` file:
   ```bash
   cp .env.example .env
   ```
   Update the environment variables if necessary.

4. Start the client:
   ```bash
   npm start
   ```

## Running Tests

To run the tests for the server, navigate to the server directory and run:
```bash
npm test
```

## License
This project is licensed under the MIT License.

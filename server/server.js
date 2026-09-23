const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const passport = require('passport');
const connectDB = require('./config/db');
const routes = require('./routes/index');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const getPartnerData = require('./api/getPartnerData');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.post('/api/submit', getPartnerData);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;
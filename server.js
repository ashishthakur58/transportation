const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./api-routes');

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection string
const dbUrl = 'mongodb+srv://ashishthakur:vbSjktVlL83O0Fwr@transport.jsvcuck.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

// Event listeners for MongoDB connection events
db.on('connected', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

// Middleware
app.use(bodyParser.json());

// Use your API routes
app.use('/api', apiRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

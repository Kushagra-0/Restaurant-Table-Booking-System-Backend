const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('../../config/db')
const bookingRoutes = require('../../routes/bookingRoutes');
const errorHandler = require('../../middleware/errorHandler');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// CORS setup
app.use(cors({
    origin: 'http://localhost:3000', // Adjust for your frontend URL
}));

// Test route to check if server is working
app.get('/api/test', (req, res) => {
    res.json({ message: 'API is working!' });
});

// Booking routes
app.use('/api/bookings', bookingRoutes);

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
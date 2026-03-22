const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.post('/api/reservation', (req, res) => {
  // Handle reservation submissions
  console.log('Reservation received:', req.body);
  res.json({ 
    success: true, 
    message: 'Reservation request received! We will contact you soon.' 
  });
});

app.post('/api/inquiry', (req, res) => {
  const { name, email, phone, inquiryType, message } = req.body;
  
  if (!name || !email || !phone || !inquiryType || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  console.log('New Inquiry received:', { name, email, phone, inquiryType, message });
  
  res.json({
    success: true,
    message: 'Inquiry processed successfully!'
  });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Blaze Burn server is running!' });
});

app.listen(PORT, () => {
  console.log(`🔥 Blaze Burn server running on port ${PORT}`);
});

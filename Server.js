// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint to handle blood request submissions
app.post('/api/request-blood', (req, res) => {
  const { bloodType, quantity, location } = req.body;
  // Here, add your business logic (e.g., check inventory, notify nearby donors)
  console.log('Blood Request:', { bloodType, quantity, location });
  res.json({ success: true, message: "Blood request submitted successfully." });
});

// Endpoint to handle donor registration
app.post('/api/register-donor', (req, res) => {
  const { name, bloodType, email } = req.body;
  // Here, add your business logic (e.g., save donor to the database)
  console.log('Donor Registration:', { name, bloodType, email });
  res.json({ success: true, message: "Donor registration successful." });
});

// Serve static files (your HTML, CSS, and JS files) if needed
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all domains (APIHub required)
app.use(cors());

// Load food data
const foods = require('./data/foods.json');

// Home Route
app.get('/', (req, res) => {
  res.json({
    name: "Healthy Food Recommendation API",
    version: "1.0.0",
    base_url: "http://localhost:3000",
    documentation: "/docs",
    endpoints: [
      "/healthyfoods/breakfast",
      "/healthyfoods/lunch",
      "/healthyfoods/snacks",
      "/healthyfoods/dinner",
      "/healthyfoods/dinnerday2"
    ]
  });
});

// Documentation Route
app.get('/docs', (req, res) => {
  res.send(`
    <h1>Healthy Food Recommendation API 📘</h1>
    <p>This API provides healthy meal recommendations for different categories.</p>

    <h2>Available Endpoints</h2>
    <ul>
      <li><b>GET /healthyfoods/breakfast</b> - Get breakfast items</li>
      <li><b>GET /healthyfoods/lunch</b> - Get lunch items</li>
      <li><b>GET /healthyfoods/snacks</b> - Get snacks</li>
      <li><b>GET /healthyfoods/dinner</b> - Get dinner items</li>
      <li><b>GET /healthyfoods/dinnerday2</b> - Get alternate dinner items</li>
    </ul>

    <h2>Sample Response</h2>
    <pre>{
  "category": "breakfast",
  "items": ["Oats with fruits", "Boiled eggs"]
}</pre>

    <p>Use this API freely in your frontend projects.</p>
  `);
});

// Utility function
function sendCategory(req, res, category) {
  const items = foods[category];
  
  if (!items) {
    return res.status(404).json({ error: 'Category not found' });
  }

  res.json({
    category,
    count: items.length,
    items
  });
}

// Food Category Endpoints
app.get('/healthyfoods/breakfast', (req, res) => sendCategory(req, res, 'breakfast'));
app.get('/healthyfoods/lunch', (req, res) => sendCategory(req, res, 'lunch'));
app.get('/healthyfoods/snacks', (req, res) => sendCategory(req, res, 'snacks'));
app.get('/healthyfoods/dinner', (req, res) => sendCategory(req, res, 'dinner'));
app.get('/healthyfoods/dinnerday2', (req, res) => sendCategory(req, res, 'dinnerday2'));

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

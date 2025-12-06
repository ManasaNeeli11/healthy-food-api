const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all domains (required for APIHub)
app.use(cors());

// Load food data
const foods = require('./data/foods.json');

// Base URL for APIHub (replace with your actual published URL)
const BASE_URL = 'https://apihub.digital/ManasaNeeli/healthy-food-api';

// Home Route
app.get('/', (req, res) => {
  res.json({
    name: "Healthy Food Recommendation API",
    version: "1.0.0",
    base_url: BASE_URL,
    documentation: `${BASE_URL}/docs`,
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
    <p>This API provides healthy meal recommendations for different categories. All endpoints return JSON responses.</p>

    <h2>Available Endpoints</h2>
    <ul>
      <li><b>GET ${BASE_URL}/healthyfoods/breakfast</b> - Get breakfast items</li>
      <li><b>GET ${BASE_URL}/healthyfoods/lunch</b> - Get lunch items</li>
      <li><b>GET ${BASE_URL}/healthyfoods/snacks</b> - Get snacks</li>
      <li><b>GET ${BASE_URL}/healthyfoods/dinner</b> - Get dinner items</li>
      <li><b>GET ${BASE_URL}/healthyfoods/dinnerday2</b> - Get alternate dinner items</li>
    </ul>

    <h2>How to Use</h2>
    <p>Simply make a <b>GET</b> request to the endpoints. No authentication required. Works in frontend or backend.</p>

    <h2>JavaScript Example</h2>
    <pre>
fetch("${BASE_URL}/healthyfoods/breakfast")
  .then(res => res.json())
  .then(data => console.log("Breakfast:", data))
  .catch(err => console.error("Error:", err));
    </pre>

    <h2>Python Example</h2>
    <pre>
import requests

res = requests.get("${BASE_URL}/healthyfoods/breakfast")
print(res.json())
    </pre>

    <h2>Sample Response (Breakfast)</h2>
    <pre>{
  "category": "breakfast",
  "count": 4,
  "items": ["Oats with fruits", "Boiled eggs", "Sprouts salad", "Ragi malt"]
}</pre>

    <h2>Notes</h2>
    <ul>
      <li>All responses are in JSON format except /docs which returns HTML.</li>
      <li>You can use the API freely in your frontend projects.</li>
      <li>Replace ${BASE_URL} with your live APIHub URL after publishing.</li>
    </ul>
  `);
});

// Utility function to send food category data
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

// Health check endpoint
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

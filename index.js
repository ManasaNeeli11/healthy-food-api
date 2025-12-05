const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const foods = require('./data/foods.json');

app.get('/', (req, res) => {
  res.json({
    name: "Healthy Food Recommendation API",
    version: "1.0.0",
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

app.get('/docs', (req, res) => {
  res.send(`
    <h1>Healthy Food Recommendation API</h1>
    <p>Endpoints:</p>
    <ul>
      <li>GET /healthyfoods/breakfast</li>
      <li>GET /healthyfoods/lunch</li>
      <li>GET /healthyfoods/snacks</li>
      <li>GET /healthyfoods/dinner</li>
      <li>GET /healthyfood/dinnerday2</li>
    </ul>
  `);
});

function sendCategory(req, res, category) {
  const items = foods[category];
  if (!items) {
    return res.status(404).json({ error: 'Category not found' });
  }
  res.json({ category, items });
}

app.get('/healthyfoods/breakfast', (req, res) => sendCategory(req, res, 'breakfast'));
app.get('/healthyfoods/lunch', (req, res) => sendCategory(req, res, 'lunch'));
app.get('/healthyfoods/snacks', (req, res) => sendCategory(req, res, 'snacks'));
app.get('/healthyfoods/dinner', (req, res) => sendCategory(req, res, 'dinner'));
app.get('/healthyfoods/dinnerday2', (req, res) => sendCategory(req,res, 'dinnerday2')); 


app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

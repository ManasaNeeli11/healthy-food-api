🍎 Healthy Food Recommendation API

A beginner-friendly RESTful API that provides healthy meal options for breakfast, lunch, snacks, and dinner. Built using Node.js and Express, it returns JSON data ready to use in web or mobile apps.

Features

Healthy meal recommendations for breakfast, lunch, snacks, and dinner

Alternate meal options like dinnerday2

Simple RESTful GET endpoints

/docs endpoint provides API documentation

JSON responses ready for frontend apps

Self-hosted and easy to deploy

API Endpoints
Endpoint	Description
GET /healthyfoods/breakfast	Returns breakfast items
GET /healthyfoods/lunch	Returns lunch items
GET /healthyfoods/snacks	Returns snack items
GET /healthyfoods/dinner	Returns dinner items
GET /healthyfoods/dinnerday2	Returns alternate dinner items
GET /docs	Returns API documentation page
Installation & Usage

Clone the repository

git clone https://github.com/ManasaNeeli11/healthy-food-api.git
cd healthy-food-api


Install dependencies

npm install


Start the server

node index.js


If successful, you will see:

Server is running on http://localhost:3000

Example API Requests & Responses

Breakfast Endpoint
GET http://localhost:3000/healthyfoods/breakfast

{
  "breakfast": [
    "Oatmeal with fruits",
    "Greek yogurt with honey",
    "Scrambled eggs with spinach",
    "Whole grain toast with avocado"
  ]
}


Lunch Endpoint
GET http://localhost:3000/healthyfoods/lunch

{
  "lunch": [
    "Grilled chicken salad",
    "Quinoa and vegetable bowl",
    "Lentil soup with whole grain bread",
    "Brown rice with stir-fried vegetables"
  ]
}


Snacks Endpoint
GET http://localhost:3000/healthyfoods/snacks

{
  "snacks": [
    "Fruit smoothie",
    "Carrot sticks with hummus",
    "Mixed nuts",
    "Apple slices with peanut butter"
  ]
}


Dinner Endpoint
GET http://localhost:3000/healthyfoods/dinner

{
  "dinner": [
    "Grilled salmon with veggies",
    "Tofu stir-fry",
    "Chicken and vegetable soup",
    "Quinoa salad with beans"
  ]
}


Alternate Dinner Endpoint (dinnerday2)
GET http://localhost:3000/healthyfoods/dinnerday2

{
  "dinnerday2": [
    "Baked cod with steamed broccoli",
    "Vegetable curry with brown rice",
    "Turkey and spinach wraps",
    "Stuffed bell peppers"
  ]
}


API Documentation
GET http://localhost:3000/docs

Returns a simple HTML or JSON page describing all endpoints.

Project Structure
healthy-food-api/
│
├── index.js          # Main server file
├── package.json      # Project metadata & dependencies
├── package-lock.json
├── .gitignore
├── .env              # Environment variables (optional)
└── data/
    └── meals.json    # Local JSON file storing meal data

Sample Code (index.js)
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const meals = {
  breakfast: ["Oatmeal with fruits", "Greek yogurt with honey", "Scrambled eggs with spinach", "Whole grain toast with avocado"],
  lunch: ["Grilled chicken salad", "Quinoa and vegetable bowl", "Lentil soup with whole grain bread", "Brown rice with stir-fried vegetables"],
  snacks: ["Fruit smoothie", "Carrot sticks with hummus", "Mixed nuts", "Apple slices with peanut butter"],
  dinner: ["Grilled salmon with veggies", "Tofu stir-fry", "Chicken and vegetable soup", "Quinoa salad with beans"],
  dinnerday2: ["Baked cod with steamed broccoli", "Vegetable curry with brown rice", "Turkey and spinach wraps", "Stuffed bell peppers"]
};

app.get("/healthyfoods/:meal", (req, res) => {
  const meal = req.params.meal.toLowerCase();
  if (meals[meal]) {
    res.json({ [meal]: meals[meal] });
  } else {
    res.status(404).json({ error: "Meal not found" });
  }
});

app.get("/docs", (req, res) => {
  res.send("<h1>Healthy Food API Documentation</h1><p>Available endpoints: /healthyfoods/breakfast, /lunch, /snacks, /dinner, /dinnerday2</p>");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

Technology Stack

Node.js – Backend runtime

Express.js – REST API framework

JSON file – Local data storage

Useful Links

Live API: APIHub

GitHub Repository: Healthy Food API

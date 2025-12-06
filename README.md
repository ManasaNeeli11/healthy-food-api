# 🍎 Healthy Food Recommendation API

A **simple and beginner-friendly REST API** that helps you get **healthy meal suggestions** for breakfast, lunch, snacks, and dinner. It’s built using **Node.js** and **Express**, and it sends data in **JSON format**, which can be easily used in websites or mobile apps.

---

## 🌟 Features

* Get healthy meals for **breakfast, lunch, snacks, and dinner**
* Alternate dinner options using `/dinnerday2`
* Simple **GET requests** – just ask, and you get the meal list
* `/docs` endpoint shows API instructions
* Works out-of-the-box, easy to run on your computer
* Perfect for learning, projects, or creating health apps

---

## 🔗 API Endpoints

| Endpoint                   | What it does               |
| -------------------------- | -------------------------- |
| `/healthyfoods/breakfast`  | Get breakfast items        |
| `/healthyfoods/lunch`      | Get lunch items            |
| `/healthyfoods/snacks`     | Get snack items            |
| `/healthyfoods/dinner`     | Get dinner items           |
| `/healthyfoods/dinnerday2` | Get alternate dinner items |
| `/docs`                    | View API documentation     |

---

## 🍽 Sample Meal Responses

**Breakfast:**

```json
["Oatmeal with fruits","Greek yogurt with honey","Scrambled eggs with spinach","Whole grain toast with avocado"]
```

**Lunch:**

```json
["Grilled chicken salad","Quinoa and vegetable bowl","Lentil soup with whole grain bread","Brown rice with stir-fried vegetables"]
```

**Snacks:**

```json
["Fruit smoothie","Carrot sticks with hummus","Mixed nuts","Apple slices with peanut butter"]
```

**Dinner:**

```json
["Grilled salmon with veggies","Tofu stir-fry","Chicken and vegetable soup","Quinoa salad with beans"]
```

**Alternate Dinner (`dinnerday2`):**

```json
["Baked cod with steamed broccoli","Vegetable curry with brown rice","Turkey and spinach wraps","Stuffed bell peppers"]
```

---

## ⚡ Installation & Running

1. Clone the project:

```bash
git clone https://github.com/ManasaNeeli11/healthy-food-api.git
cd healthy-food-api
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node index.js
```

4. Open your browser or Postman at:

```
http://localhost:3000
```

> You are now ready to get healthy meal suggestions instantly!

---

## 🗂 Project Structure

```
healthy-food-api/
├── index.js          # Main server code
├── package.json      # Project info & dependencies
├── package-lock.json
├── .gitignore
├── .env              # Optional settings
└── data/
    └── meals.json    # All meal data stored here
```

---

## 💻 Sample Code Overview (`index.js`)

```javascript
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
  if (meals[meal]) res.json({ [meal]: meals[meal] });
  else res.status(404).json({ error: "Meal not found" });
});

app.get("/docs", (req, res) => {
  res.send("<h1>Healthy Food API Documentation</h1><p>Available endpoints: /healthyfoods/breakfast, /lunch, /snacks, /dinner, /dinnerday2</p>");
});

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
```

---

## 🛠 Technology Stack

* **Node.js** – Runs the backend server
* **Express.js** – Handles API requests
* **JSON** – Stores all meal data

---

## 🌐 Useful Links

* Live API: [APIHub](https://www.apihub.digital/post/6932f9872a8df231628f1caf)
* GitHub Repository: [Healthy Food API](https://github.com/ManasaNeeli11/healthy-food-api)

---

> "Made with ❤️ by **Manasa** – because healthy eating should be simple for everyone!"






# 🍎 Healthy Food Recommendation API Documentation

A **beginner-friendly REST API** to get **healthy meal suggestions** for **breakfast, lunch, snacks, and dinner**. Built using **Node.js** and **Express**, it returns data in **JSON format**, which can be easily used in websites, mobile apps, or Python scripts.

---

## 🌟 Features

* Get healthy meals for **breakfast, lunch, snacks, and dinner**
* Alternate dinner options using `/dinnerday2`
* Simple **GET requests** – just ask, and you get the meal list
* `/docs` endpoint shows API instructions
* Works out-of-the-box on your computer
* Perfect for learning or creating health apps

---

## ⚡ API Endpoints & Responses

| Endpoint                   | Description                | Sample Response                                                                                                                            |
| -------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `/healthyfoods/breakfast`  | Get breakfast items        | `json ["Oatmeal with fruits","Greek yogurt with honey","Scrambled eggs with spinach","Whole grain toast with avocado"] `                   |
| `/healthyfoods/lunch`      | Get lunch items            | `json ["Grilled chicken salad","Quinoa and vegetable bowl","Lentil soup with whole grain bread","Brown rice with stir-fried vegetables"] ` |
| `/healthyfoods/snacks`     | Get snack items            | `json ["Fruit smoothie","Carrot sticks with hummus","Mixed nuts","Apple slices with peanut butter"] `                                      |
| `/healthyfoods/dinner`     | Get dinner items           | `json ["Grilled salmon with veggies","Tofu stir-fry","Chicken and vegetable soup","Quinoa salad with beans"] `                             |
| `/healthyfoods/dinnerday2` | Get alternate dinner items | `json ["Baked cod with steamed broccoli","Vegetable curry with brown rice","Turkey and spinach wraps","Stuffed bell peppers"] `            |
| `/docs`                    | View API documentation     | Returns HTML page with all endpoints                                                                                                       |

---

## 💻 Example Requests

### **JavaScript (Node.js / Browser with fetch)**

```javascript
// Example: Get breakfast items
fetch("http://localhost:3000/healthyfoods/breakfast")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
```

### **Python (using requests)**

```python
import requests

response = requests.get("http://localhost:3000/healthyfoods/breakfast")
if response.status_code == 200:
    print(response.json())
else:
    print("Error:", response.status_code)
```

> ✅ You can replace `breakfast` with `lunch`, `snacks`, `dinner`, or `dinnerday2` in the URL.

---

## 🛠 CORS Fix

Sometimes your frontend app may **not load API data due to CORS issues**. To fix:

1. Make sure you have installed the `cors` package:

```bash
npm install cors
```

2. In `index.js`, use:

```javascript
const cors = require("cors");
app.use(cors()); // Enable all origins
```

This allows any website or app to request data from your API safely.

---

## 🔧 Installation & Running

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

4. Open your browser or API tool at:

```
http://localhost:3000
```

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

## ⚡ Sample Code Overview (`index.js`)

```javascript
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Fix CORS issues

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

## 🌐 Technology Stack

* **Node.js** – Backend runtime
* **Express.js** – REST API framework
* **JSON** – Local data storage

---

## 🌐 Useful Links

* Live API: [APIHub](https://www.apihub.digital/post/6932f9872a8df231628f1caf)
* GitHub Repository: [Healthy Food API](https://github.com/ManasaNeeli11/healthy-food-api)

---

> "Made with ❤️ by **Manasa** – Making healthy eating simple for everyone!"


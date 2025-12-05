# Healthy Food Recommendation API 🍎🥗

A simple RESTful API that provides curated healthy meal options for different times of the day. Built with **Node.js** and **Express**, this API returns JSON data for breakfast, lunch, snacks, dinner, and alternate meal options.  

**Features:**  
- Healthy meal recommendations for breakfast, lunch, snacks, and dinner  
- Alternate meal options like dinnerday2  
- Simple RESTful GET endpoints  
- `/docs` endpoint provides API documentation  
- JSON responses ready for frontend apps  
- Self-hosted and easy to deploy  

**Endpoints:**  
- `GET /healthyfoods/breakfast` → Returns breakfast items  
- `GET /healthyfoods/lunch` → Returns lunch items  
- `GET /healthyfoods/snacks` → Returns snack items  
- `GET /healthyfoods/dinner` → Returns dinner items  
- `GET /healthyfoods/dinnerday2` → Returns alternate dinner items  
- `GET /docs` → Returns API documentation page  

**Installation & Usage:**  
1. Clone the repo:  
```bash
git clone https://github.com/ManasaNeeli11/healthy-food-api.git
cd healthy-food-api
npm install
Start the server:

node index.js


Open in browser or Postman:

http://localhost:3000/healthyfoods/breakfast
http://localhost:3000/docs


Technology Stack:

Node.js

Express.js

Local JSON file for data storage

Links:

APIHub Live API: https://www.apihub.digital/post/6932f9872a8df231628f1caf

GitHub Repository: https://github.com/ManasaNeeli11/healthy-food-api

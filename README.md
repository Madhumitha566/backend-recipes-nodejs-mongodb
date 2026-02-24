# backend-recipes-nodejs-mongodb


# 🍲 Recipe Management API

A robust CRUD (Create, Read, Update, Delete) RESTful API built with the **MVC pattern**. This application allows users to manage a collection of recipes, providing a seamless interface between Node.js, Express, and MongoDB.

---

## 🏗 Architecture: MVC Pattern

The project is organized into a clean Model-View-Controller structure to ensure scalability and maintainability:


* **Models:** Defines the recipe schema and interacts with MongoDB via Mongoose.
* **Views:** (Optional/JSON) Handles the data format sent to the client.
* **Controllers:** Contains the business logic for each CRUD operation.
* **Routes:** Maps the HTTP verbs to the controller functions.

---

## 🛠 Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB
* **ODM:** Mongoose
* **Documentation:** Postman

---

## 🚀 Features & API Endpoints

The API supports the following operations for complete recipe management:

| Action | Method | Endpoint | Description |
| :--- | :--- | :--- | :--- |
| **Create** | `POST` | `/api/recipes` | Add a new recipe to the database. |
| **Read (All)** | `GET` | `/api/recipes` | Retrieve a list of all saved recipes. |
| **Read (One)** | `GET` | `/api/recipes/:id` | Get detailed info of a specific recipe by ID. |
| **Update** | `PUT` | `/api/recipes/:id` | Modify an existing recipe's details. |
| **Delete** | `DELETE` | `/api/recipes/:id` | Remove a recipe from the database. |

---

   ```bash
   git clone [https://github.com/yourusername/recipe-crud-api.git](https://github.com/yourusername/recipe-crud-api.git)
   cd recipe-crud-api

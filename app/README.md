# 📚 BookApp

A full-stack MERN (MongoDB, Express, React, Node.js) application for browsing books, viewing detailed information, and managing favorites. This project includes both frontend and backend code, supports running locally with Node.js, and is deployable using Docker and Kubernetes (optional).

---

## ✨ Features

- ✅ Browse a list of books with title, author, genre, year, and cover image  
- ✅ View detailed book information and reviews  
- ✅ Add or remove books from favorites (stored in browser's local storage)  
- ✅ RESTful API built with Express and MongoDB  
- ✅ Clean React frontend with routing  

---

## 🛠️ Tech Stack

- **Frontend:** React.js, React Router  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (local or via MongoDB Atlas)  
- **Optional:** Docker, Kubernetes, GitHub Actions for CI/CD  

---

## 📦 Getting Started (Local Setup with Node.js)

### 1. Clone the repository

bash
git clone https://github.com/<your-username>/bookapp.git
cd bookapp

### 2. Install dependencies
Backend:

cd backend
npm install

Frontend:

cd ../frontend
npm install

### 3. Configure environment variables

Create a .env file in the backend/ directory with the following content:

MONGO_DB_URI=mongodb://localhost:27017/bookapp

Ensure MongoDB is running on your system.

### 4. Run the project
Start MongoDB:

Make sure the mongod service is running locally.
Start the backend server:

cd backend
npm start

Runs at: http://localhost:5000
Start the frontend:

cd ../frontend
npm start

Runs at: http://localhost:3000

### 🧪 API Endpoints
Method	Endpoint	Description
GET	/api/books	Fetch all books
GET	/api/books/:id	Fetch details of a book

### Running via Docker
simply run docker-compose up from the app directory

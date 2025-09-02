# Attendance-system

```markdown
# 📌 Attendance System  

A full-stack attendance management system built with **React (Vite + TailwindCSS)** for the frontend and **Node.js + Express + MongoDB** for the backend.  

---

## 🚀 Features  
- User **signup** and **login** functionality  
- Secure authentication with **JWT**  
- MongoDB database integration  
- Modular frontend with components like **Navbar, Hero, and Forms**  
- Backend API with **Express.js**  
- Environment variables with **dotenv**  

---

## 📂 Project Structure  
```

attendance-system/
│── backend/        # Node.js + Express + MongoDB server
│   ├── server.js   # Main server file
│   ├── routes/     # API routes
│   ├── models/     # Mongoose models
│   └── .env        # Environment variables
│
│── src/            # React frontend (Vite + TailwindCSS)
│   ├── components/ # Navbar, Hero, etc.
│   ├── Home/
│   ├── App.jsx     # Main app component
│   └── main.jsx    # React entry point
│
│── public/         # Static assets
│── package.json    # Frontend dependencies
│── tailwind.config.js
│── vite.config.js
└── README.md

````

---

## ⚙️ Installation & Setup  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/MeAbhishek09/attendance-system.git
cd attendance-system
````

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

* Create a **.env** file in the `backend/` folder and add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

* Run backend:

```bash
node server.js
```

👉 Backend runs on **[http://localhost:5000](http://localhost:5000)**

---

### 3️⃣ Setup Frontend

```bash
cd attendance-system
npm install
npm run dev
```

👉 Frontend runs on **[http://localhost:5173](http://localhost:5173)**

---

## 🖥️ Usage

1. Open **[http://localhost:5173](http://localhost:5173)** in your browser.
2. Click **Signup/Login** to create a new account.
3. The system connects with the backend API to store data in MongoDB.

---

## 🛠️ Tech Stack

* **Frontend**: React, Vite, TailwindCSS
* **Backend**: Node.js
* **Database**: MongoDB (Mongoose)
* **Auth**: JWT + bcrypt.js

---

👨‍💻 Developed by [Abhishek](https://github.com/MeAbhishek09)

```


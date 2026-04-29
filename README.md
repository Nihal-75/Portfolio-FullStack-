# MERN Stack Starter Kit 🚀

A production-ready full-stack boilerplate with **React + Vite + Tailwind CSS** on the frontend and **Node.js + Express + MongoDB** on the backend.

---

## 📁 Project Structure

```
portfolio/
├── client/          # React + Vite + Tailwind CSS frontend
│   └── src/
│       ├── components/   # Reusable UI (Navbar, etc.)
│       ├── pages/        # Route-level pages (Home, About)
│       └── services/     # Axios API abstraction
└── server/          # Express + Mongoose backend
    ├── config/       # MongoDB connection
    ├── controllers/  # Business logic
    ├── middleware/   # Error handling, auth (future)
    ├── models/       # Mongoose schemas
    └── routes/       # API route definitions
```

---

## 🚀 Getting Started

### 1. Backend

```bash
cd server
npm install
# Edit .env if needed (MONGO_URI, PORT, etc.)
npm run dev        # Starts on http://localhost:5000
```

### 2. Frontend

```bash
cd client
npm run dev        # Starts on http://localhost:5173
```

### 3. Test API

```
GET http://localhost:5000/api/test
```

---

## 🌐 Environment Variables (`server/.env`)

| Variable           | Default                              | Description               |
|--------------------|--------------------------------------|---------------------------|
| `PORT`             | `5000`                               | Express server port       |
| `NODE_ENV`         | `development`                        | Environment mode          |
| `MONGO_URI`        | `mongodb://localhost:27017/merndb`   | MongoDB connection string |
| `ALLOWED_ORIGINS`  | `http://localhost:5173`              | CORS-allowed origins      |

---

## 🛡️ Features

- ✅ CORS with origin whitelist
- ✅ Helmet security headers
- ✅ Rate limiting (100 req / 15 min per IP)
- ✅ Morgan request logging
- ✅ Centralized error handling (no stack traces in prod)
- ✅ Graceful server shutdown
- ✅ Mongoose auto-reconnect on failure
- ✅ Vite dev-proxy for seamless local API calls
- ✅ Axios interceptors (auth token + error normalization)
- ✅ Tailwind CSS with dark mode & custom design system
- ✅ React Router v6

---

## 📦 Tech Stack

| Layer      | Technology           |
|------------|----------------------|
| Frontend   | React 18 + Vite 5    |
| Styling    | Tailwind CSS v3      |
| Routing    | React Router v6      |
| HTTP       | Axios                |
| Backend    | Node.js + Express 4  |
| Database   | MongoDB + Mongoose 8 |
| Security   | Helmet + CORS + Rate Limit |
| Dev Server | Nodemon              |

## Photos Proof and Setup Guide

This document provides a comprehensive setup guide for the MERN application in this repository and includes screenshots of the running app.

### Prerequisites

- Node.js 18+ and npm
- A MongoDB connection string (e.g., MongoDB Atlas)

### Project Structure

- `backend`: Express + Mongoose API
- `frontend`: React + Vite UI
- `Assignment_Photos`: Screenshots used below

### 1) Backend Setup

1. Open a terminal and navigate to the backend:

   ```bash
   cd backend
   npm install
   ```

2. Create a `.env` file in `backend` with:

   ```bash
   # Required
   MONGODB_URI=your-mongodb-connection-string

   # Optional
   PORT=5000
   ```

   - The server reads `MONGODB_URI` to connect to MongoDB (`backend/Config/db.js`).
   - Default port is 5000 if `PORT` is not set.

3. Start the backend (development mode with auto-reload):

   ```bash
   npm run dev
   ```

   The API will be available at `http://localhost:5000`.

### 2) Frontend Setup

1. In a new terminal, navigate to the frontend:

   ```bash
   cd frontend
   npm install
   ```

2. Create a `.env` file in `frontend` with the API base URL (see `frontend/src/lib/api.js`):

   ```bash
   VITE_API_URI=http://localhost:5000
   ```

3. Start the frontend dev server:

   ```bash
   npm run dev
   ```

   Vite serves the app (by default) at `http://localhost:5173`.

### 3) Verifying the App

- Ensure the backend is running: check the console for “Server is running in http://localhost:5000...” and “Database connected successfully”.
- Open `http://localhost:5173` in your browser and interact with the app.

### API Notes

- Base URL: `VITE_API_URI` (e.g., `http://localhost:5000`)
- Routes are mounted under `/api`; task routes are available at `/api/task` (see `backend/Routes/task.route.js`).

### Screenshots

Below are screenshots of the application located in the `Assignment_Photos` folder.

![Screenshot 1](Assignment_Photos/Screenshot%202025-11-11%20153556.png)

![Screenshot 2](Assignment_Photos/Screenshot%202025-11-11%20153716.png)

![Screenshot 3](Assignment_Photos/Screenshot%202025-11-11%20153812.png)

### Troubleshooting

- If the frontend cannot reach the backend, confirm:
  - The backend is running on the expected port.
  - `VITE_API_URI` in `frontend/.env` matches the backend URL.
  - CORS allows the frontend origin (`http://localhost:5173` is already whitelisted).
- If MongoDB connection fails, verify the `MONGODB_URI` string and network access rules in your MongoDB provider.

---

For additional details, see the existing `README.md` files in the root and `frontend/` folders.


# 🚀 Fullstack Todo App (React + Redux Toolkit + Express)

This project is not just another Todo App — it was built from scratch with a complete frontend + backend stack, implementing modern concepts from Redux Toolkit, asynchronous Thunks, Axios, memoized Selectors, and REST API in Node/Express.

📸 Screenshots


## 🛠️ Used Tech 

### Frontend
- ⚛️ **React** (functional components + hooks)
- 🎯 **Redux Toolkit** (slices, reducers, selectors, extraReducers)
- 🔄 **Redux Thunks** (asynchronous requests with Axios)
- 🎨 **TailwindCSS** (modern and responsive UI)

### Backend
- 🌐 **Node.js + Express**
- 🔗 **REST API** with endpoints for `GET`, `POST`, `PUT`, `DELETE`
- 🛡️ **CORS + JSON middleware**
- Database simulation with in-memory array

## 📂 Project Structure

├── src/
│ ├── NewTodoForm.jsx # Creation form
│ ├── TodoList.jsx # Main list of all
│ ├── TodoListItem.jsx # Individual item
│ ├── selectors.js # Stored selectors (completed/incomplete/loading)
│ ├── thunks.js # Asynchronous thunks (axios)
│ ├── todosSlice.js # Redux slice for all
│ ├── loadingSlice.js # Redux slice for loading state
│ ├── server.js # Express server (REST API for all)

## ⚙️ Features

- ✅ Create all (frontend sends to API and Redux updates)
- 🗑️ Delete all (DELETE in API and synchronization in Redux)
- 🎯 Mark as complete (PUT in backend and update in global state)
- 🔄 Asynchronous state management with **Redux Thunks**
- 📊 Automatic separation of **Completed** and **Incomplete**
- ⏳ Loading state management (`loadingStarted`, `loadingCompleted`, `loadingFailed`)
- 🎨 Responsive and stylish interface with **TailwindCSS**

  ## ▶️ How to run the project

### 1. Clone the repository
git clone https://github.com/brunolopes9/MyTodo.git

2. Install dependencies

# Install on the frontend
npm install

# Install on the backend
npm install

3. Run the backend (Express API)

node server.js
Server available at: http://localhost:3000

4. Run the frontend (React + Vite)

npm run dev
Frontend available at: http://localhost:5173

🌍 Proxy between Frontend and Backend
In vite.config.js, the frontend is configured to use the local API:
‘/api’: ‘http://localhost:3000’
Thus, axios.get(“/api/todos”) calls work without CORS issues.

📚 Lessons and Concepts Applied

Structuring Redux Toolkit with slices, reducers, extraReducers
Using memorized selectors with createSelector
Managing asynchronous state with Redux Thunks
Frontend <-> backend communication via Axios and Express
Separation of responsibilities between UI, global state, and API
Proxy configuration in Vite to avoid CORS
Best practices for organizing folders and components

✨ Conclusion

This project shows:

🔥 Real fullstack integration
🎯 Mastery of React + Redux Toolkit
🌐 REST API construction in Express
🎨 Modern interface with TailwindCSS

In other words, it's not just a simple Todo. 🚀


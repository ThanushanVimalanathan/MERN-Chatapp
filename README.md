💬 MERN-Chatapp

A real-time chat application built with the MERN stack — MongoDB, Express, React, and Node.js — featuring instant messaging and live updates using WebSockets (Socket.IO).

🚀 Features

✨ Real-time messaging between users
🧑‍🤝‍🧑 Multiple chat rooms
⚡ Instant notifications for new messages
📌 Clean and responsive UI

🛠️ Tech Stack

Frontend: React

Backend: Node.js, Express

Database: MongoDB

Real-time Communication: Socket.IO

Styling: CSS / Tailwind / Bootstrap (update as relevant)

📁 Project Structure
MERN-Chatapp/
├── client/           # React frontend
├── server/           # Express backend
├── config/           # Config files (DB, env, etc.)
├── models/           # Mongoose schemas
├── routes/           # API routes
├── socket/           # WebSockets logic
├── .env
├── package.json
└── README.md

⚙️ Installation

Clone the repo

git clone https://github.com/ThanushanVimalanathan/MERN-Chatapp.git


Install dependencies

cd MERN-Chatapp
npm install


Setup environment variables
Create a .env file in the server/ folder:

PORT=5000
MONGO_URI=your_mongo_db_uri


Start the backend

npm run server


Start the frontend

cd client
npm install
npm start

🧪 How to Use

Start both backend and frontend servers.

Open the React app in your browser.

Join a chat room or start messaging instantly!

Real-time messages update via Socket.IO.

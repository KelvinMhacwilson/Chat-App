# Chat-App

## Overview
Chat-App is a real-time chat application built using the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to communicate with each other through a web interface, providing a seamless and interactive chat experience.

## Features
- Real-time messaging with WebSocket (Socket.io)
- User authentication and authorization
- Private and group chat functionalities
- Responsive design for mobile and desktop

## Prerequisites
- Node.js (v12+)
- MongoDB

## Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/KelvinMhacwilson/Chat-App.git
    cd Chat-App

2. **Backend setup**
    ```bash
    npm install
    ```

3. **Frontend setup**
    ```bash
    cd frontend
    npm install
    ```

4. **Set up environment variables**:
    Create a `.env` file in the root directory of the backend directory and add the following variables:
    ```
    PORT=8000
    MONGODB_CONNECTION_STRING = your_mongodb_connection_string
    JWT_SECRET = a_personal_secret/key
    FRONTEND_URL = the_frontend_url
    ```
    Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

5. **Run the development server**:
    ```bash
    cd frontend
    npm run dev
    ```

6. **Run the backend server**:   
   ```bash
   cd into the main directory
   npm run server
   ```





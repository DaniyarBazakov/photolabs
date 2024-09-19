# react-photolabs
PhotoLabs is a full-stack photography gallery web application where users can browse, like, and explore a variety of photos. The application is built with a React frontend and a Node.js/Express backend, using PostgreSQL as the database.

![](https://github.com/DaniyarBazakov/photolabs/blob/main/img/Recording%202024-09-19%20at%2010.47.42.gif)

## Features

- **Browse Photos**: Explore beautiful photos organized by topic.
- **Like Photos**: Mark photos as favorites and view them later.
- **Search by Topic**: Find photos by selecting a topic from the navigation bar.
- **Real-Time Updates**: Using WebSockets (`socket.io`), real-time updates for likes and new photos are handled seamlessly.
- **Similar Photos**: View similar photos for more exploration.
- **Responsive Design**: The app is optimized for mobile and desktop.

## Screenshots




## Tech Stack

### Frontend
- **React**: Frontend framework for building user interfaces.
- **SASS**: For styling components using SCSS.
- **Socket.io**: For real-time updates on likes and new photos.

### Backend
- **Node.js & Express**: For handling server-side logic and API requests.
- **PostgreSQL**: Used as the database for storing photos, users, and likes.
- **Socket.io**: For handling WebSockets on the server.
- **Jest & Supertest**: For testing server-side functionality.

## Installation

### Prerequisites

Make sure you have the following installed before running the project:

- **Node.js** (v12 or higher)
- **PostgreSQL** (v12 or higher)

### Setup Instructions

1. **Clone the repository**:

    ```sh
    git clone https://github.com/your-username/photolabs.git
    cd photolabs
    ```

2. **Frontend Setup**:

    - Navigate to the frontend directory:

      ```sh
      cd frontend
      npm install
      ```

    - Start the frontend development server:

      ```sh
      npm start
      ```

3. **Backend Setup**:

    The backend directory contains its own `README.md` with setup instructions. Please refer to the backend README for detailed instructions on how to configure and run the backend.

    - Navigate to the backend directory:

      ```sh
      cd backend
      ```

    - Follow the instructions in `backend/README.md` to set up the database and start the backend server.


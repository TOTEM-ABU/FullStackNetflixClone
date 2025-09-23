# FullStack Netflix Clone

A full-stack Netflix clone built with the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to browse, search, and watch movies and TV shows.

![Netflix Clone Demo](link-to-your-demo-gif-or-image-here)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (signup, login, logout)
- Browse trending movies and TV shows
- Search for movies and TV shows
- View detailed information about movies and TV shows
- Watch trailers and videos
- Responsive design for all device sizes
- User profile with avatar selection
- Search history tracking

## Technologies Used

### Frontend

- React 18
- React Router v7
- Tailwind CSS
- Zustand (State Management)
- Axios (HTTP Client)
- React Player (Video Playback)
- Lucide React (Icons)
- React Hot Toast (Notifications)

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT) for authentication
- Bcrypt.js for password hashing
- TMDB API for movie/TV show data
- Cookie Parser for handling cookies

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js >= 14.x
- MongoDB instance (local or cloud)
- TMDB API Key (get it from [The Movie Database](https://www.themoviedb.org/))

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/fullstack-netflix-clone.git
cd fullstack-netflix-clone
```

2. Install backend dependencies:

```bash
npm install
```

3. Install frontend dependencies:

```bash
cd frontend
npm install
cd ..
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# MongoDB connection string
MONGO_URI=your_mongodb_connection_string

# Port for the server (default is 5000)
PORT=5000

# Secret for JWT token signing
JWT_SECRET=your_jwt_secret_key

# TMDB API Key
TMDB_API_KEY=your_tmdb_api_key

# Node environment
NODE_ENV=development
```

You can refer to the [.env.sample](.env.sample) file for a template.

## Running the Application

### Development Mode

1. Start the backend server:

```bash
npm run dev
```

2. In a new terminal, start the frontend development server:

```bash
cd frontend
npm run dev
```

### Production Mode

1. Build the frontend:

```bash
cd frontend
npm run build
cd ..
```

2. Start the server:

```bash
npm start
```

The application will be available at `http://localhost:5000`.

## Project Structure

```
.
├── backend/
│   ├── config/          # Configuration files
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Custom middleware
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── services/        # External services (TMDB API)
│   ├── utils/           # Utility functions
│   └── server.js        # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── hooks/       # Custom hooks
│   │   ├── pages/       # Page components
│   │   ├── store/       # State management (Zustand)
│   │   ├── utils/       # Utility functions
│   │   ├── App.jsx      # Main App component
│   │   └── main.jsx     # Entry point
│   └── ...
├── .env.sample          # Environment variable template
├── package.json         # Backend dependencies
└── README.md
```

## API Endpoints

### Authentication

- `POST /api/v1/auth/signup` - User signup
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/logout` - User logout
- `GET /api/v1/auth/authCheck` - Check if user is authenticated

### Movies

- `GET /api/v1/movie/trending` - Get trending movies
- `GET /api/v1/movie/:id` - Get movie details
- `GET /api/v1/movie/:id/videos` - Get movie videos
- `GET /api/v1/movie/:id/similar` - Get similar movies

### TV Shows

- `GET /api/v1/tv/trending` - Get trending TV shows
- `GET /api/v1/tv/:id` - Get TV show details
- `GET /api/v1/tv/:id/videos` - Get TV show videos
- `GET /api/v1/tv/:id/similar` - Get similar TV shows

### Search

- `GET /api/v1/search/:query` - Search for movies/TV shows
- `GET /api/v1/search/history` - Get user search history
- `DELETE /api/v1/search/history` - Clear user search history

## Screenshots

_Add screenshots of your application here_

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Create a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using the MERN stack

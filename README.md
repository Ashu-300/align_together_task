# Frontend README

## Overview
This frontend provides a responsive React + Vite interface for the todo application with authentication, protected routes, todo filtering, and toast-based feedback.

## Features
- User login and registration screens
- Protected dashboard for authenticated users
- Create, edit, delete, and complete todos
- Filter todos by all, pending, or completed
- Persistent login using localStorage token storage
- Configurable session expiration after inactivity
- API base URL configured through environment variables

## Tech Stack
- React
- Vite
- React Router DOM
- Axios
- React Hot Toast
- Tailwind CSS

## Environment Variables
Create a .env file in the frontend folder with:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_SESSION_TIMEOUT_MINUTES=30
```

## Installation
```bash
npm install
```

## Run Locally
```bash
npm run dev
```

The app will run on the Vite development server and connect to the backend API using the configured base URL.

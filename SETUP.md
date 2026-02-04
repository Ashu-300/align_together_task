# Frontend Setup Guide

This guide will help you set up and run the NeuroIQ frontend application.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v9.0.0 or higher) - Comes with Node.js

## Tech Stack

- **React 19** - UI Library
- **Vite** - Build Tool & Dev Server
- **Tailwind CSS 4** - Styling
- **React Router DOM** - Client-side Routing
- **Axios** - HTTP Client
- **React Hot Toast** - Toast Notifications

## Installation

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Running the Application

### Development Mode

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Production Build

Create an optimized production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start development server with HMR        |
| `npm run build` | Create production build                  |
| `npm run lint`  | Run ESLint to check code quality         |
| `npm run preview` | Preview production build locally       |

## Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── api/             # API configuration and endpoints
│   │   ├── authApi.js   # Authentication API calls
│   │   ├── axios.js     # Axios instance configuration
│   │   └── todoApi.js   # Todo API calls
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx   # Navigation bar
│   │   ├── ProtectedRoute.jsx # Route protection wrapper
│   │   ├── TodoCard.jsx # Todo item display
│   │   └── TodoForm.jsx # Todo creation/edit form
│   ├── context/         # React Context providers
│   │   └── AuthContext.jsx # Authentication state management
│   ├── pages/           # Page components
│   │   ├── Dashboard.jsx # Main dashboard page
│   │   ├── Login.jsx    # Login page
│   │   └── Register.jsx # Registration page
│   ├── App.jsx          # Main App component with routing
│   ├── index.css        # Global styles & Tailwind imports
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Project dependencies & scripts
├── vite.config.js       # Vite configuration
└── eslint.config.js     # ESLint configuration
```

## Environment Configuration

If the backend API is running on a different URL, you may need to configure the API base URL in `src/api/axios.js`.

## Troubleshooting

### Common Issues

1. **Port already in use**: If port 5173 is busy, Vite will automatically try the next available port.

2. **Dependencies not installing**: Try deleting `node_modules` and `package-lock.json`, then run `npm install` again:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build errors**: Ensure you're using a compatible Node.js version (v18+).

## License

This project is private and proprietary.

# Leaderboard Application

This is a full-stack leaderboard application built with **React** on the frontend and **Node.js (Express)** on the backend. It allows users to track ranks and points dynamically, with rank changes automatically updated when user points are modified.

## Table of Contents
1. [Project Setup](#project-setup)
2. [Backend Setup](#backend-setup)
3. [Frontend Setup](#frontend-setup)
4. [Running the Project](#running-the-project)
5. [Features](#features)
6. [Endpoints](#endpoints)
7. [Folder Structure](#folder-structure)
8. [Technologies Used](#technologies-used)
9. [Future Enhancements](#future-enhancements)

## Project Setup

### 1. Clone the repository:
```bash
git clone git@github.com:your-username/your-repo.git
```
### 2. Navigate into the project directory:
```bash
cd leaderboard-backend
```
## Backend Setup
The backend is built using Node.js and Express.

### 1. Install Backend Dependencies
Inside the leaderboard-backend directory, install backend dependencies:
```bash
npm install
```
### 2. Start the Backend Server
```bash
npm start
```
This will start the backend server on http://localhost:5000.

### 3. Backend Endpoints
GET /users: Fetch all users.
GET /top-users: Fetch top 3 users based on points.
PUT /user/:id: Update a specific user's points. This endpoint will also adjust the user’s rank and reflect changes in rank status (up, down, same).

## Frontend Setup
The frontend is built using React, TypeScript, and Material UI.

### 1.  Navigate to the frontend directory
```bash
cd frontend
```
### 2. Install Frontend Dependencies
```bash
npm install
```
### 3. Start the Frontend Development Server
To run the React app, use the following command
```bash
npm start
```
This will start the frontend on http://localhost:3000

### 4. Building the Frontend
If you want to build the frontend for production, use
```bash
npm run build
```
This will create an optimized production build of the React app.

## Running the Project

You can run both the backend and frontend concurrently using concurrently. This package has been set up in your project dependencies.

### 1. In the leaderboard-backend directory, install concurrently if not already installed globally:
```bash
npm install concurrently
```
### 2. Use the following command to run both backend and frontend simultaneously:
```bash
npm start
```
This will start the backend at http://localhost:5000 and the frontend at http://localhost:3000.

## Features

Leaderboard: Displays a ranked list of users with points and predicted champions.
Top 3 Podium: Highlights the top 3 users with a podium-style layout.
Real-time Rank Change Tracking: Automatically updates user ranks when points change and reflects changes in rank (up, down, same).
Update User Points: Allows administrators to update a user's points through a modal form.
Rank Change Icons: Displays visual indicators if a user’s rank has gone up, down, or stayed the same.

## Endpoints
### 1. GET /users - Fetch All Users
Description: This endpoint retrieves all users, sorted by points in descending order.
Response:
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "predictedChampion": "Argentina",
    "countryCode": "ar",
    "points": 120,
    "rankChange": "up"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "predictedChampion": "Brazil",
    "countryCode": "br",
    "points": 115,
    "rankChange": "same"
  }
]

```
The users are automatically sorted by their points in descending order.

### 2. PUT /user/:id - Update User Points
Description: This endpoint allows you to update a specific user’s points based on their id. Once the points are updated, the server recalculates the ranks for all users and adjusts the rankChange property to reflect whether the user’s rank has moved up, down, or stayed the same.

Request Params:
id: The ID of the user whose points need to be updated.
Request Body:
``` json
{
  "points": 130
}

```
Logic:

The system first calculates the current ranks of all users.
After updating the user's points, the ranks are recalculated.
The rankChange field of each user is updated to show whether their rank moved up, down, or stayed the same.

Response:
``` json
{
  "id": 1,
  "name": "John Doe",
  "predictedChampion": "Argentina",
  "countryCode": "ar",
  "points": 130,
  "rankChange": "same"
}

```

### 3. GET /top-users - Fetch Top 3 Users
Description: This endpoint retrieves the top 3 users based on their points.
Response:
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "predictedChampion": "Argentina",
    "countryCode": "ar",
    "points": 130,
    "rankChange": "up"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "predictedChampion": "Brazil",
    "countryCode": "br",
    "points": 120,
    "rankChange": "down"
  }
]
```

### Backend Rank Calculation Process:
When a user’s points are updated via the PUT /user/:id endpoint, the following steps occur:

Initial Rank Calculation: Before the points update, the system calculates the ranks for all users based on their current points.

Points Update: The specified user’s points are updated.

New Rank Calculation: After the update, the system recalculates the ranks for all users.

Rank Change Detection: The server compares the initial rank with the new rank for each user. If the rank has improved, the rankChange is set to 'up'. If the rank worsened, it’s set to 'down'. If it’s unchanged, it’s set to 'same'.


## Folder Structure
```
leaderboard-backend/
├── frontend/                  # Frontend React application
│   ├── src/
│   │   ├── components/        # React components like Podium, UserList, etc.
│   │   ├── pages/             # Pages like Leaderboard, etc.
│   │   ├── store/             # Redux store, slices
│   │   ├── App.tsx            # Main React component
│   │   └── index.tsx          # React entry point
│   ├── public/                # Static files (favicon, etc.)
│   └── package.json           # Frontend dependencies and scripts
├── src/                       # Backend Node.js application
│   ├── server.ts              # Express server with endpoints
│   ├── users.ts               # User data and rank-change logic
├── package.json               # Backend dependencies and scripts
└── .gitignore                 # Files and directories to be ignored by git
```
## Technologies Used
### 1. Frontend:
React
TypeScript
Material UI
Redux Toolkit
### 2. Backend:
Node.js
Express
TypeScript
### 3. Database: In-memory user data (extendable to MongoDB or PostgreSQL)
### 4. Development Tools: Nodemon for auto-restarting the server

## Future Enhancements
### 1.  User Authentication & Authorization

Login & Registration: Implement authentication using JWT or OAuth to allow users to log in and register.
Role-based Access Control: Create user roles such as admin, editor, and viewer. Admins can update points, editors can view details, and viewers can only see the leaderboard.
Session Management: Add token expiration and refresh logic to maintain secure sessions.
Third-Party Authentication: Add support for social logins (Google, Facebook, GitHub) using OAuth.

### 2. Backend Enhancements

Real Database: Replace mock or static data with a real database like MongoDB, PostgreSQL, or MySQL to store user information and points.
API Versioning: Implement versioning for the backend API to support future changes without breaking older clients.
Advanced Filtering & Sorting: Add API support for filtering users by country, points range, or specific predictions. Allow sorting by name, rank, and points.
Pagination: Implement pagination for the leaderboard in the backend API to efficiently handle large datasets.

### 3. Frontend Enhancements

Mobile Responsiveness: Improve UI responsiveness on smaller devices, ensuring the podium and leaderboard scale correctly for mobile.
Offline Support (PWA): Implement Progressive Web App (PWA) features so the app works offline and can be installed on devices.
Dark Mode: Add support for a light/dark mode toggle to improve accessibility and user experience.
Live Updates: Use WebSockets or Server-Sent Events (SSE) to implement real-time leaderboard updates without refreshing the page.
User Customization: Allow users to customize their avatars and profile information.

### 4. UI/UX Improvements
Leaderboard Animation: Add subtle animations when users’ points increase or decrease, giving better visual feedback on rank changes.
Custom Themes: Provide support for user-generated themes so users can apply their own styles to the leaderboard.
Accessibility Improvements: Ensure the app meets WCAG 2.1 accessibility standards, including keyboard navigation, focus states, and screen reader support.
Detailed User Profiles: Expand the modal to include more detailed user stats like the history of points and predictions.

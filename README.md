# Learning Path Web Application

This repository contains the source code for the **Learning Path** web application, developed as part of the Smart India Hackathon (SIH) project. The application aims to provide users with a structured and personalized learning journey across various domains.

## Features

* **Personalized Learning Paths**: Tailored content recommendations based on user preferences and goals.
* **Progress Tracking**: Monitor and manage your learning progress effectively.
* **Resource Integration**: Access curated resources from multiple platforms.
* **User-Friendly Interface**: Intuitive design for seamless navigation and usability.

## Technologies Used

* **Frontend**: React.js (bootstrapped with Create React App)
* **Backend**: Firebase for authentication and real-time database functionalities

## Project Structure

```plaintext
learning-path/
├── public/                 # Static assets
├── src/                    # React components and pages
├── .firebaserc             # Firebase project configuration
├── firebase.json           # Firebase hosting configuration
├── package.json            # Project metadata and dependencies
├── README.md               # Project documentation
└── ...                     # Other configuration files
```

## Getting Started

### Prerequisites

* Node.js and npm installed on your machine.
* Firebase account with a project set up.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Vinodhariharan/learning-path.git
   cd learning-path
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure Firebase**:

   * Replace the Firebase configuration in your project with your own project's credentials.
   * Ensure that Firebase Authentication and Firestore are enabled in your Firebase project.

4. **Run the application locally**:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Deployment

To deploy the application to Firebase Hosting:

1. **Build the application**:

   ```bash
   npm run build
   ```

2. **Deploy to Firebase**:

   ```bash
   firebase deploy
   ```

   Ensure that you have the Firebase CLI installed and are authenticated.



*This project was developed as part of the Smart India Hackathon (SIH) initiative, aiming to provide innovative solutions to real-world problems.*



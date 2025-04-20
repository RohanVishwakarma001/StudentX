# _StudentX - Learn. Build. Thrive._

_StudentX_ is an AI-powered platform designed to empower students and professionals by providing tools, _resources, and services_ to enhance their _career and educational journey. The platform offers personalized career guidance, \*\*job_ and _internship matching, freelancing opportunities, skill assessments, mentorship_, and much more.

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Folder Structure](#folder-structure)
4. [Setup Instructions](#setup-instructions)
5. [Backend API Documentation](#backend-api-documentation)
6. [Frontend Key Pages](#frontend-key-pages)
7. [How It Works](#how-it-works)
8. [License](#license)

---

## Features

### Core Features:

- _AI Career Guidance_: Personalized career roadmaps and skill recommendations.
- _Job Finder_: Discover jobs and internships tailored to your skills.
- _Freelance Marketplace_: Tools for freelancers to find gigs, optimize profiles, and manage finances.
- _Skill Assessment_: AI-powered assessments with shareable certificates.
- _Mentorship_: Book sessions with industry experts.
- _Educational Resources_: Curated courses, certifications, and tutorials.
- _Accommodation Finder_: Find student housing and compatible roommates.
- _AI Chatbot Assistant_: 24/7 career and education support.

### Additional Features:

- _Admin Dashboard_: Manage users, resources, and analytics.
- _Regional Language Support_: Resources in multiple Indian languages.
- _Mental Health Resources_: Tools and techniques for stress management and productivity.
- _Subscription Plans_: Flexible plans for students, professionals, and organizations.

---

## Tech Stack

### Frontend:

- _Framework_: React.js
- _Styling_: Tailwind CSS
- _Routing_: React Router
- _Build Tool_: Vite

## 🚀 Dependencies

### Frontend Dependencies

Below are the dependencies used in the frontend of the project:

#### dependencies:

- @reduxjs/toolkit: ^2.7.0 - For managing state with Redux.
- @tailwindcss/vite: ^4.1.4 - Vite plugin for Tailwind CSS.
- axios: ^1.8.4 - To make HTTP requests.
- framer-motion: ^12.7.4 - For animations in React.
- lucide-react: ^0.492.0 - A library of Lucide icons for React.
- react: ^19.0.0 - React library for building user interfaces.
- react-dom: ^19.0.0 - React's DOM rendering package.
- react-icons: ^5.5.0 - Icons library for React.
- react-redux: ^9.2.0 - Redux bindings for React.
- react-router-dom: ^7.5.1 - For routing in React.
- tailwindcss: ^4.1.4 - Utility-first CSS framework.

#### devDependencies:

- @eslint/js: ^9.22.0 - ESLint configuration for JavaScript.
- @types/react: ^19.0.10 - TypeScript type definitions for React.
- @types/react-dom: ^19.0.4 - TypeScript type definitions for React DOM.
- @vitejs/plugin-react: ^4.3.4 - Vite plugin for React support.
- eslint: ^9.22.0 - Linter for JavaScript/TypeScript code.
- eslint-plugin-react-hooks: ^5.2.0 - ESLint plugin for React hooks linting.
- eslint-plugin-react-refresh: ^0.4.19 - ESLint plugin for React fast refresh.
- globals: ^16.0.0 - Provides global variables for various environments.
- vite: ^6.3.1 - Build tool for modern web applications.

---

### Backend:

- _Framework_: Node.js with Express.js
- _Database_: MongoDB
- _Authentication_: JWT (JSON Web Tokens)
- _Cloud Services_: Cloudinary (for image uploads)

---

## 🚀 Dependencies

### Backend Dependencies

Below are the dependencies used in the backend of the project:

#### dependencies:

- bcryptjs: ^3.0.2 - For hashing passwords securely.
- cloudinary: ^2.6.0 - For cloud storage and image management.
- cookie-parser: ^1.4.7 - Middleware for parsing cookies.
- cors: ^2.8.5 - Middleware to enable Cross-Origin Resource Sharing.
- dotenv: ^16.5.0 - For loading environment variables from a .env file.
- express: ^5.1.0 - Web framework for Node.js.
- jsonwebtoken: ^9.0.2 - To create and verify JWT tokens for authentication.
- mongoose: ^8.13.2 - MongoDB object modeling for Node.js.
- multer: ^1.4.5-lts.2 - Middleware for handling multipart/form-data, used for uploading files.

---

## Folder Structure

plaintext
StudentX/
├── Backend/
│ ├── config/ # Configuration files
│ │ ├── cloudinary.config.js
│ │ ├── db.config.js
│ ├── controller/ # API controllers
│ │ ├── [auth.controller.js](http://_vscodecontentref_/0)
│ │ ├── [freelanceProject.controller.js](http://_vscodecontentref_/1)
│ │ ├── [job.controller.js](http://_vscodecontentref_/2)
│ │ ├── [mentorship.controller.js]
│ │ ├── [payment.controller.js](http://_vscodecontentref_/3)
│ │ ├── [resource.controller.js](http://_vscodecontentref_/4)
│ │ ├── [room.controller.js](http://_vscodecontentref_/5)
│ │ ├── [subscription.controller.js](http://_vscodecontentref_/6)
│ ├── middleware/ # Middleware (e.g., authentication)
│ │ ├── [auth.middleware.js](http://_vscodecontentref_/7)
| | ├── [authenticateUser.js]
│ │ ├── [multer.middleware.js](http://_vscodecontentref_/8)
│ ├── models/ # Mongoose models
│ │ ├── [user.model.js](http://_vscodecontentref_/9)
│ │ ├── [job.model.js](http://_vscodecontentref_/10)
│ │ ├── [room.model.js](http://_vscodecontentref_/11)
│ │ ├── [resource.model.js](http://_vscodecontentref_/12)
│ │ ├── [payment.model.js](http://_vscodecontentref_/13)
│ │ ├── [subscription.model.js](http://_vscodecontentref_/14)
│ │ ├── [review.model.js](http://_vscodecontentref_/14)
│ │ ├── [mentorship.model.js](http://_vscodecontentref_/14)
│ │ ├── [freelancing.model.js](http://_vscodecontentref_/14)
│ ├── routes/ # API routes
│ │ ├── [auth.routes.js](http://_vscodecontentref_/15)
│ │ ├── [freelanceProject.routes.js](http://_vscodecontentref_/16)
│ │ ├── [job.routes.js](http://_vscodecontentref_/17)
│ │ ├── [mentorship.routes.js]
│ │ ├── [payment.routes.js](http://_vscodecontentref_/18)
│ │ ├── [resource.routes.js](http://_vscodecontentref_/19)
│ │ ├── [room.routes.js](http://_vscodecontentref_/20)
│ │ ├── [subscription.routes.js](http://_vscodecontentref_/21)
│ ├── utils/ # Utility functions
├── generateTokenAndSetCookie.js  
 │ ├── .env # Environment variables
│ ├── [server.js](http://_vscodecontentref_/22) # Entry point for the backend
│ └── package.json # Backend dependencies
├── Frontend/
│ ├── public/ # Static assets
│ │ ├── StudentX-logo.png
│ ├── src/
│ │ ├── components/ # Reusable components
│ │ │ ├── FAQ.jsx
│ │ │ ├── [Footer.jsx](http://_vscodecontentref_/23)
│ │ │ ├── Header.jsx
│ │ │ ├── GetStart.jsx
│ │ │ ├── Pricing.jsx
│ │ │ ├── Services.jsx
│ │ │ ├── Testimonials.jsx
│ │ │ ├── Line.jsx
│ │ │ ├── [Working.jsx](http://_vscodecontentref_/24)
│ │ ├── pages/ # Page components
│ │ │ ├── [AdminProfile.jsx](http://_vscodecontentref_/25)
│ │ │ ├── [CareerGuidance.jsx](http://_vscodecontentref_/26)
│ │ │ ├── [FreelanceMarketplace.jsx](http://_vscodecontentref_/27)
│ │ │ ├── [JobFinder.jsx](http://_vscodecontentref_/28)
│ │ │ ├── [Mentorship.jsx](http://_vscodecontentref_/29)
│ │ │ ├── [OwnerProfile.jsx](http://_vscodecontentref_/30)
│ │ │ ├── [Resources.jsx](http://_vscodecontentref_/31)
│ │ │ ├── [RoomFinder.jsx](http://_vscodecontentref_/32)
│ │ │ ├── SkillAssessment.jsx
│ │ │ ├── Signup.jsx
│ │ │ ├── Login.jsx
│ │ │ ├── UserProfile.jsx
│ │ │ ├── Home.jsx
│ │ │ ├── PaymentMethod.jsx
│ │ ├── services/  
 │ │ ├── ├── [useLoggedInUser.jsx](http://_vscodecontentref_/33) # Main app component
│ │ ├── utils/  
 │ │ ├── ├── [axios.js]
│ │ ├── [App.jsx](http://_vscodecontentref_/33) # Main app component
│ │ ├── [main.jsx](http://_vscodecontentref_/34) # Entry point for the frontend
│ ├── [App.css](http://_vscodecontentref_/35) # HTML template
│ ├── [App.jsx](http://_vscodecontentref_/35) # HTML template
│ ├── [index.css](http://_vscodecontentref_/35) # HTML template
│ ├── [main.jsx](http://_vscodecontentref_/35) # HTML template
│ ├── [index.html](http://_vscodecontentref_/35) # HTML template
│ ├── [vite.config.js](http://_vscodecontentref_/36) # Vite configuration
│ └── package.json # Frontend dependencies
└── README.md # Project documentation

---

## Setup Instructions

### Prerequisites:

- Node.js (v14+)
- MongoDB (local or cloud instance)
- Cloudinary account (for image uploads)

---

## 🛠 Setup Instructions

### Backend

bash
cd Backend
npm install
npm run dev

## 3. Create a .env file and add the following variables:

- _PORT_=5000
- _MONGODB_URI_=<yourongo_connection_string>
- _JWT_SECRET_=<your_jwt_secret>
- _CLOUDINARY_CLOUD_NAME_=<your_cloudinary_cloud_name>
- _CLOUDINARY_API_KEY_=<your_cloudinary_api_key>
- _CLOUDINARY_API_SECRET_=<your_cloudinary_api_secret>

4. Start the backend server:
   bash
   cd Backend
   npm install
   npm run dev

## Frontend Setup:

bash
cd Frontend
npm install
npm run dev

## 📡 Backend API Documentation

### 🔐 Authentication Routes

- _POST_ /api/v1/auth/signup – User registration
- _POST_ /api/v1/auth/login – User login
- _POST_ /api/v1/auth/logout – User logout
- _GET_ /api/v1/auth – Get logged-in user details

---

### 💼 Freelance Marketplace Routes

- _POST_ /api/v1/freelance-projects – Create a freelance project
- _GET_ /api/v1/freelance-projects – Get all freelance projects
- _GET_ /api/v1/freelance-projects/:id – Get a specific freelance project
- _PUT_ /api/v1/freelance-projects/:id – Update a freelance project
- _DELETE_ /api/v1/freelance-projects/:id – Delete a freelance project
- _POST_ /api/v1/freelance-projects/:id/proposal – Submit a proposal for a project

---

### 🧑‍💼 Job Finder Routes

- _POST_ /api/v1/jobs – Create a job
- _GET_ /api/v1/jobs – Get all jobs
- _GET_ /api/v1/jobs/:id – Get a specific job
- _PUT_ /api/v1/jobs/:id – Update a job
- _DELETE_ /api/v1/jobs/:id – Delete a job

---

### 👨‍🏫 Mentorship Routes

- _POST_ /api/v1/mentorship – Book a mentorship session
- _GET_ /api/v1/mentorship – Get all mentorship sessions

## 🖥 Frontend Key Pages

### 🏠 Home Page

_Description:_  
Provides an overview of the platform's features and benefits.

_Key Features:_

- Hero section with a call-to-action
- Overview of services like career guidance, freelancing, and mentorship

---

### 🎯 Career Guidance

_Description:_  
Offers personalized career roadmaps and skill recommendations.

_Key Features:_

- Interactive roadmap with progress tracking

---

### 💼 Freelance Marketplace

_Description:_  
A platform for freelancers to find gigs and manage their profiles.

_Key Features:_

- List of freelance projects with filters
- Tools for profile optimization and pricing assistance

---

### 📚 Resources

_Description:_  
A curated collection of educational resources.

_Key Features:_

- Categories like courses, certifications, and tutorials

### 🤝 Mentorship

_Description:_

- Connects users with industry experts for guidance.

_Key Features:_

- Booking form for mentorship sessions

---

### 🔍 Job Finder

_Description:_  
Helps users find jobs and internships tailored to their skills.

_Key Features:_

- Job listings with filters for location, type, and salary

---

## 🚀 How It Works

1. _Create Profile_

- Complete your profile with skills, interests, and career goals.

2. _Get Guidance_

- Receive AI-powered career roadmaps and personalized suggestions.

3. _Build Skills_

- Take assessments and access learning resources to upskill.

4. _Land Opportunities_

- Apply to matched jobs with your optimized resume and profile.

---

## 📝 License

This project is licensed under the _MIT License_.  
See the LICENSE file for more details.

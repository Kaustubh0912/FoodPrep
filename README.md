# FoodPrep - Full Stack Food Delivery App

## Overview

FoodPrep is a comprehensive full-stack food delivery platform with a modern UI, designed for educational purposes to demonstrate end-to-end web application development. The application consists of three main components:

1. **User Frontend**: A React-based web application for customers to browse food items, place orders, and track deliveries
2. **Admin Dashboard**: A separate React application for restaurant staff to manage menu items and track orders
3. **Backend API**: An Express.js server that handles all data operations, user authentication, and payment processing

## Key Features

### User Frontend
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Food Browsing**: Filter food items by categories with an intuitive interface
- **Cart Management**: Add/remove items with real-time updates
- **Checkout Process**: Secure payment integration with Stripe
- **Order Tracking**: View order status and history
- **User Authentication**: Secure login and registration system

### Admin Dashboard
- **Menu Management**: Add, edit, and remove food items
- **Order Tracking**: Monitor incoming orders
- **Order Status Updates**: Update delivery status of orders
- **Image Upload**: Upload and manage food images

### Backend API
- **RESTful Architecture**: Well-structured API endpoints
- **Authentication**: JWT-based user authentication
- **Payment Processing**: Stripe integration for secure payments
- **Data Persistence**: MongoDB database integration
- **Image Storage**: File upload system for food images

## Tech Stack

### Frontend (User & Admin)
- React 19
- React Router v7
- Axios for API calls
- React Toastify for notifications
- CSS for styling (no external UI libraries)
- Vite for build tooling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Multer for file uploads
- Stripe for payment processing

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB
- Stripe account for payment integration

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/foodprep.git
cd foodprep
```

2. Set up the backend:
```bash
cd backend
npm install
# Create a .env file with the following variables:
# DATABASE_URI=your_mongodb_connection_string
# TOKEN_SECRET=your_jwt_secret
# STRIPE_SECRET_KEY=your_stripe_secret_key
npm run server
```

3. Set up the user frontend:
```bash
cd ../userFrontend
npm install
npm run dev
```

4. Set up the admin frontend:
```bash
cd ../adminFrontend
npm install
npm run dev
```

## Project Structure

```
FoodPrep/
├── backend/               # Backend API
│   ├── config/            # Database configuration
│   ├── controllers/       # Request handlers
│   ├── middlewares/       # Auth middleware
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API routes
│   └── uploads/           # Food images storage
├── userFrontend/          # Customer-facing application
│   ├── public/            # Static assets
│   └── src/
│       ├── assets/        # Images and icons
│       ├── components/    # Reusable UI components
│       ├── context/       # React context for state
│       └── screens/       # Page components
└── adminFrontend/         # Admin dashboard
    ├── public/            # Static assets
    └── src/
        ├── assets/        # Images and icons
        ├── components/    # Admin UI components
        └── screens/       # Admin page components
```

## Development Highlights

- **Context API**: Global state management using React Context API
- **JWT Authentication**: Secure user sessions with token-based auth
- **Responsive Design**: Mobile-first approach without external libraries
- **Payment Integration**: Complete Stripe checkout flow
- **Image Handling**: Efficient storage and retrieval of food images
- **Error Handling**: Comprehensive error management with user feedback

## Demo

Live Demo: [https://foodprepuser-vip1.onrender.com/](https://foodprepuser-vip1.onrender.com/)

## License

This project is created for educational purposes and as a portfolio piece. Feel free to use it as a reference for your own projects.

## Acknowledgements

- This project was created as a teaching resource for FACEPrep, an educational technology company

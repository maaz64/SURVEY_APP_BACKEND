
# Survey App : Survey Data Collection Backend

## Overview
The Survey Data Collection Backend is a Node.js and Express.js application that serves as the backend for collecting survey data. It provides APIs for user authentication and managing survey-related operations. MongoDB is used as the database to store user information and survey responses.
You can access client side code of this Application from my SURVEY_APP_FRONTEND project (https://github.com/maaz64/SURVEY_APP_FRONTEND)

## Requirements
Before getting started, ensure you have the following installed:

- Node.js and npm: Node.js is the JavaScript runtime, and npm is the package manager for Node.js.
- MongoDB: MongoDB is the NoSQL database used for storing survey data.


## Installation

- git clone https://github.com/maaz64/SURVEY_APP_BACKEND.git
- cd SURVEY_APP_BACKEND
- `npm install` to install all the dependencies
- `npm start` to start the development server

## Configuration
Create a .env file in the root of the project and add the necessary environment variables:

- MONGO_URL 
- ACCESS_TOKEN_SECRET_KEY 
- REFRESH_TOKEN_SECRET_KEY

Replace the values with your desired configurations, such as the port number, MongoDB URI, and a secure JWT secret key.

## User Authentication API
The backend includes APIs for user authentication using JSON Web Tokens (JWT). Refer to the [User Authentication API documentation](https://documenter.getpostman.com/view/24002220/2sA2xe3DN2) for details on the available endpoints and usage.

## Survey API
The Survey API provides endpoints for managing survey-related operations, including creating, updating, and retrieving survey data. Refer to the [Survey API documentation](https://documenter.getpostman.com/view/24002220/2sA2xe3DN2) for details on the available endpoints and usage.


## Dependencies
List of main dependencies used in project.

- express: Fast, unopinionated, minimalist web framework for Node.js.

- mongoose: Elegant MongoDB object modeling for Node.js.
- jsonwebtoken: JSON Web Token implementation for Node.js.
For a complete list of dependencies, check the package.json file.





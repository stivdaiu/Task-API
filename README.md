# Task-API

This is a Node.js REST API built with ExpressJS that provides functionality to find numbers based on certain criteria such as being a palindrome, prime, or both.

Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Node.js installed on your machine
npm package manager

Installation
Clone the repository:
git clone <repository-url>
Install dependencies:
npm install

Running the Application
Start the server:
npm start
The server will start running at http://localhost:3000, you can check also in Postman .
API Documentation
POST /findNumbers
Finds numbers based on given criteria.

Request Body:

minNumber (number, required): Minimum number (should be greater than 0).
maxNumber (number, required): Maximum number.
feature (array of strings, required): Features to filter numbers (options: "palindrome", "prime", or both).
Example request body:
{
  "minNumber": 10,
  "maxNumber": 100,
  "feature": ["palindrome", "prime"]
}
{
    "data": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        11,
        13,
        17,
        19,
        22,
        23,
        29,
        31,
        33,
        37,
        41,
        43,
        44,
        47,
        53,
        55,
        59,
        61,
        66,
        67,
        71,
        73,
        77,
        79,
        83,
        88,
        89,
        97,
        99
    ],
    "timeOfExecution": 0.19
}

Running Tests
Run unit tests:
npm test
Docker
To run the application using Docker:

Build Docker image:docker build -t nodejs-rest-api .
Run Docker container:docker run -p 3000:3000 task

Built With
Node.js
ExpressJS
TypeScript
Jest

Stiv Daiu


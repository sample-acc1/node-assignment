# My Node.js Project

## Overview

This is a Node.js application using Express and MongoDB Atlas. It provides a REST API for managing items in a MongoDB database. The application includes error handling, validation, and basic CRUD operations.

## Project Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account

### Getting Started

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd my-node-project


### Set Up Environment Variables

Create a .env file in the root directory and add your MongoDB connection string:

MONGO_URI=your_mongodb_atlas_connection_string

### Run the Application

npm run dev

## API Endpoints

POST /api/items

Request Body:


```bash
{
  "name": "Sample Item",
  "quantity": 10
}

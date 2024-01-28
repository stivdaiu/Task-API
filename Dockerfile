# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /Users/HP Use/Desktop

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run your application
CMD ["node", "server.js"]

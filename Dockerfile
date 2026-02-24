FROM node:20-alpine

WORKDIR /app

# Install dependencies first (better caching)
COPY frontend/package*.json ./
RUN npm install

# Copy the rest of the code
COPY frontend/ .

# Expose the port Next.js runs on
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]
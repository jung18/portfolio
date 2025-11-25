# Build stage
FROM node:20.19.0-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build arguments for environment variables
ARG VITE_API_URL=http://localhost:8080
ARG VITE_STATIC_BASE_URL=http://localhost:8080

# Set environment variables for build
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_STATIC_BASE_URL=$VITE_STATIC_BASE_URL

# Build the application
RUN npm run build

# Production stage
FROM node:20.19.0-alpine

WORKDIR /app

# Install serve to serve static files
RUN npm install -g serve

# Copy built files from builder stage
COPY --from=builder /app/build ./build

# Expose port
EXPOSE 3000

# Start the server
CMD ["serve", "-s", "build", "-l", "3000"]


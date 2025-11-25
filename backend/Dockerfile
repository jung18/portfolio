# Build stage
FROM node:20.19.0-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies (including devDependencies for TypeScript compilation)
RUN npm ci

# Copy source code
COPY . .

# Production stage
FROM node:20.19.0-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy compiled files and necessary files from builder
COPY --from=builder /app/src ./src
COPY --from=builder /app/conf ./conf
COPY --from=builder /app/public ./public
COPY --from=builder /app/tsconfig.json ./

# Install ts-node globally for running TypeScript files
RUN npm install -g ts-node tsconfig-paths typescript

# Expose port
EXPOSE 8080

# Set environment to production
ENV NODE_ENV=production

# Start the application
CMD ["ts-node", "-r", "tsconfig-paths/register", "src/app.ts"]


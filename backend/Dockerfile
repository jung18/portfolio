# Build stage
FROM node:20.19.0-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install all dependencies including devDeps
RUN npm ci

# Copy source code
COPY . .

# Build TypeScript -> JavaScript
RUN npm run build


# Production stage
FROM node:20.19.0-alpine

WORKDIR /app

# Copy only production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy compiled JS files and necessary configs
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/conf ./conf
COPY --from=builder /app/public ./public

# Expose port
EXPOSE 8080

CMD ["node", "dist/app.js"]

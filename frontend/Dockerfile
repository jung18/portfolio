# Build stage
FROM node:20.19.0-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./
COPY tsconfig.json ./
COPY tsconfig.node.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build-time environment variables
ARG VITE_API_URL=http://localhost:8080
ARG VITE_STATIC_BASE_URL=http://localhost:8080

ENV VITE_API_URL=${VITE_API_URL}
ENV VITE_STATIC_BASE_URL=${VITE_STATIC_BASE_URL}

# Build
RUN npm run build


# Production stage
FROM node:20.19.0-alpine

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy build output
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]

# Build stage
FROM node:20.19.0-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
COPY tsconfig.json ./
COPY tsconfig.node.json ./

RUN npm ci

COPY . .

ARG VITE_API_URL=http://localhost:8080/api
ARG VITE_STATIC_BASE_URL=http://localhost:8080

ENV VITE_API_URL=${VITE_API_URL}
ENV VITE_STATIC_BASE_URL=${VITE_STATIC_BASE_URL}

RUN npm run build

# Production stage
FROM node:20.19.0-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/build ./build

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]

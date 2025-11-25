# Build stage
FROM node:20.19.0-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
COPY tsconfig.json ./

RUN npm ci

COPY . .

# Build TS → JS
RUN npm run build


# Production stage
FROM node:20.19.0-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --only=production

# copy compiled files
COPY --from=builder /app/dist ./dist

# copy configs / static
COPY --from=builder /app/conf ./conf
COPY --from=builder /app/public ./public

EXPOSE 8080

CMD ["node", "-r", "tsconfig-paths/register", "dist/app.js"]

# Multi-stage Dockerfile for Wasp + Open SaaS
FROM node:24-alpine AS builder

# Install build dependencies and Wasp CLI
RUN apk add --no-cache curl bash git

# Install Wasp CLI
RUN npm install -g @wasp.sh/wasp-cli

WORKDIR /app

# Copy the entire project
COPY . .

# Change to the app directory and install dependencies
WORKDIR /app/template/app

RUN wasp install

# Build the Wasp application
RUN wasp build

# Production stage
FROM node:24-alpine

# Install runtime dependencies
RUN apk add --no-cache curl

WORKDIR /app

# Copy built app from builder
COPY --from=builder /app/template/app/.wasp/out ./

# Install production dependencies for the built app
WORKDIR /app/server
RUN npm install --production

WORKDIR /app

# Expose port 3001 for server and 5173 for client
EXPOSE 3001 5173

# Set environment variables
ENV NODE_ENV=production
ENV WASP_SERVER_PORT=3001

# Start the Wasp server
CMD ["node", "./server/dist/server.js"]

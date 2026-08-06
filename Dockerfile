# Multi-stage Dockerfile for Wasp + Open SaaS
FROM node:24-alpine AS builder

# Install build dependencies
RUN apk add --no-cache curl bash git

# Install Wasp CLI using official script
RUN curl -sSL https://get.wasp.sh/installer.sh | sh
ENV PATH="/root/.local/bin:${PATH}"

WORKDIR /app

# Copy the entire project
COPY . .

# Change to the app directory
WORKDIR /app/template/app

# Install dependencies and build Wasp project
RUN wasp install
RUN WASP_SKIP_TYPECHECK=1 wasp build

# Generate Prisma client inside the compiled build output
WORKDIR /app/template/app/.wasp/build
RUN npx prisma generate

# Production stage
FROM node:24-alpine

RUN apk add --no-cache curl

WORKDIR /app

# Copy built app from builder
COPY --from=builder /app/template/app/.wasp/build ./

# Install production dependencies for the built app server
WORKDIR /app/server
RUN npm install --production

WORKDIR /app

EXPOSE 3001 5173

ENV NODE_ENV=production
ENV WASP_SERVER_PORT=3001

CMD ["node", "./server/dist/server.js"]
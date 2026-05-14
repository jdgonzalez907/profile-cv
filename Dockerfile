# Build stage
FROM node:20-alpine AS build

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copy package files
COPY pnpm-lock.yaml* package.json ./

# Install dependencies
RUN pnpm install

# Copy source files
COPY . .

# Build the project
RUN pnpm build

# Production stage
FROM nginx:alpine

# Copy built files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

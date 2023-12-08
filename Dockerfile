# syntax=docker/dockerfile:1

# Use node image for base image for all stages.
FROM node:21-alpine as base

# Set working directory for all build stages.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files into the image.
COPY package*.json ./

################################################################################
# Create a stage for installing dependencies.
FROM base AS dependencies

# Install production dependencies.
RUN npm ci --only=production

################################################################################
# Create a stage for development.
FROM dependencies AS development

# Install all dependencies including development ones.
RUN npm install

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 4200

# Run the application in development mode.
CMD ["npm", "start"]

################################################################################
# Create a stage for building the application.
FROM development AS build

# Build the Angular application for production.
RUN npm run build -- --configuration=production

################################################################################
# Create a final stage for serving the built application with Nginx.
FROM nginx:alpine AS final

# Copy the built Angular application from the build stage to Nginx's default directory.
COPY --from=build /usr/src/app/dist/ice-cream-shop-app /usr/share/nginx/html

# Expose the port that Nginx listens on.
EXPOSE 80

# Start Nginx to serve the application.
CMD ["nginx", "-g", "daemon off;"]

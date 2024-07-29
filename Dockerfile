# Use an official Node runtime as a parent image
FROM node:14 as build

# Set the working directory to /lastName_firstName_final_site
WORKDIR /lastName_firstName_final_site

# Copy the current directory contents into the container at /lastName_firstName_final_site
COPY . .

# Install dependencies and build the app
RUN npm install
RUN npm run build

# Stage 2 - the production environment
FROM nginx:alpine
COPY --from=build /lastName_firstName_final_site/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

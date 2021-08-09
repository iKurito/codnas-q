# This Dockerfile builds the React front end for nginx
FROM node:14-alpine as build-step
# Configure the main working directory inside the docker image.
# This is the base directory used in any further RUN, COPY, and ENTRYPOINT
# commands.
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
# Copy the main application
COPY . ./
# Arguments
ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=${REACT_APP_API_BASE_URL}
ARG REACT_APP_MAPS_KEY
ENV REACT_APP_MAPS_KEY=${REACT_APP_MAPS_KEY}
# Build the application
RUN yarn build

# Stage 2: Serve the React application from Nginx
FROM nginx:stable-alpine
# Copy the react build from Stage 1
COPY --from=build-step /usr/src/app/build /var/www
# Copy our custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf
# Expose port 80 to the Docker host, so we can access it from the outside
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]

FROM node:14

# Create the directory for the server package
WORKDIR /usr/src/IoT_Users_Service/server

# Mover everything in the server directory
COPY /server/. /usr/src/IoT_Users_Service/server
RUN npm install

# Create app directory
WORKDIR /usr/src/IoT_Users_Service/api/src

# Install app dependencies
COPY /users/src/package*.json ./
COPY /users/src/tsconfig.json ./
RUN npm install

# Copy source code
COPY /users/src/. .

EXPOSE 3001

CMD [ "npm", "run", "dev"]
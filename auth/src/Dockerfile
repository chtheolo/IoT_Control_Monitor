FROM node:14

# Create the directory for the server package
WORKDIR /usr/src/IoT_Auth_Service/server

# Mover everything in the server directory
COPY /server/. /usr/src/IoT_Auth_Service/server
RUN npm install

# Create app directory
WORKDIR /usr/src/IoT_Auth_Service/api/src

# Install app dependencies
COPY /auth/src/package*.json ./
COPY /auth/src/tsconfig.json ./
RUN npm install

# Copy source code
COPY /auth/src/. .

EXPOSE 3002

CMD [ "npm", "run", "dev"]
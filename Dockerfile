FROM node

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
Run cd /usr/src/app/
Run npm install
Run node --version
RUN npm cache clean --force

# Bundle app source
COPY . /usr/src/app

Run npm run build

EXPOSE 3000
CMD [ "npm", "start" ]

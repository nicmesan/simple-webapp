FROM node:6.10.0

COPY . /simple-app/
WORKDIR /simple-app/
RUN npm install

CMD ["npm", "run", "start-app"]
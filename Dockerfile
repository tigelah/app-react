FROM node:12.14.0-alpine3.11

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV CI=true

COPY . .

RUN npm install
RUN npm install react-scripts@3.4.0 -g --silent


EXPOSE 3000
CMD ["npm", "run", "start"]
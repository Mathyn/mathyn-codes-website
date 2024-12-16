# Build step
FROM node:22-alpine AS build
WORKDIR /app/src
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build:prod

# Deploy step
FROM node:22-alpine
WORKDIR /usr/app
COPY --from=build /app/src/dist/mathyn-codes-website/server ./
RUN npm install
CMD node ./proxy-server.mjs
EXPOSE 4000

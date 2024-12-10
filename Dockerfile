# Build step
FROM node:22-alpine AS build
WORKDIR /app/src
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

# Deploy step
FROM node:22-alpine
WORKDIR /usr/app
COPY --from=build /app/src/dist/mathyn-codes-website ./
CMD node server/server.mjs
EXPOSE 4000


# syntax=docker/dockerfile:1
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci || npm install
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=build /app /app
EXPOSE 5173
ENV VITE_API_URL=http://localhost:5000
CMD ["npm", "run", "preview"]

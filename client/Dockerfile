# Step 1: Build the frontend (React/Vite app)
FROM node:18 AS builder
WORKDIR /app
COPY client ./
RUN npm install
RUN npm run build

# Step 2: Serve the app using Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

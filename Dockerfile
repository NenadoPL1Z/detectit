FROM node:alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/dist
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

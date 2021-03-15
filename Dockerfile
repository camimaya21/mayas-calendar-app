# Build Stage
FROM docker.io/node:lts-alpine AS builder
WORKDIR /usr/src/app
COPY . .

RUN yarn global add react-scripts@^3.0.0; yarn; exec react-scripts build

# Serve Stage
FROM nginx:stable-alpine
RUN apk add --update --no-cache gettext
ARG REACT_APP_API_BASE_URL

COPY --from=builder /usr/src/app/config/nginx.conf.template /nginx.conf.template
RUN envsubst '${REACT_APP_API_BASE_URL}' < ./nginx.conf.template > /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/src/app/build /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]
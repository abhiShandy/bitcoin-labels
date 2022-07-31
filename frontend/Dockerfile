FROM node:16-buster-slim AS builder

WORKDIR /build
RUN apt-get update
RUN apt-get install -y git build-essential
COPY . .
RUN npm ci --include=dev
RUN npx next telemetry disable
RUN npm run build

FROM node:16-buster-slim

USER 1000
WORKDIR /build
COPY --from=builder /build .
EXPOSE 3000
CMD ["npm", "run", "start"]
FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN npm i -g pnpm && pnpm install

COPY tsconfig.json ./
COPY tsconfig.base.json ./
COPY nest-cli.json ./

COPY libs ./libs
COPY apps/auth ./apps/auth

COPY proto ./proto

RUN pnpm build auth

CMD ["node", "dist/apps/auth/src/main"]

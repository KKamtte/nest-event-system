FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN npm i -g pnpm && pnpm install

COPY apps/auth ./apps/auth
COPY tsconfig.base.json ./
COPY nest-cli.json ./

RUN pnpm build auth

CMD ["node", "dist/apps/auth/main"]
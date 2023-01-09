FROM node:lts AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:lts

WORKDIR /app

COPY --from=build /app/package.json /app/package-lock.json ./

RUN npm ci --production --ignore-scripts

COPY --from=build /app/build .

EXPOSE 3000

CMD ["node", "./index.js"]

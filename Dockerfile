FROM node:14

WORKDIR /app

COPY package.json ./
RUN yarn install

COPY . .
RUN yarn build

RUN apt update && apt install tzdata -y
ENV TZ="Asia/Jakarta"

COPY . .

EXPOSE 3000
CMD ["yarn", "start"]

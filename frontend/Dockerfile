FROM --platform=linux/amd64 node:10.18.0

WORKDIR /frontend

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

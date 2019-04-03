FROM node:9
MAINTAINER Federico Cargnelutti

ARG PORT
ARG ENVIRONMENT

ENV PORT $PORT
ENV ENVIRONMENT $ENVIRONMENT

RUN mkdir -p /usr/app
WORKDIR /usr/app
RUN cd /usr/app
ADD . .

RUN npm install
RUN npm run build


EXPOSE $PORT

CMD ["npm", "run", "prod"]

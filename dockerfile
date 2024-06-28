FROM node:22-alpine3.19
RUN addgroup -S jenkinsgrp && adduser -S jenkinsusr -G jenkinsgrp
RUN mkdir -p /home/Jenkins
RUN chown -R jenkinsusr:jenkinsgrp /home/Jenkins
WORKDIR /home/Jenkins
COPY . .
RUN npm install
USER jenkinsusr
CMD  ["node","index.js"]
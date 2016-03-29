###########################################################
#
# Dockerfile for utdaterte-artikler
#
###########################################################

# Setting the base to nodejs 4.4.1
FROM mhart/alpine-node:4.4.1

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Installs git
RUN apk add --update git && rm -rf /var/cache/apk/*

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install

# Env variables
ENV SERVER_PORT 3000
ENV BASE_URL http://www.telemark.no
ENV SITEMAP_URL http://www.telemark.no/sitemap.xml
ENV YAR_SECRET passwordpasswordpasswordpassword

# Expose 3000
EXPOSE 3000

# Startup
ENTRYPOINT node standalone.js
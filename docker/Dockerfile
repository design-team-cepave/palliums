FROM ubuntu:16.04
MAINTAINER wubm@cepave.com

# ENV VAR
ENV HOME=/root WORKDIR=/var/www/html

# Switch to /root
WORKDIR $HOME

# Install supervisor
RUN apt-get update -y \
    && apt-get install -y nginx curl \
    && cd /tmp \
    && curl -sL https://deb.nodesource.com/setup_8.x | bash - \
    && apt-get install -y nodejs \
    && apt-get remove -y curl && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Prepare env
RUN mkdir -p $WORKDIR && mkdir -p $WORKDIR
COPY . $WORKDIR
RUN cp $WORKDIR/docker/docker-entrypoint.sh /entrypoint.sh \
    && rm -rf $WORKDIR/.git* $WORKDIR/docker

WORKDIR $WORKDIR
# Install package
RUN cd $WORKDIR \
    && npm install cross-env \
    && npm install
#    && npm rum build

CMD ["/entrypoint.sh"]
#CMD ["nginx", "-g", "daemon off;"]

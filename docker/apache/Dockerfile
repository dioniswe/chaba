# php:7.4-cli contains a debian buster image
FROM httpd:trixie


ARG USER_ID
ARG GROUP_ID

USER root

# ************** STEP 1 extend image to add necessary libraries ****************** #
# step 1.1 install php extensions
RUN apt update
RUN apt -y install --fix-missing libonig-dev libfreetype6-dev libjpeg62-turbo-dev libmcrypt-dev libpng-dev zlib1g-dev libxml2-dev \
                        libzip-dev libonig-dev graphviz openssl gnupg-utils libmcrypt4 libmcrypt-dev libssl-dev net-tools \
                        procps exiftool default-mysql-client vim python3 libapache2-mod-wsgi-py3
USER chabaa


# php:7.4-cli contains a debian buster image
FROM php:7.3-fpm


ARG USER_ID
ARG GROUP_ID

USER root

RUN apt update

RUN pecl install redis-5.1.1 \
    && docker-php-ext-install exif \
    && docker-php-ext-configure exif \
    && docker-php-ext-enable redis


# step 1.3 install PHP Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

#TOOO handle case when no USER_ID has been given
USER chabaa
# Change current user to chabaa
WORKDIR /var/www/chabaa

COPY ./docker/php/startup.sh /usr/local/bin/startup.sh
USER root
RUN chmod g+x,o+x /usr/local/bin/startup.sh
USER chabaa
CMD [ "/usr/local/bin/startup.sh"]

#!/usr/bin/env bash

set -e

echo "Running the queue..."
php /var/www/chabaa/artisan queue:listen --verbose --tries=3
#!/bin/bash

python manage.py migrate

if [ "$DEBUG" != "1" ]; then
  python manage.py collectstatic --no-input
fi

python manage.py runserver 0.0.0.0:8000
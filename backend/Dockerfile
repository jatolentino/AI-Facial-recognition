FROM --platform=linux/amd64 python:3.8.0

ENV PYTHONUNBUFFERED=1

WORKDIR /api

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt /api/
RUN pip install --no-cache-dir -r requirements.txt
RUN apt-get update && apt-get install ffmpeg libsm6 libxext6  -y

# copy from the current directory of the Dockerfile to /api in the image
COPY . /api

# UPDATE THE RMN PACKAGE
COPY custom_rmn/__init__.py ../usr/local/lib/python3.8/site-packages/rmn/

# CHANGE TO home.wsgi.prod on production, or home.wsgi.dev on development
ENTRYPOINT ["gunicorn", "home.wsgi.dev", "-b", "0.0.0.0:8080"]
'''PRODUCTION SETUP'''

from .base import *

# PUT YOUR DOMAINS OR SUBDOMAINS here, like 'example.com' OR 'sub.example.com'
# Separate them by commas
ALLOWED_HOSTS += ['']

DEBUG = env('DEBUG')

WSGI_APPLICATION = 'home.wsgi.prod.application'

# POSTGRESQL DB
DATABASES = {
    'default': {
        'ENGINE': env("DB_ENGINE"),
        'NAME': env("DB_NAME"),
        'USER': env("DB_USER"),
        'PASSWORD': env("DB_PASSWORD"),
        'HOST': env("DB_HOST"),
        'PORT': env("DB_PORT"),
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

STATICFILES_STORAGE = 'whitenoise.django.GzipManifestStaticFilesStorage'

STRIPE_PUBLISH_KEY = env("STRIPE_LIVE_PUBLISH_KEY")
STRIPE_SECRET_KEY = env("STRIPE_LIVE_SECRET_KEY")

CORS_ORIGIN_ALLOW_ALL = True






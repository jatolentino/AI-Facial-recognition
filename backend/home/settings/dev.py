'''DEVELOPMENT SETUP'''

from .base import *

ALLOWED_HOSTS += ['127.0.0.1', 'localhost']
DEBUG = env('DEBUG')

WSGI_APPLICATION = 'home.wsgi.dev.application'

# SQLITE3, A DEFAULT DB IN DJANGO
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

CORS_ORIGIN_WHITELIST = (
    'localhost:3000',
)


STRIPE_PUBLISH_KEY = env("STRIPE_TEST_PUBLISH_KEY")
STRIPE_SECRET_KEY = env("STRIPE_TEST_SECRET_KEY")
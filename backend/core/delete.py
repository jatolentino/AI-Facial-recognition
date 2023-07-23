import numpy as np
import urllib
import json
import cv2
import os
from rmn import RMN
from django.conf import settings
import cloudinary.uploader #ADDED TO USE CLOUDINARY
from django.core.files.base import ContentFile



cloudinary.uploader.destroy("v4clxna1zzf5bcrnj003")
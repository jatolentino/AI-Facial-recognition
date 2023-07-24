import numpy as np
import urllib
import json
import cv2
import os
from rmn import RMN
from django.conf import settings
import cloudinary.uploader #ADDED TO USE CLOUDINARY
from django.core.files.base import ContentFile
import time
import string
import random

execution_path = settings.MEDIA_ROOT
face_detector = os.path.join(
    settings.BASE_DIR, "haarcascade_frontalface_default.xml")

def generate_random_FileName(length):
    # choose from all lowercase letter
    letters = string.ascii_lowercase
    result_str = ''.join(random.choice(letters) for i in range(length))
    return result_str + ".png"

def detect_faces(image_path=None, url=None):
    model = RMN()
    default = {"safely_executed": False}
    if image_path:
        true_image_path = os.path.join(
            execution_path, image_path.split('/media/')[1])
        image_to_read = read_image(path=true_image_path)
        # print("*********true_image_path", true_image_path)
        # print("*********image_path", image_path)
    elif url:
        image_to_read = read_image(url=url)
    else:
        default["error_value"] = "There is no image provided"
        return default

    results = model.detect_emotion_for_single_frame(image_to_read)
    outimage = model.draw(image_to_read, results)
    theFileName = generate_random_FileName(8)
    resultFileNameWithPath =  os.path.join(execution_path, theFileName)
    cv2.imwrite(resultFileNameWithPath, outimage)
    upload_data = cloudinary.uploader.upload(resultFileNameWithPath)
    default.update({"number_of_faces": len(results),
                    "faces": results,
                    "safely_executed": True,
                    "cloudinary_path": upload_data["url"]
                    })
    # delete the images stored on media django folder
    os.remove(true_image_path)
    os.remove(resultFileNameWithPath)
    return default


def read_image(path=None, stream=None, url=None):
    if path is not None:
        image = cv2.imread(path)
    else:
        if url is not None:
            response = urllib.request.urlopen(url)
            data_temp = response.read()
        elif stream is not None:
            data_temp = stream.read()
        image = np.asarray(bytearray(data_temp), dtype="uint8")
        image = cv2.imdecode(image, cv2.IMREAD_COLOR)
    return image

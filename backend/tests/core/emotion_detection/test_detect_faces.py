# Dependencies:
# pip install pytest-mock
import pytest

class TestDetectFaces:

    # Given a valid image_path, detect_faces should return a dictionary containing the number of faces detected, a list of faces with their corresponding emotions, a cloudinary_path where the image with the detected faces is stored, and a boolean indicating that the function was safely executed.
    def test_valid_image_path(self, mocker):
        # Mock the necessary dependencies
        mocker.patch('cv2.imread')
        mocker.patch('rmn.RMN.detect_emotion_for_single_frame', return_value=[{'face': 'happy'}])
        mocker.patch('rmn.RMN.draw')
        mocker.patch('cloudinary.uploader.upload', return_value={'url': 'https://cloudinary.com/image'})
        mocker.patch('os.remove')

        # Call the code under test
        result = detect_faces(image_path='path/to/image.png')

        # Assert the expected output
        assert result == {
            "number_of_faces": 1,
            "faces": [{'face': 'happy'}],
            "safely_executed": True,
            "cloudinary_path": 'https://cloudinary.com/image'
        }
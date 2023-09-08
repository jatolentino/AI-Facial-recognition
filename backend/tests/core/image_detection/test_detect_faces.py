# Dependencies:
# pip install pytest-mock
import pytest

class TestDetectFaces:

    # Detect faces in image file path
    def test_detect_faces_image_path(self, mocker):
        # Mock the necessary dependencies
        mocker.patch('cv2.imread')
        mocker.patch('cloudinary.uploader.upload')
    
        # Set up the input parameters
        image_path = 'path/to/image.jpg'
    
        # Invoke the code under test
        result = detect_faces(image_path=image_path)
    
        # Assert the expected output
        assert result["safely_executed"] == True
        assert result["number_of_faces"] == 1
        assert len(result["faces"]) == 1
        assert "cloudinary_path" in result

    # Detect faces in corrupted image file
    def test_detect_faces_corrupted_image(self, mocker):
        # Mock the necessary dependencies
        mocker.patch('cv2.imread')
        mocker.patch('cloudinary.uploader.upload')
    
        # Set up the input parameters
        image_path = 'path/to/corrupted_image.jpg'
    
        # Invoke the code under test
        result = detect_faces(image_path=image_path)
    
        # Assert the expected output
        assert result["safely_executed"] == False
        assert "error_value" in result
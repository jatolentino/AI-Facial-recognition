# Dependencies:
# pip install pytest-mock
import pytest

class TestReadImage:

    # Can read image from path
    def test_can_read_image_from_path(self, mocker):
        # Mock the necessary dependencies
        mocker.patch('cv2.imread')
    
        # Set up the test data
        path = "test_image.jpg"
    
        # Invoke the code under test
        result = read_image(path=path)
    
        # Assert the expected behavior
        assert result is not None
        assert cv2.imread.called_with(path)

    # Returns default error value if no image is provided
    def test_returns_default_error_value_if_no_image_provided(self, mocker):
        # Set up the test data
        default_error_value = "There is no image provided"
    
        # Invoke the code under test
        result = read_image()
    
        # Assert the expected behavior
        assert result["error_value"] == default_error_value
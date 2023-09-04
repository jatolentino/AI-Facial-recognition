import pytest

class TestGenerateRandomFileName:

    # The function generates a random filename with the given length and returns it with '.png' extension
    def test_generate_random_filename(self):
        # Mock the random.choice function to always return 'a'
        mocker.patch('random.choice', return_value='a')
    
        # Call the code under test
        result = generate_random_FileName(8)
    
        # Assert that the result is 'aaaaaaaa.png'
        assert result == 'aaaaaaaa.png'

    # The function raises an exception if the image path is invalid
    def test_invalid_image_path(self):
        # Call the code under test with an invalid image path
        with pytest.raises(Exception):
            generate_random_FileName('invalid/path/to/image.png')
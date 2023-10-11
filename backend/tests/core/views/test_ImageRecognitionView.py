import pytest

class TestImageRecognitionView:

    # The 'FileUploadView' API view should successfully receive a POST request with a valid image file and return a HTTP_200_OK response with the recognition data.
    def test_file_upload_success(self, mocker):
        # Mock the FileSerializer class
        mock_file_serializer = mocker.Mock()
        mock_file_serializer.is_valid.return_value = True
        mock_file_serializer.data = {'file': 'image.jpg'}
        mocker.patch('code_under_test.FileSerializer', return_value=mock_file_serializer)

        # Mock the detect_faces function
        mocker.patch('code_under_test.detect_faces', return_value={'recognition': 'data'})

        # Create a POST request with a valid image file
        request = mocker.Mock()
        request.META = {'CONTENT_LENGTH': '1000000'}
        request.data = {'file': 'image.jpg'}

        # Invoke the code under test
        view = code_under_test.FileUploadView()
        response = view.post(request)

        # Assert that the response status code is HTTP_200_OK
        assert response.status_code == HTTP_200_OK
        # Assert that the response data contains the recognition data
        assert response.data == {'recognition': 'data'}
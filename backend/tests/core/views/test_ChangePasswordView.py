import pytest

class TestChangePasswordView:

    # Valid image file is uploaded and processed successfully
    def test_valid_image_file_uploaded(self, mocker):
        # Mock the necessary dependencies
        mocker.patch('api.core.views.FileSerializer')
        mocker.patch('api.core.views.detect_faces')
        mocker.patch('api.core.views.Response')

        # Create a mock request object
        request = mocker.Mock()
        request.META.get.return_value = 'Bearer token'

        # Create a mock file serializer
        file_serializer = mocker.Mock()
        file_serializer.is_valid.return_value = True
        file_serializer.data.get.return_value = 'image_path'
        api.core.views.FileSerializer.return_value = file_serializer

        # Create a mock response object
        response = mocker.Mock()
        api.core.views.Response.return_value = response

        # Invoke the code under test
        code_under_test.FileUploadView.post(request)

        # Assert that the necessary functions and methods were called
        api.core.views.FileSerializer.assert_called_once_with(data=request.data)
        file_serializer.save.assert_called_once()
        api.core.views.detect_faces.assert_called_once_with('image_path')
        api.core.views.Response.assert_called_once_with(api.core.views.detect_faces.return_value, status=HTTP_200_OK)

    # Image file size is greater than 5MB
    def test_image_file_size_greater_than_5MB(self, mocker):
        # Mock the necessary dependencies
        mocker.patch('api.core.views.FileSerializer')
        mocker.patch('api.core.views.Response')

        # Create a mock request object
        request = mocker.Mock()
        request.META.get.return_value = 'Bearer token'
        request.META.get.return_value = '5000001'  # Set content length to be greater than 5MB

        # Create a mock file serializer
        file_serializer = mocker.Mock()
        file_serializer.is_valid.return_value = True
        api.core.views.FileSerializer.return_value = file_serializer

        # Create a mock response object
        response = mocker.Mock()
        api.core.views.Response.return_value = response

        # Invoke the code under test
        code_under_test.FileUploadView.post(request)

        # Assert that the necessary functions and methods were called
        api.core.views.FileSerializer.assert_called_once_with(data=request.data)
        api.core.views.Response.assert_called_once_with({"message": "Image size is greater than 5MB"}, status=HTTP_400_BAD_REQUEST)
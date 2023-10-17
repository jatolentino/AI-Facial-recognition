import pytest

class TestUserEmailView:
    # UserEmailView returns email of authenticated user
    def test_user_email_view_returns_email(self, mocker):
        # Mock the get_user_from_token function
        mocker.patch('api.core.views.get_user_from_token')
        # Create a mock user object
        user = mocker.Mock()
        # Set the email attribute of the user object
        user.email = 'test@example.com'
        # Set the return value of the get_user_from_token function to be the mock user object
        api.core.views.get_user_from_token.return_value = user
        # Create an instance of the UserEmailView class
        view = api.core.views.UserEmailView()
        # Create a mock request object
        request = mocker.Mock()
        # Call the get method of the UserEmailView instance with the mock request object
        response = view.get(request)
        # Assert that the response contains the expected email value
        assert response.data['email'] == 'test@example.com'

    # FileUploadView returns error if image size is greater than 5MB
    def test_file_upload_view_returns_error_if_image_size_greater_than_5MB(self, mocker):
        # Create an instance of the FileUploadView class
        view = api.core.views.FileUploadView()
        # Create a mock request object
        request = mocker.Mock()
        # Set the CONTENT_LENGTH attribute of the mock request object to a value greater than 5MB
        request.META.get.return_value = '5000001'
        # Call the post method of the FileUploadView instance with the mock request object
        response = view.post(request)
        # Assert that the response contains the expected error message
        assert response.data['message'] == 'Image size is greater than 5MB'


    # APIView is imported correctly
    def test_import_api_view(self):
        from api.core.views import APIView
        assert APIView is not None

    # FileUploadView returns error if image size is greater than 5MB
    def test_file_upload_image_size_error(self, mocker):
        from api.core.views import FileUploadView, Response, HTTP_400_BAD_REQUEST
        from rest_framework.request import Request
        from rest_framework.parsers import MultiPartParser

        # Mock the request object
        request = Request()
        request.META = {'CONTENT_LENGTH': '6000000'}
        request.data = {'file': 'test_image.jpg'}

        # Mock the FileSerializer
        file_serializer_mock = mocker.Mock()
        file_serializer_mock.is_valid.return_value = True
        file_serializer_mock.data = {'file': 'test_image.jpg'}
        mocker.patch('api.core.views.FileSerializer', return_value=file_serializer_mock)

        # Mock the detect_faces function
        mocker.patch('api.core.views.detect_faces')

        # Create an instance of FileUploadView
        view = FileUploadView()

        # Invoke the post method
        response = view.post(request)

        # Assert that the response is as expected
        assert response == Response({"message": "Image size is greater than 5MB"}, status=HTTP_400_BAD_REQUEST)
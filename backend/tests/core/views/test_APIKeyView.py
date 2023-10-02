import pytest

class TestAPIKeyView:

    # APIKeyView returns HTTP_200_OK with valid token
    def test_api_key_view_valid_token(self, mocker):
        # Mock the necessary dependencies
        request = mocker.Mock()
        request.META.get.return_value = 'Bearer valid_token'
        Token.objects.get.return_value = mocker.Mock(user_id=1)
        User.objects.get.return_value = mocker.Mock(email='test@example.com')

        # Invoke the code under test
        view = APIKeyView()
        response = view.get(request)

        # Assert the response status code
        assert response.status_code == HTTP_200_OK
        # Assert the response data
        assert response.data == {'email': 'test@example.com'}

    # APIKeyView returns HTTP_400_BAD_REQUEST with invalid token
    def test_api_key_view_invalid_token(self, mocker):
        # Mock the necessary dependencies
        request = mocker.Mock()
        request.META.get.return_value = 'Bearer invalid_token'

        # Invoke the code under test
        view = APIKeyView()
        response = view.get(request)

        # Assert the response status code
        assert response.status_code == HTTP_400_BAD_REQUEST
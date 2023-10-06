import pytest

class TestChangeEmailView:
    # ChangeEmailView returns 200 OK and changes user email when valid email and confirm_email are provided
    def test_change_email_valid(self, mocker):
        # Mock the necessary dependencies
        request = mocker.Mock()
        request.META.get.return_value = "Bearer token"
        token = mocker.Mock()
        token.user_id = 1
        Token.objects.get.return_value = token
        user = mocker.Mock()
        User.objects.get.return_value = user

        # Set up the test data
        data = {
            'email': 'newemail@example.com',
            'confirm_email': 'newemail@example.com'
        }

        # Invoke the code under test
        response = code_under_test.ChangeEmailView().post(request, data)

        # Assert the response status code and user email
        assert response.status_code == 200
        assert user.email == 'newemail@example.com'
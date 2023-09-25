import pytest

class TestChangePasswordSerializer:

    # Test that the serializer can serialize a valid password change request
    def test_valid_password_change_request(self):
        # Initialize the serializer
        serializer = ChangePasswordSerializer(data={'password': 'new_password', 'confirm_password': 'new_password', 'current_password': 'current_password'})
    
        # Check that the serializer is valid
        assert serializer.is_valid() is True
    
        # Check that the serialized data matches the input data
        assert serializer.validated_data == {'password': 'new_password', 'confirm_password': 'new_password', 'current_password': 'current_password'}
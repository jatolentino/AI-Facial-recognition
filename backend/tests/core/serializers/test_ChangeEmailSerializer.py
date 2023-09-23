import pytest

class TestChangeEmailSerializer:

    # Serializes email and confirm_email fields
    def test_serializes_email_and_confirm_email_fields(self):
        # Initialize serializer
        serializer = ChangeEmailSerializer(data={'email': 'test@example.com', 'confirm_email': 'test@example.com'})
    
        # Check if serializer is valid
        assert serializer.is_valid() is True
    
        # Check if email and confirm_email fields are serialized
        assert serializer.validated_data['email'] == 'test@example.com'
        assert serializer.validated_data['confirm_email'] == 'test@example.com'
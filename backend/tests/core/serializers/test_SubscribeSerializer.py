import pytest

class TestSubscribeSerializer:

    # Serializes a 'stripeToken' field with max length of 60
    def test_serializes_stripeToken_field(self):
        # Initialize serializer
        serializer = SubscribeSerializer(data={'stripeToken': 'test_token'})
    
        # Check if serializer is valid
        assert serializer.is_valid() == True
    
        # Check if 'stripeToken' field is serialized correctly
        assert serializer.validated_data['stripeToken'] == 'test_token'
    
        # Check if 'stripeToken' field has max length of 60
        assert len(serializer.validated_data['stripeToken']) <= 60

    # Tests if serializer fails when 'stripeToken' field is missing
    def test_serializer_fails_when_stripeToken_field_is_missing(self):
        # Initialize serializer without 'stripeToken' field
        serializer = SubscribeSerializer(data={})
    
        # Check if serializer is not valid
        assert serializer.is_valid() == False
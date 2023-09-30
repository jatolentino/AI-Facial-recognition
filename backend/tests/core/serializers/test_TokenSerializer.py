import pytest

class TestTokenSerializer:

    # Serializes a Token model with fields 'pk' and 'key'
    def test_serializes_token_model(self):
        token = Token.objects.create(key='test_key')
        serializer = TokenSerializer(instance=token)
        expected_data = {'pk': token.pk, 'key': token.key}
        assert serializer.data == expected_data

    # Token model is not provided in the Meta class
    def test_token_model_not_provided(self):
        with pytest.raises(AttributeError):
            serializer = TokenSerializer()
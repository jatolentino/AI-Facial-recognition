import pytest

class TestFileSerializer:

    # Serializes a File model with all fields
    def test_serializes_file_model_with_all_fields(self):
        # Initialize the serializer with a File instance
        file = File.objects.create(name='test_file', size=100)
        serializer = FileSerializer(file)
    
        # Assert that all fields are serialized
        assert serializer.data['name'] == 'test_file'
        assert serializer.data['size'] == 100

    # Handles empty input data for File model serialization
    def test_handles_empty_input_data_for_file_model_serialization(self):
        # Initialize the serializer with empty input data
        serializer = FileSerializer(data={})
    
        # Assert that the serializer is not valid
        assert not serializer.is_valid()
import pytest

class TestIsMember:

    # The user is authenticated, is a member, and has permission to make the request.
    def test_authenticated_member_permission(self):
        # Arrange
        request = Request(user=User(is_authenticated=True, is_member=True, on_free_trial=False))
        view = View()
        permission = IsMember()
    
        # Act
        has_permission = permission.has_permission(request, view)
    
        # Assert
        assert has_permission is True
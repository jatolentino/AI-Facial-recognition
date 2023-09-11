import pytest

class TestFile:

    # Creating a new User instance sets default values for is_member and on_free_trial fields
    def test_user_instance_default_values(self):
        user = User()
        assert user.is_member == False
        assert user.on_free_trial == True

    # Creating a new Membership instance with a type other than 'F' sets the start and end dates to None
    def test_membership_instance_start_end_dates(self):
        user = User()
        membership = Membership(user=user, type='M')
        assert membership.start_date == None
        assert membership.end_date == None
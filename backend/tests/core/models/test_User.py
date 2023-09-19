import pytest

class TestUser:

    # User model extends AbstractUser
    def test_user_model_extends_abstract_user(self):
        assert issubclass(User, AbstractUser)

    # Membership model has stripe_subscription_id and stripe_subscription_item_id fields
    def test_membership_model_has_stripe_subscription_fields(self):
        membership = Membership()
        assert hasattr(membership, 'stripe_subscription_id')
        assert hasattr(membership, 'stripe_subscription_item_id')
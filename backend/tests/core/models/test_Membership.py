import pytest

class TestMembership:

    # A new user is created with a free trial membership.
    def test_new_user_created_with_free_trial_membership(self, mocker):
        # Mock the stripe.Customer.create method
        mocker.patch('stripe.Customer.create')

        # Create a new user
        user = User.objects.create(username='test_user', email='test@example.com')

        # Assert that the stripe.Customer.create method was called with the correct arguments
        stripe.Customer.create.assert_called_once_with(email=user.email)

        # Assert that the user's stripe_customer_id was updated
        assert user.stripe_customer_id is not None

        # Assert that a Membership object was created for the user with the correct attributes
        membership = Membership.objects.get(user=user)
        assert membership.type == 'F'
        assert membership.start_date is not None
        assert membership.end_date is not None

    # A user's membership end date is not updated if their subscription status is not active.
    def test_membership_end_date_not_updated_if_subscription_not_active(self, mocker):
        # Create a user with an active membership
        user = User.objects.create(username='test_user', email='test@example.com')
        membership = Membership.objects.create(user=user, type='M', start_date=timezone.now(), end_date=timezone.now() + datetime.timedelta(days=14))
        user.is_member = True
        user.save()

        # Mock the stripe.Subscription.retrieve method to return a non-active subscription status
        mocker.patch('stripe.Subscription.retrieve', return_value=Mock(status='inactive'))

        # Call the user_logged_in_receiver function
        user_logged_in_receiver(sender=None, user=user, request=None)

        # Assert that the user's membership end date was not updated
        membership.refresh_from_db()
        assert membership.end_date == timezone.now() + datetime.timedelta(days=14)
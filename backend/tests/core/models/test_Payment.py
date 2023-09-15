import pytest

class TestPayment:

    # Payment model can be created with required fields
    def test_payment_model_creation(self):
        user = User.objects.create(username='test_user')
        payment = Payment.objects.create(user=user, amount=10.0)
        assert payment.user == user
        assert payment.amount == 10.0

    # Payment model cannot be created without a user associated with it
    def test_payment_model_no_user(self):
        with pytest.raises(Exception):
            Payment.objects.create(amount=10.0)
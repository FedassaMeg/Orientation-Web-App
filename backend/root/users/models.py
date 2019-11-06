from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    ROLE_CHOICES = [
        ('RN', 'Nurse (RN)'),
        ('LV', 'Nurse (LVN)'),
        ('HA', 'Hospice Aide'),
        ('SP', 'Spiritual Care Provider'),
        ('SW', 'Social Worker'),
        ('OS', 'Office Staff')
    ]

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=140)
    role = models.CharField(
        max_length=2,
        choices=ROLE_CHOICES,
        default='OS',
    )
    site_admin = models.BooleanField(default=False)

    def __str__(self):
        return self.username

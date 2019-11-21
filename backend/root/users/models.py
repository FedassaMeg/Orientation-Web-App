from django.db import models
from django.contrib.auth.models import AbstractUser


class Role(models.Model):
    TITLE_CHOICES = [
        ('RN', 'Nurse (RN)'),
        ('LVN', 'Nurse (LVN)'),
        ('HHA', 'Hospice Aide'),
        ('SCP', 'Spiritual Care Provider'),
        ('MSW', 'Social Worker'),
        ('OS', 'Office Staff')
    ]
    GROUP_CHOICES = [
        ('ALL', 'All Staff'),
        ('CLN', 'Clinical Staff'),
        ('NUR', 'Nurses'),
        ('HHA', 'Hospice Aide'),
    ]
    title = models.CharField(
        max_length=3,
        choices=TITLE_CHOICES,
        default='OS',
    )
    group = models.CharField(
        max_length=3,
        choices=GROUP_CHOICES,
        default='ALL',
    )


class CustomUser(AbstractUser):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=140)
    site_admin = models.BooleanField(default=False)
    role = models.ForeignKey(Role, on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return self.username
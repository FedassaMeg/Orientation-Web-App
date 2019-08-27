from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=140)
    site_admin = models.BooleanField(default=False)

    def __str__(self):
        return self.username

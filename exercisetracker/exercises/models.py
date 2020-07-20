from django.db import models
from django.contrib.auth.models import User


class Exercise(models.Model):
    activity = models.CharField(max_length=100)
    duration = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    owner = models.ForeignKey(
        User, related_name="exercises", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

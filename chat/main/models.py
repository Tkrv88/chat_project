from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.db import models


user = get_user_model()

class Chat(models.Model):
    name = models.CharField(max_length=50, blank=False)
    create_date = models.DateField()

class Message(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE(),
        blank=False,
    )
    chat = models.ForeignKey(
        Chat,
        on_delete=models.CASCADE(),
        blank=False
    )

# Create your models here.

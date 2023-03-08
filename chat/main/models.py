from django.db import models

class Message(models.Model):
    time = models.DateTimeField(auto_now_add=True)
    text = models.TextField()
    user_id = models.IntegerField()
    message_id = id = models.BigAutoField(primary_key=True)
# Create your models here.

from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Chat(models.Model):
    title = models.CharField(max_length=50, blank=False)
    description = models.CharField(max_length=100)
    privacy = models.BooleanField(default=True)
    create_date = models.DateField(
        'Дата создания',
        auto_now_add=True
    )

    def __str__(self) -> str:
        return self.title


class Message(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        blank=False,
    )
    chat = models.ForeignKey(
        Chat,
        on_delete=models.CASCADE,
        blank=False
    )
    text = models.TextField()
    send_date = models.DateTimeField(auto_now_add=True)

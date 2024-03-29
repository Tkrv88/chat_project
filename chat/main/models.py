from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Chat(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        blank=False,
    )
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
        related_name='messages'
    )
    text = models.TextField()
    send_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text


class ChatSubscribers(models.Model):
    chat = models.ForeignKey(
        Chat,
        on_delete=models.CASCADE
    )
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

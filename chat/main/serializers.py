from rest_framework import serializers

from .models import Chat, Message


class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat

        fields = ('id', 'user', 'title', 'description', 'privacy', 'create_date', 'messages')


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message

        fields = '__all__'

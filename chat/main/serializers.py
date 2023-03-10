from rest_framework import serializers

from .models import Chat, Message


class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat

        # fields = ['title', 'description', 'privacy', 'create_date',]
        fields = '__all__'


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message

        # fields = ['text', 'send_date']
        fields = '__all__'

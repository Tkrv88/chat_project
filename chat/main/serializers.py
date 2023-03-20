from rest_framework import serializers

from .models import Chat, ChatSubscribers, Message


class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat

        fields = ('id', 'user', 'title', 'description', 'privacy', 'create_date', 'messages')


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message

        fields = '__all__'


class ChatSubscribersSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatSubscribers

        fields = '__all__'

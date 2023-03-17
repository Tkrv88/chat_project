from rest_framework import viewsets

from .serializers import ChatSerializer, MessageSerializer, ChatSubscribersSerializer
from .models import Chat, ChatSubscribers, Message


class ChatViewSet(viewsets.ModelViewSet):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer


class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer


class ChatSubscribersViewSet(viewsets.ModelViewSet):
    queryset = ChatSubscribers.objects.all()
    serializer_class = ChatSubscribersSerializer

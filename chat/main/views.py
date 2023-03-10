from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets, status

from .serializers import ChatSerializer, MessageSerializer
from .models import Chat, Message


@api_view(['GET', 'POST'])
def chat_index(request):
    if request.method == 'POST':
        serializer = ChatSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
    chats = Chat.objects.all()
    serializer = ChatSerializer(chats, many=True)
    return Response(serializer, status=status.HTTP_200_OK)


class ChatViewSet(viewsets.ModelViewSet):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer


class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

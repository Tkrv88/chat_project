from django.urls import path, include
from rest_framework.routers import SimpleRouter

from .views import *

router = SimpleRouter()
router.register('chats', ChatViewSet)
router.register('messages', MessageViewSet)

app_name = 'main'


urlpatterns = [
    path('', include(router.urls)),
]

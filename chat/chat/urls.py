from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    # path('', include('main.urls', namespace='main')),
    # path('auth/', include('users.urls', namespace='users')),
    # path('auth/', include('django.contrib.auth.urls')),
    path('api/v1/', include('main.urls', namespace='main')),
    path("admin/", admin.site.urls),
]

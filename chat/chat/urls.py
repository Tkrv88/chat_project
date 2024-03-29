from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework.authtoken import views


urlpatterns = [
    # path('', include('main.urls', namespace='main')),
    # path('auth/', include('users.urls', namespace='users')),
    # path('auth/', include('django.contrib.auth.urls')),
    path('api/v1/', include('main.urls', namespace='main')),
    path("admin/", admin.site.urls),
    # path('api-token-auth/', views.obtain_auth_token),
    path('drf-auth', include('rest_framework.urls')),
    path('api-auth/', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.authtoken')),
]

schema_view = get_schema_view(
   openapi.Info(
      title="Moorchat API",
      default_version='v1',
      description="Документация для проекта Moorchat",
      # terms_of_service="URL страницы с пользовательским соглашением",
      contact=openapi.Contact(email="admin@mail.ru"),
      license=openapi.License(name="MIT License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns += [
   re_path(r'^swagger(?P<format>\.json|\.yaml)$',
       schema_view.without_ui(cache_timeout=0), name='schema-json'),
   re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0),
       name='schema-swagger-ui'),
   re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0),
       name='schema-redoc'),
]

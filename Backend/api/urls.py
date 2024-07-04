from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogViewSet, CommentViewSet, CreateUserView
from . import views


router = DefaultRouter()
router.register(r'blogs', BlogViewSet)
router.register(r'comments', CommentViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('hello-world/', views.hello_world, name='hello_world'),
    path("users/<int:pk>/", CreateUserView.as_view(), name='user-detail'),
    path('blog/<int:pk>/', views.BlogDetailView.as_view(), name='blog-detail'),
]

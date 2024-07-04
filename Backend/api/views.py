# views.py
from rest_framework import generics, viewsets, status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import RetrieveAPIView
from django.shortcuts import get_object_or_404
# from .utils import send_email_notification
from .models import Blog, Comment, User  
from .serializer import BlogSerializer, CommentSerializer, UserSerializer  

@api_view(['GET'])
def hello_world(request):
    return Response({'message': [1, 2, 3, 4, 5, 6, 7, 8, 9]})

# latest_blog = Blog.objects.order_by('-created_at').first()
# print(latest_blog)

# print(blog_latest)
class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

    @action(detail=True, methods=['get'])
    def get_comments(self, request, pk=None):
        blog = self.get_object()
        comments = blog.comments.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    
    def create(self, request, *args, **kwargs):
        data = request.data
        blog = get_object_or_404(Blog, pk=data.get('blog'))
        user = request.user  # Assuming the user is authenticated
        
        comment = Comment.objects.create(
            user=user,
            blog=blog,
            content=data.get('content')
        )
        
        serializer = CommentSerializer(comment)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class CreateUserView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

# class CreateUserView(APIView):
#     permission_classes = []

#     def post(self, request, *args, **kwargs):
#         # Check if user already exists
#         existing_user = get_object_or_404(User, username=request.data.get('username'))
#         if existing_user:
#             return Response({'error': 'User with this username already exists.'}, status=status.HTTP_400_BAD_REQUEST)
        
#         # Proceed to create new user if not exists
#         serializer = UserSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         else:
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
# 
class BlogDetailView(generics.RetrieveAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    

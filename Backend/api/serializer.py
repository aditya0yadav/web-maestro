from .models import Blog,Comment,User
from rest_framework import serializers

class CommentSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()

    class Meta:
        model = Comment
        fields = ['id', 'user', 'content', 'created_at', 'last_updated', 'blog']

class BlogSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Blog
        fields = '__all__'



class UserSerializer(serializers.ModelSerializer):
    # password = serializers.CharField(write_only=True)
    # email = serializers.EmailField()

    class Meta:
        model = User
        fields = ['first_name','last_name','username', 'password', 'email',]
        extra_kwargs = {'password' : {'write_only' : True} }

    def create(self, validated_data):
        # Override create method to use create_user method of User model manager
        user = User.objects.create_user(
            **validated_data
        )
        return user
from django.db import models
from django.contrib.auth.models import User
# from ckeditor.fields import RichTextField

# class User(models.Model):

#     id = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=100, blank=False, null=False)
#     email = models.EmailField(max_length=100, blank=False, null=False)
#     password = models.CharField(max_length=100, blank=False, null=False)
#     created_at = models.DateTimeField(auto_now_add=True)
#     last_updated = models.DateTimeField(auto_now=True)

    # def __str__(self):
    #     return self.name
    
class Blog(models.Model):

    id = models.AutoField(primary_key=True)
    image = models.ImageField(upload_to='', blank=True, null=True)
    title = models.CharField(max_length=100, blank=False, null=False)
    content = models.TextField(max_length=5000, blank=False, null=False)
    content_2 = models.TextField(max_length=5000, blank=True, null=False)
    content_3 = models.TextField(max_length=5000, blank=True, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)
    overview = models.TextField(max_length=500, blank=False, default='')
    # tagged = models.CharField(max_length=100, blank=False, null=False)
    # content = RichTextField(blank=True)
    


    def __str__(self):
        return self.title

class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, blank=False, on_delete=models.CASCADE)
    blog = models.ForeignKey(Blog, related_name='comments', blank=False, on_delete=models.CASCADE)
    content = models.TextField(max_length=500, blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)  # Default to current timestamp
    last_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Comment by {self.user.username} on {self.blog.title}'



    
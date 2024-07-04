from django.contrib import admin
from .models import Blog,Comment
# from django.contrib.auth.models import User

# admin.site.register(User)
# from django.contrib import admin
from .models import Blog



admin.site.register(Blog)
admin.site.register(Comment)


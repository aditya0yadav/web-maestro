from django.core.mail import send_mail
from django.contrib.auth.models import User
from django.conf import settings

def send_email_notification(subject, message):
    users = User.objects.all()
    email_list = [user.email for user in users]
    

    send_mail(
        subject,
        message,
        settings.EMAIL_HOST_USER,
        email_list,
        fail_silently=False,
    )
    return "Done"

# Generated by Django 5.0.6 on 2024-07-01 19:13

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_alter_blog_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='blog',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='api.blog'),
        ),
    ]

# Generated by Django 3.0.8 on 2020-07-18 13:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('exercises', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='exercise',
            old_name='user',
            new_name='username',
        ),
        migrations.AddField(
            model_name='exercise',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='exercises', to=settings.AUTH_USER_MODEL),
        ),
    ]

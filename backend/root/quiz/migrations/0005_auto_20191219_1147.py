# Generated by Django 2.2.4 on 2019-12-19 19:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0004_useranswer'),
    ]

    operations = [
        migrations.AddField(
            model_name='completedslide',
            name='is_active',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='quizscore',
            name='is_active',
            field=models.BooleanField(default=False),
        ),
    ]
# Generated by Django 2.2.4 on 2019-09-26 23:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0003_auto_20190926_1459'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quizscore',
            name='related_quiz',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='quiz.Quiz'),
        ),
    ]

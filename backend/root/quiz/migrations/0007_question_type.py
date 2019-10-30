# Generated by Django 2.2.4 on 2019-10-29 19:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0006_auto_20191016_1147'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='type',
            field=models.CharField(choices=[('TF', 'TrueFalse'), ('SA', 'ShortAnswer'), ('MC', 'MultipleChoice')], default='TF', max_length=2),
        ),
    ]
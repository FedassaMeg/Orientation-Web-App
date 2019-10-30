from django.db import models
from users.models import CustomUser


class Slide(models.Model):
    title = models.CharField(max_length=100)
    module = models.IntegerField()

    def __str__(self):
        return self.title


class Quiz(models.Model):
    TYPE_CHOICES = [
        ('VD', 'Video'),
        ('HD', 'Handout'),
        ('SL', 'Slides'),
    ]
    title = models.CharField(max_length=100)
    type = models.CharField(
        max_length=2,
        choices=TYPE_CHOICES,
        default='VD'
    )

    def __str__(self):
        return self.title


class Question(models.Model):
    TYPE_CHOICES = [
        ('TF', 'TrueFalse'),
        ('SA', 'ShortAnswer'),
        ('MC', 'MultipleChoice'),
    ]
    question = models.TextField()
    answer = models.BooleanField()
    type = models.CharField(
        max_length=2,
        choices=TYPE_CHOICES,
        default='TF'
    )
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)

    def __str__(self):
        return self.question


class QuizScore(models.Model):
    score = models.IntegerField()
    signed_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    signed_date = models.DateTimeField(auto_now=True)
    related_quiz = models.ForeignKey(
        Quiz, on_delete=models.SET_NULL, blank=True, null=True)


class LookUpTableSlideUser(models.Model):
    slide = models.ForeignKey(Slide, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)
    time = models.DateTimeField(auto_now=True)

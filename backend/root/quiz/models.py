#from django.contrib.postgres.fields import JSONField
from django.db import models
from users.models import CustomUser, Role


class Quiz(models.Model):
    title = models.CharField(max_length=100)
    group = models.ForeignKey(
        Role, on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return self.title


class QuizType(models.Model):
    TYPE_CHOICES = [
        ('VD', 'Video'),
        ('HD', 'Handout'),
        ('SL', 'Slides'),
    ]
    quiz = models.OneToOneField(
        Quiz, on_delete=models.CASCADE, primary_key=True)
    type = models.CharField(
        max_length=2,
        choices=TYPE_CHOICES,
        default='VD'
    )


class QuizScore(models.Model):
    score = models.IntegerField()
    signed_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    signed_date = models.DateTimeField(auto_now=True)
    related_quiz = models.ForeignKey(
        Quiz, on_delete=models.SET_NULL, blank=True, null=True)


class Question(models.Model):
    question = models.TextField()
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)

    def __str__(self):
        return self.question

class QuestionType(models.Model):
    TYPE_CHOICES = [
        ('TF', 'TrueFalse'),
        ('SA', 'ShortAnswer'),
        ('MC', 'MultipleChoice'),
    ]
    question = models.OneToOneField(
        Question, on_delete=models.CASCADE, primary_key=True)
    type = models.CharField(
        max_length=2,
        choices=TYPE_CHOICES,
        default='TF'
    )


class TFAnswer(models.Model):
    answer = models.BooleanField(default=False)
    question = models.OneToOneField(
        Question, on_delete=models.CASCADE, primary_key=True)


class MCAnswer(models.Model):
    ANSWER_CHOICES = [
        ('a', 'First Choice'),
        ('b', 'Second Choice'),
        ('c', 'Third Choice'),
        ('d', 'Fourth Choice'),
        ('e', 'None')
    ]
    answer = models.CharField(
        max_length=1,
        choices=ANSWER_CHOICES,
        default='e'
    )
    question = models.OneToOneField(
        Question, on_delete=models.CASCADE, primary_key=True)
    choice1 = models.CharField(max_length=100, default='')
    choice2 = models.CharField(max_length=100, default='')
    choice3 = models.CharField(max_length=100, default='')
    choice4 = models.CharField(max_length=100, default='')

class SAAnswer(models.Model):
    answer = models.TextField(default="")
    question = models.OneToOneField(
        Question, on_delete=models.CASCADE, primary_key=True)


class Slide(models.Model):
    title = models.CharField(max_length=100)
    module = models.IntegerField()
    url = models.URLField(default='')
    group = models.ForeignKey(
        Role, on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return self.title


class CompletedSlides(models.Model):
    slide = models.ForeignKey(Slide, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)
    time = models.DateTimeField(auto_now=True)

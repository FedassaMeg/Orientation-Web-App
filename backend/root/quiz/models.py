from django.db import models
from users.models import CustomUser


class Slide(models.Model):
    title = models.CharField(max_length=100)
    module = models.IntegerField()

    def __str__(self):
        return self.title


class Quiz(models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title


class Question(models.Model):
    question = models.TextField()
    answer = models.BooleanField()
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)

    def __str__(self):
        return self.question


class QuizScore(models.Model):
    score = models.IntegerField()
    signed_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    signed_date = models.DateTimeField(auto_now=True)
    related_quiz = models.OneToOneField(Quiz, on_delete=models.CASCADE)


class LookUpTableSlideUser(models.Model):
    slide = models.ForeignKey(Slide, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

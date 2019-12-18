#from django.contrib.postgres.fields import JSONField
from django.db import models
from users.models import CustomUser, Role


class Quiz(models.Model):
    TYPE_CHOICES = [
        ('VD', 'Video'),
        ('HD', 'Handout'),
        ('SL', 'Slides'),
    ]
    type = models.CharField(
        max_length=2,
        choices=TYPE_CHOICES,
        default='VD'
    )
    title = models.CharField(max_length=100)
    url_value = models.CharField(max_length=100, default='')
    group = models.ManyToManyField(
        Role)
    num_questions = models.IntegerField(default=0)
    is_active = models.BooleanField(default=False)
    review_required = models.BooleanField(default=False)
    created_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    

    def __str__(self):
        return self.title


class QuizScore(models.Model):
    score = models.IntegerField(blank=True, null=True)
    signed_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='quiz_signed_by')
    signed_date = models.DateTimeField(auto_now=True)
    related_quiz = models.ForeignKey(
        Quiz, on_delete=models.SET_NULL, blank=True, null=True)
    is_reviewed = models.BooleanField(default=False)
    reviewed_by = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, blank=True)
    is_completed = models.BooleanField(default=False)


class Question(models.Model):
    TYPE_CHOICES = [
        ('TF', 'TrueFalse'),
        ('SA', 'ShortAnswer'),
        ('MC', 'MultipleChoice'),
    ]
    type = models.CharField(
        max_length=2,
        choices=TYPE_CHOICES,
        default='TF'
    )
    question = models.TextField()
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=False)
    created_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.question
        
    @property
    def choices(self):
        return self.choice_set.all()
        

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice = models.CharField(max_length=255)
    
    def __str__(self):
        return self.choice

        
class Answer(models.Model):
    true_or_false = models.BooleanField(blank=True, null=True)
    multiple_choice = models.CharField(max_length=1, blank=True, null=True)
    short_answer = models.TextField(blank=True, null=True)
    question = models.OneToOneField(
        Question, on_delete=models.CASCADE, primary_key=True)

class UserAnswer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.SET_NULL, null=True, blank=True)
    true_or_false = models.BooleanField(blank=True, null=True)
    multiple_choice = models.CharField(max_length=1, blank=True, null=True)
    short_answer = models.TextField(blank=True, null=True)
    quiz_score = models.ForeignKey(QuizScore, on_delete=models.CASCADE)
    

class Slide(models.Model):
    title = models.CharField(max_length=100)
    module = models.IntegerField()
    url = models.URLField(default='')
    group = models.ManyToManyField(
        Role)

    def __str__(self):
        return self.title


class CompletedSlide(models.Model):
    slide = models.ForeignKey(Slide, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)
    time = models.DateTimeField(auto_now=True)
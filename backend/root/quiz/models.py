#from django.contrib.postgres.fields import JSONField
from django.db import models
from users.models import CustomUser, Role

class Modules(models.Model):
    number = models.IntegerField()
    title = models.CharField(max_length=100)
    
    def __str__(self):
        return self.title


class ContentTypes(models.Model):
    name = models.CharField(max_length=50)
    
    def __str__(self):
        return self.name


class Content(models.Model):
    title = models.CharField(max_length=100)
    module = models.ForeignKey(Modules, on_delete=models.SET_NULL, null=True, blank=True)
    url_value = models.CharField(max_length=200)
    content_type = models.ForeignKey(ContentTypes, on_delete=models.SET_NULL, null=True, blank=True)
    group = models.ManyToManyField(Role)
    is_active = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)
        
    def __str__(self):
        return self.title


class CompletedContent(models.Model):
    content = models.ForeignKey(Content, on_delete=models.SET_NULL, null=True, blank=True)
    completed_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    completed_at = models.DateTimeField(auto_now=True)
    is_completed = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        ordering = ['-completed_at']


class Quiz(models.Model):
    content = models.ForeignKey(Content, on_delete=models.CASCADE, default=1)
    title = models.CharField(max_length=100)
    url_value = models.CharField(max_length=100, default='')
    num_questions = models.IntegerField(default=0)
    group = models.ManyToManyField(Role)
    created_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    review_required = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)
    
    def __str__(self):
        return self.title


class QuizScore(models.Model):
    score = models.IntegerField(blank=True, null=True)
    related_quiz = models.ForeignKey(
        Quiz, on_delete=models.SET_NULL, blank=True, null=True)
    signed_date = models.DateTimeField(auto_now=True)
    signed_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='quiz_signed_by')
    reviewed_by = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, blank=True)
    is_reviewed = models.BooleanField(default=False)
    is_completed = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        ordering = ['-signed_date']


class QuestionTypes(models.Model):
    name = models.CharField(max_length=50)
        
    def __str__(self):
        return self.name


class Question(models.Model):
    question_type = models.ForeignKey(QuestionTypes, on_delete=models.SET_NULL, null=True, blank=True)
    question = models.TextField()
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)
    created_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.question
        
    @property
    def choices(self):
        return self.choice_set.all()

    # class Meta:
    #     order_with_respect_to = 'quiz'


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice = models.CharField(max_length=255)
    
    def __str__(self):
        return self.choice


class TFAnswer(models.Model):
    question = models.OneToOneField(
        Question, on_delete=models.CASCADE, primary_key=True, default=0)
    answer = models.BooleanField(blank=True, null=True)


class MCAnswer(models.Model):
    question = models.OneToOneField(
        Question, on_delete=models.CASCADE, primary_key=True, default=0)
    answer = models.CharField(max_length=1, blank=True, null=True)


class SAAnswer(models.Model):
    question = models.OneToOneField(
        Question, on_delete=models.CASCADE, primary_key=True, default=0)
    answer = models.TextField(blank=True, null=True)


class TFUserAnswer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.SET_NULL, null=True, blank=True)
    quiz_score = models.ForeignKey(QuizScore, on_delete=models.CASCADE)
    answer = models.BooleanField(blank=True, null=True)


class MCUserAnswer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.SET_NULL, null=True, blank=True)
    quiz_score = models.ForeignKey(QuizScore, on_delete=models.CASCADE)
    answer = models.CharField(max_length=1, blank=True, null=True)


class SAUserAnswer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.SET_NULL, null=True, blank=True)
    quiz_score = models.ForeignKey(QuizScore, on_delete=models.CASCADE)
    answer = models.TextField(blank=True, null=True)
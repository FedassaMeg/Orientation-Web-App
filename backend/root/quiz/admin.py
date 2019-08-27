from django.contrib import admin
from .models import Quiz, QuizScore, Question, QuestionScore

admin.site.register(Quiz)
admin.site.register(QuizScore)
admin.site.register(Question)
admin.site.register(QuestionScore)

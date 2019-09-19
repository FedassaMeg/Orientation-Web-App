from django.contrib import admin
from .models import Quiz, QuizScore, Question, Slide

admin.site.register(Slide)
admin.site.register(Quiz)
admin.site.register(QuizScore)
admin.site.register(Question)

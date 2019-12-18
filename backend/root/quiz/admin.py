from django.contrib import admin
from .models import Quiz, QuizScore, Question, Choice, Answer, UserAnswer, Slide, CompletedSlide

admin.site.register(Quiz)
admin.site.register(QuizScore)
admin.site.register(Question)
admin.site.register(Choice)
admin.site.register(Answer)
admin.site.register(UserAnswer)
admin.site.register(Slide)
admin.site.register(CompletedSlide)

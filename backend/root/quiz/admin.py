from django.contrib import admin
from .models import Quiz, QuizScore, Question, Choice, Answer, Slide, CompletedSlide

admin.site.register(Quiz)
admin.site.register(QuizScore)
admin.site.register(Question)
admin.site.register(Choice)
admin.site.register(Answer)
admin.site.register(Slide)
admin.site.register(CompletedSlide)

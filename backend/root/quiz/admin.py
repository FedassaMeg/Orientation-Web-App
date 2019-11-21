from django.contrib import admin
from .models import Quiz, QuizType, QuizScore, Question, QuestionType, Slide, CompletedSlides, TFAnswer, MCAnswer, SAAnswer

admin.site.register(Slide)
admin.site.register(Quiz)
admin.site.register(QuizType)
admin.site.register(QuizScore)
admin.site.register(Question)
admin.site.register(QuestionType)
admin.site.register(CompletedSlides)
admin.site.register(TFAnswer)
admin.site.register(MCAnswer)
admin.site.register(SAAnswer)

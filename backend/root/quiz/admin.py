from django.contrib import admin
from .models import Quiz, QuizScore, Question, Slide, LookUpTableSlideUser, TFAnswer, MCAnswer, SAAnswer

admin.site.register(Slide)
admin.site.register(Quiz)
admin.site.register(QuizScore)
admin.site.register(Question)
admin.site.register(LookUpTableSlideUser)
admin.site.register(TFAnswer)
admin.site.register(MCAnswer)
admin.site.register(SAAnswer)

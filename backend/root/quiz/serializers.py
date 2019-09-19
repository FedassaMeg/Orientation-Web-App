from rest_framework import serializers
from .models import Quiz, Question, QuizScore, Slide


class SlideSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slide
        fields = ('id', 'title', 'module')


class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = ('id', 'title')


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('id', 'content', 'answer', 'quiz')


class QuizScoreSerializer(serializers.ModelSerializer):
    signed_by = serializers.ReadOnlyField(source='signed_by.username')

    class Meta:
        model = QuizScore
        fields = ('id', 'score', 'signed_by', 'signed_date',
                  'related_quiz')

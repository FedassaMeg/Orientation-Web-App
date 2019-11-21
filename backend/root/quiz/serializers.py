from rest_framework import serializers
from .models import Quiz, QuizType, QuizScore, Question, QuestionType, TFAnswer, MCAnswer, SAAnswer, Slide, CompletedSlides


class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = ('id', 'title', 'group')

class QuizTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuizType
        fields = ('quiz', 'type')

class QuizScoreSerializer(serializers.ModelSerializer):
    signed_by = serializers.ReadOnlyField(source='signed_by.id')

    class Meta:
        model = QuizScore
        fields = ('id', 'score', 'signed_by', 'signed_date',
                  'related_quiz')


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('id', 'question', 'quiz')

class QuestionTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionType
        fields = ('question', 'type')


class TFAnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = TFAnswer
        fields = ('question', 'answer')


class MCAnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = MCAnswer
        fields = ('question', 'answer', 'choice1', 'choice2', 'choice3', 'choice4')


class SAAnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = SAAnswer
        fields = ('question', 'answer')


class SlideSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slide
        fields = ('id', 'title', 'module', 'url', 'group')


class CompletedSlidesSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.id')

    class Meta:
        model = CompletedSlides
        fields = ('id', 'slide', 'user', 'completed', 'time')

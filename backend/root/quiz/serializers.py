from rest_framework import serializers
from .models import Quiz, Question, TFAnswer, MCAnswer, SAAnswer, QuizScore, Slide, LookUpTableSlideUser


class SlideSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slide
        fields = ('id', 'title', 'module', 'user_role')


class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = ('id', 'title', 'type', 'user_role')


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('id', 'question', 'quiz', 'type')


class TFAnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = TFAnswer
        fields = ('question', 'answer')


class MCAnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = MCAnswer
        fields = ('question', 'answer')


class SAAnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = SAAnswer
        fields = ('question', 'answer')


class QuizScoreSerializer(serializers.ModelSerializer):
    signed_by = serializers.ReadOnlyField(source='signed_by.id')

    class Meta:
        model = QuizScore
        fields = ('id', 'score', 'signed_by', 'signed_date',
                  'related_quiz')


class LookUpTableSlideUserSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.id')

    class Meta:
        model = LookUpTableSlideUser
        fields = ('id', 'slide', 'user', 'completed', 'time')

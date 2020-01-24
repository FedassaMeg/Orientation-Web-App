from rest_framework import serializers
from drf_writable_nested.serializers import WritableNestedModelSerializer
from .models import Modules, ContentTypes, Content, CompletedContent, Quiz, QuizScore, QuestionTypes, Question, Choice, TFAnswer, MCAnswer, SAAnswer, TFUserAnswer, MCUserAnswer, SAUserAnswer

class ModulesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Modules
        fields = ('id', 'number', 'title')


class ContentTypesSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContentTypes
        fields = ('id', 'name')


class ContentSerializer(serializers.ModelSerializer):
    module = serializers.ReadOnlyField(source='module.id')
    content_type = serializers.ReadOnlyField(source='content_type.id')

    class Meta:
        model = Content
        fields = ('id', 'title', 'module', 'url_value', 'content_type', 'group', 'is_active', 'is_deleted')


class CompletedContentSerializer(WritableNestedModelSerializer):
    completed_by = serializers.ReadOnlyField(source='completed_by.id')
    content = ContentSerializer(allow_null=True, required=False)

    class Meta:
        model = CompletedContent
        fields = ('id', 'content', 'completed_by', 'completed_at', 'is_completed', 'is_active', 'is_deleted')


class QuizSerializer(WritableNestedModelSerializer):
    created_by = serializers.ReadOnlyField(source='created_by.id')
    content = ContentSerializer(allow_null=True, required=False)

    class Meta:
        model = Quiz
        fields = ('id', 'content', 'title', 'url_value', 'num_questions', 'group', 'created_by', 'created_at', 'updated_at', 'review_required', 'is_active', 'is_deleted')


class QuizScoreSerializer(WritableNestedModelSerializer):
    related_quiz = QuizSerializer(allow_null=True, required=False)
    signed_by = serializers.ReadOnlyField(source='signed_by.id')

    class Meta:
        model = QuizScore
        fields = ('id', 'score', 'related_quiz', 'signed_date', 'signed_by', 'reviewed_by', 'is_reviewed', 'is_completed', 'is_active', 'is_deleted')


class ChoiceSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = Choice
        fields = ('id', 'question', 'choice')
        read_only_fields = ('question',)


class QuestionTypesSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = QuestionTypes
        fields = ('id', 'name')


class QuestionSerializer(WritableNestedModelSerializer):
    created_by = serializers.ReadOnlyField(source='created_by.id')
    choices = ChoiceSerializer(many=True)

    class Meta:
        model = Question
        fields = ('id', 'question_type', 'question', 'choices', 'quiz', 'is_active', 'is_deleted', 'created_by', 'created_at', 'updated_at')

    def create(self, validated_data):
        choices = validated_data.pop('choices')
        question = Question.objects.create(**validated_data)
        for choice in choices:
            Choice.objects.create(**choice, question=question)
        return question
    
    def update(self, instance, validated_data):
        choices = validated_data.pop('choices')
        instance.question = validated_data.get("question", instance.question)
        instance.save()
        keep_choices = []
        existing_ids = [choice.id for choice in instance.choices]
        for choice in choices:
            if "id" in choice.keys():
                if Choice.objects.filter(id=choice["id"]).exists():
                    c = Choice.objects.get(id=choice["id"])
                    c.choice = choice.get('choice', c.choice)
                    c.save()
                    keep_choices.append(c.id)
                else:
                    continue
            else:
                c = Choice.objects.create(**choice, question=question)
                keep_choices.append(c.id)
            
        for choice in instance.choices:
            if choice.id not in keep_choices:
                choice.delete()

        return instance


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


class TFUserAnswerSerializer(serializers.ModelSerializer):

    class Meta:
        model = TFUserAnswer
        fields = ('id', 'question', 'quiz_score', 'answer')


class MCUserAnswerSerializer(serializers.ModelSerializer):

    class Meta:
        model = MCUserAnswer
        fields = ('id', 'question', 'quiz_score', 'answer')


class SAUserAnswerSerializer(serializers.ModelSerializer):

    class Meta:
        model = SAUserAnswer
        fields = ('id', 'question', 'quiz_score', 'answer')
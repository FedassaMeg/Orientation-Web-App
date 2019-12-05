from rest_framework import serializers
from .models import Quiz, QuizScore, Question, Choice, Answer, Slide, CompletedSlide


class QuizSerializer(serializers.ModelSerializer):
    created_by = serializers.ReadOnlyField(source='created_by.id')

    class Meta:
        model = Quiz
        fields = ('id', 'type', 'title', 'url_value', 'group', 'num_questions', 'is_active', 'review_required', 'created_by', 'created_at', 'updated_at')


class QuizScoreSerializer(serializers.ModelSerializer):
    signed_by = serializers.ReadOnlyField(source='signed_by.id')

    class Meta:
        model = QuizScore
        fields = ('id', 'score', 'signed_by', 'signed_date',
                  'related_quiz', 'is_reviewed', 'reviewed_by')
        depth = 1


class ChoiceSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = Choice
        fields = ('id', 'question', 'choice')
        read_only_fields = ('question',)


class QuestionSerializer(serializers.ModelSerializer):
    created_by = serializers.ReadOnlyField(source='created_by.id')
    choices = ChoiceSerializer(many=True)

    class Meta:
        model = Question
        fields = ('id', 'type', 'question', 'choices', 'quiz', 'is_active', 'created_by', 'created_at', 'updated_at')

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




class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ('question', 'true_or_false', 'multiple_choice', 'short_answer')


class SlideSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slide
        fields = ('id', 'title', 'module', 'url', 'group')


class CompletedSlideSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.id')

    class Meta:
        model = CompletedSlide
        fields = ('id', 'slide', 'user', 'completed', 'time')

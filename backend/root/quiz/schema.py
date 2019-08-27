import graphene
from graphene_django.types import DjangoObjectType
from .models import Quiz, QuizScore, Question, QuestionScore


class QuizType(DjangoObjectType):
    class Meta:
        model = Quiz


class QuizScoreType(DjangoObjectType):
    class Meta:
        model = QuizScore


class QuestionType(DjangoObjectType):
    class Meta:
        model = Question


class QuestionScoreType(DjangoObjectType):
    class Meta:
        model = QuestionScore


class Query(graphene.ObjectType):
    get_quiz = graphene.Field(QuizType, id=graphene.Int())
    get_quizscore = graphene.Field(QuizScoreType, id=graphene.Int())
    get_question = graphene.Field(QuestionType, id=graphene.Int())
    get_questionscore = graphene.Field(QuestionScoreType, id=graphene.Int())
    get_all_quizzes = graphene.List(QuizType)
    get_all_quizscores = graphene.List(QuizScoreType)
    get_all_questions = graphene.List(QuestionType)
    get_all_questionscores = graphene.List(QuestionScoreType)

    def resolve_get_quiz(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return Quiz.objects.get(pk=id)

        return None

    def resolve_get_quizscore(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return QuizScore.objects.get(pk=id)

        return None

    def resolve_get_question(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return Question.objects.get(pk=id)

        return None

    def resolve_get_questionscore(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return QuestionScore.objects.get(pk=id)

        return None

    def resolve_get_all_quizzes(self, info, **kwargs):
        return Quiz.objects.all()

    def resolve_get_all_quizscores(self, info, **kwargs):
        return QuizScore.objects.all()

    def resolve_get_all_questions(self, info, **kwargs):
        return Question.objects.all()

    def resolve_get_all_questionscores(self, info, **kwargs):
        return QuestionScore.objects.all()

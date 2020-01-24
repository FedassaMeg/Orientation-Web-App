from rest_framework import viewsets, status, mixins
from rest_framework.response import Response
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models.query import QuerySet

from .models import Modules, ContentTypes, Content, CompletedContent, Quiz, QuizScore, QuestionTypes, Question, Choice, TFAnswer, MCAnswer, SAAnswer, TFUserAnswer, MCUserAnswer, SAUserAnswer
from .serializers import ModulesSerializer, ContentTypesSerializer, ContentSerializer, CompletedContentSerializer, QuizSerializer, QuizScoreSerializer, QuestionTypesSerializer, QuestionSerializer, ChoiceSerializer, TFAnswerSerializer, MCAnswerSerializer, SAAnswerSerializer, TFUserAnswerSerializer, MCUserAnswerSerializer, SAUserAnswerSerializer


class ModulesViewSet(viewsets.ModelViewSet):
    serializer_class = ModulesSerializer
    queryset = Modules.objects.all().order_by('id')


class ContentTypesViewSet(viewsets.ModelViewSet):
    serializer_class = ContentTypesSerializer
    queryset = ContentTypes.objects.all().order_by('id')


class ContentViewSet(viewsets.ModelViewSet):
    serializer_class = ContentSerializer
    queryset = Content.objects.all()


class CompletedContentViewSet(viewsets.ModelViewSet):
    serializer_class = CompletedContentSerializer
    
    def perform_create(self, serializer):
        serializer.save(completed_by=self.request.user)
    
    def get_queryset(self):
        if self.request.user.is_staff:
            return queryset.all()
        return queryset.filter(completed_by=self.request.user)


class QuizViewSet(viewsets.ModelViewSet):
    serializer_class = QuizSerializer
    queryset = Quiz.objects.all()
    
    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class QuizScoreViewSet(viewsets.ModelViewSet):
    serializer_class = QuizScoreSerializer
    queryset = QuizScore.objects.all()

    def perform_create(self, serializer):
        serializer.save(signed_by=self.request.user)

    # def get_queryset(self):
    #     assert self.queryset is not None, (
    #         "'%s' should either include a `queryset` attribute, "
    #         "or override the `get_queryset()` method."
    #         % self.__class__.__name__
    #     )
    #     queryset = self.queryset
    #     if isinstance(queryset, QuerySet):
    #         # Ensure queryset is re-evaluated on each request.
    #         if self.request.user.is_staff:
    #             queryset = queryset.all()
    #         else:
    #             queryset = queryset.filter(created_by=self.request.user)
    #     return queryset

    # def perform_create(self, serializer):
    #     serializer.save(signed_by=self.request.user)


class QuestionTypesViewSet(viewsets.ModelViewSet):
    serializer_class = QuestionTypesSerializer
    queryset = QuestionTypes.objects.all().order_by('id')


class QuestionViewSet(viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()
    # filter_backends = [DjangoFilterBackend]
    # filterset_fields = ['user_role']

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

    def list(self, request, pk):
        queryset = Question.objects.filter(quiz=pk)
        serializer = QuestionSerializer(queryset, many=True)
        return Response(serializer.data)


class ChoiceViewSet(viewsets.ModelViewSet):
    serializer_class = ChoiceSerializer
    queryset = Choice.objects.all()


class TFAnswerViewSet(viewsets.ModelViewSet):
    serializer_class = TFAnswerSerializer
    queryset = TFAnswer.objects.all()

    def list(self, request, pk):
        queryset = TFAnswer.objects.filter(question__quiz=pk)
        serializer = TFAnswerSerializer(queryset, many=True)
        return Response(serializer.data)


class MCAnswerViewSet(viewsets.ModelViewSet):
    serializer_class = MCAnswerSerializer
    queryset = MCAnswer.objects.all()

    def list(self, request, pk):
        queryset = MCAnswer.objects.filter(question__quiz=pk)
        serializer = MCAnswerSerializer(queryset, many=True)
        return Response(serializer.data)

class SAAnswerViewSet(viewsets.ModelViewSet):
    serializer_class = SAAnswerSerializer
    queryset = SAAnswer.objects.all()

    def list(self, request, pk):
        queryset = SAAnswer.objects.filter(question__quiz=pk)
        serializer = SAAnswerSerializer(queryset, many=True)
        return Response(serializer.data)


class TFUserAnswerViewSet(viewsets.ModelViewSet):
    serializer_class = TFUserAnswerSerializer
    queryset = TFUserAnswer.objects.all()

    def list(self, request, pk):
        queryset = TFUserAnswer.objects.filter(quiz_score=pk)
        serializer = TFUserAnswerSerializer(queryset, many=True)
        return Response(serializer.data)

class MCUserAnswerViewSet(viewsets.ModelViewSet):
    serializer_class = MCUserAnswerSerializer
    queryset = MCUserAnswer.objects.all()

    def list(self, request, pk):
        queryset = MCUserAnswer.objects.filter(quiz_score=pk)
        serializer = MCUserAnswerSerializer(queryset, many=True)
        return Response(serializer.data)

class SAUserAnswerViewSet(viewsets.ModelViewSet):
    serializer_class = SAUserAnswerSerializer
    queryset = SAUserAnswer.objects.all()
    
    def list(self, request, pk):
        queryset = SAUserAnswer.objects.filter(quiz_score=pk)
        serializer = SAUserAnswerSerializer(queryset, many=True)
        return Response(serializer.data)
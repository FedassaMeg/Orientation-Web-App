from rest_framework import viewsets, status, mixins
from rest_framework.response import Response
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend

from .models import Quiz, QuizScore, Question, Choice, Answer, UserAnswer, Slide, CompletedSlide
from .serializers import QuizSerializer, QuizScoreSerializer, QuestionSerializer, ChoiceSerializer, AnswerSerializer, UserAnswerSerializer, SlideSerializer, CompletedSlideSerializer


class QuizViewSet(viewsets.ModelViewSet):
    serializer_class = QuizSerializer
    queryset = Quiz.objects.all().order_by('id')

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class QuizScoreUserViewSet(viewsets.ModelViewSet):
    serializer_class = QuizScoreSerializer
    queryset = QuizScore.objects.all().order_by('id')

    def perform_create(self, serializer):
        serializer.save(signed_by=self.request.user)

    def list(self, request, pk):
        queryset = QuizScore.objects.filter(signed_by=pk)
        serializer = QuizScoreSerializer(queryset, many=True)
        return Response(serializer.data)


class QuizScoreViewSet(viewsets.ModelViewSet):
    serializer_class = QuizScoreSerializer
    queryset = QuizScore.objects.all().order_by('id')

    def perform_create(self, serializer):
        serializer.save(signed_by=self.request.user)


class QuestionViewSet(viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all().order_by('id')
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
    queryset = Choice.objects.all().order_by('id')


class AnswerViewSet(viewsets.ModelViewSet):
    serializer_class = AnswerSerializer
    queryset = Answer.objects.all().order_by('id')

    def list(self, request, pk):
        queryset = Answer.objects.filter(question__quiz=pk)
        serializer = AnswerSerializer(queryset, many=True)
        return Response(serializer.data)


class UserAnswerViewSet(viewsets.ModelViewSet):
    serializer_class = UserAnswerSerializer
    queryset = UserAnswer.objects.all().order_by('id')

    def list(self, request, pk):
        queryset = UserAnswer.objects.filter(quiz_score=pk)
        serializer = UserAnswerSerializer(queryset, many=True)
        return Response(serializer.data)


class SlideViewSet(viewsets.ModelViewSet):
    serializer_class = SlideSerializer
    queryset = Slide.objects.all().order_by('id')


class CompletedSlideViewSet(viewsets.ModelViewSet):
    serializer_class = CompletedSlideSerializer
    queryset = CompletedSlide.objects.all().order_by('id')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def list(self, request, pk):
        queryset = CompletedSlide.objects.filter(user=pk)
        serializer = CompletedSlideSerializer(queryset, many=True)
        return Response(serializer.data)

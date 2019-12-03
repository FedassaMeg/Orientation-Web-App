from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend

from .models import Quiz, QuizScore, Question, Choice, Answer, Slide, CompletedSlide
from .serializers import QuizSerializer, QuizScoreSerializer, QuestionSerializer, ChoiceSerializer, AnswerSerializer, SlideSerializer, CompletedSlideSerializer


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

    def list(self, request, pk):
        queryset = QuizScore.objects.filter(signed_by=pk)
        serializer = QuizScoreSerializer(queryset, many=True)
        return Response(serializer.data)


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


class AnswerViewSet(viewsets.ModelViewSet):
    serializer_class = AnswerSerializer
    queryset = Answer.objects.all()

    def list(self, request, pk):
        queryset = Answer.objects.filter(question__quiz=pk)
        serializer = AnswerSerializer(queryset, many=True)
        return Response(serializer.data)


class SlideViewSet(viewsets.ModelViewSet):
    serializer_class = SlideSerializer
    queryset = Slide.objects.all()


class CompletedSlideViewSet(viewsets.ModelViewSet):
    serializer_class = CompletedSlideSerializer
    queryset = CompletedSlide.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def list(self, request, pk):
        queryset = CompletedSlide.objects.filter(user=pk)
        serializer = CompletedSlideSerializer(queryset, many=True)
        return Response(serializer.data)

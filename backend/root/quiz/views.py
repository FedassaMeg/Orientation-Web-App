from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend

from .models import Quiz, QuizType, Question, QuestionType, TFAnswer, MCAnswer, SAAnswer, QuizScore, Slide, CompletedSlides
from .serializers import QuizSerializer, QuizTypeSerializer, QuestionSerializer, QuestionTypeSerializer, TFAnswerSerializer, MCAnswerSerializer, SAAnswerSerializer, QuizScoreSerializer, SlideSerializer, CompletedSlidesSerializer


class QuizViewSet(viewsets.ModelViewSet):
    serializer_class = QuizSerializer
    queryset = Quiz.objects.all()


class QuizTypeViewSet(viewsets.ModelViewSet):
    serializer_class = QuizTypeSerializer
    queryset = QuizType.objects.all()


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

    def list(self, request, pk):
        queryset = Question.objects.filter(quiz=pk)
        serializer = QuestionSerializer(queryset, many=True)
        return Response(serializer.data)


class QuestionTypeViewSet(viewsets.ModelViewSet):
    serializer_class = QuestionTypeSerializer
    queryset = QuestionType.objects.all()

    def list(self, request, pk):
        queryset = QuestionType.objects.filter(question__quiz=pk)
        serializer = QuestionTypeSerializer(queryset, many=True)
        return Response(serializer.data)


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


class SlideViewSet(viewsets.ModelViewSet):
    serializer_class = SlideSerializer
    queryset = Slide.objects.all()


class CompletedSlidesViewSet(viewsets.ModelViewSet):
    serializer_class = CompletedSlidesSerializer
    queryset = CompletedSlides.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def list(self, request, pk):
        queryset = CompletedSlides.objects.filter(user=pk)
        serializer = CompletedSlidesSerializer(queryset, many=True)
        return Response(serializer.data)

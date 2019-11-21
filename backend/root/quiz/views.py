from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend

from .models import Quiz, Question, TFAnswer, MCAnswer, SAAnswer, QuizScore, Slide, LookUpTableSlideUser
from .serializers import QuizSerializer, QuestionSerializer, TFAnswerSerializer, MCAnswerSerializer, SAAnswerSerializer, QuizScoreSerializer, SlideSerializer, LookUpTableSlideUserSerializer


class SlideViewSet(viewsets.ModelViewSet):
    serializer_class = SlideSerializer
    queryset = Slide.objects.all()


class QuizViewSet(viewsets.ModelViewSet):
    serializer_class = QuizSerializer
    queryset = Quiz.objects.all()


class QuestionViewSet(viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()
    # filter_backends = [DjangoFilterBackend]
    # filterset_fields = ['user_role']

    def list(self, request, pk):
        queryset = Question.objects.filter(quiz=pk)
        serializer = QuestionSerializer(queryset, many=True)
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


class QuizScoreViewSet(viewsets.ModelViewSet):
    serializer_class = QuizScoreSerializer
    queryset = QuizScore.objects.all()

    def perform_create(self, serializer):
        serializer.save(signed_by=self.request.user)

    def list(self, request, pk):
        queryset = QuizScore.objects.filter(signed_by=pk)
        serializer = QuizScoreSerializer(queryset, many=True)
        return Response(serializer.data)


class LookUpTableSlideUserViewSet(viewsets.ModelViewSet):
    serializer_class = LookUpTableSlideUserSerializer
    queryset = LookUpTableSlideUser.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def list(self, request, pk):
        queryset = LookUpTableSlideUser.objects.filter(user=pk)
        serializer = LookUpTableSlideUserSerializer(queryset, many=True)
        return Response(serializer.data)

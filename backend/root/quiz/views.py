from rest_framework import viewsets, status #, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Quiz, Question, QuizScore, Slide, LookUpTableSlideUser
from .serializers import QuizSerializer, QuestionSerializer, QuizScoreSerializer, SlideSerializer, LookUpTableSlideUserSerializer


class SlideViewSet(viewsets.ModelViewSet):
    serializer_class = SlideSerializer
    queryset = Slide.objects.all()


class QuizViewSet(viewsets.ModelViewSet):
    serializer_class = QuizSerializer
    queryset = Quiz.objects.all()


class QuestionViewSet(viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()

    def list(self, request, pk):
        queryset = Question.objects.filter(quiz=pk)
        serializer = QuestionSerializer(queryset, many=True)
        return Response(serializer.data)


class QuizScoreViewSet(viewsets.ModelViewSet):
    serializer_class = QuizScoreSerializer
    queryset = QuizScore.objects.all()
    # permission_classes = [permissions.IsOwnerOrReadOnly]

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

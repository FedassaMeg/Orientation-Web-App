from django.contrib import admin
from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from rest_framework_simplejwt import views as jwt_views

from quiz.views import QuizViewSet, QuizScoreViewSet, QuizScoreUserViewSet, QuestionViewSet, ChoiceViewSet, AnswerViewSet, SlideViewSet, CompletedSlideViewSet
from users.views import UserViewSet, RoleViewSet

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('api/token/refresh/',
         jwt_views.TokenRefreshView.as_view(), name='token-refresh'),
    path('api/token/verify/',
         jwt_views.TokenVerifyView.as_view(), name='token-verify'),
    path('api/users/<int:pk>', UserViewSet.as_view({'get': 'retrieve'})),
    path('api/users/', UserViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('api/quizs/',
         QuizViewSet.as_view({'get': 'list', 'post': 'create', 'put': 'update'})),
    path('api/quizs/<int:pk>',
         QuizViewSet.as_view({'get': 'retrieve', 'post': 'create'})),
    path('api/slides/',
         SlideViewSet.as_view({'get': 'list', 'post': 'create', 'put': 'update'})),
    path('api/completedslides/',
         CompletedSlideViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('api/quizs/<int:pk>/questions',
         QuestionViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('api/scores/',
         QuizScoreViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('api/scores/<int:pk>',
         QuizScoreViewSet.as_view({'get': 'retrieve', 'post': 'create', 'put': 'update'})),
    path('api/users/<int:pk>/completedslides/',
         CompletedSlideViewSet.as_view({'get': 'list'})),
    path('api/users/<int:pk>/scores/',
         QuizScoreUserViewSet.as_view({'get': 'list'})),
    path('api/quizs/<int:pk>/answers',
         AnswerViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('api/answers/<int:pk>',
         AnswerViewSet.as_view({'get': 'retrieve', 'post': 'create'})),
    path('api/questions/',
         QuestionViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('api/roles/',
         RoleViewSet.as_view({'get': 'list', 'post': 'create'})),   


]

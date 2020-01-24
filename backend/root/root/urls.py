from django.contrib import admin
from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from rest_framework_simplejwt import views as jwt_views

from quiz.views import  ModulesViewSet, ContentTypesViewSet, ContentViewSet, CompletedContentViewSet, QuizViewSet, QuizScoreViewSet, QuestionTypesViewSet, QuestionViewSet, ChoiceViewSet, TFAnswerViewSet, MCAnswerViewSet, SAAnswerViewSet, TFUserAnswerViewSet, MCUserAnswerViewSet, SAUserAnswerViewSet
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
     path('api/content/',
          ContentViewSet.as_view({'get': 'list', 'post': 'create', 'put': 'update'})),
     path('api/completedcontent/',
          CompletedContentViewSet.as_view({'get': 'list', 'post': 'create'})),
     path('api/quizs/<int:pk>/questions',
          QuestionViewSet.as_view({'get': 'list', 'post': 'create'})),
     path('api/scores/',
          QuizScoreViewSet.as_view({'get': 'list', 'post': 'create'})),
     path('api/scores/<int:pk>',
          QuizScoreViewSet.as_view({'get': 'retrieve', 'post': 'create', 'put': 'update'})),
     path('api/users/<int:pk>/completedcontent/',
          CompletedContentViewSet.as_view({'get': 'list'})),
     path('api/users/<int:pk>/scores/',
          QuizScoreViewSet.as_view({'get': 'list'})),
     path('api/questions/',
          QuestionViewSet.as_view({'get': 'list', 'post': 'create'})),
     path('api/quizs/<int:pk>/tfanswers/',
          TFAnswerViewSet.as_view({'get': 'list'})),
     path('api/quizs/<int:pk>/mcanswers/',
          MCAnswerViewSet.as_view({'get': 'list'})),
     path('api/quizs/<int:pk>/saanswers/',
          SAAnswerViewSet.as_view({'get': 'list'})),
     path('api/roles/',
          RoleViewSet.as_view({'get': 'list', 'post': 'create'})),   

]

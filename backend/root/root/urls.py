from django.contrib import admin
from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from rest_framework_simplejwt import views as jwt_views

from quiz.views import QuizViewSet, QuestionViewSet, SlideViewSet, QuizScoreViewSet, LookUpTableSlideUserViewSet
from users.views import UserViewSet, CreateUserAPIView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('api/token/refresh/',
         jwt_views.TokenRefreshView.as_view(), name='token-refresh'),
    path('api/users/', CreateUserAPIView.as_view()),
    path('api/quizs/',
         QuizScoreViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('api/quizs/<int:pk>/questions/',
         QuestionViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('api/scores/',
         QuizScoreViewSet.as_view({'get': 'list', 'post': 'create'})),

]

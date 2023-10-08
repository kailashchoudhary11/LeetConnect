from django.urls import path
from .views import index, UserDetails, SolutionDetails

urlpatterns = [
  path("", index, name="index"),
  path("users/<str:username>", UserDetails.as_view()),
  path("solution/", SolutionDetails.as_view()),
]

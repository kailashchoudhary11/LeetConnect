from django.urls import path
from .views import index, UserDetails

urlpatterns = [
  path("", index, name="index"),
  path("user/<str:username>", UserDetails.as_view())
]

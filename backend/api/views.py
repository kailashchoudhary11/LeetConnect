from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .utils import request_data
from .queries import get_user_details_query

@api_view(["GET"])
def index(request):
  return Response("success")

class UserDetails(APIView):
  def get(self, request, username):
    query = get_user_details_query(username)

    response = request_data(request, query)
    print(response.text)
    if response.status_code == 200:
      res = response.json()

      if res.get("errors"):
        return Response({"error": "Invalid User!"})
      return Response(res)
    return Response({"error": "Invalid User!"})
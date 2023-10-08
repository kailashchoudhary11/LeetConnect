from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .utils import request_data
from .queries import get_user_details_query, get_user_solutions_by_problem_query

@api_view(["GET"])
def index(request):
  return Response("success")

class UserDetails(APIView):
  def get(self, request, username):
    query = get_user_details_query(username)
    response = request_data(query)

    if response.status_code == 200:
      res = response.json()

      if res.get("errors"):
        return Response({"error": "Invalid User!"})

      return Response(res.get("data"))

    return Response({"error": "Invalid User!"})

class SolutionDetails(APIView):
  def post(self, request):
    username = request.data.get("username")
    questionSlug = request.data.get("question-slug")

    query = get_user_solutions_by_problem_query(username,questionSlug,skip=0,first=15)
    response = request_data(query)

    if response.status_code == 200:
      res = response.json()
      data = res.get("data")
      totalCount = data.get("questionSolutions").get("totalNum")

      if totalCount == 0:
        return Response({"error": "Solution does not exist!"})
      
      return Response(data)

    return Response({"error": "Solution does not exist!"})
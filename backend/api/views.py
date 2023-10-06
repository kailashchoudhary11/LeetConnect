from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .utils import request_data

@api_view(["GET"])
def index(request):
  return Response("success")

class UserDetails(APIView):
  def get(self, request, username):
    print(username)
    query = f"""
      query {{
        matchedUser(username: "{username}") {{
          username
          profile {{
            userAvatar
            realName
          }}
        }}
      }}
    """

    response = request_data(request, query)
    print(response.text)
    if response.status_code == 200:
      res = response.json()

      if res.get("errors"):
        return Response({"error": "Invalid User!"})
      return Response(res)
    return Response({"error": "Invalid User!"})
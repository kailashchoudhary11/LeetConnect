import requests

URL = "https://leetcode.com/graphql/"

def get_csrf_token(client):
    client.get(URL)

    if "csrftoken" in client.cookies:
        csrftoken = client.cookies["csrftoken"]

    return csrftoken

def request_data(query):
  client = requests.session()
  csrftoken = get_csrf_token(client)
  headers = {
    "referer": "https://leetcode.com/graphql/",
    "X-CSRFToken": csrftoken,
  }

  response = client.post(url=URL, json={"query": query}, headers=headers)
  return response

def get_user_details_query(username):
  return f"""
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
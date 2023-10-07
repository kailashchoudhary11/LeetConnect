def get_user_solutions_query(username,skip=0,first=15):
    return f"""
        query {{
            userSolutionTopics(
                username: {username}
                skip: {skip}
                first: {first}
            ) {{
                pageInfo {{
                    hasNextPage
                }}
                edges {{
                    node {{
                        id
                        title
                        url
                        viewCount
                        questionTitle
                        post {{
                            creationDate
                            voteCount
                        }}
                    }}
                }}
            }}
        }}
    """
  
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
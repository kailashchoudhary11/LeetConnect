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

'''
"\n    query solutionArticleInformation($topicId: Int!) {\n  topic(id: $topicId) {\n    title\n    post {\n      author {\n        username\n      }\n    }\n  }\n}\n    "
"\n    query communitySolution($topicId: Int!) {\n  topic(id: $topicId) {\n    id\n    viewCount\n    topLevelCommentCount\n    subscribed\n    title\n    pinned\n    solutionTags {\n      name\n      slug\n    }\n    hideFromTrending\n    commentCount\n    isFavorite\n    post {\n      id\n      voteCount\n      voteStatus\n      content\n      updationDate\n      creationDate\n      status\n      isHidden\n      author {\n        isDiscussAdmin\n        isDiscussStaff\n        username\n        nameColor\n        activeBadge {\n          displayName\n          icon\n        }\n        profile {\n          userAvatar\n          reputation\n        }\n        isActive\n      }\n      authorIsModerator\n      isOwnPost\n    }\n  }\n}\n    "
'''


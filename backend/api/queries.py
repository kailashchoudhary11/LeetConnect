'''
"\n    query solutionArticleInformation($topicId: Int!) {\n  topic(id: $topicId) {\n    title\n    post {\n      author {\n        username\n      }\n    }\n  }\n}\n    "
"\n    query communitySolution($topicId: Int!) {\n  topic(id: $topicId) {\n    id\n    viewCount\n    topLevelCommentCount\n    subscribed\n    title\n    pinned\n    solutionTags {\n      name\n      slug\n    }\n    hideFromTrending\n    commentCount\n    isFavorite\n    post {\n      id\n      voteCount\n      voteStatus\n      content\n      updationDate\n      creationDate\n      status\n      isHidden\n      author {\n        isDiscussAdmin\n        isDiscussStaff\n        username\n        nameColor\n        activeBadge {\n          displayName\n          icon\n        }\n        profile {\n          userAvatar\n          reputation\n        }\n        isActive\n      }\n      authorIsModerator\n      isOwnPost\n    }\n  }\n}\n    "
'''

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


def get_user_solutions_by_problem_query(username,questionSlug,skip=0,first=15):
   return f"""
        query {{
            questionSolutions(
                filters: {{
                    questionSlug: "{questionSlug}"
                    skip: {skip}
                    first: {first}
                    query: "{username}"
                    languageTags: []
                    topicTags: []
                }}
            ) {{
                hasDirectResults
                totalNum
                solutions {{
                    id
                    title
                    commentCount
                    topLevelCommentCount
                    viewCount
                    pinned
                    isFavorite
                    solutionTags {{
                        name
                        slug
                    }}
                    post {{
                        id
                        voteCount
                        voteStatus
                        content
                        updationDate
                        creationDate
                        status
                        isHidden
                        author {{
                            isDiscussAdmin
                            isDiscussStaff
                            username
                            nameColor
                            activeBadge {{
                                displayName
                                icon
                            }}
                            profile {{
                                userAvatar
                                reputation
                            }}
                            isActive
                        }}
                        authorIsModerator
                        isOwnPost
                    }}
                    searchMeta {{
                        content
                        contentType
                        commentAuthor {{
                            username
                        }}
                        replyAuthor {{
                            username
                        }}
                        highlights
                    }}
                }}
            }}
        }}

   """
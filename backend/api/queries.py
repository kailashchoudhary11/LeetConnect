def get_user_solutions(username,skip=0,first=15):
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
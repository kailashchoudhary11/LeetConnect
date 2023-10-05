import UnFollowButton from "./UnFollowButton";

export default function FollowingList({ following, setFollowing }) {
  return (
    <div> {
      following.length > 0 ?
        <>
          <h3>You&apos;re following</h3>
          <ul>
            {
              following.map(user => (
                <li key={user}>
                  <span>
                    {user}
                  </span>
                  <UnFollowButton following={following} setFollowing={setFollowing} user={user} />
                </li>
              ))
            }
          </ul>
        </>
        :
        <h3>You&apos;re not following anyone!</h3>
    }
    </div>
  )
}

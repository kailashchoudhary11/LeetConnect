export default function FollowingList({following}) {
  return (
    <div>
      <h3>You&apos;re following</h3>
      <ul>
        {
          following.map(user => (<li key={user}>{user}</li>))
        }
      </ul>
    </div>
  )
}

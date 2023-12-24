import UnfollowButton from "./UnfollowButton";

export default function FollowingList({ following, setFollowing }) {
  return (
    <div className="p-5">
      {following.length > 0 ? (
        <div>
          <h3 className="text-xl font-bold mb-5">Following</h3>
          <ul className="list-disc list-inside">
            {following.map((user) => (
              <li key={user} className="flex items-center justify-between mb-2">
                <span className="font-bold text-base">@{user}</span>
                <UnfollowButton following={following} setFollowing={setFollowing} user={user} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h3>You&apos;re not following anyone!</h3>
      )}
    </div>
  );
}

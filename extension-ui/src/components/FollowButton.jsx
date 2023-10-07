/*global chrome*/

export default function FollowButton({user, following, setFollowing }) {

  async function handleFollow() {

    if (!following.includes(user.username)) {
      const updatedFollowing = [...following, user.username]
      setFollowing(updatedFollowing);
      await chrome.storage.local.set({ "following": JSON.stringify(updatedFollowing) });
    }
    else {
      alert("You already follow this user");
    }
  }
  return (
    <div>
      <div>
        <img src={user.profile.userAvatar} alt={user.username} />
        <span>{user.profile.realName}</span>
      </div>
      <button onClick={handleFollow}>
        Follow
      </button>
    </div>
  )
}

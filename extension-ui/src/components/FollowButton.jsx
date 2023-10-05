/*global chrome*/

export default function FollowButton({username, following, setFollowing }) {

  async function handleFollow() {

    if (!following.includes(username)) {
      const updatedFollowing = [...following, username]
      setFollowing(updatedFollowing);
      await chrome.storage.local.set({ "following": JSON.stringify(updatedFollowing) });
    }
    else {
      alert("You already follow this user");
    }
  }
  return (
    <div>
      <button onClick={handleFollow}>
        Follow {username}
      </button>
    </div>
  )
}

/*global chrome*/

export default function UnFollowButton({following, setFollowing, user}) {
  async function handleUnFollow() {
    const updatedFollowing = following.filter(usr => (usr != user));
    setFollowing(updatedFollowing);
    await chrome.storage.local.set({ "following": JSON.stringify(updatedFollowing) });
  }
  return (
    <button onClick={handleUnFollow}>Unfollow</button>
  )
}

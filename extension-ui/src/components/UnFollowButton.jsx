/*global chrome*/

export default function UnFollowButton({following, setFollowing, user}) {
  async function handleUnFollow() {
    const updatedFollowing = following.filter(usr => (usr != user));
    setFollowing(updatedFollowing);
    await chrome.storage.local.set({ "following": JSON.stringify(updatedFollowing) });
  }
  return (
    <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded-full" onClick={handleUnFollow}>Unfollow</button>
  )
}

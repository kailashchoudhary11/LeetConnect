/*global chrome*/

export default function FollowButton({ user, following, setFollowing }) {

  async function handleFollow() {
    try {
      if (!following.includes(user.username)) {
        const updatedFollowing = [...following, user.username];
        setFollowing(updatedFollowing);
        await chrome.storage.local.set({ "following": JSON.stringify(updatedFollowing) });
      } else {
        alert("You already follow this user");
      }
    } catch (error) {
      console.error("Error updating following:", error);
      // Handle the error, show a user-friendly message, or log it for debugging.
    }
  }

  const buttonLabel = following.includes(user.username) ? "Following" : "Follow";

  return (
    <div className="flex flex-col items-center">
      <img className="rounded-full w-16 h-16" src={user.profile.userAvatar} alt={user.username} />
      <span>{user.profile.realName}</span>
      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded-full ${following.includes(user.username) ? 'cursor-not-allowed opacity-50' : ''}`}
        onClick={handleFollow}
        disabled={following.includes(user.username)}
      >
        {buttonLabel}
      </button>
    </div>
  );
}

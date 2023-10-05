/*global chrome*/

export default function FollowButton({ following, setFollowing }) {

  function handleFollow() {

    chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {

      const curTabUrl = tabs[0].url;
      const urlObj = new URL(curTabUrl);
      const host = urlObj.hostname;

      if (host == "leetcode.com") {
        const path = urlObj.pathname;
        const regex = /^\/([^/]+)\/$/;
        const match = path.match(regex);

        if (match) {
          const username = match[1];
          if (!following.includes(username)) {
            const updatedFollowing = [...following, username]
            setFollowing(updatedFollowing);
            await chrome.storage.local.set({ "following": JSON.stringify(updatedFollowing) });
          }
        } else {
          alert("Please open a valid leetcode profile to follow");
        }

      } else {
        alert("Please open a valid leetcode profile");
      }
    });
  }
  return (
    <div>
      <button onClick={handleFollow}>
        Follow Now
      </button>
    </div>
  )
}

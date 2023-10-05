/*global chrome */

import { useEffect, useState } from "react";
import FollowButton from "./components/FollowButton";
import FollowingList from "./components/FollowingList";

function App() {

  const exclude = ["explore", "contest", "discuss", "interview", "assessment", "store", "subscribe"]

  const [following, setFollowing] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    async function updateFollowing() {
      const existingFollowing = await chrome.storage.local.get(["following"])
      const data = JSON.parse(existingFollowing.following);
      if (data) {
        setFollowing(data);
      }
    }
    updateFollowing();

    chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
      const curTabUrl = await tabs[0].url;
      const urlObj = new URL(curTabUrl);
      const host = urlObj.hostname;

      if (host == "leetcode.com") {
        const path = urlObj.pathname;
        const regex = /^\/([^/]+)\/$/;
        const match = path.match(regex);

        if (match) {
          if (!exclude.includes(match[1])) {
            setUsername(match[1]);
          }
        }
      }
    });

  }, []);

  return (
    <div>
      <h1>LeetConnect</h1>
      {username && <FollowButton username={username} following={following} setFollowing={setFollowing} />}
      <FollowingList following={following} setFollowing={setFollowing} />
    </div>);
}

export default App

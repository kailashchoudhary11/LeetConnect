/*global chrome */

import { useEffect, useState } from "react";
import FollowButton from "./components/FollowButton";
import FollowingList from "./components/FollowingList";
import axios from "axios";
import BASE_URL from "./utils/BASE_URL";

function App() {

  // const exclude = ["explore", "contest", "discuss", "interview", "assessment", "store", "subscribe"]

  const [following, setFollowing] = useState([]);
  const [user, setUser] = useState({});

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
          const uName = match[1];
          const res = await axios.get(`${BASE_URL}/api/users/${uName}`);
          if (!("error" in res.data)) {
            setUser(res.data.matchedUser);
          }
        }
      }
    });

  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center">LeetConnect</h1>
      {user?.username && <FollowButton user={user} following={following} setFollowing={setFollowing} />}
      <FollowingList following={following} setFollowing={setFollowing} />
    </div>);
}

export default App

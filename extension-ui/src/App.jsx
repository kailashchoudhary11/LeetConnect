/*global chrome */

import { useEffect, useState } from "react";
import FollowButton from "./components/FollowButton";
import FollowingList from "./components/FollowingList";

function App() {
  
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    async function updateFollowing() {
      const existingFollowing = await chrome.storage.local.get(["following"])
      const data = JSON.parse(existingFollowing.following);
      if (data) {
        setFollowing(data);
      }
    }  
    updateFollowing(); 
  }, []);

  return (
    <div>
      <h1>LeetConnect</h1>
      <FollowButton following={following} setFollowing={setFollowing} />
      <FollowingList following={following} />
    </div>);
}

export default App

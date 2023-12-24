/*global chrome */

import { useEffect, useState } from "react";
import FollowButton from "./components/FollowButton";
import FollowingList from "./components/FollowingList";
import axios from "axios";
import BASE_URL from "./utils/BASE_URL";

async function fetchUserData(urlObj) {
   const path = urlObj.pathname;
   const regex = /^\/([^/]+)\/$/;
   const match = path.match(regex);

   if (match) {
      const uName = match[1];
      try {
         const res = await axios.get(`${BASE_URL}/api/users/${uName}`);
         if (!("error" in res.data)) {
            return res.data.matchedUser;
         }
      } catch (error) {
         console.error("Error fetching user data:", error);
      }
   }
   return null;
}

function App() {
   const [following, setFollowing] = useState([]);
   const [user, setUser] = useState({});

   useEffect(() => {
      async function fetchData() {
         const existingFollowing = await chrome.storage.local.get(["following"]);
         const data = JSON.parse(existingFollowing.following);
         if (data) {
            setFollowing(data);
         }

         const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
         const curTabUrl = tabs[0]?.url;
         if (curTabUrl) {
            const urlObj = new URL(curTabUrl);
            const host = urlObj.hostname;

            if (host === "leetcode.com") {
               const userData = await fetchUserData(urlObj);
               if (userData) {
                  setUser(userData);
               }
            }
         }
      }

      fetchData();
   }, []);

   return (
      <div>
         <h1 className="text-3xl font-bold underline text-center">LeetConnect</h1>
         {user?.username && <FollowButton user={user} following={following} setFollowing={setFollowing} />}
         <FollowingList following={following} setFollowing={setFollowing} />
      </div>
   );
}

export default App;

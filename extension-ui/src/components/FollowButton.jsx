/*global chrome*/
import { useState } from "react";

export default function FollowButton() {

  const [currentTab, setCurrentTab] = useState("");

  function handleFollow() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const curTabUrl = tabs[0].url;
      const urlObj = new URL(curTabUrl);
      const host = urlObj.hostname;
      if (host == "leetcode.com") {
        const path = urlObj.pathname;
        const regex = /^\/([^/]+)\/$/;
        const match = path.match(regex);

        if (match) {
          const username = match[1];
          setCurrentTab(username);
        } else {
          alert("Invalid path");
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
      <p>The current tab is {currentTab}</p>
    </div>
  )
}

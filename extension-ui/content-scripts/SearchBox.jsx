import { useState } from "react";
import "./SearchBox.css";
import axios from "axios";

export default function SearchBox() {
  const [searchText, setSearchText] = useState("");
  async function searchSolution() {
    const userName = document.getElementsByClassName("text-label-3 dark:text-dark-label-3 text-xs")[0].textContent;
    const res = await axios.post("https://leet-connect.onrender.com/api/solution/", {userName: userName, questionSlug:searchText});
    console.log("Result is", res.data);
  }
  return (
    <div className="search-box-container">
      <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" className="search-box-input" placeholder="Search..." />
      <button onClick={searchSolution} className="search-icon">&#128269;</button>
    </div>
  )
}

import { useState } from "react";
import "./SearchBox.css";
import axios from "axios";
import { getSolutionHTML, getSlug } from "./utils";

export default function SearchBox() {
  const [searchText, setSearchText] = useState("");
  async function searchSolution() {
    if (searchText == "") return;

    const userName = document.getElementsByClassName("text-label-3 dark:text-dark-label-3 text-xs")[0].textContent;
    const questionSlug = getSlug(searchText);

    setSearchText("");

    const res = await axios.post("https://leet-connect.onrender.com/api/solution/", { username: userName, "question-slug": questionSlug });
    const data = res.data;

    const solution = data.questionSolutions.solutions[0];

    const container = document.getElementsByClassName("text-label-2 dark:text-dark-label-2 flex w-full items-center")[0].nextElementSibling;
    
    container.innerHTML = getSolutionHTML(searchText, solution);
  }
  return (
    <div className="search-box-container">
      <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" className="search-box-input" placeholder="Search..." />
      <button onClick={searchSolution} className="search-icon">&#128269;</button>
    </div>
  )
}

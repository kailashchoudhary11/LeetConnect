import "./SearchBox.css";

export default function SearchBox() {
  return (
    <div className="search-box-container">
      <input type="text" className="search-box-input" placeholder="Search..." />
      <button className="search-icon">&#128269;</button>
    </div>
  )
}

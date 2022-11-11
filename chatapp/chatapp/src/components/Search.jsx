import React from "react";
import img from "../../src/44.jpg";
function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="find someone" />
      </div>
      <div className="userChat">
        <img src={img} />
        <div className="userChatInfo">
          <span>Jane Addams</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
}

export default Search;

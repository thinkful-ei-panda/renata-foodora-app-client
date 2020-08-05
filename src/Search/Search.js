import React from "react";

const Search = (props) => {
  return (
    <div id="search">
      <form onSubmit={props.searchSubmitListener}>
        <input
          className="input"
          type="text"
          value={props.searchTerm}
          placeholder="Search"
          onChange={props.searchListener}
        />
        <br />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;

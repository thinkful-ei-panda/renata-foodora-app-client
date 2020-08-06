import React from "react";

const Search = (props) => {
  return (
    <div>
      <p>Click on the tags below to start you search:</p>
        <button
          className="button"
          type="submit"
          onClick={props.searchSubmitListener}
        >
        Search
        </button>
    </div>
  );
};

export default Search;

//TODO for the click?

// async click() {
//   const { inputTerm } = this.state;
//   const request = await fetch('/echo/json', {
//       headers: {
//           'Content-type': 'application/json'
//       },
//       method: 'GET',
//       body: { inputTerm }
//   });

// }

{/* <form>
<input
  className="input"
  type="text"
  value={props.searchTerm}
  placeholder="Search"
  onChange={props.searchListener}
/>
<button type='submit' onClick={props.searchSubmitListener}>Search</button>
</form> */}
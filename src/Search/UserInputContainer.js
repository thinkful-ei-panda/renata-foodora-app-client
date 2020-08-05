import React from 'react';
import InputSearch from './InputSearch';
import Search from './Search';
import Filter from './Filter';


const UserInputContainer = props => {
    return(
        <div id="user-input">
      <div>
        <InputSearch
          tags={props.tags}
          cancelSearchTag={props.cancelSearchTag}
          sortClickListener={props.sortClickListener}
          allFilterClickListener={props.allFilterClickListener}
        />
      </div>

      <div className="search-component">
        <Search
          searchTerm={props.searchTerm}
          searchListener={props.searchListener}
          searchSubmitListener={props.searchSubmitListener}
        />
      </div>
      <Filter allFilterClickListener={props.allFilterClickListener} />
    </div>
    )
}

export default UserInputContainer;
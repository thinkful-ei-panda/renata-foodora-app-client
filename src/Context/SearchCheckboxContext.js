import React from 'react';

const SearchCheckboxContext = React.createContext({
    tag: [],   
    error: null, 
    saveTag: () => {},
});

export default SearchCheckboxContext;

export class SearchCheckboxProvider extends React.Component{

    state = {
        tag: [],
        error: null,
    };

    saveTag = (tag) => {
        this.setState({ tag ,});
    };

    render(){
        const value = {
            tag: this.state.tag,
            error: this.state.error,
            saveTag: this.saveTag,
        };
        return(
            <SearchCheckboxProvider value={value}>
                {this.props.children}
            </SearchCheckboxProvider>
        );
    }
}
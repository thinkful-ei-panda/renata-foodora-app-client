import React from 'react';

const CheckboxContext = React.createContext({
    tags: [],   
    error: null, 
});

export default CheckboxContext;

export class CheckboxProvider extends React.Component{

    state = {
        tag: [],
        error: null,
    };

    saveTag = (tag) => {
        this.setState({ tag ,});
    };

    setError = (error) => {
        console.log(error);
        this.setState({ error });
    };

    clearError = () => {
        this.setState({ error: null });
    };

    render(){
        const value = {
            tag: this.state.tag,
            error: this.state.error,
            saveTag: this.saveTag,
            setError: this.setError,
            clearError: this.clearError,
        };
        return(
            <CheckboxProvider value={value}>
                {this.props.children}
            </CheckboxProvider>
        );
    }
}
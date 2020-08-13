import React from 'react';

const DishCheckboxContext = React.createContext({
    tags: [],   
    error: null, 
    saveTag: () => {},
    setError: () => {},
    clearError: () => {},
});

export default DishCheckboxContext;

export class DishCheckboxProvider extends React.Component{

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
            <DishCheckboxProvider value={value}>
                {this.props.children}
            </DishCheckboxProvider>
        );
    }
}
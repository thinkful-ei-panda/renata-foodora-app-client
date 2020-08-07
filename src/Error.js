import React from 'react';

class Error extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theError: false 
        };
    }

    static getStateFromError(error) { 
        return {theError: true};
    }

    render() {
        if (this.state.theError){
            return (
                <h2 className='AppError'>
                    Oops! Something went wrong. Please refresh the page or try again later.
                </h2>
            );
        }
        return this.props.children;
    }
}

export default Error;
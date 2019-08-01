import React from 'react';

class MyComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
        this.change = this.change.bind(this);
    }

    

    change() {
        this.setState(prevState => ({
            show: !prevState.show
        }));
    }

    render() {
        return (
            <div>
                <h2>Hello Shourya _/\_ </h2>
                <p>Let's do something interactive </p>
                <button onClick={this.change} > Click here! </button>
                {this.state.show ?
                    <p>Yo Yo Honey Singh! </p> : null}
            </div>
        )
    }
}

export default MyComponent;
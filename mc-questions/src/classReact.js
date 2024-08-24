import React, { Component } from 'react';

class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            batchType: 'Fullstack LLD'
        }
    }

    render() {
        return <>
            <h1>Hello, Class based {this.props.name} React</h1>
            <h3>Batch type: {this.state.batchType}</h3>
            <button onClick={() => this.setState({ count: this.state.count + 1, batchType: 'React LLD' })}>
                Increment count
            </button>
            <p>Current count: {this.state.count}</p>
        </>
    }
}

export default Welcome
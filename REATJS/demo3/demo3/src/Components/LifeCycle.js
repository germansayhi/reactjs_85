import React, { Component } from 'react';

class LifeCycle extends Component {
    // hàm render
    constructor(props) {
        super(props);
        console.log('LifeCycle ComponentDidMount');
        this.state = {
            message: "Hello"
        };
    }
    handleChangeStage = () => {
        this.setState({
            message: "Goodbye"
        });
    }
    render() {
        console.log('LifeCycle render');
        return (
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={this.handleChangeStage}>Change Message</button>
            </div>
        );

    }
    componentDidUpdate() {
        console.log('4.LifeCycle componentDidUpdate');
    }
    componentDidMount() {
        console.log('3.LifeCycle componentDidMount');
    }

    componentWillUnmount() {
        console.log('5.LifeCycle componentWillUnmount');
    }
}



export default LifeCycle;
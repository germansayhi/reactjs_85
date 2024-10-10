import React, { Component } from 'react';

class TopChildComponents extends Component {
    render() {
        let { dataTopChild } = this.props;
        console.log("TopChildComponents: ", this.props.dataTopChild);

        return (
            <div>
                <h3>This is Top Child Components</h3>
            </div>
        );
    }
}

export default TopChildComponents;
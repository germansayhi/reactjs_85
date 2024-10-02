import React, { Component } from "react";

class TopComponents extends Component {
    render() {
        let v_dataFromAppToTopProps = this.props.v_dataFromAppToTopProps;
        console.log("v_dataFromAppToTopProps" + v_dataFromAppToTopProps);
        return (
            <>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">Top Components</h3>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                        <input type="text" className="form-control"></input>
                                    </div>
                                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                                        <button type="button" className="btn btn-primary">
                                            Sent Data
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TopComponents;

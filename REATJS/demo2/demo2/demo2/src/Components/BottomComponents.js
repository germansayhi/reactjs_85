import React, { Component } from "react";

class BottomComponents extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="panel panel-warning">
                        <div className="panel-heading">
                            <h3 className="panel-title">Bottom Components</h3>
                        </div>
                        <div className="panel-body"></div>
                        <textarea className="form-control" rows="2" placeholder="Vui Lòng điền thông tin">
                        </textarea>
                    </div>
                </div>
            </div>
        );
    }
}
export default BottomComponents;

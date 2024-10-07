import React, { Component } from "react";

class TopComponents extends Component {
    // Contrutor là hàm được khai báo đầu tiên trong class Components
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         click_number: 0,
    //     };
    // }
    handleSenData = () => {
        let dataFromApp = ".....Dữ liệu từ Top xuống Bottom...";
        this.props.getDataFromTop(dataFromApp);
        // this.setState({
        //     click_number: this.state.click_number + 1,
        // });

    };
    render() {
        //Destructuring 
        let { dataFromAppToTopProps, x, y, headingTop } = this.props
        // console.log("v_dataFromAppToTopProps" + dataFromAppToTopProps);
        // console.log("x: " + x);
        // console.log("y: " + y);
        // console.log("headingTop: " + headingTop);


        return (
            <>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">{headingTop}</h3>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                                        <input type="text" className="form-control" /*</div>value={this.state.click_number}*/></input>
                                    </div>
                                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                                        <button type="button" className="btn btn-primary" onClick={this.handleSenData}>
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

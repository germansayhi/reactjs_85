import React, { Component } from "react";
import TopChildComponents from "./TopChildComponents";

class TopComponents extends Component {
    // Contrutor là hàm được khai báo đầu tiên trong class Components
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         click_number: 0,
    //     };
    // }
    constructor(props) {
        super(props);
        this.state = {
            data: "",
        };
    }
    handleSenData = () => {
        console.log("Bạn vừa nhập vào ô input dữ liệu là: ", this.state.data);

        let dataFromApp = ".....Dữ liệu từ Top xuống Bottom...";
        this.props.getDataFromTop(dataFromApp);
        // this.setState({
        //     click_number: this.state.click_number + 1,
        // });

    };
    // Khai bao ham handleChange 
    handleChange = (event) => {
        console.log("event: ", event.target.value);
        // event.target.value;
        this.setState({
            data: event.target.value,

        });
        // console.log("data", this.state.data);

    };
    render() {
        //Destructuring 
        let { dataFromAppToTopProps, x, y, headingTop, dataTopChild } = this.props
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
                                        <input
                                            type="text"
                                            className="form-control"
                                            /*</div>value={this.state.click_number}*/
                                            value={this.state.data}
                                            onChange={this.handleChange}
                                        ></input>
                                    </div>
                                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                        <button type="button" className="btn btn-primary" onClick={this.handleSenData}>
                                            Sent Data
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <TopChildComponents dataTopChild={dataTopChild} />
                </div>
            </>
        );
    }
}

export default TopComponents;

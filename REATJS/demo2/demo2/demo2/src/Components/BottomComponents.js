import React from "react";
function BottomComponents(props) {
    let { myClass, myName, headingBottom, data } = props;
    // console.log("myClass: ", myClass);
    // console.log("myName: ", myName);
    // console.log("headingBottom: ", headingBottom);
    console.log("data from bottom: ", data);


    props.getDataFromBottom("Bùi Quang Đức");
    return (
        <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">{headingBottom}</h3>
                    </div>
                    <div className="panel-body"></div>
                    <textarea className="form-control" rows="2" placeholder="Vui Lòng điền thông tin">
                    </textarea>
                </div>
            </div>
        </div>
    );
}

export default BottomComponents;

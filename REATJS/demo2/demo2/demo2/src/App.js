// import React from 'react';
// import './App.css';
// import TopComponents from './Components/TopComponents';
// import BottomComponents from './Components/BottomComponents';

// function App() {
//   let dataFromAppToTop = "data_app_to_top";
//   let headingTop = "Heading from App";
//   // khai báo hàm callback getDataFromTop
//   let getDataFromTop = (data_param) => {
//     console.log("......getDataFromTop....App");
//     console.log("data_param: " + data_param);
//   };
//   let getDataFromBottom = (data_param_Bottom) => {
//     console.log("data_param: " + data_param_Bottom);
//     v_data_from_bottom = data_param_Bottom;

//   };

//   return (
// <div className="App" >
//   <TopComponents dataAppToTopProps={dataFromAppToTop}
//     // x="BQD"
//     // y="TT"
//     headingTop={headingTop}
//     getDataFromTop={getDataFromTop}
//   />
//   <BottomComponents
//     myClass="Railway 85"
//     myName="BQD"
//     let headingBottom="-----Content-----"
//     getDataFromBottom={getDataFromBottom}


//   />
// </div >
//   );
// }

import React, { Component } from 'react';
import TopComponents from './Components/TopComponents';
import BottomComponents from './Components/BottomComponents';

class App extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }

  //
  dataFromAppToTop = "data_From_App_To_Top";
  student = {
    id: 1,
    name: "daonq1",
    class: "Railway85",
  };

  headingTop = "----- Component TOP  -----";
  // Khai báo hàm callback getDataFromTop
  getDataFromTop = (data_param_Top) => {
    //
    // console.log(".....getDataFromTop.... App");
    // console.log("data_param: ", data_param_Top);
    this.setState({
      data: data_param_Top,
    });
  };

  // Khai báo hàm callback getDataFromBottom
  getDataFromBottom = (data_param_Bottom) => {
    //
    // console.log("data_param_Bottom: ", data_param_Bottom);
  };

  //
  render() {
    let dataTopChild = "data_param_Top_Child";
    return (
      <div className="container">
        <TopComponents
          // dataFromAppToTopProps={this.dataFromAppToTop}
          // x="daonq"
          // y="VTI"
          student={this.student}
          headingTop={this.headingTop}
          getDataFromTop={this.getDataFromTop}
          dataTopChild={dataTopChild}
        />
        <BottomComponents
          myClass="Railway 85"
          myName="daonq"
          headingBottom="----- Component Bottom-------"
          getDataFromBottom={this.getDataFromBottom}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;



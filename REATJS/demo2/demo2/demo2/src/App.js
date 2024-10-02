import React from 'react';
import './App.css';
import TopComponents from './Components/TopComponents';
import BottomComponents from './Components/BottomComponents';

function App() {
  let dataFromAppToTop = "data_app_to_top";
  return (
    <div className="App" >
      <TopComponents dataAppToTopProps={dataFromAppToTop} />
      <BottomComponents />
    </div >
  );
}

export default App;

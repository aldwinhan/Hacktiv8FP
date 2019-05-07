import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store  from "./Redux/store";
import { BrowserRouter, withRouter } from "react-router-dom";
import SwitchMenu from './Component/SwitchMenu'

function App() {
  return (
    <Provider store={store}> 
      <BrowserRouter>
        <SwitchMenu/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

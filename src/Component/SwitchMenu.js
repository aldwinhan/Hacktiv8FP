import React from 'react';
import Login from './Login'
import Translate from './Translate'
import Listening from './Listening'
import { Route, Switch } from "react-router-dom";

class SwitchMenu extends React.Component{
    
    render(){
        
        return (
             <Switch>
             {/* <React.Fragment> */}
                <Route exact path="/" component={Login} />
                <Route path="/translate" component={Translate} />
                <Route path="/listening" component={Listening} />
            {/* </React.Fragment> */}
             </Switch>
        );
    }
}

export default (SwitchMenu);

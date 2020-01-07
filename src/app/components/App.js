import React from 'react';

import { Main } from '/Main'
import { User } from '/User'

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            username : "Max"
        }
    }

    onChageUsername(newName) {
        
        
    }
    render(){
        return(
            <div className="container">
                <Main changeUsername={this.onChageUsername.bind(this)}/>
                <hr/>
                <User username="Max"/>
            </div>
        );
    }
}

import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';


const Temp = () => {
    return (
        <div style={{width:100,height:100,background:'black'}}>
            
        </div>
    )
}




export default class Navigator extends Component {
 

    render(){
        return(
            <Switch>    
                <Route exact path='/' component={Home} />
                <Route exact path='/test' component={Temp} />
                <Redirect to='/'/>
            </Switch>
        )
    }
}




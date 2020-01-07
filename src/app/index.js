// import React from 'react';
// import {render} from 'react-dom';

// import { Main } from './components/Main'
// import { User } from './components/User'

// class App extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             username : "Max"
//         }
//     }

//     onChageUsername(newName) {
//         this.setState({
//             username : newName
//         })
//     }
//     render(){
//         return(
//             <div className="container">
//                 <Main changeUsername={this.onChageUsername.bind(this)}/>
//                 <hr/>
//                 <User username={this.state.username}/>
//             </div>
//         );
//     }
// }

// render(<App />, window.document.getElementById('app'));

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';


const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            // state.result += action.payload;
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            // state.lastValues.push(action.payload);
            break;
        case "SUBSTRACT":
            // state.result -= action.payload;
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            // state.lastValues.push(action.payload);
            break;
    }
    return state;
}

const userReducer = (state = {
    name: 'Max',
    age: 27
}, action) => {
    switch (action.type) {
        case "SET_NAMR":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
}

const myLogger = (store) => (next) =>(action) => {
    console.log('Logged Action ', action);
    next(action);
}

const store = createStore(combineReducers({mathReducer, userReducer}), {}, applyMiddleware(createLogger()));

store.subscribe(() => {
    // console.log('Store updated!', store.getState());
});

store.dispatch({
    type: "ADD",
    payload: 100
});
store.dispatch({
    type: "ADD",
    payload: 7
});
store.dispatch({
    type: "SUBSTRACT",
    payload: 44
});
store.dispatch({
    type: "SET_AGE",
    payload: 10
});
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {createStore} from 'redux'
import allReducers from './reducers';
import { Provider } from 'react-redux';
// import { Provider } from 'react-redux'


const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// STORE -> GLOBALIZED STATE

// ACTION INCREMENT
/* const increment = ()=>{
    return {
        type : 'INCREMENT'
    }
}

const decrement = ()=>{
    return {
        type : 'DECREMENT'
    }
}


let store = createStore(counter) */

// DISPLAY CONSOLE
// store.subscribe(()=>console.log(store.getState()))

// DISPATCH
/* store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(decrement()) */

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

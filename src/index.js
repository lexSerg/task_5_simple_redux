import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const initialState  = {
  productList : [
    {id : 1, name : 'Apple', price : 7.99},
    {id : 2, name : 'Tea', price : 4.99},
    {id : 3, name : 'Coffe', price : 12.35},
    {id : 4, name : 'Apple', price : 1.99},
    {id : 5, name : 'Meat', price : 15.99},
    {id : 6, name : 'Dog food', price : 5.99},
    {id : 7, name : 'Fish', price : 17.25},
  ],
  cart : [],
  wishList : []
}
const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_TO_CART' : {
      console.log(action);
      const updatedCart = [...state.cart];
      updatedCart.push(action.payload)
      return {...state, cart : updatedCart}
    }
    case 'REMOVE_FROM_CART' : {
      console.log(action);
      const updatedCart = state.cart.filter(item => item.id !== action.payload.id)
      return {...state, cart : updatedCart}
    };
    default : {
      console.log(action);
      return state
    }
  }
}
const store = createStore(reducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

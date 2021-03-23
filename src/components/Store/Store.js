import {createStore} from 'redux';
import initialState from './initialState'
const reducer = (state = initialState, action) => {
    switch(action.type){
      case 'ADD_TO_CART' : {
        let isAnimateCart = {is : true}
        const updatedCart = [...state.cart];
        updatedCart.push(action.payload);
        return {...state, cart : updatedCart, isAnimateCart : isAnimateCart}
      }
      case 'REMOVE_FROM_CART' : {
        let isAnimateCart = {is : false}
        const updatedCart = state.cart.filter(item => item.id !== action.payload.id)
        return {...state, cart : updatedCart, isAnimateCart : isAnimateCart }
      };
      default : {
        return state
      }
    }
};

const store = createStore(reducer);
export default store;
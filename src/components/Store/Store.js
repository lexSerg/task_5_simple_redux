import {createStore} from 'redux';
import initialState from './initialState'
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
};

const store = createStore(reducer);
export default store;
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import cart_logo from './img/cart.svg'
import { connect } from 'react-redux';
import Product from './components/Product'
function App(props) {
  const {productList, cart, addToCart, removeFromCart} = props;
  const cartToggleHandler = (item) => {
    console.log(item);
    if (!cart.find(el => el.id === item.id)) {
      addToCart(item)
    } 
    else {
      removeFromCart(item)
    }
  }
  return (
    <div className="App">
      <div className='cart'>
        <div className={'cart-content'.concat(!cart.length ? '' : ' animate') }>
          <div className='cart-img'>
            <img src={cart_logo} alt='cart'></img>
          </div>
          <div className='cart-text'>
            <p><span>{cart.length}</span></p>
            <p>items</p>
          </div>
        </div>

      </div>

      <div className='product-list'>
        {productList.map(product => 
          <Product 
            product={product} 
            key={product.id}
            cartToggleHandler={cartToggleHandler}
            >
          </Product>)}
      </div>

    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    productList : state.productList,
    cart : state.cart
  }
}
const addToCart = (item) => {
  return {
    type : 'ADD_TO_CART',
    payload : item
  }
}
const removeFromCart = (item) => {
  return {
    type : 'REMOVE_FROM_CART',
    payload : item
  }
}

export default connect(mapStateToProps, {addToCart,removeFromCart})(App);

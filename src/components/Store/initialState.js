const initialState  = {
    productList : [
      {id : 1, name : 'Apple', price : 7.99, isItemInCart : false},
      {id : 2, name : 'Tea', price : 4.99, isItemInCart : false},
      {id : 3, name : 'Coffe', price : 12.35, isItemInCart : false},
      {id : 4, name : 'Apple', price : 1.99, isItemInCart : false},
      {id : 5, name : 'Meat', price : 15.99, isItemInCart : false},
      {id : 6, name : 'Dog food', price : 5.99, isItemInCart : false},
      {id : 7, name : 'Fish', price : 17.25, isItemInCart : false},
    ],
    cart : [],
    wishList : [],
    isAnimateCart : {is : false}
}
export default initialState;
import { useState } from 'react'

const Product = ({product, cartToggleHandler}) => {
    const [cartBtnToogle, setCartBtnToogle] = useState(true)
    return (
        <div className='product-item product'>
            <div className='card-body'>
                <p>{product.name} - {product.price}</p>
                <button  
                        className='btn btn-primary'
                        onClick={() => {
                        setCartBtnToogle(!cartBtnToogle)
                        return cartToggleHandler(product)
                    }}
                    >{cartBtnToogle ? 'Add' : 'Remove'}
                </button>   
            </div>
        </div>
    )
}
export default Product
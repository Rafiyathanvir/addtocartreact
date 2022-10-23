function Cart({product,addtoCart,cartitem}){
return <div className='col-lg-4 border mt-2 p-2' id='size'>
    <div className='row'>
      <div className='col-lg-12'>
            <img src="https://pngimg.com/uploads/iphone_13/small/iphone_13_PNG27.png" ></img>
     </div>
     <div className='col-lg-12 right'>
      <h4>{product.name}</h4>
      <h6> Price Rs: {product.price}</h6>
      <button  disabled={cartitem.some(obj =>obj.id===product.id)} onClick={() =>{
        addtoCart(product)
      }} className='btn btn-sm btn-primary'>{
        cartitem.some(obj =>obj.id===product.id)?'added to cart':'add to cart'
      }</button>

      </div>
  </div>
  </div>

}
export default Cart;
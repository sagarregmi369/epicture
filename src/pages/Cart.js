import React from 'react'
import {Context} from '../Context'
import CartItem from '../components/CartItem'

const Cart = () => {
  const {cartImages, emptyCart}= React.useContext(Context)
  const [buttonText, setButtonText]=React.useState("Place Order")
  const cartElements= cartImages.map(image=>(
    <CartItem key={image.id} url={image.url} id={image.id}/>
  ))
  
  const totalPrice=()=>{
    const price=5.99 * cartImages.length
    return price.toLocaleString("en-Us", {style:"currency", currency:"EUR"})
  }

  const placeOrder=()=>{
    setButtonText("Ordering...")
    setTimeout(()=>{
      alert("Order placed!")
      setButtonText("Place Order")
      emptyCart()
    },3000)
  }

  return (
    <main className="cart-page">
        <h1>Cart</h1>
        {cartElements}
        <p className="total-cost">Total: {totalPrice()}</p>
        {cartImages.length>0?
          <div className="order-button">
            <button onClick={placeOrder}>{buttonText}</button>
          </div> :
          <p>No Items in Cart</p>
        }
    </main>
  )
}

export default Cart
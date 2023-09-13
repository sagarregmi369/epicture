import React from 'react'
import {Link} from "react-router-dom"
import {Context} from "../Context"

const Header = () => {
  const {cartImages}=React.useContext(Context);
  const alreadyInCart=cartImages.length>0?"ri-shopping-cart-fill":"ri-shopping-cart-line"
  return (
    <header>
        <Link to='/'><h2>Kinnu Images</h2></Link>
        <Link to='/cart'><i className={`${alreadyInCart} ri-fw ri-2x`}></i></Link>
    </header>
  )
}

export default Header
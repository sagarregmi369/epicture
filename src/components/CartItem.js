import React from 'react'
import {Context} from '../Context'
const CartItem=(props)=>{
    const [hovered, setHovered]=React.useState(false);
    const {removeFromCart}=React.useContext(Context);

    const iconClassName= hovered? "ri-delete-bin-fill" :"ri-delete-bin-line" 
    return(
        <div className="cart-item">
            <i 
                className={iconClassName}
                onClick={()=>removeFromCart(props.id)}
                onMouseEnter={()=>setHovered(true)}
                onMouseLeave={()=>setHovered(false)}>
            </i>
            <img src={props.url} width="130px" />
            <p>€5.99</p>
        </div>
    )
}
export default CartItem
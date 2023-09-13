import React from 'react'
import {Context} from '../Context'


const Images = (props) => {
    const [hovered, setHovered]=React.useState(false);
    const {toggle, addToCart, removeFromCart, cartImages}=React.useContext(Context);

    function heartIcon(){
      if(props.image.isFavorite){
        return <i className="ri-heart-fill favorite" onClick={()=> toggle(props.id)}></i>
      } else if(hovered){
        return <i onClick={()=>toggle(props.id)} className="ri-heart-line favorite"></i>
      }
    }
    function cartIcon(){
      const alreadyInCart= cartImages.find(image=> image.id === props.id)
      if(alreadyInCart){
        return <i className="ri-add-circle-fill cart" onClick={() => removeFromCart(props.id)}></i>
      } else if(hovered){
        return <i className="ri-add-circle-line cart" onClick={() => addToCart(props.image)}></i>
      }
    }
    
  return (
    <div className={`${props.className} image-container`} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
        <img src={props.src} className="image-grid"/>
        {heartIcon()}
        {cartIcon()}
    </div>
  )
}

export default Images
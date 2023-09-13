import React from "react"
import { json } from "react-router-dom";


const Context = React.createContext();

const ContextProvider = (props) => {
  const [photos,setPhotos]=React.useState([]);
  const [cartImages, setCartImages]=React.useState([]);
  const url="https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
  
  React.useEffect(()=>{
    const fetchData= async()=>{
      try{
        const response=await fetch(url);
        const json=await response.json();
        setPhotos(json)
        
      } catch (error){
        console.log(error);
      }
    }
  
    fetchData();
  }, [])

  const toggle=(id)=>{
    const updatedArray=photos.map(photo=>{
      if(photo.id === id){
        return {...photo, isFavorite: !photo.isFavorite}
      }
      return photo
    })
    setPhotos(updatedArray)
  }
  const addToCart=(newItem)=>{
    setCartImages(prevState=>[...prevState, newItem]);
  }

  const removeFromCart=(id)=>{
    setCartImages(prevState=>prevState.filter(item=> item.id !== id))
  }
  
  const emptyCart=()=> {
    setCartImages([])
  }
    
  return (
    <Context.Provider value={{photos, toggle, addToCart, removeFromCart,emptyCart, cartImages}}>{props.children}</Context.Provider>
  )
}

export {ContextProvider, Context}
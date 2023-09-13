import React from 'react'
import {Context} from '../Context'
import Images from '../components/Images'
import {getClass} from "../utils/getClass"

const Photos = () => {
  const {photos}=React.useContext(Context);
  console.log(photos);
  const allPhotos= photos.map((photo,i)=>{
    return (
      <Images key={photo.id} id={photo.id} src={photo.url} image={photo} className={getClass(i)} />
    )
  })

  return (
    <main className="photos">
        {allPhotos}
    </main>
  )
}

export default Photos
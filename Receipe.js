import React from 'react'

const Receipe=(props)=>{
  const {title,calories,image,ingredients}=props
  return(
    <div>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingreident=>(<li><ingreident.text/></li>))}
      </ol>
      <p>{calories}</p>
      <img src={image}/>
    </div>
  )
}

export default Receipe
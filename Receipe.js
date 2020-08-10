import React from 'react'
import style from './recipe.module.css'

const Receipe=(props)=>{
  const {title,calories,image,ingredients}=props
  return(
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingreident=>(<li>{ingreident.text}</li>))}
      </ol>
      <p>{calories}</p>
      <img src={image}/>
    </div>
  )
}

export default Receipe
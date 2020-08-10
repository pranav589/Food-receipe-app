import React from 'react'

const Receipe=(props)=>{
  const {title,calories,image,ingredients}=props
  return(
    <div className='mainRecipe'>
      <h1>{title}</h1>
      <br/>
      <ol>
        {ingredients.map(ingreident=>(<li>{ingreident.text}</li>))}
      </ol>
      <br/>
      <h3>Calories: {calories.toFixed(2)}</h3>
      <br/>
      <img src={image}/>
    </div>
  )
}

export default Receipe
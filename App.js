import React,{useEffect,useState} from 'react';
import Receipe from './Receipe'

const App=()=>{
  
   const APP_ID="d096eeca"
   const APP_KEY="056826603e59c4bee0910fff80d42d6c"
   const exampleReq=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
  
  const [receipes,setReceipes]=useState([])
  const [search,setSearch]=useState('')
  const [query,setQuery]=useState('')
  

   useEffect(()=>{
     getReceipe()
   },[query])

   const getReceipe=async ()=>{
     const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)

     const data=await response.json()
     setReceipes(data.hits)
     
   }

   const updateSearch=(e)=>{
     setSearch(e.target.value)
     
   }

   const getSearch=(e)=>{
     e.preventDefault()
     setQuery(search)
     setSearch('')
     console.log(search)
   }
  return(
     <div className='App'>
       <form onSubmit={getSearch} className="search-form">
         <input type='text' value={search} onChange={updateSearch}className='search-bar'/>
         <button type='submit' className='search-btn'>Search</button>
       </form>
       <h3 className='search'>Search for your favourite recipes</h3>
       <br/>
       <h3 className='search'>Your search matches with {receipes.length} recipes</h3>

       <div className='recipes'>
         {receipes.map(receipe=><Receipe title={receipe.recipe.label} calories={receipe.recipe.calories} image={receipe.recipe.image}
          ingredients={receipe.recipe.ingredients} key={receipe.recipe.title}/>)}
       </div>
       
     </div>
  )
}

export default App
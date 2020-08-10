import React,{useEffect,useState} from 'react';

const App=()=>{
  
   const APP_ID="d096eeca"
   const APP_KEY="056826603e59c4bee0910fff80d42d6c"
   const exampleReq=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
  
  

   useEffect(()=>{
     getReceipe()
   },[])

   const getReceipe=async ()=>{
     const response=await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)

     const data=await response.json()
     console.log(data)
   }
  return(
     <div className='App'>
       <form className="search-form">
         <input type='text' className='search-bar'/>
         <button type='submit' className='search-btn'>Search</button>
       </form>
     </div>
  )
}

export default App
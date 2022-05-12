import React from 'react'
import React, { useRef } from "react";
import {useState} from "react";

function SearchNews() {

const [articles, setArticles] = useState([]);
const [search, setSearch] = useState([]);
const inputRef = useRef();


  


  const searchNews = async (e)=>{
    setSearch(e.key)
  if(search === 'Enter'){
    await fetch(`https://newsapi.org/v2/everything?q=${inputRef.current.value}&apiKey=ac8165351ca14f20a473e28e7492c919`)
    .then(res=> res.json())
    .then(data=>{
      setArticles(data.articles)
    })
    
  
  }
  console.log(e.key)
  console.log(inputRef.current.value)
}

  return (
    
      <div className="news">

{

   articles.length !== 0 ? articles.map((news,index)=><SearchTemp key={index} data={news}/>):'no news found'

 }

</div> 
    
    
  )
}

export default SearchNews

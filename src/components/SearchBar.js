import React, { useRef, useState } from "react";
import SearchTemp from "./SearchTemp";
import "./newsitem.css"


function searchBar () {

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
    
    <div className='searchBar'>
      <div className="search">
        <input
        onChange={event => setSearch (event.target.value)}
        onKeyDown={searchNews}
        ref={inputRef}
        placeholder='Search News'
        type="text"
        
         />
      </div>
      {/* 
      <div>
     {articles.map(article=>{
          return(
              <Newsitem
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
               />
          )
      })}
     </div> 
     */}
           <div className="news">

{

   articles.length !== 0 ? articles.map((news,index)=><SearchTemp key={index} data={news}/>):''

 }

</div> 
    </div>
    
   
  )
}

export default searchBar
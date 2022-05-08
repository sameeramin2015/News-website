import React from 'react'
import "./newsitem.css"



const Newsitem = ({title, description, url, urlToImage}) => {
  
 
  return (
    <div id="container" >
           <div id="news-app">
            <div className='news-item'>
            <img className='news-img' src={urlToImage} alt={urlToImage}/>
            <h3><a className='urlLink' href={url} target="_blank">{title}</a></h3>
            <p className='news-desc'>{description}</p>
        </div>
    </div>
    </div>
  )
}

export default Newsitem

import React,{useState, useEffect} from 'react';
import "./newsitem.css"
import Newsitem from './Newsitem';
import useLocalStorage from "use-local-storage"

const NewsList =()=> {
  
  // useLocalStorage hook
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
  // change dark mode function
  const switchTheme = () =>{
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
 
  // useState hook   
  const [articles, setArticles] = useState([]);

    useEffect(()=>{
        const getArticles = async () =>{
            await fetch('https://newsapi.org/v2/everything?q=news&apiKey=014a047c244f461a9e29aa7f751a6f65')
            .then(res=> res.json())
            .then(data=>{
              setArticles(data.articles)
            })
            
        } 
        
        getArticles()
    }, [])
    
  return (
    
       <div className='container' data-theme={theme} >
      
      {/* 
     <div class="theme">
                <div>
                    <input  onClick={switchTheme} type="checkbox" class="checkbox" id="chk" />
                    <label class="label" for="chk">
                        <i class="fas fa-moon"></i>
                        <i class="fas fa-sun"></i>
                        <div class="ball"></div>
                    </label>
                </div>
                
      </div>
      */}

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
    
   
  )
}

export default NewsList
//ac8165351ca14f20a473e28e7492c919
//014a047c244f461a9e29aa7f751a6f65

//<div onClick={switchTheme} className='theme-toggle'>
//<i  class='fas fa-toggle-on'></i>
//</div>
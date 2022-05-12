import React from 'react'

const  SearchTemp = ({ data }) => {
    return (
        <div className="container" key={data.id}>
        <div id="news-app">
                <div className='news-item'>
                <img className='news-img' src={data.urlToImage} alt=""/>
                <h3><a className='urlLink' href={data.url} target="_blank">{data.title}</a></h3>
                <p className='news-desc'>{data.description}</p>
            </div>
        </div>
        </div>
      )
}
export default SearchTemp

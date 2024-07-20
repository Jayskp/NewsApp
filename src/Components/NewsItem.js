import React, {Component} from 'react'

export default class NewsItem extends Component{
    render(){
      
        let {title,description,imageUrl,newsUrl, author, date,source} = this.props
        return(
            <div className="card">
            <img src={imageUrl?imageUrl:"https://img.freepik.com/free-vector/newspaper-concept-illustration_114360-22666.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...<span className='badge rounded-pill bg-warning mx-1'>{source}</span></h5>
              <p className="card-text">{description}...</p>
              <p className='card-text'><small className='text-muted'>By {author} on {new Date(date).toGMTString()}</small></p>
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read more</a>
            </div>
          </div>
        )
    }
}
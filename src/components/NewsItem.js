import React, { Component } from 'react'

export class NewsItem extends Component { 
    render() {
        let {title, description,imgUrl,newsUrl} = this.props 
        return (
            <div className='container my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imgUrl?imgUrl:"https://source.unsplash.com/random/300×300/?news"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
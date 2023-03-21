import React, { Component } from 'react'
import PropType from 'prop-types' 
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class Newshead extends Component {
  static defaultProps = {
    country : 'in',
    pageSize : 9,
    category :"general"
  }
  static propTypes ={
    country : PropType.string,
    pageSize : PropType.number
  }
  constructor() {
    super();
    this.state = {
      articles : [],
      loading : false,
      page: 1
    }
  }
  async componentDidMount() {
    console.log("cdm")
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6030a5a1182041c584da8d7d925279f4&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata)
    this.setState({ articles: parsedata.articles,totalResults:parsedata.totalResults })
  }
  handleNext = async() =>{
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6030a5a1182041c584da8d7d925279f4&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true})
      let data = await fetch(url);
      let parsedata = await data.json();
      this.setState({ 
        articles: parsedata.articles,
        page : this.state.page + 1,
        loading : false
       })
      console.log(this.state.page)
  }
  handlePrevious = async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6030a5a1182041c584da8d7d925279f4&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ articles: parsedata.articles,page : this.state.page - 1 })
    console.log(this.state.page)

  }
  render() {
    return (
      <div className='container'>
        <h1>Headlines</h1>
        <div className='row my-3'>
          {this.state.loading && <Spinner></Spinner>}
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}><NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} ></NewsItem></div>
          })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button type="button" disabled={this.state.page <=1} className="btn btn-dark" onClick={this.handlePrevious}>&larr;previous</button>
          <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}className="btn btn-dark" onClick={this.handleNext}>Next&rarr;</button>
        </div>
      </div>
    )
  }
}

export default Newshead
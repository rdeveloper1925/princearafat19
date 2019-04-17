import React, { Component } from 'react';
import { render } from 'react-dom';
import './bootstrap.css';
import NavBar from './Navbar';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles:[],
      url:'https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=d34d2662b6c14fd9bc90399cb5ba8f33'
    };
  }

  componentDidMount(){
    axios.get(this.state.url)
    .then((response)=>{
      this.setState({articles:response.data.articles});
      console.log(response.data.articles);
    })
    .catch();
  }

  render() {
    let style={'width':'18rem'};
    let style2={'padding':'10px'};

   const business=()=>{
     this.setState({url:'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d34d2662b6c14fd9bc90399cb5ba8f33'});
  }


    const articles=this.state.articles.map((v,i)=>{
      return (
        <div className='row shadow-lg p-3 mb-5 bg-white rounded' style={style2}>
          <div className='col-md-4'>
            <img className="rounded" height='220px' width='350px' src={v.urlToImage}/>
          </div>
          <div className='col-md-8'>
            <h5>{v.title}</h5>
            <p>{v.description}</p>
            <p><b>{v.author}</b></p>
            <p>{v.source.name}</p>
            <p>{v.publishedAt}</p>
          </div>
        </div>
      );
    })
    return (
      <div>
      <NavBar 
      business={business} 
      sport={} 
      entertainment={} politics/>
        <div className="container">
        {articles}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

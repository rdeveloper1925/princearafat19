import React, { Component } from 'react';
import { render } from 'react-dom';
import './bootstrap.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles:[]
    };
  }

  componentDidMount(){
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d34d2662b6c14fd9bc90399cb5ba8f33')
    .then((response)=>{
      this.setState({articles:response.data.articles});
      console.log(response.data.articles);
    })
    .catch();
  }

  render() {
    let style={'width':'18rem'};

    const articles=this.state.articles.map((v,i)=>{
      return (
        <div className="card" id={i} style={style}>
          <img className="card-img-top" src={v.urlToImage} alt="Image Loading"/>
          <div className="card-body">
            <h5 className="card-title">{v.author}</h5>
            <h6 className="card-title">{v.title}</h6>
            <p className="card-text">{v.description}</p>
            <a href={v.url} className="btn btn-primary btn-sm">Read More</a><br/>
            <small><b>{v.source.name}</b></small>
          </div>
        </div>
      );
    })
    return (
      <div>
        //{articles}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

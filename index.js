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
      sport:'https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=d34d2662b6c14fd9bc90399cb5ba8f33',
      entertainment:'https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=d34d2662b6c14fd9bc90399cb5ba8f33',
      politics:'https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=d34d2662b6c14fd9bc90399cb5ba8f33',
      technology:'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=d34d2662b6c14fd9bc90399cb5ba8f33',
      science:'https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=d34d2662b6c14fd9bc90399cb5ba8f33',
      status: 'Select a Topic'
    };
    this.sport=this.sport.bind(this);
    this.entertainment=this.entertainment.bind(this);
  }


  sport=()=>{
    this.setState({status:'Loading Sports Articles...'});
     axios.get(this.state.sport)
    .then((response)=>{
      this.setState({articles:response.data.articles});
      this.setState({status:'Sports Articles Retrieved!'});
    })
    .catch((e)=>{
      this.setState({status:'An Error Occured '.e});
    });
  }

  entertainment=()=>{
    this.setState({status:'Loading Entertainment Articles...'});
     axios.get(this.state.entertainment)
    .then((response)=>{
      this.setState({articles:response.data.articles});
      this.setState({status:'Entertainment Articles Retrieved!'});
    })
    .catch((e)=>{
      this.setState({status:'An Error Occured '.e});
    });
  }

  technology=()=>{
    this.setState({status:'Loading Technology Articles...'});
     axios.get(this.state.technology)
    .then((response)=>{
      this.setState({articles:response.data.articles});
      this.setState({status:'Technology Articles Retrieved!'});
    })
    .catch((e)=>{
      this.setState({status:'An Error Occured '.e});
    });
  }

  politics=()=>{
    this.setState({status:'Loading Politics Articles...'});
     axios.get(this.state.politics)
    .then((response)=>{
      this.setState({articles:response.data.articles});
      this.setState({status:'Politics Articles Retrieved!'});
    })
    .catch((e)=>{
      this.setState({status:'An Error Occured '.e});
    });
  }

  science=()=>{
    this.setState({status:'Loading Science Articles...'});
     axios.get(this.state.science)
    .then((response)=>{
      this.setState({articles:response.data.articles});
      this.setState({status:'Science Articles Retrieved!'});
    })
    .catch((e)=>{
      this.setState({status:'An Error Occured '.e});
    });
  }

  render() {
    let style={'width':'18rem'};
    let style2={'padding':'10px'};
    

    const articles=this.state.articles.map((v,i)=>{
      return (
        <div className='row shadow-lg p-3 mb-5 bg-white rounded' id={i} style={style2}>
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
    });

    return (
      <div>
      <NavBar/>
        <div className="container">
          <div className="row">
            <div className='col-md-2' style={style2}>
              <button onClick={this.entertainment} className='btn col-md-12 btn-primary btn-sm'>Entertainment</button>
            </div>
            <div className='col-md-2' style={style2}>
              <button onClick={this.sport} className='btn col-md-12 btn-primary btn-sm'>Sports</button>
            </div>
            <div className='col-md-2' style={style2}>
              <button onClick={this.technology} className='btn col-md-12 btn-primary btn-sm'>Technology</button>
            </div>
            <div className='col-md-2' style={style2}>
              <button onClick={this.politics} className='btn col-md-12 btn-primary btn-sm'>Politics</button>
            </div>
            <div className='col-md-2' style={style2}>
              <button onClick={this.science} className='btn col-md-12 btn-primary btn-sm'>Science</button>
            </div>
          </div>
          {this.state.status}
          {articles}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

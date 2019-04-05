import React, { Component } from 'react';
import './App.css';
import Places from './components/Places.jsx';
import SearchForm from './components/SearchForm.jsx';
import Footer from './components/Footer.jsx';
import {climbingPlaces, routes} from './data/climbing-data.js';



class App extends Component {

  constructor(){
    super() 

    this.state = {
      places: null,
      routes: null,
      results: []
    }
  }

  componentDidMount = async () => {
    await fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/lboyer4/routes')
    .then(res => res.json())
    .then(json => this.setState({ routes: json.routes }))

    await fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/lboyer4/climbingPlaces')
    .then(res => res.json())
    .then(json => this.setState({ places: json.climbingPlaces }))
  }

  submitSearch = query => {
    this.setState({ results: this.state.places.map( currentPlace => { 
        currentPlace.routes = this.state.routes.filter( route => {
          return route.climbingPlaceId === currentPlace.climbingId;
        });
        return currentPlace;
      })
    })

    const results = this.state.places.filter(r => {
      return r.place.toLowerCase().includes(query.toLowerCase());
    })
    this.setState({ results: results });
  }
  

  render() {
    return (
      <div className="App">
        <header>
        <SearchForm submitSearch={this.submitSearch}/>
        </header>
        <Places places={this.state.results} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

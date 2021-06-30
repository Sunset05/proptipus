import React from "react";
import "./Proptipus.css";
import ProptipusBackground from "../images/Proptipus.png";
import ProptipusLogo from "../images/ProptipusLogo.png";

// This is the state being imported in for cleanliness
import ProptipusState from "./ProptipusState"


import TentacleOne from "./Tentacles/TentacleOne";
import TentacleTwo from "./Tentacles/TentacleTwo";
import TentacleThree from "./Tentacles/TentacleThree";
import TentacleFour from "./Tentacles/TentacleFour";
import TentacleFive from "./Tentacles/TentacleFive";
import TentacleSix from "./Tentacles/TentacleSixth.js";
import TentacleSeven from "./Tentacles/TentacleSeven";
import TentacleEight from "./Tentacles/TentacleEight";

class Proptipus extends React.Component {
  state = ProptipusState

  // This is where you will be writing most of your functions!
  increment = () => {
    this.setState({
      magicNumber: this.state.magicNumber + 1
    })
  }

  decrement = () => {
    this.setState({
      magicNumber: this.state.magicNumber -1
    })
  }

  showToggle = (event) => {
    let { checked, value } = event.target
    console.log(checked)
    console.log(value)
    if(value === 'show'){
      this.setState({showMovies: true})
    } else {
      this.setState({showMovies: false})
    }
  }

  setMoviesFilter = (event) => {
    console.log(event.target.value)
    this.setState({moviesFilter: event.target.value})
  }

  filterMovies = ()=> {
    //return an array of movies
    if(this.state.moviesFilter === 'All'){
      return this.state.favoriteMovies
    } else{
      let movies = this.state.favoriteMovies.filter( movie => {
        return movie.genre === this.state.moviesFilter
      }) 
      return movies
    }
  }



  render() {
    return (
      <div className="proptipus">
        <img className="logo" src={ProptipusLogo} alt="logo" />
        <img
          className="proptipus-image"
          src={ProptipusBackground}
          alt="background"
        />
        <TentacleOne punchline={this.state.punchline}/>
        <TentacleTwo fishGiOhCard={this.state.favoriteFishGiOhCard}/>
        <TentacleThree fishGiOhCard={this.state.hatedFishGiOhCard}/>
        <TentacleFour friendsList={this.state.friendsList}/>
        <TentacleFive 
        incrementButton={this.increment}
        decrementButton={this.decrement}
        magicNumber={this.state.magicNumber}
        />
        <TentacleSix magicNumber={this.state.magicNumber}/>
        <TentacleSeven 
        toggleMovies={this.state.showMovies}
        changeMoviesFilter={this.state.moviesFilter}
        showToggle={this.showToggle}
        setMoviesFilter={this.setMoviesFilter}
        />
        <TentacleEight 
        moviesList={this.filterMovies()}
        toggleMovies={this.state.showMovies}
        />
      </div>
    );
  }
}

export default Proptipus;

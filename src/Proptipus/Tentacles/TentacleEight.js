import React from "react";

class TentacleEight extends React.Component {
  
  render() {
    return (
      <div className="tentacle-eight">
        {this.props.toggleMovies ? 
        this.props.moviesList.map(movie => {
          return (
            <span className="movie-card">
              <span className="movie-title">{movie.title}</span>
              <br />
              <span className="movie-genre">{movie.genre}</span>
              <br />
              <span className="movie-review">{movie.review}</span>
              <br />

            </span>
          )
        }) 
        : null}        
      </div>
    );
  }
}

export default TentacleEight;

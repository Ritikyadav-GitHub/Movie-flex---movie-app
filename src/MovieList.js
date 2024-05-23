import React from "react";
import MovieCard from "./Moviecard";


class MovieList extends React.Component {
  

  render() {
    const { movies, addStars, decStars, toggleFav, toggleCart } = this.props;
    //const {title,plot,price,rating,stars,fav,cart,poster} = this.state.movies

    return (
      <>
        
        {movies.map((movie) => (
          <MovieCard
            movies={movie}
            addStars={addStars}
            decStars={decStars}
            toggleFav={toggleFav}
            toggleCart={toggleCart}
            key={movie.id}
          />
        ))}
      </>
    );
  }
}

export default MovieList;

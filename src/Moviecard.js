function MovieCard(props) {
  // addStars = () => {
  // form 1
  // this.setState({
  //     stars: this.state.stars +0.5
  // });
  // this.state.stars += 0.5
  // console.log("this.state.stars", this.state.stars);

  // form2
  //   if (this.state.stars >= 5) {
  //     return;
  //   }
  //   this.setState((prevState) => {
  //     return {
  //       stars: prevState.stars + 0.5,
  //     };
  //   });
  // };

  // //

  // decStars = () => {
  //   // form2
  //   if (this.state.stars <= 0) {
  //     return;
  //   }
  //   this.setState((prevState) => {
  //     return {
  //       stars: prevState.stars - 0.5,
  //     };
  //   });
  // };

  // handleFav = () => {
  //   this.setState({
  //     fav: !this.state.fav,
  //   });
  // };
  // handlecart = () => {
  //   this.setState({
  //     cart: !this.state.cart,
  //   });
  // };

  const { movies: data } = props;
  const { title, plot, price, rating, stars, fav, cart, poster } = data;

  return (
    <div className="main">
      <div className="movie-card">
        <div className="left">
          <img alt="poster" src={poster} />
        </div>
        <div className="right">
          <div className="title"> {title}</div>
          <div className="plot">{plot}</div>
          <div className="price"> {price}</div>
          <div className="footer">
            <div className="rating">{rating}</div>
            <div className="star-dis">
              <img
                className="str-btn"
                alt="decrease"
                src="https://cdn-icons-png.flaticon.com/128/1828/1828899.png"
                onClick={() => {
                  props.decStars(props.movies);
                }}
              />

              <img
                alt="star"
                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                className="stars"
              />

              <img
                className="str-btn"
                alt="increase"
                src=" https://cdn-icons-png.flaticon.com/128/1828/1828919.png"
                onClick={() => {
                  props.addStars(props.movies);
                }}
              />

              <span>{stars}</span>
            </div>
            {fav ? (
              <button
                className="unfavourite-btn"
                onClick={() => {
                  props.toggleFav(props.movies);
                }}
              >
                un-favorite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={() => {
                  props.toggleFav(props.movies);
                }}
              >
                favorite
              </button>
            )}

            {cart ? (
              <button
                className="remove-btn"
                onClick={() => {
                  props.toggleCart(props.movies);
                }}
              >
                remove from cart
              </button>
            ) : (
              <button
                className="cart-btn"
                onClick={() => {
                  props.toggleCart(props.movies);
                }}
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;

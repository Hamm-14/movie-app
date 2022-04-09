import React from 'react';

import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies, showAllMovies, showFavouriteMovies} from '../actions';


class App extends React.Component {

  // constructor(){
  //   super();
  //   this.showFavourites = false;
  // }
  
  componentDidMount() {
    const {store} = this.props;
    //make api call
    //dispatch action

    store.subscribe(() => {
      console.log('Updated');
      this.forceUpdate();
    });

    // console.log('state before mount',store.getState());

    store.dispatch(addMovies(data));

    // console.log('state after mount',store.getState());
  }

  isMovieFavourite = (movie) => {
    const {favourites} = this.props.store.getState();

    const index = favourites.indexOf(movie);

    if(index !== -1){
      return true;
    }
    return false;
  }

  handleAllMovies = () => {
    const {store} = this.props;
    store.dispatch(showAllMovies());
  }

  handleFavouriteMovies = () => {
    const {store} = this.props;
    store.dispatch(showFavouriteMovies());
  }

  render() {
    const {list,favourites,showFavourites} = this.props.store.getState();
    const moviesList = showFavourites ? favourites : list;
    // console.log(showFavourites);
    console.log('from render',this.props.store.getState());
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={this.handleAllMovies}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={this.handleFavouriteMovies}>Favourites</div>
          </div>
          <div className="list">
            {moviesList.map((movie,index) => (
              <MovieCard   
                movie={movie} 
                key={`movies-${index}`} 
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
                />
            ))}
          </div>
          {moviesList.length === 0 ? <div className='no-movies'>No Movies To Display!</div>: null}
        </div>
      </div>
    );
  }
}

export default App;

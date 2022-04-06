import React from 'react';

import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import addMovies from '../actions';


class App extends React.Component {
  
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

  render() {
    const movies = this.props.store.getState();
    // console.log('from render',this.props.store.getState());
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {movies.map((movie,index) => (
              <MovieCard movie={movie} key={`movies-${index}`}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';

import { addToMovies, handleMovieSearch } from '../actions';

class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      showSearchResults: true,
      searchText: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value
    });
  };

  handleSearch = () => {
    const {searchText} = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  }

  handleAddToMovies = (movie) => {
    this.props.dispatch(addToMovies(movie));
  }

    render(){
      const {result} = this.props;
      const showSearchResult = this.props.showSearchResult;
        return (
            <div className="nav">
              <div className='search-container'>
                <input onChange={this.handleChange}/>
                <button id="search-btn" onClick={this.handleSearch}>Search</button>
              {showSearchResult && 
                <div className='search-results'>
                  <div className='search-result'>
                    <img src={result.Poster} alt='search-pic' />
                    <div className='movie-info'>
                      <span>{result.Title}</span>
                      <button onClick={() => this.handleAddToMovies(result)}>Add To Movies</button>
                    </div>
                  </div>
                </div>
              } 
              </div>
            </div>
        )
    }
}

export default Navbar;

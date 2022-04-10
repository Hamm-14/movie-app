import React from 'react';
import { StoreContext } from '..';

import { addToMovies, handleMovieSearch } from '../actions';

class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
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
    const {store} = this.props;
    store.dispatch(handleMovieSearch(searchText));
  }

  handleAddToMovies = (movie) => {
    const {store} = this.props;
    store.dispatch(addToMovies(movie));
  }

    render(){
      const {store} = this.props;
      const result = store.getState().search.result;
      const showSearchResult = store.getState().search.showSearchResult;
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

class NavbarWrapper extends React.Component{
  render() {
    return(
      <StoreContext.Consumer>
        {(store) => <Navbar store={store}/>}
      </StoreContext.Consumer>
    )
  }
}

export default NavbarWrapper;

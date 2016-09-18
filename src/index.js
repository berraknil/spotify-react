import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search';
import * as Api from './components/Api';

class SpotifyApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
      loading: true,
      error: null
    };

     this.handleSearch = this.handleSearch.bind(this);
     this.renderResponse = this.renderResponse.bind(this);
  }

  handleSearch(query) {
      Api.fetch(query, this.renderResponse);
  }

  renderResponse(data) {
      this.setState({
        albums: data.albums.items
      });
  }

  render() {
    return (
      <div>
            <Search handleSearch={this.handleSearch} />
            <ul>{this.state.albums.map(album =>
            <li className="list" key={album.id}>
                <h2><a href={album.external_urls.spotify}>{album.name}</a></h2>
                <img src={album.images[1].url} alt={album.name} />
            </li>
           )}
        </ul>

      </div>
    );
  }
}

// Change the subreddit to anything you like
ReactDOM.render(
  <SpotifyApp />,
  document.getElementById('root')
);

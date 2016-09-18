import React from 'react';
import Search from './components/Search';
import * as Api from './components/Api';
import logo from './logo.png';

class App extends React.Component {
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
      <div className="wrapper">
            <header className="header">

            <img className="logo" src={logo} alt="Spotify Logo"/>
              <h1 className="title">Spotify Search</h1>
            <Search handleSearch={this.handleSearch} />
            </header>


              <main className="content">

                <ul className="list">{this.state.albums.map(album =>
                    <li key={album.id}>
                      <h3 className="album-name">{album.name}</h3>
                      <a href={album.external_urls.spotify} target="_blank">
                        <img src={album.images[1].url} alt={album.name}/></a>
            </li>
           )}
        </ul>
        </main>
      </div>
    );
  }
}

export default App;

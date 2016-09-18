import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        query: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
      this.setState({
          query: event.target.value
      });
  }

  handleSubmit(event) {
      event.preventDefault();
      let query = this.state.query.trim(); // Remove whitespace at the beginning and end.
      if (!query) { // If no search term was typed, return early and do nothing.
          return;
      }
      this.props.handleSearch(query); // Execute callback
      //this.setState({ query: '' });
  }



  render() {
    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit}>
              <input className="search-text"
                       type="text" placeholder="Search for Music"
                       onChange={this.handleInputChange}
                      value={this.state.query}/>
                    <button className="search-button" type="submit">Search</button>
            </form>
      </div>);
  }
}


Search.propTypes = {
    handleSearch: React.PropTypes.func.isRequired,
};

export default Search;

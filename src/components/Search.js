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

              <form onSubmit={this.handleSubmit}>

                <input className="search-box-text"
                       type="text" placeholder="Search for Artist"
                       onChange={this.handleInputChange}
                      value={this.state.query}/>
                  <input type="submit" />
            </form>
            <h2>{this.state.query}</h2>
      </div>);
  }
}


Search.propTypes = {
    handleSearch: React.PropTypes.func.isRequired,
};

export default Search;

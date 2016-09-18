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
      let query = this.state.query.trim();
      if (!query) {
          return;
      }
      this.props.handleSearch(query);
  }



  render() {
    return (
         <div>
            <form className="search-form" onSubmit={this.handleSubmit} role="search">
               <input className="search-text"
                       type="text" placeholder="find music"
                       onChange={this.handleInputChange}
                      value={this.state.query}/>
                <button className="search-button" type="submit">GO!</button>
            </form>
      </div>);
  }
}


Search.propTypes = {
    handleSearch: React.PropTypes.func.isRequired,
};

export default Search;

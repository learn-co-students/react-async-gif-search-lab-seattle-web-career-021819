import React from 'react';

class GifSearch extends React.Component {

  state = {
    search: ""
  }

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.fetchGifs(this.state.search)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.search}
            onChange={ev => this.setState({
              search: ev.target.value
            })} />
        </form>
      </div>
    )
  }
}

export default GifSearch

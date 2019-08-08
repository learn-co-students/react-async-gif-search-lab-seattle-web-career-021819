import React, { Component } from "react";

class GifListContainer extends Component {
  state = {
    gifs: []
  };

  addGifs = data => {
    this.setState({
      gifs: data.map(gif => ({ url: gif.images.original.url }))
    });
  };

  componentDidMount() {
    fetch(
      "http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g"
    )
      .then(resp => resp.json())
      .then(data => this.addGifs(data));
  }

  render() {
    return <div />;
  }
}

export default GifListContainer;
